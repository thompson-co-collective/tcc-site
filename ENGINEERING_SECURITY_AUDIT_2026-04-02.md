# ThompsonCollective.co Comprehensive Engineering + Security Audit

**Date:** 2026-04-02  
**Auditor stance:** Senior Staff Engineer + Security Reviewer (hyper-critical)  
**Scope:** Repository code audit + production accessibility smoke check constraints

---

## Executive Summary (Brutally Honest)

The site has good visual polish, but engineering fundamentals are inconsistent. There are multiple **false-success paths** (users told their submission worked when it did not), a **broken headers configuration that likely disables all intended security headers**, and several architecture patterns that will become operationally brittle as content and pages expand.

The codebase reads as a rapid-growth marketing build that never got a reliability hardening pass. High-risk items are fixable in 1–2 sprints, but should be treated as production incidents, not backlog polish.

---

## Critical Issues

### C1) `public/_headers` appears malformed, so security/caching headers may not be applied at all
**Evidence**
- The file starts with `/*` and never closes `*/`, which would comment out the entire file in Cloudflare Pages `_headers` syntax context.  
- As written, expected headers like `X-Content-Type-Options`, `Referrer-Policy`, and cache policies may never ship.  

**Code references**
- `public/_headers` lines 1–19 show an unterminated comment block and no effective rules.

**Risk**
- Security hardening ineffective (MIME sniffing, clickjacking controls, policy controls).  
- Cache behavior unpredictable, potentially harming CWV and correctness.

**Fix (code-level)**
```txt
/*
  (REMOVE this comment entirely)
*/

/*
  Keep real header rules with no comment wrapper:
*/
/*
X-Content-Type-Options: nosniff
...
*/
```
Better: explicit Cloudflare Pages format:
```txt
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; script-src 'self' https://www.googletagmanager.com https://static.cloudflareinsights.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;
```
(Then add path-specific cache rules below it.)

---

### C2) Contact form reports success without any backend submission (data loss + integrity failure)
**Evidence**
- `ContactPage` waits 1.5s and then always sets `formStatus` to `success` without API call.  
- User is told “Message received” regardless of delivery.

**Code references**
- `src/app/pages/ContactPage.tsx` lines 53–74.

**Risk**
- Lost leads (revenue impact).  
- False audit/compliance records for user interactions.

**Fix (code-level)**
```ts
try {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) throw new Error(`Contact submit failed: ${response.status}`);
  setFormStatus('success');
} catch (err) {
  console.error(err);
  setFormStatus('error');
}
```
Also add user-visible error UI, retry, and server-side validation.

---

### C3) Talent audit email capture explicitly masks network failures as success
**Evidence**
- `fetch(...).catch(() => ({ ok: true }))` converts transport failures into success.

**Code references**
- `src/app/pages/TalentAudit.tsx` lines 349–361.

**Risk**
- Silent failure with optimistic UX.  
- Corrupt conversion analytics (artificially inflated completion).  
- Operational blind spot for broken endpoint/CORS/auth.

**Fix (code-level)**
```ts
try {
  const response = await fetch('/api/audit-email', { ... });
  if (!response.ok) throw new Error(`Audit email failed: ${response.status}`);
  setEmailSubmitted(true);
} catch (error) {
  setSubmitError('We could not save your email. Please try again.');
  trackEvent('audit_email_capture_failed', { reason: String(error) });
}
```
Do **not** coerce network errors to successful responses.

---

## High Issues

### H1) Analytics pageview tracking is deliberately disabled due unresolved runtime crash
**Evidence**
- `PageViewTracker` exists but is commented out in `App.tsx` with “temporarily disabled to isolate runtime crash.”

**Code references**
- `src/app/App.tsx` lines 67–68.
- `src/app/components/PageViewTracker.tsx` lines 1–20.

**Risk**
- Broken traffic attribution, unreliable funnel analysis.  
- Hidden runtime defect remains unresolved.

**Fix (code-level)**
1. Add guarded tracker wrapper + error boundary around analytics calls.
2. Instrument and log root cause (Sentry or Cloudflare logs).
3. Re-enable tracking with fallback no-op.

Example:
```ts
try {
  window.gtag?.('event', 'page_view', { ... });
} catch (e) {
  console.error('page_view tracking failed', e);
}
```

---

### H2) Monolithic page components are too large for maintainability and predictable rendering
**Evidence**
- `HomePage.tsx` ~1922 LOC; `TalentAudit.tsx` ~1547 LOC; `OurApproachPage.tsx` ~1163 LOC.

**Code references**
- File lengths from `wc -l` run during audit.

**Risk**
- High regression probability and merge conflicts.  
- Excessive top-level state coupling and re-render scope.

**Fix (code-level)**
- Split each page into route-specific container + sectional pure components:
  - `HomeHero`, `ProofGrid`, `FAQSection`, etc.
- Memoize expensive subtrees where props are stable.
- Move static data arrays/constants into separate modules.

---

### H3) Large image payload likely harms LCP on slower networks
**Evidence**
- Build output includes `ampersand-white.png` at ~908KB and logo ~125KB.

**Code references**
- Build artifact sizes observed in `npm run build` output.

**Risk**
- LCP degradation and higher bandwidth cost.

**Fix (code-level)**
- Convert to AVIF/WebP and serve responsive variants.
- Use `loading="lazy"` for decorative offscreen assets.
- Use `image-set()` / `<picture>` with modern format fallback.

---

### H4) Tracking consent defaults to `granted` before explicit user choice
**Evidence**
- GA `gtag('consent', 'default', { ad_storage:'granted', analytics_storage:'granted' })` is set at boot.

**Code references**
- `index.html` lines 64–67.

**Risk**
- Compliance exposure depending on jurisdiction and traffic composition.

**Fix (code-level)**
```js
gtag('consent', 'default', {
  ad_storage: 'denied',
  analytics_storage: 'denied'
});
// update to granted only after consent banner accept.
```

---

## Technical Debt (Important but not immediate incidents)

### T1) Duplicate/legacy navigation implementation indicates architecture drift
**Evidence**
- `Navigation.tsx` exists with full nav logic but appears unused while `GlobalHeader.tsx` is active.

**Code references**
- `src/app/components/Navigation.tsx` lines 1–142.
- `src/app/App.tsx` lines 4, 70 (uses `GlobalHeader`).

**Fix**
- Remove dead component or explicitly version as experimental with feature flag + tests.

---

### T2) Inline `<style>` blocks inside React components create repeated style injection and reduce CSS cacheability
**Evidence**
- `GlobalHeader` and `TalentAudit` include embedded `<style>{`...`}</style>` blocks.

**Code references**
- `src/app/components/GlobalHeader.tsx` lines 302–314.
- `src/app/pages/TalentAudit.tsx` lines 539–552.

**Fix**
- Move keyframes/media-query styling to static CSS modules or Tailwind layer utilities.

---

### T3) Console logging in production path (`ContactSection`) and no real submission path
**Evidence**
- Logs PII-like form data directly in console.

**Code references**
- `src/app/components/ContactSection.tsx` lines 38–43.

**Fix**
- Remove logs, wire to server endpoint with redaction policy and structured telemetry.

---

### T4) Potential style injection vector via `dangerouslySetInnerHTML` in chart utility (low immediate risk, high hygiene concern)
**Evidence**
- Dynamic CSS string is injected into `<style>` using `dangerouslySetInnerHTML`.

**Code references**
- `src/app/components/ui/chart.tsx` lines 82–101.

**Fix**
- Restrict allowed color tokens to validated hex/rgb patterns before interpolation.
- Prefer CSS variables set via element style object when feasible.

---

## Performance Bottleneck Summary

1. Heavy page modules (1k–2k LOC each) make optimization difficult and increase parse/execute overhead.  
2. Decorative image payload (`ampersand-white.png`) is oversized for brand ornament usage.  
3. Inline style tags in components reduce CSS reuse and can incur extra style recalculation churn.  
4. Scroll listeners in multiple top-level components should be consolidated or throttled (`GlobalHeader`, `FloatingCTA`, `ExitIntentPopup`).

---

## Immediate Remediation Plan (Recommended order)

1. **Fix `_headers` syntax + add CSP** (same day).  
2. **Replace fake-success submit paths with real API + error UI** (`ContactPage`, `TalentAudit`) (1–2 days).  
3. **Re-enable page view tracking with crash-safe wrapper** (same sprint).  
4. **Ship image optimization pass (AVIF/WebP + responsive sizes)** (same sprint).  
5. **Begin page decomposition** (`HomePage`, `TalentAudit`, `OurApproachPage`) with strict max component size guardrails (next sprint).

---

## Validation Commands Run

- `npm run build` (pass; used for bundle size and artifact analysis).  
- `rg -n "console\.log|console\.error|dangerouslySetInnerHTML|..." src index.html public` (pass; used for security/code-smell discovery).  
- `wc -l src/app/pages/HomePage.tsx src/app/pages/OurApproachPage.tsx src/app/components/GlobalHeader.tsx src/app/pages/TalentAudit.tsx` (pass; architecture-size evidence).  
- `curl -I https://thompsoncollective.co` (environment/proxy blocked with 403 tunnel; not reliable for production header confirmation from this runner).

