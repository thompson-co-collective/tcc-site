import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CtaPair } from "../../components/CtaPair";

export default function MostCompaniesAreAtStageOne() {
  useEffect(() => {
    document.title = "Most Companies Are at Stage One. They Don't Know It. | Thompson & Co Collective";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "After running the Talent Maturity Audit across dozens of organizations, a pattern is clear: the gap between where leadership thinks they are and where the evidence puts them is almost always wider than expected."
      );
    }

    // Add Article Schema
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Most Companies Are at Stage One. They Don't Know It.",
      "description": "After running the Talent Maturity Audit across dozens of organizations, a pattern is clear: the gap between where leadership thinks they are and where the evidence puts them is almost always wider than expected.",
      "author": {
        "@type": "Person",
        "name": "Candice Thompson"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Thompson & Co Collective",
        "url": "https://thompsoncollective.co"
      },
      "datePublished": "2024-04-02",
      "url": "https://thompsoncollective.co/insights/talent-maturity-gap"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    script.id = 'article-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('article-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <main id="main-content" className="pt-24 pb-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link 
          to="/insights" 
          className="inline-flex items-center gap-2 text-[#117C92] hover:text-[#0D7377] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Insights
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="text-sm font-medium text-[#117C92] uppercase tracking-wide mb-4">
            TALENT STRATEGY
          </div>
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)',
              lineHeight: 1.2,
              color: '#0A1220'
            }}
          >
            Most Companies Are at Stage One. They Don't Know It.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            After running the Talent Maturity Audit across dozens of organizations, a pattern is clear: the gap between where leadership thinks they are and where the evidence puts them is almost always wider than expected.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            By Candice Thompson • April 2, 2024
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p>
            We developed the Talent Maturity Audit to help organizations understand where they stand in their talent attraction evolution. After running it with dozens of companies — from startups to Fortune 500 organizations — a clear pattern has emerged.
          </p>
          
          <p>
            Most companies think they're further along than they actually are. And this self-assessment gap is costing them dearly in recruitment effectiveness.
          </p>

          <h2>The Four Stages of Talent Maturity</h2>
          
          <p>
            We break talent attraction maturity into four stages:
          </p>
          
          <h3>Stage 1: Ad Hoc</h3>
          <p>
            Recruitment happens reactively. Job posts go up when positions open. There's no consistent messaging, no measurement of effectiveness, and no connection between employer brand and actual hiring outcomes.
          </p>
          
          <h3>Stage 2: Coordinated</h3>
          <p>
            There's a basic process in place. Job descriptions are standardized. Some tracking of metrics exists. But the approach is still primarily tactical rather than strategic.
          </p>
          
          <h3>Stage 3: Strategic</h3>
          <p>
            Employer brand and recruitment marketing are connected to business outcomes. EVP is evidence-based. Campaigns are measured against specific KPIs. But execution is still inconsistent.
          </p>
          
          <h3>Stage 4: Optimized</h3>
          <p>
            Talent attraction is fully integrated with business strategy. Continuous optimization based on data. Proactive rather than reactive. Multiple channels working together seamlessly.
          </p>

          <h2>The Self-Assessment Gap</h2>
          
          <p>
            When we ask leaders to self-assess their stage, they typically rate themselves 1.5 stages higher than the evidence suggests. Here's why:
          </p>
          
          <h3>1. They Confuse Activity with Progress</h3>
          <p>
            Having a careers page or posting on job boards feels like progress, but these are basic hygiene factors, not differentiators.
          </p>
          
          <h3>2. They Overestimate Internal Coordination</h3>
          <p>
            Leadership assumes that because different teams are "working on" talent attraction, there's actual coordination happening. Often there isn't.
          </p>
          
          <h3>3. They Don't See the Full Candidate Journey</h3>
          <p>
            Most assessments focus on the front end of recruitment. But candidate experience includes everything from application to onboarding to first year retention.
          </p>

          <h2>How to Get an Accurate Reading</h2>
          
          <p>
            The most accurate assessment comes from evidence, not opinion. Here are the key indicators for each stage:
          </p>
          
          <h3>Stage 1 Indicators:</h3>
          <ul>
            <li>No consistent employer brand messaging</li>
            <li>Job posts written by hiring managers without guidelines</li>
            <li>No tracking of recruitment marketing ROI</li>
            <li>Candidate experience varies wildly by department</li>
          </ul>
          
          <h3>Stage 2 Indicators:</h3>
          <ul>
            <li>Basic job description templates exist</li>
            <li>Some tracking of cost-per-hire</li>
            <li>Careers page exists but isn't optimized</li>
            <li>Recruitment marketing is siloed from employer brand</li>
          </ul>
          
          <h3>Stage 3 Indicators:</h3>
          <ul>
            <li>Evidence-based EVP with measurable claims</li>
            <li>Integrated campaign strategy across channels</li>
            <li>Candidate experience mapping and optimization</li>
            <li>Clear KPIs tied to business outcomes</li>
          </ul>

          <h2>The Cost of Misassessment</h2>
          
          <p>
            Organizations that think they're at Stage 3 when they're actually at Stage 1 waste time and money on the wrong solutions. They invest in sophisticated campaigns when they need basic foundation work. They optimize for metrics that don't matter while ignoring the fundamentals.
          </p>
          
          <p>
            The most successful organizations we've worked with started with a brutally honest assessment of their actual stage. They didn't try to skip ahead. They built the foundation first.
          </p>
          
          <p>
            If you're reading this and thinking "that's not us," take the Talent Maturity Audit. The evidence might surprise you — and that's the first step toward real progress.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <CtaPair />
        </div>
      </article>
    </main>
  );
}