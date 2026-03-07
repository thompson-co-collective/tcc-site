You are Figma Make building an embedded “Talent Maturity Audit” page for Thompson & Co Collective.

GOAL
Create a single-flow staged wizard audit that takes 4–6 minutes, delivers instant results (score + maturity band + 3 priorities), preserves an editorial enterprise aesthetic, and includes optional email capture AFTER results.

ROUTE + CONTEXT
This page will live at /audit on thompsoncollective.co and will be linked from the homepage hero CTA2 (“Take the Talent Audit”). Keep UX consistent with the existing site: teal/navy restrained palette, Newsreader/Inter style pairing, calm motion, minimal UI.

NON-NEGOTIABLE UX
- Wizard flow: Intro → 13 Questions → Submit/Validate → Results.
- Each question uses segmented controls for 0/1/2 (not radios).
- Auto-save answers to localStorage and restore on reload. Provide “Clear saved answers.”
- Submit button triggers validation; on success: compute score, assign band, fire confetti for ~1.2s, show microcopy “Baseline established.” then reveal Results panel.
- Results shown immediately (no gating). Email capture appears under results and is optional.

SCORING
Each answer: 0 / 1 / 2. Total 0–26.
Bands:
0–7 Nascent
8–14 Developing
15–20 Aligned
21–26 Optimized

QUESTIONS (13)
1) We have defined 12–18 month hiring priorities tied to business strategy, and we review them quarterly.
2) We have identified mission-critical roles (role families) and documented what “qualified” means beyond requirements (skills, traits, dealbreakers).
3) We have a documented EVP informed by real employee/candidate insight (not leadership-only).
4) Our talent narrative is governed: recruiters and hiring leaders communicate the same core story consistently.
5) Our EVP claims are evidence-backed (proof points mapped), and we can defend them across channels.
6) We monitor “message–reality drift” (where candidate experience contradicts the promise) and adjust narrative or operations accordingly.
7) We have an always-on content engine beyond job postings and publish on a defined cadence.
8) Our careers site and priority job content have been updated within 12 months and are structured to convert (clarity, scannability, mobile).
9) We actively manage AI-era first impressions: what candidates find in search/AI/review platforms is consistent with our intended narrative (SEO/GEO/AEO basics in place).
10) We know which channels drive qualified hires by role family, and we reallocate budget/effort based on performance.
11) We have job ad governance (message consistency, inclusive language, quality control) and treat job ads as “claims” that must match EVP.
12) We track apply flow friction, candidate communication SLAs, and candidate feedback — and we act on it.
13) We have baseline funnel analytics (source quality, conversion, time-to-decision, offer acceptance) and use the data to decide what changes next.

RESULTS CONTENT
For each band, show:
- One-sentence meaning
- “Top 3 priorities” bullets
- Primary CTA button: “Book a 30-minute Talent Maturity Audit Discussion” linking to Calendly (or your /contact scheduling path)
- Under results: Email capture module (Email only) with copy:
  Headline: “Want a copy of your results + recommended next steps?”
  Helper: “No spam. This is just your score and what to do next.”
  Button: “Send my results”
  Success: “Sent. Check your inbox.”

ANALYTICS HOOKS
Prepare event hooks (no need to implement GTM here, just placeholders):
- audit_cta_click
- talent_maturity_audit_submitted (include score + band)
- audit_email_capture
- calendly_click

ACCESSIBILITY + QUALITY
- 44px tap targets, visible focus states, prefers-reduced-motion support, strong contrast.
- No unnecessary animations; keep it calm and premium.

13. Homepage CTA2 Integration Note (Awareness)
Your HomePage TSX already routes CTA2 to '/audit'. Maintain this path naming consistently across the router and nav. Avoid mixing '/our-approach' and '/approach' routes; standardize slugs to prevent 404s and analytics fragmentation.
