# Search indexing architecture

## What the build guarantees

The production build creates a complete HTML document for every mapped route. Search engines and link-preview crawlers receive the page's real content, title, description, canonical URL, robots directive, and social metadata without waiting for JavaScript.

The route registry in `src/app/seo/routeSeo.ts` is the source of truth for:

- prerendered routes;
- indexable versus `noindex` routes;
- titles and descriptions;
- canonical and social URLs;
- Open Graph content types.

`npm run build` performs the client build, creates a server-rendering bundle, prerenders all registered routes, and then fails if the sitemap, canonicals, robots directives, redirects, or 404 document are inconsistent.

## HTTP behavior on Cloudflare Pages

`public/_redirects` contains permanent redirects for retired URLs. These are server redirects, not browser-only navigation:

- `/home` → `/`
- `/blog` → `/insights`
- `/talent-maturity-audit` → `/audit`
- `/tag/featured` → `/insights`

The build also creates `dist/404.html`. Cloudflare Pages can therefore return a real HTTP 404 for unknown paths instead of serving the homepage shell with a 200 response.

Do not add a catch-all `/* /index.html 200` rule. That rule would restore soft-404 behavior and bypass the generated route documents.

## Indexing policy

- The 15 public marketing and insight routes are self-canonical and listed in `public/sitemap.xml`.
- `/audit` and the human-readable `/sitemap` are prerendered but marked `noindex,follow` and omitted from the XML sitemap.
- `404.html` is `noindex,follow` and has no canonical tag.
- `robots.txt` allows public crawling and identifies the XML sitemap.

## Deployment verification

After a production deployment:

1. Confirm `npm run build` passed in GitHub Actions and Cloudflare Pages.
2. Check an inner page with JavaScript disabled or by viewing source; its title and canonical must be route-specific.
3. Confirm the retired URLs return HTTP 301.
4. Confirm an invented URL returns HTTP 404.
5. Confirm `/robots.txt` and `/sitemap.xml` return HTTP 200.
6. Submit the sitemap in Google Search Console and use URL Inspection for priority pages.

Indexing is controlled by Google and is not instantaneous. Do not promise a fixed indexing or ranking timeline.
