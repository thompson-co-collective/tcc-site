import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CtaPair } from "../../components/CtaPair";

export default function TheQuietCollapseOfJobBoardStrategy() {
  useEffect(() => {
    // Add Article Schema
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Quiet Collapse of the Job Board Strategy",
      "description": "Organizations are spending more on job distribution and getting fewer qualified applicants. The data is consistent. The cause is structural, not cyclical. What's actually happening — and what replaces it.",
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
      "url": "https://thompsoncollective.co/insights/job-board-strategy"
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
            RECRUITMENT MARKETING
          </div>
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)',
              lineHeight: 1.2,
              color: '#0A1220'
            }}
          >
            The Quiet Collapse of the Job Board Strategy
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Organizations are spending more on job distribution and getting fewer qualified applicants. The data is consistent. The cause is structural, not cyclical. What's actually happening — and what replaces it.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            By Candice Thompson • April 2, 2024
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p>
            For the past decade, the job board strategy has been the default approach to recruitment marketing. Post on Indeed, LinkedIn, Glassdoor, and a few niche sites. Spend on sponsored posts. Track applications per dollar spent.
          </p>
          
          <p>
            But something has changed. Organizations are spending more on job distribution than ever, yet the quality and quantity of applicants is declining. The data from our client work shows this isn't a temporary dip — it's a structural shift.
          </p>

          <h2>The Data Is Clear</h2>
          
          <p>
            Across our client base of Fortune 500 and growth-stage companies:
          </p>
          
          <ul>
            <li>Cost per qualified applicant has increased 40% over the past 2 years</li>
            <li>Application volume from job boards has dropped 25%</li>
            <li>Time-to-fill for technical roles has increased by an average of 15 days</li>
            <li>Job board CPC has risen 60% while conversion rates have fallen 30%</li>
          </ul>

          <h2>Why It's Happening</h2>
          
          <p>
            The job board model worked when passive candidates were plentiful and active job seekers were the primary audience. But the labor market has changed:
          </p>
          
          <h3>1. The Passive Candidate Myth</h3>
          <p>
            The idea that millions of qualified candidates are passively waiting to be discovered was always overstated. In a tight labor market, truly passive candidates are rare, and they're not spending time on job boards.
          </p>
          
          <h3>2. Algorithmic Competition</h3>
          <p>
            Job boards are now optimizing for engagement over quality matches. Your $500 sponsored post competes with thousands of similar posts, and the algorithms prioritize whatever drives clicks, not qualified applicants.
          </p>
          
          <h3>3. Candidate Behavior Shift</h3>
          <p>
            Today's candidates research companies before they apply. They read reviews, check social media, and talk to current employees. A job board post is just the final step in a much longer evaluation process.
          </p>

          <h2>What Replaces It</h2>
          
          <p>
            The most effective organizations are moving to a multi-channel approach that meets candidates where they already are:
          </p>
          
          <h3>Owned Content and SEO</h3>
          <p>
            Building comprehensive careers pages and thought leadership content that ranks in organic search. This creates a foundation of credibility that job board posts can reference.
          </p>
          
          <h3>Professional Communities</h3>
          <p>
            Engaging in the communities where your target candidates spend time — LinkedIn groups, industry Slack channels, professional associations, and niche forums.
          </p>
          
          <h3>Employee Advocacy</h3>
          <p>
            Turning your current employees into your best recruiters by giving them the tools and content to share authentic stories about working at your company.
          </p>
          
          <h3>Targeted Digital Campaigns</h3>
          <p>
            Using data to identify and reach candidates with relevant skills, not just relevant job titles. This might mean fewer total impressions but much higher conversion rates.
          </p>

          <h2>The Path Forward</h2>
          
          <p>
            Job boards aren't going away, but they can no longer be the centerpiece of your recruitment strategy. The organizations that thrive will be those that build comprehensive talent attraction ecosystems that work together.
          </p>
          
          <p>
            The good news? This shift creates an opportunity to build more authentic, more effective connections with candidates. But it requires a different approach to how you think about recruitment marketing.
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
