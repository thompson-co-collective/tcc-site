const HUBSPOT_PORTAL_ID = "244175001";
const HUBSPOT_FORM_ID = "f6b76910-d408-4fba-b6a6-cf17b1f845e6";
const HUBSPOT_SUBMIT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
const RESEND_SEND_URL = "https://api.resend.com/emails";
const EMAIL_FROM = "Thompson & Co. Collective <results@insights.thompsoncollective.co>";
const EMAIL_REPLY_TO = "hello@thompsoncollective.co";
const BOOKING_URL = "https://calendar.app.google/YYzRyc23vQ1ywk3P7";
const SITE_URL = "https://thompsoncollective.co";

const BAND_VALUES = new Map([
  [
    "Nascent",
    {
      internalValue: "nascent",
      min: 0,
      max: 7,
      summary:
        "The system is largely informal. Outcomes depend on individual effort, making performance inconsistent and difficult to diagnose.",
      nextStep:
        "Define one 12–18 month hiring priority, assign an accountable owner, and establish a focused measurement baseline.",
    },
  ],
  [
    "Developing",
    {
      internalValue: "developing",
      min: 8,
      max: 14,
      summary:
        "Core elements exist, but consistency, governance, and accountability remain uneven across the talent attraction system.",
      nextStep:
        "Standardize the highest-impact process across teams, then define ownership, review cadence, and success measures.",
    },
  ],
  [
    "Aligned",
    {
      internalValue: "aligned",
      min: 15,
      max: 20,
      summary:
        "The foundation is coherent. The opportunity is to strengthen optimization, resilience, and disciplined scale.",
      nextStep:
        "Identify the largest cross-functional constraint and convert it into a 30-day optimization plan with a clear owner and review date.",
    },
  ],
  [
    "Optimized",
    {
      internalValue: "optimized",
      min: 21,
      max: 26,
      summary:
        "Governance and measurement are established. The focus now shifts to resilience, scale, and long-term defensibility.",
      nextStep:
        "Pressure-test the system for resilience across AI governance, data quality, scenario readiness, and operating discipline at scale.",
    },
  ],
]);

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
  const pageUrl = new URL(`${SITE_URL}/audit`);

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

async function buildIdempotencyKey(email, score, band) {
  const source = new TextEncoder().encode(`audit-results:${email}:${score}:${band}`);
  const digest = await crypto.subtle.digest("SHA-256", source);
  const hash = Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return `audit_results_${hash}`;
}

function buildEmailText(score, band, bandConfig) {
  return `Your Talent Maturity Audit is complete.

YOUR BASELINE: ${band.toUpperCase()}
SCORE: ${score} OUT OF 26

Your score is a baseline—not a verdict. It indicates how consistently your talent attraction system connects strategy, narrative, visibility, governance, candidate experience, and measurement.

WHAT THIS SIGNALS
${bandConfig.summary}

BEST NEXT MOVE
${bandConfig.nextStep}

A member of our team will follow up to answer any immediate questions. If you would rather choose a time now, schedule a conversation:
${BOOKING_URL}

Best,
Candice Thompson
Founder, Thompson & Co. Collective

${SITE_URL}
hello@thompsoncollective.co
(980) 400-1254

This email was sent because you completed the Thompson & Co. Collective Talent Maturity Audit.`;
}

function buildEmailHtml(score, band, bandConfig) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Your Talent Maturity Audit results</title>
    <style>
      @media only screen and (max-width: 640px) {
        .email-shell { width: 100% !important; }
        .content-pad { padding-left: 24px !important; padding-right: 24px !important; }
        .score-cell { display: block !important; width: 100% !important; }
        .score-divider { border-left: 0 !important; border-top: 1px solid #D9E2E5 !important; }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background:#EEF3F4; color:#23313A;">
    <div style="display:none; max-height:0; overflow:hidden; opacity:0; color:transparent;">
      Your ${band} Talent Maturity Audit baseline and recommended next step.
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#EEF3F4;">
      <tr>
        <td align="center" style="padding:32px 12px;">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" class="email-shell" style="width:600px; max-width:600px; background:#FFFFFF; border-radius:4px; overflow:hidden; box-shadow:0 8px 28px rgba(10,18,32,0.08);">
            <tr>
              <td style="height:6px; background:#117C92; font-size:0; line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td class="content-pad" style="padding:28px 44px 26px; background:#0A1220;">
                <a href="${SITE_URL}" style="font-family:Georgia, 'Times New Roman', serif; font-size:21px; line-height:1.25; color:#FFFFFF; text-decoration:none; letter-spacing:-0.2px;">
                  Thompson &amp; Co. Collective
                </a>
              </td>
            </tr>
            <tr>
              <td class="content-pad" style="padding:44px 44px 12px;">
                <p style="margin:0 0 12px; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:1.4; font-weight:700; letter-spacing:1.5px; color:#117C92;">
                  TALENT MATURITY AUDIT
                </p>
                <h1 style="margin:0; font-family:Georgia, 'Times New Roman', serif; font-size:36px; line-height:1.16; font-weight:400; letter-spacing:-0.6px; color:#0A1220;">
                  Your baseline is ${band}.
                </h1>
              </td>
            </tr>
            <tr>
              <td class="content-pad" style="padding:18px 44px 28px;">
                <p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:1.65; color:#43535D;">
                  Your score is a baseline—not a verdict. It indicates how consistently your talent attraction system connects strategy, narrative, visibility, governance, candidate experience, and measurement.
                </p>
              </td>
            </tr>
            <tr>
              <td class="content-pad" style="padding:0 44px 32px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#F4F8F8; border:1px solid #D9E2E5; border-radius:4px;">
                  <tr>
                    <td width="42%" class="score-cell" style="padding:24px 26px; vertical-align:top;">
                      <p style="margin:0 0 6px; font-family:Arial, Helvetica, sans-serif; font-size:11px; line-height:1.4; font-weight:700; letter-spacing:1.2px; color:#60717A;">SCORE</p>
                      <p style="margin:0; font-family:Georgia, 'Times New Roman', serif; font-size:32px; line-height:1.1; color:#0A1220;">${score}<span style="font-size:17px; color:#60717A;"> / 26</span></p>
                    </td>
                    <td width="58%" class="score-cell score-divider" style="padding:24px 26px; border-left:1px solid #D9E2E5; vertical-align:top;">
                      <p style="margin:0 0 6px; font-family:Arial, Helvetica, sans-serif; font-size:11px; line-height:1.4; font-weight:700; letter-spacing:1.2px; color:#60717A;">MATURITY BAND</p>
                      <p style="margin:0; font-family:Georgia, 'Times New Roman', serif; font-size:25px; line-height:1.2; color:#117C92;">${band}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="content-pad" style="padding:0 44px 30px;">
                <p style="margin:0 0 8px; font-family:Arial, Helvetica, sans-serif; font-size:11px; line-height:1.4; font-weight:700; letter-spacing:1.2px; color:#117C92;">WHAT THIS SIGNALS</p>
                <p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:1.65; color:#43535D;">${bandConfig.summary}</p>
              </td>
            </tr>
            <tr>
              <td class="content-pad" style="padding:0 44px 34px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-left:4px solid #117C92; background:#F8FAFA;">
                  <tr>
                    <td style="padding:22px 24px;">
                      <p style="margin:0 0 8px; font-family:Arial, Helvetica, sans-serif; font-size:11px; line-height:1.4; font-weight:700; letter-spacing:1.2px; color:#60717A;">BEST NEXT MOVE</p>
                      <p style="margin:0; font-family:Georgia, 'Times New Roman', serif; font-size:19px; line-height:1.5; color:#0A1220;">${bandConfig.nextStep}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="content-pad" style="padding:0 44px 36px;">
                <p style="margin:0 0 22px; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:1.65; color:#43535D;">
                  A member of our team will follow up to answer any immediate questions. If you would rather choose a time now, let’s find your best next step.
                </p>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td bgcolor="#117C92" style="border-radius:3px;">
                      <a href="${BOOKING_URL}" style="display:inline-block; padding:14px 24px; font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:1.2; font-weight:700; color:#FFFFFF; text-decoration:none;">Choose a time to connect</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="content-pad" style="padding:0 44px 40px;">
                <p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:1.65; color:#43535D;">
                  Best,<br>
                  <strong style="color:#0A1220;">Candice Thompson</strong><br>
                  Founder, Thompson &amp; Co. Collective
                </p>
              </td>
            </tr>
            <tr>
              <td class="content-pad" style="padding:26px 44px; background:#0A1220;">
                <p style="margin:0 0 8px; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:1.6; color:#D6E0E4;">
                  Thompson &amp; Co. Collective<br>
                  PO Box 16515 · Huntersville, NC 28078 · (980) 400-1254
                </p>
                <p style="margin:0 0 14px; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:1.6;">
                  <a href="${SITE_URL}" style="color:#75C4D2; text-decoration:underline;">thompsoncollective.co</a>
                  &nbsp;&nbsp;·&nbsp;&nbsp;
                  <a href="mailto:${EMAIL_REPLY_TO}" style="color:#75C4D2; text-decoration:underline;">${EMAIL_REPLY_TO}</a>
                </p>
                <p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:11px; line-height:1.5; color:#91A2AA;">
                  This email was sent because you completed the Thompson &amp; Co. Collective Talent Maturity Audit.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

async function sendResultsEmail(env, email, score, band, bandConfig) {
  if (!env.RESEND_API_KEY) {
    console.error("Resend API key is not configured");
    return { ok: false, status: 503 };
  }

  const idempotencyKey = await buildIdempotencyKey(email, score, band);
  const resendResponse = await fetch(RESEND_SEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify({
      from: EMAIL_FROM,
      to: [email],
      reply_to: EMAIL_REPLY_TO,
      subject: "Your Talent Maturity Audit results | Thompson & Co. Collective",
      html: buildEmailHtml(score, band, bandConfig),
      text: buildEmailText(score, band, bandConfig),
      tags: [
        { name: "email_type", value: "audit_results" },
        { name: "maturity_band", value: bandConfig.internalValue },
      ],
    }),
  });

  if (!resendResponse.ok) {
    let errorName = "unknown_error";
    try {
      const errorBody = await resendResponse.json();
      errorName = typeof errorBody.name === "string" ? errorBody.name : errorName;
    } catch {
      // Resend returned a non-JSON error response.
    }

    console.error("Resend audit email failed", {
      status: resendResponse.status,
      name: errorName,
    });
    return { ok: false, status: resendResponse.status };
  }

  return { ok: true, status: resendResponse.status };
}

export async function onRequestPost({ request, env }) {
  try {
    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.includes("application/json")) {
      return jsonResponse({ error: "Unsupported request format." }, 415);
    }

    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const score = Number(body.score);
    const band = typeof body.band === "string" ? body.band.trim() : "";
    const bandConfig = BAND_VALUES.get(band);

    if (
      !email ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !Number.isInteger(score) ||
      score < 0 ||
      score > 26 ||
      !bandConfig ||
      score < bandConfig.min ||
      score > bandConfig.max
    ) {
      return jsonResponse({ error: "Please check the audit results and try again." }, 400);
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
        fields: [
          { objectTypeId: "0-1", name: "email", value: email },
          { objectTypeId: "0-1", name: "audit_score", value: String(score) },
          {
            objectTypeId: "0-1",
            name: "audit_maturity_band",
            value: bandConfig.internalValue,
          },
        ],
        context: hubspotContext,
      }),
    });

    if (!hubspotResponse.ok) {
      console.error("HubSpot audit submission failed", {
        status: hubspotResponse.status,
      });
      return jsonResponse({ error: "The audit results could not be submitted." }, 502);
    }

    const emailResult = await sendResultsEmail(env, email, score, band, bandConfig);
    if (!emailResult.ok) {
      return jsonResponse({ error: "The audit results email could not be sent." }, 502);
    }

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error("Audit results handler failed", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return jsonResponse({ error: "The audit results could not be submitted." }, 500);
  }
}

export function onRequest() {
  return jsonResponse({ error: "Method not allowed." }, 405);
}
