# THOMPSON & CO COLLECTIVE - MVP SITE IMPLEMENTATION GUIDE

## ✅ COMPLETED COMPONENTS

### Global Components
- ✅ `/src/app/components/GlobalHeader.tsx` - Shared header with routing
- ✅ `/src/app/components/GlobalFooter.tsx` - Shared footer with Partner link

### Pages Completed
- ✅ `/src/app/pages/HomePage.tsx` - Complete with all required sections
- ✅ `/src/app/pages/ContactPage.tsx` - Form-first with Calendly secondary
- ✅ `/src/app/pages/PartnerPage.tsx` - Converted existing Partner page

### Routing
- ✅ `/src/app/App.tsx` - React Router setup with all routes

---

## 🚧 PAGES TO BUILD

### Priority 1: Core Marketing Pages

#### 1. ABOUT PAGE (`/src/app/pages/AboutPage.tsx`)

**Required Sections:**
1. **Header Block**
   - Eyebrow: "About"
   - H1: "Why Thompson & Co Collective"
   - 2-3 sentence positioning statement

2. **Principles Section** (4-6 cards)
   - Human-first
   - Strategic clarity
   - Relationship-led
   - Evidence-based
   - Governance-minded
   - [Add 1-2 more as needed]

3. **Operating Model**
   - Short explanation of engagement models
   - Retainers, sprints, embedded support
   - NO pricing specifics

4. **Founder/Principal Section**
   - Headshot placeholder
   - Bio placeholder
   - Bullet credibility highlights
   - (Reuse MeetCandiceSection styling)

5. **AI-Readable Truth Layer (Short)**
   - Component structure (see below)

6. **CTA Band**
   - Contact CTA

**Copy Guidelines:**
- Voice: Direct, intelligent, no hype
- Max word counts: Card text 18-24 words, section descriptions 60-90 words
- Focus on differentiation without salesy language

---

#### 2. CAPABILITIES PAGE (`/src/app/pages/CapabilitiesPage.tsx`)

**Required Sections:**
1. **Hero**
   - H1 + subhead
   - Contact CTA

2. **Capabilities List** (6-8 items with anchor IDs)
   Each capability needs:
   - Title (with id="employer-brand", etc.)
   - 2-3 outcome bullets (specific, measurable)
   - "Common deliverables:" one line
   
   Capabilities to include:
   - #employer-brand: Employer Brand Strategy
   - #evp: EVP Development
   - #recruitment-marketing: Recruitment Marketing Campaigns
   - #candidate-experience: Candidate Experience Design
   - #content-assets: Careers Page & Job Ad Content
   - #media-governance: Media & Vendor Governance
   - [Add 1-2 more]

3. **Engagement Types** (3 cards)
   - Sprint (time-boxed projects)
   - Retainer (ongoing advisory)
   - Embedded/Fractional (integrated capacity)

4. **Typical Clients / Fit**
   - Best for (2-3 bullets)
   - Not a fit (2-3 bullets)

5. **Proof Strip**
   - Logos/testimonials placeholders

6. **FAQ Section** (6-8 questions)
   - Plain buyer language
   - Evidence-oriented answers
   - 2-5 sentences each

7. **AI-Readable Truth Layer (Medium)**

8. **CTA Band**

**Copy Focus:**
- Specific, measurable outcomes
- Avoid vague "best-in-class" language
- Include evidence lines where possible

---

#### 3. BLOG INDEX PAGE (`/src/app/pages/BlogPage.tsx`)

**Required Features:**
1. **Hero/Header**
   - Simple title: "Insights"
   - Optional brief intro

2. **Featured Post Slot** (optional)
   - Larger card at top

3. **Post List**
   Each post card shows:
   - Title
   - Excerpt (2-3 sentences)
   - Category tag
   - Date
   - Read-time placeholder ("5 min read")
   - Featured image placeholder

4. **Pagination Placeholder**
   - Design for it even if static initially

**Example Data Structure:**
```typescript
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}
```

---

#### 4. BLOG POST TEMPLATE (`/src/app/pages/BlogPostPage.tsx`)

**Required Components:**
1. **Header**
   - H1 (post title)
   - Author/date + "Updated" placeholder
   - Optional table of contents block

2. **Content Styling**
   - H2/H3 hierarchy
   - Pull-quote style (italicized, larger text, left border)
   - Code blocks (if needed)
   - Images with captions

3. **Related Posts Block**
   - 3 cards at bottom

4. **End-of-Post CTA**
   - Contact CTA
   - Link to Capabilities

5. **Optional Author Bio Block**

**Styling Notes:**
- Use existing typography scale
- H2: 2rem, Serif, 600 weight
- H3: 1.375rem, Serif, 600 weight
- Body: 1.0625rem, Sans, 400 weight
- Pull quote: 1.25rem, Sans, italic, left border #117C92

---

### Priority 2: Internal/Utility Pages

#### 5. PERFORMANCE CHECKLIST PAGE

Static page listing all performance constraints:
- Image format requirements (AVIF/WebP)
- Lazy loading rules
- Font loading strategy
- Motion preferences
- Asset optimization rules

#### 6. MEASUREMENT PLAN PAGE

Static page documenting:
- Event names (locked list from brief)
- Where each event fires
- What each event means
- GTM/GA4 implementation notes

#### 7. GEO TRUTH LAYER GUIDE PAGE

Internal documentation showing:
- Reusable Truth Layer component structure
- How to update it
- Vocabulary consistency rules
- Evidence line requirements

---

## 🧩 REUSABLE COMPONENTS TO CREATE

### 1. AI-Readable Truth Layer Component

**File:** `/src/app/components/TruthLayerComponent.tsx`

**Variants:** Short, Medium, Long

**Structure:**
```typescript
interface TruthLayerProps {
  variant: "short" | "medium" | "long";
}

// Sections (exact headings):
- What we do (1-2 sentences)
- Who we help (bullets)
- Outcomes we drive (bullets; specific/measurable)
- What we don't do / not a fit (bullets)
- Proof types we provide (bullets)
- Definitions (mini glossary)
```

**Design:**
- Editorial, clean layout
- Use Accordion OR two-column layout
- Not a text wall
- Maintain premium aesthetic

**Usage:**
- Home: Short variant
- Capabilities: Medium variant
- About: Short variant
- Partner: Short variant

---

### 2. Proof-Backed Claims Pattern

**Component:** `/src/app/components/ProofBackedClaim.tsx`

**Usage:** Any claim headline must include evidence line beneath it.

**Structure:**
```typescript
interface ProofBackedClaimProps {
  claim: string;
  evidence: string;
}
```

**Example:**
```
Claim: "90% reduction in time-to-hire for key technical roles"
Evidence: Multi-unit enterprise client, 12-month engagement
```

---

### 3. Capabilities Card Component

**File:** `/src/app/components/CapabilityCard.tsx`

**Props:**
```typescript
interface CapabilityCardProps {
  id: string;
  title: string;
  outcomes: string[];
  deliverables: string;
}
```

**Styling:** Match existing card system, add anchor ID for deep linking

---

## 📋 DESIGN SYSTEM REFERENCE

### Colors (Already in theme.css)
```css
--teal-primary: #0E5A6A
--teal-accent: #117C92
--teal-deep: #0F2A2A
--navy-dark: #0A1220
--accentHero: #117C92
--accentHero2: #0E5A6A
```

### Typography Scale
```
Hero: clamp(2.25rem, 5vw, 3.5rem) - Playfair Display, 600
H1: clamp(2rem, 4vw, 3rem) - Playfair Display, 600
H2: clamp(2rem, 4vw, 2.75rem) - Playfair Display, 600
H3: clamp(1.375rem, 2vw, 1.625rem) - Playfair Display, 600
Body Large: clamp(1rem, 1.5vw, 1.125rem) - Inter, 400
Body: 1.0625rem - Inter, 400
Small: 0.9375rem - Inter, 400
Eyebrow: 0.8125rem - Inter, 600, uppercase, 0.1em tracking
```

### Spacing
```
Section padding: py-20 md:py-28 (80px → 112px)
Card padding: p-8 (32px)
Card gap: gap-8 lg:gap-10 (32px → 40px)
```

### Buttons
```css
Primary CTA:
  background: linear-gradient(135deg, #117C92, #0E5A6A)
  color: white
  padding: 16px 32px
  border-radius: 6px
  font: Playfair Display, 600, 1.0625rem
  box-shadow: 0 12px 34px rgba(17,124,146,.22)
  hover: scale(1.05)
```

---

## 🎯 CONVERSION FLOW

### Primary: Form-First
1. All CTAs → `/contact`
2. Contact page → Form submission
3. Success state → Links to Capabilities + Blog

### Secondary: Calendly
- Text link only (not button)
- Below form on Contact page
- "Prefer to schedule? Book 20 minutes."

---

## ♿ ACCESSIBILITY CHECKLIST (Apply to All Pages)

### Required for Every Page:
- [ ] One H1 per page
- [ ] Clean H2/H3 hierarchy (no skipped levels)
- [ ] Skip link (already in App.tsx)
- [ ] Keyboard navigation tested
- [ ] Focus indicators visible (2px, #117C92)
- [ ] Form labels (not placeholder-only)
- [ ] Alt text on all images
- [ ] Color contrast 4.5:1 minimum (text)
- [ ] Color contrast 3:1 minimum (UI elements)
- [ ] ARIA labels on sections

### Form-Specific:
- [ ] Label for every input
- [ ] Required field indicators
- [ ] Inline error messages
- [ ] aria-invalid on error fields
- [ ] Success message announced (role="status")

---

## 📊 SEO/GEO REQUIREMENTS (Every Page)

### Metadata (Set in useEffect)
```typescript
useEffect(() => {
  document.title = "Page Title – Thompson & Co Collective";
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", "140-160 char description");
  }
}, []);
```

### Structured Data (Add via script tags)
- Organization schema (all pages)
- BreadcrumbList (non-Home pages)
- FAQPage (pages with FAQ blocks)
- Article (Blog post template)

### FAQ Blocks
- Questions in plain buyer language
- Answers 2-5 sentences, evidence-oriented
- Accordion component (already built)

---

## 📱 RESPONSIVE BREAKPOINTS

```css
Mobile: < 640px (single column, full-width buttons)
Tablet: 640px - 1024px (2-column grids)
Desktop: ≥ 1024px (full multi-column layouts)
Large: ≥ 1280px (container max-width reached)
XL: ≥ 1600px (maintain center alignment)
```

### Grid Behavior:
- 3-column → 2-column @ tablet → 1-column @ mobile
- 4-column → 2-column @ tablet → 2-column @ mobile
- 2-column → 1-column @ tablet

---

## 🎨 ANIMATION GUIDELINES

### Allowed:
- Fade in on load (opacity 0 → 1, 400-600ms)
- Button scale on hover (1 → 1.05, 300ms ease)
- Card lift on hover (translateY 0 → -2px, 300ms ease)
- Shimmer effect on buttons (translateX, 700ms linear)

### NOT Allowed:
- Autoplay video
- Heavy scroll-jacking
- Large Lottie animations
- Parallax effects

### Reduced Motion:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🔗 INTERNAL LINKING STRATEGY

### From Home:
- Link to Capabilities (in snapshot section)
- Link to Contact (hero + CTA band)

### From Capabilities:
- Link to Contact (CTA band)
- Link to 2 relevant Blog posts (placeholders OK)

### From Blog Posts:
- Link to Capabilities (end-of-post CTA)
- Link to Contact (end-of-post CTA)

### Footer:
- Links to About, Capabilities, Contact, Partner, Blog
- Legal pages: Privacy, Terms

---

## 📦 COMPONENT REUSE GUIDE

### When Building New Pages:

1. **Always use existing components first:**
   - GlobalHeader (navigation)
   - GlobalFooter (footer)
   - Accordion (from ui/accordion.tsx)
   - Existing card patterns

2. **Section structure pattern:**
```tsx
<section className="py-20 md:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Eyebrow */}
    <div className="mb-3" style={{ ... }}>EYEBROW</div>
    
    {/* H2 */}
    <h2 className="mb-5" style={{ ... }}>HEADLINE</h2>
    
    {/* Content */}
  </div>
</section>
```

3. **Card pattern:**
```tsx
<div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#117C92]/30 transition-all duration-300">
  <h3 style={{ ... }}>Title</h3>
  <p style={{ ... }}>Description</p>
</div>
```

4. **CTA button pattern:**
```tsx
<Link
  to="/contact"
  className="inline-flex items-center justify-center px-8 py-4 bg-white rounded transition-all hover:scale-105"
  style={{ 
    minHeight: '56px',
    fontSize: '1.0625rem',
    fontWeight: 600,
    fontFamily: 'var(--font-serif)',
    background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
    color: 'white',
  }}
>
  CTA Text
</Link>
```

---

## 🧪 TESTING CHECKLIST (Before Each Page is "Done")

### Functionality:
- [ ] All links work
- [ ] Forms validate correctly
- [ ] Responsive on all breakpoints
- [ ] No console errors

### Accessibility:
- [ ] Keyboard navigation works
- [ ] Screen reader test (NVDA/VoiceOver)
- [ ] Focus indicators visible
- [ ] Color contrast passes

### Performance:
- [ ] Images lazy-load (below fold)
- [ ] No layout shift (CLS)
- [ ] Fast first paint

### SEO:
- [ ] Title tag set
- [ ] Meta description set
- [ ] H1 present and unique
- [ ] Heading hierarchy correct

---

## 📝 COPY TEMPLATES

### Eyebrow Text (Short, uppercase, 0.8125rem, 600 weight, 0.1em tracking):
- About, Capabilities, Proof, FAQs, etc.

### Section Headlines (Serif, 600, clamp(2rem, 4vw, 2.75rem)):
- Question format: "What exactly do you do?"
- Statement format: "Strategic clarity meets consistent execution"
- NO: Generic buzzwords, "best-in-class," vague promises

### Body Text (Sans, 400, 0.9375rem - 1.0625rem):
- Direct, intelligent tone
- Specific outcomes over features
- Evidence-backed claims
- Max 60-90 words per section

### CTA Text (Serif, 600):
- "Start Here" / "Contact Us" / "Get Started"
- "Book a Clarity Call" (Contact page only)
- NO: "Click Here" / "Learn More" / "Submit"

---

## 🚀 DEPLOYMENT NOTES

### Before Go-Live:
1. Remove all placeholder pages or mark clearly as "Coming Soon"
2. Test all routes work correctly
3. Verify Partner page only accessible via footer link
4. Confirm form submission (even if dummy endpoint)
5. Test on mobile devices (real devices, not just DevTools)

### Post-Launch Checklist:
- [ ] Google Analytics / GTM tracking verified
- [ ] Form submissions going to correct destination (HubSpot)
- [ ] 404 page created
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured

---

## 📚 ADDITIONAL RESOURCES

### Existing Components to Reference:
- `/src/app/components/HeroSection.tsx` - Hero pattern
- `/src/app/components/HowWePlugInSection.tsx` - 3-card grid
- `/src/app/components/PartnerPackagesSection.tsx` - Elevated card pattern
- `/src/app/components/FaqSection.tsx` - FAQ accordion
- `/src/app/components/MeetCandiceSection.tsx` - 2-column split layout

### Design System Files:
- `/src/styles/theme.css` - All CSS variables
- `/src/styles/fonts.css` - Font imports
- `/DESIGN_SYSTEM.md` - Complete design token spec (if created)

---

## ✨ NEXT STEPS

### Immediate Priority:
1. Build About page (use HomePage as template)
2. Build Capabilities page (most complex, needs capability cards)
3. Build Blog index page (simple list layout)
4. Create TruthLayerComponent (reusable across pages)

### After Core Pages Complete:
5. Build Blog post template
6. Create internal documentation pages (Performance, Measurement, GEO Guide)
7. Add real content to placeholder pages
8. Final QA pass on all pages

---

## 💡 PRO TIPS

1. **Copy existing patterns**: Don't reinvent. The HomePage and ContactPage have most patterns you need.

2. **Component extraction**: If you use the same pattern 3+ times, extract it to a component.

3. **Spacing consistency**: Always use the same section padding (py-20 md:py-28).

4. **Font usage**: Serif for headlines/CTAs, Sans for body text. No exceptions.

5. **Color restraint**: Stick to the teal palette. Don't introduce new colors.

6. **Animation subtlety**: Less is more. Fade-in and scale are enough.

7. **Mobile-first thinking**: Design for mobile, enhance for desktop.

8. **Accessibility from start**: Don't bolt it on later. Test with keyboard as you build.

---

**Questions or Issues?**
Refer back to the original PROJECT BRIEF for requirements clarification.
Check existing components for implementation patterns.
Maintain the editorial, premium, calm authority voice throughout.
