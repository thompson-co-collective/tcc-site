import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

export function AttractionDiagnosticPage() {
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Attraction Diagnostic | Thompson & Co Collective";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "The Attraction Diagnostic is our paid evidence pass across narrative, channels, candidate experience, and credibility governance — so the scope you invest in is grounded in reality, not assumptions."
      );
    }
    const startTime = Date.now();
    return () => {
      const timeOnPage = Math.floor((Date.now() - startTime) / 1000);
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "time_on_page", {
          event_category: "engagement",
          page: "/attraction-diagnostic",
          event_label: `${timeOnPage}s`,
        });
      }
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const trackCta = (label: string, destination: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "cta_primary_clicked", {
        event_category: "conversion",
        event_label: label,
        cta_destination: destination,
        page: "/attraction-diagnostic",
      });
    }
  };

  const deliverables = [
    {
      title: "System Snapshot",
      body: "Baseline view of the attraction funnel with key failure points flagged.",
    },
    {
      title: "Claim Map",
      body: "Core employer claims in-market with truth tier + scope gaps identified.",
    },
    {
      title: "Evidence Inventory",
      body: "What proof exists today vs. what's missing to make claims defensible.",
    },
    {
      title: "Channel Reality Check",
      body: "Where spend and effort are going vs. what's producing qualified movement.",
    },
    {
      title: "Candidate Journey Friction Map",
      body: "Where candidates drop and why.",
    },
    {
      title: "AI Visibility Notes",
      body: "What engines are likely assembling about you right now.",
    },
    {
      title: "Prioritized Plan (Now / Next / Later)",
      body: "Sequenced fixes tied to measurable outcomes.",
    },
    {
      title: "Governance Recommendations",
      body: "Ownership, cadence, and QA to keep execution consistent.",
    },
  ];

  const steps = [
    {
      week: "Week 1",
      title: "Intake + access",
      body: "Align on roles, goals, constraints. Collect minimum inputs.",
    },
    {
      week: "Week 1–2",
      title: "Evidence pass",
      body: "Review touchpoints, channels, candidate experience, claim language.",
    },
    {
      week: "Week 2",
      title: "Synthesis + working session",
      body: "Pressure-test findings, validate assumptions, confirm scope.",
    },
    {
      week: "Week 2–3",
      title: "Readout + roadmap",
      body: "Deliver Snapshot, Claim Map, prioritized plan, and next steps.",
    },
  ];

  const whatYouNeed = [
    "Priority roles / role families and hiring goals",
    "Career site URL(s) and job content examples",
    "Channel performance exports (if available)",
    "High-level funnel data (ATS/CRM exports if available)",
    "Current EVP / messaging docs (if they exist)",
    "Candidate feedback signals (reviews, surveys, recruiter notes)",
  ];

  const assessBullets = [
    "Narrative & messaging consistency",
    "EVP credibility + proof points",
    "Careers site + job content (structure, clarity, conversion)",
    "Candidate experience audit (apply → offer)",
    "Channel performance assessment (paid + organic)",
    "AI visibility scan (what candidates and engines can infer today)",
    "Metrics baseline (core funnel + decision points)",
    "Claim evidence mapping (what's true, where it's true, what supports it)",
  ];

  const rightForYou = [
    "You're ready to invest in strategy or execution, but want it grounded in reality.",
    "Spend is rising, conversion isn't, and you can't pinpoint why.",
    "Your story sounds good — but you can't defend it consistently.",
    "Candidate experience is leaking strong talent and you need a diagnosis first.",
  ];

  const notAFit = [
    "You only want creative output without measurement or governance.",
    "You want a 'new EVP' without validating what can be proven.",
    "You're unwilling to examine process friction or internal handoffs.",
  ];

  const nextCards = [
    {
      title: "EB-OS Foundation",
      body: "Governance, standards, templates.",
    },
    {
      title: "Activation",
      body: "Channel + content changes tied to baseline metrics.",
    },
    {
      title: "Cadence + QA",
      body: "Lightweight rhythm to keep claims and performance aligned.",
    },
  ];

  const faqs = [
    {
      question: "Is this the same as the baseline assessment?",
      answer:
        "No. The baseline self-assessment at /audit is a 13-question self-scored tool you complete in under five minutes. The Attraction Diagnostic is a paid, facilitated engagement where we do the evidence work — reviewing your actual touchpoints, channels, claims, and candidate experience — and return a decision-ready package with findings and a prioritized plan.",
    },
    {
      question: "Do you need full data access?",
      answer:
        "No. We keep inputs lightweight and work with what you have. If something doesn't exist, we note it as a visibility gap — that itself is useful signal. We don't stall or require perfect data to begin.",
    },
    {
      question: "Will you rewrite our EVP as part of this?",
      answer:
        "Not as part of the diagnostic. The diagnostic tells us whether your EVP is defensible, where the gaps are, and what claims need better proof or tighter scope. EVP development is a separate engagement — and one that's significantly more effective when it follows a diagnostic rather than preceding it.",
    },
    {
      question: "What should we do before the call?",
      answer:
        "Nothing required. If you've completed the baseline self-assessment, bring your score. If you have existing EVP documentation, channel data, or recent candidate feedback, have it on hand. But the clarity call is a conversation — we'll tell you what we need once we understand your situation.",
    },
    {
      question: "How is this priced?",
      answer:
        "Scoped based on complexity, access, and role families. Pricing is confirmed after the clarity call, once we understand what we're actually looking at. We don't publish fixed rates because scope variability is real — but we're direct about numbers once we have enough context to be accurate.",
    },
  ];

  const sharedLabelStyle = {
    fontFamily: "var(--font-sans)",
    fontSize: "0.8125rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#117C92",
  };

  const sharedH2Style = {
    fontSize: "clamp(2rem, 4vw, 2.75rem)",
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: "-0.02em",
    fontFamily: "var(--font-serif)",
    color: "#0A1220",
  };

  const sharedBodyStyle = {
    fontSize: "1.0625rem",
    lineHeight: 1.65,
    fontFamily: "var(--font-sans)",
    color: "#4B5563",
  };

  return (
    <main id="main-content">
      {/* ── 1. HERO ── */}
      <section
        className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0A1628 0%, #0A4A4E 100%)",
          color: "#FFFFFF",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left — 7 cols */}
            <div className="lg:col-span-7">
              <div className="mb-4" style={{ ...sharedLabelStyle, color: "#117C92" }}>
                Diagnostic Entry Point
              </div>
              <h1
                className="mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                  fontWeight: 600,
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  fontFamily: "var(--font-serif)",
                  color: "#FFFFFF",
                }}
              >
                Before strategy,<br className="hidden sm:block" /> comes clarity.
              </h1>
              <p
                className="mb-4"
                style={{
                  fontSize: "clamp(1.0625rem, 1.5vw, 1.1875rem)",
                  lineHeight: 1.65,
                  fontFamily: "var(--font-sans)",
                  color: "rgba(255,255,255,0.85)",
                  maxWidth: "560px",
                }}
              >
                The Attraction Diagnostic is our paid evidence pass across narrative, channels, candidate experience, and credibility governance — so the scope you invest in is grounded in reality, not assumptions.
              </p>
              <p
                className="mb-10"
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  fontFamily: "var(--font-sans)",
                  color: "rgba(255,255,255,0.5)",
                  fontStyle: "italic",
                }}
              >
                No public-facing claim goes live without tier, scope, and proof.
              </p>
              {/* CTA Row */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 rounded text-white transition-all hover:shadow-2xl hover:scale-105 relative group overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #117C92, #0E5A6A)",
                    boxShadow: "0 8px 24px rgba(17,124,146,.4)",
                    fontFamily: "var(--font-serif)",
                    fontWeight: 600,
                    fontSize: "1.0625rem",
                    minHeight: "48px",
                  }}
                  onClick={() => trackCta("Schedule a clarity call", "/contact")}
                  aria-label="Schedule a clarity call"
                >
                  <span className="relative z-10">Schedule a clarity call →</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
                <Link
                  to="/audit"
                  className="inline-flex items-center px-6 py-3 rounded transition-all hover:bg-white/10"
                  style={{
                    border: "1px solid rgba(255,255,255,0.3)",
                    fontFamily: "var(--font-serif)",
                    fontWeight: 600,
                    fontSize: "1.0625rem",
                    color: "rgba(255,255,255,0.85)",
                    minHeight: "48px",
                  }}
                  onClick={() => trackCta("Get your baseline", "/audit")}
                  aria-label="Get your baseline self-assessment"
                >
                  Get your baseline →
                </Link>
              </div>
            </div>

            {/* Right — 5 cols: editorial proof callout */}
            <div className="lg:col-span-5">
              <div
                className="rounded-lg p-8"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  className="mb-5"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#117C92",
                  }}
                >
                  What this gives you
                </p>
                {[
                  "A decision-ready view of what's working and what's breaking",
                  "Claims mapped against what can actually be defended",
                  "Candidate friction identified before you spend more",
                  "Sequenced priorities — not a list of everything to fix",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 mb-4 last:mb-0">
                    <span
                      style={{
                        color: "#117C92",
                        fontSize: "0.5rem",
                        marginTop: "7px",
                        flexShrink: 0,
                      }}
                    >
                      ◆
                    </span>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.55,
                        color: "rgba(255,255,255,0.75)",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT WE ASSESS ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="mb-4" style={sharedLabelStyle}>What we assess</div>
              <h2 className="mb-5" style={sharedH2Style}>
                The full attraction system.
              </h2>
              <p style={sharedBodyStyle}>
                We look at the full attraction system — not just messaging — and isolate where drift, friction, or ungoverned claims are costing you conversion.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {assessBullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      style={{
                        color: "#117C92",
                        fontSize: "0.5rem",
                        marginTop: "7px",
                        flexShrink: 0,
                      }}
                    >
                      ◆
                    </span>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.6,
                        color: "#374151",
                      }}
                    >
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT YOU GET ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#F8F9FA" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="mb-4" style={sharedLabelStyle}>What you get</div>
            <h2 className="mb-5" style={sharedH2Style}>
              What you get at the end.
            </h2>
            <p style={sharedBodyStyle}>
              You leave with a decision-ready view of what's working, what's breaking, and what to fix first — plus the governance foundation to keep it from drifting again.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {deliverables.map((d) => (
              <div
                key={d.title}
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderTop: "3px solid #117C92",
                }}
              >
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#0A1220",
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    lineHeight: 1.55,
                    color: "#6B7280",
                  }}
                >
                  {d.body}
                </p>
              </div>
            ))}
          </div>

          {/* What we don't do here */}
          <div
            className="rounded-lg p-8 md:p-10 max-w-3xl"
            style={{
              border: "1px solid #E5E7EB",
              backgroundColor: "#FFFFFF",
            }}
          >
            <h2
              className="mb-5"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.375rem",
                fontWeight: 600,
                color: "#0A1220",
              }}
            >
              What we don't do here.
            </h2>
            {[
              "We don't start with a rebrand.",
              "We don't publish claims we can't defend.",
              "We don't recommend spend changes without conversion visibility.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                <span
                  style={{
                    color: "#117C92",
                    fontSize: "0.5rem",
                    marginTop: "7px",
                    flexShrink: 0,
                  }}
                >
                  ◆
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.0625rem",
                    lineHeight: 1.6,
                    color: "#374151",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="mb-4" style={sharedLabelStyle}>How it runs</div>
              <h2 className="mb-5" style={sharedH2Style}>
                How the diagnostic runs.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  color: "#9CA3AF",
                  fontStyle: "italic",
                }}
              >
                Typical timeline is 2–3 weeks depending on access and complexity.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="relative">
                {/* Vertical line */}
                <div
                  className="absolute left-5 top-0 bottom-0 hidden sm:block"
                  style={{ width: "1px", backgroundColor: "#E5E7EB" }}
                />
                <div className="space-y-0">
                  {steps.map((step, i) => (
                    <div key={i} className="relative flex gap-6 sm:gap-8 pb-10 last:pb-0">
                      {/* Number bubble */}
                      <div
                        className="relative z-10 flex-shrink-0 flex items-center justify-center rounded-full"
                        style={{
                          width: "40px",
                          height: "40px",
                          background: "linear-gradient(135deg, #117C92, #0E5A6A)",
                          color: "#FFFFFF",
                          fontFamily: "var(--font-serif)",
                          fontWeight: 600,
                          fontSize: "0.9375rem",
                        }}
                      >
                        {i + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <div
                          className="mb-1"
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#117C92",
                          }}
                        >
                          {step.week}
                        </div>
                        <h3
                          className="mb-2"
                          style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "1.125rem",
                            fontWeight: 600,
                            color: "#0A1220",
                          }}
                        >
                          {step.title}
                        </h3>
                        <p
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.9375rem",
                            lineHeight: 1.6,
                            color: "#6B7280",
                          }}
                        >
                          {step.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. INPUTS WE NEED ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="mb-4" style={sharedLabelStyle}>Inputs</div>
              <h2 className="mb-5" style={sharedH2Style}>
                What we need from you.
              </h2>
              <p style={sharedBodyStyle}>
                We keep inputs lightweight. If you don't have something, we don't stall — we note it as a visibility gap.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {whatYouNeed.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      style={{
                        color: "#117C92",
                        fontSize: "0.5rem",
                        marginTop: "7px",
                        flexShrink: 0,
                      }}
                    >
                      ◆
                    </span>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.6,
                        color: "#374151",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. RIGHT FOR YOU / NOT A FIT ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="mb-4" style={sharedLabelStyle}>Fit check</div>
            <h2 style={sharedH2Style}>Is this right for you?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Right for you */}
            <div
              className="p-8 rounded-lg"
              style={{ backgroundColor: "#F8F9FA", borderTop: "3px solid #117C92" }}
            >
              <h3
                className="mb-6"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#0A1220",
                }}
              >
                Right for you if
              </h3>
              <div className="space-y-4">
                {rightForYou.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      style={{
                        color: "#117C92",
                        fontSize: "0.5rem",
                        marginTop: "7px",
                        flexShrink: 0,
                      }}
                    >
                      ◆
                    </span>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.6,
                        color: "#374151",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Not a fit */}
            <div
              className="p-8 rounded-lg"
              style={{ backgroundColor: "#F8F9FA", borderTop: "3px solid #D1D5DB" }}
            >
              <h3
                className="mb-6"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#0A1220",
                }}
              >
                Not a fit if
              </h3>
              <div className="space-y-4">
                {notAFit.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      style={{
                        color: "#9CA3AF",
                        fontSize: "0.5rem",
                        marginTop: "7px",
                        flexShrink: 0,
                      }}
                    >
                      ◆
                    </span>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.6,
                        color: "#6B7280",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. WHAT HAPPENS NEXT ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#0A1628", color: "#FFFFFF" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div
              className="mb-4"
              style={{ ...sharedLabelStyle, color: "#117C92" }}
            >
              What happens next
            </div>
            <h2
              className="mb-5"
              style={{
                ...sharedH2Style,
                color: "#FFFFFF",
              }}
            >
              What happens after the diagnostic.
            </h2>
            <p
              style={{
                ...sharedBodyStyle,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              The diagnostic tells us what to fix first. The next work is building the operating system (EB-OS) that keeps it consistent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nextCards.map((card) => (
              <div
                key={card.title}
                className="p-8 rounded-lg"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderTop: "3px solid #117C92",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTopWidth: "3px",
                  borderTopColor: "#117C92",
                }}
              >
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. MINI-FAQ ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="mb-4" style={sharedLabelStyle}>Questions</div>
            <h2 style={sharedH2Style}>Common questions.</h2>
          </div>
          <div className="divide-y" style={{ borderColor: "#E5E7EB" }}>
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 text-left group"
                  aria-expanded={openFaq === i}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      color: "#0A1220",
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 mt-0.5 text-[#117C92]">
                    {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="mt-4 pr-8">
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.7,
                        color: "#6B7280",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA BAND ── */}
      <section
        className="py-24 md:py-32"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #0A4A4E 100%)",
          color: "#FFFFFF",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4" style={{ ...sharedLabelStyle, color: "#117C92" }}>
            Ready to begin
          </div>
          <h2
            className="mb-5"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 600,
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              fontFamily: "var(--font-serif)",
              color: "#FFFFFF",
            }}
          >
            Ready to get clarity before you spend more?
          </h2>
          <p
            className="mb-10 max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.0625rem",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            We'll show you what's working, what's breaking, and what to fix first.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 rounded text-white transition-all hover:shadow-2xl hover:scale-105 relative group overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #117C92, #0E5A6A)",
                boxShadow: "0 8px 24px rgba(17,124,146,.4)",
                fontFamily: "var(--font-serif)",
                fontWeight: 600,
                fontSize: "1.0625rem",
                minHeight: "48px",
              }}
              onClick={() => trackCta("Schedule a clarity call", "/contact")}
              aria-label="Schedule a clarity call"
            >
              <span className="relative z-10">Schedule a clarity call →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Link>
            <Link
              to="/audit"
              className="inline-flex items-center px-8 py-3 rounded transition-all hover:bg-white/10"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                fontFamily: "var(--font-serif)",
                fontWeight: 600,
                fontSize: "1.0625rem",
                color: "rgba(255,255,255,0.85)",
                minHeight: "48px",
              }}
              onClick={() => trackCta("Get your baseline", "/audit")}
              aria-label="Get your baseline self-assessment"
            >
              Get your baseline →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}