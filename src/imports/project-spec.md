1) Deployment & Hosting

Hosting platform: Cloudflare Pages

Environment variables: Yes — document env var setup (Contentful tokens, HubSpot IDs/keys as placeholders, GA4/GTM IDs).

2) HubSpot Integration

Endpoint approach: Spec a serverless approach using Cloudflare Workers (no endpoint exists yet).

Portal ID + Form GUIDs: Use placeholder values for now.

Forms API vs Contacts API: Use HubSpot Forms API by default (contact form + audit email capture). Contacts API only as fallback.

3) Contentful Setup

Contentful space: Spec for initial setup (assume new space + models).

CMS editable vs hard-coded: Use CMS minimal + upgrade path:

CMS-managed (MVP): FAQs (if used), testimonials/proof metrics, bottom CTA band copy, legal pages (/privacy, /terms), optional /sitemap page content.

Locked in code (MVP): page layouts/structure, most long-form copy (capabilities/approach) until iteration proves need; navigation/routes; audit questions/scoring/bands; analytics helper implementation.

Include a Phase 2 plan to expand CMS coverage later without architecture changes.

4) Analytics & GTM

GA4 property ID: Yes — spec as an environment variable (placeholder ok).

Conversion goals: Yes — define MVP conversions:

talent_maturity_audit_submitted

audit_email_capture

contact_form_submitted

calendly_click

(Optional later) calendly_scheduled if confirmation is implemented

5) Missing Pages

Not missing. Pages are designed and in scope for full spec:

/ (Home), /audit, /capabilities, /our-approach, /contact, /sitemap, /privacy, /terms

Do not create “typical pattern” placeholders — spec against actual TSX and designs.

6) Privacy & Terms Pages

Legal copy not finalized. Create a content structure template in CMS for legal to populate (rich text + last-updated field).

7) Domain & SSL

Production domain: thompsoncollective.co

Yes — use this for canonical URLs, schema markup, CORS notes, and SSL assumptions.

8) Email Capture Flow (Audit)

Choose B:

After email submit, show “Sent. Check your inbox.”

Store results in HubSpot.

Send a simple HTML email summary (score, band, snapshot, priorities).

No PDF in v1.

No redirect to a thank-you page.