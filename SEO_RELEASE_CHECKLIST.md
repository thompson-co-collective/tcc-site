# SEO release checklist

Use this whenever a page is added, removed, renamed, or materially revised.

## New or changed route

1. Add or update the route in `src/app/App.tsx`.
2. Add or update its entry in `src/app/seo/routeSeo.ts`.
3. If it should be indexed, add its canonical URL and an accurate `lastmod` date to `public/sitemap.xml`.
4. If it should not be indexed, set `robots: "noindex,follow"` and keep it out of the XML sitemap.
5. If an old path is being retired, add an exact permanent redirect to `public/_redirects` and keep the client-side fallback redirect in `App.tsx`.
6. Run `npm run build`. The build must pass the automated SEO verification.

## Before merge

- Inspect the generated HTML for the homepage, one inner page, one article, and each `noindex` route.
- Confirm the title, description, canonical, robots tag, Open Graph URL, and rendered page content are present in raw HTML.
- Confirm every XML sitemap URL has a generated HTML document.
- Confirm `dist/404.html` is `noindex,follow` and has no canonical.
- Confirm the Cloudflare preview has no hydration errors and navigation works with and without a direct page load.

## After production deploy

- Verify the apex domain is canonical and `www` redirects to the same path on the apex.
- Verify retired routes return HTTP 301 and an unknown route returns HTTP 404.
- Verify `/robots.txt` and `/sitemap.xml` return HTTP 200.
- Resubmit the sitemap only when it changed.
- Request indexing for newly published or materially changed priority pages.
- Record Search Console exclusions before changing code; not every exclusion is an error.

Never add an indexable route only to React Router. The route registry, XML sitemap, generated HTML, and redirect behavior must stay aligned.
