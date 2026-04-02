import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://thompsoncollective.co";

type RouteSeo = {
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
    description:
      "Browse Thompson & Co Collective pages and resources.",
    robots: "noindex,follow",
  },
};

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function isKnownDynamicRoute(pathname: string) {
  return pathname.startsWith("/insights/");
}

function resolveRouteSeo(pathname: string): { seo: RouteSeo; isMapped: boolean } {
  const normalizedPath = normalizePath(pathname);
  const exact = ROUTE_SEO[normalizedPath];
  if (exact) return { seo: exact, isMapped: true };

  if (isKnownDynamicRoute(normalizedPath)) {
    return {
      isMapped: true,
      seo: {
      title: "Insights Article | Thompson & Co Collective",
      description:
        "Read insights on employer brand, recruitment marketing, and talent attraction strategy.",
      ogType: "article",
      robots: "index,follow",
      },
    };
  }

  return {
    isMapped: false,
    seo: {
      title: "Page Not Found | Thompson & Co Collective",
      description: "The requested page could not be found.",
      robots: "noindex,follow",
    },
  };
}

function setOrCreatePropertyMeta(property: string, content: string) {
  const selector = `meta[property="${property}"]`;
  const tag = document.querySelector(selector) || document.createElement("meta");
  tag.setAttribute("property", property);
  tag.setAttribute("content", content);
  if (!tag.parentElement) document.head.appendChild(tag);
}

function setOrCreateNameMeta(name: string, content: string) {
  const selector = `meta[name="${name}"]`;
  const tag = document.querySelector(selector) || document.createElement("meta");
  tag.setAttribute("name", name);
  tag.setAttribute("content", content);
  if (!tag.parentElement) document.head.appendChild(tag);
}

export function RouteMetaManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = normalizePath(pathname);
    const { seo: routeSeo, isMapped } = resolveRouteSeo(normalizedPath);

    if (typeof window !== "undefined" && !isMapped && import.meta.env.DEV) {
      console.warn(
        `[SEO] Missing ROUTE_SEO mapping for "${normalizedPath}". ` +
          `If this is an indexable route, add it to ROUTE_SEO and public/sitemap.xml.`
      );
    }

    const canonicalHref = new URL(normalizedPath, SITE_URL).toString();
    const canonicalTag =
      document.querySelector('link[rel="canonical"]') || document.createElement("link");

    document.title = routeSeo.title;

    canonicalTag.setAttribute("rel", "canonical");
    canonicalTag.setAttribute("href", canonicalHref);
    if (!canonicalTag.parentElement) document.head.appendChild(canonicalTag);

    setOrCreateNameMeta("description", routeSeo.description);
    setOrCreateNameMeta("robots", routeSeo.robots || "index,follow");

    setOrCreatePropertyMeta("og:type", routeSeo.ogType || "website");
    setOrCreatePropertyMeta("og:url", canonicalHref);
    setOrCreatePropertyMeta("og:title", routeSeo.title);
    setOrCreatePropertyMeta("og:description", routeSeo.description);

    setOrCreateNameMeta("twitter:url", canonicalHref);
    setOrCreateNameMeta("twitter:title", routeSeo.title);
    setOrCreateNameMeta("twitter:description", routeSeo.description);
  }, [pathname]);

  return null;
}
