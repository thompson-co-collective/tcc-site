import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CtaPair } from "../components/CtaPair";

export default function InsightsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contentCards = [
    {
      category: "EMPLOYER BRAND",
      headline: "Why Most Employer Brands Fail Before They Launch",
      description: "The problem usually isn't the creative. It's that the narrative was never pressure-tested against what candidates actually experience. Here's where the gap starts — and how to close it before launch day.",
      link: "/insights/why-employer-brands-fail",
      comingSoon: false,
    },
    {
      category: "RECRUITMENT MARKETING",
      headline: "The Quiet Collapse of the Job Board Strategy",
      description: "Organizations are spending more on job distribution and getting fewer qualified applicants. The data is consistent. The cause is structural, not cyclical. What's actually happening — and what replaces it.",
      link: "/insights/job-board-strategy",
      comingSoon: false,
    },
    {
      category: "TALENT STRATEGY",
      headline: "Most Companies Are at Stage One. They Don't Know It.",
      description: "After running the Talent Maturity Audit across dozens of organizations, a pattern is clear: the gap between where leadership thinks they are and where the evidence puts them is almost always wider than expected.",
      link: "/insights/talent-maturity-gap",
      comingSoon: false,
    },
    {
      category: "TALENT STRATEGY",
      headline: "The Hidden Cost of Bad Hiring Decisions",
      description: "Bad hires don't just cost money in salary and training. They cost time, momentum, and opportunity. Here's the full calculus of hiring mistakes and how to avoid them.",
      link: "/insights/hidden-cost-bad-hiring",
      comingSoon: false,
    },
    {
      category: "AI VISIBILITY",
      headline: "Optimizing for AI Search: Answer Engine Optimization",
      description: "Google's AI answers are changing how candidates find employers. Here's how to optimize your employer brand content for AI search engines and featured snippets.",
      link: "/insights/ai-search-optimization",
      comingSoon: false,
    },
  ];

  return (
    <main id="main-content">
      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden"
        style={{
          background: `radial-gradient(
            ellipse 85% 65% at 68% 58%,
            rgba(17,124,146,0.14) 0%,
            rgba(17,124,146,0.08) 22%,
            rgba(17,124,146,0.03) 40%,
            rgba(17,124,146,0) 64%
          ),
          radial-gradient(
            ellipse 120% 90% at 50% -10%,
            rgba(255,255,255,0.04) 0%,
            rgba(255,255,255,0.015) 18%,
            rgba(255,255,255,0) 42%
          ),
          linear-gradient(
            135deg,
            #010308 0%,
            #02050b 18%,
            #040912 42%,
            #08131d 68%,
            #0d2a36 88%,
            #123f4c 100%
          )`,
          color: 'white',
        }}
      >
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            THE COLLECTIVE POV
          </div>
          
          {/* H1 Heading */}
          <h1 
            className="mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 600,
              lineHeight: 1.3,
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-serif)',
            }}
          >
            The Collective POV
          </h1>
          
          {/* Subhead */}
          <p 
            className="max-w-3xl mx-auto text-white/80"
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
            }}
          >
            Perspectives from Thompson & Co practitioners, curated industry research, and thinking worth your time. No filler. No content for content's sake — just the ideas that actually move the needle on talent attraction, employer brand, and recruitment marketing.
          </p>
        </div>
      </section>

      {/* Content Grid Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16">
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
              LATEST
            </div>
            
            <h2 
              className="mb-5"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-serif)',
                color: '#0A1220',
              }}
            >
              What we're thinking about.
            </h2>
          </div>

          {/* Content Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentCards.map((card, index) => (
              <article 
                key={index}
                className="group"
              >
                <div 
                  className="relative h-full p-8 rounded-lg border border-gray-200 transition-all duration-300"
                  style={{
                    backgroundColor: '#FFFFFF',
                    opacity: card.comingSoon ? 0.85 : 1,
                  }}
                >
                  {/* Coming Soon Badge */}
                  {card.comingSoon && (
                    <div
                      className="absolute top-4 right-4 px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: 'rgba(17,124,146,0.08)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.625rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#117C92',
                      }}
                    >
                      Coming Soon
                    </div>
                  )}

                  {/* Category Tag */}
                  <div 
                    className="mb-4 inline-block px-3 py-1 rounded"
                    style={{
                      backgroundColor: 'rgba(17,124,146,0.1)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#117C92',
                    }}
                  >
                    {card.category}
                  </div>

                  {/* Headline */}
                  <h3 
                    className="mb-4"
                    style={{
                      fontSize: '1.375rem',
                      fontWeight: 600,
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                      fontFamily: 'var(--font-serif)',
                      color: '#0A1220',
                    }}
                  >
                    {card.headline}
                  </h3>

                  {/* Description */}
                  <p 
                    className="mb-6"
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.6,
                      fontFamily: 'var(--font-sans)',
                      color: '#6B7280',
                    }}
                  >
                    {card.description}
                  </p>

                  {/* Read More / Coming Soon */}
                  {card.comingSoon ? (
                    <span
                      className="inline-flex items-center"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: 'rgba(17,124,146,0.5)',
                        cursor: 'default',
                      }}
                    >
                      Article coming soon
                    </span>
                  ) : (
                    <Link 
                      to={card.link}
                      className="inline-flex items-center text-[#117C92] hover:text-[#0E5A6A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#117C92] rounded"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                      }}
                    >
                      Read more
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-150" size={16} />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section 
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0A1628, #0E5A6A)',
          color: '#FFFFFF',
        }}
      >
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className="mb-4"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#117C92',
            }}
          >
            READY TO MOVE FORWARD?
          </div>

          <h2 
            className="mb-6"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-serif)',
            }}
          >
            Ready to strengthen your talent attraction?
          </h2>
          
          <p 
            className="mb-10 text-white/90 max-w-2xl mx-auto"
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
            }}
          >
            Start with a conversation. We'll listen first, then tell you honestly where we think we can make the most impact.
          </p>

          <div className="flex justify-center">
            <CtaPair variant="light" />
          </div>
        </div>
      </section>
    </main>
  );
}
