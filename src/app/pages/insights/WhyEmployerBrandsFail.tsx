import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CtaPair } from "../../components/CtaPair";

export default function WhyEmployerBrandsFail() {
  useEffect(() => {
    // Add Article Schema
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Why Most Employer Brands Fail Before They Launch",
      "description": "The problem usually isn't the creative. It's that the narrative was never pressure-tested against what candidates actually experience. Here's where the gap starts — and how to close it before launch day.",
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
      "url": "https://thompsoncollective.co/insights/why-employer-brands-fail"
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
            EMPLOYER BRAND
          </div>
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)',
              lineHeight: 1.2,
              color: '#0A1220'
            }}
          >
            Why Most Employer Brands Fail Before They Launch
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            The problem usually isn't the creative. It's that the narrative was never pressure-tested against what candidates actually experience. Here's where the gap starts — and how to close it before launch day.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            By Candice Thompson • April 2, 2024
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p>
            We've all seen it happen. A company invests six figures in a new employer brand campaign. The creative is beautiful. The messaging is polished. The launch event is spectacular. And then... crickets.
          </p>
          
          <p>
            Three months later, the same leadership team is asking why they're not seeing more qualified applicants. The campaign metrics look good on paper, but the needle hasn't moved on actual hiring outcomes.
          </p>

          <h2>The Root Cause: Narrative vs. Reality Gap</h2>
          
          <p>
            The issue isn't usually the creative work itself. Most employer brand campaigns fail because the narrative was never properly validated against what candidates actually experience during the recruitment process.
          </p>
          
          <p>
            Here's the typical sequence:
          </p>
          
          <ol>
            <li>Leadership defines what they want the employer brand to say</li>
            <li>Agency creates beautiful creative that matches that narrative</li>
            <li>Campaign launches with great fanfare</li>
            <li>Candidates encounter the real recruitment process — and the gap becomes obvious</li>
          </ol>

          <h2>Where the Gap Shows Up</h2>
          
          <p>
            The disconnect usually manifests in one of three places:
          </p>
          
          <h3>1. The Application Process</h3>
          <p>
            Your brand promises "seamless collaboration" and "innovative culture," but candidates face a clunky ATS that takes 45 minutes to complete and asks irrelevant questions.
          </p>
          
          <h3>2. Interview Experience</h3>
          <p>
            Your EVP talks about "transparent communication" and "employee empowerment," but candidates get vague responses to their questions and feel like they're being sold to rather than interviewed.
          </p>
          
          <h3>3. Offer and Onboarding</h3>
          <p>
            Your brand emphasizes "competitive compensation" and "work-life balance," but the offer process drags on for weeks and the actual package doesn't match what was promised.
          </p>

          <h2>How to Close the Gap Before Launch</h2>
          
          <p>
            The solution is to pressure-test your narrative against reality before you ever start creating campaign assets. Here's how:
          </p>
          
          <h3>Conduct a Candidate Experience Audit</h3>
          <p>
            Map out the entire candidate journey from first click to first day. Identify every touchpoint where the brand promise meets reality. Rate each one for consistency.
          </p>
          
          <h3>Validate Claims with Evidence</h3>
          <p>
            Every claim in your EVP should be backed by concrete evidence. If you say you're "innovative," show the products you've launched. If you say you "invest in growth," share the training programs and promotion rates.
          </p>
          
          <h3>Test with Real Candidates</h3>
          <p>
            Before launch, share your key messages with recent applicants (anonymously) and ask: "Does this match what you experienced?" Use the feedback to adjust.
          </p>

          <h2>The Outcome</h2>
          
          <p>
            When your employer brand narrative is grounded in reality, the campaign doesn't just look good — it drives results. Candidates who encounter a consistent experience from first impression to offer acceptance are 3x more likely to accept your offer.
          </p>
          
          <p>
            The most successful employer brands aren't the prettiest. They're the ones that candidates trust because the experience matches the promise.
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
