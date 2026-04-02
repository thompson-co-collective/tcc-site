import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CtaPair } from "../components/CtaPair";

export default function OurApproachPage() {
  const location = useLocation();

  useEffect(() => {
    document.title = "How We Work | Employer Brand Methodology | Thompson & Co Collective";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Our approach is built on a proprietary employer brand operating framework — designed to govern, measure, and sustain the story we build together. Discover, Diagnose, Activate, Measure & Optimize."
      );
    }

    // Track time on page
    const startTime = Date.now();
    return () => {
      const timeOnPage = Math.floor((Date.now() - startTime) / 1000);
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'time_on_page', {
          'event_category': 'engagement',
          'event_label': `${timeOnPage}s`
        });
      }
    };
  }, []);

  // Handle hash anchor scrolling
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main id="main-content">
      {/* Page Header */}
      <section 
        className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden"
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
          color: 'white',
        }}
      >
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <div 
            className="mb-5"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#117C92',
            }}
          >
            Our Approach
          </div>
          
          {/* H1 Heading - Two Lines */}
          <h1 
            className="mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 600,
              lineHeight: 1.3,
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-serif)',
            }}
          >
            Disciplined by design.
            <br />
            Evidence-led from day one.
          </h1>
          
          {/* Subhead - Proprietary Framework */}
          <p 
            className="max-w-3xl mx-auto mb-10 text-white/80"
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
            }}
          >
            Our methodology is built on a proprietary operating framework — developed to govern, measure, and sustain the employer brand story we build together.
          </p>

          {/* Hero CTAs */}
          <div className="flex justify-center">
            <CtaPair variant="light" />
          </div>
        </div>
      </section>

      {/* How We Work Section - Priority Fix #1 (HIGHEST IMPACT) */}
      <section className="how-we-work-full py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div 
              className="mb-3"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              How We Work
            </div>
            
            <h2 
              className="mb-5"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
              }}
            >
              A disciplined process.
            </h2>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-6xl mx-auto mb-16 list-none">
            {/* Step 1 - Discover */}
            <li className="relative">
              <div 
                className="mb-4 inline-flex items-center justify-center rounded-full"
                style={{
                  width: '54px',
                  height: '54px',
                  background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
                  color: 'white',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  fontSize: '1.25rem',
                }}
              >
                1
              </div>
              <h3 
                className="mb-3"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-serif)',
                  color: '#0A1220',
                }}
              >
                Discover
              </h3>
              <p 
                className="text-gray-600"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Every engagement begins with a conversation. We take the time to understand your business — the goals, the gaps, the urgency, and where talent attraction is creating the most friction. Some organizations need immediate execution. Others need to rebuild from the foundation up. Together, we determine the smartest next move.
              </p>
            </li>

            {/* Step 2 - Diagnose (with teal top border distinction) */}
            <li 
              className="relative"
              style={{
                borderTop: '3px solid #117C92',
                paddingTop: '1rem',
              }}
            >
              <div 
                className="mb-4 inline-flex items-center justify-center rounded-full"
                style={{
                  width: '54px',
                  height: '54px',
                  background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
                  color: 'white',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  fontSize: '1.25rem',
                }}
              >
                2
              </div>
              <h3 
                className="mb-3"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-serif)',
                  color: '#0A1220',
                }}
              >
                Diagnose
              </h3>
              <p 
                className="text-gray-600"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                For strategy work, the diagnostic is the starting point. It allows us to ground every recommendation in what's real — not what's assumed. We go deep before prescribing anything, working alongside your team. Every touchpoint examined. Every channel assessed. Metrics baselined. From those findings, we define the scope together — EVP, messaging architecture, proof structure, and creative direction. KPIs, benchmarks, and targets established in partnership, anchored in your operating reality rather than industry averages.
              </p>
            </li>

            {/* Step 3 - Activate */}
            <li className="relative">
              <div 
                className="mb-4 inline-flex items-center justify-center rounded-full"
                style={{
                  width: '54px',
                  height: '54px',
                  background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
                  color: 'white',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  fontSize: '1.25rem',
                }}
              >
                3
              </div>
              <h3 
                className="mb-3"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-serif)',
                  color: '#0A1220',
                }}
              >
                Activate
              </h3>
              <p 
                className="text-gray-600"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                With scope aligned and benchmarks set, we work as an embedded extension of your team. Campaigns, content, and candidate experiences executed across paid, owned, and earned channels. Media budgets governed. Vendor relationships managed. Every output remains accountable to the strategy we built together in Diagnose — not reinvented at launch.
              </p>
            </li>

            {/* Step 4 - Measure & Optimize */}
            <li className="relative">
              <div 
                className="mb-4 inline-flex items-center justify-center rounded-full"
                style={{
                  width: '54px',
                  height: '54px',
                  background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
                  color: 'white',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  fontSize: '1.25rem',
                }}
              >
                4
              </div>
              <h3 
                className="mb-3"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-serif)',
                  color: '#0A1220',
                }}
              >
                Measure & Optimize
              </h3>
              <p 
                className="text-gray-600"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                We track what was promised against what's moving and bring it back to your leadership in clear, actionable reporting. Conversion data, source of hire, offer acceptance trends, and brand visibility across search, generative, and answer engines. We review the numbers together — and decide what moves next.
              </p>
            </li>
          </ol>

          {/* Italic Bridge Line */}
          <div className="text-center max-w-4xl mx-auto">
            <p 
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                color: '#6B7280',
              }}
            >
              Senior assembled. Work accountable.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROOF STANDARD MODULE ── */}
      <section
        id="proof-standard"
        className="py-20 md:py-28"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="max-w-3xl mb-14">
            <div
              className="mb-4"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Proof Standard
            </div>
            <h2
              className="mb-5"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 600,
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
              }}
            >
              No claims without proof.
            </h2>
            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.65,
                fontFamily: 'var(--font-sans)',
                color: '#4B5563',
              }}
            >
              Most employer brand work breaks because it's published as belief. We treat every external statement as a claim that must be scoped, tiered, and supported — so credibility holds up and teams can execute consistently. This is how we move faster without drifting.
            </p>
          </div>

          {/* 2×2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">

            {/* Card 1 — Truth Tiers */}
            <div
              className="p-8 rounded-lg"
              style={{
                borderTop: '3px solid #117C92',
                backgroundColor: '#F8F9FA',
              }}
            >
              <h3
                className="mb-5"
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-serif)',
                  color: '#0A1220',
                }}
              >
                Truth Tiers
              </h3>
              <div className="space-y-4">
                {[
                  { tier: 'T1', label: 'Current truth', desc: 'Verified and true today.' },
                  { tier: 'T2', label: 'Commitment', desc: 'In progress, timeboxed, actively being standardised.' },
                  { tier: 'T3', label: 'Aspiration', desc: 'Directional — not yet reliable as a promise.' },
                ].map(({ tier, label, desc }) => (
                  <div key={tier} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 flex items-center justify-center rounded"
                      style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                      }}
                    >
                      {tier}
                    </div>
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                          color: '#0A1220',
                        }}
                      >
                        {label}:
                      </span>{' '}
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.9375rem',
                          color: '#6B7280',
                          lineHeight: 1.5,
                        }}
                      >
                        {desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2 — Scope Rules */}
            <div
              className="p-8 rounded-lg"
              style={{
                borderTop: '3px solid #117C92',
                backgroundColor: '#F8F9FA',
              }}
            >
              <h3
                className="mb-5"
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-serif)',
                  color: '#0A1220',
                }}
              >
                Scope Rules
              </h3>
              <p
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  color: '#4B5563',
                }}
              >
                Every claim must specify where it's true.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Role family', 'Location', 'Level', 'Team', 'Exceptions'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      color: '#0E5A6A',
                      backgroundColor: 'rgba(17,124,146,0.08)',
                      border: '1px solid rgba(17,124,146,0.18)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3 — Proof Levels */}
            <div
              className="p-8 rounded-lg"
              style={{
                borderTop: '3px solid #117C92',
                backgroundColor: '#F8F9FA',
              }}
            >
              <h3
                className="mb-5"
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-serif)',
                  color: '#0A1220',
                }}
              >
                Proof Levels
              </h3>
              <div className="space-y-4 mb-5">
                {[
                  { tier: 'P1', label: 'Artifact', desc: 'Policy, template, SOP.' },
                  { tier: 'P2', label: 'Behavioral proof', desc: 'Observed adherence.' },
                  { tier: 'P3', label: 'Outcome proof', desc: 'Measured results.' },
                ].map(({ tier, label, desc }) => (
                  <div key={tier} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 flex items-center justify-center rounded"
                      style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #0E5A6A, #0A4A4E)',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                      }}
                    >
                      {tier}
                    </div>
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                          color: '#0A1220',
                        }}
                      >
                        {label}:
                      </span>{' '}
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.9375rem',
                          color: '#6B7280',
                        }}
                      >
                        {desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  fontStyle: 'italic',
                  color: '#9CA3AF',
                  lineHeight: 1.5,
                }}
              >
                Anything without proof is not publishable as a claim.
              </p>
            </div>

            {/* Card 4 — Proof Gate Workflow */}
            <div
              className="p-8 rounded-lg"
              style={{
                borderTop: '3px solid #117C92',
                backgroundColor: '#F8F9FA',
              }}
            >
              <h3
                className="mb-5"
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-serif)',
                  color: '#0A1220',
                }}
              >
                Proof Gate Workflow
              </h3>
              <div className="flex flex-wrap items-center gap-y-3 gap-x-0">
                {[
                  'Draft',
                  'Truth tier + scope',
                  'Evidence packet',
                  'Review',
                  'Approve',
                  'Publish',
                  'Refresh cadence',
                ].map((step, i, arr) => (
                  <div key={step} className="flex items-center">
                    <div
                      className="px-3 py-1.5 rounded"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        color: '#0E5A6A',
                        backgroundColor: 'rgba(17,124,146,0.08)',
                        border: '1px solid rgba(17,124,146,0.18)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {step}
                    </div>
                    {i < arr.length - 1 && (
                      <span
                        style={{
                          color: '#117C92',
                          fontSize: '0.75rem',
                          margin: '0 4px',
                          flexShrink: 0,
                        }}
                      >
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Close — Operational Outcomes */}
          <div
            className="rounded-lg p-8 md:p-10"
            style={{
              background: 'linear-gradient(135deg, #0A1628 0%, #0A4A4E 100%)',
              color: '#FFFFFF',
            }}
          >
            <h3
              className="mb-6"
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#FFFFFF',
              }}
            >
              What you get from this standard
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { headline: 'Faster execution', body: 'Teams stop improvising.' },
                { headline: 'Lower risk', body: "Claims don't outpace reality." },
                { headline: 'Better conversion', body: 'Credibility increases apply and acceptance rates.' },
                { headline: 'Less drift', body: 'Your story stays consistent across channels and recruiters.' },
              ].map(({ headline, body }) => (
                <div key={headline} className="flex items-start gap-3">
                  <span
                    style={{
                      color: '#117C92',
                      fontSize: '0.5rem',
                      marginTop: '7px',
                      flexShrink: 0,
                    }}
                  >
                    ◆
                  </span>
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: '#FFFFFF',
                      }}
                    >
                      {headline}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                        color: 'rgba(255,255,255,0.65)',
                      }}
                    >
                      {' '}— {body}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* AI & Visibility Section - Minor Fix: Update background color */}
      <section 
        id="ai-visibility"
        className="section-ai-visibility relative py-20 md:py-28 overflow-hidden"
        style={{
          backgroundColor: '#0A1628',
          color: '#FFFFFF',
        }}
      >
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div 
              className="mb-3"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              AI & Visibility
            </div>
            
            <h2 
              className="mb-10"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-serif)',
              }}
            >
              Employer brand is now an AI visibility problem as much as a marketing one.
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              <p 
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                  color: '#FFFFFF',
                }}
              >
                Candidates research employers before they apply — and increasingly, that research happens through AI-powered search. What gets surfaced isn't your best content. It's whatever is most available, most consistent, and most structured for machine interpretation.
              </p>

              <p 
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                  color: '#FFFFFF',
                }}
              >
                If your story isn't governed across every channel, AI assembles its own version. That version becomes the first impression — before a candidate ever reaches your careers page, reads a job ad, or speaks to a recruiter.
              </p>

              <p 
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                  color: '#FFFFFF',
                }}
              >
                We build and govern content that holds up in search, in generative engines, and in the room. Every claim verified. Every channel aligned. Every touchpoint accountable to the story you meant to tell.
              </p>
            </div>

            {/* Ghost CTA2 - View Capabilities */}
            <div className="text-center pt-6 pb-8">
              <Link
                to="/capabilities"
                className="inline-flex items-center justify-center px-8 py-4 rounded transition-all hover:bg-white/10"
                style={{
                  minHeight: '56px',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-serif)',
                  border: '2px solid white',
                  color: 'white',
                }}
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'cta_primary_clicked', {
                      'event_category': 'conversion',
                      'event_label': 'View Capabilities - AI & Visibility'
                    });
                  }
                }}
                aria-label="View Capabilities - see our services"
              >
                <span>View Capabilities</span>
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>

          {/* How we address it - Chip Bar - Minor Fix: Update label */}
          <div className="text-center pt-10 border-t border-white/20">
            <div 
              className="mb-5"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              Where We Govern Your Story
            </div>
            
            <div 
              className="flex flex-wrap justify-center items-center gap-1 max-w-4xl mx-auto"
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
              }}
            >
              <span>SEO</span>
              <span style={{ color: '#117C92', fontSize: '0.5rem', margin: '0 4px' }}>◆</span>
              <span>Generative Engine Optimization (GEO)</span>
              <span style={{ color: '#117C92', fontSize: '0.5rem', margin: '0 4px' }}>◆</span>
              <span>Answer Engine Optimization (AEO)</span>
              <span style={{ color: '#117C92', fontSize: '0.5rem', margin: '0 4px' }}>◆</span>
              <span>Narrative Governance</span>
              <span style={{ color: '#117C92', fontSize: '0.5rem', margin: '0 4px' }}>◆</span>
              <span>Content Architecture</span>
              <span style={{ color: '#117C92', fontSize: '0.5rem', margin: '0 4px' }}>◆</span>
              <span>Careers Page Optimization</span>
              <span style={{ color: '#117C92', fontSize: '0.5rem', margin: '0 4px' }}>◆</span>
              <span>Job Ad Structuring</span>
              <span style={{ color: '#117C92', fontSize: '0.5rem', margin: '0 4px' }}>◆</span>
              <span>Review Platform Strategy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Attraction Diagnostic Section */}
      <section 
        id="diagnostic-entry-point"
        className="section-audit-entry py-20 md:py-28"
        style={{
          backgroundColor: '#0A4A4E',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div>
              <div 
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#117C92',
                }}
              >
                Diagnostic Entry Point
              </div>
              
              {/* Priority Fix #5: Increase heading scale to display size */}
              <h2 
                className="audit-section-heading mb-8"
                style={{
                  fontSize: 'clamp(2.25rem, 4vw, 3rem)',
                  fontWeight: 600,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-serif)',
                  color: '#FFFFFF',
                }}
              >
                Before strategy, comes clarity.
              </h2>

              <p 
                className="mb-10"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                  color: 'rgba(255,255,255,0.9)',
                }}
              >
                The Attraction Diagnostic is our paid evidence pass across narrative, channels, candidate experience, and credibility governance — so the scope you invest in is grounded in reality, not assumptions. We go deep before prescribing anything. Every touchpoint examined, every channel assessed, every claim mapped against what can actually be defended.
              </p>

              {/* Primary CTA */}
              <div className="mb-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded transition-all hover:scale-105 hover:shadow-lg"
                  style={{
                    minHeight: '56px',
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-serif)',
                    backgroundColor: '#FFFFFF',
                    color: '#0A1220',
                  }}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'cta_primary_clicked', {
                        'event_category': 'conversion',
                        'event_label': 'Schedule a clarity call'
                      });
                    }
                  }}
                  aria-label="Schedule a clarity call - contact Thompson and Co Collective"
                >
                  <span>Schedule a clarity call →</span>
                </Link>
              </div>

              {/* Baseline callout block */}
              <div 
                className="mt-6 p-6 rounded"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderLeft: '3px solid #117C92',
                }}
              >
                <div 
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#117C92',
                  }}
                >
                  Self-Assessment
                </div>
                <p 
                  className="mb-3"
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(255,255,255,0.9)',
                  }}
                >
                  Not ready for a diagnostic conversation yet? Get your baseline in five minutes. It's a 13-question self-assessment that shows where signal, conversion, and experience are breaking down — before you spend another dollar guessing.
                </p>
                <Link 
                  to="/audit"
                  className="text-[#117C92] hover:underline"
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-serif)',
                  }}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'cta_secondary_clicked', {
                        'event_category': 'conversion',
                        'event_label': 'Get your baseline',
                        'cta_location': 'our-approach-page'
                      });
                    }
                  }}
                >
                  Get your baseline →
                </Link>
              </div>
            </div>

            {/* Right Column - What the audit covers & Right for you if */}
            <div className="space-y-10">
              {/* What the audit covers */}
              <div>
                <h3 
                  className="mb-6"
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-serif)',
                    color: '#FFFFFF',
                  }}
                >
                  What the audit covers:
                </h3>
                
                <ul 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  style={{
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(255,255,255,0.9)',
                    fontWeight: 500,
                  }}
                >
                  <li className="flex items-start">
                    <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '8px', marginTop: '6px' }}>◆</span>
                    <span>Narrative & Messaging Consistency</span>
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '8px', marginTop: '6px' }}>◆</span>
                    <span>Channel Performance Assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '8px', marginTop: '6px' }}>◆</span>
                    <span>Candidate Experience Audit</span>
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '8px', marginTop: '6px' }}>◆</span>
                    <span>Careers Page & Job Ad Review</span>
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '8px', marginTop: '6px' }}>◆</span>
                    <span>Competitive Positioning</span>
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '8px', marginTop: '6px' }}>◆</span>
                    <span>Metrics Baseline</span>
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '8px', marginTop: '6px' }}>◆</span>
                    <span>AI Visibility Assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '8px', marginTop: '6px' }}>◆</span>
                    <span>Claim Evidence Mapping</span>
                  </li>
                </ul>
              </div>

              {/* Right for you if */}
              <div>
                <h3 
                  className="mb-6"
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-serif)',
                    color: '#FFFFFF',
                  }}
                >
                  Right for you if:
                </h3>
                
                <ul 
                  className="space-y-4"
                  style={{
                    fontSize: '0.9375rem',
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: 1.6,
                  }}
                >
                  <li className="flex items-start">
                    <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '10px', marginTop: '8px' }}>◆</span>
                    <span>You're ready to invest in strategy but want the work grounded in your reality before scope is defined.</span>
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '10px', marginTop: '8px' }}>◆</span>
                    <span>You suspect your employer brand has gaps but don't have a clear picture of where.</span>
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '10px', marginTop: '8px' }}>◆</span>
                    <span>You've been running campaigns without a consistent baseline to measure against.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section 
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0A1628, #0E5A6A)',
          color: '#FFFFFF',
        }}
      >
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className="mb-4"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#117C92',
            }}
          >
            Let's Connect
          </div>

          <h2 
            className="mb-6"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-serif)',
            }}
          >
            Ready to strengthen your talent attraction?
          </h2>
          
          <p 
            className="mb-10 text-white/90 max-w-2xl mx-auto"
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
            }}
          >
            Start with a conversation. We'll listen first, then tell you honestly where we think we can have the most impact.
          </p>

          <div className="flex justify-center">
            <CtaPair variant="light" />
          </div>
        </div>
      </section>
    </main>
  );
}