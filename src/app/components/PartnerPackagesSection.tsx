export function PartnerPackagesSection() {
  const packages = [
    {
      title: "Execution Bench",
      descriptor: "Behind-the-scenes delivery capacity for ongoing accounts.",
      bestFor: "When you need consistent throughput without changing how you run the account.",
      includes: [
        "Campaign builds + refreshes",
        "Job ad governance + optimization support",
        "Career site + job content modules",
        "Apply-flow friction checks + recommendations",
        "Weekly performance pulse + next actions",
      ],
    },
    {
      title: "Co-Delivery Pod",
      descriptor: "Strategic lift + execution support when work is complex or cross-functional.",
      bestFor: "When you want a true embedded partner alongside your team.",
      includes: [
        "Working sessions + co-planning cadence",
        "EVP/messaging translated into campaign-ready assets",
        "Measurement + reporting structure (funnel-first)",
        "Role-family attraction plan + activation support",
        "Build → launch → iteration loop",
      ],
      isRecommended: true,
    },
    {
      title: "Specialist Drops",
      descriptor: "Fixed-scope expertise for audits, workshops, and performance reviews.",
      bestFor: "When a client needs credible expert presence for a moment that matters.",
      includes: [
        "Attraction Diagnostic + credibility scan",
        "Candidate journey + apply-flow review",
        "Job ad governance tune-up",
        "EVP claims-to-proof map",
        "Executive-ready findings + prioritized actions",
      ],
    },
  ];

  return (
    <section 
      id="partner-support"
      className="relative py-16 md:py-24 lg:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
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
            Partner Support
          </div>
          
          <h2 
            className="mb-5 md:mb-6"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-serif)',
              color: '#0A1220',
            }}
          >
            Partner Packages
          </h2>

          <p 
            className="max-w-3xl mx-auto mb-3"
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              lineHeight: 1.7,
              fontFamily: 'var(--font-sans)',
              color: 'rgba(10,18,32,0.75)',
            }}
          >
            Choose the support model that fits the account. Each package plugs into your workflow 
            and protects your quality bar.
          </p>

          <p 
            className="max-w-3xl mx-auto"
            style={{
              fontSize: '0.9375rem',
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
              color: 'rgba(10,18,32,0.65)',
            }}
          >
            Custom project and/or retainer based project scopes available.{' '}
            <a 
              href="#contact"
              style={{
                textDecoration: 'underline',
                color: '#117C92',
                fontWeight: 500,
              }}
            >
              Let's Chat
            </a>
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 md:mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative p-7 lg:p-8 rounded-lg border transition-all duration-300 hover:shadow-xl ${
                pkg.isRecommended 
                  ? 'bg-gradient-to-br from-[#117C92]/5 to-[#0E5A6A]/5 border-[#117C92] shadow-lg md:scale-105' 
                  : 'bg-white border-gray-200 hover:border-[#117C92]/40'
              }`}
            >
              {pkg.isRecommended && (
                <div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-semibold uppercase tracking-wider"
                  style={{
                    background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  Recommended
                </div>
              )}

              <h3 
                className="mb-3"
                style={{
                  fontSize: 'clamp(1.375rem, 2vw, 1.625rem)',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  fontFamily: 'var(--font-serif)',
                  color: '#0A1220',
                }}
              >
                {pkg.title}
              </h3>

              <p 
                className="mb-4"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                  color: 'rgba(10,18,32,0.75)',
                }}
              >
                {pkg.descriptor}
              </p>

              <div 
                className="mb-6 pb-6 border-b border-gray-200"
                style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.5,
                  fontFamily: 'var(--font-sans)',
                  color: 'rgba(10,18,32,0.65)',
                }}
              >
                <span style={{ fontWeight: 600, color: 'rgba(10,18,32,0.8)' }}>Best for:</span> {pkg.bestFor}
              </div>

              <div className="mb-2" style={{ 
                fontSize: '0.75rem', 
                fontWeight: 600, 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em',
                color: 'rgba(10,18,32,0.6)',
                fontFamily: 'var(--font-sans)',
              }}>
                Includes:
              </div>

              <ul className="space-y-2.5 mb-7">
                {pkg.includes.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="flex items-start gap-2.5"
                  >
                    <svg 
                      className="flex-shrink-0 mt-0.5" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 18 18" 
                      fill="none"
                    >
                      <circle cx="9" cy="9" r="9" fill="#117C92" opacity="0.1"/>
                      <path 
                        d="M5 9l3 3 5-6" 
                        stroke="#117C92" 
                        strokeWidth="1.8" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span 
                      style={{
                        fontSize: '0.875rem',
                        lineHeight: 1.6,
                        fontFamily: 'var(--font-sans)',
                        color: 'rgba(10,18,32,0.8)',
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 rounded transition-all hover:shadow-lg"
                style={{
                  background: pkg.isRecommended 
                    ? 'linear-gradient(135deg, #117C92, #0E5A6A)' 
                    : 'transparent',
                  color: pkg.isRecommended ? 'white' : '#117C92',
                  border: pkg.isRecommended ? 'none' : '2px solid #117C92',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                }}
              >
                Explore Partner Support
              </a>
            </div>
          ))}
        </div>

        {/* Microline under cards */}
        <div 
          className="text-center max-w-2xl mx-auto"
          style={{
            fontSize: '0.9375rem',
            lineHeight: 1.6,
            fontFamily: 'var(--font-sans)',
            color: 'rgba(10,18,32,0.7)',
            fontStyle: 'italic',
          }}
        >
          Not sure which package fits? We'll recommend the best model after a quick fit check.
        </div>
      </div>
    </section>
  );
}