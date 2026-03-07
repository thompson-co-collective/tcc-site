import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Candice and her team didn't just create campaigns—they redefined how we think about our employer brand. Our time-to-fill dropped by 30%, and candidate quality is the best it's been in years.",
    author: "Sarah Mitchell",
    role: "VP of Talent Acquisition",
    company: "National Retail Brand",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    quote: "Thompson & Co gave us the strategic clarity we'd been missing. Their approach to EVP development and funnel optimization made our recruiting feel intentional for the first time.",
    author: "Michael Chen",
    role: "Chief People Officer",
    company: "Healthcare System",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    quote: "We needed someone who could bridge brand and recruiting. Candice understood both sides perfectly—and helped us build a system that actually scales.",
    author: "Emily Rodriguez",
    role: "Director of Employer Brand",
    company: "Tech Startup",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
];

export function ProofSection() {
  return (
    <section id="proof" className="py-20 md:py-28 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section eyebrow */}
        <div 
          className="text-center mb-3"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8125rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(14,90,106,0.7)',
          }}
        >
          Proof
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20 text-center mx-auto">
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
            Trusted by talent leaders
          </h2>
          <p 
            className="text-gray-600"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
            }}
          >
            The same standards and outcomes—delivered in a partner model agencies can rely on.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 md:p-10 rounded-lg border border-gray-200 hover:border-[#117C92] hover:shadow-xl transition-all duration-300 group relative"
            >
              {/* Decorative gradient */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(90deg, var(--accentHero), var(--accentHero2))',
                }}
              />
              
              <Quote className="w-10 h-10 text-[#117C92] mb-6 opacity-25" />
              <blockquote 
                className="mb-8 text-gray-700"
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <div 
                  className="text-[#0A1220] mb-1"
                  style={{ 
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 600,
                    fontSize: '1rem',
                  }}
                >
                  {testimonial.author}
                </div>
                <div 
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study CTA */}
        <div className="mt-16 md:mt-20 p-10 md:p-12 rounded-lg text-white relative overflow-hidden">
          {/* Background with gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(600px 300px at 80% 20%, rgba(17,124,146,.4), transparent 70%),
                linear-gradient(135deg, var(--teal-primary), var(--teal-deep))
              `,
            }}
          />
          
          <div className="relative max-w-4xl">
            <div 
              className="text-sm text-white/70 uppercase tracking-wider mb-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Case Study
            </div>
            <h3 
              className="mb-6"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 600,
                lineHeight: 1.3,
                fontFamily: 'var(--font-serif)',
              }}
            >
              How a Regional Healthcare System Reduced Time-to-Fill by 40% and Increased 
              Application Quality Across High-Volume Roles
            </h3>
            <p 
              className="mb-8 text-white/90 max-w-3xl"
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                fontFamily: 'var(--font-sans)',
              }}
            >
              Through EVP clarification, targeted campaigns, and candidate experience redesign, 
              Thompson & Co helped a multi-site healthcare system transform their hiring outcomes 
              in under six months.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-white hover:text-white/90 transition-colors group"
              style={{ 
                fontSize: '1.125rem', 
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
              }}
            >
              Request Full Case Study
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}