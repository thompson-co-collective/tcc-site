YOU ARE FIGMA MAKE. Update the existing Talent Maturity Audit page to be executive-grade while preserving the original high-performing UX structure. Implement ALL changes below exactly.

PROJECT
Thompson & Co Collective — Talent Maturity Audit (Lead-gen diagnostic)
Route: /audit (primary domain)
Calendly CTA: https://calendly.com/candice-thompsoncollective/clarity-call

PRIMARY GOAL (EXECUTIVE OUTCOMES)
Deliver an enterprise-grade diagnostic experience that:
- provides immediate value (score + band + meaning),
- adds deeper executive clarity (system snapshot + expanded recommendations),
- maintains minimal friction (no gating before results),
- drives a single high-intent action (Calendly booking),
- supports attribution later (GA4/GTM placeholders now).

NON-NEGOTIABLE UX (DO NOT CHANGE)
1) Wizard flow ONLY: Intro → Questions → Submit/Validate → Results.
2) 13 statements; each answered using segmented controls (0/1/2).
3) Auto-save answers to localStorage; restore on reload; include a single “Clear saved answers” link in a subtle persistent header (top right) when not on Intro.
4) Submit triggers validation. On success:
   - compute score and band,
   - fire confetti for ~1.2 seconds (disabled if prefers-reduced-motion),
   - show microcopy: “Baseline established.” briefly,
   - then reveal Results stage and scroll to results.
5) Results are visible instantly (NO gating before results).

KEY CHANGE REQUEST (LOCKED)
Move the email capture module to be IMMEDIATELY BELOW the score + band + “What this means” description on the results page (high on the page). It must remain optional and visually secondary.

COPY POSITIONING (EXEC LENS)
This audit is NOT a “quiz.” It is a baseline diagnostic for TA leaders and executives. Avoid playful/gamified language beyond the calm confetti moment.

STYLING REQUIREMENTS
- Editorial, calm, minimal, sophisticated. Not “quiz app.”
- Tap targets ≥ 44px.
- Visible focus states for keyboard users.
- Prefers-reduced-motion: disable confetti and animated transitions.
- Keep bundle lean; lazy-load confetti.

INTRO SCREEN UPDATES (ADD VALUE + EXEC TONE)
Update the intro subhead and bullets to align to talent attraction system maturity (not broad “talent strategy”).
Headline: “Talent Maturity Audit”
Subhead: “A 4–6 minute assessment that reveals where your talent attraction system is strong, where it’s fragile, and what to fix first.”

“What you’ll get” bullets (use these exact bullets):
- “Your maturity score across 13 signals of talent attraction performance”
- “Your band (Nascent, Developing, Aligned, or Optimized)”
- “A system snapshot that shows what’s strong vs. what needs attention”
- “6 recommendations: your top 3 priorities + next 3 considerations”
Footer reassurance line stays: “Results delivered instantly. No email required to view your score.”

QUESTION UX UPDATES (EXEC TONE)
Keep segmented controls but update labels to executive language (still mapping to 0/1/2):
0 = “Not in place”
1 = “In progress”
2 = “Consistent & governed”
Do NOT change scoring logic.

Remove the bottom navigation dots (duplicate progress signals). Keep ONLY the top progress bar and “Question X of 13”.

QUESTIONS (CANONICAL — EXACT TEXT)
Use these 13 statements exactly:
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

SCORING (LOCKED)
- Each answer: 0/1/2
- Total: 0–26
Bands:
0–7  = Nascent
8–14 = Developing
15–20 = Aligned
21–26 = Optimized
Ensure “Nascent” is included and rendered correctly.

RESULTS PAGE — NEW ORDER (LOCKED)
Results must render in this order:
1) Score + band + range (existing)
2) “What this means” description (existing)
3) EMAIL CAPTURE MODULE (moved here; optional; email only)
4) SYSTEM SNAPSHOT (new; strong vs needs attention; no numeric sub-scores displayed)
5) TOP 3 PRIORITIES (band-specific)
6) NEXT 3 CONSIDERATIONS (band-specific)
7) PRIMARY CTA (Calendly booking)

RESULTS CONTENT (BAND MEANINGS + TOP 3 + NEXT 3)
Use this exact content.

Nascent (0–7)
Meaning: Hiring is happening, but the system is informal. Outcomes feel inconsistent and hard to diagnose.
Top 3 priorities:
1. Establish an EVP-lite: 3–5 defensible claims + proof.
2. Fix conversion choke points (job clarity + apply flow) before adding spend.
3. Stand up one always-on channel with a weekly publishing cadence.
Next 3 considerations:
4. Define “qualified” for 1–2 mission-critical role families (beyond requirements).
5. Set 2–3 baseline metrics (apply completion, time-to-decision, offer acceptance) and review monthly.
6. Standardize candidate communication expectations (SLA + templates) to reduce drop-off.

Developing (8–14)
Meaning: Pieces exist, but consistency and accountability are weak across channels and leaders.
Top 3 priorities:
1. Govern narrative across recruiters + hiring leaders; standardize job ad claims.
2. Implement clean baselines by role family (source quality + conversion).
3. Turn EVP themes into proof-led assets (specificity beats “culture language”).
Next 3 considerations:
4. Build a simple content cadence (weekly/biweekly) tied to priority roles.
5. Identify the top 2 friction points (apply steps, screening lag, scheduling) and fix them.
6. Create a lightweight proof map (claims → evidence → where it lives on-site/ads/AI-visible content).

Aligned (15–20)
Meaning: You have a coherent foundation; performance is limited by optimization loops and scale discipline.
Top 3 priorities:
1. Optimize funnel: apply starts→completes, time-to-decision, offer→accept.
2. Scale distribution: coordinate paid/owned/earned to reduce channel waste.
3. Tighten AI/search/review footprint to reduce narrative drift.
Next 3 considerations:
4. Segment by role family (2–3 variants) for message + channel strategy.
5. Add quarterly governance checkpoints (job ads, landing pages, reviews, EVP proof).
6. Enable hiring leaders with a simple talk track + proof points to keep the story consistent “in the room.”

Optimized (21–26)
Meaning: Strong governance + measurement. The opportunity is scale, resilience, and defensibility.
Top 3 priorities:
1. Expand role-family segmentation (message + channel strategy).
2. Operationalize narrative defense (monitoring + response playbook).
3. Run a quarterly improvement cadence with benchmarks and decisions.
Next 3 considerations:
4. Build a signal-monitoring routine (reviews, search, AI summaries, candidate feedback) with owner + SLA.
5. Introduce test-and-learn discipline (message/creative tests tied to conversion + quality, not clicks).
6. Create a 1-page quarterly readout (what moved, why, what’s next) for exec visibility.

SYSTEM SNAPSHOT (NEW — EXEC VALUE, NO NUMBERS)
Create a “System Snapshot” section that shows 5 pillars with status:
- Strategy & Ownership (Q1–Q2)
- Narrative & Proof (Q3–Q6)
- Visibility & AI First Impressions (Q7–Q9)
- Recruitment Marketing Governance (Q10–Q11)
- Candidate Experience & Measurement (Q12–Q13)

Logic:
- Compute the average score (0–2) for each pillar.
- If avg ≥ 1.5 → status = “Strong”
- If avg < 1.5 → status = “Needs attention”
Display:
- Pillar name
- Status pill (“Strong” or “Needs attention”)
- One short clarifying line (8–12 words) per pillar:
  Strategy & Ownership: “Hiring priorities and role clarity are defined and reviewed.”
  Narrative & Proof: “EVP claims are consistent, evidenced, and governed.”
  Visibility & AI: “First impressions in search/AI/reviews are managed.”
  Governance: “Channel spend and performance are tracked by role family.”
  Experience & Measurement: “Funnel conversion and decision metrics drive optimizations.”
Do NOT display pillar numeric values.

EMAIL CAPTURE MODULE (MOVED HIGH — LOCKED)
Placement: directly under “What this means”.
Design: visually secondary (thin border or light background), compact.
Fields: email only.
Copy:
Headline: “Send this to yourself (or forward to leadership)”
Helper: “No spam. This is your score, snapshot, and next steps.”
Placeholder: “you@company.com”
Button: “Send my results”
Success: “Sent. Check your inbox.”
Behavior:
- Implement a placeholder POST to /api/audit-email with payload:
  { email, score, band, snapshotStatuses, utms }
- IMPORTANT BUG FIX: allow score = 0.
  Use: if (score === null) return; (do NOT block on falsy score)
- If request fails/unavailable, still show success (mock success) to preserve UX.

PRIMARY CTA (KEEP SINGLE HIGH-INTENT PATH)
Section headline: “Ready to act on these insights?”
Subtext: “Book a 30-minute discussion to translate your score into a tailored roadmap. No pitch.”
Button label (exact): “Book a 30-minute Talent Maturity Audit Discussion”
Link: https://calendly.com/candice-thompsoncollective/clarity-call
Open in new tab.

ATTRIBUTION / ANALYTICS PLACEHOLDERS (IMPLEMENT NOW)
Create a centralized helper function trackEvent(eventName, params) and use it everywhere.
Implementation:
- console.log in dev
- window.dataLayer?.push({ event: eventName, ...params })
- if window.gtag exists: window.gtag('event', eventName, params)

Events to fire:
1) audit_cta_click — when Start Audit button clicked (params: page='/audit')
2) audit_question_answered — when an answer selected (params: question_index, value)
3) talent_maturity_audit_submitted — on successful submit (params: audit_score, maturity_band, page='/audit')
4) audit_email_capture — when email submitted (params: audit_score, maturity_band, page='/audit')
5) calendly_click — when Calendly CTA clicked (params: page='/audit', location='results_cta', audit_score, maturity_band)

UTM CAPTURE (KEEP + EXPAND)
On mount, persist these UTMs from URL into sessionStorage:
utm_source, utm_medium, utm_campaign, utm_term, utm_content
Include stored UTMs in:
- talent_maturity_audit_submitted event params
- audit_email_capture payload
If no UTMs exist, store empty object.

SEO (DEV MODE)
Set robots meta to noindex during development. Keep as-is for now.

FILES / DELIVERABLES
- Update the existing /audit page component (TalentAudit.tsx or equivalent).
- Ensure route /audit exists and matches homepage CTA2.
- Remove the question navigation dots.
- Add next3 content and render it.
- Add system snapshot logic + UI.
- Move email capture module to directly under “What this means”.
- Fix email submit guard so score=0 works.

QUALITY CHECKS (MUST PASS)
- Nascent band displays correctly for low scores.
- Email can be submitted even if score is 0.
- Snapshot shows correct statuses based on pillar averages.
- Confetti only fires after valid submit.
- Prefers-reduced-motion disables confetti and heavy transitions.
- All inputs/buttons meet 44px tap target guideline.
- No new fields added (email only).
- No branching logic added.