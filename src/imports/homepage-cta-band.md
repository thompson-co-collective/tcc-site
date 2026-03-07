You are Figma Make. Redesign the final homepage CTA band (the bottom “READY TO MOVE FORWARD?” section) so it feels like a premium “final hero” consistent with the Thompson & Co Collective homepage hero. Keep the section content (Option A) and CTA hierarchy, but elevate the UI, spacing, and brand continuity. Do NOT add new sections or extra copy beyond what is specified.

SECTION GOAL
Make this bottom CTA feel like the capstone of an enterprise site:
- On-brand with the hero (navy→teal gradient language, calm editorial aesthetic)
- High-contrast, high-clarity typography
- Primary CTA feels inevitable; secondary feels supportive
- Subtle “shine” via depth (spotlight glow + ampersand watermark), not flash
- Clean and minimal; no busy patterns, icons, or gimmicks

CONTENT (LOCKED — USE EXACT TEXT)
Eyebrow:
READY TO MOVE FORWARD?

Headline:
Get a clear baseline — then prioritize what matters most.

Subhead:
Start with a clarity call. No pitch — just a structured discussion to surface the highest-impact next steps.

Primary CTA button label:
Schedule a clarity call →

Secondary CTA button label:
Prefer to start solo? Get your baseline →

Do not add additional paragraphs. Optional: one small micro-line under the buttons is allowed (max 6 words) ONLY if it improves trust and does not clutter.

VISUAL DESIGN (MUST MATCH HOMEPAGE HERO LANGUAGE)
1) Background (full width band)
- Use a full-bleed gradient background with the same language as the homepage hero:
  background: linear-gradient(180deg, #0A1628 0%, #0E5A6A 100%);
- Add subtle overlay layers for depth (very low opacity):
  overlay 1 (spotlight behind headline):
    radial-gradient(600px 300px at 50% 35%, rgba(17,124,146,0.18), transparent 70%);
    blur(80px) effect if needed, but keep subtle.
  overlay 2 (static diagonal wash):
    linear-gradient(135deg, transparent 0%, rgba(17,124,146,0.08) 50%, transparent 100%);

2) Ampersand watermark (brand signature “shine”)
- Add the white ampersand watermark like the homepage hero.
- Position: right side, partially off-canvas; slight rotation (approx -15° to -25°) to match hero style.
- Opacity: 0.03–0.05 (very subtle).
- Optional: soft blur 0–10px.
- Apply a mask fade (left→right or diagonal) so it never competes with text.

3) Section boundary (premium finish)
- Add a subtle top border to separate from previous section:
  1px solid rgba(255,255,255,0.10)
- No heavy shadows. The background should carry the premium feel.

LAYOUT (EXECUTIVE, CALM, SCANNABLE)
- Centered content column. Use the same max-width as other major homepage sections (e.g., max-w-4xl or max-w-5xl).
- Vertical padding: generous but not huge (target ~80–110px top/bottom on desktop; ~56–80px on mobile).
- Keep line lengths comfortable (do not stretch text too wide).

TYPOGRAPHY (MATCH SITE)
- Eyebrow: small caps/uppercase, tracked, low opacity white (approx 0.55–0.65).
- Headline: serif, larger, strong contrast white, line-height tight (1.1–1.2).
- Subhead: sans, white at ~0.80–0.90 opacity, line-height ~1.6.
- Ensure text remains readable against gradient and watermark.

CTA BUTTON SYSTEM (MUST FEEL LIKE HERO QUALITY)
Primary CTA (“Schedule a clarity call →”)
- White button fill
- Text color: deep teal/navy (e.g., #0E5A6A or #0A1628)
- Slightly larger padding than secondary; min height 56px on desktop, 52px mobile.
- Add subtle premium shadow/glow consistent with hero:
  shadow: 0 20px 50px rgba(255,255,255,0.12) + a light inner highlight if needed.
- Hover: slight scale (1.02–1.04) + shadow intensifies gently + arrow nudges 1–2px.

Secondary CTA (“Prefer to start solo? Get your baseline →”)
- Transparent background
- Border: 2px solid rgba(255,255,255,0.30)
- Text: white
- Hover: border to rgba(255,255,255,0.60) + background wash rgba(255,255,255,0.06)
- Keep secondary visually subordinate to primary.

Button layout rules
- Desktop: buttons inline, primary first, 12–16px gap.
- Mobile: stack buttons vertically, full width, 10–12px gap.
- Keep the CTA group close to the subhead; do not push it too far down.

OPTIONAL MICRO TRUST LINE (ONLY IF IT IMPROVES CONVERSION)
- If added, place directly under button group, small text, 0.70 opacity.
- Max 6 words. Suggested (choose one):
  “No pitch. Just clarity.”
  “30 minutes. Clear next steps.”
- Do not add more than one line.

ACCESSIBILITY + QUALITY
- Contrast must pass; ensure buttons have visible focus states.
- Tap targets ≥ 44px.
- Respect prefers-reduced-motion (disable hover scale if needed; keep subtle).
- Avoid excessive animations; keep calm and premium.

IMPLEMENTATION NOTES
- This section must remain the last CTA band near the bottom of the homepage.
- Keep existing routing:
  Primary button links to the clarity call (existing /contact or Calendly, whichever is currently wired).
  Secondary links to /audit.
- Do not change the rest of the homepage layout or other sections.

DELIVERABLE
Update the homepage bottom CTA section UI to match the above spec, using existing site tokens (fonts, spacing, gradient language, ampersand asset) so it feels native and premium.