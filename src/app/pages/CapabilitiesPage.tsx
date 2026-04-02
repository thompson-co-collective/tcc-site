import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CtaPair } from "../components/CtaPair";

export default function CapabilitiesPage() {
  const location = useLocation();

  useEffect(() => {
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
            Our Capabilities
          </div>
          
          {/* H1 Heading */}
          <h1 
            className="mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-serif)',
            }}
          >
            Work that holds up where it matters.
          </h1>
          
          {/* Subhead */}
          <p 
            className="max-w-3xl mx-auto mb-10 text-white/80"
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
            }}
          >
            Employer brand strategy, recruitment marketing, and candidate experience — delivered by a collective of industry veterans, accountable to your outcomes.
          </p>

          {/* Hero CTAs */}
          <div className="flex justify-center">
            <CtaPair variant="light" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Groups */}
          <div className="space-y-24">
            {/* GROUP 1 - Employer Brand & EVP */}
            <div id="employer-brand-evp">
              {/* Group Opener - Two Column - Priority Fix #2: Increased spacing & scale */}
              <div className="group-opener grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16" style={{ marginBottom: '48px' }}>
                {/* Left - Heading & Positioning */}
                <div>
                  <div 
                    className="service-group-eyebrow"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#117C92',
                      marginBottom: '16px',
                    }}
                  >
                    Employer Brand & EVP
                  </div>

                  <h2 
                    style={{
                      fontSize: 'clamp(1.75rem, 3vw, 2rem)',
                      fontWeight: 600,
                      lineHeight: 1.3,
                      fontFamily: 'var(--font-serif)',
                      color: '#0A1220',
                    }}
                  >
                    The story your best candidates find, believe, and act on.
                  </h2>
                  <p
                    className="mt-4"
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.6,
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                    }}
                  >
                    Governed across every channel it touches — from the first search impression to the offer conversation.
                  </p>
                </div>

                {/* Right - Right for you if */}
                <div className="flex flex-col justify-center">
                  <h3 
                    className="mb-5"
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-sans)',
                      color: '#0A1220',
                    }}
                  >
                    Right for you if:
                  </h3>
                  <ul 
                    className="space-y-3"
                    style={{
                      fontSize: '0.9375rem',
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                      lineHeight: 1.6,
                    }}
                  >
                    <li className="flex items-start">
                      <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '10px', marginTop: '8px' }}>◆</span>
                      <span>Your EVP is undefined, inconsistent, or hasn't been validated with real candidate or employee input.</span>
                    </li>
                    <li className="flex items-start">
                      <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '10px', marginTop: '8px' }}>◆</span>
                      <span>Your employer brand exists visually but lacks a proof-led narrative.</span>
                    </li>
                    <li className="flex items-start">
                      <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '10px', marginTop: '8px' }}>◆</span>
                      <span>You're losing candidates at the awareness or consideration stage and can't identify why.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service Cards */}
              <div className="service-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 border rounded-lg hover:border-[#117C92]/50 transition-colors" style={{ borderColor: '#E0E0E0' }}>
                  <h3 
                    className="mb-4"
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-serif)',
                      color: '#0A1220',
                    }}
                  >
                    EVP & Messaging
                  </h3>
                  <p 
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                    }}
                  >
                    Evidence-backed value propositions candidates can verify. Built on research, structured for consistency, and governed so claims hold up across every touchpoint.
                  </p>
                </div>

                <div className="p-6 border rounded-lg hover:border-[#117C92]/50 transition-colors" style={{ borderColor: '#E0E0E0' }}>
                  <h3 
                    className="mb-4"
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-serif)',
                      color: '#0A1220',
                    }}
                  >
                    Employer Brand Strategy
                  </h3>
                  <p 
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                    }}
                  >
                    Clear positioning in the talent market — differentiated, defensible, and built to hold up under AI-assisted research. From brand spine to messaging architecture.
                  </p>
                </div>

                <div className="p-6 border rounded-lg hover:border-[#117C92]/50 transition-colors" style={{ borderColor: '#E0E0E0' }}>
                  <h3 
                    className="mb-4"
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-serif)',
                      color: '#0A1220',
                    }}
                  >
                    Creative & Content
                  </h3>
                  <p 
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                    }}
                  >
                    Employer brand assets built to perform — not just look good. Career site content, social creative, recruitment collateral, and campaign assets aligned to your governed narrative.
                  </p>
                </div>
              </div>
            </div>

            {/* Priority Fix #2: Group Divider */}
            <div style={{ borderTop: '1px solid #EEEEEE', paddingTop: '64px', marginTop: '64px' }}></div>

            {/* Contextual Crosslink - Confirmed locked copy */}
            <div className="text-center" style={{ padding: '40px 0' }}>
              <p 
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'rgba(13,115,119,0.7)',
                }}
              >
                Senior assembled. Work accountable.{' '}
                <Link 
                  to="/our-approach" 
                  className="text-[#0D7377] hover:underline"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'crosslink_clicked', {
                        'event_category': 'navigation',
                        'event_label': 'our-approach',
                        'event_source': 'capabilities-page'
                      });
                    }
                  }}
                >
                  Learn how we work →
                </Link>
                {' '}
                <Link 
                  to="/insights" 
                  className="text-[#0D7377] hover:underline"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'crosslink_clicked', {
                        'event_category': 'navigation',
                        'event_label': 'insights',
                        'event_source': 'capabilities-page'
                      });
                    }
                  }}
                >
                  Read our insights →
                </Link>
              </p>
            </div>

            {/* Priority Fix #2: Group Divider */}
            <div style={{ borderTop: '1px solid #EEEEEE', paddingTop: '64px', marginTop: '64px' }}></div>

            {/* GROUP 2 - Recruitment Marketing - Priority Fix #3: Consolidated to 4 cards */}
            <div id="recruitment-marketing">
              {/* Group Opener - Two Column - Priority Fix #2: Increased spacing & scale */}
              <div className="group-opener grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16" style={{ marginBottom: '48px' }}>
                {/* Left - Heading & Positioning */}
                <div>
                  <div 
                    className="service-group-eyebrow"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#117C92',
                      marginBottom: '16px',
                    }}
                  >
                    Recruitment Marketing
                  </div>

                  <h2 
                    style={{
                      fontSize: 'clamp(1.75rem, 3vw, 2rem)',
                      fontWeight: 600,
                      lineHeight: 1.3,
                      fontFamily: 'var(--font-serif)',
                      color: '#0A1220',
                    }}
                  >
                    Campaigns, content, and media that convert — with spend accountability built in.
                  </h2>
                  <p
                    className="mt-4"
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.6,
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                    }}
                  >
                    Designed and governed from strategy through to performance. Every channel justified by data, not assumption.
                  </p>
                </div>

                {/* Right - Right for you if */}
                <div className="flex flex-col justify-center">
                  <h3 
                    className="mb-5"
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-sans)',
                      color: '#0A1220',
                    }}
                  >
                    Right for you if:
                  </h3>
                  <ul 
                    className="space-y-3"
                    style={{
                      fontSize: '0.9375rem',
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                      lineHeight: 1.6,
                    }}
                  >
                    <li className="flex items-start">
                      <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '10px', marginTop: '8px' }}>◆</span>
                      <span>Your media spend is increasing but qualified application volume isn't following.</span>
                    </li>
                    <li className="flex items-start">
                      <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '10px', marginTop: '8px' }}>◆</span>
                      <span>You have vendor relationships without clear performance accountability.</span>
                    </li>
                    <li className="flex items-start">
                      <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '10px', marginTop: '8px' }}>◆</span>
                      <span>Your job ads aren't converting or aren't consistent with your employer brand.</span>
                    </li>
                    <li className="flex items-start">
                      <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '10px', marginTop: '8px' }}>◆</span>
                      <span>You're spending on channels without knowing which ones are actually working.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service Cards - Priority Fix #3: 4 cards in single row */}
              <div className="service-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 border rounded-lg hover:border-[#117C92]/50 transition-colors" style={{ borderColor: '#E0E0E0' }}>
                  <h3 
                    className="mb-4"
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-serif)',
                      color: '#0A1220',
                    }}
                  >
                    Recruitment Marketing Campaigns
                  </h3>
                  <p 
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                    }}
                  >
                    Multi-channel campaigns designed to convert. Strategy, execution, and optimization — accountable to the benchmarks established in the diagnostic, not built from assumptions at launch.
                  </p>
                </div>

                <div className="p-6 border rounded-lg hover:border-[#117C92]/50 transition-colors" style={{ borderColor: '#E0E0E0' }}>
                  <h3 
                    className="mb-4"
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-serif)',
                      color: '#0A1220',
                    }}
                  >
                    Media & Vendor Governance
                  </h3>
                  <p 
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                    }}
                  >
                    Vendor oversight and budget accountability built in from day one. Spend allocated based on what actually performs — not habit or contract inertia. We manage the relationships so your team doesn't have to.
                  </p>
                </div>

                <div className="p-6 border rounded-lg hover:border-[#117C92]/50 transition-colors" style={{ borderColor: '#E0E0E0' }}>
                  <h3 
                    className="mb-4"
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-serif)',
                      color: '#0A1220',
                    }}
                  >
                    Job Ad & Content Governance
                  </h3>
                  <p 
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                    }}
                  >
                    Job ads are claims. We treat them that way. Consistent messaging structured for search and AI visibility — aligned to your employer narrative across every role, channel, and platform. Includes organic social content built to work alongside paid activity.
                  </p>
                </div>

                <div className="p-6 border rounded-lg hover:border-[#117C92]/50 transition-colors" style={{ borderColor: '#E0E0E0' }}>
                  <h3 
                    className="mb-4"
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-serif)',
                      color: '#0A1220',
                    }}
                  >
                    Channel Strategy & Analytics
                  </h3>
                  <p 
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                    }}
                  >
                    Strategic placement and governance across job boards, aggregators, and digital channels. Source tracking, performance monitoring, and spend accountability built in. Every channel justified by data, not assumption.
                  </p>
                </div>
              </div>
            </div>

            {/* Priority Fix #2: Group Divider */}
            <div style={{ borderTop: '1px solid #EEEEEE', paddingTop: '64px', marginTop: '64px' }}></div>

            {/* GROUP 3 - Candidate Experience - Priority Fix #6: Updated positioning with data */}
            <div id="candidate-experience">
              {/* Group Opener - Two Column - Priority Fix #2: Increased spacing & scale */}
              <div className="group-opener grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16" style={{ marginBottom: '48px' }}>
                {/* Left - Heading & Positioning */}
                <div>
                  <div 
                    className="service-group-eyebrow"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#117C92',
                      marginBottom: '16px',
                    }}
                  >
                    Candidate Experience
                  </div>

                  {/* Priority Fix #6: Updated positioning sentence with data point */}
                  <h2 
                    style={{
                      fontSize: 'clamp(1.75rem, 3vw, 2rem)',
                      fontWeight: 600,
                      lineHeight: 1.3,
                      fontFamily: 'var(--font-serif)',
                      color: '#0A1220',
                    }}
                  >
                    Close the gap between your brand promise and what candidates actually experience.
                  </h2>
                  <p
                    className="mt-4"
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.6,
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                    }}
                  >
                    Over 40% of applications are abandoned before completion. We close the gap — at every stage of the journey.
                  </p>
                </div>

                {/* Right - Right for you if */}
                <div className="flex flex-col justify-center">
                  <h3 
                    className="mb-5"
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-sans)',
                      color: '#0A1220',
                    }}
                  >
                    Right for you if:
                  </h3>
                  <ul 
                    className="space-y-3"
                    style={{
                      fontSize: '0.9375rem',
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                      lineHeight: 1.6,
                    }}
                  >
                    <li className="flex items-start">
                      <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '10px', marginTop: '8px' }}>◆</span>
                      <span>Your application completion rate is low or declining.</span>
                    </li>
                    <li className="flex items-start">
                      <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '10px', marginTop: '8px' }}>◆</span>
                      <span>Candidate feedback doesn't match your employer brand narrative.</span>
                    </li>
                    <li className="flex items-start">
                      <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '10px', marginTop: '8px' }}>◆</span>
                      <span>You're losing strong candidates between offer and acceptance.</span>
                    </li>
                    <li className="flex items-start">
                      <span style={{ color: '#117C92', fontSize: '0.5rem', marginRight: '10px', marginTop: '8px' }}>◆</span>
                      <span>Your careers page isn't converting visitors into applicants.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service Cards */}
              <div className="service-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 border rounded-lg hover:border-[#117C92]/50 transition-colors" style={{ borderColor: '#E0E0E0' }}>
                  <h3 
                    className="mb-4"
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-serif)',
                      color: '#0A1220',
                    }}
                  >
                    Candidate Experience Design
                  </h3>
                  <p 
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                    }}
                  >
                    Apply-to-offer journeys that reflect the quality of your brand. Every touchpoint mapped, every friction point identified, every SLA treated as a claim that requires evidence.
                  </p>
                </div>

                <div className="p-6 border rounded-lg hover:border-[#117C92]/50 transition-colors" style={{ borderColor: '#E0E0E0' }}>
                  <h3 
                    className="mb-4"
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-serif)',
                      color: '#0A1220',
                    }}
                  >
                    Careers Page & Job Ad Content
                  </h3>
                  <p 
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                    }}
                  >
                    Content that converts. AI-safe messaging, structured for search and generative engines, consistent from the first click through to application. Built to hold up where candidates evaluate you first.
                  </p>
                </div>

                <div className="p-6 border rounded-lg hover:border-[#117C92]/50 transition-colors" style={{ borderColor: '#E0E0E0' }}>
                  <h3 
                    className="mb-4"
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-serif)',
                      color: '#0A1220',
                    }}
                  >
                    Funnel Analytics
                  </h3>
                  <p 
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                    }}
                  >
                    Measurement built into the engagement from day one. Source of hire, conversion rates, time to decision, offer acceptance trends — tracked against the baselines we established together and reported in a format your leadership can act on.
                  </p>
                </div>

                <div className="p-6 border rounded-lg hover:border-[#117C92]/50 transition-colors" style={{ borderColor: '#E0E0E0' }}>
                  <h3 
                    className="mb-4"
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-serif)',
                      color: '#0A1220',
                    }}
                  >
                    Review Platform Strategy
                  </h3>
                  <p 
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                    }}
                  >
                    Glassdoor, Indeed, and Blind aren't passive channels. We govern your narrative presence on review platforms — responding with consistency, monitoring for message-reality drift, and ensuring what candidates find aligns with what you're claiming elsewhere.
                  </p>
                </div>
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
