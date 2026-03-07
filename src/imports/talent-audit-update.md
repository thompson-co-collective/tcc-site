You are Figma Make. Update the existing /audit intro page and results snapshot language to match Thompson & Co Collective’s enterprise hero branding and executive tone. Preserve the existing wizard UX and scoring logic.

PRIORITY GOALS
1) Make the audit intro feel like an extension of the homepage (brand continuity).
2) Ensure the “Begin the audit” CTA is above the fold on a typical laptop (1366×768).
3) Shift snapshot language from “needs attention” to “where opportunity exists” (executive framing).
4) Add one concise line that ties the audit to the homepage “three forces” (AI first impressions, conversion fragility, claims/credibility).

INTRO PAGE — COPY (REPLACE WITH EXACT TEXT)
H1: Talent Maturity Audit
Subhead: A 4–6 minute diagnostic that baselines how built your talent attraction system is — and shows what to fix first.

Section title: What you’ll get
Bullets (exact):
- Score + maturity band across 13 signals (narrative, conversion, governance, measurement)
- System snapshot showing what’s strong vs. where opportunity exists
- 6 recommendations: top 3 priorities + next 3 considerations, tailored to your stage

Single line under bullets (exact, one sentence):
Built for today’s market reality: AI-shaped first impressions, fragile conversion, and credibility gaps.

Replace: CTA button label: Begin the audit →
With: CTA button label: Get your baseline → 
Reassurance line under CTA (exact):
Instant results.

INTRO PAGE — LAYOUT (CTA ABOVE FOLD)
- Replace the current tall “shadowed hero box” with a shorter hero band using the same gradient language as the homepage hero.
- Do NOT stack separate large blocks that push the CTA down (no oversized hero container + separate bullet card + separate CTA).
- Combine bullets + CTA into one compact module.
- Reduce vertical padding so H1 + subhead + bullets + the single market-reality line + CTA fit on 1366×768 without scrolling.
- Target spacing: tighter margins (H1 mb-4, subhead mb-5, bullets compact with ~8–10px gaps, market-reality line small and tight).

INTRO PAGE — HERO BAND BRAND CONTINUITY
Apply a short gradient band behind the heading area:
Background: linear-gradient(180deg, #0A1628 0%, #0E5A6A 100%)
Optional overlay for continuity:
- radial-gradient(600px 300px at 80% 20%, rgba(17,124,146,0.18), transparent 70%)
- linear-gradient(135deg, transparent 0%, rgba(17,124,146,0.08) 50%, transparent 100%)
Keep band shallow (approx 160–220px height). Do not create a full-height hero block.

RESULTS PAGE — LANGUAGE UPDATE
- Wherever the UI currently uses “needs attention,” replace it with “where opportunity exists.”
- In the System Snapshot section:
  Title: System Snapshot
  Subtitle: What’s strong vs. where opportunity exists across the systems that drive hiring outcomes.
  Status pills: “Strong” and “Opportunity” (replace “Needs attention”)

DO NOT CHANGE
- Wizard stages, question content, scoring, bands, confetti behavior, localStorage restore, or attribution placeholders.
- No new form fields before results. Email remains optional after results.