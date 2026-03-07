Q1 — CapabilitiesPage.tsx audit/CTA/Envision language

Answer: Do a full read + verify anyway.

Even if your search returns zero matches, you still need to confirm:

there are only two CTAs on the page (“Schedule a clarity call →”, “Get your baseline →”)

there are no “Talent Audit” / “Take our Talent Maturity Audit” labels

there are no internal phase names (Discover/Envision/etc.) leaking into copy or cards

there are no hidden analytics payload strings referencing old labels/URLs

If it’s already clean, no changes. But confirm by reading the file, not search alone.

Q2 — “Talent Maturity Audit” naming on /audit + legal docs

Decision: Keep the tool’s product name on the tool page, but avoid “Audit” in marketing surfaces.

/audit page H1 + document title: keep as “Talent Maturity Audit” (this is the tool name and route is /audit).

Marketing pages (Home/Approach/Capabilities/About/Footer CTAs): never say “Talent Maturity Audit.” Use “Get your baseline →” only.

Terms + Privacy: keep “Talent Maturity Audit” where you’re describing the tool specifically. However, add the alias once for clarity:

First mention: “Talent Maturity Audit (baseline self-assessment)”

After that: you can refer to it as “baseline self-assessment” where it reads cleaner.

This preserves IP precision legally while keeping the market-facing language clean.

Q3 — /blog route removal

Decision: (b) Redirect /blog → /insights.

Implement redirect at router level.

Remove /blog from sitemap and any UI labels.

This protects any legacy/internal links and avoids 404 trust hits.

Q4 — “Envision” in process methodology (Home + Approach)

Decision: Yes, rename/remove across Home + Approach as well (not just Capabilities).
“Envision” reads internal and it’s currently the wrong kind of “proprietary.”

Replacement rule:

Keep the 4-step structure (it’s fine), but use plain-language step names:

Discover

Diagnose (replaces Envision)

Activate

Measure & Optimize

If you want even cleaner:

Discover → Diagnose → Build → Govern (but only do this if it matches what’s currently designed; otherwise use the minimal rename above).

So: Replace “Envision” with “Diagnose” everywhere it appears.

Q5 — AttractionDiagnosticPage.tsx content (file already exists)

Decision: Replace content entirely with the 9-section spec.

Treat the current file as a placeholder. The new page needs to match the structured layout and copy blocks exactly:

Hero

What we assess

What you get
(plus optional “What we don’t do here”)

How it runs

Inputs

Right for you / Not a fit

What happens next (EB-OS)

Mini-FAQ (include pricing-shape question)

Final CTA band

Do not “spot fix.” Full overwrite to avoid drift.

One extra instruction they didn’t ask, but you should add

After implementing, run a project-wide search and confirm zero instances of:

“Employer Brand Audit”

paid-offer use of the word “audit”

“Take our Talent Maturity Audit”

“Talent Audit”

“free 13-question” (or any “free” baseline language)

And confirm analytics payload fields reflect the visible CTAs.