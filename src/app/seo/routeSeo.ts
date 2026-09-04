export const SITE_URL = "https://thompsoncollective.co";
export const SOCIAL_IMAGE_URL = `${SITE_URL}/logo.png`;

export type RouteSeo = {
  title: string;
  description: string;
  robots?: string;
  ogType?: "website" | "article";
};

export const ROUTE_SEO: Record<string, RouteSeo> = {
  "/": {
    title: "Thompson & Co Collective – Employer Brand & Recruitment Marketing",
    description:
      "Strategic employer branding and recruitment marketing that moves hiring outcomes. EVP development, candidate experience, and media governance that drives measurable results.",
  },
  "/about": {
    title: "About | Thompson & Co Collective",
    description:
      "Meet Thompson & Co Collective and learn how we help organizations strengthen employer brand, recruitment marketing, and candidate experience.",
  },
  "/capabilities": {
    title: "Employer Brand Strategy & Recruitment Marketing Services | Thompson & Co Collective",
    description:
      "Explore employer brand strategy, recruitment marketing, candidate experience, and governance services built to improve hiring outcomes.",
  },
  "/our-approach": {
    title: "How We Work | Employer Brand Methodology | Thompson & Co Collective",
    description:
      "Our consulting methodology aligns EVP, messaging, candidate experience, and channel governance to drive measurable hiring performance.",
  },
  "/contact": {
    title: "Contact – Thompson & Co Collective",
    description:
      "Start a conversation about your talent attraction challenges. We respond within 1 business day with a clear next step.",
  },
  "/attraction-diagnostic": {
    title: "Attraction Diagnostic | Thompson & Co Collective",
    description:
      "Assess your talent attraction system and identify high-impact opportunities across narrative, channels, and candidate experience.",
  },
  "/insights": {
    title: "Insights | The Collective POV | Thompson & Co Collective",
    description:
      "Perspectives, research, and practical guidance on employer brand, recruitment marketing, and talent attraction strategy.",
  },
  "/insights/why-employer-brands-fail": {
    title: "Why Most Employer Brands Fail Before They Launch | Thompson & Co Collective",
    description:
      "How employer brands fail before launch, where narrative gaps emerge, and what to fix to improve candidate trust and conversion.",
    ogType: "article",
  },
  "/insights/job-board-strategy": {
    title: "The Quiet Collapse of the Job Board Strategy | Thompson & Co Collective",
    description:
      "Why job board-heavy hiring strategies are underperforming and what modern recruitment marketing systems should replace them.",
    ogType: "article",
  },
  "/insights/talent-maturity-gap": {
    title: "Most Companies Are at Stage One. They Don't Know It. | Thompson & Co Collective",
    description:
      "What the talent maturity gap reveals and how organizations can close structural gaps in employer brand and hiring performance.",
    ogType: "article",
  },
  "/insights/hidden-cost-bad-hiring": {
    title: "The Hidden Cost of Bad Hiring Decisions | Thompson & Co Collective",
    description:
      "A practical breakdown of the business impact of poor hiring decisions and how to reduce avoidable hiring risk.",
    ogType: "article",
  },
  "/insights/ai-search-optimization": {
    title: "Optimizing for AI Search: Answer Engine Optimization | Thompson & Co Collective",
    description:
      "How to optimize employer brand content for AI-assisted search and answer engines.",
    ogType: "article",
  },
  "/partner": {
    title: "Fractional Recruitment Marketing for Agency Partners | Thompson & Co Collective",
    description:
      "Embedded fractional recruitment marketing support for agency and consulting partners.",
  },
  "/privacy": {
    title: "Privacy Policy | Thompson & Co Collective",
    description:
      "How Thompson & Co Collective collects, uses, and protects your information across website and lead forms.",
  },
  "/terms": {
    title: "Terms of Use | Thompson & Co Collective",
    description:
      "Terms of use for accessing and using Thompson & Co Collective resources, tools, and website content.",
  },
  "/audit": {
    title: "Talent Maturity Audit | Thompson & Co Collective",
    description:
      "Assess your organization's talent attraction maturity and identify high-impact next steps.",
    robots: "noindex,follow",
  },
  "/sitemap": {
    title: "Sitemap | Thompson & Co Collective",
    description: "Browse Thompson & Co Collective pages and resources.",
    robots: "noindex,follow",
  },
};

export const INDEXABLE_ROUTES = Object.entries(ROUTE_SEO)
  .filter(([, seo]) => seo.robots !== "noindex,follow")
  .map(([route]) => route);

export const PRERENDER_ROUTES = Object.keys(ROUTE_SEO);

export function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function canonicalUrl(pathname: string) {
  return new URL(normalizePath(pathname), `${SITE_URL}/`).toString();
}

export function resolveRouteSeo(pathname: string): {
  seo: RouteSeo;
  isMapped: boolean;
} {
  const normalizedPath = normalizePath(pathname);
  const exact = ROUTE_SEO[normalizedPath];
  if (exact) return { seo: exact, isMapped: true };

  return {
    isMapped: false,
    seo: {
      title: "Page Not Found | Thompson & Co Collective",
      description: "The requested page could not be found.",
      robots: "noindex,follow",
    },
  };
}
