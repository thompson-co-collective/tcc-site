import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CtaPair } from "../../components/CtaPair";

export default function OptimizingForAISearch() {
  useEffect(() => {
    document.title = "Optimizing for AI Search: Answer Engine Optimization | Thompson & Co Collective";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Google's AI answers are changing how candidates find employers. Here's how to optimize your employer brand content for AI search engines and featured snippets."
      );
    }

    // Add Article Schema
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Optimizing for AI Search: Answer Engine Optimization",
      "description": "Google's AI answers are changing how candidates find employers. Here's how to optimize your employer brand content for AI search engines and featured snippets.",
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
      "url": "https://thompsoncollective.co/insights/ai-search-optimization"
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
            AI VISIBILITY
          </div>
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)',
              lineHeight: 1.2,
              color: '#0A1220'
            }}
          >
            Optimizing for AI Search: Answer Engine Optimization
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Google's AI answers are changing how candidates find employers. Here's how to optimize your employer brand content for AI search engines and featured snippets.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            By Candice Thompson • April 2, 2024
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p>
            When candidates search for "What is it like to work at [Your Company]?" they're increasingly getting answers from AI, not your website. Google's AI Overviews and similar features in Bing and other search engines are changing how employer brand content needs to be structured.
          </p>
          
          <p>
            This isn't just about SEO anymore. It's about Answer Engine Optimization (AEO) — making sure your content gets selected as the source for AI-generated answers about your company.
          </p>

          <h2>How AI Search Works for Employer Queries</h2>
          
          <p>
            When someone asks an AI search engine about working at your company, the system:
          </p>
          
          <ol>
            <li>Scans millions of pages for relevant content</li>
            <li>Extracts factual information and opinions</li>
            <li>Generates a synthesized answer</li>
            <li>Cites sources for credibility</li>
          </ol>
          
          <p>
            The goal for employer brands: Make sure your content is selected as a source, and that the AI represents your narrative accurately.
          </p>

          <h2>The Content Types AI Prioritizes</h2>
          
          <p>
            AI search engines favor certain types of content for employer questions:
          </p>
          
          <h3>1. Structured Q&A Content</h3>
          <p>
            FAQ pages, interview transcripts, and structured answers to common questions. AI loves content that directly answers candidate questions.
          </p>
          
          <h3>2. Employee Testimonials and Reviews</h3>
          <p>
            Authentic employee voices carry weight. Glassdoor reviews, LinkedIn posts, and company-sponsored testimonials all get indexed.
          </p>
          
          <h3>3. Data-Driven Content</h3>
          <p>
            Statistics about retention, growth, benefits, and culture. AI prioritizes verifiable facts over marketing claims.
          </p>
          
          <h3>4. Comprehensive Company Information</h3>
          <p>
            Detailed descriptions of culture, values, processes, and day-to-day work. The more complete the picture, the more likely AI will source from it.
          </p>

          <h2>Optimizing Your Content for AEO</h2>
          
          <h3>1. Create Question-Focused Content</h3>
          <p>
            Instead of "Our Culture" pages, create content that answers specific questions: "What is the work-life balance like at [Company]?" or "How does performance review work here?"
          </p>
          
          <h3>2. Use Structured Formats</h3>
          <p>
            Format content with clear headings, bullet points, and tables. AI parses structured content more effectively than paragraphs of text.
          </p>
          
          <h3>3. Include Specific Data Points</h3>
          <p>
            Replace vague claims with specifics: "85% of employees report work-life balance as good or excellent" instead of "We value work-life balance."
          </p>
          
          <h3>4. Maintain Consistency Across Platforms</h3>
          <p>
            Ensure your website, LinkedIn, Glassdoor, and other platforms tell the same story. Inconsistencies confuse AI algorithms.
          </p>

          <h2>Technical Optimization</h2>
          
          <p>
            Beyond content, there are technical factors that influence AI sourcing:
          </p>
          
          <h3>Schema Markup</h3>
          <p>
            Use Organization and Article schema to help AI understand your content structure and credibility.
          </p>
          
          <h3>Page Speed and Mobile Optimization</h3>
          <p>
            AI prioritizes fast, mobile-friendly pages. Slow sites get deprioritized.
          </p>
          
          <h3>Internal Linking</h3>
          <p>
            Well-linked sites help AI understand content relationships and authority.
          </p>

          <h2>Measuring AEO Success</h2>
          
          <p>
            Track these metrics to understand your AI search performance:
          </p>
          
          <ul>
            <li>AI-generated answer appearances in search results</li>
            <li>Click-through rates from AI answers to your site</li>
            <li>Branded search query volume and trends</li>
            <li>Content sourcing frequency in AI responses</li>
          </ul>

          <h2>The Future of Employer Brand Visibility</h2>
          
          <p>
            As AI search becomes more prevalent, employer brands that invest in AEO will have a significant advantage. Candidates are increasingly using AI for initial research, and the companies that appear in those answers will shape first impressions.
          </p>
          
          <p>
            This isn't optional anymore. It's the new minimum viable visibility for serious employer brands.
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