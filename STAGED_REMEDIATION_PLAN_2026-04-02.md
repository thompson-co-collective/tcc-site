# Staged Remediation Plan (Based on validated audit)

Prioritization order applied strictly:
1) production risk, 2) SEO/indexing risk, 3) performance/CWV, 4) UX/conversion, 5) maintainability.

---

# Stage 1 — Immediate Fixes (production-safe, highest impact)

## 1.1 Add explicit 404 fallback route
- **Exact files:** `src/app/App.tsx`
- **Change required:** Add wildcard route (`<Route path="*" ... />`) with a simple branded 404 page and links to `/`, `/capabilities`, `/contact`.
- **Why it matters:** Prevents ambiguous user journeys and soft-404 style behavior on unknown URLs.
- **Expected outcome:** Clear recovery path for mistyped/outdated links; better crawl-quality signals.
- **Risk level:** Low
- **Effort:** S
- **QA required:** Yes (manual route checks on invalid URLs).

## 1.2 Create single source of truth for crawler artifacts
- **Exact files:** `public/robots.txt`, `public/sitemap.xml`, root `robots.txt`, root `sitemap.xml`.
- **Change required:** Choose one authoritative location (recommended: `public/`) and remove/stop maintaining duplicates at root.
- **Why it matters:** Eliminates divergence risk and stale indexing directives.
- **Expected outcome:** Stable, predictable crawl/index behavior.
- **Risk level:** Low
- **Effort:** S
- **QA required:** Yes (verify deployed `/robots.txt` + `/sitemap.xml`).

## 1.3 Validate and harden `/api/contact` integration contract
- **Exact files:** `src/app/pages/ContactPage.tsx`, deployment/backend endpoint owner (external if not in repo), optional docs in `FULL_SITE_AUDIT_2026-04-02.md`.
- **Change required:** Confirm endpoint ownership/location, enforce request/response contract, ensure user-visible error path is actionable.
- **Why it matters:** Conversion-critical path must be reliable before deeper enhancements.
- **Expected outcome:** Reduced lead loss from silent/inconsistent form failures.
- **Risk level:** Medium
- **Effort:** M
- **QA required:** Yes (manual + production smoke test submissions).

## 1.4 Introduce centralized analytics helper (non-breaking wrapper)
- **Exact files:** new `src/app/lib/analytics.ts` (or equivalent), `src/app/components/PageViewTracker.tsx`, `src/app/components/GlobalHeader.tsx`, `src/app/components/ExitIntentPopup.tsx`, `src/app/components/FloatingCTA.tsx`, `src/app/pages/ContactPage.tsx`.
- **Change required:** Add helper that safely dispatches events + shared parameter schema while preserving existing event names initially.
- **Why it matters:** Reduces instrumentation drift and lowers production measurement risk.
- **Expected outcome:** More reliable attribution and easier QA of events.
- **Risk level:** Low
- **Effort:** M
- **QA required:** Yes (GA4 DebugView and duplicate-event checks).

---

# Stage 2 — SEO & Indexing Corrections

## 2.1 Implement canonical tags per route
- **Exact files:** `index.html`, `src/app/App.tsx`, route pages in `src/app/pages/*` (or shared SEO component file to be created).
- **Change required:** Add a route-aware SEO layer that emits canonical URL for every indexable page.
- **Why it matters:** Prevents canonical ambiguity and consolidates ranking signals.
- **Expected outcome:** Cleaner canonicalization and improved search consistency.
- **Risk level:** Medium
- **Effort:** M
- **QA required:** Yes (Search Console URL Inspection + rendered HTML checks).

## 2.2 Replace ad hoc title/meta mutation with shared SEO component
- **Exact files:** `src/app/App.tsx`, `src/app/pages/HomePage.tsx`, `src/app/pages/ContactPage.tsx`, `src/app/pages/CapabilitiesPage.tsx`, `src/app/pages/OurApproachPage.tsx`, `src/app/pages/AboutPage.tsx`, `src/app/pages/InsightsPage.tsx`, article pages under `src/app/pages/insights/*`, plus new shared SEO module.
- **Change required:** Centralize title, description, robots, OG/Twitter, canonical in one typed API; migrate pages incrementally.
- **Why it matters:** Removes metadata drift and improves maintainability/SEO consistency.
- **Expected outcome:** Predictable metadata output across all routes.
- **Risk level:** Medium
- **Effort:** L
- **QA required:** Yes (route-by-route head snapshot validation).

## 2.3 Align sitemap content to live route inventory
- **Exact files:** `public/sitemap.xml`, `src/app/App.tsx`.
- **Change required:** Ensure every intended indexable route is represented and excluded routes (`noindex` utilities) are handled intentionally.
- **Why it matters:** Crawl efficiency and index coverage quality.
- **Expected outcome:** Better sitemap-to-site parity and clearer crawl budget guidance.
- **Risk level:** Low
- **Effort:** S
- **QA required:** Yes (sitemap validator + GSC submission/processing check).

## 2.4 Validate schema strategy (stability over dynamic injection)
- **Exact files:** `index.html`, `src/app/pages/HomePage.tsx`, `src/app/pages/PartnerPage.tsx`.
- **Change required:** Keep core schema stable and avoid duplicate/conflicting JSON-LD injection patterns; define per-route schema ownership.
- **Why it matters:** Reduces structured-data inconsistency risk.
- **Expected outcome:** Cleaner rich-result eligibility and easier debugging.
- **Risk level:** Medium
- **Effort:** M
- **QA required:** Yes (Rich Results Test + production page source verification).

---

# Stage 3 — Performance Optimization

## 3.1 Optimize oversized hero/decorative image assets
- **Exact files:** `src/assets/ampersand-white.png`, usage in `src/app/pages/HomePage.tsx` (and any other consumers).
- **Change required:** Replace with optimized AVIF/WebP variants, responsive sizing, and only load where visually necessary.
- **Why it matters:** Direct LCP/CWV risk reduction on key landing paths.
- **Expected outcome:** Faster visual completeness and improved mobile performance.
- **Risk level:** Low
- **Effort:** M
- **QA required:** Yes (Lighthouse + visual regression at multiple breakpoints).

## 3.2 Run bundle/dependency pruning pass
- **Exact files:** `package.json`, `src/app/components/ui/*`, unused legacy components (`src/app/components/Footer.tsx`, `src/app/components/Navigation.tsx`).
- **Change required:** Remove unused dependencies/components after verification; keep only what route code imports.
- **Why it matters:** Lower JS/CSS payload and maintenance/security overhead.
- **Expected outcome:** Smaller bundle, quicker parse/execute time.
- **Risk level:** Medium
- **Effort:** M
- **QA required:** Yes (full build, route smoke tests, bundle diff check).

## 3.3 Establish route-level performance baselines
- **Exact files:** N/A (testing workflow), optional docs update in `FULL_SITE_AUDIT_2026-04-02.md`.
- **Change required:** Record Lighthouse/WebPageTest baselines for `/`, `/capabilities`, `/contact`, `/insights` before/after Stage 3 changes.
- **Why it matters:** Prevents regressions and validates actual impact.
- **Expected outcome:** Data-backed performance improvements.
- **Risk level:** Low
- **Effort:** S
- **QA required:** Yes (manual + CI/perf report workflow if available).

---

# Stage 4 — UX / UI Improvements

## 4.1 Re-tune exit-intent behavior
- **Exact files:** `src/app/components/ExitIntentPopup.tsx`
- **Change required:** Reduce trigger aggressiveness, add clearer suppression logic by session/device; preserve analytics measurement.
- **Why it matters:** Balances conversion prompts with premium trust experience.
- **Expected outcome:** Lower interruption friction and cleaner user journey.
- **Risk level:** Low
- **Effort:** S
- **QA required:** Yes (manual behavior test desktop/mobile).

## 4.2 Improve contact form resilience messaging
- **Exact files:** `src/app/pages/ContactPage.tsx`
- **Change required:** Refine error messaging/retry UX for backend failures; ensure accessible focus management on error.
- **Why it matters:** High-intent users need clear path to completion.
- **Expected outcome:** Better submit completion under degraded backend/network conditions.
- **Risk level:** Low
- **Effort:** S
- **QA required:** Yes (forced error simulation and accessibility check).

## 4.3 Accessibility QA pass on overlays/navigation
- **Exact files:** `src/app/components/GlobalHeader.tsx`, `src/app/components/ExitIntentPopup.tsx`, `src/app/components/GlobalFooter.tsx`.
- **Change required:** Validate/fix focus order, trap/release behavior, ESC handling, and color contrast edge cases.
- **Why it matters:** Accessibility and trust are core to enterprise-caliber UX.
- **Expected outcome:** More robust keyboard/screen-reader experience.
- **Risk level:** Medium
- **Effort:** M
- **QA required:** Yes (keyboard-only + screen-reader + contrast tooling).

---

# Stage 5 — Structural Refactors

## 5.1 Introduce a route metadata registry
- **Exact files:** new metadata config (e.g., `src/app/seo/routes.ts`), `src/app/App.tsx`, page files in `src/app/pages/*`.
- **Change required:** Define route-level metadata as configuration and render via shared SEO component.
- **Why it matters:** Long-term SEO consistency and reduced manual drift.
- **Expected outcome:** Scalable, auditable head management.
- **Risk level:** Medium
- **Effort:** L
- **QA required:** Yes (snapshot + route crawl test).

## 5.2 Reduce inline-style sprawl into reusable design primitives
- **Exact files:** `src/app/components/GlobalHeader.tsx`, `src/app/components/GlobalFooter.tsx`, high-traffic pages (`HomePage`, `CapabilitiesPage`, `OurApproachPage`, `ContactPage`).
- **Change required:** Move recurring inline styles into shared classes/tokens/components.
- **Why it matters:** Improves consistency and lowers regression risk.
- **Expected outcome:** Faster UI iteration and cleaner codebase.
- **Risk level:** Medium
- **Effort:** L
- **QA required:** Yes (visual regression pass).

## 5.3 Evaluate prerender strategy for core marketing routes
- **Exact files:** build/deploy pipeline (`vite.config.ts`, Cloudflare Pages strategy docs/config), route content pages.
- **Change required:** Choose pragmatic pre-render approach for top SEO pages while preserving SPA behavior for interactive tools.
- **Why it matters:** Better search rendering reliability and potential performance gains.
- **Expected outcome:** Improved SEO robustness for business-critical pages.
- **Risk level:** High
- **Effort:** L
- **QA required:** Yes (full SEO + routing + deployment regression suite).

---

# Dependencies between tasks

1. **Stage 1.2 (crawler source-of-truth)** should be completed before **Stage 2.3 (sitemap alignment)**.
2. **Stage 1.1 (404 route)** should precede broad SEO validation in Stage 2.
3. **Stage 1.3 (contact contract)** should precede Stage 4 contact UX tuning to avoid polishing unstable backend behavior.
4. **Stage 1.4 (analytics helper)** should occur before major UX/SEO changes so measurement remains consistent during rollout.
5. **Stage 2.1 + 2.2 (canonical + metadata centralization)** should complete before **Stage 5.1 (final metadata registry hardening)** if done incrementally.
6. **Stage 3.3 baseline measurement** should run before and after Stage 3.1/3.2.
7. **Stage 5.3 prerender evaluation** should be last, after metadata and route stability improvements.

---

# What should NOT be done yet (to avoid breaking things)

- Do **not** remove or rename existing GA4 event names before analytics parity checks are complete.
- Do **not** delete dependencies/components solely by assumption; verify with usage + build + runtime route checks first.
- Do **not** introduce SSR/prerender rollout in the same release as canonical/metadata refactor; isolate blast radius.
- Do **not** change sitemap URL inventory before deciding final indexable route policy (especially utility/noindex pages).
- Do **not** over-tune popup UX before contact endpoint reliability is confirmed (conversion signal would be noisy).
- Do **not** perform broad style refactors without visual regression checkpoints for high-traffic pages.

---

# Recommended execution cadence
- **Sprint 1:** Stage 1 + Stage 2.1/2.3 (risk containment + indexing hygiene)
- **Sprint 2:** Stage 2.2/2.4 + Stage 3.1/3.3 (SEO consistency + measurable performance wins)
- **Sprint 3:** Stage 3.2 + Stage 4 (payload cleanup + UX/accessibility polish)
- **Sprint 4+:** Stage 5 structural work (metadata architecture hardening + prerender strategy)
