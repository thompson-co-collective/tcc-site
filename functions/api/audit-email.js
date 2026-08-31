const HUBSPOT_PORTAL_ID = "244175001";
const HUBSPOT_FORM_ID = "f6b76910-d408-4fba-b6a6-cf17b1f845e6";
const HUBSPOT_SUBMIT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
const HUBSPOT_TIMEOUT_MS = 8000;

const RESEND_SEND_URL = "https://api.resend.com/emails";
const RESEND_TIMEOUT_MS = 8000;
const EMAIL_FROM = "Thompson & Co Collective <results@insights.thompsoncollective.co>";
const EMAIL_REPLY_TO = "hello@thompsoncollective.co";
const SITE_URL = "https://thompsoncollective.co";

const LATEST_ATTRIBUTION_FIELDS = [
  { cookie: "tcc_attr_latest_source", property: "tcc_latest_utm_source" },
  { cookie: "tcc_attr_latest_medium", property: "tcc_latest_utm_medium" },
  { cookie: "tcc_attr_latest_campaign", property: "tcc_latest_utm_campaign" },
];

const BAND_COPY = {
  Nascent: {
    summary:
      "Your talent attraction system is still largely informal, so outcomes may depend too heavily on individual effort rather than a repeatable operating model.",
    nextStep:
      "Start by defining one priority hiring outcome, the proof behind your talent story, and the small set of measures you will review consistently.",
  },
  Developing: {
    summary:
      "Core pieces are in place, but consistency, governance, and accountability are still uneven across the talent attraction system.",
    nextStep:
      "Standardize the highest-impact process across teams, assign clear ownership, and establish a simple review cadence tied to measurable outcomes.",
  },
  Aligned: {
    summary:
      "You have a coherent foundation. The next opportunity is disciplined optimization across message, experience, channel performance, and measurement.",
    nextStep:
      "Identify the largest cross-functional constraint and turn it into a focused 30-day optimization plan with a clear owner and review date.",
  },
  Optimized: {
    summary:
      "Governance and measurement are established. Your next opportunity is resilience, scale, and long-term defensibility as channels and AI-shaped discovery evolve.",
    nextStep:
      "Pressure-test the system for data quality, narrative consistency, AI visibility, operating resilience, and executive decision usefulness.",
  },
};

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

function buildEmailText(score, band) {
  const copy = BAND_COPY[band.label];

  return `Your Talent Maturity Audit results\n\nYour baseline: ${band.label}\nScore: ${score} / 26\n\nWhat this signals\n${copy.summary}\n\nBest next move\n${copy.nextStep}\n\nYour score is a baseline, not a verdict. It is intended to help you decide what to strengthen next across employer brand, recruitment marketing, candidate experience, governance, and measurement.\n\nIf you want help interpreting the result, reply to this email or visit ${SITE_URL}/contact.\n\nThompson & Co Collective\n${SITE_URL}\n${EMAIL_REPLY_TO}\n\nThis operational email was sent because you requested a copy of your Talent Maturity Audit results.`;
}

function buildEmailHtml(score, band) {
  const copy = BAND_COPY[band.label];

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background:#eef3f4;color:#23313a;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#eef3f4;">
      <tr>
        <td align="center" style="padding:32px 12px;">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:600px;max-width:100%;background:#ffffff;border-collapse:separate;border-spacing:0;">
            <tr>
              <td style="padding:28px 36px;background:#0a1220;color:#ffffff;font-family:Georgia,'Times New Roman',serif;font-size:21px;">
                Thompson &amp; Co Collective
              </td>
            </tr>
            <tr>
              <td style="padding:38px 36px 12px;">
                <div style="font-size:12px;font-weight:700;letter-spacing:1.4px;color:#117c92;margin-bottom:12px;">TALENT MATURITY AUDIT</div>
                <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:34px;line-height:1.15;font-weight:400;color:#0a1220;">Your baseline is ${band.label}.</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 36px 26px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f4f8f8;border:1px solid #d9e2e5;">
                  <tr>
                    <td style="padding:20px 22px;width:42%;">
                      <div style="font-size:11px;font-weight:700;letter-spacing:1px;color:#60717a;margin-bottom:6px;">SCORE</div>
                      <div style="font-family:Georgia,'Times New Roman',serif;font-size:30px;color:#0a1220;">${score}<span style="font-size:16px;color:#60717a;"> / 26</span></div>
                    </td>
                    <td style="padding:20px 22px;border-left:1px solid #d9e2e5;">
                      <div style="font-size:11px;font-weight:700;letter-spacing:1px;color:#60717a;margin-bottom:6px;">MATURITY BAND</div>
                      <div style="font-family:Georgia,'Times New Roman',serif;font-size:24px;color:#117c92;">${band.label}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 36px 24px;font-size:15px;line-height:1.65;color:#43535d;">
                <div style="font-size:11px;font-weight:700;letter-spacing:1px;color:#117c92;margin-bottom:8px;">WHAT THIS SIGNALS</div>
                ${copy.summary}
              </td>
            </tr>
            <tr>
              <td style="padding:0 36px 30px;">
                <div style="border-left:4px solid #117c92;background:#f8fafa;padding:20px 22px;">
                  <div style="font-size:11px;font-weight:700;letter-spacing:1px;color:#60717a;margin-bottom:8px;">BEST NEXT MOVE</div>
                  <div style="font-family:Georgia,'Times New Roman',serif;font-size:19px;line-height:1.5;color:#0a1220;">${copy.nextStep}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 36px 34px;font-size:15px;line-height:1.65;color:#43535d;">
                Your score is a baseline, not a verdict. If you want help interpreting the result, reply to this email or <a href="${SITE_URL}/contact" style="color:#117c92;">contact Thompson &amp; Co Collective</a>.
              </td>
            </tr>
            <tr>
              <td style="padding:24px 36px;background:#0a1220;color:#d6e0e4;font-size:12px;line-height:1.6;">
                Thompson &amp; Co Collective<br>
                <a href="${SITE_URL}" style="color:#75c4d2;">thompsoncollective.co</a> · <a href="mailto:${EMAIL_REPLY_TO}" style="color:#75c4d2;">${EMAIL_REPLY_TO}</a><br><br>
                This operational email was sent because you requested a copy of your Talent Maturity Audit results.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

async function sendResultsEmail(env, email, score, band) {
  if (!env?.RESEND_API_KEY) {
    console.error("Audit results email fulfillment is not configured", {
      fulfillment: "not_configured",
    });
    return "not_configured";
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), RESEND_TIMEOUT_MS);

  try {
    const response = await fetch(RESEND_SEND_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: [email],
        reply_to: EMAIL_REPLY_TO,
        subject: "Your Talent Maturity Audit results | Thompson & Co Collective",
        text: buildEmailText(score, band),
        html: buildEmailHtml(score, band),
        tags: [
          { name: "email_type", value: "audit_results" },
          { name: "maturity_band", value: band.internalValue },
        ],
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      console.error("Audit results email fulfillment failed", {
        status: response.status,
      });
      return "failed";
    }

    return "sent";
  } catch (error) {
    console.error("Audit results email fulfillment failed", {
      errorType: error instanceof Error && error.name === "AbortError" ? "timeout" : "provider_error",
    });
    return "failed";
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function onRequestPost({ request, env }) {
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

    // CRM acceptance is authoritative. Email fulfillment happens only after acceptance
    // and cannot convert an accepted lead back into a failed conversion.
    const fulfillment = await sendResultsEmail(env, email, score, band);

    return jsonResponse(
      {
        ok: true,
        accepted: true,
        outcome: "accepted",
        audit_score: score,
        maturity_band: band.label,
        fulfillment,
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
