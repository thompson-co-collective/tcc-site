import { Target, TrendingUp, Users, Megaphone, FileText, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Employer Brand Strategy",
    description: "EVP development, positioning frameworks, and narrative design that differentiate you in competitive talent markets.",
  },
  {
    icon: Megaphone,
    title: "Recruitment Marketing Campaigns",
    description: "Multi-channel talent attraction campaigns that drive qualified applicant volume and improve quality of hire.",
  },
  {
    icon: FileText,
    title: "Content & Storytelling",
    description: "Compelling employer stories, career site content, and recruitment collateral that convert passive candidates.",
  },
  {
    icon: Users,
    title: "Candidate Experience Design",
    description: "Journey mapping, application flow optimization, and touchpoint design that reduces drop-off and improves conversion.",
  },
  {
    icon: TrendingUp,
    title: "Talent Funnel Analytics",
    description: "Metrics frameworks, dashboards, and performance insights that prove ROI and inform strategic decisions.",
  },
  {
    icon: BarChart3,
    title: "Fractional Leadership",
    description: "Embedded strategic support as your fractional Head of Talent Marketing—without the full-time overhead.",
  },
];

export function WhatIncludedSection() {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20 text-center mx-auto">
          <div className="inline-block mb-4">
            <span 
              className="text-[#117C92] px-4 py-2 rounded-full border border-[#117C92]/30 text-sm"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
            >
              Services
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
            Comprehensive Employer Brand{' '}
            <span 
              style={{ 
                fontFamily: 'var(--font-script)',
                fontWeight: 400,
                color: 'var(--teal-primary)',
              }}
            >
              & 
            </span>{' '}
            Talent Attraction Solutions
          </h2>
          <p 
            className="text-gray-600"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
            }}
          >
            From strategy to execution, we transform how organizations attract, engage, and 
            convert top talent—with measurable impact at every stage of the funnel.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group p-8 bg-white border border-gray-200 rounded-lg hover:border-[#117C92] hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Hover gradient border */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(90deg, var(--accentHero), var(--accentHero2))',
                  }}
                />
                
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#117C92]/10 to-[#0E5A6A]/5 rounded-lg group-hover:from-[#117C92]/20 group-hover:to-[#0E5A6A]/10 transition-all">
                  <Icon className="w-6 h-6 text-[#117C92]" />
                </div>
                <h3 
                  className="mb-3 text-[#0A1220]"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-gray-600"
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}