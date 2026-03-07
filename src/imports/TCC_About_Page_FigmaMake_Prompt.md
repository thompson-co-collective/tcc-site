# TCC About Page — Figma Make Prompt
## Full Content Update · Design Direction · Dev Notes
**Page:** `/about`
**Version:** 2.0
**Read all three layers before touching a single section. Several are interdependent.**

---

## HOW TO USE THIS DOCUMENT

This prompt is organized in **page order, top to bottom.** Each section contains three layers:

- **CONTENT** — Locked copy. Do not paraphrase, reorder sentences, or "clean up" punctuation. Every dash, comma, and line break is intentional.
- **DESIGN** — Visual direction for how the section should look and feel. Includes component pattern, spacing, and typographic intent.
- **DEV** — Implementation notes, component references, accessibility requirements, and any structured data or analytics events.

---

---

## SECTION 1 — GLOBAL HEADER
*No changes. Retain existing GlobalHeader.tsx component as-is.*

---

---

## SECTION 2 — PAGE HERO

### CONTENT

**Eyebrow label:**
ABOUT

**Headline:**
Built different. On purpose.

**Subhead:**
Thompson & Co Collective is a boutique collective of senior practitioners — assembled around your problem, embedded in the work, and accountable to outcomes long after strategy ships.

**Italic tagline (below subhead):**
*Senior-led. Assembled to the problem. Accountable to adoption.*

**Primary CTA button:**
Let's Connect →

**Secondary text link:**
Take the Talent Audit →

---

### DESIGN

- **Background:** Dark gradient — deep navy `#0A1220` bleeding into deep teal `#0F2A2A`. Matches existing hero pattern on the site. Do not use a flat color.
- **Headline:** Playfair Display, 600 weight, white. Fluid size: `clamp(2.5rem, 5vw, 3.75rem)`. The period at the end of each sentence is intentional — do not remove.
- **Subhead:** Inter, 400 weight, white at 85% opacity. Max-width 680px, centered. `clamp(1.0625rem, 2vw, 1.1875rem)`.
- **Italic tagline:** Playfair Display, italic, `clamp(0.9375rem, 1.5vw, 1.0625rem)`, teal accent `#117C92`. 24px margin above it, 32px below.
- **Primary CTA:** White background, teal text `#0E5A6A`, serif font, 600 weight. Solid border `2px solid white`. On hover: fill becomes white, slight scale `1.02`. Min-height 52px, padding `14px 32px`.
- **Secondary link:** White text, underline on hover, Inter, 15px, 400 weight. 12px below primary CTA.
- **Section height:** Min 520px. Content vertically centered. `padding: 96px 24px`.
- **No image or illustration in the hero.** Typography is the hero.

---

### DEV

```
Page metadata:
<title>About | Thompson & Co Collective</title>
<meta name="description" content="Thompson & Co Collective is a boutique collective of senior practitioners — assembled around your problem, embedded in the work, and accountable to outcomes long after strategy ships." />
<link rel="canonical" href="https://thompsoncollective.co/about" />

Open Graph:
<meta property="og:title" content="About | Thompson & Co Collective" />
<meta property="og:description" content="Senior-led. Assembled to the problem. Accountable to adoption." />
<meta property="og:url" content="https://thompsoncollective.co/about" />

Structured data (JSON-LD — place in <head> or useEffect):
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Thompson & Co Collective",
  "description": "Thompson & Co Collective is a boutique collective of senior practitioners — assembled around your problem, embedded in the work, and accountable to outcomes long after strategy ships.",
  "url": "https://thompsoncollective.co/about",
  "publisher": {
    "@type": "Organization",
    "name": "Thompson & Co Collective",
    "url": "https://thompsoncollective.co"
  }
}
```

- One `<h1>` on this page. It lives here on the headline "Built different. On purpose."
- CTA button routes to `/contact`. Secondary link routes to `/audit`.
- Analytics: fire `cta_primary_clicked` with `cta_location: 'hero'`, `cta_label: 'Lets Connect'` on button click.
- Accessibility: hero section uses `<section aria-label="About page introduction">`.

---

---

## SECTION 3 — THE GAP (Problem Statement)

### CONTENT

**Section headline:**
The gap is structural now.

**Body — left column:**
Most employers aren't losing talent because their message is weak. They're losing because it's inconsistent — across channels, teams, platforms, and the AI systems candidates use to evaluate them before a recruiter ever enters the conversation.

When narrative isn't governed, credibility erodes. Spend becomes harder to defend. Candidate experience drifts from what the brand promises. By the time a candidate reaches your careers page, they've often already formed an opinion — assembled from whatever your story looks like across search, review platforms, and generative engines.

We exist to close that gap with clarity, proof, and governance — so your story doesn't degrade after launch.

**Callout label (right column eyebrow):**
WHAT BREAKS WHEN NARRATIVE ISN'T GOVERNED

**Callout body (right column):**
Claims drift across channels. Media performance loses its baseline. Candidate experience begins to contradict the promise — and candidates notice before you do.

---

### DESIGN

- **Background:** White `#FFFFFF`. Clean break from hero.
- **Layout:** Two-column, 60/40 split. Left: body copy. Right: teal-bordered callout card. On mobile: stack, callout below body.
- **Section headline:** Playfair Display, 600 weight, `#0A1220`, `clamp(2rem, 4vw, 2.75rem)`. Sits above the two-column split, full-width.
- **Left column body:** Inter, 400 weight, 17px, `#374151`. Paragraphs separated by 20px. Max-width on left column: 580px.
- **Right column callout:** White card with `3px solid #117C92` left border. Background `#F0F9FA`. Padding `28px 28px 28px 32px`. Border-radius `4px`.
  - Eyebrow label: Inter, 600 weight, 11px, `#117C92`, uppercase, 0.1em letter-spacing.
  - Body: Inter, 400 weight, 15px, `#374151`. Line-height 1.65.
- **Section padding:** `padding: 96px 0`. Max-width container `1200px`, centered.
- **No icons, no imagery.** The content does the work.

---

### DEV

- Section uses `<section aria-label="The structural talent narrative gap">`.
- Left column: `<div class="gap-body">` wrapping two `<p>` tags.
- Right column callout: `<aside>` element with `aria-label="What breaks without narrative governance"`.
- No analytics events on this section — it is informational only.

---

---

## SECTION 4 — THE AMPERSAND ANCHOR *(NEW SECTION)*

### CONTENT

**Section eyebrow:**
OUR PHILOSOPHY

**Section headline:**
The "&" is our anchor.

**Body:**
At Thompson & Co Collective, the ampersand isn't a design detail. It's a structural principle.

Strategy *and* evidence. Senior-led *and* embedded. Accountable to launch *and* accountable after it. Intelligence *and* instinct. Clarity *and* creativity.

We built the firm around the belief that the best outcomes live in the conjunction — not in choosing one thing over another. Brilliance isn't born in silos. It scales through collaboration: with our clients, our partners, and each other.

**Closing line (italic, slightly smaller):**
*The "&" is a reminder that we do nothing alone — and nothing without purpose.*

---

### DESIGN

- **Background:** Deep teal-to-navy gradient — `#0E5A6A` to `#0A1220`. Same family as hero but distinct from it. This section should feel like a pause — a breath of intentional weight before the operating model.
- **Layout:** Full-width. Content centered, max-width 760px.
- **Typographic anchor:** The "&" character rendered in display at `clamp(5rem, 12vw, 9rem)`, Playfair Display, 300 weight, color `#117C92` at 20% opacity. Positioned as a background typographic element — centered behind the headline, not interactive. Use `aria-hidden="true"` on this element.
- **Section eyebrow:** Inter, 600 weight, 11px, `#117C92`, uppercase, 0.1em letter-spacing. 24px below eyebrow before headline.
- **Headline:** Playfair Display, 600 weight, white, `clamp(2.25rem, 4.5vw, 3.25rem)`. Centered.
- **Body:** Inter, 400 weight, 17px, white at 85% opacity, centered. The italic words (*and*) within the body are `<em>` tags — preserve the emphasis.
  - The "Strategy *and* evidence..." line should have slightly more visual presence than standard body — consider Inter 500 weight, 18px, white at 95% opacity. It reads as a rhythm list.
- **Closing italic line:** Playfair Display, italic, 16px, `#117C92`, centered. 32px margin above.
- **Section padding:** `padding: 96px 24px`.
- No buttons, no CTAs in this section. It is a conviction statement, not a conversion moment.

---

### DEV

- This is a **new section** — does not exist in the current About page. Insert between the Gap section (Section 3) and the Operating Model section (Section 5).
- `<section aria-label="Our philosophy — the ampersand">`.
- The large decorative "&" uses `aria-hidden="true"` and `user-select: none`. CSS: `position: absolute; z-index: 0; pointer-events: none;`. Wrap section in `position: relative; overflow: hidden`.
- The italic words inside the "Strategy and evidence..." paragraph are `<em>` tags in the markup.
- No analytics events required.
- Structured data: this section's content can be added to the Organization schema `description` field as supplementary context.

---

---

## SECTION 5 — OPERATING MODEL (Senior, Assembled, Accountable)

### CONTENT

**Section headline:**
Senior, assembled, accountable.

**Section subhead:**
Thompson & Co Collective is structured for the work clients actually need now — senior-led, built around the problem, and accountable to adoption.

**Card 1 — Not an agency:**
Not an agency.
You don't pay for overhead that doesn't touch the work. You get senior strategy and clean delivery. Agency structures dilute senior involvement — we remove that layer entirely.

**Card 2 — Not a solo consultant:**
Not a solo consultant.
When the scope requires a bench, it exists — without losing the strategic thread. A solo consultant can't hold multi-workstream engagements without compromising depth. We can.

**Card 3 — A collective:**
A collective.
Senior practitioners assembled around your reality, working alongside your team, governed to outcomes. The model exists because the problem demanded it.

**Card 4 — Embedded, not external:** *(NEW CARD)*
Embedded, not external.
Everyone who works on your engagement operates with a founder's mindset — accountable beyond their defined role, invested in the outcome, not just the output. We win together. Full stop.

**Section closing line (below cards):**
Senior-led. Assembled to the problem. Accountable to outcomes.

**Links (below closing line):**
See our capabilities →
Read the full methodology →

---

### DESIGN

- **Background:** Light gray `#F9FAFB`. Provides visual separation from the Ampersand section above.
- **Layout:** 2×2 card grid on desktop. Single column on mobile. `gap: 24px`.
- **Section headline:** Playfair Display, 600 weight, `#0A1220`, `clamp(2rem, 4vw, 2.75rem)`. Centered. 16px below headline: section subhead.
- **Section subhead:** Inter, 400 weight, 17px, `#6B7280`. Max-width 600px, centered. 48px margin below before card grid.
- **Cards:** White background `#FFFFFF`. Border: `2px solid #E5E7EB`. On hover: border becomes `2px solid rgba(17,124,146,0.35)`, shadow `0 4px 16px rgba(14,90,106,0.08)`. Border-radius `8px`. Padding `32px`.
  - Card title: Inter, 700 weight, 13px, `#117C92`, uppercase, 0.08em letter-spacing. 12px below title: body copy.
  - Card body: Inter, 400 weight, 16px, `#374151`, line-height 1.65.
  - Transition: `border-color 250ms ease, box-shadow 250ms ease`.
- **Section closing line:** Inter, 600 weight, 13px, `#117C92`, uppercase, 0.1em letter-spacing. Centered. 48px above it.
- **Links:** Playfair Display, 15px, `#0E5A6A`. Displayed inline with `·` separator between them on desktop. Stack on mobile. Arrow `→` is part of the text content.
- **Section padding:** `padding: 96px 0`.

---

### DEV

- Card 4 ("Embedded, not external") is a **new card** — the current implementation has 3 cards. Add as the fourth in the 2×2 grid.
- Cards use `<ul>` list with `<li>` items. Each `<li>` contains: `<h3>` for card title, `<p>` for card body.
- "See our capabilities" → `/capabilities`. "Read the full methodology" → `/our-approach`.
- Accessibility: card grid section `aria-label="How we're structured"`. Card hover state must not be the only indicator of interactivity — cards here are informational, not clickable, so do not add click handlers or `role="button"`.
- No analytics events. This is informational content.

---

---

## SECTION 6 — LEADERSHIP / FOUNDER BIO

### CONTENT

**Section headline:**
Leadership, not a personality brand.

**Bio paragraph 1:**
Candice Thompson has led enterprise recruitment marketing and employer brand work inside complex, multi-stakeholder environments — where spend, claims, and candidate experience must align or performance breaks.

**Bio paragraph 2:**
For nearly two decades, she has driven revenue-generating functions, managed multi-million dollar recruitment media budgets — including $15M+ in annual oversight — and worked alongside executive leadership at Fortune 50 and Fortune 500 organizations to reframe how talent attraction is governed, measured, and sustained. The work required operating at the intersection of brand, analytics, and organizational dynamics — consistently, and often where no clear playbook existed.

**Bio paragraph 3:**
She built Thompson & Co Collective because the firm she wanted to hire didn't exist: senior, evidence-led, accountable after launch — and built around the belief that the best outcomes live in the conjunction, not in choosing between strategy and execution.

**Callout label:**
WHERE THE WORK HAS LIVED:

**Callout bullet list:**
- Enterprise recruitment marketing governance
- Multi-channel attribution and ATS tracking realities
- Employer brand consistency across critical touchpoints
- Fortune 50 and Fortune 500 EVP development and proof structuring
- $15M+ annual recruitment media oversight
- Narrative governance in AI-assisted candidate research environments

---

### DESIGN

- **Background:** White `#FFFFFF`.
- **Layout:** Two-column on desktop. Left: section headline + all three bio paragraphs (full width of left column). Right: teal-bordered callout with "Where the work has lived" list. On mobile: stack, callout below bio.
- **Section headline:** Playfair Display, 600 weight, `#0A1220`, `clamp(1.75rem, 3.5vw, 2.5rem)`. Sits above the two-column layout. No eyebrow label needed.
- **Bio paragraphs:** Inter, 400 weight, 17px, `#374151`, line-height 1.75. Paragraphs separated by 20px. Max-width on left column: 560px.
- **Callout:** Same pattern as Section 3 callout — `3px solid #117C92` left border, `#F0F9FA` background, `28px 28px 28px 32px` padding, border-radius `4px`.
  - Label: Inter, 600 weight, 11px, `#117C92`, uppercase, 0.1em letter-spacing. 16px below: list.
  - List: unstyled (no default bullets). Each item uses a `::before` pseudo-element: `content: '—'`, color `#117C92`, `margin-right: 8px`. Inter, 400 weight, 15px, `#374151`, line-height 1.65. `16px` between items.
- **No headshot photo** in this section — the brief is "leadership, not a personality brand." If a headshot is added later, it should be editorial and minimal (black and white, or desaturated), never promotional.
- **Section padding:** `padding: 96px 0`.

---

### DEV

- Bio section: `<section aria-label="About our founder, Candice Thompson">`.
- `<h2>` on "Leadership, not a personality brand."
- Three `<p>` tags for bio paragraphs.
- Callout: `<aside aria-label="Where Candice's work has lived">`. List items: `<ul>` with `<li>` elements.
- The $15M+ and Fortune 50/500 references feed directly into the Organization schema on the page. Add to JSON-LD `founder` property:
```
"founder": {
  "@type": "Person",
  "name": "Candice Thompson",
  "jobTitle": "Founder & Principal Consultant",
  "description": "Nearly two decades of enterprise recruitment marketing and employer brand leadership, including $15M+ in annual media oversight at Fortune 50 and Fortune 500 organizations."
}
```
- No analytics events on this section.

---

---

## SECTION 7 — PRINCIPLES CARDS (How We Show Up)

### CONTENT

**Section eyebrow:**
HOW WE SHOW UP

**Section headline:**
Standards, not slogans.

**Card 1:**
Evidence over aspiration
We govern claims we can stand behind — before they become your public narrative.

**Card 2:**
Partnership over delivery
We work alongside teams, not above them — so the work gets adopted.

**Card 3:**
Clarity over volume
We build systems that scale decision-making, not content piles.

**Card 4:**
Governance over launch
We stay accountable after strategy ships — when most work starts to degrade.

**Card 5 — NEW:**
Disruption with purpose
We challenge what's accepted without disrupting what's working. Every recommendation is intentional, grounded in evidence, and designed to hold up after the engagement ends.

**Card 6 — NEW:**
Legacy over hype
We don't optimize for the engagement. We optimize for what holds up — after the strategy ships, after the campaign runs, after we're no longer in the room.

---

### DESIGN

- **Background:** Deep navy-to-teal gradient — same family as the Ampersand section but shifted: `#0A1220` to `#0E3A3A`. The alternating dark/light/dark rhythm across the page (Hero dark → Gap white → Ampersand dark → Operating Model light → Bio white → **Principles dark** → CTA dark) creates visual cadence and signals the approach to the end of the page.
- **Layout:** 3-column grid on desktop (2 rows × 3 cards). 2-column on tablet. Single column on mobile. `gap: 24px`.
- **Section eyebrow:** Inter, 600 weight, 11px, `#117C92`, uppercase, 0.1em letter-spacing. Centered. 8px above headline.
- **Section headline:** Playfair Display, 600 weight, white, `clamp(2rem, 4vw, 2.75rem)`. Centered. 48px below headline before card grid.
- **Cards:**
  - Background: `rgba(255,255,255,0.06)`. Border: `1px solid rgba(255,255,255,0.12)`. Border-radius `8px`. Padding `32px`.
  - On hover: background `rgba(255,255,255,0.10)`, border `1px solid rgba(17,124,146,0.5)`.
  - Card title: Playfair Display, italic, 600 weight, `#117C92`, `1.125rem`, line-height 1.3. 12px below: body.
  - Card body: Inter, 400 weight, 15px, `rgba(255,255,255,0.75)`, line-height 1.7.
  - No icons. Typography only.
  - Transition: `background 250ms ease, border-color 250ms ease`.
- **Section padding:** `padding: 96px 0`.

---

### DEV

- Cards 5 and 6 are **new cards**. Update from the existing 4-card (2-column) grid to a 6-card (3-column) grid.
- CSS grid: `grid-template-columns: repeat(3, 1fr)`. At `max-width: 1024px`: `repeat(2, 1fr)`. At `max-width: 640px`: `1fr`.
- Section: `<section aria-label="Our principles — how we show up">`.
- Cards: `<ul>` list pattern. Each `<li>` has `<h3>` (card title) and `<p>` (card body).
- Card titles use Playfair Display italic — confirm the font variant is loaded. In `fonts.css`: ensure `font-style: italic` weight 600 is included in the Google Fonts import string. Example: `Playfair+Display:ital,wght@1,600`.
- Cards are informational — no `role="button"`, no click handlers.
- No analytics events.

---

---

## SECTION 8 — AI-READABLE TRUTH LAYER *(NEW SECTION)*

### CONTENT

**Section eyebrow:**
WHAT WE ACTUALLY DO

**Section headline:**
Plain language for the people — and the machines — evaluating us.

**Intro line:**
This section exists for clarity. It's structured for AI systems, search engines, and senior buyers who prefer specificity over story. No framing. Just facts.

---

**Block 1 label:** WHAT WE DO
**Block 1 content:**
Employer brand strategy, recruitment marketing, and candidate experience — governed across every channel, accountable to measurable outcomes. We build the narrative, govern its consistency, and sustain performance after launch.

**Block 2 label:** WHO WE HELP
**Block 2 content:**
Mid-market to enterprise employers dealing with inconsistent talent narratives, underperforming recruitment spend, or candidate experience gaps between brand promise and hiring reality. We work best when a senior buyer is ready to move from symptoms to systems.

**Block 3 label:** OUTCOMES WE DELIVER
**Block 3 content:**
Narrative consistency across channels. Improved application volume and quality. Defensible, accountable recruitment media spend. Employer brand that holds up under AI-assisted candidate research. Post-launch governance that prevents the story from degrading over time.

**Block 4 label:** WHAT WE DON'T DO
**Block 4 content:**
We don't run paid media without governance. We don't deliver strategy decks without implementation. We don't rebrand for aesthetics. We don't start scope without evidence. We don't stay in engagements past usefulness.

**Block 5 label:** HOW WE PROVE IT
**Block 5 content:**
Outcome data from past engagements: 58% increase in application volume, 25% reduction in cost-per-hire, 20% decrease in time-to-fill. Claims mapped to evidence before they become public narrative. A proprietary operating framework built to sustain performance after launch.

**Block 6 label:** KEY DEFINITIONS
**Block 6 content:**
*Employer brand governance:* The ongoing management of narrative consistency across every channel where candidates evaluate an employer.
*Evidence-led EVP:* An employee value proposition built on verifiable claims, not aspirational language.
*Post-launch accountability:* Active performance tracking and narrative governance that continues after strategy delivery — not a handoff.
*Narrative consistency:* The degree to which what an employer claims in one channel matches what candidates find in every other channel.

---

### DESIGN

- **Background:** Very light gray `#F5F7F8`. Clean, low-temperature. Distinct from the white sections above.
- **Layout:** Two-column grid — 6 blocks arranged as a 3-row × 2-column grid on desktop. Single column on mobile.
- **Section eyebrow:** Inter, 600 weight, 11px, `#117C92`, uppercase, 0.1em letter-spacing. Centered.
- **Section headline:** Playfair Display, 600 weight, `#0A1220`, `clamp(1.5rem, 3vw, 2rem)`. Centered. This headline is intentionally smaller than other section headlines — the section's authority comes from its content density, not its typographic weight.
- **Intro line:** Inter, 400 weight, 15px, `#6B7280`. Centered. Max-width 560px. 32px below headline before grid.
- **Blocks:**
  - Label: Inter, 700 weight, 11px, `#117C92`, uppercase, 0.12em letter-spacing. `border-bottom: 1px solid #E5E7EB`. Padding-bottom `8px`. `margin-bottom: 12px`.
  - Content: Inter, 400 weight, 15px, `#374151`, line-height 1.7.
  - Block background: White `#FFFFFF`. Border: `1px solid #E5E7EB`. Border-radius `6px`. Padding `24px 28px`. No hover state — this is reference content, not interactive.
  - `gap: 16px` between blocks.
- **Block 6 (Key Definitions):** Italic terms use `<em>` tags. Definitions separated by line breaks. Slightly smaller body type: 14px.
- **Section padding:** `padding: 96px 0`.
- **Note on intent:** This section should look slightly more utilitarian than the rest of the page — like a reference panel, not a feature section. The reduced visual drama is intentional.

---

### DEV

- This is a **new section** — does not exist in the current About page. Insert between Principles Cards (Section 7) and the CTA Band (Section 9).
- `<section aria-label="AI-readable truth layer — what Thompson and Co Collective actually does">`.
- Each block: `<article>` element with `<h3>` (label) and `<p>` (content). The `<article>` tag signals to crawlers that each block is independently meaningful.
- Block 6 definitions: `<dl>` (definition list) with `<dt>` (term, italic via CSS) and `<dd>` (definition). This is the most semantically correct markup for a glossary-style block.
- **GEO/SEO note:** This section is the primary AI-indexable content block on the page. It should render in the HTML (not JS-only). Confirm it is not lazy-loaded or hidden behind a toggle by default. It can be visually compact, but it must be present in the DOM on page load.
- Add the content of this section to the page's JSON-LD as `description` and `knowsAbout` properties on the Organization schema:
```
"knowsAbout": [
  "Employer brand strategy",
  "Recruitment marketing governance",
  "Candidate experience design",
  "Employee value proposition development",
  "Talent attraction analytics",
  "AI visibility for employer brand"
]
```
- No analytics events. This section is reference content.

---

---

## SECTION 9 — CTA BAND

### CONTENT

**Section eyebrow:**
READY TO MOVE FORWARD?

**Headline:**
Let's assess what's working — and what's holding you back.

**Subhead:**
The first conversation is a diagnosis, not a pitch. We'll tell you honestly where we think the gaps are — and whether we're the right fit to close them.

**Primary CTA button:**
Schedule a Clarity Call →

**Secondary CTA button (outline):**
Take the Free Audit →

---

### DESIGN

- **Background:** Deep teal gradient — `#0E5A6A` to `#117C92`. Distinct from the other dark sections (which use navy). The teal here signals action, not contemplation.
- All text: white.
- Eyebrow: Inter, 600 weight, 11px, uppercase, 0.1em letter-spacing, white at 70% opacity. Centered.
- Headline: Playfair Display, 600 weight, white, `clamp(1.75rem, 3.5vw, 2.75rem)`. Centered. Max-width 680px.
- Subhead: Inter, 400 weight, 17px, white at 80% opacity. Centered. Max-width 560px.
- **Primary CTA:** White background, teal text `#0E5A6A`, serif 600 weight. Padding `14px 32px`. Min-height `52px`. On hover: background `rgba(255,255,255,0.92)`, scale `1.02`.
- **Secondary CTA:** Transparent background, white border `2px solid rgba(255,255,255,0.7)`, white text. Same dimensions. On hover: background `rgba(255,255,255,0.12)`.
- Buttons displayed inline, `24px` gap between them. Stack on mobile.
- **Section padding:** `padding: 96px 24px`. No changes from current.

---

### DEV

- `<section aria-label="Call to action — connect with Thompson and Co Collective">`.
- "Schedule a Clarity Call" → `/contact`. "Take the Free Audit" → `/audit`.
- Analytics events:
  - Primary button: `cta_primary_clicked`, `cta_location: 'cta_band'`, `cta_label: 'Schedule a Clarity Call'`, `destination_url: '/contact'`, `page_path: '/about'`.
  - Secondary button: `cta_secondary_clicked`, `cta_location: 'cta_band'`, `cta_label: 'Take the Free Audit'`, `destination_url: '/audit'`, `page_path: '/about'`.
- Accessibility: section uses two adjacent `<a>` or `<button>` elements — ensure they are distinguishable to screen readers via `aria-label` if button text alone is ambiguous in context.

---

---

## SECTION 10 — GLOBAL FOOTER
*No changes. Retain existing GlobalFooter.tsx component as-is.*

---

---

## GLOBAL DEV NOTES — ABOUT PAGE

### Page-Level Requirements

**Single H1:** The only `<h1>` on this page is "Built different. On purpose." in the hero. Every other section headline is `<h2>`. Card titles and callout labels are `<h3>`. Do not skip heading levels.

**Scroll-to-top:** Confirm `ScrollToTop` component fires on route change to `/about`. User should land at the top of the hero on every visit.

**Page route:** `/about` — confirm React Router entry exists and does not 404 on direct navigation (requires `_redirects` file in `/public`).

**Font variants required:** Confirm `fonts.css` imports the following Google Fonts variants:
- Playfair Display: weights 400, 600; normal and italic styles
- Inter: weights 400, 500, 600, 700

**prefers-reduced-motion:** Any hover transitions on cards must respect `@media (prefers-reduced-motion: reduce)` — remove `transition` and `transform` properties in that media query.

**Mobile breakpoints:**
- Cards (Operating Model, Principles): stack to 1 column at `< 640px`
- Two-column layouts (Gap, Bio): stack at `< 1024px`, callout moves below body
- CTA buttons: `width: 100%` at `< 640px`, stack vertically with `12px` gap

**No console errors:** Run `npm run build` before export. Zero TypeScript errors, zero unused imports.

### New Sections Checklist
The following sections are NEW and do not exist in the current AboutPage.tsx. They must be built from scratch:
- [ ] Section 4 — The "&" is our anchor
- [ ] Section 8 — AI-Readable Truth Layer
- Section 5 Card 4 — "Embedded, not external" (new card in existing section)
- Section 7 Cards 5 & 6 — "Disruption with purpose" + "Legacy over hype" (new cards in existing section)

### Existing Sections Being Updated
- Section 6 (Founder Bio) — significant copy expansion, no structural changes
- Section 3 (The Gap) — one new sentence added to second paragraph ("By the time a candidate reaches your careers page...")
- Section 5 (Operating Model) — expanded card body copy, fourth card added

### Components to Reuse (Do Not Rebuild)
- `GlobalHeader.tsx` — unchanged
- `GlobalFooter.tsx` — unchanged
- `Accordion` from Radix UI — not used on About page, but do not remove from dependencies
- CTA button pattern from `HomePage.tsx` — reuse exactly for CTA band

---

## COPY GOVERNANCE NOTES

- All em-dashes `—` are proper em-dashes, not double hyphens. Do not substitute.
- Italics within body copy (particularly in the Ampersand section and Key Definitions block) are meaningful — preserve all `<em>` tags.
- The period at the end of "Built different. On purpose." is part of the brand voice. Do not remove.
- Word "collective" is lowercase when used generically; capitalized only as part of the full brand name "Thompson & Co Collective."
- "$15M+" uses a dollar sign and plus sign — do not convert to "fifteen million dollars" or similar.
- "Fortune 50 and Fortune 500" — both tiers are mentioned intentionally. Do not consolidate to "Fortune 500."

---

*End of prompt. All sections complete. Review all three layers per section before implementation.*
