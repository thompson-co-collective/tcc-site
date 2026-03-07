import { useEffect } from "react";
import { Link } from "react-router-dom";

export function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | Thompson & Co Collective";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Thompson & Co Collective privacy policy. We've written this policy to be readable — not to bury the important parts. Learn how we collect, use, and protect your information."
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
          background: 'linear-gradient(180deg, #0A1628 0%, #0E5A6A 100%)',
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
            Privacy Policy
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
            Privacy Policy
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
              We've written this policy to be readable — not to bury the important parts. If you have questions about anything here, email us directly at{' '}
              <a 
                href="mailto:hello@thompsonco.com"
                className="text-[#117C92] hover:underline"
              >
                hello@thompsonco.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p 
            className="mb-8"
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              fontFamily: 'var(--font-sans)',
              color: '#374151',
            }}
          >
            This Privacy Policy explains how Thompson & Co Collective ("we," "us," or "our") collects, uses, and protects information when you visit thompsonco.com, use our tools, or engage with us directly. It applies to all visitors, regardless of location, with specific additional rights for California residents noted in Section 9.
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
              Thompson & Co Collective is a boutique employer brand and recruitment marketing consultancy based in Lake Norman, North Carolina. We work with organizations to align their employer brand, recruitment marketing, and candidate experience.
            </p>
            <div 
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                fontFamily: 'var(--font-sans)',
                color: '#6B7280',
              }}
            >
              <p><strong>Mailing address:</strong> Lake Norman, NC</p>
              <p><strong>Contact:</strong> <a href="mailto:hello@thompsonco.com" className="text-[#117C92] hover:underline">hello@thompsonco.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Collect and Why */}
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
              What We Collect and Why
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
              We only collect information that serves a clear purpose. Here is what we collect, how, and why.
            </p>

            {/* Information you give us directly */}
            <div>
              <h3 
                className="mb-3"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Information you give us directly
              </h3>
              <ul className="space-y-3" style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                  <span><strong>Contact form submissions</strong> — your name, email address, company name, and any message you choose to send. We use this to respond to your inquiry.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                  <span><strong>Talent Maturity Audit (baseline self-assessment) responses</strong> — your answers to the 13-question self-assessment. We use this to provide your results and, if you opt in, to follow up with relevant resources.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                  <span><strong>Newsletter and blog subscriptions</strong> — your email address. We use this to send you content you've asked for. You can unsubscribe at any time.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                  <span><strong>Calendly bookings</strong> — your name, email, and scheduling information when you book a meeting through our Calendly link. Calendly's own privacy policy also applies to this data.</span>
                </li>
              </ul>
            </div>

            {/* Information collected automatically */}
            <div>
              <h3 
                className="mb-3"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Information collected automatically
              </h3>
              <ul className="space-y-3" style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                  <span><strong>Usage data</strong> — pages visited, time on page, referring URL, browser type, and device type. Collected via Google Analytics.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                  <span><strong>Interaction data</strong> — how you move through and engage with the site. Collected via Google Analytics and Meta Pixel.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                  <span><strong>Cookies</strong> — small text files placed on your device that help us understand how visitors use the site. See Section 5 for full cookie details.</span>
                </li>
              </ul>
            </div>

            {/* Information we do not collect */}
            <div>
              <h3 
                className="mb-3"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Information we do not collect
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                We do not collect sensitive personal information such as Social Security numbers, financial account information, health data, or government ID numbers. We do not knowingly collect information from anyone under the age of 18.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How We Use Your Information */}
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
              How We Use Your Information
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
              We use the information we collect for the following purposes:
            </p>
            <ul className="space-y-2" style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span>To respond to your inquiries and service requests</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span>To deliver the baseline self-assessment results and any follow-up resources you've requested</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span>To send newsletters or blog content you've subscribed to</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span>To schedule meetings you've initiated through Calendly</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span>To understand how visitors use our site so we can improve it</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span>To measure the performance of our content and outreach</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span>To fulfill legal obligations if required</span>
              </li>
            </ul>
            <p 
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
                marginTop: '1.5rem',
              }}
            >
              We do not sell your information. We do not use your information to make automated decisions that have legal or significant effects on you.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: How We Share Your Information */}
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
              How We Share Your Information
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
              We share information only where necessary to operate our business. The third parties we work with are:
            </p>

            {/* Google Analytics */}
            <div>
              <h3 
                className="mb-2"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Google Analytics
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                We use Google Analytics to understand site traffic and visitor behavior. Google may receive usage data including IP address (anonymized where possible), pages visited, and device information. Google's privacy policy governs their use of this data. You can opt out of Google Analytics tracking at{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#117C92] hover:underline">
                  tools.google.com/dlpage/gaoptout
                </a>.
              </p>
            </div>

            {/* Meta Pixel */}
            <div>
              <h3 
                className="mb-2"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Meta Pixel
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                We use Meta Pixel to measure the effectiveness of our content and understand how visitors interact with the site after engaging with our presence on Meta platforms (Facebook, Instagram). Meta may receive page visit data and interaction events. Meta's data policy governs their use of this data.
              </p>
            </div>

            {/* HubSpot */}
            <div>
              <h3 
                className="mb-2"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                HubSpot
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                We use HubSpot as our CRM and email marketing platform. Information submitted through our contact form, newsletter signup, and audit tool may be stored in HubSpot. HubSpot's privacy policy governs their handling of this data.
              </p>
            </div>

            {/* Calendly */}
            <div>
              <h3 
                className="mb-2"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Calendly
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                When you book a meeting through our Calendly link, your scheduling information is processed by Calendly. Calendly's privacy policy governs their handling of this data.
              </p>
            </div>

            {/* Gmail / Google Workspace */}
            <div>
              <h3 
                className="mb-2"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Gmail / Google Workspace
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                Direct email correspondence is managed through Google Workspace. Google's privacy policy governs their handling of email data.
              </p>
            </div>

            {/* Legal requirements */}
            <div>
              <h3 
                className="mb-2"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Legal requirements
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                We may disclose your information if required by law, court order, or governmental authority — or if we believe disclosure is necessary to protect the rights, property, or safety of Thompson & Co Collective, our clients, or others.
              </p>
            </div>

            {/* What We Do Not Do callout */}
            <div 
              className="p-6 rounded mt-8"
              style={{
                backgroundColor: '#F7F9FA',
                borderLeft: '4px solid #117C92',
              }}
            >
              <h3 
                className="mb-3"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#0A1220',
                }}
              >
                What We Do Not Do
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                We do not sell your personal information to third parties. We do not share your information with advertisers for their own marketing purposes. We do not use your data for AI model training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Cookies */}
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
              Cookies
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
              Cookies are small text files stored on your device when you visit a website. We use the following types of cookies:
            </p>

            {/* Essential cookies */}
            <div>
              <h3 
                className="mb-2"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Essential cookies
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                Required for the site to function. These cannot be disabled. They include session management and security cookies.
              </p>
            </div>

            {/* Analytics cookies */}
            <div>
              <h3 
                className="mb-2"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Analytics cookies
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                Used to understand how visitors interact with the site. Includes Google Analytics cookies (_ga, _gid, _gat). These cookies do not identify you personally — they track aggregated behavior across all visitors.
              </p>
            </div>

            {/* Marketing cookies */}
            <div>
              <h3 
                className="mb-2"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Marketing cookies
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                Used to measure content performance. Includes the Meta Pixel cookie (_fbp). This cookie helps us understand whether visitors who engaged with our Meta presence later visited our site.
              </p>
            </div>

            {/* Managing cookies */}
            <div>
              <h3 
                className="mb-2"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Managing cookies
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. Note that blocking essential cookies may affect site functionality. You can also opt out of Google Analytics tracking at{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#117C92] hover:underline">
                  tools.google.com/dlpage/gaoptout
                </a>{' '}
                and manage Meta cookie preferences through your Facebook settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Data Retention */}
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
              Data Retention
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
              We retain your information only as long as necessary for the purpose it was collected or as required by law.
            </p>
            <ul className="space-y-2" style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span><strong>Contact form submissions and direct correspondence</strong> — retained for the duration of our business relationship plus 3 years.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span><strong>Baseline self-assessment responses</strong> — retained for 12 months unless you request deletion sooner.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span><strong>Newsletter and blog subscriptions</strong> — retained until you unsubscribe.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span><strong>Analytics data</strong> — governed by Google Analytics and Meta retention settings, typically 14–26 months.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span><strong>CRM records in HubSpot</strong> — retained for the duration of our business relationship plus 3 years.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: Data Security */}
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
              Data Security
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
              We take reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, or loss. These measures include:
            </p>
            <ul className="space-y-2" style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span>Secure HTTPS connection across the entire site</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span>Access controls limiting who within our team can view collected data</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span>Use of reputable, security-certified third-party platforms (Google, HubSpot, Meta, Calendly)</span>
              </li>
            </ul>
            <p 
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
                marginTop: '1.5rem',
              }}
            >
              No method of transmission over the internet is completely secure. While we work to protect your information, we cannot guarantee absolute security. If you believe your information has been compromised, contact us immediately at{' '}
              <a href="mailto:hello@thompsonco.com" className="text-[#117C92] hover:underline">
                hello@thompsonco.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Your Rights */}
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
              Your Rights
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
              Regardless of your location, you have the right to:
            </p>
            <ul className="space-y-2" style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span>Request access to the personal information we hold about you</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span>Request correction of inaccurate information</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span>Request deletion of your information, subject to legal retention requirements</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span>Withdraw consent for email communications at any time by unsubscribing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                <span>Ask questions about how your data is used</span>
              </li>
            </ul>
            <p 
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
                marginTop: '1.5rem',
              }}
            >
              To exercise any of these rights, email us at{' '}
              <a href="mailto:hello@thompsonco.com" className="text-[#117C92] hover:underline">
                hello@thompsonco.com
              </a>. We will respond within 30 days.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: California Residents */}
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
              California Residents — Your Additional Rights (CCPA)
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
              If you are a California resident, the California Consumer Privacy Act (CCPA) grants you specific rights regarding your personal information.
            </p>

            {/* Your CCPA rights */}
            <div>
              <h3 
                className="mb-3"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Your CCPA rights
              </h3>
              <ul className="space-y-3" style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                  <span><strong>Right to know</strong> — you may request disclosure of the categories and specific pieces of personal information we have collected about you in the past 12 months, the sources of that information, the business purpose for collecting it, and the categories of third parties with whom we share it.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                  <span><strong>Right to delete</strong> — you may request deletion of personal information we have collected about you, subject to certain exceptions (such as information needed to complete a transaction or comply with a legal obligation).</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                  <span><strong>Right to opt out of sale</strong> — we do not sell personal information. This right is satisfied by our existing practice.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                  <span><strong>Right to non-discrimination</strong> — we will not discriminate against you for exercising any of your CCPA rights. Exercising your rights will not affect the quality of service you receive from us.</span>
                </li>
              </ul>
            </div>

            {/* How to submit a CCPA request */}
            <div>
              <h3 
                className="mb-2"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                How to submit a CCPA request
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                Email{' '}
                <a href="mailto:hello@thompsonco.com" className="text-[#117C92] hover:underline">
                  hello@thompsonco.com
                </a>{' '}
                with the subject line 'California Privacy Request' and describe your request. We will verify your identity before processing and respond within 45 days. If we need additional time (up to 90 days total), we will notify you in writing.
              </p>
            </div>

            {/* Authorized agents */}
            <div>
              <h3 
                className="mb-2"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Authorized agents
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                California residents may designate an authorized agent to make a request on their behalf. We will require written authorization from you and may verify your identity directly before processing the request.
              </p>
            </div>

            {/* Categories of personal information collected */}
            <div>
              <h3 
                className="mb-2"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Categories of personal information collected
              </h3>
              <p 
                className="mb-3"
                style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}
              >
                In the past 12 months, we have collected the following categories of personal information as defined by the CCPA:
              </p>
              <ul className="space-y-2" style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                  <span><strong>Identifiers</strong> — name, email address, IP address</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                  <span><strong>Commercial information</strong> — service inquiries and engagement history</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                  <span><strong>Internet or other electronic network activity</strong> — usage data, pages visited, interaction data</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#117C92', fontWeight: 600 }}>—</span>
                  <span><strong>Geolocation data</strong> — approximate location derived from IP address</span>
                </li>
              </ul>
              <p 
                className="mt-3"
                style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', color: '#374151' }}
              >
                We have not collected sensitive personal information as defined by the CCPA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Third-Party Links */}
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
              Third-Party Links
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
            Our site may contain links to third-party websites — including LinkedIn, and resources we reference in our content. We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies before providing any personal information.
          </p>
        </div>
      </section>

      {/* Section 11: Children's Privacy */}
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
              Children's Privacy
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
            Our site is not directed to children under the age of 18. We do not knowingly collect personal information from anyone under 18. If you believe we have inadvertently collected information from a minor, contact us immediately at{' '}
            <a href="mailto:hello@thompsonco.com" className="text-[#117C92] hover:underline">
              hello@thompsonco.com
            </a>{' '}
            and we will delete it promptly.
          </p>
        </div>
      </section>

      {/* Section 12: Changes to This Policy */}
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
              Changes to This Policy
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
              We may update this Privacy Policy from time to time to reflect changes in our practices, tools, or legal requirements. When we do, we will update the 'Last Updated' date at the top of this page. Material changes will be noted clearly. We encourage you to review this policy periodically.
            </p>
            <p 
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              Continued use of our site after changes are posted constitutes your acknowledgment of the updated policy.
            </p>
          </div>
        </div>
      </section>

      {/* Section 13: Contact Us */}
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
              Contact Us
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
              If you have questions, concerns, or requests regarding this Privacy Policy or how we handle your information, contact us directly:
            </p>
            <div 
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.8,
                fontFamily: 'var(--font-sans)',
                color: '#374151',
              }}
            >
              <p><strong>Thompson & Co Collective</strong></p>
              <p>Lake Norman, North Carolina</p>
              <p>
                <a href="mailto:hello@thompsonco.com" className="text-[#117C92] hover:underline">
                  hello@thompsonco.com
                </a>
              </p>
              <p>
                <a href="https://thompsonco.com" target="_blank" rel="noopener noreferrer" className="text-[#117C92] hover:underline">
                  thompsonco.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section 
        className="relative py-16 md:py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0A1628, #0E5A6A)',
          color: '#FFFFFF',
        }}
      >
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p 
            className="mb-6 text-white/90"
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
            }}
          >
            Questions about how we handle your information? We're here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white rounded transition-all hover:scale-105 hover:shadow-2xl"
            style={{ 
              minHeight: '56px',
              fontSize: '1.0625rem',
              fontWeight: 600,
              fontFamily: 'var(--font-serif)',
              color: '#0A1220',
            }}
            aria-label="Contact Us"
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
