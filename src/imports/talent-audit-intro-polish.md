You are Figma Make. Apply a final “enterprise polish” pass to the /audit Talent Maturity Audit page. Preserve all existing question text, scoring, results logic, confetti behavior, localStorage persistence, and band thresholds. The goal is to make the INTRO page feel native to the Thompson & Co Collective homepage (brand continuity) and increase conversion into the audit while keeping the CTA above the fold.

CONTEXT
- Route stays: /audit (primary domain)
- Calendly link stays: https://calendly.com/candice-thompsoncollective/clarity-call
- Brand continuity must match the homepage hero (navy/teal gradient, calm editorial aesthetic, ampersand motif).

PRIORITY FIXES (IN ORDER)
1) Make the header + hero feel native to the homepage
2) Tighten intro copy so it reads like an operator tool
3) Fix vertical rhythm so CTA sits comfortably above fold
4) Add a subtle ampersand watermark in the hero band (brand continuity)

========================================
1) HEADER + HERO — MUST FEEL NATIVE
========================================
INTRO STAGE ONLY:
- The global site header should be transparent over the hero band (no gray bar). If the universal header is currently faded out, ensure it remains visible and readable over the hero band.
- Ensure the hero band is FULL-BLEED (edge-to-edge) and not a boxed inset module. It can still align content to the same max width as homepage.
- Keep the hero band shallow (approx 160–220px visual height). Do not create a full-height hero block.

HERO BAND BACKGROUND (MATCH HOMEPAGE)
Use:
background: linear-gradient(180deg, #0A1628 0%, #0E5A6A 100%);

Optional overlay (for continuity):
background overlay 1:
radial-gradient(600px 300px at 80% 20%, rgba(17,124,146,0.18), transparent 70%)
background overlay 2:
linear-gradient(135deg, transparent 0%, rgba(17,124,146,0.08) 50%, transparent 100%)

========================================
2) INTRO COPY — OPERATOR TOOL TONE (REPLACE)
========================================
INTRO STAGE: Replace the intro copy with EXACT text below.

H1:
Talent Maturity Audit

Supporting line (two lines; second line lighter/smaller in UI):
A fast diagnostic that shows how built your talent attraction system is — and what to fix first.
Built for AI-shaped first impressions, conversion friction, and credibility gaps.

Section title:
What you’ll get

Bullets (exact; bold the lead phrases only):
- Baseline score + maturity band across 13 drivers of hiring outcomes
- System snapshot showing what’s built vs. where opportunity exists — and your next best actions
- Six tailored recommendations: three moves to improve performance now, plus three to strengthen long-term durability

CTA button label (exact):
Get your baseline →

Microcopy under CTA (exact; tight to button):
Instant results.

IMPORTANT:
- Do NOT mention email/no-email on the intro screen.
- Keep the intro text concise; do not add extra paragraphs.

========================================
3) VERTICAL RHYTHM — CTA ABOVE FOLD (1366×768)
========================================
The intro must fit above the fold on a typical laptop screen (1366×768):
- Reduce space between bullets and CTA by ~20–30% compared to current.
- Bring “Instant results.” up tighter to the button (microcopy attached, not separated).
- Slightly increase bullet font size OR line-height so it looks intentional (not default list).
- Maintain compact spacing: H1 margin bottom ~16–20px; supporting line margin bottom ~20–24px; bullet gaps ~10–12px; bullets→CTA spacing ~24–32px.

LAYOUT STRUCTURE REQUIREMENTS
- Keep the hero band as a top band with the heading and supporting line inside it.
- Under the hero band, keep a single compact module containing:
  “What you’ll get” title → bullets → CTA → microcopy.
- Avoid separate stacked cards that push the CTA down.

========================================
4) AMPERSAND WATERMARK — SUBTLE BRAND UPGRADE
========================================
Add a very subtle ampersand watermark inside the hero band (intro stage only), matching the homepage treatment:
- Use the existing white ampersand asset used on the homepage hero.
- Position: right side, partially off-canvas, rotated slightly (similar to homepage).
- Opacity: 0.03–0.06
- Optional blur: 0–8px
- Apply a mask/gradient fade so it doesn’t compete with text.

========================================
QUALITY CHECKLIST — MUST PASS
========================================
- Header matches homepage (no gray UI bar). Header is transparent over the hero band.
- Hero band is full-bleed (not inset/boxed).
- CTA “Get your baseline →” is above the fold on 1366×768.
- Bullets use bold lead-ins and read like executive/operator outcomes.
- “Instant results.” appears directly under CTA (tight spacing).
- No new fields or gating introduced.
- Do NOT change: questions, scoring, bands, confetti, persistence, results logic, email module placement (results page stays as currently implemented).
- Keep bundle lean; no heavy new animation libraries.

DELIVERABLE
Update only the /audit intro stage UI and styling per above. Keep all other stages and logic unchanged.