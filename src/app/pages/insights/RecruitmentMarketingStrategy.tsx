import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { canonicalUrl, SITE_URL } from "../../seo/routeSeo";
import { recruitmentMarketingInsight as insight } from "../../seo/recruitmentMarketingInsight";

const sourceLink = "text-[#0E5A6A] underline underline-offset-4 hover:text-[#0A1220]";
const url = canonicalUrl(insight.path);
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: insight.headline,
  description: insight.description,
  author: { "@type": "Person", name: insight.author },
  publisher: { "@type": "Organization", name: "Thompson & Co Collective", url: SITE_URL },
  datePublished: insight.publishedDate,
  mainEntityOfPage: { "@type": "WebPage", "@id": url },
  url,
};

const articleJsonLd = JSON.stringify(articleSchema).replace(/</g, "\\u003c");

export default function RecruitmentMarketingStrategy() {
  return (
    <main id="main-content" className="pt-24 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd }} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/insights" className="inline-flex items-center gap-2 text-[#0E5A6A] hover:text-[#0A1220] transition-colors mb-8">
          <ArrowLeft aria-hidden="true" className="w-4 h-4" />
          Back to Insights
        </Link>

        <header className="mb-12">
          <div className="text-sm font-medium text-[#0E5A6A] uppercase tracking-wide mb-4">{insight.eyebrow}</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-serif)", lineHeight: 1.2, color: "#0A1220" }}>
            {insight.headline}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">{insight.summary}</p>
          <p className="mt-6 text-sm text-gray-600">By {insight.author} · <time dateTime={insight.publishedDate}>November 5, 2026</time></p>
        </header>

        <div className="max-w-[72ch] space-y-5 text-base sm:text-lg leading-relaxed text-[#263241]">
          <p>Consider a distribution center with plenty of applicants for its overnight shift but too few people starting. The media dashboard says the campaign is working: application volume is up and cost per application is down. Meanwhile, qualified candidates sit in the applicant tracking system waiting days for interview availability.</p>
          <p>Both reports can be accurate. Adding more budget may make the problem worse.</p>

          <p>When a client asks whether it’s time to spend more, I start with the last stage in the hiring funnel where enough qualified candidates were still moving. If the shortfall begins with qualified applications, additional reach may help. If it begins at interview scheduling, offer acceptance, or start rates, the next dollar probably belongs somewhere else.</p>

          <h2 className="mt-10 mb-3 text-2xl font-semibold text-[#0A1220]">Recruiting Challenges Are Local</h2>
          <p>Labor market data can provide useful context, but hiring demand is rarely experienced as a national trend. <a className={sourceLink} href="https://hiringlab.indeed.com/2026/10/22/us-labor-market-snapshot-october-2026/">Indeed Hiring Lab’s October 2026 U.S. Labor Market Snapshot</a> shows how much labor market conditions can vary across roughly 800 metro and micropolitan areas. That gives employers a starting point. It still can’t tell you who’s available for your overnight shift.</p>
          <p>An employer is competing for specific people, in a specific geography, willing to work a specific schedule under a specific set of conditions. For multi-location organizations, I’d review qualified applications per approved opening by site and shift before moving budget.</p>
          <p>A rural facility with few qualified applicants may genuinely need broader reach. A metropolitan location attracting candidates with the right skills but the wrong availability may have a messaging or scheduling problem instead. Two sites can post nearly identical media metrics and need different investments. Portfolio averages can hide both situations.</p>

          <h2 className="mt-10 mb-3 text-2xl font-semibold text-[#0A1220]">Give Candidates a Reason to Leave a Job They Already Know</h2>
          <p>For candidates who already have a job, your offer competes with a work situation they understand. A move has to be worth what they’re giving up.</p>
          <p>Consider a maintenance technician evaluating two employers offering similar hourly pay. A predictable schedule, a structured on-call rotation, or employer-funded certification opportunities may carry more weight than a broad promise of career growth.</p>
          <p>Those details should appear in the job advertisement, the recruiter conversation, and the hiring manager interview. When those messages diverge, I call it <strong>Message-Reality Drift</strong>.</p>
          <p>A candidate applies after reading about a fixed shift. During the interview, they learn the schedule rotates every few weeks. Now they’re evaluating the schedule and whether they can trust the next answer.</p>

          <h2 className="mt-10 mb-3 text-2xl font-semibold text-[#0A1220]">Candidate Experience Belongs in the Performance Review</h2>
          <p>Recruitment marketing and candidate experience are often treated as separate conversations. Candidates experience them as one hiring process.</p>
          <p>In <a className={sourceLink} href="https://www.isolvedhcm.com/media-center/press-releases/hr-leaders-report">isolved’s 2026 survey of 1,005 U.S. HR decision-makers</a>, 60% said their recruiting strategies fell short on speed, and 45% cited weak candidate communication and feedback. Those are employer assessments. To find out where your process is losing candidates, pair stage timing with withdrawal reasons or candidate feedback.</p>
          <p>A candidate waiting three days for an initial recruiter response faces a different problem from someone who completes a recruiter screen and then waits eight days for a hiring manager’s calendar to open. Improving one doesn’t automatically solve the other. Track these points separately:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Time from qualified application to first contact</li>
            <li>Time between recruiter screen and hiring manager interview</li>
            <li>Time between final interview and offer decision</li>
            <li>Offer acceptance rates by location, shift, and source</li>
          </ul>
          <p>Technology can help reduce response times and coordinate interviews. It can’t create interview availability where none exists. To the candidate, an unexplained delay is a signal about how the employer operates.</p>

          <h2 className="mt-10 mb-3 text-2xl font-semibold text-[#0A1220]">Follow Outcomes, Not Activity</h2>
          <p>Application volume, click-through rates, and sourcing efficiency tell you what the media did. Review cost per qualified applicant alongside interview conversion, offer acceptance, and start rates by location, shift, and source to see what hiring gained.</p>
          <p>I’d continue investing where there is approved demand, a credible opportunity, and enough capacity to move candidates through the process.</p>
          <p>Before increasing spend, find the first stage where qualified candidates stop advancing at the rate you need. If the shortfall is in qualified applications, test more reach. If qualified candidates are already waiting, fix the constraint before paying to add to the queue.</p>
        </div>

        <aside className="mt-12 border-t border-gray-200 pt-6" aria-label="Related insight">
          <p className="mb-2 text-sm font-medium text-gray-600">Related insight</p>
          <Link className={sourceLink} to="/insights/job-board-strategy">The Quiet Collapse of the Job Board Strategy</Link>
        </aside>
      </article>
    </main>
  );
}
