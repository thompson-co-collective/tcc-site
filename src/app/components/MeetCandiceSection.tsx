import { ImageWithFallback } from "./ui/ImageWithFallback";

export function MeetCandiceSection() {
  return (
    <section id="meet-candice" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#0E5A6A]/10 to-[#117C92]/5 rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Candice Thompson, Founder & Principal Consultant"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div 
                className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full opacity-20 -z-10"
                style={{
                  background: 'linear-gradient(135deg, var(--accentHero), var(--accentHero2))',
                  filter: 'blur(50px)',
                }}
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <div className="inline-block mb-4">
              <span 
                className="text-[#117C92] px-4 py-2 rounded-full border border-[#117C92]/30 text-sm"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '0.05em' }}
              >
                Meet Candice
              </span>
            </div>
            
            <h2 
              className="mb-6 text-[#0A1220]"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-serif)',
              }}
            >
              Founder & Principal Consultant
            </h2>

            <div className="space-y-5 mb-8">
              <p 
                className="text-gray-700"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Candice Thompson built Thompson & Co Collective around a simple truth: agencies shouldn't need a full-time senior hire to deliver enterprise-grade recruitment marketing and employer brand strategy. With 15+ years advising Fortune 50/500 organizations—including oversight of $15M+ in annual recruitment media—she brings strategic depth that strengthens delivery quality and outcomes, not just output.
              </p>

              <p 
                className="text-gray-700"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Her work sits at the intersection of employer brand, talent strategy, and performance marketing. She's partnered with CHROs, TA executives, and agency teams on the work that actually moves results: EVP and claims proof, narrative consistency where candidates use AI to evaluate employers early, media accountability, and candidate journeys built to convert.
              </p>

              <p 
                className="text-gray-700"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Candice operates as a trusted extension of your team—embedded enough to protect quality, senior enough to hold the strategic thread.{' '}
                <span style={{ fontStyle: 'italic' }}>Behind the scenes or client-facing. Your call.</span>
              </p>

              <p 
                className="text-gray-700"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Based in Lake Norman outside Charlotte, she supports agencies and in-house teams nationwide. Outside of work, she's usually mapping out her next destination, hosting family and friends, or getting outdoors with her Goldendoodle, Jillian Rae—who has strong opinions about pace.
              </p>
            </div>

            {/* Checkmarks */}
            <div className="space-y-3 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-start gap-3">
                <svg className="flex-shrink-0 mt-1" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#117C92" opacity="0.1"/>
                  <path d="M6 10l3 3 5-6" stroke="#117C92" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span 
                  className="text-gray-700"
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  Embedded delivery that matches your playbook
                </span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="flex-shrink-0 mt-1" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#117C92" opacity="0.1"/>
                  <path d="M6 10l3 3 5-6" stroke="#117C92" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span 
                  className="text-gray-700"
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  White-label or branded—designed around your needs
                </span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="flex-shrink-0 mt-1" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#117C92" opacity="0.1"/>
                  <path d="M6 10l3 3 5-6" stroke="#117C92" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span 
                  className="text-gray-700"
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  Strategy that holds up when the market shifts
                </span>
              </div>
            </div>

            {/* Button Circles */}
            <div className="flex flex-wrap gap-3">
              <div 
                className="px-4 py-2.5 rounded-full border text-sm"
                style={{
                  borderColor: '#117C92',
                  color: '#0A1220',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                }}
              >
                15+ Years
              </div>
              <div 
                className="px-4 py-2.5 rounded-full border text-sm"
                style={{
                  borderColor: '#117C92',
                  color: '#0A1220',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                }}
              >
                Fortune 50/500 Experience
              </div>
              <div 
                className="px-4 py-2.5 rounded-full border text-sm"
                style={{
                  borderColor: '#117C92',
                  color: '#0A1220',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                }}
              >
                $15M+ Annual Media Oversight
              </div>
              <div 
                className="px-4 py-2.5 rounded-full border text-sm"
                style={{
                  borderColor: '#117C92',
                  color: '#0A1220',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                }}
              >
                High-Volume Hourly → Executive
              </div>
              <div 
                className="px-4 py-2.5 rounded-full border text-sm"
                style={{
                  borderColor: '#117C92',
                  color: '#0A1220',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                }}
              >
                Multi-Unit Enterprises
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
