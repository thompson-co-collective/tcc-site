const HUBSPOT_PORTAL_ID = "244175001";
const HUBSPOT_FORM_ID = "01b8a813-169f-4b61-835a-5b556228bbb4";
const HUBSPOT_SUBMIT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

const SERVICE_NEEDS = new Set([
  "funnel-conversion",
  "candidate-experience",
  "employer-brand",
  "recruitment-marketing",
  "ai-governance",
  "vendor-governance",
  "not-sure",
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
      return decodeURIComponent(valueParts.join("="));
    }
  }

  return "";
}

export async function onRequestPost({ request }) {
  try {
    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.includes("application/json")) {
      return jsonResponse({ error: "Unsupported request format." }, 415);
    }

    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const needHelp = typeof body.needHelp === "string" ? body.needHelp.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const website = typeof body.website === "string" ? body.website.trim() : "";

    // Honeypot: legitimate visitors never see or fill this field.
    if (website) {
      return jsonResponse({ ok: true });
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
      return jsonResponse({ error: "Please check the form fields and try again." }, 400);
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

    const hubspotResponse = await fetch(HUBSPOT_SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        submittedAt: String(Date.now()),
        fields,
        context: hubspotContext,
      }),
    });

    if (!hubspotResponse.ok) {
      console.error("HubSpot form submission failed", {
        status: hubspotResponse.status,
      });
      return jsonResponse({ error: "The form could not be submitted." }, 502);
    }

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error("Contact form handler failed", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return jsonResponse({ error: "The form could not be submitted." }, 500);
  }
}

export function onRequest() {
  return jsonResponse({ error: "Method not allowed." }, 405);
}
