export function HeroSection() {
  return (
    <section 
      className="relative text-white overflow-hidden flex items-center"
      style={{
        background: 'linear-gradient(180deg, #0A1220 0%, #0E5A6A 100%)',
        minHeight: '90vh',
      }}
    >
      {/* Localized teal glow behind headline - spotlight effect only */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(17,124,146,0.22) 0%, rgba(17,124,146,0.08) 50%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Subtle floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/5 w-56 h-56 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(17,124,146,0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'float 24s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(14,90,106,0.05) 0%, transparent 70%)',
            filter: 'blur(70px)',
            animation: 'float 30s ease-in-out infinite reverse',
          }}
        />
      </div>

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Centered container with left-aligned content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div 
            className="mb-6 md:mb-7 animate-fadeInUp"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8125rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.65)',
            }}
          >
            Recruitment Marketing · Employer Branding · Candidate Experience
          </div>

          {/* H1 - Show-stopping with tightened line breaks */}
          <h1 
            className="mb-8 md:mb-10 animate-fadeInUp"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              fontFamily: 'var(--font-serif)',
              color: 'white',
              animationDelay: '0.1s',
            }}
          >
            Fractional talent attraction marketing your clients feel—
            <span 
              className="relative inline-block"
              style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #117C92 0%, #0E5A6A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              support your team can rely on.
            </span>
          </h1>

          {/* Subheading */}
          <p 
            className="mb-10 md:mb-12 text-white/85 max-w-3xl animate-fadeInUp"
            style={{
              fontSize: 'clamp(1.0625rem, 1.8vw, 1.25rem)',
              lineHeight: 1.65,
              fontFamily: 'var(--font-sans)',
              animationDelay: '0.2s',
            }}
          >
            Your standards. Your process. Your client relationships—strengthened with trusted 
            fractional capacity. Integrated partner support, not an outside vendor.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" 
            style={{ animationDelay: '0.3s' }}
          >
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0E5A6A] rounded transition-all hover:bg-white hover:scale-105 hover:shadow-2xl relative group overflow-hidden"
              style={{ 
                minHeight: '56px',
                fontSize: '1.0625rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                boxShadow: '0 20px 50px rgba(255,255,255,0.15), 0 0 30px rgba(255,255,255,0.1)',
              }}
            >
              <span className="relative z-10">Book a Clarity Call</span>
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#117C92]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
              />
            </a>
            <a 
              href="#how-we-plug-in"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white/40 rounded hover:bg-white/10 hover:border-white/70 hover:scale-105 transition-all relative group"
              style={{ 
                minHeight: '56px',
                fontSize: '1.0625rem',
                fontWeight: 600,
                fontFamily: 'var(--font-serif)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              }}
            >
              <span className="relative z-10">See How We Plug In</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}