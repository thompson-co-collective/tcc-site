INAL CTA SYSTEM (with your existing link mapping preserved)
Card 1 — AI First Impressions
Desktop CTA:  
Govern your AI narrative →

Hover microcopy:  
Protect your first impression where candidates evaluate you first.

Mobile‑first variant:  
Strengthen AI visibility →

Destination (unchanged):  
/our-approach#ai-visibility

Card 2 — Spend & Conversion
Desktop CTA:  
Improve paid media ROI →

Hover microcopy:  
Fix the friction points slowing qualified applies.

Mobile‑first variant:  
Fix funnel friction →

Destination (unchanged):  
/capabilities#recruitment-marketing

Card 3 — Claims & Credibility
Desktop CTA:  
Strengthen your EVP credibility →

Hover microcopy:  
Make your narrative consistent, verifiable, and conversion‑ready.

Mobile‑first variant:  
EVP credibility →

Destination (unchanged):  
/capabilities#employer-brand

🎨 Everything Else Remains the Same
Your existing design system stays intact:

Teal (#0D7377)

Arial Regular 13px

No underline by default

Underline on hover

16px gap from body copy

Arrow (→) included in link text

All existing animations, easing, and timing remain unless you choose to adopt the micro‑interaction spec below

⚡ Micro‑Interaction Spec (Optional Enhancement)
This is built to match your premium, clarity‑driven aesthetic — subtle, confident, not “marketing flashy.”

Hover State
Underline: fades in

Opacity: 100% → 85%

Color: stays teal (#0D7377)

Cursor: pointer

Arrow: shifts 1px to the right (micro‑movement, not playful)

Timing & Easing
Transition duration: 140ms

Easing: cubic-bezier(0.25, 0.1, 0.25, 1) (standard ease)

Properties transitioned: opacity, text-decoration, transform

CSS Reference (dev‑ready)
css
.link {
  color: #0D7377;
  font-family: Arial, sans-serif;
  font-size: 13px;
  text-decoration: none;
  transition: opacity 140ms cubic-bezier(0.25, 0.1, 0.25, 1),
              text-decoration 140ms cubic-bezier(0.25, 0.1, 0.25, 1),
              transform 140ms cubic-bezier(0.25, 0.1, 0.25, 1);
}

.link:hover {
  opacity: 0.85;
  text-decoration: underline;
}

.link:hover .arrow {
  transform: translateX(1px);
}
🧩 Figma‑Ready Annotation Block (copy/paste for your designer)
Component: CTA Link (Homepage Market Reality Cards)

Text:

Desktop:

Card 1: “Govern your AI narrative →”

Card 2: “Improve paid media ROI →”

Card 3: “Strengthen your EVP credibility →”

Mobile:

Card 1: “Strengthen AI visibility →”

Card 2: “Fix funnel friction →”

Card 3: “EVP credibility →”

Hover microcopy (tooltip or alt text):

Card 1: “Protect your first impression where candidates evaluate you first.”

Card 2: “Fix the friction points slowing qualified applies.”

Card 3: “Make your narrative consistent, verifiable, and conversion‑ready.”

Style:

Color: #0D7377

Typeface: Arial Regular 13px

No underline default; underline on hover

Arrow included in text

16px spacing from body copy

Micro‑interaction:

Opacity: 100% → 85% on hover

Arrow shifts 1px right

Transition: 140ms ease (cubic-bezier 0.25, 0.1, 0.25, 1)

Link Destinations (unchanged):

Card 1 → /our-approach#ai-visibility

Card 2 → /capabilities#recruitment-marketing

Card 3 → /capabilities#employer-brand

🧑‍💻 Developer Notes (clean handoff)
All existing animations remain unless adopting the micro‑interaction spec above.

CTA text only has changed — no structural or layout changes required.

Ensure mobile variants trigger at the same breakpoint as your existing typography scale.

Hover microcopy can be implemented as:

native title attribute,

custom tooltip component, or

hidden assistive text for accessibility.

Arrow (→) should remain part of the text node, not a pseudo‑element, to ensure consistent rendering across devices.