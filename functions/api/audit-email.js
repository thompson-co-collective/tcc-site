const HUBSPOT_PORTAL_ID = "244175001";
const HUBSPOT_FORM_ID = "f6b76910-d408-4fba-b6a6-cf17b1f845e6";
const VALID_BANDS = new Map([
  ["Nascent", "nascent"],
  ["Developing", "developing"],
  ["Aligned", "aligned"],
  ["Optimized", "optimized"],
]);


const AUDIT_CONTENT = {
  nascent: {
    meaning: "Hiring is happening, but the system is informal. Outcomes feel inconsistent and hard to diagnose.",
    priorities: [
      "Establish an EVP-lite: 3–5 defensible claims with supporting proof.",
      "Fix conversion choke points (job clarity and apply flow) before adding spend.",
      "Stand up one always-on channel with a weekly publishing cadence.",
    ],
    next: [
      "Define qualified for 1–2 mission-critical role families.",
      "Set baseline metrics for apply completion, time-to-decision, and offer acceptance.",
      "Standardize candidate communication expectations.",
    ],
  },
  developing: {
    meaning: "Pieces exist, but consistency and accountability are weak across channels and leaders.",
    priorities: [
      "Govern narrative across recruiters and hiring leaders; standardize job ad claims.",
      "Implement clean baselines by role family (source quality and conversion).",
      "Turn EVP themes into proof-led assets.",
    ],
    next: [
      "Build a weekly or biweekly content cadence tied to priority roles.",
      "Identify and fix the two highest-friction points in the hiring funnel.",
      "Create a lightweight proof map tying claims to evidence.",
    ],
  },
  aligned: {
    meaning: "You have a coherent foundation; performance is limited by optimization loops and scale discipline.",
    priorities: [
      "Optimize the funnel from apply starts through offers and acceptance.",
      "Coordinate paid, owned, and earned distribution to reduce channel waste.",
      "Tighten your AI, search, and review footprint to reduce narrative drift.",
    ],
    next: [
      "Segment messages and channel strategy for 2–3 role families.",
      "Add quarterly governance checkpoints for job ads, landing pages, reviews, and EVP proof.",
      "Equip hiring leaders with a consistent talk track and proof points.",
    ],
  },
  optimized: {
    meaning: "Strong governance and measurement. The opportunity is scale, resilience, and defensibility.",
    priorities: [
      "Expand role-family segmentation in message and channel strategy.",
      "Operationalize narrative defense with monitoring and a response playbook.",
      "Run quarterly improvement reviews with benchmarks and decisions.",
    ],
    next: [
      "Monitor reviews, search, AI summaries, and candidate feedback with an owner and SLA.",
      "Run message and creative tests tied to conversion and candidate quality.",
      "Create a one-page quarterly executive readout.",
    ],
  },
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[char]));
}

function resultsEmail(score, band) {
  const data = AUDIT_CONTENT[band];
  const label = band.charAt(0).toUpperCase() + band.slice(1);
  const priorities = data.priorities.map((item) => "<li style=\"margin-bottom:10px\">" + escapeHtml(item) + "</li>").join("");
  const next = data.next.map((item) => "<li style=\"margin-bottom:10px\">" + escapeHtml(item) + "</li>").join("");
  const html = \`<!doctype html><html><body style="margin:0;padding:32px 16px;background:#f5f7f8;color:#14212d;font-family:Arial,sans-serif">
<div style="max-width:620px;margin:auto;background:#fff;padding:36px;border:1px solid #dbe4e8">
<p style="font-size:14px;letter-spacing:1px;color:#0e7185">THOMPSON &amp; CO COLLECTIVE</p>
<h1 style="font-size:28px;font-weight:normal;margin:24px 0 8px">Your Talent Maturity Audit baseline</h1>
<p>Your assessment results are ready. This is a directional baseline, not a benchmark against other employers.</p>
<div style="background:#eaf4f6;padding:22px;margin:24px 0"><div style="font-size:14px">Audit score</div>
<div style="font-size:32px;margin:6px 0">\${score} / 26</div><div style="font-size:18px">Maturity band: \${label}</div></div>
<h2 style="font-size:20px">What this means</h2><p>\${escapeHtml(data.meaning)}</p>
<h2 style="font-size:20px">Your top three priorities</h2><ol>\${priorities}</ol>
<h2 style="font-size:20px">Next three considerations</h2><ul>\${next}</ul>
<p style="margin-top:28px">If you would like to discuss where to begin, you can <a style="color:#0e7185" href="https://calendly.com/candice-thompsoncollective/clarity-call">book a clarity call</a>.</p>
<p style="font-size:12px;color:#596770;border-top:1px solid #dbe4e8;padding-top:20px;margin-top:32px">You requested this copy of your audit results at thompsoncollective.co/audit. This email is not a marketing subscription.</p></div></body></html>\`;
  const text = [
    "Your Talent Maturity Audit baseline — Thompson & Co Collective",
    \`Score: \${score} / 26 | Maturity band: \${label}\`,
    "What this means: " + data.meaning,
    "Your top three priorities:", ...data.priorities.map((x, i) => \`\${i + 1}. \${x}\`),
    "Next three considerations:", ...data.next.map((x) => "- " + x),
    "Discuss your next step: https://calendly.com/candice-thompsoncollective/clarity-call",
    "You requested this copy at thompsoncollective.co/audit. This is not a marketing subscription.",
  ].join("\n\n");
  return { html, text };
}

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

    const context = {
      pageName: "Talent Maturity Audit – Thompson & Co Collective",
      pageUri: "https://thompsoncollective.co/audit",
    };
    const hutk = getCookie(request, "hubspotutk");
    const ipAddress = request.headers.get("CF-Connecting-IP") || "";
    if (hutk) context.hutk = hutk;
    if (ipAddress) context.ipAddress = ipAddress;

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
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

    if (!env?.RESEND_API_KEY) {
      console.error("Audit email delivery unavailable: RESEND_API_KEY missing");
      return jsonResponse({ error: "Your audit was saved, but your results email could not be sent." }, 503);
    }

    const emailContent = resultsEmail(score, band);
    const mailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + env.RESEND_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Thompson & Co Collective <results@insights.thompsoncollective.co>",
        to: [email],
        reply_to: "hello@thompsoncollective.co",
        subject: "Your Talent Maturity Audit results and next steps",
        html: emailContent.html,
        text: emailContent.text,
      }),
    });

    if (!mailResponse.ok) {
      let errorCode = null;
      try {
        const data = await mailResponse.json();
        errorCode = typeof data.name === "string" ? data.name : null;
      } catch {}
      console.error("Audit results email failed", { status: mailResponse.status, errorCode });
      return jsonResponse({ error: "Your audit was saved, but your results email could not be sent." }, 502);
    }

    console.log("Audit results email accepted for delivery", { status: mailResponse.status });
    return jsonResponse({ ok: true, emailSent: true });
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
