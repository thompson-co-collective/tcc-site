import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CtaPair } from "../components/CtaPair";
import ampersandWhite from "../../assets/ampersand-white.png";

export default function AboutPage() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Thompson & Co Collective",
      "description": "Thompson & Co Collective is a boutique collective of senior practitioners - assembled around your problem, embedded in the work, and accountable to outcomes long after strategy ships.",
      "url": "https://thompsoncollective.co/about",
      "publisher": {
        "@type": "Organization",
        "name": "Thompson & Co Collective",
        "url": "https://thompsoncollective.co",
        "founder": {
          "@type": "Person",
          "name": "Candice Thompson",
          "jobTitle": "Founder & Principal Consultant",
          "description": "Nearly two decades of enterprise recruitment marketing and employer brand leadership, including $15M+ in annual media oversight at Fortune 50 and Fortune 500 organizations."
        },
        "knowsAbout": [
          "Employer brand strategy",
          "Recruitment marketing governance",
          "Candidate experience design",
          "Employee value proposition development",
          "Talent attraction analytics",
          "AI visibility for employer brand"
        ]
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    const startTime = Date.now();
    return () => {
      document.head.removeChild(script);
      const timeOnPage = Math.floor((Date.now() - startTime) / 1000);
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "time_on_page", {
          event_category: "engagement",
          event_label: `${timeOnPage}s`,
          page_name: "about",
        });
      }
    };
  }, []);

  return (
    <main id="main-content">

      {/* ─── SECTION 1 — HERO ─────────────────────────────────────────────── */}
      <section
        aria-label="About page introduction"
        className="relative pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden"
        style={{ 
          background: `radial-gradient(
            ellipse 85% 65% at 68% 58%,
            rgba(17,124,146,0.14) 0%,
            rgba(17,124,146,0.08) 22%,
            rgba(17,124,146,0.03) 40%,
            rgba(17,124,146,0) 64%
          ),
          radial-gradient(
            ellipse 120% 90% at 50% -10%,
            rgba(255,255,255,0.04) 0%,
            rgba(255,255,255,0.015) 18%,
            rgba(255,255,255,0) 42%
          ),
          linear-gradient(
            135deg,
            #010308 0%,
            #02050b 18%,
            #040912 42%,
            #08131d 68%,
            #0d2a36 88%,
            #123f4c 100%
          )`, 
          color: "white" 
        }}
      >
        {/* Subtle noise / depth overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(17,124,146,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow + rule */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              style={{
                display: "block",
                width: "32px",
                height: "1px",
                background: "rgba(17,124,146,0.6)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#117C92",
              }}
            >
              ABOUT
            </span>
            <span
              style={{
                display: "block",
                width: "32px",
                height: "1px",
                background: "rgba(17,124,146,0.6)",
              }}
            />
          </div>

          {/* H1 */}
          <h1
            className="mb-6"
            style={{
              fontSize: "clamp(2.75rem, 5.5vw, 4rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              fontFamily: "var(--font-serif)",
            }}
          >
            Built different.<br />On purpose.
          </h1>

          {/* Subhead */}
          <p
            className="max-w-2xl mx-auto mb-8"
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              fontFamily: "var(--font-sans)",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Thompson & Co Collective is a boutique collective of senior practitioners — assembled
            around your problem, embedded in the work, and accountable to outcomes long after
            strategy ships.
          </p>

          {/* Italic tagline */}
          <p
            className="mb-12"
            style={{
              fontSize: "0.9375rem",
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              color: "rgba(17,124,146,0.9)",
              letterSpacing: "0.01em",
            }}
          >
            Senior-led. Assembled to the problem. Accountable to outcomes.
          </p>

          {/* Thin divider */}
          <div
            className="mx-auto mb-12"
            style={{
              width: "48px",
              height: "1px",
              background: "rgba(255,255,255,0.15)",
            }}
          />

          {/* CTA cluster */}
          <div className="flex justify-center">
            <CtaPair variant="light" />
          </div>
        </div>
      </section>

      {/* ─── SECTION 2 — PLAIN LANGUAGE GRID ─────────────────────────────── */}
      <section
        aria-label="What Thompson and Co Collective actually does"
        className="py-24 md:py-32"
        style={{ background: "#F4F6F7" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header block */}
          <div className="max-w-xl mb-16">
            <div
              className="mb-4"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#117C92",
              }}
            >
              WHAT WE ACTUALLY DO
            </div>
            <h2
              style={{
                fontSize: "clamp(1.625rem, 3vw, 2.125rem)",
                fontWeight: 600,
                lineHeight: 1.25,
                fontFamily: "var(--font-serif)",
                color: "#0A1220",
              }}
            >
              Plain language. For everyone evaluating us.
            </h2>
            <p
              className="mt-4"
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                fontFamily: "var(--font-sans)",
                color: "#6B7280",
              }}
            >
              No framing. Just facts.
            </p>
          </div>

          {/* 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
            {[
              {
                label: "WHAT WE DO",
                copy: "Employer brand strategy, recruitment marketing, and candidate experience — governed across every channel and accountable to measurable outcomes. We build the narrative, govern its consistency, and sustain performance after launch.",
              },
              {
                label: "WHO WE HELP",
                copy: "Mid-market to enterprise employers navigating inconsistent talent narratives, underperforming recruitment spend, or a growing gap between what their brand promises and what candidates actually experience.\n\nFor growing organizations not yet at enterprise scale — we offer fractional engagements built around the specific problem at hand. The model flexes. The standard doesn't.",
              },
              {
                label: "WHAT WE DON'T DO",
                copy: "We don't run paid media without governance. We don't deliver strategy decks without implementation. We don't rebrand for aesthetics. We don't start scope without evidence. We don't stay in engagements past usefulness.",
              },
              {
                label: "HOW WE PROVE IT",
                copy: "Every recommendation is anchored to evidence before it becomes public narrative. We build measurement frameworks before launch — not after — so performance has a baseline to be held against.",
              },
            ].map(({ label, copy }) => (
              <article
                key={label}
                className="bg-white p-8 md:p-10"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: "18px",
                      height: "2px",
                      background: "#117C92",
                      flexShrink: 0,
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#117C92",
                      margin: 0,
                    }}
                  >
                    {label}
                  </h3>
                </div>
                {copy.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.75,
                      fontFamily: "var(--font-sans)",
                      color: "#374151",
                      marginBottom: i < copy.split("\n\n").length - 1 ? "12px" : 0,
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3 — THE GAP IS STRUCTURAL ───────────────────────────── */}
      <section
        aria-label="The structural talent narrative gap"
        className="py-24 md:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left: heading col */}
            <div className="lg:col-span-5">
              <div
                className="mb-5"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#117C92",
                }}
              >
                THE CONTEXT
              </div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.875rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  fontFamily: "var(--font-serif)",
                  color: "#0A1220",
                }}
              >
                The gap is structural now.
              </h2>

              {/* Pull stat */}
              <div
                className="mt-10 pt-8"
                style={{
                  borderTop: "1px solid #E5E7EB",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    fontFamily: "var(--font-serif)",
                    fontWeight: 600,
                    color: "#117C92",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  3×
                </p>
                <p
                  className="mt-2"
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    fontFamily: "var(--font-sans)",
                    color: "#6B7280",
                    maxWidth: "220px",
                  }}
                >
                  More channels for a candidate to encounter your brand — before a recruiter enters the conversation.
                </p>
              </div>
            </div>

            {/* Right: body copy col */}
            <div className="lg:col-span-7">
              <div
                style={{
                  borderLeft: "2px solid #E5E7EB",
                  paddingLeft: "32px",
                }}
              >
                <div className="space-y-6">
                  <p
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.8,
                      fontFamily: "var(--font-sans)",
                      color: "#374151",
                    }}
                  >
                    Most employers aren't losing talent because their message is weak. They're
                    losing because it's inconsistent — across channels, teams, platforms, and the
                    AI systems candidates use to evaluate them before a recruiter ever enters the
                    conversation.
                  </p>
                  <p
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.8,
                      fontFamily: "var(--font-sans)",
                      color: "#374151",
                    }}
                  >
                    Candidate abandon rates signal exactly where the experience breaks — if anyone's
                    measuring them. Narrative that isn't governed doesn't hold. Spend without
                    attribution drifts. And AI surfaces the inconsistencies first.
                  </p>

                  {/* Pull quote */}
                  <blockquote
                    style={{
                      margin: "8px 0 0",
                      padding: "20px 24px",
                      background: "#F4F6F7",
                      borderRadius: "4px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "1.0625rem",
                        lineHeight: 1.7,
                        fontFamily: "var(--font-serif)",
                        fontStyle: "italic",
                        color: "#0E5A6A",
                        margin: 0,
                      }}
                    >
                      "We exist to close that gap — with clarity, evidence, and governance that
                      holds long after strategy ships."
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4 — OUR PURPOSE ──────────────────────────────────────── */}
      <section
        aria-label="Our purpose"
        className="py-24 md:py-32"
        style={{ background: "#F4F6F7" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Body copy */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="space-y-5">
                <p
                  style={{
                    fontSize: "1.0625rem",
                    lineHeight: 1.8,
                    fontFamily: "var(--font-sans)",
                    color: "#374151",
                  }}
                >
                  Talent acquisition sits at the intersection of brand, technology, and spend. Most
                  organisations are navigating that intersection without a reliable map — systems
                  that don't connect, media budgets without attribution, candidate experiences that
                  quietly drift from what the brand promises.
                </p>
                <p
                  style={{
                    fontSize: "1.0625rem",
                    lineHeight: 1.8,
                    fontFamily: "var(--font-sans)",
                    color: "#374151",
                  }}
                >
                  Thompson & Co Collective exists for the leaders navigating that complexity. Not to
                  judge where things stand — but to bring the senior experience, the systems
                  thinking, and the honest perspective needed to understand what's actually happening
                  and build toward what should be.
                </p>
                <p
                  style={{
                    fontSize: "1.0625rem",
                    lineHeight: 1.8,
                    fontFamily: "var(--font-sans)",
                    color: "#374151",
                  }}
                >
                  We've worked inside ecosystems complex enough to know that the gap between where
                  you are and where you need to be is rarely about effort. It's almost always about
                  architecture.
                </p>
              </div>
            </div>

            {/* Heading col */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div
                className="mb-5"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#117C92",
                }}
              >
                OUR PURPOSE
              </div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.875rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  fontFamily: "var(--font-serif)",
                  color: "#0A1220",
                }}
              >
                Built for the complexity most firms walk around.
              </h2>

              {/* Vertical accent list */}
              <div
                className="mt-10 space-y-4"
                style={{ borderTop: "1px solid #E5E7EB", paddingTop: "32px" }}
              >
                {["Strategy before execution.", "Evidence before narrative.", "Accountability after launch."].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#117C92",
                          flexShrink: 0,
                          display: "block",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.9375rem",
                          color: "#374151",
                          lineHeight: 1.5,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5 — THE & IS OUR ANCHOR ─────────────────────────────── */}
      <section
        aria-label="Our philosophy - the ampersand"
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #082030 0%, #0A1220 40%, #0E3A3A 100%)",
          color: "white",
        }}
      >
        {/* Decorative ampersand */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            right: "-4vw",
            transform: "translateY(-50%)",
            width: "min(640px, 45vw)",
            height: "auto",
            opacity: 0.07,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <img
            src={ampersandWhite}
            alt=""
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            sizes="45vw"
            style={{ width: "100%", height: "auto", display: "block" }}
            draggable={false}
          />
        </div>

        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ zIndex: 1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <div className="lg:col-span-5">
              <div
                className="mb-5"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#117C92",
                }}
              >
                OUR PHILOSOPHY
              </div>
              <h2
                style={{
                  fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                  fontWeight: 600,
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  fontFamily: "var(--font-serif)",
                  color: "white",
                }}
              >
                The & is our anchor.
              </h2>

              <p
                className="mt-6"
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.75,
                  fontFamily: "var(--font-sans)",
                  color: "rgba(255,255,255,0.68)",
                  maxWidth: "400px",
                }}
              >
                At Thompson & Co Collective, the ampersand isn't a design detail. It's a structural
                principle — built around the belief that the best outcomes live in the conjunction.
              </p>

              <p
                className="mt-6"
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  fontFamily: "var(--font-sans)",
                  color: "rgba(255,255,255,0.68)",
                  maxWidth: "400px",
                }}
              >
                Brilliance isn't born in silos. It scales through collaboration: with our clients,
                our partners, and each other.
              </p>

              {/* Closing italic */}
              <p
                className="mt-8"
                style={{
                  fontSize: "0.9375rem",
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  color: "rgba(17,124,146,0.9)",
                  lineHeight: 1.6,
                  maxWidth: "380px",
                  paddingTop: "24px",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                The & is our anchor. It's a reminder that the best outcomes live in the conjunction
                — and that brilliance scales through collaboration, not despite it.
              </p>
            </div>

            {/* Right: five statements */}
            <div className="lg:col-span-7">
              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {[
                  "Strategy and evidence.",
                  "Senior-led and embedded.",
                  "Accountable to launch and accountable after it.",
                  "Intelligence and instinct.",
                  "Clarity and creativity.",
                ].map((statement, i) => (
                  <div
                    key={statement}
                    className="flex items-center gap-6 py-5"
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        color: "rgba(17,124,146,0.7)",
                        flexShrink: 0,
                        width: "20px",
                        textAlign: "right",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                        fontWeight: 600,
                        lineHeight: 1.3,
                        color: "white",
                        margin: 0,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {statement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6 — OPERATING MODEL ─────────────────────────────────── */}
      <section
        aria-label="Operating model - senior, assembled, accountable"
        className="py-24 md:py-32 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div
              className="mb-4"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#117C92",
              }}
            >
              HOW WE'RE STRUCTURED
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.875rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-serif)",
                color: "#0A1220",
              }}
            >
              Senior, assembled, accountable.
            </h2>
            <p
              className="mt-5"
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                fontFamily: "var(--font-sans)",
                color: "#6B7280",
                maxWidth: "600px",
              }}
            >
              Thompson & Co Collective is structured for the work clients actually need now —
              senior-led, built around the problem, and accountable to outcomes.
            </p>
          </div>

          {/* 2×2 card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                label: "Not an agency.",
                copy: "You don't pay for overhead that doesn't touch the work. You get senior strategy and clean delivery. Agency structures bury senior involvement under overhead — we remove that layer entirely.",
              },
              {
                label: "Not a solo consultant.",
                copy: "When the scope requires a bench, it exists — without losing the strategic thread. A solo consultant can't hold multi-workstream engagements without compromising depth. We can.",
              },
              {
                label: "A collective.",
                copy: "Senior practitioners assembled around your reality, working alongside your team, governed to outcomes. The model exists because the problem demanded it.",
              },
              {
                label: "Embedded, not external.",
                copy: "Everyone who works on your engagement operates with a founder's mindset — accountable beyond their defined role, invested in the outcome, not just the output. We set clear owners, clean handoffs, and governance your team can run.",
              },
            ].map(({ label, copy }) => (
              <div
                key={label}
                className="group p-8 bg-white rounded-lg transition-all"
                style={{
                  border: "1px solid #E5E7EB",
                  borderTop: "3px solid #117C92",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 32px rgba(14,90,106,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 1px 3px rgba(0,0,0,0.04)";
                }}
              >
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: "#0A1220",
                  }}
                >
                  {label}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    fontFamily: "var(--font-sans)",
                    color: "#4B5563",
                  }}
                >
                  {copy}
                </p>
              </div>
            ))}
          </div>

          {/* Footer links */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-gray-100">
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-1 text-[#0E5A6A] hover:text-[#117C92] transition-colors"
              style={{ fontFamily: "var(--font-serif)", fontSize: "0.9375rem", textDecoration: "none" }}
            >
              See our capabilities
              <ArrowRight size={15} />
            </Link>
            <span style={{ color: "#D1D5DB", margin: "0 4px" }}>·</span>
            <Link
              to="/our-approach"
              className="inline-flex items-center gap-1 text-[#0E5A6A] hover:text-[#117C92] transition-colors"
              style={{ fontFamily: "var(--font-serif)", fontSize: "0.9375rem", textDecoration: "none" }}
            >
              Read the full methodology
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7 — LEADERSHIP / CANDICE ───────────────────────────── */}
      <section
        aria-label="About our founder, Candice Thompson"
        className="py-24 md:py-32"
        style={{ background: "#F4F6F7" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: prose */}
            <div className="lg:col-span-7">
              <div
                className="mb-5"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#117C92",
                }}
              >
                FOUNDED BY
              </div>

              <h2
                className="mb-8"
                style={{
                  fontSize: "clamp(1.875rem, 3.5vw, 2.625rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  fontFamily: "var(--font-serif)",
                  color: "#0A1220",
                }}
              >
                Leadership, not a personality brand.
              </h2>

              <div className="space-y-5">
                {[
                  "Candice Thompson has worked every side of this industry — inside enterprise organizations as an embedded leader, on the agency side driving strategy and media governance for Fortune 50 clients, and as a vendor partner navigating the complex ecosystem of platforms, technology, and competing priorities that define modern talent acquisition.",
                  "That breadth is deliberate. Understanding how decisions look from the client seat, the agency seat, and the vendor seat is what makes the work at Thompson & Co different. There are no blind spots about where accountability lives — or where it tends to disappear.",
                  "She built Thompson & Co Collective because the firm she needed didn't exist. One where the standard isn't negotiated down. Where senior strategy means senior involvement — not a senior name on a junior team's work. Where accountability doesn't end at the strategy deck.",
                  "The collective model exists because the problem demanded it. Not every engagement needs the same bench. But every engagement needs the right one — assembled around the actual problem, embedded in the work, and honest about what it finds.",
                ].map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.8,
                      fontFamily: "var(--font-sans)",
                      color: "#374151",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: credential callout */}
            <aside
              aria-label="Where Candice's work has lived"
              className="lg:col-span-5"
            >
              <div
                style={{
                  background: "white",
                  border: "1px solid #E5E7EB",
                  borderTop: "3px solid #117C92",
                  borderRadius: "4px",
                  padding: "32px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="mb-6"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#117C92",
                  }}
                >
                  WHERE THE WORK HAS LIVED
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    "Enterprise recruitment marketing governance across Fortune 50 and Fortune 500 environments",
                    "Multi-million dollar recruitment media oversight, attribution governance, and funnel diagnostics",
                    "AI-assisted candidate research environments and employer narrative control",
                    "HRIS ecosystem implementation and cross-platform tracking infrastructure",
                    "Employer brand consistency across multi-site, multi-business-unit organizations",
                    "Agency-side client partnership across employer brand, EVP, and recruitment marketing strategy",
                  ].map((item, i, arr) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 py-4"
                      style={{
                        borderBottom: i < arr.length - 1 ? "1px solid #F3F4F6" : "none",
                      }}
                    >
                      <span
                        style={{
                          color: "#117C92",
                          flexShrink: 0,
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.875rem",
                          marginTop: "2px",
                        }}
                      >
                        —
                      </span>
                      <span
                        style={{
                          fontSize: "0.9375rem",
                          lineHeight: 1.65,
                          fontFamily: "var(--font-sans)",
                          color: "#374151",
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8 — VALUES ───────────────────────────────────────────── */}
      <section
        aria-label="Our values - how we show up"
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0A1220 0%, #0E3A3A 100%)",
          color: "white",
        }}
      >
        {/* Subtle radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 15% 80%, rgba(17,124,146,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
          {/* Header */}
          <div className="max-w-xl mb-16">
            <div
              className="mb-4"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#117C92",
              }}
            >
              HOW WE SHOW UP
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.875rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-serif)",
                color: "white",
              }}
            >
              What we actually stand for.
            </h2>
          </div>

          {/* 5 value cards — 3 + 2 layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {[
              {
                title: "Relentless Curiosity",
                copy: "The industry is moving — AI, governance, compliance, candidate behaviour. We stay at the pulse of it because our clients need a partner who already knows what's coming, not one catching up after it arrives.",
              },
              {
                title: "The Collective is Real",
                copy: "We win together and lose together — with each other and with our clients. If we don't have the answer, we have the collective and the drive to find it. That's not a hedge. It's how we're built.",
              },
              {
                title: "Transparency, Even When It's Uncomfortable",
                copy: "We say what we see. Before scope is defined, during the work, and after it. If something isn't working, you'll hear it from us first — not discover it six months later in the data.",
              },
            ].map(({ title, copy }) => (
              <div
                key={title}
                className="p-8 rounded"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderTop: "2px solid rgba(17,124,146,0.6)",
                }}
              >
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    fontStyle: "italic",
                    lineHeight: 1.3,
                    color: "rgba(255,255,255,0.95)",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    fontFamily: "var(--font-sans)",
                    color: "rgba(255,255,255,0.62)",
                  }}
                >
                  {copy}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {[
              {
                title: "Excellence as the Floor",
                copy: "The standard isn't negotiable. Not because we're precious about it — because our clients are trusting us with work that directly impacts how talent finds, evaluates, and chooses them.",
              },
              {
                title: "We Keep It Human",
                copy: "We laugh, often. We work harder because of it. We show up as full people — because that's the only way to build a partnership that actually holds. Good business and good citizenship have never been competing values.",
              },
            ].map(({ title, copy }) => (
              <div
                key={title}
                className="p-8 rounded"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderTop: "2px solid rgba(17,124,146,0.6)",
                }}
              >
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    fontStyle: "italic",
                    lineHeight: 1.3,
                    color: "rgba(255,255,255,0.95)",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    fontFamily: "var(--font-sans)",
                    color: "rgba(255,255,255,0.62)",
                  }}
                >
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 9 — CTA BAND ─────────────────────────────────────────── */}
      <section
        aria-label="Call to action - connect with Thompson and Co Collective"
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0E5A6A 0%, #117C92 100%)",
          color: "white",
        }}
      >
        {/* Subtle overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ zIndex: 1 }}>
          {/* Eyebrow */}
          <div
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span style={{ display: "block", width: "28px", height: "1px", background: "rgba(255,255,255,0.35)" }} />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              READY TO MOVE FORWARD?
            </span>
            <span style={{ display: "block", width: "28px", height: "1px", background: "rgba(255,255,255,0.35)" }} />
          </div>

          {/* Headline */}
          <h2
            className="mb-6 max-w-3xl mx-auto"
            style={{
              fontSize: "clamp(1.875rem, 3.5vw, 2.875rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontFamily: "var(--font-serif)",
            }}
          >
            Let's assess what's working — and what's holding you back.
          </h2>

          {/* Subhead */}
          <p
            className="mb-12 max-w-2xl mx-auto"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              fontFamily: "var(--font-sans)",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            The first conversation is a diagnosis, not a pitch. We'll tell you honestly where we
            think the gaps are — and whether we're the right fit to close them.
          </p>

          {/* Thin divider */}
          <div
            className="mx-auto mb-12"
            style={{ width: "48px", height: "1px", background: "rgba(255,255,255,0.25)" }}
          />

          {/* CTAs */}
          <div className="flex justify-center">
            <CtaPair variant="light" />
          </div>
        </div>
      </section>
    </main>
  );
}
