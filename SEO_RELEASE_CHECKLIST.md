# SEO Release Checklist (New/Changed Routes)

Use this checklist whenever a new route is added or an existing route path changes.

## Required steps
1. Add/update the route in `src/app/App.tsx`.
2. Add/update a `ROUTE_SEO` entry in `src/app/components/RouteMetaManager.tsx`.
3. Confirm route `title`, `description`, canonical output, and `robots` directive.
4. If route is indexable, add it to `public/sitemap.xml`.
5. If route is utility/noindex, keep it out of `public/sitemap.xml`.
6. Validate in production after deploy:
   - URL loads
   - canonical is correct
   - robots meta is correct
   - route appears (or does not appear) in sitemap as intended

## Guardrail in code
- In development, `RouteMetaManager` logs a warning when a visited route is not mapped in `ROUTE_SEO` and not part of known dynamic patterns.
- Warning message reminds developers to update both `ROUTE_SEO` and `public/sitemap.xml` for indexable pages.

## Scope note
This checklist is intentionally lightweight and does not change routing architecture.
