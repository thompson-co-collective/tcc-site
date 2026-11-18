const HUBSPOT_PORTAL_ID = "244175001";
const VALID_BANDS = new Map([
  ["Nascent", "nascent"],
  ["Developing", "developing"],
  ["Aligned", "aligned"],
  ["Optimized", "optimized"],
]);

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function getCookie(request, name) {
  for (const entry of (request.headers.get("Cookie") || "").split(";")) {
    const [key, ...parts] = entry.trim().split("=");
    if (key === name) return decodeURIComponent(parts.join("="));
  }
  return "";
}

export async function onRequestPost({ request, env }) {
  try {
    if (!(request.headers.get("Content-Type") || "").includes("application/json")) {
      return jsonResponse({ error: "Unsupported request format." }, 415);
    }

    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const score = body.score;
    const band = VALID_BANDS.get(body.band);
    const website = typeof body.website === "string" ? body.website.trim() : "";

    // Optional honeypot; invisible to legitimate visitors.
    if (website) return jsonResponse({ ok: true });

    if (
      !email ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !Number.isInteger(score) ||
      score < 0 ||
      score > 26 ||
      !band ||
      (score <= 7 ? band !== "nascent" :
        score <= 14 ? band !== "developing" :
        score <= 20 ? band !== "aligned" : band !== "optimized")
    ) {
      return jsonResponse({ error: "Please check your email and audit results." }, 400);
    }

    const formId = env?.HUBSPOT_AUDIT_EMAIL_FORM_GUID;
    if (!formId || !/^[a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}$/i.test(formId)) {
      console.error("Audit results form ID is not configured");
      return jsonResponse({ error: "Results delivery is temporarily unavailable." }, 503);
    }

    const context = {
      pageName: "Talent Maturity Audit – Thompson & Co Collective",
      pageUri: "https://thompsoncollective.co/audit",
    };
    const hutk = getCookie(request, "hubspotutk");
    const ipAddress = request.headers.get("CF-Connecting-IP") || "";
    if (hutk) context.hutk = hutk;
    if (ipAddress) context.ipAddress = ipAddress;

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submittedAt: String(Date.now()),
          fields: [
            { objectTypeId: "0-1", name: "email", value: email },
            { objectTypeId: "0-1", name: "audit_score", value: String(score) },
            { objectTypeId: "0-1", name: "audit_maturity_band", value: band },
          ],
          context,
        }),
      },
    );

    if (!response.ok) {
      let diagnostics = {};
      try {
        const data = await response.json();
        diagnostics = {
          errors: Array.isArray(data.errors)
            ? data.errors.map((e) => ({
                errorType: e.errorType || null,
                fieldName: e.fieldName || e.name || null,
                detail: e.errorType === "REQUIRED_FIELD"
                  ? String(e.message || "").slice(0, 250)
                  : null,
              }))
            : [],
        };
      } catch {
        diagnostics = { parseError: true };
      }
      console.error("HubSpot audit form submission failed", {
        status: response.status,
        ...diagnostics,
      });
      return jsonResponse({ error: "Results could not be submitted." }, 502);
    }

    console.log("HubSpot audit form accepted", { status: response.status });
    return jsonResponse({ ok: true });
  } catch (error) {
    console.error("Audit results handler failed", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return jsonResponse({ error: "Results could not be submitted." }, 500);
  }
}

export function onRequest() {
  return jsonResponse({ error: "Method not allowed." }, 405);
}
