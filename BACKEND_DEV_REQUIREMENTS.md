# Thompson & Co Collective — Backend Development Requirements Package

**Version:** 1.1  
**Last Updated:** February 27, 2026  
**Status:** Implementation-Ready  
**Domain:** thompsoncollective.co

---

## Change Log

### Version 1.1 (February 27, 2026)
- **Confetti Trigger Correction:** Updated spec to clarify that confetti triggers on successful audit completion (completion of all 13 questions), not on email capture. Email capture remains optional and post-results.
- **Audit Meta Description:** Removed "no email required" language and updated to "13-question diagnostic tool to baseline your talent attraction system. Get instant results with actionable priorities and tailored next steps."
- **Pages in Scope Alignment:** Removed /partner and /about from Implementation Map, Canonical Route Map, Redirects, and sitemap.xml. Backend spec covers only designed and ready pages: /, /audit, /capabilities, /our-approach, /contact, /sitemap, /privacy, /terms.
- **SPA Routing:** Added SPA fallback rule (/* /index.html 200) to _redirects file for Cloudflare Pages client-side routing.

### Version 1.0 (February 27, 2026)
- Initial release

---

## Table of Contents

1. [Implementation Map](#implementation-map)
2. [Environment Variables](#environment-variables)
3. [Canonical Route Map & Redirects](#canonical-route-map--redirects)
4. [Content Model (Contentful)](#content-model-contentful)
5. [Events Dictionary & Analytics](#events-dictionary--analytics)
6. [API Endpoints (Cloudflare Workers)](#api-endpoints-cloudflare-workers)
7. [Design Tokens](#design-tokens)
8. [Page-by-Page Specifications](#page-by-page-specifications)
9. [Phase 2 CMS Expansion Plan](#phase-2-cms-expansion-plan)
10. [QA Checklists](#qa-checklists)

---

## Implementation Map

### Routes → Components → CMS Models → Events → Endpoints

| Route | Component | CMS Models | Key Events | API Endpoints |
|-------|-----------|------------|------------|---------------|
| `/` | HomePage | `globalCta`, `faqItem` | `page_view`, `cta_primary_click`, `market_reality_cta_click`, `faq_question_opened` | None |
| `/audit` | TalentAudit | None (locked in code) | `audit_started`, `audit_question_answered`, `audit_completed`, `audit_email_captured`, `calendly_clicked` | `/api/audit-email` |
| `/capabilities` | CapabilitiesPage | None (MVP locked) | `page_view`, `time_on_page`, `early_cta_click`, `crosslink_clicked`, `cta_primary_click` | None |
| `/our-approach` | OurApproachPage | None (MVP locked) | `page_view`, `time_on_page`, `early_cta_click`, `cta_primary_click` | None |
| `/contact` | ContactPage | None | `page_view`, `contact_form_started`, `contact_form_submitted` | `/api/contact` |
| `/sitemap` | SitemapPage | `sitemapContent` (optional) | `page_view` | None |
| `/privacy` | PrivacyPage | `legalContent` | `page_view` | None |
| `/terms` | TermsPage | `legalContent` | `page_view` | None |

### Shared Components

| Component | CMS Models | Events | Notes |
|-----------|------------|--------|-------|
| GlobalHeader | None | `cta_primary_click` (header + mobile) | Navigation locked in code |
| GlobalFooter | None | `footer_link_clicked` | Footer links locked in code |
| FaqAccordion | `faqItem` | `faq_question_opened` | Used on HomePage only in MVP |

---

## Environment Variables

### Required for Deployment

Create `.env` file for local development and configure these in Cloudflare Pages dashboard:

```bash
# Analytics & Tracking
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GTM_CONTAINER_ID=GTM-XXXXXXX

# HubSpot Integration
HUBSPOT_PORTAL_ID=12345678
HUBSPOT_CONTACT_FORM_GUID=aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
HUBSPOT_AUDIT_EMAIL_FORM_GUID=ffffffff-gggg-hhhh-iiii-jjjjjjjjjjjj
HUBSPOT_API_KEY=pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

# Contentful CMS
CONTENTFUL_SPACE_ID=xxxxxxxxxxxx
CONTENTFUL_ACCESS_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTENTFUL_PREVIEW_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTENTFUL_ENVIRONMENT=master

# Feature Flags (Optional)
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_CMS=false

# Domain & Canonical URL
VITE_CANONICAL_DOMAIN=https://thompsoncollective.co
```

### Usage Map

| Variable | Used In | Purpose |
|----------|---------|---------|
| `VITE_GA4_MEASUREMENT_ID` | `index.html`, analytics helper | GA4 tracking |
| `VITE_GTM_CONTAINER_ID` | `index.html` (Phase 2) | GTM container |
| `HUBSPOT_PORTAL_ID` | Cloudflare Worker `/api/contact`, `/api/audit-email` | HubSpot API authentication |
| `HUBSPOT_CONTACT_FORM_GUID` | Cloudflare Worker `/api/contact` | Contact form submission |
| `HUBSPOT_AUDIT_EMAIL_FORM_GUID` | Cloudflare Worker `/api/audit-email` | Audit email capture |
| `HUBSPOT_API_KEY` | Cloudflare Workers | Server-side HubSpot API calls |
| `CONTENTFUL_SPACE_ID` | Contentful SDK initialization | CMS space identifier |
| `CONTENTFUL_ACCESS_TOKEN` | Contentful SDK (production) | Fetch published content |
| `CONTENTFUL_PREVIEW_TOKEN` | Contentful SDK (preview) | Fetch draft content |
| `VITE_CANONICAL_DOMAIN` | Meta tags, schema.org, sitemap.xml | Canonical URL construction |

---

## Canonical Route Map & Redirects

### Canonical Routes (REQUIRED)

| Canonical Route | Alternative Slugs | Redirect Rule | Status Code |
|-----------------|-------------------|---------------|-------------|
| `/` | `/home`, `/index.html` | Redirect to `/` | 301 |
| `/audit` | `/talent-audit`, `/assessment` | Redirect to `/audit` | 301 |
| `/capabilities` | N/A | No redirect | N/A |
| `/our-approach` | `/approach`, `/methodology` | Redirect to `/our-approach` | 301 |
| `/contact` | `/contact-us`, `/get-in-touch` | Redirect to `/contact` | 301 |
| `/sitemap` | N/A | No redirect | N/A |
| `/privacy` | `/privacy-policy` | Redirect to `/privacy` | 301 |
| `/terms` | `/terms-of-service`, `/tos` | Redirect to `/terms` | 301 |

### Implementation: Cloudflare Pages _redirects

Create `/public/_redirects` file:

```
/home                / 301
/index.html          / 301
/talent-audit        /audit 301
/assessment          /audit 301
/approach            /our-approach 301
/methodology         /our-approach 301
/contact-us          /contact 301
/get-in-touch        /contact 301
/sitemap             /sitemap 301
/privacy-policy      /privacy 301
/terms-of-service    /terms 301
/tos                 /terms 301
/*                   /index.html 200
```

### Hash Anchor Scrolling

**Behavior:** All hash anchor links (e.g., `/our-approach#ai-visibility`) must:
- Scroll to target element with 80px offset from top (desktop)
- Scroll to target element with 64px offset from top (mobile, <768px)
- Use smooth scroll behavior (`scroll-behavior: smooth`)

**Implementation:** Already handled in codebase via CSS:

```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Desktop */
}

@media (max-width: 768px) {
  html {
    scroll-padding-top: 64px; /* Mobile */
  }
}
```

---

## Content Model (Contentful)

### MVP CMS-Managed Content Types

#### 1. FAQ Item (`faqItem`)

```json
{
  "name": "FAQ Item",
  "description": "Individual frequently asked question with answer",
  "displayField": "question",
  "fields": [
    {
      "id": "question",
      "name": "Question",
      "type": "Symbol",
      "required": true,
      "validations": [
        {
          "size": {
            "min": 10,
            "max": 200
          }
        }
      ],
      "helpText": "The question text (appears as accordion trigger)"
    },
    {
      "id": "answer",
      "name": "Answer",
      "type": "Text",
      "required": true,
      "validations": [
        {
          "size": {
            "min": 20,
            "max": 1000
          }
        }
      ],
      "helpText": "The answer text (appears when accordion expands)"
    },
    {
      "id": "order",
      "name": "Display Order",
      "type": "Integer",
      "required": true,
      "helpText": "Order in which FAQ appears (1-8)"
    },
    {
      "id": "columnPosition",
      "name": "Column Position",
      "type": "Symbol",
      "required": true,
      "validations": [
        {
          "in": ["left", "right"]
        }
      ],
      "helpText": "Which column on desktop (left = questions 1-4, right = questions 5-8)"
    }
  ]
}
```

#### 2. Global CTA (`globalCta`)

```json
{
  "name": "Global CTA",
  "description": "Bottom CTA band content (reusable across pages)",
  "displayField": "title",
  "fields": [
    {
      "id": "title",
      "name": "Title",
      "type": "Symbol",
      "required": true,
      "validations": [
        {
          "size": {
            "max": 100
          }
        }
      ],
      "helpText": "Main heading for CTA section"
    },
    {
      "id": "subtitle",
      "name": "Subtitle",
      "type": "Symbol",
      "required": false,
      "validations": [
        {
          "size": {
            "max": 200
          }
        }
      ],
      "helpText": "Optional subtitle/subheading"
    },
    {
      "id": "primaryCtaText",
      "name": "Primary CTA Text",
      "type": "Symbol",
      "required": true,
      "validations": [
        {
          "size": {
            "max": 50
          }
        }
      ],
      "defaultValue": "Schedule a clarity call"
    },
    {
      "id": "primaryCtaUrl",
      "name": "Primary CTA URL",
      "type": "Symbol",
      "required": true,
      "helpText": "Internal or external URL"
    },
    {
      "id": "secondaryCtaText",
      "name": "Secondary CTA Text",
      "type": "Symbol",
      "required": false,
      "validations": [
        {
          "size": {
            "max": 50
          }
        }
      ]
    },
    {
      "id": "secondaryCtaUrl",
      "name": "Secondary CTA URL",
      "type": "Symbol",
      "required": false
    }
  ]
}
```

#### 3. Testimonial (`testimonial`)

```json
{
  "name": "Testimonial",
  "description": "Client testimonial or partner quote",
  "displayField": "clientName",
  "fields": [
    {
      "id": "quote",
      "name": "Quote",
      "type": "Text",
      "required": true,
      "validations": [
        {
          "size": {
            "min": 50,
            "max": 500
          }
        }
      ]
    },
    {
      "id": "clientName",
      "name": "Client Name",
      "type": "Symbol",
      "required": true,
      "validations": [
        {
          "size": {
            "max": 100
          }
        }
      ]
    },
    {
      "id": "clientTitle",
      "name": "Client Title",
      "type": "Symbol",
      "required": true,
      "validations": [
        {
          "size": {
            "max": 150
          }
        }
      ],
      "helpText": "e.g., 'Head of Talent Acquisition, Fortune 500 Tech Company'"
    },
    {
      "id": "clientCompany",
      "name": "Client Company",
      "type": "Symbol",
      "required": false
    },
    {
      "id": "displayOrder",
      "name": "Display Order",
      "type": "Integer",
      "required": true
    }
  ]
}
```

#### 4. Proof Metric (`proofMetric`)

```json
{
  "name": "Proof Metric",
  "description": "Quantified proof point or outcome metric",
  "displayField": "metricLabel",
  "fields": [
    {
      "id": "metricValue",
      "name": "Metric Value",
      "type": "Symbol",
      "required": true,
      "validations": [
        {
          "size": {
            "max": 20
          }
        }
      ],
      "helpText": "e.g., '127%', '42 days', '$2.4M'"
    },
    {
      "id": "metricLabel",
      "name": "Metric Label",
      "type": "Symbol",
      "required": true,
      "validations": [
        {
          "size": {
            "max": 100
          }
        }
      ],
      "helpText": "e.g., 'increase in application quality'"
    },
    {
      "id": "metricContext",
      "name": "Metric Context",
      "type": "Text",
      "required": false,
      "helpText": "Optional additional context or details"
    },
    {
      "id": "displayOrder",
      "name": "Display Order",
      "type": "Integer",
      "required": true
    }
  ]
}
```

#### 5. Legal Content (`legalContent`)

```json
{
  "name": "Legal Content",
  "description": "Privacy policy or Terms of Service content",
  "displayField": "title",
  "fields": [
    {
      "id": "title",
      "name": "Title",
      "type": "Symbol",
      "required": true,
      "helpText": "e.g., 'Privacy Policy' or 'Terms of Service'"
    },
    {
      "id": "slug",
      "name": "Slug",
      "type": "Symbol",
      "required": true,
      "validations": [
        {
          "unique": true
        },
        {
          "in": ["privacy", "terms"]
        }
      ]
    },
    {
      "id": "content",
      "name": "Content",
      "type": "RichText",
      "required": true,
      "helpText": "Full legal content (supports headings, lists, links)"
    },
    {
      "id": "lastUpdated",
      "name": "Last Updated",
      "type": "Date",
      "required": true,
      "helpText": "Date of last update to legal content"
    },
    {
      "id": "effectiveDate",
      "name": "Effective Date",
      "type": "Date",
      "required": true
    }
  ]
}
```

#### 6. Sitemap Content (`sitemapContent`)

```json
{
  "name": "Sitemap Content",
  "description": "Optional editable content for human-facing /sitemap page",
  "displayField": "title",
  "fields": [
    {
      "id": "title",
      "name": "Page Title",
      "type": "Symbol",
      "required": true,
      "defaultValue": "Sitemap"
    },
    {
      "id": "description",
      "name": "Description",
      "type": "Text",
      "required": false,
      "helpText": "Optional intro text above sitemap links"
    }
  ]
}
```

### CMS-Agnostic Model Summary

For portability to other headless CMS platforms (Sanity, Strapi, etc.):

| Content Type | Core Fields | Relationships | Notes |
|--------------|-------------|---------------|-------|
| **FAQ Item** | question (string), answer (text), order (int), columnPosition (enum: left/right) | None | Simple key-value pair |
| **Global CTA** | title (string), subtitle (string), primaryCtaText (string), primaryCtaUrl (string), secondaryCtaText (string), secondaryCtaUrl (string) | None | Singleton pattern |
| **Testimonial** | quote (text), clientName (string), clientTitle (string), clientCompany (string), displayOrder (int) | None | Ordered list |
| **Proof Metric** | metricValue (string), metricLabel (string), metricContext (text), displayOrder (int) | None | Ordered list |
| **Legal Content** | title (string), slug (string), content (richText), lastUpdated (date), effectiveDate (date) | None | Slug-based routing |
| **Sitemap Content** | title (string), description (text) | None | Singleton pattern |

---

## Events Dictionary & Analytics

### Standardized Event Naming Convention

**Pattern:** `{category}_{action}_{object?}`

- Use **snake_case** for all event names
- Include context as event parameters, not in event name
- Use consistent verb tenses (past tense preferred: `clicked`, `submitted`, `opened`)

### Event Mapping Table

| **Standardized Event Name** | **Current Implementation** | **Category** | **Parameters** | **Trigger Location** | **Purpose** |
|----------------------------|---------------------------|--------------|----------------|---------------------|----------|
| `page_viewed` | N/A (new) | Navigation | `page_path`, `page_title`, `referrer` | All pages (on mount) | Track page views |
| `time_on_page` | `time_on_page` (keep as-is) | Engagement | `page_path`, `duration_seconds` | All pages (on unmount) | Measure engagement |
| `cta_primary_clicked` | `cta_primary_click`, `cta_click` | Conversion | `cta_location`, `cta_label`, `destination_url` | All CTAs | Track primary conversion actions |
| `cta_secondary_clicked` | N/A (new) | Conversion | `cta_location`, `cta_label`, `destination_url` | Secondary CTAs | Track secondary conversion actions |
| `early_cta_clicked` | `early_cta_click` | Conversion | `page_path`, `cta_label` | Above-fold CTAs on Capabilities/Approach pages | Track early-stage conversions |
| `market_reality_card_clicked` | `market_reality_cta_click` | Navigation | `card_name`, `destination_url` | HomePage Market Reality section | Track card engagement |
| `crosslink_clicked` | `crosslink_click` | Navigation | `source_page`, `destination_page`, `link_text` | Internal crosslinks | Track navigation patterns |
| `faq_question_opened` | `faq_question_opened` (keep as-is) | Engagement | `question_text`, `question_position` | FAQ accordion | Track FAQ engagement |
| `audit_started` | `audit_cta_click` | Conversion | `page_path`, `cta_location` | /audit page start button | Track audit initiation |
| `audit_question_answered` | N/A (new) | Engagement | `question_index`, `answer_value` | /audit question interaction | Track audit progress |
| `audit_completed` | `talent_maturity_audit_submitted` | Conversion | `audit_score`, `maturity_band`, `page_path` | /audit results screen | Track audit completion |
| `audit_email_captured` | `audit_email_capture` | Conversion | `audit_score`, `maturity_band`, `page_path` | /audit email form submission | Track email capture |
| `calendly_clicked` | `calendly_click` | Conversion | `cta_location`, `page_path`, `audit_score?`, `maturity_band?` | Calendly CTAs | Track calendar booking intent |
| `calendly_scheduled` | N/A (Phase 2) | Conversion | `event_type`, `page_path` | Calendly confirmation webhook | Track confirmed bookings |
| `contact_form_started` | N/A (new) | Conversion | `page_path` | /contact form first input focus | Track form engagement |
| `contact_form_submitted` | N/A (console.log only) | Conversion | `page_path`, `form_fields`, `utm_*` | /contact form successful submission | Track contact form conversions |
| `footer_link_clicked` | N/A (new) | Navigation | `link_text`, `destination_url` | GlobalFooter links | Track footer navigation |

### Analytics Helper Implementation

**Location:** `/src/utils/analytics.ts` (to be created)

```typescript
// /src/utils/analytics.ts

interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Centralized analytics tracking helper
 * Supports both dataLayer (GTM) and gtag (GA4)
 */
export function trackEvent(eventName: string, params: EventParams = {}) {
  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', eventName, params);
  }

  // Push to dataLayer (GTM)
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...params,
    });
  }

  // Push to gtag (GA4 direct)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
}

/**
 * Track page view
 */
export function trackPageView(pagePath: string, pageTitle: string) {
  trackEvent('page_viewed', {
    page_path: pagePath,
    page_title: pageTitle,
    referrer: document.referrer,
  });
}

/**
 * Track time on page (call on component unmount)
 */
export function trackTimeOnPage(pagePath: string, startTime: number) {
  const durationSeconds = Math.floor((Date.now() - startTime) / 1000);
  trackEvent('time_on_page', {
    page_path: pagePath,
    duration_seconds: durationSeconds,
  });
}

/**
 * Get UTM parameters from URL and store in sessionStorage
 */
export function captureUtmParams() {
  if (typeof window === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const utmParams: Record<string, string> = {};

  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((key) => {
    const value = urlParams.get(key);
    if (value) {
      utmParams[key] = value;
    }
  });

  if (Object.keys(utmParams).length > 0) {
    sessionStorage.setItem('tcc_utm_params', JSON.stringify(utmParams));
  }
}

/**
 * Retrieve stored UTM parameters
 */
export function getUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};

  const stored = sessionStorage.getItem('tcc_utm_params');
  return stored ? JSON.parse(stored) : {};
}
```

### UTM Parameter Handling

**Rules:**
1. **Capture:** UTM parameters captured from URL query string on first page load
2. **Persist:** Stored in `sessionStorage` with key `tcc_utm_params`
3. **Include:** Passed as hidden fields in all HubSpot form submissions
4. **Audit-specific:** For audit tool, also store in `localStorage` with key `tcc_audit_utms` (persists across sessions)

**Required UTM Fields:**
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term` (optional)
- `utm_content` (optional)

---

## API Endpoints (Cloudflare Workers)

### Endpoint 1: Contact Form Submission

**Path:** `/api/contact`  
**Method:** `POST`  
**Authentication:** Server-side HubSpot API key (env var)

#### Request Schema

```json
{
  "type": "object",
  "required": ["firstName", "lastName", "email", "message"],
  "properties": {
    "firstName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 100
    },
    "lastName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 100
    },
    "email": {
      "type": "string",
      "format": "email",
      "maxLength": 255
    },
    "company": {
      "type": "string",
      "maxLength": 200
    },
    "message": {
      "type": "string",
      "minLength": 10,
      "maxLength": 2000
    },
    "utm_source": {
      "type": "string"
    },
    "utm_medium": {
      "type": "string"
    },
    "utm_campaign": {
      "type": "string"
    },
    "utm_term": {
      "type": "string"
    },
    "utm_content": {
      "type": "string"
    },
    "page_path": {
      "type": "string"
    },
    "timestamp": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```

#### Response Schema

**Success (200):**
```json
{
  "success": true,
  "message": "Thank you for reaching out. We'll be in touch within 24 hours."
}
```

**Validation Error (400):**
```json
{
  "success": false,
  "error": "Validation failed",
  "fields": {
    "email": "Invalid email format",
    "message": "Message must be at least 10 characters"
  }
}
```

**Rate Limit Error (429):**
```json
{
  "success": false,
  "error": "Too many requests. Please try again in a few minutes."
}
```

**Server Error (500):**
```json
{
  "success": false,
  "error": "Failed to submit form. Please try again or email us directly at [email]"
}
```

#### HubSpot Field Mapping

| Frontend Field | HubSpot Property Name | Type | Required |
|----------------|-----------------------|------|----------|
| `firstName` | `firstname` | string | Yes |
| `lastName` | `lastname` | string | Yes |
| `email` | `email` | string | Yes |
| `company` | `company` | string | No |
| `message` | `message` | text | Yes |
| `utm_source` | `utm_source` | string | No |
| `utm_medium` | `utm_medium` | string | No |
| `utm_campaign` | `utm_campaign` | string | No |
| `utm_term` | `utm_term` | string | No |
| `utm_content` | `utm_content` | string | No |
| `page_path` | `page_path` | string | No |
| `timestamp` | `form_submission_timestamp` | datetime | No |

#### Implementation Notes

- **Rate Limiting:** 5 submissions per IP per hour
- **Spam Protection:** Basic honeypot field (hidden `website` field, reject if filled)
- **Email Validation:** Server-side regex validation + MX record check (optional)
- **HubSpot API:** Use Forms API v3 (`POST https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}`)

---

### Endpoint 2: Audit Email Capture

**Path:** `/api/audit-email`  
**Method:** `POST`  
**Authentication:** Server-side HubSpot API key (env var)

#### Request Schema

```json
{
  "type": "object",
  "required": ["email", "auditScore", "maturityBand"],
  "properties": {
    "email": {
      "type": "string",
      "format": "email",
      "maxLength": 255
    },
    "auditScore": {
      "type": "integer",
      "minimum": 0,
      "maximum": 26
    },
    "maturityBand": {
      "type": "string",
      "enum": ["Nascent", "Developing", "Aligned", "Optimized"]
    },
    "auditAnswers": {
      "type": "array",
      "items": {
        "type": "integer",
        "minimum": 0,
        "maximum": 2
      },
      "minItems": 13,
      "maxItems": 13
    },
    "utm_source": {
      "type": "string"
    },
    "utm_medium": {
      "type": "string"
    },
    "utm_campaign": {
      "type": "string"
    },
    "utm_term": {
      "type": "string"
    },
    "utm_content": {
      "type": "string"
    },
    "page_path": {
      "type": "string"
    },
    "timestamp": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```

#### Response Schema

**Success (200):**
```json
{
  "success": true,
  "message": "Sent. Check your inbox."
}
```

**Validation Error (400):**
```json
{
  "success": false,
  "error": "Invalid email format"
}
```

**Rate Limit Error (429):**
```json
{
  "success": false,
  "error": "Too many requests. Please wait before submitting again."
}
```

**Server Error (500):**
```json
{
  "success": false,
  "error": "Failed to send email. Please try again."
}
```

#### HubSpot Field Mapping

| Frontend Field | HubSpot Property Name | Type | Required |
|----------------|-----------------------|------|----------|
| `email` | `email` | string | Yes |
| `auditScore` | `talent_maturity_audit_score` | number | Yes |
| `maturityBand` | `talent_maturity_band` | string | Yes |
| `auditAnswers` | `audit_answers_json` | string (JSON) | No |
| `utm_source` | `utm_source` | string | No |
| `utm_medium` | `utm_medium` | string | No |
| `utm_campaign` | `utm_campaign` | string | No |
| `utm_term` | `utm_term` | string | No |
| `utm_content` | `utm_content` | string | No |
| `page_path` | `page_path` | string | No |
| `timestamp` | `audit_completion_timestamp` | datetime | No |

#### Email Template (Transactional)

Send via HubSpot workflow triggered on form submission. Include:

**Subject:** Your Talent Maturity Audit Results — {{maturityBand}}

**Body:**
```
Hi there,

You scored {{auditScore}}/26 — {{maturityBand}}.

[Summary paragraph based on maturity band]

Your Next Steps:
[3 actionable priorities from results page]

Want to discuss your results?
[CTA Button: Schedule a 30-minute clarity call]

— Thompson & Co Collective
```

#### Implementation Notes

- **Rate Limiting:** 3 submissions per email per day
- **Email Response:** Display "Sent. Check your inbox." message on successful submission
- **localStorage Cleanup:** Clear `tcc_audit_v3` after successful email submission (optional)

---

## Design Tokens

### Exported from `/src/styles/theme.css`

#### Color Palette

```json
{
  "colors": {
    "brand": {
      "teal-deep": "#0F2A2A",
      "teal-primary": "#0E5A6A",
      "teal-accent": "#117C92",
      "navy-dark": "#0A1220"
    },
    "neutral": {
      "white": "#FFFFFF",
      "bg-light": "#F8FAFB",
      "gray-100": "#F3F3F5",
      "gray-200": "#EEEEEE",
      "gray-400": "#CBCED4",
      "gray-600": "#717182",
      "gray-700": "#6B7280",
      "gray-800": "#888888",
      "black": "#0A1628"
    },
    "functional": {
      "destructive": "#D4183D",
      "destructive-foreground": "#FFFFFF"
    }
  }
}
```

#### Typography

```json
{
  "typography": {
    "fontFamilies": {
      "serif": "'Playfair Display', Georgia, serif",
      "serif-alt": "'Crimson Text', Georgia, serif",
      "sans": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      "script": "'Dancing Script', cursive"
    },
    "fontSizes": {
      "base": "16px"
    },
    "fontWeights": {
      "normal": 400,
      "medium": 500,
      "semibold": 600,
      "bold": 700
    },
    "lineHeights": {
      "tight": 1.1,
      "snug": 1.2,
      "normal": 1.3,
      "relaxed": 1.6,
      "loose": 1.7
    },
    "letterSpacing": {
      "tight": "-0.02em",
      "wide": "0.12em"
    }
  }
}
```

#### Spacing Scale

```json
{
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "2xl": "48px",
    "3xl": "64px",
    "4xl": "80px",
    "5xl": "96px"
  }
}
```

#### Border Radius

```json
{
  "borderRadius": {
    "base": "0.625rem",
    "sm": "calc(0.625rem - 4px)",
    "md": "calc(0.625rem - 2px)",
    "lg": "0.625rem",
    "xl": "calc(0.625rem + 4px)"
  }
}
```

#### Shadows

```json
{
  "shadows": {
    "sm": "0 1px 2px rgba(0, 0, 0, 0.05)",
    "md": "0 4px 6px rgba(0, 0, 0, 0.1)",
    "lg": "0 10px 15px rgba(0, 0, 0, 0.1)",
    "xl": "0 20px 25px rgba(0, 0, 0, 0.15)",
    "glow-teal": "0 20px 50px rgba(17, 124, 146, 0.25)"
  }
}
```

#### Breakpoints

```json
{
  "breakpoints": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px",
    "2xl": "1536px"
  }
}
```

---

## Page-by-Page Specifications

### 1. HomePage (`/`)

#### SEO Metadata

```html
<title>Thompson & Co Collective — Employer Brand Strategy & Talent Attraction</title>
<meta name="description" content="Enterprise-level employer brand strategy and talent attraction for agencies. Built for teams that deliver at scale — not overhead, not solo work. A collective approach." />
<meta name="keywords" content="employer brand consultant, talent attraction, recruitment marketing, EVP development, agency partner" />
<link rel="canonical" href="https://thompsoncollective.co/" />

<!-- Open Graph -->
<meta property="og:title" content="Thompson & Co Collective — Employer Brand Strategy & Talent Attraction" />
<meta property="og:description" content="Enterprise-level employer brand strategy and talent attraction for agencies." />
<meta property="og:url" content="https://thompsoncollective.co/" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Thompson & Co Collective — Employer Brand Strategy & Talent Attraction" />
<meta name="twitter:description" content="Enterprise-level employer brand strategy and talent attraction for agencies." />
```

#### Schema.org Markup

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Thompson & Co Collective",
  "url": "https://thompsoncollective.co",
  "logo": "https://thompsoncollective.co/logo.png",
  "description": "Enterprise-level employer brand strategy and talent attraction for agencies.",
  "sameAs": [
    "https://www.linkedin.com/company/thompson-co-collective"
  ]
}
```

#### Sections & Components

| Section | Component | CMS-Managed | Events | Notes |
|---------|-----------|-------------|--------|-------|
| Hero | HeroSection | No | `cta_primary_clicked` (x2) | Dual CTA: "Let's Connect" + "Take the Talent Audit" |
| Market Reality | (Inline HomePage) | No | `market_reality_card_clicked` | 3 cards with hover tooltips |
| About Section | (Inline HomePage) | No | None | Ampersand brandmark, "Enterprise expertise. Collective approach." |
| What We Do | (Inline HomePage) | No | None | 3 capability cards |
| How We Work | (Inline HomePage) | No | None | 4 process steps |
| Proof | (Inline HomePage) | Yes (Phase 2) | None | Testimonials/metrics (hardcoded MVP) |
| FAQ | (Inline HomePage) | Yes | `faq_question_opened` | 8 questions, 2-column layout, Accordion component |
| Final CTA | (Inline HomePage) | Yes | `cta_primary_clicked`, `cta_secondary_clicked` | Premium hero-matching gradient |

#### Interactions & Behavior

- **Hero Gradient Animation:** Radial gradient with spotlight glow, subtle floating orbs (CSS-only, no JS)
- **Market Reality Cards:** Hover state with scale transform + teal border, tooltip appears on hover
- **FAQ Accordion:** Single-open behavior (opening one closes others), smooth expand/collapse with 200ms transition
- **Sticky Header:** Header becomes sticky after 20px scroll, background opacity transition
- **Smooth Scroll:** Hash anchor links scroll with 80px offset (desktop) / 64px (mobile)

#### Accessibility

- **ARIA Labels:** All CTAs have descriptive `aria-label` attributes
- **Skip Link:** "Skip to main content" link at top of page (visible on focus)
- **Keyboard Navigation:** Tab order follows visual layout, accordion navigable via keyboard
- **Color Contrast:** All text meets WCAG AA 4.5:1 minimum (body text) / 3:1 (large text)
- **Focus Indicators:** All interactive elements have visible focus outline

#### Performance

- **Hero Images:** None (gradient-only background)
- **Lazy Loading:** Market Reality card images (if added) lazy-loaded
- **Bundle Splitting:** HomePage code-split from other routes

---

### 2. TalentAudit (`/audit`)

#### SEO Metadata

```html
<title>Talent Maturity Audit — Free Diagnostic Tool | Thompson & Co Collective</title>
<meta name="description" content="13-question diagnostic tool to baseline your talent attraction system. Get instant results with actionable priorities and tailored next steps." />
<link rel="canonical" href="https://thompsoncollective.co/audit" />
<meta name="robots" content="index, follow" />
```

**Important:** Remove any `noindex` meta tag before production deployment.

#### Schema.org Markup

```json
{
  "@context": "https://schema.org",
  "@type": "Quiz",
  "name": "Talent Maturity Audit",
  "description": "13-question diagnostic tool to benchmark your talent attraction strategy.",
  "url": "https://thompsoncollective.co/audit",
  "educationalLevel": "Professional",
  "inLanguage": "en-US"
}
```

#### Audit Flow Stages

1. **Landing Stage:** Hero + executive framing
2. **Questions Stage:** 13 questions with segmented controls (0/1/2 scoring)
3. **Results Stage:** Score + band + meaning + 3 priorities + optional email capture + Calendly CTA

#### localStorage Keys

- **Audit Progress:** `tcc_audit_v3` (stores answers array + stage)
- **UTM Parameters:** `tcc_audit_utms` (stores UTM params from URL)

#### Scoring Model (Locked)

| Score Range | Maturity Band | Color |
|-------------|---------------|-------|
| 0-7 | Nascent | #D4183D (red) |
| 8-14 | Developing | #FF8C00 (orange) |
| 15-20 | Aligned | #117C92 (teal) |
| 21-26 | Optimized | #0F2A2A (deep teal) |

#### Events Tracking

| Event | When | Parameters |
|-------|------|------------|
| `audit_started` | User clicks "Start Audit" button | `page_path`, `cta_location` |
| `audit_question_answered` | User selects an answer | `question_index`, `answer_value` |
| `audit_completed` | User submits all 13 answers | `audit_score`, `maturity_band`, `page_path` |
| `audit_email_captured` | User submits email on results page | `audit_score`, `maturity_band`, `email` |
| `calendly_clicked` | User clicks Calendly CTA on results | `page_path`, `audit_score`, `maturity_band` |

#### Interactions & Behavior

- **Transparent Header:** Header transparent on audit landing, solid on scroll
- **Segmented Controls:** Keyboard navigable (arrow keys), visual focus states
- **Confetti Celebration:** Triggered on successful audit completion (when user submits all 13 questions), followed by "Baseline established" moment and results display (lazy-loaded `canvas-confetti`)
- **Email Capture:** Optional, post-results only, inline form (no modal)
- **Progress Persistence:** Answers saved to localStorage on every selection

#### Accessibility

- **Semantic HTML:** `<fieldset>` + `<legend>` for question groups
- **ARIA Live Region:** Results score announced to screen readers
- **Keyboard Navigation:** Tab through questions, arrow keys within segmented controls
- **Focus Management:** Focus moves to results heading after submission

#### Performance

- **Code Splitting:** Audit page isolated from main bundle
- **Lazy Load Confetti:** `canvas-confetti` imported only after successful audit completion (when all 13 questions submitted)

---

### 3. ContactPage (`/contact`)

#### SEO Metadata

```html
<title>Contact Thompson & Co Collective — Let's Connect</title>
<meta name="description" content="Reach out to discuss employer brand strategy, talent attraction, or partnership opportunities." />
<link rel="canonical" href="https://thompsoncollective.co/contact" />
```

#### Form Fields

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| First Name | Text | Yes | Min 1 char |
| Last Name | Text | Yes | Min 1 char |
| Email | Email | Yes | Valid email format |
| Company | Text | No | Max 200 char |
| Message | Textarea | Yes | Min 10 char, max 2000 char |

#### Hidden Fields (UTM + Metadata)

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`
- `page_path`
- `timestamp`

#### Form Behavior

- **Validation:** Real-time validation on blur, error messages below fields
- **Submit Button:** Disabled until all required fields valid, loading spinner on submit
- **Success State:** Replace form with success message, no redirect
- **Error State:** Show error message above form, preserve field values

#### Events Tracking

| Event | When | Parameters |
|-------|------|------------|
| `contact_form_started` | First field receives focus | `page_path` |
| `contact_form_submitted` | Successful submission | `page_path`, `utm_*` |

#### Accessibility

- **Label Association:** All fields have associated `<label>` elements
- **Error Announcements:** ARIA live region for form errors
- **Focus Management:** Focus moves to success message after submission

---

### 4. CapabilitiesPage (`/capabilities`)

#### SEO Metadata

```html
<title>Capabilities — Employer Brand & Talent Attraction Services</title>
<meta name="description" content="Employer brand strategy, EVP development, recruitment marketing, and talent attraction services for agencies." />
<link rel="canonical" href="https://thompsoncollective.co/capabilities" />
```

#### Hash Anchors

- `#employer-brand`
- `#recruitment-marketing`
- `#content-campaigns`

#### Events Tracking

| Event | When | Parameters |
|-------|------|------------|
| `page_viewed` | Page mount | `page_path`, `page_title` |
| `time_on_page` | Page unmount | `page_path`, `duration_seconds` |
| `early_cta_clicked` | Above-fold CTA clicked | `page_path`, `cta_label` |
| `crosslink_clicked` | Internal link clicked | `source_page`, `destination_page` |
| `cta_primary_clicked` | Bottom CTA clicked | `cta_location`, `cta_label` |

---

### 5. OurApproachPage (`/our-approach`)

#### SEO Metadata

```html
<title>Our Approach — Disciplined Process, No Slide Decks Before Work</title>
<meta name="description" content="A structured employer brand methodology: Listen, Build, Activate, Govern. No upfront decks. Real work from day one." />
<link rel="canonical" href="https://thompsoncollective.co/our-approach" />
```

#### Hash Anchors

- `#ai-visibility`
- `#listen`
- `#build`
- `#activate`
- `#govern`

#### Events Tracking

Same as CapabilitiesPage.

---

### 6. PrivacyPage (`/privacy`) & TermsPage (`/terms`)

#### SEO Metadata

```html
<!-- Privacy -->
<title>Privacy Policy | Thompson & Co Collective</title>
<meta name="description" content="Privacy policy for Thompson & Co Collective." />
<link rel="canonical" href="https://thompsoncollective.co/privacy" />
<meta name="robots" content="noindex, follow" />

<!-- Terms -->
<title>Terms of Service | Thompson & Co Collective</title>
<meta name="description" content="Terms of service for Thompson & Co Collective." />
<link rel="canonical" href="https://thompsoncollective.co/terms" />
<meta name="robots" content="noindex, follow" />
```

#### Content Structure

- **CMS-Managed:** Full content stored in Contentful `legalContent` model
- **Rich Text:** Support headings (H2-H4), lists, links, bold/italic
- **Last Updated:** Display at top of page from `lastUpdated` field

---

### 7. SitemapPage (`/sitemap`)

#### SEO Metadata

```html
<title>Sitemap | Thompson & Co Collective</title>
<link rel="canonical" href="https://thompsoncollective.co/sitemap" />
<meta name="robots" content="noindex, follow" />
```

#### Content

- **Human-Facing:** List all primary routes with descriptions
- **CMS-Optional:** Intro text editable via `sitemapContent` model

---

### 8. XML Sitemap (`/sitemap.xml`)

**Location:** `/public/sitemap.xml` (static file)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://thompsoncollective.co/</loc>
    <lastmod>2026-02-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://thompsoncollective.co/audit</loc>
    <lastmod>2026-02-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://thompsoncollective.co/capabilities</loc>
    <lastmod>2026-02-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://thompsoncollective.co/our-approach</loc>
    <lastmod>2026-02-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://thompsoncollective.co/contact</loc>
    <lastmod>2026-02-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

### 9. Robots.txt (`/robots.txt`)

**Location:** `/public/robots.txt` (static file)

```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://thompsoncollective.co/sitemap.xml
```

---

## Phase 2 CMS Expansion Plan

### Upgrade Path (Post-MVP)

Once MVP proves stable and content editing needs emerge, expand CMS coverage:

#### Phase 2A: Capability Cards

**Content Type:** `capabilityCard`

```json
{
  "name": "Capability Card",
  "fields": [
    {
      "id": "title",
      "name": "Title",
      "type": "Symbol",
      "required": true
    },
    {
      "id": "description",
      "name": "Description",
      "type": "Text",
      "required": true
    },
    {
      "id": "slug",
      "name": "Slug",
      "type": "Symbol",
      "required": true,
      "helpText": "URL hash anchor (e.g., 'employer-brand')"
    },
    {
      "id": "icon",
      "name": "Icon Name",
      "type": "Symbol",
      "helpText": "Lucide React icon name"
    },
    {
      "id": "displayOrder",
      "name": "Display Order",
      "type": "Integer",
      "required": true
    }
  ]
}
```

**Migration:** Extract capability card content from CapabilitiesPage component, seed Contentful, update component to fetch from CMS.

---

#### Phase 2B: Approach Steps

**Content Type:** `approachStep`

```json
{
  "name": "Approach Step",
  "fields": [
    {
      "id": "stepNumber",
      "name": "Step Number",
      "type": "Integer",
      "required": true
    },
    {
      "id": "title",
      "name": "Title",
      "type": "Symbol",
      "required": true
    },
    {
      "id": "description",
      "name": "Description",
      "type": "Text",
      "required": true
    },
    {
      "id": "slug",
      "name": "Slug",
      "type": "Symbol",
      "required": true
    }
  ]
}
```

---

#### Phase 2C: Hero Content

**Content Type:** `heroContent`

```json
{
  "name": "Hero Content",
  "fields": [
    {
      "id": "mainHeading",
      "name": "Main Heading",
      "type": "Text",
      "required": true
    },
    {
      "id": "accentWord",
      "name": "Accent Word",
      "type": "Symbol",
      "helpText": "e.g., 'Aligned.'"
    },
    {
      "id": "subheading",
      "name": "Subheading",
      "type": "Text"
    },
    {
      "id": "primaryCtaText",
      "name": "Primary CTA Text",
      "type": "Symbol"
    },
    {
      "id": "primaryCtaUrl",
      "name": "Primary CTA URL",
      "type": "Symbol"
    },
    {
      "id": "secondaryCtaText",
      "name": "Secondary CTA Text",
      "type": "Symbol"
    },
    {
      "id": "secondaryCtaUrl",
      "name": "Secondary CTA URL",
      "type": "Symbol"
    }
  ]
}
```

---

## QA Checklists

### Pre-Launch QA Checklist (All Pages)

#### SEO & Metadata

- [ ] All pages have unique `<title>` tags (50-60 chars)
- [ ] All pages have unique meta descriptions (150-160 chars)
- [ ] Canonical URLs set correctly on all pages
- [ ] Open Graph tags present on all pages
- [ ] Twitter Card tags present on all pages
- [ ] `noindex` removed from `/audit` page
- [ ] `/sitemap.xml` accessible and valid
- [ ] `/robots.txt` accessible and valid

#### Accessibility (WCAG 2.1 AA)

- [ ] All images have alt text
- [ ] Color contrast meets 4.5:1 minimum (body text)
- [ ] Color contrast meets 3:1 minimum (large text 18px+)
- [ ] All form inputs have associated labels
- [ ] Skip link present and functional
- [ ] Focus indicators visible on all interactive elements
- [ ] Keyboard navigation functional (no keyboard traps)
- [ ] ARIA labels present on icon-only buttons
- [ ] Heading hierarchy logical (no skipped levels)

#### Performance

- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Images optimized and compressed
- [ ] Fonts subset and preloaded
- [ ] Bundle size < 250KB (gzipped)

#### Analytics

- [ ] GA4 tracking code installed
- [ ] GTM container installed (Phase 2)
- [ ] All critical events firing correctly
- [ ] UTM parameters captured and persisted
- [ ] `page_viewed` event fires on all pages
- [ ] Form submissions tracked in HubSpot

#### Functionality

- [ ] All internal links functional
- [ ] All external links open in new tab with `rel="noopener noreferrer"`
- [ ] Forms validate correctly
- [ ] Form error messages display correctly
- [ ] Form success states display correctly
- [ ] Mobile menu opens/closes correctly
- [ ] FAQ accordion opens/closes correctly
- [ ] Hash anchor links scroll with correct offset
- [ ] Redirects working (test all alternative slugs)

---

### Page-Specific QA Checklists

#### HomePage (`/`)

- [ ] Hero gradient renders correctly
- [ ] Hero CTAs both functional
- [ ] Market Reality cards hover states work
- [ ] Market Reality tooltips appear on hover
- [ ] FAQ accordion opens one at a time
- [ ] FAQ questions tracked in analytics
- [ ] Final CTA gradient renders correctly
- [ ] All section anchor links work

#### TalentAudit (`/audit`)

- [ ] Landing page renders correctly
- [ ] "Start Audit" button functional
- [ ] All 13 questions render
- [ ] Segmented controls selectable
- [ ] Progress persists in localStorage
- [ ] Submit button enables only when all answered
- [ ] Confetti triggers on audit completion (when all 13 questions submitted)
- [ ] Results page displays correct score + band
- [ ] Results priorities match band
- [ ] Email form validates correctly
- [ ] Email submission sends to HubSpot
- [ ] Calendly link functional
- [ ] All audit events tracked

#### ContactPage (`/contact`)

- [ ] Form fields validate correctly
- [ ] Required field errors display
- [ ] Email validation works
- [ ] Submit button disabled until valid
- [ ] Form submits to HubSpot API
- [ ] Success message displays
- [ ] UTM parameters included in submission
- [ ] Rate limiting works (test 6th submission)

---

## Deployment Checklist

### Cloudflare Pages Setup

1. **Connect Repository:** Link GitHub repo to Cloudflare Pages
2. **Build Settings:**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`
3. **Environment Variables:** Add all variables from [Environment Variables](#environment-variables) section
4. **Custom Domain:** Point `thompsoncollective.co` to Cloudflare Pages
5. **SSL/TLS:** Enable Full (strict) SSL mode
6. **Redirects:** Upload `_redirects` file to `/public` directory

### Cloudflare Workers Setup

1. **Create Workers:**
   - `/api/contact`
   - `/api/audit-email`
2. **Add Secrets:** Store HubSpot API key as Worker secret
3. **Bind to Pages:** Bind Workers to Cloudflare Pages project
4. **Test Endpoints:** Use Postman/curl to test both endpoints

### HubSpot Setup

1. **Create Forms:**
   - Contact form
   - Audit email capture form
2. **Create Custom Properties:**
   - `talent_maturity_audit_score` (Number)
   - `talent_maturity_band` (Single-line text)
   - `audit_answers_json` (Multi-line text)
   - `audit_completion_timestamp` (Date picker)
   - `form_submission_timestamp` (Date picker)
   - `page_path` (Single-line text)
3. **Create Workflow:** Audit email send workflow (triggered on audit form submission)
4. **Get Form GUIDs:** Copy form GUIDs and add to environment variables

### Contentful Setup (Optional for MVP)

1. **Create Space:** New Contentful space for Thompson & Co
2. **Create Content Models:** Use JSON schemas from [Content Model](#content-model-contentful) section
3. **Seed Content:** Add initial FAQ items, global CTA content
4. **Get API Keys:** Copy Space ID, Access Token, Preview Token
5. **Add to Environment Variables**

### Analytics Setup

1. **GA4 Property:** Create GA4 property for thompsoncollective.co
2. **Custom Events:** Define custom events in GA4 (use event names from [Events Dictionary](#events-dictionary--analytics))
3. **Conversion Goals:** Mark key events as conversions
4. **Get Measurement ID:** Copy GA4 Measurement ID
5. **Add to Environment Variables**

---

## Final Notes

### Icon Library

**Package:** `lucide-react`  
**Usage:** Import icons individually to minimize bundle size

```tsx
import { ArrowRight, Check, X, Menu, ChevronDown } from 'lucide-react';
```

### Image Guidelines

- **Format:** WebP primary, PNG/JPEG fallback
- **Compression:** Compress to 80% quality
- **Aspect Ratios:** TBD based on design needs
- **Lazy Loading:** Use `loading="lazy"` on all below-fold images

### Browser Support

- **Chrome:** Last 2 versions
- **Firefox:** Last 2 versions
- **Safari:** Last 2 versions
- **Edge:** Last 2 versions
- **Mobile Safari:** iOS 14+
- **Chrome Mobile:** Android 10+

### Third-Party Dependencies

| Package | Purpose | Version |
|---------|---------|---------|
| `react` | Framework | ^18.3.1 |
| `react-router-dom` | Routing | ^7.1.1 |
| `lucide-react` | Icons | Latest |
| `canvas-confetti` | Audit celebration | Latest |
| `@contentful/rich-text-react-renderer` | CMS rich text | Latest |

---

**End of Backend Development Requirements Package**

---

*This document is implementation-ready. For questions or clarifications, contact the project lead.*