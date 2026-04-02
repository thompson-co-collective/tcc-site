# Performance Bottlenecks Review (Asset + CWV Focus)

Date: 2026-04-02
Scope: Home hero implementation, image asset strategy, font loading, and bundle contributors.

## 1) Hero section analysis (`src/app/pages/HomePage.tsx`)

### Current implementation (verified)
- The decorative ampersand (`ampersandWhite`) is used multiple times on the page:
  - Hero echo layer
  - Hero base layer
  - Lower CTA decorative background
- Hero uses **two separate `<img>` nodes** for the same source to produce layered blur/mask effects.
- Decorative usage is `aria-hidden` + empty `alt`, which is semantically appropriate.
- Loading priority has already been reduced with `loading="lazy"`, `decoding="async"`, and `fetchPriority="low"`.

### Bottleneck significance
- The source file is large (~888 KB PNG in repository), and still incurs decode/paint cost when rendered.
- Two hero-layer nodes likely increase paint complexity and GPU/filter work, even if network fetch is cached once.

### Lowest-risk optimization path
1. **Keep current visual design, but replace source asset format only**:
   - Export `ampersand-white` to **WebP/AVIF** at visually equivalent quality.
   - Keep same geometry/masks/effects; swap only file source.
2. Add a responsive `srcSet/sizes` strategy for decorative ampersand so mobile receives a smaller decode target.
3. If visual QA passes, consider reducing from two ampersand layers to one plus CSS blur/shadow approximation (medium-risk, optional).

### Not recommended right now
- Rebuilding the hero ornament into SVG filters immediately (higher implementation/visual-regression risk).

---

## 2) Site-wide image asset strategy

### Current state (verified)
- Asset inventory is very small but heavy at top end:
  - `src/assets/ampersand-white.png` (~888 KB)
  - `src/assets/logo-stacked.png` (~124 KB)
- Multiple decorative image instances exist in Home/About.
- Some image tags still rely on single source without responsive variants.

### Highest-leverage optimizations
1. **Modern format conversion** for large decorative raster assets (WebP/AVIF with PNG fallback).
2. **Responsive delivery** for logo/ampersand where display size is much smaller than source dimensions (`srcSet` + `sizes`).
3. Continue explicit decode/fetch de-prioritization for non-critical decorative images.

### Decode-cost reduction opportunities
- Ensure all non-critical decorative images use:
  - `loading="lazy"`
  - `decoding="async"`
  - `fetchPriority="low"`
- Avoid unnecessarily large intrinsic dimensions when rendered at much smaller viewport footprints.

---

## 3) Font loading strategy review

### Current implementation (verified)
- Fonts are loaded via CSS `@import` in `src/styles/fonts.css` for 4 families:
  - Playfair Display (multiple weights + italics)
  - Crimson Text (multiple weights + italics)
  - Inter (300/400/500/600)
  - Dancing Script (400/600)
- `index.html` includes `preconnect` to Google Fonts and `fonts.gstatic.com`.
- Google Fonts URLs include `display=swap`.

### Bottleneck significance
- `@import` chains can delay stylesheet/font discovery versus direct `<link>` usage.
- Loaded weight/style breadth may exceed actual usage on first paint.

### Lowest-risk optimization path
1. Keep family choices (brand-safe), but **trim unused weights/styles** by usage audit.
2. Migrate from `@import` to explicit `<link rel="stylesheet">` for primary families (or preload + stylesheet pattern) only after visual QA.
3. Keep `display=swap`.

---

## 4) Largest contributors to bundle size (from build output)

### Largest JS chunks observed
- `vendor` chunk ~175 KB (gzip ~57 KB)
- `HomePage` route chunk ~46 KB
- `PartnerPage` route chunk ~45 KB
- `index` app chunk ~38 KB

### Likely dependency contributors (inferred from stack + imports)
- Core React + Router in vendor chunk.
- UI and icon ecosystem (`lucide-react`, Radix-related UI usage).
- Rich interaction/chart ecosystem present in dependencies (e.g., `recharts`, `motion`, DnD stack) likely contributes when referenced.

### Safe pruning/lazy candidates (next pass)
1. Audit whether heavy libraries are actually imported in user-facing routes; remove unused packages first.
2. Keep route lazy-loading strategy (already present) and identify non-critical component-level lazy opportunities only in heavy routes.
3. Avoid broad refactors until bundle analyzer confirms biggest wins.

---

## Highest-impact asset-level optimizations (recommended next)

1. **Convert `ampersand-white` to modern formats + responsive variants**
   - Files: `src/assets/ampersand-white.png` (new `.webp/.avif` variants), `src/app/pages/HomePage.tsx`, `src/app/pages/AboutPage.tsx`
   - Safety: High (visual asset swap with regression check)
   - Estimated impact: **High (LCP)**, low-moderate INP improvement via reduced decode pressure.

2. **Font weight/style trimming with same families**
   - Files: `src/styles/fonts.css`, potentially `index.html`
   - Safety: Medium-high (brand preserved; typography QA needed)
   - Estimated impact: **Moderate (LCP)**

3. **Bundle pruning based on real usage**
   - Files: `package.json`, relevant route/component imports
   - Safety: Medium (requires verification)
   - Estimated impact: **Moderate (INP + general load)**

---

## Confidence and validation status
- **Code-verified:** duplicate decorative ampersand usage pattern, font-loading mechanism, route chunk sizes, passive/lazy attributes currently in code.
- **Runtime validation required:** exact LCP/INP gains from asset conversion, font-loading changes, and dependency pruning effects in real devices/networks.
