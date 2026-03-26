# Beginner Cleanup + Cloudflare Migration Playbook (Step-by-Step)

Audience: Non-developer operator (marketing owner)  
Goal: Safely clean up the current site and move it to Cloudflare Pages with minimal risk.  
Estimated pace: 2–4 weeks part-time.

---

## 0) What this guide does for you

This gives you a **copy/paste runbook** for the highest-value fixes:

1. Stop silent lead-loss behavior in the audit form.
2. Make analytics more trustworthy.
3. Add Cloudflare Pages-safe routing.
4. Add basic security headers.
5. Reduce technical bloat and avoid future breakage.

If you can only do one thing this week: do **Phase 1**.

---

## 1) Prerequisites (one-time setup)

### 1.1 Install local tools

- Install Node.js LTS (v20+ recommended): https://nodejs.org/
- Install Git: https://git-scm.com/downloads
- Install VS Code: https://code.visualstudio.com/

### 1.2 Verify installs

Open terminal in project folder and run:

```bash
node -v
npm -v
git --version
```

You should see version numbers.

### 1.3 Install dependencies

```bash
npm install
```

### 1.4 Confirm project builds

```bash
npm run build
```

If this fails, stop and fix build before any migration.

---

## 2) Safety workflow (always do this before changes)

### 2.1 Create a branch

```bash
git checkout -b fix/phase-1-reliability
```

### 2.2 Make one small change at a time

- Change one file.
- Build.
- Commit.

### 2.3 Commit pattern

```bash
git add <files>
git commit -m "Short clear message"
```

---

## 3) Phase 1 (Critical): Stop silent failures in `/audit` email submit

## Why
Right now the code pretends success even when API fails. That can hide lost leads.

## File
- `src/app/pages/TalentAudit.tsx`

## What to change

### 3.1 Find this pattern (current bad behavior)

```ts
}).catch(() => ({ ok: true }));
```

### 3.2 Replace submit logic with explicit success/error handling

Use this exact pattern inside `handleEmailSubmit`:

```ts
const [submitError, setSubmitError] = useState<string | null>(null);

const handleEmailSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!emailValue || state.score === null || !state.band) return;

  setIsSubmitting(true);
  setSubmitError(null);

  try {
    const response = await fetch('/api/audit-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: emailValue,
        score: state.score,
        band: state.band,
        utms: JSON.parse(sessionStorage.getItem(UTM_STORAGE_KEY) || '{}'),
      }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    setEmailSubmitted(true);
    trackEvent('audit_email_captured', {
      audit_score: state.score,
      maturity_band: state.band,
      page: '/audit',
    });
  } catch (error) {
    console.error('Audit email submit failed', error);
    setSubmitError('We could not submit your email. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

### 3.3 Render error message under submit button

```tsx
{submitError && (
  <p role="alert" className="text-red-600 mt-2" style={{ fontFamily: 'var(--font-sans)' }}>
    {submitError}
  </p>
)}
```

### 3.4 Test it

1. Run dev server: `npm run dev`
2. Open `/audit`
3. Fill flow, submit email.
4. Simulate failure by changing endpoint to `/api/does-not-exist` temporarily.
5. Confirm you now see error message (not false success).
6. Restore endpoint path.

### 3.5 Commit

```bash
git add src/app/pages/TalentAudit.tsx
git commit -m "Fix audit email silent failure and show user-facing errors"
```

---

## 4) Phase 2 (High): Re-enable SPA page view tracking safely

## Why
Your route-level analytics is currently disabled in `App.tsx`, so reports can be wrong.

## Files
- `src/app/App.tsx`
- `src/app/components/PageViewTracker.tsx`

## Steps

### 4.1 Re-enable tracker in App

- Uncomment import:

```ts
import { PageViewTracker } from "./components/PageViewTracker";
```

- Uncomment component:

```tsx
<PageViewTracker />
```

### 4.2 Harden tracker to never crash app

In `PageViewTracker.tsx`, keep strict guards around `window.gtag` and wrap event call in try/catch:

```ts
try {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
    });
  }
} catch (e) {
  console.error('page_view tracking failed', e);
}
```

### 4.3 Test

- `npm run dev`
- Navigate several routes.
- Confirm no runtime crash.

### 4.4 Commit

```bash
git add src/app/App.tsx src/app/components/PageViewTracker.tsx
git commit -m "Re-enable and harden SPA pageview tracking"
```

---

## 5) Phase 3 (High): Cloudflare Pages SPA routing fix

## Why
SPA routes like `/about` can 404 on hard refresh without rewrite fallback.

## Steps

### 5.1 Add `_redirects` file at project root

Create file named `_redirects` with:

```txt
/* /index.html 200
```

### 5.2 Ensure it is deployed with build output

If needed, configure copy step (or place in public static folder if your setup uses one). For Vite, easiest approach is a `public/_redirects` file so it lands in `dist`.

- Create `public/_redirects` with same content.

### 5.3 Test locally

- Build: `npm run build`
- Preview if available: `npx vite preview`
- In browser, open `/about` and refresh.

### 5.4 Commit

```bash
git add public/_redirects
git commit -m "Add SPA fallback redirects for Cloudflare Pages"
```

---

## 6) Phase 4 (High): Consent-first analytics

## Why
Current GA consent defaults to granted; depending on your compliance context this may be risky.

## File
- `index.html`

## Steps

### 6.1 Update default consent to denied

Change:

```js
gtag('consent', 'default', {
  'ad_storage': 'granted',
  'analytics_storage': 'granted'
});
```

To:

```js
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied'
});
```

### 6.2 Add consent update call when user accepts cookies

When your cookie banner accept button is clicked:

```js
gtag('consent', 'update', {
  'ad_storage': 'granted',
  'analytics_storage': 'granted'
});
```

### 6.3 Commit

```bash
git add index.html
git commit -m "Set GA default consent denied and prepare consent update flow"
```

---

## 7) Phase 5 (High): Replace fake/simulated contact submissions

## Why
One form path simulates success and another logs to console. This is not production-safe.

## Files
- `src/app/pages/ContactPage.tsx`
- `src/app/components/ContactSection.tsx`

## Steps

### 7.1 Pick one backend target first
- Option A: Cloudflare Worker endpoint
- Option B: HubSpot form API proxy via Worker

### 7.2 Create a Worker endpoint (`/api/contact`)
- Validate required fields server-side.
- Add rate limit per IP.
- Return JSON success/error.

### 7.3 Frontend submit pattern
- Use `try/catch` around fetch.
- `if (!response.ok) throw ...`
- show error banner + retry.
- remove `console.log` payloads.

### 7.4 Add anti-spam
- Add Cloudflare Turnstile to both forms.

### 7.5 Commit

```bash
git add src/app/pages/ContactPage.tsx src/app/components/ContactSection.tsx
git commit -m "Connect contact forms to real API with robust error handling"
```

---

## 8) Phase 6 (Technical debt): SEO head standardization

## Why
Meta/script management is duplicated across many pages.

## Steps

### 8.1 Create shared component `src/app/components/SeoHead.tsx`
Props:
- `title`
- `description`
- `robots?`
- `jsonLd?: object[]`

### 8.2 Use `react-helmet-async` only
- Stop manual `document.title` and `document.head.appendChild` patterns page-by-page.

### 8.3 Migrate one page at a time (Home first)
- Replace page’s `useEffect` head mutation.

### 8.4 Commit incrementally

---

## 9) Phase 7 (Performance): split large bundles

## Why
Build currently warns about large JS chunk.

## Steps

### 9.1 Lazy-load heavy pages in router
In `App.tsx`:

```ts
import { lazy, Suspense } from 'react';
const HomePage = lazy(() => import('./pages/HomePage'));
```

Wrap routes in `Suspense` fallback.

### 9.2 Split legal pages first
- `TermsPage`, `PrivacyPage`, `AboutPage`, `TalentAudit` are good first targets.

### 9.3 Rebuild and compare

```bash
npm run build
```

Look for smaller main chunk.

---

## 10) Cloudflare Pages deployment (step-by-step)

## 10.1 Prepare Cloudflare project
1. Log in to Cloudflare Dashboard.
2. Go to Workers & Pages → Create → Pages.
3. Connect GitHub repo.

## 10.2 Build settings
- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`

## 10.3 Environment variables (if needed)
- Add GA IDs / API base URLs as env vars.
- Do NOT hardcode secrets in frontend code.

## 10.4 Deploy
- Trigger first deploy.
- Open preview URL.

## 10.5 Verify critical routes
- `/`
- `/about`
- `/audit`
- `/insights`
- refresh each page directly.

## 10.6 Domain cutover
- Attach custom domain in Pages settings.
- Confirm DNS status turns active.

---

## 11) Security baseline for Cloudflare

Add headers (via Cloudflare config/_headers file):

Example `public/_headers`:

```txt
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Later: add CSP once inline scripts are cleaned up.

---

## 12) Weekly operating routine (non-dev friendly)

Every week:
1. Pull latest code.
2. Run `npm install`.
3. Run `npm run build`.
4. Fix any red errors before publish.
5. Publish only from main branch.
6. Smoke-test top pages + form submission.

---

## 13) “Do this first” checklist (quick version)

- [ ] Fix audit email silent failure (`TalentAudit.tsx`).
- [ ] Re-enable page view tracking (`App.tsx`).
- [ ] Add `public/_redirects` for SPA routing.
- [ ] Set GA consent default denied.
- [ ] Replace fake contact submits with real API + error states.
- [ ] Add Turnstile.
- [ ] Add security headers.

---

## 14) If you want, I can implement this for you in order

Suggested implementation order for next coding PRs:
1. Reliability hotfix PR (audit + contact forms).
2. Analytics/consent PR.
3. Cloudflare routing/headers PR.
4. Performance/code-splitting PR.
5. SEO/head architecture refactor PR.

This keeps risk controlled and lets you ship improvements each week.
