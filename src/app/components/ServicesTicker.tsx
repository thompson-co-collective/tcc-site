import { useEffect, useRef } from "react";

const services = [
  "Recruitment Marketing",
  "EVP & Messaging",
  "Candidate Experience",
  "Funnel Analytics",
  "Job Ad Governance",
  "Careers Page Content",
  "Creative & Content",
  "Attraction Diagnostic",
];

export function ServicesTicker() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section 
      className="relative py-8 md:py-10 overflow-hidden"
      style={{
        background: `
          radial-gradient(900px 150px at 50% 50%, rgba(17,124,146,.12), transparent 70%),
          linear-gradient(135deg, #0F2A2A 0%, #0A1220 50%, #0F2A2A 100%)
        `,
      }}
    >
      {/* Section label - centered */}
      <div className="flex justify-center mb-5">
        <span 
          className="text-white/45 uppercase tracking-widest"
          style={{ 
            fontFamily: 'var(--font-sans)', 
            fontWeight: 600,
            fontSize: '0.8125rem',
            letterSpacing: '0.15em',
          }}
        >
          How We Show Up
        </span>
      </div>

      {/* Scrolling ticker */}
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden whitespace-nowrap"
        style={{ 
          scrollBehavior: 'auto',
        }}
      >
        {/* First set */}
        <div className="flex items-center gap-8 flex-shrink-0">
          {services.map((service, index) => (
            <div key={`first-${index}`} className="flex items-center gap-8">
              <span 
                className="text-white/85 relative group cursor-default"
                style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.0625rem)',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 500,
                  letterSpacing: '0.025em',
                }}
              >
                {service}
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#117C92] to-[#0E5A6A] group-hover:w-full transition-all duration-300"
                />
              </span>
              <span 
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  color: '#117C92',
                  fontSize: '0.625rem',
                  opacity: 0.6,
                }}
              >
                ◆
              </span>
            </div>
          ))}
        </div>

        {/* Second set (duplicate for seamless loop) */}
        <div className="flex items-center gap-8 flex-shrink-0">
          {services.map((service, index) => (
            <div key={`second-${index}`} className="flex items-center gap-8">
              <span 
                className="text-white/85 relative group cursor-default"
                style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.0625rem)',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 500,
                  letterSpacing: '0.025em',
                }}
              >
                {service}
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#117C92] to-[#0E5A6A] group-hover:w-full transition-all duration-300"
                />
              </span>
              <span 
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  color: '#117C92',
                  fontSize: '0.625rem',
                  opacity: 0.6,
                }}
              >
                ◆
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}