Create a complete backend-development requirements package for this site. UX is finalized; do NOT propose redesigns, new sections, or new questions. The goal is a dev-ready spec with no ambiguity.

SOURCE OF TRUTH
Use the existing React + TSX pages/components in the current codebase as the source of truth for structure, sections, and behaviors. Do not invent “typical” page patterns. Derive page/component inventory from the TSX.

ASSUME STACK + DEPLOYMENT
- React + TypeScript, React Router routes.
- Deployment: Cloudflare Pages.
- Serverless: Cloudflare Workers for form/API endpoints.
- No SSR framework unless explicitly required; default to static + API endpoints.

ASSUME CMS
- Use Contentful as the default headless CMS for content modeling.
- Also provide a CMS-agnostic model summary for portability.

DOMAIN
- Production domain: thompsoncollective.co
- Include canonical URL rules, CORS notes, and sitemap/robots requirements based on this.

PAGES IN SCOPE (MUST COVER)
- / (Home)
- /audit (Talent Maturity Audit)
- /capabilities
- /our-approach (Approach page currently uses this route in code)
- /contact
- /sitemap (human-facing HTML)
- /privacy
- /terms
Additionally: generate /sitemap.xml and robots.txt that points to it.

ROUTING REQUIREMENT (IMPORTANT)
- Standardize canonical slugs and document redirects if multiple slugs exist (e.g., /our-approach vs /approach). Provide a definitive route map.

ANALYTICS + ATTRIBUTION (GTM LATER)
- GTM will be installed later. For now, define tracking via a centralized analytics helper:
  window.dataLayer?.push({ event, ...params })
  and optional window.gtag if present.
- Provide a strict event dictionary: name, parameters, trigger location, purpose.
- UTMs must be captured/persisted and passed into HubSpot submissions and audit email capture.
- Normalize existing inline events found in code (e.g., time_on_page, cta_click, early_cta_click, crosslink_click) into a consistent naming convention (recommendation + mapping).

HUBSPOT + FORMS
- HubSpot is the CRM.
- Specify a Cloudflare Worker approach to submit to HubSpot using HubSpot Forms API by default.
- Portal ID and Form GUIDs can be placeholders for now.
- Provide exact property mapping for:
  - Contact page form submission
  - Talent Audit email capture (post-results)
- Include required hidden fields: utm_source, utm_medium, utm_campaign, utm_term, utm_content, page_path, timestamp.

TALENT AUDIT SPECIFIC REQUIREMENTS
- Results-first model; email capture occurs AFTER results and is optional.
- localStorage keys:
  - audit progress: tcc_audit_v3
  - utms: tcc_audit_utms
- Confetti: canvas-confetti lazy-loaded on successful submit only.
- Email flow: store results in HubSpot + show “Sent. Check your inbox.”; no redirect; no PDF in v1.

FOR EVERY PAGE + COMPONENT, PROVIDE:

1) CONTENT MODEL
- Field-level structure for all content (static vs CMS-managed)
- Contentful content types: fields, data types, character limits, validation rules
- Component-level props; what must be editable in CMS
- Conditional logic (show/hide rules, state variations)

IMPORTANT CMS RULES (MVP = CMS MINIMAL + UPGRADE PATH)
- CMS-managed (MVP):
  • FAQs (sitewide, if present)
  • Testimonials / proof metrics
  • Bottom CTA band copy (sitewide)
  • Legal content: /privacy and /terms
  • /sitemap human-facing content (optional)
- Locked in code (MVP):
  • Core page layouts and section structure
  • Most long-form page copy (capabilities cards, approach body copy) until iteration proves need
  • Navigation structure/routes
  • Audit questions/scoring/bands
  • Analytics helper implementation
- Upgrade path requirement:
  Provide an optional “Phase 2 CMS Expansion” plan that shows how to migrate additional sections/cards into CMS later without changing URLs or architecture. 

2) INTERACTION & BEHAVIOR SPECS
- Micro-interactions (hover/focus/active/loading)
- Form behavior: validation, error states, success states, messaging
- Scroll behavior: sticky elements, anchor links, thresholds
- Hash anchor scrolling: document header offset behavior (currently 80px) and how it behaves on mobile.
- CTA behavior: navigation, external links, target=_blank rules

3) TECHNICAL REQUIREMENTS
- Accessibility: WCAG 2.1 AA requirements and checks
- SEO/AEO: per-page metadata, canonical rules, headings, schema requirements, crawlability
- Performance: image handling, lazy loading, caching strategy, bundle splitting expectations
- Analytics: naming conventions + event tracking plan + UTM persistence rules

4) INTEGRATION POINTS
- Cloudflare Worker endpoints (placeholder ok):
  - POST /api/contact
  - POST /api/audit-email
- Provide request/response shapes (JSON schema), error responses, rate limiting notes.
- Third-party scripts/embeds/dependencies: GA4/GTM placeholders, Calendly usage, Contentful SDK.

5) CMS / ADMIN REQUIREMENTS
- Editable vs locked content
- Reusable components vs one-off blocks
- Content governance rules (ownership, boundaries, approvals)

6) EDGE CASES & SYSTEM STATES
- Empty/loading/failure states
- Data-load failures and fallback behavior
- Mobile-specific exceptions and alternate flows

7) DEV-READY ASSETS
- Export design tokens from the codebase (CSS variables): spacing, color, type, radii, shadows
- Component specs: padding, breakpoints, constraints
- Icon library + usage rules (lucide-react)
- Image aspect ratios + compression guidance

DELIVERABLE FORMAT (REQUIRED)
- Page-by-page spec with clear headings and implementation notes
- Include:
  A) Implementation Map: Routes → components → CMS models → events → endpoints
  B) content-model.json (or YAML) with all CMS fields + validations
  C) events-dictionary table (events + params + triggers) + mapping from existing inline events
  D) endpoint-contracts section (per endpoint) for Cloudflare Workers
  E) QA checklist per page (acceptance criteria + edge cases)
Output must be implementation-ready (tables/schemas/checklists). Avoid generic best-practice prose.   Environment variables list
Add under deployment:

“Provide a required env var list + where each is used.”

Canonical route decision
You already call out /our-approach vs /approach. Add:

“Pick one canonical route /approach and specify redirect behavior.”