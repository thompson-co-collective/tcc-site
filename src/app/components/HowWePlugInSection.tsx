export function HowWePlugInSection() {
  return (
    <section 
      id="how-we-plug-in" 
      className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
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
            Collaboration Modes
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
            How We Plug In
          </h2>

          <p 
            className="max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              lineHeight: 1.7,
              fontFamily: 'var(--font-sans)',
              color: 'rgba(10,18,32,0.75)',
            }}
          >
            You choose the level of visibility. We match your process. Your clients feel the lift.
          </p>
        </div>

        {/* What stays consistent - moved ABOVE cards */}
        <div 
          className="text-center mb-12 md:mb-14"
          style={{
            fontSize: '1.0625rem',
            fontFamily: 'var(--font-sans)',
            color: 'rgba(10,18,32,0.7)',
            letterSpacing: '0.01em',
            fontWeight: 500,
            fontStyle: 'italic',
          }}
        >
          Your standards · Your tools · Your relationships
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Card 1 - Behind the Scenes */}
          <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#117C92]/30 transition-all duration-300">
            <div 
              className="inline-block px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(17,124,146,0.08)',
                color: '#0E5A6A',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}
            >
              Option 1
            </div>

            <h3 
              className="mb-4"
              style={{
                fontSize: 'clamp(1.375rem, 2vw, 1.625rem)',
                fontWeight: 600,
                lineHeight: 1.3,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
              }}
            >
              Behind the Scenes
            </h3>

            <p 
              className="mb-6"
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: 'rgba(10,18,32,0.75)',
              }}
            >
              Invisible to your clients. We operate under your brand, inside your systems, 
              following your workflow. You own the relationship—we deliver the work.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="#117C92" opacity="0.1"/>
                  <path d="M5 9l3 3 5-6" stroke="#117C92" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span 
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(10,18,32,0.8)',
                  }}
                >
                  Full white-label delivery
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="#117C92" opacity="0.1"/>
                  <path d="M5 9l3 3 5-6" stroke="#117C92" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span 
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(10,18,32,0.8)',
                  }}
                >
                  Direct to your team only
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="#117C92" opacity="0.1"/>
                  <path d="M5 9l3 3 5-6" stroke="#117C92" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span 
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(10,18,32,0.8)',
                  }}
                >
                  Execution-focused
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 - Collaborative Partner (Recommended) */}
          <div 
            className="bg-gradient-to-br from-[#117C92]/5 to-[#0E5A6A]/5 p-8 rounded-lg border-2 border-[#117C92] shadow-lg md:scale-105 relative"
          >
            <div 
              className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-semibold uppercase tracking-wider"
              style={{
                background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Most Common
            </div>

            <div 
              className="inline-block px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(17,124,146,0.15)',
                color: '#0E5A6A',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}
            >
              Option 2
            </div>

            <h3 
              className="mb-4"
              style={{
                fontSize: 'clamp(1.375rem, 2vw, 1.625rem)',
                fontWeight: 600,
                lineHeight: 1.3,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
              }}
            >
              Collaborative Partner
            </h3>

            <p 
              className="mb-6"
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: 'rgba(10,18,32,0.75)',
              }}
            >
              Strategic and execution partner. Client knows we're working together—we join 
              key meetings, co-present when needed, but you remain the primary relationship owner.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="#117C92" opacity="0.1"/>
                  <path d="M5 9l3 3 5-6" stroke="#117C92" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span 
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(10,18,32,0.8)',
                  }}
                >
                  Introduced as your specialist
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="#117C92" opacity="0.1"/>
                  <path d="M5 9l3 3 5-6" stroke="#117C92" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span 
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(10,18,32,0.8)',
                  }}
                >
                  Join working sessions + reviews
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="#117C92" opacity="0.1"/>
                  <path d="M5 9l3 3 5-6" stroke="#117C92" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span 
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(10,18,32,0.8)',
                  }}
                >
                  Strategy + execution together
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 - Named Expert */}
          <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#117C92]/30 transition-all duration-300">
            <div 
              className="inline-block px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(17,124,146,0.08)',
                color: '#0E5A6A',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}
            >
              Option 3
            </div>

            <h3 
              className="mb-4"
              style={{
                fontSize: 'clamp(1.375rem, 2vw, 1.625rem)',
                fontWeight: 600,
                lineHeight: 1.3,
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
              }}
            >
              Named Expert
            </h3>

            <p 
              className="mb-6"
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
                color: 'rgba(10,18,32,0.75)',
              }}
            >
              Full credibility play. We show up as the specialized expert your client needs—audits, 
              workshops, executive reviews—with your brand positioning intact.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="#117C92" opacity="0.1"/>
                  <path d="M5 9l3 3 5-6" stroke="#117C92" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span 
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(10,18,32,0.8)',
                  }}
                >
                  Direct client-facing role
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="#117C92" opacity="0.1"/>
                  <path d="M5 9l3 3 5-6" stroke="#117C92" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span 
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(10,18,32,0.8)',
                  }}
                >
                  Credible expert presence
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="#117C92" opacity="0.1"/>
                  <path d="M5 9l3 3 5-6" stroke="#117C92" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span 
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(10,18,32,0.8)',
                  }}
                >
                  Strategic moments that matter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
