# CONVERSION STRATEGY & MEASUREMENT PLAN

## 🎯 PRIMARY CONVERSION GOAL

**Form-First Strategy**
- Primary action: Contact form submission on `/contact` page
- Secondary action: Calendly booking (text link below form)
- All site CTAs route to `/contact` page

---

## 📊 CONVERSION FUNNEL

### User Journey
```
Entry Point
    ↓
Homepage (or any page)
    ↓
CTA Click ("Contact", "Start Here", etc.)
    ↓
Contact Page (/contact)
    ↓
┌─────────────┬─────────────┐
│ Form Fill   │ Calendly    │
│ (Primary)   │ (Secondary) │
└─────────────┴─────────────┘
    ↓
Success State
    ↓
Links to Capabilities + Blog
```

### Conversion Points

#### 1. Homepage
- Hero CTA: "Start Here" → `/contact`
- Capabilities section link → `/capabilities`
- CTA Band: "Contact Us" → `/contact`

#### 2. About Page (To Build)
- CTA Band: "Contact" → `/contact`

#### 3. Capabilities Page (To Build)
- Hero CTA: "Contact" → `/contact`
- CTA Band: "Contact" → `/contact`

#### 4. Blog Pages (To Build)
- End-of-post CTA: "Contact" → `/contact`
- Sidebar CTA (if present): → `/contact`

#### 5. Partner Page
- Multiple CTAs: "Explore Partner Support" → `#contact` (on-page form)
- Mobile sticky CTA → `#contact`

---

## 📈 EVENT TRACKING SCHEMA

### Event Names (Locked - Do Not Change)

#### Navigation Events
```
nav_click
- Triggered: Click on any navigation link
- Properties: 
  - link_text: string (e.g., "About", "Capabilities")
  - link_destination: string (e.g., "/about")
```

#### CTA Events
```
cta_click_contact
- Triggered: Click on any "Contact" CTA button
- Properties:
  - cta_location: string (e.g., "hero", "cta_band", "footer")
  - page_path: string (e.g., "/", "/capabilities")
```

#### Form Events
```
contact_form_start
- Triggered: User focuses on first form field
- Properties:
  - form_location: string ("contact_page")

contact_form_submit_success
- Triggered: Form submission successful
- Properties:
  - form_location: string
  - need_help_with: string (dropdown selection)
  - timestamp: date

contact_form_error
- Triggered: Form validation fails
- Properties:
  - error_fields: array (e.g., ["email", "company"])
```

#### Calendly Events
```
calendly_click
- Triggered: Click on Calendly link
- Properties:
  - link_location: string ("contact_page_secondary")
```

#### Blog Events
```
blog_post_view
- Triggered: Blog post page loads
- Properties:
  - post_title: string
  - post_category: string
  - post_date: date
```

#### Scroll Depth Events
```
scroll_25
- Triggered: User scrolls 25% of page

scroll_50
- Triggered: User scrolls 50% of page

scroll_75
- Triggered: User scrolls 75% of page

scroll_100
- Triggered: User scrolls to bottom
```

#### Partner-Specific Events
```
partner_footer_click
- Triggered: Click on Partner link in footer
- Properties:
  - source_page: string (e.g., "/", "/about")
```

#### Outbound Link Events
```
outbound_click
- Triggered: Click on external link
- Properties:
  - link_url: string
  - link_text: string
```

---

## 🔧 IMPLEMENTATION GUIDE

### Google Tag Manager (GTM) Setup

#### 1. Install GTM Container
```html
<!-- Add to <head> in index.html -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

<!-- Add to <body> in index.html -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

#### 2. DataLayer Push Examples

**CTA Click Example:**
```typescript
// In component
const handleCtaClick = () => {
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'cta_click_contact',
      cta_location: 'hero',
      page_path: window.location.pathname,
    });
  }
};
```

**Form Submit Example:**
```typescript
// In ContactPage
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // ... validation ...
  
  // Track submission
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'contact_form_submit_success',
      form_location: 'contact_page',
      need_help_with: formData.needHelp,
      timestamp: new Date().toISOString(),
    });
  }
  
  setFormStatus("success");
};
```

**Navigation Click Example:**
```typescript
// In GlobalHeader
<Link
  to="/about"
  onClick={() => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'nav_click',
        link_text: 'About',
        link_destination: '/about',
      });
    }
  }}
>
  About
</Link>
```

### Google Analytics 4 (GA4) Setup

#### 1. Create GA4 Property
- Property Name: Thompson & Co Collective
- Reporting Time Zone: US/Eastern
- Currency: USD

#### 2. Install GA4 via GTM
- Create GA4 Configuration Tag
- Measurement ID: G-XXXXXXXXXX
- Trigger: All Pages

#### 3. Custom Events in GA4
All events pushed to dataLayer will automatically be sent to GA4 if GTM is configured correctly.

**Recommended Custom Dimensions:**
- User Dimension: `need_help_with` (form dropdown selection)
- Event Dimension: `cta_location`
- Event Dimension: `link_destination`

---

## 📊 KEY METRICS TO TRACK

### Conversion Metrics
1. **Contact Form Submissions** (Primary Goal)
   - Total submissions
   - Submissions by source page
   - Submission rate (submissions / visitors)
   - Dropdown selection distribution ("What do you need help with?")

2. **Calendly Bookings** (Secondary Goal)
   - Total clicks on Calendly link
   - Click-through rate from Contact page

3. **CTA Performance**
   - Clicks by CTA location (hero, cta_band, footer, etc.)
   - Clicks by page (home, capabilities, about, etc.)
   - Click-through rate by CTA variant

### Engagement Metrics
1. **Page Views**
   - Total page views
   - Unique page views
   - Views by page

2. **Scroll Depth**
   - % of users reaching 25%, 50%, 75%, 100%
   - Average scroll depth by page

3. **Time on Page**
   - Average time on site
   - Average time by page
   - Bounce rate

4. **Navigation**
   - Most clicked nav links
   - Navigation flow (page A → page B)

### Blog Metrics (When Live)
1. **Post Performance**
   - Views per post
   - Time on post
   - Scroll depth
   - CTA clicks from posts

2. **Category Performance**
   - Views by category
   - Engagement by category

---

## 🎯 CONVERSION RATE OPTIMIZATION (CRO)

### Baseline Metrics (First 30 Days)
- [ ] Establish conversion rate baseline
- [ ] Identify highest-traffic pages
- [ ] Identify highest-converting CTAs
- [ ] Identify drop-off points in funnel

### A/B Testing Opportunities
1. **CTA Copy**
   - "Start Here" vs "Contact Us" vs "Get Started"
   - "Book a Clarity Call" vs "Schedule a Call"

2. **CTA Placement**
   - Hero only vs Hero + Mid-page + Bottom
   - Single CTA vs Multiple CTAs per page

3. **Form Fields**
   - 3 fields vs 5 fields
   - Dropdown vs Open text for "Need help with"
   - Message required vs optional

4. **Success State**
   - Immediate thank you vs Delayed with animation
   - Next steps prominence
   - Links to Capabilities vs Blog vs Both

### Optimization Priorities
1. **High-Traffic, Low-Conversion Pages**
   - Analyze behavior flow
   - Test CTA prominence
   - Test copy clarity

2. **Form Abandonment**
   - Track field-level drop-off
   - Test field order
   - Test validation timing

3. **Mobile Performance**
   - Mobile vs Desktop conversion rates
   - Touch target optimization
   - Form UX on mobile

---

## 📧 LEAD NURTURING (Post-Conversion)

### Immediate (Within 1 Business Day)
1. **Auto-responder Email**
   - Confirms receipt
   - Sets expectation (response within 1 business day)
   - Provides immediate value (link to blog post or resource)

2. **Internal Notification**
   - Email to hello@thompsonco.com
   - Slack notification (if applicable)
   - Include form submission details

### Follow-Up Sequence
1. **Day 1-2:** Personalized response
   - Address their specific need ("What do you need help with?")
   - Offer clarity call
   - No pitch, just assessment

2. **Day 3-5:** If no response
   - Gentle follow-up
   - Additional resource based on their need
   - Reaffirm no-pressure approach

3. **Day 7-14:** If no response
   - Final follow-up
   - Invite to blog/newsletter
   - Leave door open

### Qualification Criteria
**High-Priority Leads:**
- Selected: "Employer brand clarity / EVP system"
- Selected: "Talent funnel conversion / drop-off"
- Selected: "Vendor / media governance"
- Company size indicators in message
- Urgency indicators in message

**Medium-Priority Leads:**
- Selected: "Candidate experience"
- Selected: "Recruitment marketing assets"
- General inquiry

**Low-Priority Leads:**
- Selected: "Not sure yet (diagnose)"
- Vague or automated messages

---

## 🔗 INTEGRATION POINTS

### HubSpot Integration (Recommended)

#### Form Submission
```typescript
// POST to HubSpot Forms API
const submitToHubSpot = async (formData) => {
  const portalId = "YOUR_PORTAL_ID";
  const formGuid = "YOUR_FORM_GUID";
  
  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: [
          { name: 'firstname', value: formData.name.split(' ')[0] },
          { name: 'lastname', value: formData.name.split(' ').slice(1).join(' ') },
          { name: 'email', value: formData.email },
          { name: 'company', value: formData.company },
          { name: 'need_help_with', value: formData.needHelp },
          { name: 'message', value: formData.message },
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      }),
    }
  );
  
  return response.json();
};
```

#### Hidden Fields (UTM Tracking)
```typescript
// Capture UTM parameters on page load
const getUtmParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_content: params.get('utm_content') || '',
    utm_term: params.get('utm_term') || '',
  };
};

// Include in form submission
const hiddenFields = {
  ...getUtmParams(),
  referrer_url: document.referrer,
  page_path: window.location.pathname,
  device_type: /mobile/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
  timestamp: new Date().toISOString(),
};
```

### LinkedIn Insight Tag
```html
<!-- Add to <head> -->
<script type="text/javascript">
_linkedin_partner_id = "YOUR_PARTNER_ID";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script><script type="text/javascript">
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);
</script>
<noscript>
<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=YOUR_PARTNER_ID&fmt=gif" />
</noscript>
```

**Conversion Event:**
```typescript
// Track form submission
if (typeof window !== "undefined" && (window as any).lintrk) {
  (window as any).lintrk('track', { conversion_id: YOUR_CONVERSION_ID });
}
```

### Meta Pixel
```html
<!-- Add to <head> -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
```

**Conversion Event:**
```typescript
// Track form submission
if (typeof window !== "undefined" && (window as any).fbq) {
  (window as any).fbq('track', 'Lead');
}
```

---

## 📋 IMPLEMENTATION CHECKLIST

### Phase 1: Foundation (Completed ✅)
- [x] GTM container placeholders in code
- [x] Event tracking structure defined
- [x] DataLayer push examples in ContactPage

### Phase 2: Analytics Setup (To Do)
- [ ] Create GTM container
- [ ] Install GTM snippet in index.html
- [ ] Create GA4 property
- [ ] Install GA4 via GTM
- [ ] Set up custom events in GTM
- [ ] Test events firing in GTM Preview mode

### Phase 3: Conversion Tracking (To Do)
- [ ] Set up form submission event
- [ ] Set up CTA click events
- [ ] Set up scroll depth tracking
- [ ] Set up navigation tracking
- [ ] Test all events in GA4 DebugView

### Phase 4: Integrations (To Do)
- [ ] HubSpot form integration
- [ ] HubSpot hidden fields (UTM tracking)
- [ ] LinkedIn Insight Tag
- [ ] Meta Pixel
- [ ] Calendly event tracking

### Phase 5: Optimization (Ongoing)
- [ ] Establish baseline metrics (30 days)
- [ ] Identify optimization opportunities
- [ ] Run A/B tests
- [ ] Iterate based on data

---

## 📞 CONTACTS & CREDENTIALS

### Analytics Access
- **GTM:** [Account Owner Email]
- **GA4:** [Account Owner Email]
- **HubSpot:** [Account Owner Email]
- **LinkedIn Ads:** [Account Owner Email]
- **Meta Ads:** [Account Owner Email]

### Container IDs (Placeholders)
- **GTM Container ID:** GTM-XXXXXXX
- **GA4 Measurement ID:** G-XXXXXXXXXX
- **LinkedIn Partner ID:** [Your ID]
- **Meta Pixel ID:** [Your ID]
- **HubSpot Portal ID:** [Your ID]
- **HubSpot Form GUID:** [Your ID]

---

## 🎓 BEST PRACTICES

### 1. Privacy & Compliance
- [ ] Cookie consent banner (if tracking cookies)
- [ ] Privacy policy updated with tracking disclosure
- [ ] GDPR compliance (if applicable)
- [ ] CCPA compliance (California users)

### 2. Data Quality
- [ ] Test events in dev environment before production
- [ ] Set up GTM Preview mode bookmarklet
- [ ] Regular audits of event tracking
- [ ] Remove duplicate events
- [ ] Validate event properties

### 3. Reporting
- [ ] Weekly: Form submission count, source breakdown
- [ ] Monthly: Full funnel analysis, conversion rate trends
- [ ] Quarterly: CRO recommendations based on data

### 4. Documentation
- [ ] Keep measurement plan updated
- [ ] Document all A/B tests and results
- [ ] Track changes to conversion funnel
- [ ] Maintain changelog of tracking updates

---

**Last Updated:** Current Session
**Maintained By:** [Your Name]
**Review Frequency:** Monthly
