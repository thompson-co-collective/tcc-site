import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Use | Thompson & Co Collective";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Thompson & Co Collective Terms of Use. These terms are written to be clear and direct. Learn about your rights and responsibilities when using our website."
      );
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="main-content">
      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden"
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
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            Terms of Use
          </div>
          
          {/* H1 */}
          <h1 
            className="mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 600,
              lineHeight: 1.3,
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-serif)',
            }}
          >
            Thompson & Co Collective
            <br />
            Terms of Use
          </h1>
          
          {/* Dates */}
          <p 
            className="text-white/70"
            style={{
              fontSize: '0.9375rem',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Effective Date: March 1, 2026 · Last Updated: March 1, 2026
          </p>
        </div>
      </section>

      {/* Plain Language Commitment */}
      <section 
        className="py-12 md:py-16"
        style={{
          backgroundColor: '#F7F9FA',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="p-8 md:p-10 rounded"
            style={{
              backgroundColor: 'white',
              borderLeft: '4px solid #117C92',
            }}
          >
            <h2 
              className="mb-4"
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#0A1220',
              }}
            >
              Plain Language Commitment
            </h2>
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.6,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              These terms are written to be clear and direct. If anything here is unclear, email us at{' '}
              <a 
                href="mailto:hello@thompsoncollective.co"
                className="text-[#117C92] hover:underline"
              >
                hello@thompsoncollective.co
              </a>{' '}
              — we're happy to explain.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p 
            className="mb-6"
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              fontFamily: 'var(--font-sans)',
              color: '#374151',
            }}
          >
            These Terms of Use ("Terms") govern your access to and use of the Thompson & Co Collective website at thompsoncollective.co ("the Site"), including all content, tools, and resources available through it. By accessing or using the Site, you agree to these Terms. If you do not agree, please do not use the Site.
          </p>
          <p 
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              fontFamily: 'var(--font-sans)',
              color: '#374151',
            }}
          >
            These Terms apply to all visitors, users, and anyone who accesses the Site. They govern your use of the Site only — not any professional services engagement with Thompson & Co Collective, which is governed by a separate written agreement.
          </p>
        </div>
      </section>

      {/* Section 1: Who We Are */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#F7F9FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 1
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              Who We Are
            </h2>
          </div>
          <div className="space-y-4">
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              Thompson & Co Collective is a boutique employer brand and recruitment marketing consultancy based in Lake Norman, North Carolina. We operate the Site to share information about our services, publish resources and insights, and connect with prospective clients.
            </p>
            <div 
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                fontFamily: 'var(--font-sans)',
                color: '#6B7280',
              }}
            >
              <p><strong>Contact:</strong> <a href="mailto:hello@thompsoncollective.co" className="text-[#117C92] hover:underline">hello@thompsoncollective.co</a></p>
              <p><strong>Website:</strong> thompsoncollective.co</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Acceptance of Terms */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 2
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              Acceptance of Terms
            </h2>
          </div>
          <div className="space-y-4">
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              By visiting or using the Site, you confirm that you are at least 18 years of age, have read and understood these Terms, and agree to be bound by them. If you are accessing the Site on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms.
            </p>
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              We reserve the right to update these Terms at any time. Changes take effect when posted. Continued use of the Site after changes are posted constitutes your acceptance of the updated Terms. We will update the effective date at the top of this page when changes are made.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Permitted Use */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#F7F9FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 3
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              Permitted Use
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <p 
                className="mb-4"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                  color: '#374151',
                }}
              >
                You may use the Site for lawful purposes only and in accordance with these Terms. Permitted uses include:
              </p>
              <ul 
                className="space-y-2"
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                  color: '#374151',
                  paddingLeft: '1.5rem',
                }}
              >
                <li>Browsing information about Thompson & Co Collective's services and approach</li>
                <li>Completing the Talent Maturity Audit for informational purposes</li>
                <li>Submitting inquiries through our contact form</li>
                <li>Subscribing to our newsletter or blog</li>
                <li>Accessing publicly available resources and content</li>
              </ul>
            </div>

            <div>
              <p 
                className="mb-4"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                  color: '#374151',
                }}
              >
                You agree not to:
              </p>
              <ul 
                className="space-y-2"
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                  color: '#374151',
                  paddingLeft: '1.5rem',
                }}
              >
                <li>Use the Site in any way that violates applicable federal, state, or local law</li>
                <li>Attempt to gain unauthorized access to any part of the Site or its underlying systems</li>
                <li>Use automated tools, bots, scrapers, or crawlers to extract data from the Site without our written permission</li>
                <li>Reproduce, distribute, modify, or create derivative works from Site content without our written permission</li>
                <li>Use the Site to transmit spam, malware, or any harmful or disruptive content</li>
                <li>Impersonate Thompson & Co Collective, its team, or any other person or entity</li>
                <li>Use the Site in any way that could damage, disable, or impair its functionality</li>
                <li>Collect personal information about other Site visitors without their consent</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Intellectual Property */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 4
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              Intellectual Property
            </h2>
          </div>
          <div className="space-y-6">
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              All content on the Site — including but not limited to text, copy, design, graphics, logos, the Thompson & Co Collective name and wordmark, the ampersand brand mark, the Talent Maturity Audit, the proprietary employer brand operating framework, methodology language, and all written materials — is the exclusive property of Thompson & Co Collective or its licensors and is protected by United States copyright, trademark, and other intellectual property laws.
            </p>

            <div>
              <p 
                className="mb-3"
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                What you may do:
              </p>
              <ul 
                className="space-y-2 mb-6"
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                  color: '#374151',
                  paddingLeft: '1.5rem',
                }}
              >
                <li>Read, view, and share links to publicly available pages on the Site</li>
                <li>Quote brief excerpts from Site content for commentary or reference, provided you clearly attribute Thompson & Co Collective and link back to the original page</li>
              </ul>

              <p 
                className="mb-3"
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                What you may not do:
              </p>
              <ul 
                className="space-y-2"
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                  color: '#374151',
                  paddingLeft: '1.5rem',
                }}
              >
                <li>Reproduce, republish, or distribute Site content in whole or in substantial part without written permission</li>
                <li>Use the Thompson & Co Collective name, wordmark, ampersand mark, or any associated branding in any way that implies endorsement or affiliation without written permission</li>
                <li>Copy, reverse engineer, or replicate the Talent Maturity Audit, the proprietary operating framework, or any methodology language for commercial use</li>
                <li>Remove or alter any copyright, trademark, or proprietary notices from Site content</li>
              </ul>
            </div>

            <p 
              style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              To request permission to use Site content, email{' '}
              <a href="mailto:hello@thompsoncollective.co" className="text-[#117C92] hover:underline">
                hello@thompsoncollective.co
              </a>{' '}
              with a description of your intended use.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: The Talent Maturity Audit — Important Limitations */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#F7F9FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 5
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              The Talent Maturity Audit (baseline self-assessment) — Important Limitations
            </h2>
          </div>
          <div className="space-y-4">
            <div 
              className="p-6 rounded"
              style={{
                backgroundColor: 'white',
                borderLeft: '4px solid #117C92',
              }}
            >
              <p 
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                  marginBottom: '0.5rem',
                }}
              >
                PLEASE READ THIS CAREFULLY
              </p>
              <p 
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                  color: '#374151',
                }}
              >
                The Talent Maturity Audit (baseline self-assessment) is an informational self-assessment tool only. It does not constitute a professional audit, assessment, diagnostic, or consulting engagement with Thompson & Co Collective.
              </p>
            </div>

            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              The baseline self-assessment is a self-administered tool designed to help organizations reflect on their current talent attraction maturity. Your responses and results are based entirely on your own self-reported inputs.
            </p>

            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              The results generated by the Audit are general and informational in nature. They are not tailored professional advice, do not reflect a comprehensive analysis of your organization, and should not be relied upon as the sole basis for business decisions.
            </p>

            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              Thompson & Co Collective makes no warranties regarding the accuracy, completeness, or fitness for a particular purpose of the Audit results. Completing the Audit does not create a client relationship, consulting agreement, or professional obligation of any kind between you and Thompson & Co Collective.
            </p>

            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              If you require a comprehensive professional assessment of your employer brand or recruitment marketing function, that work is conducted through a separate, paid engagement governed by a written agreement.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Site Content — Informational Purpose Only */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 6
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              Site Content — Informational Purpose Only
            </h2>
          </div>
          <div className="space-y-4">
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              All content published on the Site — including articles, blog posts, framework descriptions, methodology overviews, case study summaries, and resource materials — is provided for general informational purposes only.
            </p>
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              Nothing on the Site constitutes professional consulting advice, legal advice, financial advice, or any other form of professional advice. The content reflects Thompson & Co Collective's general perspectives and expertise and does not account for your organization's specific circumstances, needs, or goals.
            </p>
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              You should not act or refrain from acting on the basis of Site content alone. We recommend consulting directly with qualified professionals — including our team through a formal engagement — before making significant business decisions related to employer brand, recruitment marketing, or talent attraction strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Third-Party Links and Resources */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#F7F9FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 7
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              Third-Party Links and Resources
            </h2>
          </div>
          <div className="space-y-4">
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              The Site may contain links to third-party websites, tools, platforms, or resources that are not owned or controlled by Thompson & Co Collective. These links are provided for convenience and informational purposes only.
            </p>
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              We do not endorse, control, or assume responsibility for the content, privacy practices, accuracy, or availability of any third-party sites. Accessing third-party links is at your own risk and is governed by the terms and privacy policies of those sites, not these Terms.
            </p>
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              The presence of a link on our Site does not imply endorsement of that site, its content, or its operators.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Disclaimer of Warranties */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 8
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              Disclaimer of Warranties
            </h2>
          </div>
          <div className="space-y-4">
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
                fontWeight: 600,
              }}
            >
              THE SITE AND ALL CONTENT, TOOLS, AND MATERIALS AVAILABLE THROUGH IT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
            </p>

            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              To the fullest extent permitted by law, Thompson & Co Collective disclaims all warranties, including but not limited to:
            </p>

            <ul 
              className="space-y-2"
              style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
                paddingLeft: '1.5rem',
              }}
            >
              <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
              <li>Warranties that the Site will be uninterrupted, error-free, or free of viruses or other harmful components</li>
              <li>Warranties regarding the accuracy, completeness, reliability, or timeliness of any content on the Site</li>
              <li>Warranties that the Talent Maturity Audit results will be accurate, complete, or suitable for your organization's specific situation</li>
            </ul>

            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              Your use of the Site and any content or tools available through it is at your own risk.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Limitation of Liability */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#F7F9FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 9
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              Limitation of Liability
            </h2>
          </div>
          <div className="space-y-4">
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              To the fullest extent permitted by applicable law, Thompson & Co Collective, its founders, employees, contractors, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site, including but not limited to:
            </p>

            <ul 
              className="space-y-2"
              style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
                paddingLeft: '1.5rem',
              }}
            >
              <li>Loss of data, revenue, profits, or business opportunity</li>
              <li>Reliance on content, tools, or resources available through the Site</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Any other matter relating to the Site or its content</li>
            </ul>

            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              This limitation applies regardless of the legal theory under which such damages are claimed and even if Thompson & Co Collective has been advised of the possibility of such damages.
            </p>

            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              In no event shall Thompson & Co Collective's total liability to you for any claims arising from your use of the Site exceed one hundred dollars ($100.00).
            </p>

            <p 
              style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#6B7280',
              }}
            >
              Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities. In such jurisdictions, our liability is limited to the maximum extent permitted by law.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Indemnification */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 10
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              Indemnification
            </h2>
          </div>
          <div className="space-y-4">
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              You agree to indemnify, defend, and hold harmless Thompson & Co Collective and its founders, employees, contractors, and affiliates from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or related to:
            </p>

            <ul 
              className="space-y-2"
              style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
                paddingLeft: '1.5rem',
              }}
            >
              <li>Your use of the Site in violation of these Terms</li>
              <li>Your violation of any applicable law or regulation</li>
              <li>Your infringement of any third-party intellectual property or other rights</li>
              <li>Any content you submit through the Site, including contact form submissions or Audit responses</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 11: Privacy */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#F7F9FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 11
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              Privacy
            </h2>
          </div>
          <p 
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              fontFamily: 'var(--font-sans)',
              color: '#374151',
            }}
          >
            Your use of the Site is also governed by our Privacy Policy, available at{' '}
            <Link to="/privacy" className="text-[#117C92] hover:underline">
              thompsoncollective.co/privacy
            </Link>. The Privacy Policy is incorporated into these Terms by reference. By using the Site, you consent to the data practices described in the Privacy Policy.
          </p>
        </div>
      </section>

      {/* Section 12: Governing Law and Dispute Resolution */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 12
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              Governing Law and Dispute Resolution
            </h2>
          </div>
          <div className="space-y-4">
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              These Terms are governed by and construed in accordance with the laws of the State of North Carolina, without regard to its conflict of law principles.
            </p>
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              Any dispute arising from or relating to these Terms or your use of the Site shall first be addressed through good-faith direct communication with Thompson & Co Collective at{' '}
              <a href="mailto:hello@thompsoncollective.co" className="text-[#117C92] hover:underline">
                hello@thompsoncollective.co
              </a>. We will work to resolve disputes informally before either party pursues formal legal action.
            </p>
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              If informal resolution is not achieved, any legal action or proceeding arising from these Terms shall be brought exclusively in the state or federal courts located in North Carolina, and you consent to the personal jurisdiction of those courts.
            </p>
          </div>
        </div>
      </section>

      {/* Section 13: California Users */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#F7F9FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 13
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              California Users
            </h2>
          </div>
          <div className="space-y-4">
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              If you are a California resident, you may have additional rights under California law, including rights related to your personal information. Please refer to our Privacy Policy for a full description of your California rights under the California Consumer Privacy Act (CCPA).
            </p>
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              Under California Civil Code Section 1789.3, California users are entitled to the following consumer rights notice: the Site is provided by Thompson & Co Collective, Lake Norman, North Carolina. If you have a complaint regarding the Site or wish to request further information, contact us at{' '}
              <a href="mailto:hello@thompsoncollective.co" className="text-[#117C92] hover:underline">
                hello@thompsoncollective.co
              </a>. You may also contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs.
            </p>
          </div>
        </div>
      </section>

      {/* Section 14: Termination of Access */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 14
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              Termination of Access
            </h2>
          </div>
          <div className="space-y-4">
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              We reserve the right to suspend or terminate your access to the Site at any time, without notice, for conduct that we determine in our sole discretion violates these Terms, is harmful to other users, to us, or to third parties, or for any other reason.
            </p>
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              Upon termination, your right to use the Site ceases immediately. Provisions of these Terms that by their nature should survive termination — including intellectual property rights, disclaimers, limitations of liability, and governing law — will survive.
            </p>
          </div>
        </div>
      </section>

      {/* Section 15: Severability */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#F7F9FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 15
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              Severability
            </h2>
          </div>
          <p 
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              fontFamily: 'var(--font-sans)',
              color: '#374151',
            }}
          >
            If any provision of these Terms is found to be unenforceable or invalid under applicable law, that provision will be modified to the minimum extent necessary to make it enforceable, or severed if modification is not possible. The remaining provisions of these Terms will continue in full force and effect.
          </p>
        </div>
      </section>

      {/* Section 16: Entire Agreement */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 16
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              Entire Agreement
            </h2>
          </div>
          <div className="space-y-4">
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Thompson & Co Collective regarding your use of the Site. They supersede any prior agreements, representations, or understandings — written or oral — relating to the Site.
            </p>
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              These Terms do not govern any professional services engagement with Thompson & Co Collective. Services engagements are governed exclusively by a separate written agreement signed by both parties.
            </p>
          </div>
        </div>
      </section>

      {/* Section 17: Changes to These Terms */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#F7F9FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 17
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              Changes to These Terms
            </h2>
          </div>
          <div className="space-y-4">
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              We may update these Terms from time to time. When we do, we will update the effective date at the top of this page. Material changes will be noted clearly. We encourage you to review these Terms periodically.
            </p>
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              Continued use of the Site after updated Terms are posted constitutes your acceptance of the changes.
            </p>
          </div>
        </div>
      </section>

      {/* Section 18: Contact */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#117C92',
              }}
            >
              Section 18
            </span>
            <h2 
              className="mt-2"
              style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
                lineHeight: 1.3,
              }}
            >
              Contact
            </h2>
          </div>
          <div className="space-y-4">
            <p 
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              Questions about these Terms? We're straightforward to reach.
            </p>
            <div 
              style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#6B7280',
              }}
            >
              <p><strong>Thompson & Co Collective</strong></p>
              <p>Lake Norman, North Carolina</p>
              <p><a href="mailto:hello@thompsoncollective.co" className="text-[#117C92] hover:underline">hello@thompsoncollective.co</a></p>
              <p>thompsoncollective.co</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Legal Notice */}
      <section 
        className="py-8"
        style={{
          backgroundColor: '#0A1628',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p 
            style={{
              fontSize: '0.875rem',
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            Thompson & Co Collective · thompsoncollective.co · hello@thompsoncollective.co
            <br />
            © 2026 Thompson & Co Collective. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
