const HUBSPOT_PORTAL_ID = "244175001";
const HUBSPOT_FORM_ID = "f6b76910-d408-4fba-b6a6-cf17b1f845e6";
const HUBSPOT_SUBMIT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
const HUBSPOT_TIMEOUT_MS = 8000;

const LATEST_ATTRIBUTION_FIELDS = [
  { cookie: "tcc_attr_latest_source", property: "tcc_latest_utm_source" },
  { cookie: "tcc_attr_latest_medium", property: "tcc_latest_utm_medium" },
  { cookie: "tcc_attr_latest_campaign", property: "tcc_latest_utm_campaign" },
];

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
  const cookies = request.headers.get("Cookie") || "";

  for (const cookie of cookies.split(";")) {
    const [cookieName, ...valueParts] = cookie.trim().split("=");
    if (cookieName !== name) continue;

    try {
      return decodeURIComponent(valueParts.join("="));
    } catch {
      return "";
    }
  }

  return "";
}

function sanitizeAttribution(value) {
  if (typeof value !== "string") return "";

  const cleaned = value
    .trim()
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .slice(0, 160);

  if (!cleaned || cleaned.includes("@")) return "";
  return cleaned;
}

function appendLatestAttributionFields(request, fields) {
  for (const mapping of LATEST_ATTRIBUTION_FIELDS) {
    const value = sanitizeAttribution(getCookie(request, mapping.cookie));
    if (!value) continue;

    fields.push({
      objectTypeId: "0-1",
      name: mapping.property,
      value,
    });
  }
}

function deriveBand(score) {
  if (score <= 7) return { label: "Nascent", internalValue: "nascent" };
  if (score <= 14) return { label: "Developing", internalValue: "developing" };
  if (score <= 20) return { label: "Aligned", internalValue: "aligned" };
  return { label: "Optimized", internalValue: "optimized" };
}

export async function onRequestPost({ request }) {
  try {
    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.includes("application/json")) {
      return jsonResponse(
        {
          ok: false,
          accepted: false,
          outcome: "invalid_request",
          error: "Unsupported request format.",
        },
        415
      );
    }

    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const score = Number(body.score);

    if (
      !email ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !Number.isInteger(score) ||
      score < 0 ||
      score > 26
    ) {
      return jsonResponse(
        {
          ok: false,
          accepted: false,
          outcome: "invalid_request",
          error: "Please check the audit results and try again.",
        },
        400
      );
    }

    // Server-side derivation is authoritative. The browser-provided band is not trusted.
    const band = deriveBand(score);
    const fields = [
      { objectTypeId: "0-1", name: "email", value: email },
      { objectTypeId: "0-1", name: "audit_score", value: String(score) },
      {
        objectTypeId: "0-1",
        name: "audit_maturity_band",
        value: band.internalValue,
      },
    ];

    appendLatestAttributionFields(request, fields);

    const hubspotContext = {
      pageName: "Talent Maturity Audit – Thompson & Co Collective",
      pageUri: "https://thompsoncollective.co/audit",
    };
    const hubspotCookie = getCookie(request, "hubspotutk");
    const visitorIp = request.headers.get("CF-Connecting-IP") || "";

    if (hubspotCookie) {
      hubspotContext.hutk = hubspotCookie;
    }

    if (visitorIp) {
      hubspotContext.ipAddress = visitorIp;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), HUBSPOT_TIMEOUT_MS);
    let hubspotResponse;

    try {
      hubspotResponse = await fetch(HUBSPOT_SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submittedAt: String(Date.now()),
          fields,
          context: hubspotContext,
        }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }

    if (!hubspotResponse.ok) {
      console.error("HubSpot audit results submission failed", {
        status: hubspotResponse.status,
      });

      const outcome = hubspotResponse.status === 429 ? "rate_limited" : "upstream_rejected";
      const status = hubspotResponse.status === 429 ? 503 : 502;

      return jsonResponse(
        {
          ok: false,
          accepted: false,
          outcome,
          error: "The audit results could not be submitted.",
        },
        status
      );
    }

    // CRM acceptance and email fulfillment are intentionally separate states.
    // Results delivery can be fulfilled by the HubSpot workflow tied to the canonical form.
    return jsonResponse(
      {
        ok: true,
        accepted: true,
        outcome: "accepted",
        audit_score: score,
        maturity_band: band.label,
        fulfillment: "pending_verification",
      },
      200
    );
  } catch (error) {
    const isTimeout = error instanceof Error && error.name === "AbortError";

    console.error("Audit results handler failed", {
      errorType: isTimeout ? "timeout" : "handler_error",
    });

    return jsonResponse(
      {
        ok: false,
        accepted: false,
        outcome: isTimeout ? "timeout" : "upstream_unavailable",
        error: "The audit results could not be submitted.",
      },
      503
    );
  }
}

export function onRequest() {
  return jsonResponse(
    {
      ok: false,
      accepted: false,
      outcome: "method_not_allowed",
      error: "Method not allowed.",
    },
    405
  );
}
