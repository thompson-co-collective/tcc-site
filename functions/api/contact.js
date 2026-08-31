const HUBSPOT_PORTAL_ID = "244175001";
const HUBSPOT_FORM_ID = "01b8a813-169f-4b61-835a-5b556228bbb4";
const HUBSPOT_SUBMIT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
const HUBSPOT_TIMEOUT_MS = 8000;
const CONTACT_ACCEPTANCE_COOKIE = "tcc_contact_accepted";

const SERVICE_NEEDS = new Set([
  "funnel-conversion",
  "candidate-experience",
  "employer-brand",
  "recruitment-marketing",
  "ai-governance",
  "vendor-governance",
  "not-sure",
]);

const LATEST_ATTRIBUTION_FIELDS = [
  { cookie: "tcc_attr_latest_source", property: "tcc_latest_utm_source" },
  { cookie: "tcc_attr_latest_medium", property: "tcc_latest_utm_medium" },
  { cookie: "tcc_attr_latest_campaign", property: "tcc_latest_utm_campaign" },
];

function jsonResponse(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...extraHeaders,
    },
  });
}

function acceptanceCookie(accepted) {
  return `${CONTACT_ACCEPTANCE_COOKIE}=${accepted ? "1" : ""}; Path=/; Max-Age=${accepted ? "60" : "0"}; SameSite=Lax; Secure`;
}

function parseName(fullName) {
  const parts = fullName.trim().split(/\s+/);

  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }

  return {
    firstName: parts.slice(0, -1).join(" "),
    lastName: parts.at(-1),
  };
}

function getCookie(request, name) {
  const cookies = request.headers.get("Cookie") || "";

  for (const cookie of cookies.split(";")) {
    const [cookieName, ...valueParts] = cookie.trim().split("=");
    if (cookieName === name) {
      try {
        return decodeURIComponent(valueParts.join("="));
      } catch {
        return "";
      }
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

export async function onRequestPost({ request }) {
  try {
    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.includes("application/json")) {
      return jsonResponse(
        { ok: false, accepted: false, outcome: "invalid_request", error: "Unsupported request format." },
        415,
        { "Set-Cookie": acceptanceCookie(false) }
      );
    }

    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const needHelp = typeof body.needHelp === "string" ? body.needHelp.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const website = typeof body.website === "string" ? body.website.trim() : "";

    // Honeypot: keep the response neutral to automated submitters, but never mark it accepted.
    if (website) {
      return jsonResponse(
        { ok: true, accepted: false, outcome: "filtered" },
        200,
        { "Set-Cookie": acceptanceCookie(false) }
      );
    }

    if (
      !name ||
      name.length > 150 ||
      !email ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !company ||
      company.length > 200 ||
      !SERVICE_NEEDS.has(needHelp) ||
      message.length > 4000
    ) {
      return jsonResponse(
        { ok: false, accepted: false, outcome: "invalid_request", error: "Please check the form fields and try again." },
        400,
        { "Set-Cookie": acceptanceCookie(false) }
      );
    }

    const { firstName, lastName } = parseName(name);
    const fields = [
      { objectTypeId: "0-1", name: "firstname", value: firstName },
      { objectTypeId: "0-1", name: "email", value: email },
      { objectTypeId: "0-2", name: "name", value: company },
      { objectTypeId: "0-1", name: "service_need", value: needHelp },
    ];

    if (lastName) {
      fields.push({ objectTypeId: "0-1", name: "lastname", value: lastName });
    }

    if (message) {
      fields.push({ objectTypeId: "0-1", name: "message", value: message });
    }

    // Write only latest custom attribution here. Custom first-touch fields require a true
    // conditional write mechanism so returning contacts can never overwrite first touch.
    appendLatestAttributionFields(request, fields);

    const hubspotContext = {
      pageName: "Contact – Thompson & Co Collective",
      pageUri: "https://thompsoncollective.co/contact",
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
      console.error("HubSpot form submission failed", {
        status: hubspotResponse.status,
      });

      const outcome = hubspotResponse.status === 429 ? "rate_limited" : "upstream_rejected";
      const status = hubspotResponse.status === 429 ? 503 : 502;

      return jsonResponse(
        { ok: false, accepted: false, outcome, error: "The form could not be submitted." },
        status,
        { "Set-Cookie": acceptanceCookie(false) }
      );
    }

    return jsonResponse(
      { ok: true, accepted: true, outcome: "accepted" },
      200,
      { "Set-Cookie": acceptanceCookie(true) }
    );
  } catch (error) {
    const isTimeout = error instanceof Error && error.name === "AbortError";

    console.error("Contact form handler failed", {
      errorType: isTimeout ? "timeout" : "handler_error",
    });

    return jsonResponse(
      {
        ok: false,
        accepted: false,
        outcome: isTimeout ? "timeout" : "upstream_unavailable",
        error: "The form could not be submitted.",
      },
      503,
      { "Set-Cookie": acceptanceCookie(false) }
    );
  }
}

export function onRequest() {
  return jsonResponse(
    { ok: false, accepted: false, outcome: "method_not_allowed", error: "Method not allowed." },
    405,
    { "Set-Cookie": acceptanceCookie(false) }
  );
}
