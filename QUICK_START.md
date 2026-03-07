# 🚀 QUICK START GUIDE

**Thompson & Co Collective - MVP Marketing Site**

## ⚡ Get Started in 5 Minutes

### 1. View the Site
```bash
# The site should already be running in Figma Make
# Navigate through these routes:
- / (Home page - ✅ Complete)
- /contact (Contact form - ✅ Complete)
- /partner (Partner landing - ✅ Complete)
- /about (Placeholder - 🚧 To build)
- /capabilities (Placeholder - 🚧 To build)
- /blog (Placeholder - 🚧 To build)
```

### 2. Understand What's Done
- ✅ **Home page** - Fully built with all sections
- ✅ **Contact page** - Form-first conversion with validation
- ✅ **Partner page** - Existing landing converted to route
- ✅ **Global header** - Navigation + mobile menu
- ✅ **Global footer** - 4 columns + Partner link
- ✅ **Design system** - All components follow existing brand

### 3. What to Build Next
**Start here:**
1. About page (`/src/app/pages/AboutPage.tsx`)
2. Capabilities page (`/src/app/pages/CapabilitiesPage.tsx`)
3. Blog index (`/src/app/pages/BlogPage.tsx`)

---

## 📖 Essential Reading

### Before You Build Anything:
1. **Read first:** `/IMPLEMENTATION_GUIDE.md` (15 min)
   - Complete requirements for each page
   - Code examples for all patterns
   - Design system reference

2. **Skim:** `/BUILD_SUMMARY.md` (5 min)
   - Project overview
   - What's complete vs what's needed

3. **Reference:** `/PROJECT_STATUS.md`
   - Track progress
   - Known issues
   - Testing checklists

---

## 🏗️ Building Your First Page (About)

### Step 1: Copy the HomePage structure
```bash
# File: /src/app/pages/AboutPage.tsx
# Start by copying HomePage.tsx and modify sections
```

### Step 2: Replace content with About-specific sections
```typescript
// Required sections for About page:
1. Header block ("Why Thompson & Co Collective")
2. Principles cards (4-6 items)
3. Operating model explanation
4. Founder/Principal (reuse MeetCandice pattern)
5. CTA band
```

### Step 3: Add the route
```typescript
// File: /src/app/App.tsx
// Replace placeholder route:
<Route path="/about" element={<AboutPage />} />
```

### Step 4: Test
- [ ] Keyboard navigation works
- [ ] Mobile responsive
- [ ] Links work
- [ ] Heading hierarchy correct (H1 → H2 → H3)

**Time estimate:** 2-3 hours

---

## 🎨 Design System Cheat Sheet

### Colors
```css
Teal Accent: #117C92
Teal Primary: #0E5A6A
Navy Dark: #0A1220 (hero backgrounds)
White: #FFFFFF
Gray: #E5E7EB (borders)
```

### Typography
```
Headlines: Playfair Display (serif), 600 weight
Body: Inter (sans), 400 weight
Eyebrows: Inter, 600, uppercase, 0.1em tracking

Sizes:
- Hero: clamp(2.25rem, 5vw, 3.5rem)
- H2: clamp(2rem, 4vw, 2.75rem)
- H3: clamp(1.375rem, 2vw, 1.625rem)
- Body: 1.0625rem
- Small: 0.9375rem
```

### Spacing
```
Section padding: py-20 md:py-28
Card padding: p-8
Grid gap: gap-8 lg:gap-10
Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

### Buttons
```tsx
// Primary CTA
<Link
  to="/contact"
  style={{ 
    background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
    color: 'white',
    padding: '16px 32px',
    fontFamily: 'var(--font-serif)',
    fontWeight: 600,
  }}
>
  CTA Text
</Link>
```

---

## 🧩 Copy These Patterns

### Section Header
```tsx
<div className="text-center mb-16">
  {/* Eyebrow */}
  <div 
    className="mb-3"
    style={{
      fontFamily: 'var(--font-sans)',
      fontSize: '0.8125rem',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'rgba(14,90,106,0.7)',
    }}
  >
    EYEBROW
  </div>
  
  {/* H2 */}
  <h2 
    className="mb-5"
    style={{
      fontSize: 'clamp(2rem, 4vw, 2.75rem)',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      fontFamily: 'var(--font-serif)',
      color: '#0A1220',
    }}
  >
    Section Headline
  </h2>
</div>
```

### Card Grid (3 columns)
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
  <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#117C92]/30 transition-all duration-300">
    <h3 style={{ /* h3 styles */ }}>Title</h3>
    <p style={{ /* body styles */ }}>Description</p>
  </div>
  {/* Repeat */}
</div>
```

### FAQ Accordion
```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

<Accordion type="single" collapsible className="space-y-4">
  <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
    <AccordionTrigger style={{ /* trigger styles */ }}>
      Question?
    </AccordionTrigger>
    <AccordionContent style={{ /* content styles */ }}>
      Answer text
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

---

## ♿ Accessibility Checklist

Every page must have:
- [ ] One H1 (page title)
- [ ] Clean H2 → H3 hierarchy (no skipped levels)
- [ ] Alt text on all images
- [ ] Labels on all form inputs
- [ ] Color contrast 4.5:1 minimum
- [ ] Keyboard navigation works (Tab through page)
- [ ] Focus indicators visible (2px #117C92)

---

## 🧪 Testing Before You Commit

```bash
# 1. Keyboard test
# Unplug mouse, Tab through entire page
# - Can you reach all interactive elements?
# - Are focus indicators visible?

# 2. Mobile test
# Resize browser to 375px width
# - Does layout adapt?
# - Are touch targets 44×44px?
# - Does mobile menu work?

# 3. Lighthouse audit
# Chrome DevTools > Lighthouse > Run audit
# - Accessibility: aim for 95+
# - Performance: aim for 90+

# 4. Link test
# Click every link on the page
# - Do they all work?
# - Do they go to the right place?
```

---

## 🆘 Common Issues & Fixes

### "My navigation isn't highlighting the active page"
```typescript
// Make sure you're using React Router's Link, not <a>
import { Link } from "react-router-dom";

// And checking location in GlobalHeader:
const location = useLocation();
const isActive = (path: string) => {
  if (path === "/") return location.pathname === "/";
  return location.pathname.startsWith(path);
};
```

### "My spacing doesn't match other pages"
```
Always use: py-20 md:py-28 for section padding
Always use: gap-8 lg:gap-10 for card grids
Always use: p-8 for card internal padding
```

### "My buttons look different"
```tsx
// Use EXACT button pattern from HomePage or ContactPage
// Don't create new button styles
// Copy-paste the existing pattern
```

### "My fonts are wrong"
```tsx
// Headlines: fontFamily: 'var(--font-serif)'
// Body text: fontFamily: 'var(--font-sans)'
// Never use plain font-family without var()
```

---

## 📚 File Reference

### Where to Find Things

**Pages:**
- `/src/app/pages/HomePage.tsx` - Reference for section structure
- `/src/app/pages/ContactPage.tsx` - Reference for forms
- `/src/app/pages/PartnerPage.tsx` - Reference for imports

**Components:**
- `/src/app/components/GlobalHeader.tsx` - Navigation
- `/src/app/components/GlobalFooter.tsx` - Footer
- `/src/app/components/ui/accordion.tsx` - FAQ component
- Existing Partner sections in `/src/app/components/` folder

**Styles:**
- `/src/styles/theme.css` - CSS variables, colors
- `/src/styles/fonts.css` - Font imports

**Docs:**
- `/IMPLEMENTATION_GUIDE.md` - Full build instructions
- `/BUILD_SUMMARY.md` - Project overview
- `/PROJECT_STATUS.md` - Progress tracking
- `/CONVERSION_MEASUREMENT_PLAN.md` - Analytics setup

---

## 🎯 Success Criteria

Before marking a page "done":
- [ ] All content is real (not Lorem Ipsum)
- [ ] All links work
- [ ] Mobile responsive
- [ ] Keyboard accessible
- [ ] No console errors
- [ ] Lighthouse accessibility 95+
- [ ] Matches design system exactly

---

## 💡 Pro Tips

1. **Start simple:** Build About page first (easiest)
2. **Copy, don't create:** Reuse existing patterns exactly
3. **Test as you go:** Don't wait until the end
4. **Check mobile:** Resize to 375px frequently
5. **Use the guide:** IMPLEMENTATION_GUIDE.md has all answers
6. **Keyboard test:** Tab through page after each section
7. **Contrast check:** Use browser DevTools color picker

---

## 🚦 Build Order

### Phase 1: Core Pages (Start Here)
1. ✅ Home (done)
2. ✅ Contact (done)
3. ✅ Partner (done)
4. 🚧 About (next - simplest)
5. 🚧 Capabilities (after About - more complex)
6. 🚧 Blog (after Capabilities)

### Phase 2: Components
7. TruthLayerComponent (needed for multiple pages)
8. CapabilityCard (needed for Capabilities page)
9. ProofBackedClaim (optional, nice-to-have)

### Phase 3: Integrations
10. HubSpot form API
11. GTM / GA4 tracking
12. Real content and images

---

## 📞 Need Help?

### Quick Answers:
- **"How do I structure a page?"** → See HomePage.tsx
- **"How do I make a form?"** → See ContactPage.tsx
- **"What are the section patterns?"** → IMPLEMENTATION_GUIDE.md
- **"What colors/fonts to use?"** → This guide or theme.css
- **"How do I test accessibility?"** → TESTING_CHECKLIST.md

### Still Stuck?
1. Check IMPLEMENTATION_GUIDE.md (comprehensive)
2. Look at existing pages for examples
3. Search this guide for your question
4. Check PROJECT_STATUS.md for known issues

---

## ✨ You're Ready!

**Everything you need is here:**
- ✅ Foundation is complete and working
- ✅ Design system is established
- ✅ Patterns are documented with examples
- ✅ Testing checklists are ready
- ✅ All decisions are made for you

**Just build the remaining pages following the patterns.**

Start with About page. It's the easiest. You got this! 🚀

---

**Questions? Check IMPLEMENTATION_GUIDE.md first.**
**Ready to build? Start with AboutPage.tsx.**
**Need examples? Reference HomePage.tsx.**
