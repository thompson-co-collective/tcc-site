# Repository Overview

## Stack Summary
- Front-end single-page application built with **React + TypeScript** and bundled by **Vite**.
- Styling uses **Tailwind CSS v4** (via `@tailwindcss/vite`) plus custom CSS layers.
- Routing is client-side using **react-router-dom**.
- Metadata uses a hybrid model: base tags in `index.html`, runtime per-page updates via DOM manipulation, and `HelmetProvider` context initialized for potential `react-helmet-async` usage.
- Deployment target is **Cloudflare Pages** using Wrangler config and static output from `dist/`.

## Key Technologies Detected
- Runtime/framework: React 18 + React DOM.
- Build tooling: Vite 6, `@vitejs/plugin-react`, terser minification, manual chunk splitting.
- Styling: Tailwind CSS 4, `tw-animate-css`, custom theme/fonts CSS.
- UI libs: Radix UI primitives/components, Lucide icons, multiple utility UI components.
- Analytics: Google Analytics (`gtag`) and Cloudflare Web Analytics beacon.

## Deployment Model
- Static build (`npm run build` → `dist`) configured for Cloudflare Pages via `wrangler.jsonc` (`pages_build_output_dir: ./dist`).
- SPA fallback redirect rules in `public/_redirects` (`/* /index.html 200`).
- Cloudflare Pages header policy in `public/_headers` (security headers, CSP, caching directives).

---

# File Structure Map

## Top-Level Folders
- `src/` — main application source code.
  - `src/app/` — application shell and route-level pages.
  - `src/app/components/` — reusable sections, nav/footer, tracking, UI primitives.
  - `src/app/pages/` — page components used in route table.
  - `src/assets/` — source-managed image assets.
  - `src/styles/` — CSS entrypoint and Tailwind/theme/font styles.
- `public/` — static files copied as-is to deployment output (headers, redirects, robots, sitemap).
- `dist/` — built output directory (deployment artifact).
- `guidelines/` — project documentation/guidance files.
- `node_modules/` — dependencies.

## Important Root Files
- `index.html` — HTML shell, root mount node, baseline SEO/social tags, JSON-LD, analytics scripts, and module entry script.
- `package.json` — dependencies, scripts (`dev`, `build`), tooling versions.
- `vite.config.ts` — plugin setup, path aliasing (`@ -> ./src`), build optimization/chunking.
- `wrangler.jsonc` — Cloudflare Pages deployment config.
- `robots.txt`, `sitemap.xml` (root) — additional copies of crawler artifacts also present in `public/`.

---

# Critical Paths

## App Entry Point(s)
- Browser mount path: `index.html` includes `<div id="root"></div>` and `type="module" src="/src/main.tsx"`.
- React bootstrap: `src/main.tsx` renders `<App />` into `#root` and imports global stylesheet (`src/styles/index.css`).

## Routing System
- Route table lives in `src/app/App.tsx` under `BrowserRouter` + `<Routes>`.
- Routes are lazy-loaded using `React.lazy` and wrapped in `Suspense` for route-level code splitting.
- Includes direct routes (e.g., `/`, `/about`, `/capabilities`, `/insights`, `/contact`, `/audit`), insight article routes, and redirect routes:
  - `/talent-maturity-audit -> /audit`
  - `/blog -> /insights`
- Route transition helpers:
  - `ScrollToTop` component resets scroll on pathname change.
  - `PageViewTracker` sends analytics page_view events on location change.

## Layout Components
- Global shell in `App.tsx` is consistent across routes:
  - `GlobalHeader`
  - route content (lazy pages)
  - `GlobalFooter`
  - overlays/utilities (`ExitIntentPopup`, `FloatingCTA`)
- Accessibility skip link is injected globally via `SkipLink` component in app shell.

## SEO / Metadata Handling
- Base metadata is statically declared in `index.html`:
  - title/description, Open Graph, Twitter cards, Organization JSON-LD.
- Runtime metadata is mostly updated imperatively in page components via `document.title` and `meta[name="description"]` mutation patterns.
- `HelmetProvider` is initialized in `App.tsx`, but page-level metadata currently appears predominantly non-Helmet (direct DOM/meta updates).
- Some utility routes/pages add `robots=noindex` dynamically (`TalentAudit`, `SitemapPage`).

## Asset Handling
- `public/` serves static deploy-time files (`robots.txt`, `sitemap.xml`, `_headers`, `_redirects`).
- `src/assets/` stores source-imported image assets.
- Vite config explicitly includes SVG/CSV patterns in `assetsInclude`.
- CSS entrypoint uses layered imports:
  - `fonts.css`
  - Tailwind directives (`tailwind.css`)
  - theme tokens (`theme.css`)

## Analytics
- GA4 script is loaded in `index.html` (`G-XR2CJ9LZ2Z`) and initializes `window.dataLayer` + `gtag`.
- Cloudflare Web Analytics beacon is loaded in `index.html` with a site token.
- In-app event tracking uses conditional `(window as any).gtag(...)` checks in multiple components/pages.
- Central route-based tracker: `src/app/components/PageViewTracker.tsx` emits `page_view` on router location change.

## Deployment Configuration
- Cloudflare Pages via Wrangler:
  - `name`: `thompsoncollective-site`
  - `pages_build_output_dir`: `./dist`
  - `compatibility_flags`: `nodejs_compat`
- SPA redirect fallback in `public/_redirects` ensures deep links resolve to `index.html`.
- Edge headers/CSP/caching in `public/_headers` define security policy and cache behavior for HTML/assets/robots/sitemap.

---

# Initial Observations

- There are duplicate crawler files at repo root and in `public/` (`robots.txt` and `sitemap.xml`), indicating two potential sources of truth.
- Metadata strategy appears mixed (static `index.html` + runtime DOM mutation + `HelmetProvider` presence), so responsibility is spread across layers.
- The route architecture is purely client-side SPA (no server-rendered routes detected in this repo).
- `dist/` exists in-repo, suggesting built artifacts are currently present in working tree.
