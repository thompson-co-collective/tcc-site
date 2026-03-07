import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-block mb-6">
            <span 
              className="text-[#117C92] px-4 py-2 rounded-full border border-[#117C92]/30 text-sm"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
            >
              About Us
            </span>
          </div>
          
          <h2 
            className="mb-8 text-[#0A1220]"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-serif)',
            }}
          >
            We Align Brand, Talent,{' '}
            <span 
              style={{ 
                fontFamily: 'var(--font-script)',
                fontWeight: 400,
                color: 'var(--teal-primary)',
              }}
            >
              & 
            </span>{' '}
            Growth
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <p 
              className="text-gray-700"
              style={{
                fontSize: '1.25rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
              }}
            >
              Thompson & Co Collective is a North Carolina-based consultancy focused on one thing: 
              helping employers become the place great people want to work.
            </p>
            
            <p 
              className="text-gray-700"
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
              }}
            >
              Drawing on deep in-house and agency-side experience across retail, tech, and services, 
              we blend employer branding, recruitment marketing, and candidate experience design into 
              one coherent system.
            </p>

            <p 
              className="text-gray-700"
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-sans)',
              }}
            >
              <strong style={{ fontFamily: 'var(--font-serif)', color: 'var(--teal-primary)' }}>
                The outcome:
              </strong>{' '}
              clearer stories, stronger pipelines, and hiring that finally feels strategic.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="mb-20">
          <div className="aspect-[21/9] rounded-lg overflow-hidden shadow-2xl relative">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[#0E5A6A]/10 to-[#117C92]/5"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
              alt="Thompson & Co team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Metrics/Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="text-center group">
            <div 
              className="mb-4 text-[#117C92] inline-block relative"
              style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                lineHeight: 1,
              }}
            >
              15+
              <div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#117C92] to-[#0E5A6A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div 
              className="text-[#0A1220] mb-2"
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
              }}
            >
              Years
            </div>
            <p 
              className="text-gray-600 text-sm"
              style={{ fontFamily: 'var(--font-sans)', lineHeight: 1.6 }}
            >
              Leading recruitment marketing and employer branding for national brands.
            </p>
          </div>

          <div className="text-center group">
            <div 
              className="mb-4 text-[#117C92] inline-block relative"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                lineHeight: 1.2,
              }}
            >
              Brand + Talent
              <div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#117C92] to-[#0E5A6A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div 
              className="text-[#0A1220] mb-2"
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
              }}
            >
              Focus
            </div>
            <p 
              className="text-gray-600 text-sm"
              style={{ fontFamily: 'var(--font-sans)', lineHeight: 1.6 }}
            >
              We connect your consumer brand, EVP, and hiring funnel instead of treating them as separate projects.
            </p>
          </div>

          <div className="text-center group">
            <div 
              className="mb-4 text-[#117C92] inline-block relative"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                lineHeight: 1.2,
              }}
            >
              Full Funnel
              <div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#117C92] to-[#0E5A6A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div 
              className="text-[#0A1220] mb-2"
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
              }}
            >
              View
            </div>
            <p 
              className="text-gray-600 text-sm"
              style={{ fontFamily: 'var(--font-sans)', lineHeight: 1.6 }}
            >
              From awareness and media to apply flow, nurture, and onboarding.
            </p>
          </div>

          <div className="text-center group">
            <div 
              className="mb-4 text-[#117C92] inline-block relative"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                lineHeight: 1.2,
              }}
            >
              Collective
              <div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#117C92] to-[#0E5A6A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div 
              className="text-[#0A1220] mb-2"
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
              }}
            >
              Model
            </div>
            <p 
              className="text-gray-600 text-sm"
              style={{ fontFamily: 'var(--font-sans)', lineHeight: 1.6 }}
            >
              Strategy led by Thompson & Co, with a vetted bench for creative, media, and tech when you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}