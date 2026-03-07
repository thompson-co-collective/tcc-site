Please update the “Thompson & Co Collective — Backend Development Requirements Package” to reflect the following specific corrections only (no redesigns, no new questions, no invented page patterns; TSX remains source of truth):

Confetti trigger correction (Audit)

Update all mentions so that confetti triggers on successful audit completion (i.e., when the user submits all 13 questions and a score/band is calculated).

Confetti does not trigger on post-results email capture.

Keep: email capture remains optional and post-results.

Audit meta description update

Replace any “no email required” wording with:

“13-question diagnostic tool to baseline your talent attraction system. Get instant results with actionable priorities and tailored next steps.”

Ensure the updated description is used consistently anywhere the audit is described in the spec.

Pages in scope alignment

The pages that are designed and ready for backend/dev are: /, /audit, /capabilities, /our-approach, /contact, /sitemap, /privacy, /terms plus static /sitemap.xml and /robots.txt.

Remove /partner and /about from: Implementation Map, Canonical Route Map, Redirects, and sitemap.xml unless they exist in the TSX codebase.

Cloudflare Pages SPA routing (must include)

Add SPA fallback rule to /public/_redirects:

/* /index.html 200

Keep the existing 301 canonical redirects above it.

That’s it—please regenerate the doc with these corrections and keep everything else unchanged.

Quick confirmation: Figma Make’s qualifying questions are answered

Deployment/hosting: Cloudflare Pages.
Env vars documented: Yes (Pages vars + Worker secrets).

HubSpot integration: Spec serverless via Cloudflare Workers.
Portal ID/Form GUIDs: Use placeholders for now.
Submission method: HubSpot Forms API (default).

Contentful setup: Treat as initial setup unless already created.
CMS vs hard-coded: You already defined it (CMS-managed copy + legal + sitemap intro + CTA/FAQ; audit logic + nav locked in code).

Analytics/GTM: GA4 ID as env var is fine; key conversions defined (audit_completed, contact_form_submitted, etc.).

Missing pages: Not missing—pages are designed and ready; use TSX as source of truth.

Privacy/terms: Use Contentful model/structure for legal team to populate (unless final copy already exists).

Domain/SSL: thompsoncollective.co (canonical + CORS notes + sitemap/robots).

Audit email flow: Store results in HubSpot + show inline “Sent. Check your inbox.” No PDF, no redirect in v1.