import { Users, TrendingUp, Target, Network } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    label: "15+ years",
    description: "Leading recruitment marketing and employer branding for national brands.",
  },
  {
    icon: Target,
    label: "Brand + Talent focus",
    description: "We connect your consumer brand, EVP, and hiring funnel instead of treating them as separate projects.",
  },
  {
    icon: Network,
    label: "Full-funnel view",
    description: "From awareness and media to apply flow, nurture, and onboarding.",
  },
  {
    icon: Users,
    label: "Collective model",
    description: "Strategy led by Thompson & Co, with a vetted bench for creative, media, and tech when you need it.",
  },
];

const collectiveMembers = [
  {
    name: "Creative & Design Partners",
    expertise: "Brand identity, campaign design, career site UX",
    description: "Award-winning designers who've built employer brands for Fortune 500s and high-growth startups.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    name: "Media & Performance Marketing",
    expertise: "Programmatic, social, search, display",
    description: "Specialists in talent acquisition media who optimize for apply rate, not just clicks.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    name: "Content & Storytelling",
    expertise: "EVP writing, employer value propositions, video",
    description: "Writers who translate company culture into messages that attract the right talent.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    name: "Technology & Analytics",
    expertise: "ATS integration, funnel analytics, martech stack",
    description: "Technologists who connect the dots between your systems and make data actionable.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
];

export function MeetCollectiveSection() {
  return (
    <section id="collective" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20 text-center mx-auto">
          <div className="inline-block mb-4">
            <span 
              className="text-[#117C92] px-4 py-2 rounded-full border border-[#117C92]/30 text-sm"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
            >
              The Collective
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
            Strategy-Led, Bench-Supported
          </h2>
          <p 
            className="text-gray-600"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
            }}
          >
            Thompson & Co leads every engagement with strategic clarity. When you need creative 
            execution, media buying, or technical implementation, we bring in vetted specialists 
            who understand employer branding and recruitment marketing at scale.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#117C92]/10 to-[#0E5A6A]/5 group-hover:from-[#117C92]/20 group-hover:to-[#0E5A6A]/10 transition-all">
                  <Icon className="w-8 h-8 text-[#117C92]" />
                </div>
                <h3 
                  className="mb-3 text-[#0A1220]"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    lineHeight: 1.3,
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  {metric.label}
                </h3>
                <p 
                  className="text-gray-600 text-sm"
                  style={{
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* About Link CTA */}
        <div className="text-center pt-12 border-t border-gray-200">
          <a 
            href="#about"
            className="inline-flex items-center gap-2 text-[#117C92] hover:text-[#0E5A6A] transition-colors group"
            style={{ 
              fontSize: '1.125rem',
              fontWeight: 600,
              fontFamily: 'var(--font-serif)',
            }}
          >
            Learn More About Our Approach
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
    </section>
  );
}