import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { ServicesTicker } from "../components/ServicesTicker";
import { CtaPair } from "../components/CtaPair";
import ampersandWhite from "figma:asset/08c44e824fc6b0a553c3e2a047c8e46590fd9978.png";

export function HomePage() {
  useEffect(() => {
    document.title = "Thompson & Co Collective – Employer Brand & Recruitment Marketing";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Strategic employer branding and recruitment marketing that moves hiring outcomes. EVP development, candidate experience, and media governance that drives measurable results."
      );
    }

    // Add FAQ Schema for SEO/AEO
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = 'faq-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const faqs = [
    {
      question: "What does an employer brand consultant do?",
      answer: "An employer brand consultant builds the strategic foundation that makes talent attraction work — aligning your employee value proposition, recruitment marketing, and candidate experience so every touchpoint tells a consistent, credible story. At Thompson & Co Collective, that means more than recommendations. We build operating systems: EVP architecture, messaging frameworks, channel governance, and proof structures that hold up in search, in AI-assisted candidate research, and in the room with leadership. The work is grounded in a diagnostic audit before any strategy is defined — so every recommendation is based on your current reality, not assumptions."
    },
    {
      question: "What is an employee value proposition and why does it matter for hiring?",
      answer: "An employee value proposition (EVP) is the structured promise an organization makes to current and prospective employees — the sum of what you offer in exchange for their skills, time, and commitment. A well-developed EVP is the strategic core of employer brand — it defines what makes your organization a distinct place to work and provides the foundation for every piece of candidate-facing content, job ad, and recruitment marketing campaign. When an EVP is vague, unverifiable, or inconsistent across channels, it creates a credibility gap that costs organizations qualified applicants and offer acceptances. We develop EVPs grounded in evidence — so the claims you make are claims you can stand behind."
    },
    {
      question: "Who needs employer brand strategy and recruitment marketing services?",
      answer: "Any organization where talent attraction directly affects business outcomes — and where current hiring results suggest the existing approach is not working efficiently. Our clients range from growth-stage companies building their first structured employer brand to established enterprises whose narrative has drifted and needs governance. The common signal is the same across all of them: leadership that recognizes the connection between employer brand clarity, recruitment marketing performance, and bottom-line hiring costs — and wants the work to be accountable to measurable outcomes, not just deliverables produced."
    },
    {
      question: "How do you price employer brand and recruitment marketing engagements?",
      answer: "Most employer brand strategy and recruitment marketing engagements are structured as fixed-fee projects with defined scope, deliverables, and timelines — so you know exactly what you are buying before work begins. Ongoing recruitment marketing optimization, media governance, and advisory support are available on a fractional retainer basis for organizations that want sustained performance after the foundational work is complete. We recommend the right engagement model based on your goals, urgency, and where you are in the talent attraction maturity curve. The first conversation is a diagnosis — not a pitch."
    },
    {
      question: "Do you only work on employer brand, or do you cover the full recruitment marketing ecosystem?",
      answer: "Employer brand strategy and EVP development are the foundation of our work — but in practice, effective talent attraction requires governing the full ecosystem. Thompson & Co Collective services extend across recruitment marketing campaign strategy and execution, media governance and vendor accountability, candidate experience design, careers page and job ad optimization, ATS tracking and attribution, and employer brand visibility in AI-assisted search through generative engine optimization (GEO) and answer engine optimization (AEO). We work wherever narrative consistency and strategic clarity have a direct impact on application volume, candidate quality, cost-per-hire, and offer acceptance rates."
    },
    {
      question: "What does your employer brand engagement process look like?",
      answer: "Every engagement follows our four-phase methodology: Discover, Diagnose, Activate, and Measure and Optimize. The process begins with an attraction diagnostic — establishing a baseline across narrative consistency, channel performance, candidate experience gaps, and AI search visibility before any strategy is defined. From that foundation we develop the EVP architecture, messaging framework, and channel strategy together. Activation follows with campaigns, content, and candidate experiences built to the benchmarks established in the strategy phase. Foundational employer brand engagements typically run eight to sixteen weeks. We stay accountable to outcomes after launch — not just to deliverables at completion."
    },
    {
      question: "How do you measure the success of employer brand and recruitment marketing work?",
      answer: "We measure employer brand and recruitment marketing performance against the specific benchmarks established at the start of each engagement — not against generic industry averages. Key metrics include application volume and quality, conversion rates at each stage of the candidate funnel, cost-per-hire reduction, time-to-fill for priority roles, offer acceptance rates, and employer brand visibility across traditional search and AI-powered candidate research platforms. We report against those benchmarks in clear, leadership-ready summaries and use the data to decide what to optimize next. Success is measurable improvement in hiring outcomes — not a report delivered at project close."
    },
    {
      question: "What do you need from us to get started with employer brand or recruitment marketing work?",
      answer: "Not much to begin a conversation. We will want to understand your current hiring challenges, where you believe the gaps are, and what success looks like for your leadership. If you have existing brand assets, recruitment marketing campaign data, EVP documentation, or prior diagnostic work — bring it. If you do not have any of that yet, the baseline self-assessment is a structured starting point that establishes your talent attraction baseline in under five minutes. The first conversation is a diagnosis — we will tell you honestly what we see, where we think the highest-impact opportunities are, and whether Thompson & Co Collective is the right fit to address them."
    }
  ];

  return (
    <main id="main-content">
      {/* Hero Section */}
      <section 
        id="talent-audit"
        className="relative pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0A1628 0%, #0E5A6A 100%)',
          color: 'white',
          isolation: 'isolate',
        }}
      >
        {/* Hero Background Art — Ampersand Layers */}
        {/* AMP — Echo Layer (behind base, blurred depth) */}
        <div
          className="amp-echo"
          style={{
            position: 'absolute',
            right: '-45%',
            top: '50%',
            transform: 'translateY(-50%) rotate(18deg) translate(-18px, 22px) scaleX(0.6825)',
            width: 'min(2621px, 121.68vw)',
            height: 'auto',
            opacity: 0,
            pointerEvents: 'none',
            zIndex: 0,
            filter: 'blur(12px)',
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.8) 70%, white 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.8) 70%, white 100%)',
          }}
          aria-hidden="true"
        >
          <img
            src={ampersandWhite}
            alt=""
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
            draggable={false}
          />
        </div>

        {/* AMP — Base Layer (main white ampersand) */}
        <div
          className="amp-base"
          style={{
            position: 'absolute',
            right: '-45%',
            top: '50%',
            transform: 'translateY(-50%) rotate(18deg) scaleX(0.6825)',
            width: 'min(2621px, 121.68vw)',
            height: 'auto',
            opacity: 0.14,
            pointerEvents: 'none',
            zIndex: 0,
            filter: 'blur(0px)',
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.9) 60%, white 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.9) 60%, white 100%)',
          }}
          aria-hidden="true"
        >
          <img
            src={ampersandWhite}
            alt=""
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
            draggable={false}
          />
        </div>

        {/* Mobile-specific ampersand adjustments */}
        <style>{`
          @media (max-width: 768px) {
            .amp-base {
              opacity: 0.18 !important;
              right: -55% !important;
              width: 177.84vw !important;
              filter: blur(0px) !important;
            }
            .amp-echo {
              opacity: 0 !important;
              right: -55% !important;
              width: 177.84vw !important;
              filter: blur(10px) !important;
            }
          }
        `}</style>

        {/* Optional subtle spotlight glow behind headline */}
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(17,124,146,0.15) 0%, rgba(17,124,146,0.05) 50%, transparent 70%)',
            filter: 'blur(80px)',
            zIndex: 0,
          }}
        />

        {/* Static overlay — no animation */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(17,124,146,0.08) 50%, transparent 100%)',
            zIndex: 1,
          }}
        />

        {/* Vignette effects */}
        <div 
          className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(10,18,32,0.5) 0%, transparent 100%)',
            zIndex: 1,
          }}
        />

        <div 
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background: 'linear-gradient(0deg, rgba(14,90,106,0.4) 0%, transparent 100%)',
            zIndex: 1,
          }}
        />

        <div 
          className="absolute top-0 left-0 bottom-0 w-32 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(10,18,32,0.3) 0%, transparent 100%)',
            zIndex: 1,
          }}
        />

        <div 
          className="absolute top-0 right-0 bottom-0 w-32 pointer-events-none"
          style={{
            background: 'linear-gradient(270deg, rgba(10,18,32,0.3) 0%, transparent 100%)',
            zIndex: 1,
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 2 }}>
          {/* Eyebrow - left aligned */}
          <div 
            className="mb-6 animate-fadeInUpEyebrow"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            Talent Attraction · Employer Brand · Recruitment Marketing
          </div>

          {/* H1 - left aligned, large serif, with italic teal "Aligned." */}
          <h1 
            className="mb-8"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-serif)',
            }}
          >
            <span className="animate-fadeInUpH1Main">
              Talent. Brand. Experience.{' '}
            </span>
            <span 
              className="animate-fadeInUpH1Aligned"
              style={{
                color: '#117C92',
                fontStyle: 'italic',
              }}
            >
              Aligned.
            </span>
          </h1>
          
          {/* Subhead - left aligned, comfortable line length */}
          <p 
            className="mb-12 text-white/80 max-w-2xl animate-fadeInUpSubhead"
            style={{
              fontSize: 'clamp(1.0625rem, 1.75vw, 1.1875rem)',
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
            }}
          >
            We align your EVP, recruitment marketing, and candidate experience so your story holds up where it's evaluated first — <span 
              style={{
                color: '#ffffff',
                fontWeight: 600,
                fontStyle: 'italic',
              }}
            >in search</span>, <span 
              style={{
                color: '#ffffff',
                fontWeight: 600,
                fontStyle: 'italic',
              }}
            >in AI</span>, and <span 
              style={{
                color: '#ffffff',
                fontWeight: 600,
                fontStyle: 'italic',
              }}
            >in the room</span>.
          </p>

          {/* CTA System */}
          <div className="animate-fadeInCTA">
            <CtaPair variant="light" />
          </div>
        </div>

        {/* Animation styles */}
        <style>{`
          @keyframes fadeInUpCalm {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInSimple {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          /* Eyebrow: first element, 300ms */
          .animate-fadeInUpEyebrow {
            animation: fadeInUpCalm 300ms ease-out forwards;
            opacity: 0;
          }

          /* H1 main text: starts after eyebrow (300ms), duration 300ms */
          .animate-fadeInUpH1Main {
            animation: fadeInUpCalm 300ms ease-out 300ms forwards;
            opacity: 0;
          }

          /* "Aligned.": its own moment, starts after main H1 (600ms), slower 400ms */
          .animate-fadeInUpH1Aligned {
            animation: fadeInUpCalm 400ms ease-out 600ms forwards;
            opacity: 0;
          }

          /* Subhead: 400ms delay from H1 completion (1000ms), duration 350ms */
          .animate-fadeInUpSubhead {
            animation: fadeInUpCalm 350ms ease-out 1000ms forwards;
            opacity: 0;
          }

          /* CTAs: appear last, simple fade, no drift */
          .animate-fadeInCTA {
            animation: fadeInSimple 300ms ease-out 1200ms forwards;
            opacity: 0;
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-fadeInUpEyebrow,
            .animate-fadeInUpH1Main,
            .animate-fadeInUpH1Aligned,
            .animate-fadeInUpSubhead,
            .animate-fadeInCTA {
              animation: none;
              opacity: 1;
              transform: none;
            }
          }
        `}</style>
      </section>

      {/* Services Ticker */}
      <ServicesTicker />

      {/* Market Reality Section */}
      <section className="py-20 md:py-28 bg-white">
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
                color: 'rgba(14,90,106,0.7)',
              }}
            >
              Market Reality
            </div>
            
            <h2 
              className="mb-5"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
              }}
            >
              Three forces reshaping talent attraction
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Card 1 - AI */}
            <div 
              className="p-10 border border-gray-200 rounded-lg transition-all duration-300 hover:border-[#117C92]/50 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                animationDelay: '0.1s',
              }}
            >
              {/* Circle marker with glyph */}
              <div 
                className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
                  color: 'white',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '0.02em',
                }}
              >
                AI
              </div>

              {/* Eyebrow label */}
              <div 
                className="mb-5"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#117C92',
                }}
              >
                First Impressions
              </div>

              <h3 
                className="mb-4"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  lineHeight: 1.4,
                  fontFamily: 'var(--font-serif)',
                  color: '#0A1220',
                }}
              >
                Candidates are forming opinions about your employer brand before they ever reach your careers site.
              </h3>
              <p 
                className="text-gray-600 mb-4"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                AI-powered search is aggregating whatever exists about you — review sites, job posts, social content, news — and serving its own version of your story. If what candidates hear doesn't match what your careers page says, the inconsistency registers before a recruiter enters the conversation.
              </p>
              <p 
                className="text-gray-600"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                  fontStyle: 'italic',
                }}
              >
                The question isn't whether AI is shaping your first impression. It's whether you're governing what it finds.
              </p>

              {/* CTA Link with Tooltip */}
              <div className="relative" style={{ marginTop: '16px' }}>
                <Link 
                  to="/our-approach#ai-visibility"
                  className="market-reality-link"
                  aria-describedby="tooltip-card-1"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'market_reality_card_clicked', {
                        card: 'ai_first_impressions',
                        destination: '/our-approach#ai-visibility'
                      });
                    }
                  }}
                >
                  <span className="label-desktop">Govern your AI narrative</span>
                  <span className="label-mobile">Strengthen AI visibility</span>
                  <span className="link-arrow" aria-hidden="true">→</span>
                </Link>
                <div 
                  role="tooltip"
                  id="tooltip-card-1"
                  className="link-tooltip"
                >
                  Control the story before it gets told for you.
                </div>
              </div>
            </div>

            {/* Card 2 - Media */}
            <div 
              className="p-10 border border-gray-200 rounded-lg transition-all duration-300 hover:border-[#117C92]/50 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                animationDelay: '0.2s',
              }}
            >
              {/* Circle marker with glyph */}
              <div 
                className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
                  color: 'white',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  fontSize: '1.25rem',
                }}
              >
                ↗
              </div>

              {/* Eyebrow label */}
              <div 
                className="mb-5"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#117C92',
                }}
              >
                Spend & Conversion
              </div>

              <h3 
                className="mb-4"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  lineHeight: 1.4,
                  fontFamily: 'var(--font-serif)',
                  color: '#0A1220',
                }}
              >
                Paid media costs are rising. Conversion performance isn't keeping pace.
              </h3>
              <p 
                className="text-gray-600"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                57% of job seekers abandon applications because of complex processes and lack of transparency. If your spend is increasing but qualified applies aren't following — the bottleneck isn't your media strategy. It's what happens after the click. Governance gaps, tracking blind spots, and apply friction are quietly absorbing budget that should be driving hires.
              </p>

              {/* CTA Link with Tooltip */}
              <div className="relative" style={{ marginTop: '16px' }}>
                <Link 
                  to="/capabilities#recruitment-marketing"
                  className="market-reality-link"
                  aria-describedby="tooltip-card-2"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'market_reality_card_clicked', {
                        card: 'spend_conversion',
                        destination: '/capabilities#recruitment-marketing'
                      });
                    }
                  }}
                >
                  <span className="label-desktop">Improve paid media ROI</span>
                  <span className="label-mobile">Fix funnel friction</span>
                  <span className="link-arrow" aria-hidden="true">→</span>
                </Link>
                <div 
                  role="tooltip"
                  id="tooltip-card-2"
                  className="link-tooltip"
                >
                  Fix the friction between spend and application.
                </div>
              </div>
            </div>

            {/* Card 3 - EVP */}
            <div 
              className="p-10 border border-gray-200 rounded-lg transition-all duration-300 hover:border-[#117C92]/50 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                animationDelay: '0.3s',
              }}
            >
              {/* Circle marker with glyph */}
              <div 
                className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
                  color: 'white',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                }}
              >
                ✓
              </div>

              {/* Eyebrow label */}
              <div 
                className="mb-5"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#117C92',
                }}
              >
                Claims & Credibility
              </div>

              <h3 
                className="mb-4"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  lineHeight: 1.4,
                  fontFamily: 'var(--font-serif)',
                  color: '#0A1220',
                }}
              >
                Generic EVP language isn't just ineffective. It's becoming a liability.
              </h3>
              <p 
                className="text-gray-600 mb-4"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Candidates — and the AI systems they use — are getting better at identifying the gap between what employers claim and what employees actually experience. "Great culture" and "people-first" without specificity, proof, or consistency don't move apply rates or offer acceptance. They create doubt.
              </p>
              <p 
                className="text-gray-600"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                  fontStyle: 'italic',
                }}
              >
                The employers winning on credibility right now aren't saying more. They're saying things they can stand behind.
              </p>

              {/* CTA Link with Tooltip */}
              <div className="relative" style={{ marginTop: '16px' }}>
                <Link 
                  to="/capabilities#employer-brand-evp"
                  className="market-reality-link"
                  aria-describedby="tooltip-card-3"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'market_reality_card_clicked', {
                        card: 'claims_credibility',
                        destination: '/capabilities#employer-brand-evp'
                      });
                    }
                  }}
                >
                  <span className="label-desktop">Make your EVP defensible</span>
                  <span className="label-mobile">EVP credibility</span>
                  <span className="link-arrow" aria-hidden="true">→</span>
                </Link>
                <div 
                  role="tooltip"
                  id="tooltip-card-3"
                  className="link-tooltip"
                >
                  Build claims that hold up under scrutiny.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image Block */}
            <div 
              className="relative overflow-hidden rounded-lg"
              style={{
                backgroundColor: '#0A1220',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
               src="figma:asset/81163db9685a24443d48ae64863bdb3050b4e37d.png"
                alt="Thompson & Co Brand Mark"
                style={{
                  width: '120%',
                  height: '120%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'invert(48%) sepia(79%) saturate(426%) hue-rotate(140deg) brightness(95%) contrast(92%)',
                }}
              />
            </div>

            {/* Right Column - Content */}
            <div>
              {/* Eyebrow */}
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
                Who We Are
              </div>
              
              {/* Heading */}
              <h2 
                className="mb-8"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-serif)',
                  color: '#0A1220',
                }}
              >
                Enterprise expertise. Collective approach.
              </h2>

              {/* Body Copy - First Paragraph */}
              <p 
                className="mb-8 text-gray-700"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Thompson & Co Collective is a boutique consultancy built on nearly two decades of experience inside complex talent and brand challenges. We bring together industry veterans — senior strategists, creatives, and recruitment marketers — and embed them where the work actually happens.
              </p>

              {/* Blockquote Paragraph with Visual Distinction */}
              <p 
                className="mb-8 text-gray-700 pl-6"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                  borderLeft: '3px solid #117C92',
                }}
              >
                Not a large agency with overhead you pay for. Not a solo consultant without the bench. A collective — assembled around your problem, accountable to your outcomes.
              </p>

              {/* Proprietary Framework Line */}
              <p 
                className="mb-8"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: '#6B7280',
                }}
              >
                Our work is built on a proprietary employer brand operating framework — developed to govern, measure, and sustain the story we build together.
              </p>

              {/* CTA Link */}
              <Link
                to="/about"
                className="inline-flex items-center group"
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-sans)',
                  color: '#117C92',
                }}
              >
                <span className="border-b-2 border-[#117C92]/30 group-hover:border-[#117C92] transition-colors">
                  Our approach
                </span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 md:py-28 bg-white">
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
              What We Do
            </div>
            
            <h2 
              className="mb-5"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
              }}
            >
              The work that moves the needle.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
            {/* Card 1 - Employer Brand & EVP */}
            <div className="p-10 border border-gray-200 rounded-lg transition-all duration-300 hover:border-[#117C92]/50 hover:-translate-y-0.5 hover:shadow-lg">
              {/* Card Heading */}
              <h3 
                className="mb-5"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#117C92',
                }}
              >
                Employer Brand & EVP
              </h3>

              {/* Positioning Sentence */}
              <p 
                className="mb-6"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                  fontWeight: 400,
                }}
              >
                We build the story your ideal candidates will find, believe, and act on — across every channel it touches.
              </p>

              {/* Capability Chips */}
              <div 
                className="flex flex-wrap items-center gap-1"
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-sans)',
                  color: '#117C92',
                  fontStyle: 'italic',
                }}
              >
                <span>EVP Development</span>
                <span>Employer Brand Strategy</span>
                <span>Creative & Content</span>
              </div>
            </div>

            {/* Card 2 - Recruitment Marketing */}
            <div className="p-10 border border-gray-200 rounded-lg transition-all duration-300 hover:border-[#117C92]/50 hover:-translate-y-0.5 hover:shadow-lg">
              {/* Card Heading */}
              <h3 
                className="mb-5"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#117C92',
                }}
              >
                Recruitment Marketing
              </h3>

              {/* Positioning Sentence */}
              <p 
                className="mb-6"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                  fontWeight: 400,
                }}
              >
                We design and govern the campaigns, content, and media that turn interest into qualified applications.
              </p>

              {/* Capability Chips */}
              <div 
                className="flex flex-wrap items-center gap-1"
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-sans)',
                  color: '#117C92',
                  fontStyle: 'italic',
                }}
              >
                <span>Recruitment Marketing Campaigns</span>
                <span>Media Governance</span>
                <span>Vendor Management</span>
                <span>Job Ad Governance</span>
              </div>
            </div>

            {/* Card 3 - Candidate Experience */}
            <div className="p-10 border border-gray-200 rounded-lg transition-all duration-300 hover:border-[#117C92]/50 hover:-translate-y-0.5 hover:shadow-lg">
              {/* Card Heading */}
              <h3 
                className="mb-5"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#117C92',
                }}
              >
                Candidate Experience
              </h3>

              {/* Positioning Sentence */}
              <p 
                className="mb-6"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                  fontWeight: 400,
                }}
              >
                We close the gap between your brand promise and what candidates actually experience in the process.
              </p>

              {/* Capability Chips */}
              <div 
                className="flex flex-wrap items-center gap-1"
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-sans)',
                  color: '#117C92',
                  fontStyle: 'italic',
                }}
              >
                <span>Candidate Experience Design</span>
                <span>Careers Page & Job Ad Content</span>
                <span>Funnel Analytics</span>
              </div>
            </div>
          </div>

          {/* CTA Link */}
          <div className="text-center">
            <Link
              to="/capabilities"
              className="inline-flex items-center group"
              style={{
                fontSize: '1.0625rem',
                fontWeight: 500,
                fontFamily: 'var(--font-sans)',
                color: '#117C92',
              }}
            >
              <span className="border-b-2 border-[#117C92]/30 group-hover:border-[#117C92] transition-colors">
                View our full capabilities
              </span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 md:py-28 bg-gray-50">
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
              <br />
              <span style={{ fontWeight: 500 }}>No slide decks before work begins.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-6xl mx-auto mb-16">
            {/* Step 1 - Discover */}
            <div className="relative">
              <div 
                className="mb-4 inline-flex items-center justify-center rounded-full"
                style={{
                  width: '52px',
                  height: '52px',
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
                We start with a conversation to understand your business, your goals, and where talent attraction is creating friction. Together, we clarify what's urgent, what's foundational, and where to focus next.
              </p>
            </div>

            {/* Step 2 - Diagnose (with subtle distinction) */}
            <div 
              className="relative rounded-lg"
              style={{
                backgroundColor: 'rgba(17,124,146,0.02)',
                padding: '1rem',
                marginTop: '-1rem',
                marginBottom: '-1rem',
              }}
            >
              <div className="pt-4">
                <div 
                  className="mb-4 inline-flex items-center justify-center rounded-full"
                  style={{
                    width: '52px',
                    height: '52px',
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
                  Our diagnostic grounds every strategy decision. We examine touchpoints, assess channels, and baseline performance to define the right scope — EVP, messaging, proof, and creative direction — anchored in your reality, not industry averages.
                </p>
              </div>
            </div>

            {/* Step 3 - Activate */}
            <div className="relative">
              <div 
                className="mb-4 inline-flex items-center justify-center rounded-full"
                style={{
                  width: '52px',
                  height: '52px',
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
                With strategy aligned, we operate as an extension of your team. Campaigns, content, and candidate experiences are executed across paid, owned, and earned channels — all accountable to the strategy we built together.
              </p>
            </div>

            {/* Step 4 - Measure & Optimize */}
            <div className="relative">
              <div 
                className="mb-4 inline-flex items-center justify-center rounded-full"
                style={{
                  width: '52px',
                  height: '52px',
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
                We track performance against agreed benchmarks and bring insights back in clear, actionable reporting. Together, we review what's moving and determine what moves next.
              </p>
            </div>
          </div>

          {/* Italic Bridge Line */}
          <div className="text-center mb-8 max-w-4xl mx-auto">
            <p 
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                color: '#6B7280',
              }}
            >
              Every phase is supported by a proprietary operating framework — built to govern your story, measure what matters, and sustain performance after launch.
            </p>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
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
              Grounded in Outcomes
            </div>
            
            <h2 
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3rem)',
                fontWeight: 600,
                lineHeight: 1.4,
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
              }}
            >
              From growth stage to enterprise — the work holds.
            </h2>
          </div>
        </div>

        {/* Dark Navy Metrics Band - Full Width Interruption */}
        <div 
          className="relative py-16 md:py-20 mb-6"
          style={{
            backgroundColor: '#0A1628',
          }}
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'proof_section_view', {
                'event_category': 'engagement',
                'event_label': 'Metrics visible'
              });
            }
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-16 md:gap-0 max-w-6xl mx-auto">
              {/* Metric 1 */}
              <div className="flex-1 text-center metric-unit md:border-r md:border-white/10 md:pr-12 md:mr-12">
                <div 
                  style={{
                    fontSize: '5rem',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    fontFeatureSettings: '"tnum" 1',
                  }}
                  aria-label="58 percent increase in application volume"
                >
                  58%
                </div>
                <div 
                  className="metric-rule"
                  style={{
                    borderBottom: '2px solid #117C92',
                    width: '24px',
                    margin: '20px auto 16px',
                    display: 'block',
                  }}
                ></div>
                <div 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#117C92',
                    lineHeight: 1.4,
                  }}
                >
                  Increase in<br />Application Volume
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex-1 text-center metric-unit md:border-r md:border-white/10 md:pr-12 md:mr-12">
                <div 
                  style={{
                    fontSize: '5rem',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    fontFeatureSettings: '"tnum" 1',
                  }}
                  aria-label="25 percent reduction in cost-per-hire"
                >
                  25%
                </div>
                <div 
                  className="metric-rule"
                  style={{
                    borderBottom: '2px solid #117C92',
                    width: '24px',
                    margin: '20px auto 16px',
                    display: 'block',
                  }}
                ></div>
                <div 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#117C92',
                    lineHeight: 1.4,
                  }}
                >
                  Reduction in<br />Cost-Per-Hire
                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex-1 text-center metric-unit">
                <div 
                  style={{
                    fontSize: '5rem',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    fontFeatureSettings: '"tnum" 1',
                  }}
                  aria-label="20 percent decrease in time-to-fill"
                >
                  20%
                </div>
                <div 
                  className="metric-rule"
                  style={{
                    borderBottom: '2px solid #117C92',
                    width: '24px',
                    margin: '20px auto 16px',
                    display: 'block',
                  }}
                ></div>
                <div 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#117C92',
                    lineHeight: 1.4,
                  }}
                >
                  Decrease in<br />Time-to-Fill
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Attribution Line - Back on Light Gray */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p 
            className="text-center mb-20"
            data-content="founder-attribution"
            style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              color: '#888888',
            }}
          >
            Outcomes from engagements led by our founder.
          </p>

          {/* Bridge Thought - Authored Transition */}
          <p 
            className="text-center mb-16"
            style={{
              fontSize: '1.375rem',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              color: '#0A1220',
              lineHeight: 1.5,
            }}
          >
            What clients say when the strategy holds.
          </p>

          {/* Pull Quote Testimonials - No Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
            {/* Testimonial 1 - Editorial Pull Quote */}
            <div className="relative pl-6" style={{ borderLeft: '4px solid #117C92' }}>
              <p 
                className="mb-8"
                style={{
                  fontSize: '1.1875rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: '#0A1220',
                }}
              >
                Thompson & Co brought strategic clarity to our talent attraction efforts. The EVP work was evidence-based, not aspirational — and it's held up as we've scaled.
              </p>
              <div>
                <div 
                  style={{
                    fontSize: '0.9375rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    color: '#0A1220',
                    marginBottom: '4px',
                  }}
                >
                  — Chief People Officer
                </div>
                <div 
                  style={{
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-sans)',
                    color: '#888888',
                  }}
                >
                  Growth-stage SaaS company
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Editorial Pull Quote */}
            <div className="relative pl-6" style={{ borderLeft: '4px solid #117C92' }}>
              <p 
                className="mb-8"
                style={{
                  fontSize: '1.1875rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: '#0A1220',
                }}
              >
                Finally, someone who understands that recruitment marketing needs to be accountable. The media governance work alone paid for the engagement.
              </p>
              <div>
                <div 
                  style={{
                    fontSize: '0.9375rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    color: '#0A1220',
                    marginBottom: '4px',
                  }}
                >
                  — VP of Talent Acquisition
                </div>
                <div 
                  style={{
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-sans)',
                    color: '#888888',
                  }}
                >
                  Multi-unit enterprise
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div 
              className="mb-6"
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#0D7377',
              }}
            >
              COMMON QUESTIONS
            </div>
            
            <h2 
              className="mb-4"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-serif)',
                color: '#0A1628',
              }}
            >
              The questions worth asking.
            </h2>

            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                fontSize: '16px',
                color: '#888888',
              }}
            >
              Straightforward answers, grounded in real practice.
            </p>
          </div>

          {/* Two-Column Accordion Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Questions 1-4 */}
            <div>
              <Accordion type="single" collapsible>
                {faqs.slice(0, 4).map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-b border-gray-200"
                    style={{ borderColor: '#EEEEEE' }}
                  >
                    <AccordionTrigger 
                      className="text-left py-6 hover:no-underline faq-question-trigger"
                      style={{
                        fontSize: '17px',
                        fontWeight: 700,
                        color: '#0A1628',
                        fontFamily: 'Georgia, serif',
                      }}
                      onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).gtag) {
                          (window as any).gtag('event', 'faq_question_opened', {
                            question: faq.question,
                            position: index + 1
                          });
                        }
                      }}
                    >
                      <h3 style={{ fontWeight: 700, fontSize: '17px', margin: 0 }}>
                        {faq.question}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent 
                      className="pb-6 pr-8 faq-answer"
                      style={{
                        fontSize: '15px',
                        lineHeight: 1.7,
                        fontFamily: 'Arial, sans-serif',
                        color: '#0A1628',
                        paddingTop: '20px',
                        paddingBottom: '24px',
                        paddingLeft: '0',
                        paddingRight: '32px',
                      }}
                    >
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Right Column - Questions 5-8 */}
            <div>
              <Accordion type="single" collapsible>
                {faqs.slice(4, 8).map((faq, index) => (
                  <AccordionItem 
                    key={index + 4} 
                    value={`item-${index + 4}`}
                    className="border-b border-gray-200"
                    style={{ borderColor: '#EEEEEE' }}
                  >
                    <AccordionTrigger 
                      className="text-left py-6 hover:no-underline faq-question-trigger"
                      style={{
                        fontSize: '17px',
                        fontWeight: 700,
                        color: '#0A1628',
                        fontFamily: 'Georgia, serif',
                      }}
                      onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).gtag) {
                          (window as any).gtag('event', 'faq_question_opened', {
                            question: faq.question,
                            position: index + 5
                          });
                        }
                      }}
                    >
                      <h3 style={{ fontWeight: 700, fontSize: '17px', margin: 0 }}>
                        {faq.question}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent 
                      className="pb-6 pr-8 faq-answer"
                      style={{
                        fontSize: '15px',
                        lineHeight: 1.7,
                        fontFamily: 'Arial, sans-serif',
                        color: '#0A1628',
                        paddingTop: '20px',
                        paddingBottom: '24px',
                        paddingLeft: '0',
                        paddingRight: '32px',
                      }}
                    >
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band - Final Hero */}
      <section 
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0A1628 0%, #0E5A6A 100%)',
          color: 'white',
          borderTop: '1px solid rgba(255,255,255,0.10)',
        }}
      >
        {/* Spotlight Glow Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(600px 300px at 50% 35%, rgba(17,124,146,0.18), transparent 70%)',
          }}
        />
        
        {/* Diagonal Wash Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(17,124,146,0.08) 50%, transparent 100%)',
          }}
        />

        {/* Ampersand Watermark */}
        <div 
          className="absolute pointer-events-none select-none"
          style={{
            position: 'absolute',
            right: '-30%',
            top: '50%',
            transform: 'translateY(-50%) rotate(-20deg)',
            width: 'min(1680px, 78vw)',
            height: 'auto',
            opacity: 0.05,
            pointerEvents: 'none',
            zIndex: 0,
            filter: 'blur(1px)',
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.8) 70%, white 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.8) 70%, white 100%)',
          }}
          aria-hidden="true"
        >
          <img
            src={ampersandWhite}
            alt=""
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
            draggable={false}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <div 
            className="mb-5"
            style={{
              fontSize: '0.8125rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontFamily: 'var(--font-sans)',
              color: 'rgba(255,255,255,0.60)',
            }}
          >
            Ready to Move Forward?
          </div>

          {/* Headline */}
          <h2 
            className="mb-6"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-serif)',
              color: 'white',
            }}
          >
            Get a clear baseline — then prioritize what matters most.
          </h2>
          
          {/* Subhead */}
          <p 
            className="mb-10 max-w-2xl mx-auto"
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            Start with a clarity call. No pitch — just a structured discussion to surface the highest-impact next steps.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-4">
            <CtaPair variant="light" layout="row" />
          </div>

          {/* Optional Micro Trust Line */}
          <p 
            style={{
              fontSize: '0.875rem',
              fontFamily: 'var(--font-sans)',
              color: 'rgba(255,255,255,0.50)',
              fontStyle: 'italic',
            }}
          >
            No pitch. Just clarity.
          </p>
        </div>
      </section>

      {/* Market Reality CTA Styles */}
      <style>{`
        /* Market Reality Link Styles */
        .market-reality-link {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          color: #0D7377;
          font-family: Arial, sans-serif;
          font-size: 13px;
          text-decoration: none;
          opacity: 1;
          transition: opacity 140ms cubic-bezier(0.25, 0.1, 0.25, 1),
                      text-decoration 140ms cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        .market-reality-link:hover {
          opacity: 0.85;
          text-decoration: underline;
        }

        .link-arrow {
          display: inline-block;
          transition: transform 140ms cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        .market-reality-link:hover .link-arrow {
          transform: translateX(1px);
        }

        /* Tooltip */
        .link-tooltip {
          position: absolute;
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background-color: #0A1628;
          color: #FFFFFF;
          font-family: Arial, sans-serif;
          font-size: 12px;
          padding: 6px 8px;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 140ms cubic-bezier(0.25, 0.1, 0.25, 1);
          transition-delay: 200ms;
          z-index: 10;
        }

        .market-reality-link:hover + .link-tooltip,
        .market-reality-link:focus + .link-tooltip {
          opacity: 1;
        }

        /* Desktop - show desktop labels */
        @media (min-width: 768px) {
          .label-desktop {
            display: inline;
          }

          .label-mobile {
            display: none;
          }
        }

        /* Mobile - show mobile labels, hide tooltip */
        @media (max-width: 767px) {
          .link-tooltip {
            display: none;
          }

          .label-desktop {
            display: none;
          }

          .label-mobile {
            display: inline;
          }
        }

        /* FAQ Question Hover Effect */
        .faq-question-trigger:hover h3 {
          color: #0D7377;
          transition: color 140ms cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        .faq-question-trigger h3 {
          color: #0A1628;
          transition: color 140ms cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        /* FAQ Answer Expand Animation */
        .faq-answer {
          animation: faqExpandIn 200ms cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        @keyframes faqExpandIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}