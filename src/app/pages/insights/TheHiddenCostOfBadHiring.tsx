import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CtaPair } from "../../components/CtaPair";

export default function TheHiddenCostOfBadHiring() {
  useEffect(() => {
    // Add Article Schema
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Hidden Cost of Bad Hiring Decisions",
      "description": "Bad hires don't just cost money in salary and training. They cost time, momentum, and opportunity. Here's the full calculus of hiring mistakes and how to avoid them.",
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
      "url": "https://thompsoncollective.co/insights/hidden-cost-bad-hiring"
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
            The Hidden Cost of Bad Hiring Decisions
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Bad hires don't just cost money in salary and training. They cost time, momentum, and opportunity. Here's the full calculus of hiring mistakes and how to avoid them.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            By Candice Thompson • April 2, 2024
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p>
            Everyone knows bad hires are expensive. The standard calculation is 1.5x annual salary in direct costs. But that number dramatically understates the true impact. The real cost of a bad hiring decision goes far beyond dollars.
          </p>
          
          <p>
            After working with organizations that have made — and learned from — hiring mistakes, we've seen the full calculus. Here's what actually gets damaged when you bring the wrong person on board.
          </p>

          <h2>The Direct Costs (The Obvious Ones)</h2>
          
          <p>
            These are the costs that show up in budgets:
          </p>
          
          <ul>
            <li><strong>Salary and benefits:</strong> 6-12 months of compensation</li>
            <li><strong>Recruitment costs:</strong> Agency fees, job board spend, internal time</li>
            <li><strong>Onboarding and training:</strong> Programs, materials, manager time</li>
            <li><strong>Termination costs:</strong> Severance, outplacement, legal fees</li>
          </ul>

          <h2>The Indirect Costs (The Expensive Ones)</h2>
          
          <p>
            These are the costs that destroy value:
          </p>
          
          <h3>1. Team Productivity Loss</h3>
          <p>
            When someone isn't performing, their colleagues pick up the slack. High performers spend 20-30% of their time compensating for underperformers. That's lost innovation, delayed projects, and burned-out team members.
          </p>
          
          <h3>2. Manager Time and Energy</h3>
          <p>
            Managing poor performance takes enormous time. Coaching, documenting, performance reviews, disciplinary meetings. A single bad hire can consume 10+ hours per week of a manager's time.
          </p>
          
          <h3>3. Team Morale Damage</h3>
          <p>
            Bad hires create resentment. High performers see their extra effort go unrewarded. Good people start looking for other opportunities. The best teams we've worked with lost 2-3 high performers after a single bad hire.
          </p>
          
          <h3>4. Opportunity Cost</h3>
          <p>
            Every open role represents missed opportunities. A delayed hire means delayed projects, missed market opportunities, and slower growth. In fast-moving companies, this can be catastrophic.
          </p>

          <h2>The Long-Term Costs (The Permanent Ones)</h2>
          
          <p>
            Some damage doesn't heal:
          </p>
          
          <h3>1. Reputation Damage</h3>
          <p>
            Bad hires leave and talk. They damage your employer brand on Glassdoor, LinkedIn, and in industry circles. This makes future hiring harder and more expensive.
          </p>
          
          <h3>2. Process Erosion</h3>
          <p>
            After a bad hire, teams become risk-averse. They slow down hiring processes, add more interviews, require more approvals. This makes it harder to hire good people quickly.
          </p>
          
          <h3>3. Cultural Scars</h3>
          <p>
            Trust in the hiring process erodes. Teams become cynical about new hires. The "we hire slow" mentality takes hold, and innovation slows.
          </p>

          <h2>How to Avoid Bad Hires</h2>
          
          <p>
            The most effective organizations don't try to eliminate bad hires (that's impossible). They minimize them through better process:
          </p>
          
          <h3>1. Define Success First</h3>
          <p>
            Before you start recruiting, define what success looks like in measurable terms. What will this person accomplish in 3 months, 6 months, 12 months?
          </p>
          
          <h3>2. Assess for Capability, Not Just Experience</h3>
          <p>
            Past experience is a predictor, but not the only one. Assess for learning ability, problem-solving, and cultural fit. Use work samples and practical assessments.
          </p>
          
          <h3>3. Involve Multiple Perspectives</h3>
          <p>
            Don't let one person's enthusiasm drive the decision. Get input from peers, direct reports, and cross-functional colleagues.
          </p>
          
          <h3>4. Check References Thoroughly</h3>
          <p>
            Ask specific questions about past performance and challenges. Follow up on red flags. Most bad hires show warning signs that get ignored.
          </p>

          <h2>The Real ROI of Good Hiring</h2>
          
          <p>
            Good hires don't just avoid costs — they create value. The best people we've seen hired generate 5-10x their salary in value through innovation, leadership, and impact.
          </p>
          
          <p>
            Bad hiring decisions are expensive. But good ones are the highest-ROI investment most organizations make. The difference is in the process, not the luck.
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
