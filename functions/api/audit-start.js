const HUBSPOT_PORTAL_ID = "244175001";
const HUBSPOT_FORM_ID = "9c28365a-82d7-47e2-b9b2-5aa0b258efdf";
const HUBSPOT_SUBMIT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

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
    if (cookieName === name) {
      return decodeURIComponent(valueParts.join("="));
    }
  }

  return "";
}

function buildPageUri(utms) {
  const pageUrl = new URL("https://thompsoncollective.co/audit");

  if (!utms || typeof utms !== "object" || Array.isArray(utms)) {
    return pageUrl.toString();
  }

  for (const key of UTM_KEYS) {
    const value = typeof utms[key] === "string" ? utms[key].trim() : "";
    if (value) {
      pageUrl.searchParams.set(key, value.slice(0, 500));
    }
  }

  return pageUrl.toString();
}

export async function onRequestPost({ request }) {
  try {
    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.includes("application/json")) {
      return jsonResponse({ error: "Unsupported request format." }, 415);
    }

    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ error: "Enter a valid work email." }, 400);
    }

    const hubspotContext = {
      pageName: "Talent Maturity Audit – Thompson & Co Collective",
      pageUri: buildPageUri(body.utms),
    };
    const hubspotCookie = getCookie(request, "hubspotutk");
    const visitorIp = request.headers.get("CF-Connecting-IP") || "";

    if (hubspotCookie) {
      hubspotContext.hutk = hubspotCookie;
    }

    if (visitorIp) {
      hubspotContext.ipAddress = visitorIp;
    }

    const hubspotResponse = await fetch(HUBSPOT_SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        submittedAt: String(Date.now()),
        fields: [{ objectTypeId: "0-1", name: "email", value: email }],
        context: hubspotContext,
      }),
    });

    if (!hubspotResponse.ok) {
      console.error("HubSpot audit-start submission failed", {
        status: hubspotResponse.status,
      });
      return jsonResponse({ error: "The audit could not be started." }, 502);
    }

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error("Audit-start handler failed", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return jsonResponse({ error: "The audit could not be started." }, 500);
  }
}

export function onRequest() {
  return jsonResponse({ error: "Method not allowed." }, 405);
}
