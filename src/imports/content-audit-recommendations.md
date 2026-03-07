Impact	Recommendation	Pages / Locations
Users hit a dead end; undermines credibility and breaks conversion path.	Standardize on /audit. Update all CTAs. Add a redirect/alias from /talent-maturity-audit to /audit for safety.	AboutPage (CTA)
Deep links fail; signals poor system integrity.	Update links to /capabilities#employer-brand-evp and verify anchor IDs match exactly.	HomePage (capability cards), CapabilitiesPage (anchors)
Users land on Home top (or nowhere); breaks narrative sequence.	Replace with /audit (preferred) or implement id='talent-audit' anchor on Home if you truly need in-page jump.	OurApproachPage (Audit callout), HomePage (missing id)
Post-submit moment becomes a dead end; loses momentum.	If Insights is the content hub, replace with /insights and rename label to 'Read Insights'. If you keep /blog, ship a placeholder page now.	ContactPage (success state), SitemapPage (blog status)
Users click into 404s; content strategy reads as incomplete.	Option A: build minimal detail templates for listed slugs. Option B: disable links + mark 'Coming soon'.	InsightsPage (contentCards)
Enterprise trust breaker; legal inconsistency.	Choose one canonical domain/email (recommend: thompsoncollective.co). Update Privacy, Partner schema, and any meta/schema references.	PrivacyPage, TermsPage, PartnerPage schema
Structured data conflicts with brand and can harm SEO trust signals.	Update JSON-LD Organization/Service schema to canonical domain and real logo URL; ensure it matches site branding.	PartnerPage (JSON-LD)
Users cannot form a clean mental model; audit becomes ambiguous.	Rename paid offering to 'Attraction System Diagnostic' (or 'Employer Brand Diagnostic'). Use 'Talent Maturity Audit' only for the free tool. Remove 'Talent Audit' shorthand.	HomePage, OurApproachPage, SitemapPage labels
Feels ungoverned; reduces clarity and recognition.	Define 2 global CTAs: Primary 'Get your baseline →' (/audit), Secondary 'Schedule a clarity call →' (/contact or Calendly). Apply consistently.	Home, About, Capabilities, Approach, Insights, Audit
Users can’t learn the interface; priority is unclear.	Create shared Primary/Secondary CTA components with fixed spacing, sizes, focus, and hover; reuse across pages.	All core pages
Content architecture ambiguity; harder to navigate and maintain.	Use Insights as the sole hub (recommended) and remove /blog references OR implement /blog with a distinct job and cross-linking rules.	SitemapPage, ContactPage, nav labels
System feels less intentional; harder to scale consistently.	Lock tokens (navy #0A1220, teals #117C92/#0E5A6A/#0F2A2A) and replace hardcoded hex scatter with CSS variables.	Home, Insights, Approach, other hero sections
Cards don’t read as one system.	Define 2 governed variants: Emphasis (3px teal) and Neutral (1px gray). Apply consistently.	About, Capabilities, Approach, Home CTA band
Reduced scannability; hierarchy feels heavy.	Make H2 headings short (e.g., 'Employer Brand & EVP'). Move long claims into 1–2 sentence subheads or body copy.	CapabilitiesPage (3 groups)
Editorial inconsistency; minor trust hit.	Standardize to US English (recommended) across all pages and posts.	InsightsPage card descriptions
Subtle but avoidable brand drift, especially in accessibility surfaces.	Standardize brand string everywhere, including aria-labels and alt text.	Multiple pages (aria-labels)
Accessibility risk; reduces readability.	Darken teal for small text or increase size/weight; verify contrast ratio for smallest text size.	Multiple pages (eyebrows)
Accessibility polish; improves clarity for assistive tech.	Add aria-hidden='true' and/or role='presentation' to decorative images; keep alt='' for decorative assets.	HomePage/AboutPage (ampersand layers)
Keyboard navigation clarity and compliance.	Add focus-visible ring styles to Link components and text links (e.g., 'Read more').	InsightsPage, HomePage, others
Legal accuracy risk; credibility issue.	Either implement exactly what you disclose or remove until live. Align privacy text to actual stack.	PrivacyPage
Harder to attribute; minor.	Define a simple UTM convention for key CTAs only (baseline + clarity call).	CapabilitiesPage contact link, others
Navigation competes with primary decision path.	Move Partner to footer as 'For Partners' unless agencies are a primary ICP.	SitemapPage nav, global nav (if implemented)
Avoids distracting users; keeps enterprise feel.	Keep in footer only or remove from public nav entirely.	SitemapPage
Hard to scale; consistency degrades over time.	Refactor repeated patterns into shared components + tokenized styles (type scale, spacing, cards, CTAs).	All pages
Potential mobile jank; minor but visible.	Compress assets, ensure lazy loading where possible, reduce layer count on small screens.	HomePage/AboutPage hero art
Prevents regressions as pages scale.	Add a simple test that crawls routes + in-page anchors; fail build on 404/unknown anchor.	Build pipeline / QA
Prevents layout drift and inconsistent rhythm.	Create layout wrappers for 5/7 and 7/5, plus standard section paddings; refactor pages to use them.	Home, About, Capabilities, Approach
Maintains calm-authority tone as content expands.	Document rules + add copy review checklist; enforce in new pages/posts.	All pages, Insights
Small links are easy to miss and harder to tap.	Increase link padding or make cards fully clickable with visible focus/hover.	Insights cards
Without events, you can’t diagnose conversion drop-offs.	Add events in analytics tool (GA4/other): audit_start, audit_complete, contact_submit, clarity_call_click.	Audit flow, Contact, Global CTAs
Improves legal hygiene and professionalism.	Add effective date near top; ensure change log statement matches reality.	PrivacyPage, TermsPage
Share previews and search snippets degrade if tags are missing.	Create a helper that creates meta tags when absent; standardize OG title/description/image.	All pages
Enterprise readers will test claims; overreach hurts credibility.	Audit copy for claims like 'dozens', 'proven', etc. Either cite proof (case study) or soften language.	Insights, Home, About
Reduces cognitive load; supports enterprise clarity.	Implement active nav state styling; only add breadcrumbs if depth grows (e.g., Insights detail pages).	Global nav, Insights detail pages (if launched)
Inconsistent whitespace is a subtle 'system drift' signal.	Define standard section paddings (e.g., 96/72/48) and apply across pages.	All pages
