Create a complete backend-development requirements package for each page of this site. The UX is finalized; do NOT propose redesigns, new sections, or new questions. I need a full technical specification that can be handed directly to a developer with no ambiguity.

ASSUME STACK + DEPLOYMENT
- React + TypeScript (current codebase), React Router routes.
- Deployment: [Cloudflare Pages / specify actual host].
- No SSR framework unless explicitly required; default to static + API endpoints.

ASSUME CMS
- Use Contentful as the default headless CMS for content modeling (provide content types, fields, validations).
- Also include a “CMS-agnostic” model summary for portability.

ANALYTICS + ATTRIBUTION
- GTM will be installed later. For now, define tracking via a centralized analytics helper:
  - window.dataLayer?.push({ event, ...params })
  - optional window.gtag if present
- Provide an event dictionary: event name, parameters, trigger location, and purpose.
- UTMs must be captured/persisted and passed into HubSpot submissions.

HUBSPOT + FORMS
- HubSpot is the CRM. Provide exact property mapping for:
  - Contact page form
  - Talent Audit email capture (post-results)
- Include required hidden fields (utm_source, utm_medium, utm_campaign, utm_term, utm_content, page_path, timestamp).

TALENT AUDIT SPECIFIC REQUIREMENTS
- Results-first model; email capture occurs AFTER results and is optional.
- localStorage keys:
  - audit progress: tcc_audit_v3
  - utms: tcc_audit_utms
- Confetti: canvas-confetti lazy-loaded on successful submit only.

PAGES (MUST COVER)
- / (Home)
- /capabilities
- /approach
- /partners
- /contact
- /audit
- /privacy
- /terms

FOR EVERY PAGE + COMPONENT, PROVIDE:

1) Content Model
- Field-level structure for all content (static vs. CMS-managed)
- Contentful content types: fields, data types, character limits, validation rules
- Component-level props; what is editable vs locked
- Conditional logic (show/hide rules, state variations)

2) Interaction & Behavior Specs
- Micro-interactions (hover, focus, active, loading)
- Form behavior: validation, error states, success states, messaging
- Scroll behavior: sticky elements, anchor links, thresholds
- CTA behavior: modals, navigation rules, external links, target=_blank rules

3) Technical Requirements
- Accessibility: WCAG 2.1 AA requirements and checks
- SEO/AEO: metadata per page, canonical rules, schema requirements, heading rules, crawlability
- Performance: image handling, lazy loading, caching strategy, bundle splitting expectations
- Analytics: event tracking plan and naming conventions

4) Integration Points
- Required API endpoints (placeholder or real) per page/component
- Request/response shapes (JSON schema)
- Authentication requirements (default: none unless required)
- Third-party scripts/embeds/dependencies

5) CMS / Admin Requirements
- Editable vs locked content
- Reusable components vs one-off blocks
- Content governance rules (who edits what, guardrails)

6) Edge Cases & System States
- Empty/loading/failure states
- Data-load failures and fallback behavior
- Mobile-specific exceptions or alternate flows

7) Dev-Ready Assets
- Exported design tokens: spacing, color, type, radii, shadows
- Component specs: padding, breakpoints, constraints
- Icon library + usage rules
- Image aspect ratios + compression guidance

DELIVERABLE FORMAT (REQUIRED)
- Page-by-page spec with clear headings and implementation notes
- Include:
  A) content-model.json (or YAML) representing all CMS fields + validations
  B) events-dictionary table (events + params + triggers)
  C) endpoint-contracts section (per endpoint)
  D) QA checklist per page (acceptance criteria)