# Thompson & Co Collective — Complete CSS Brand Specifications

**Version:** 1.0  
**Last Updated:** March 2, 2026  
**Project:** Thompson & Co Collective MVP Marketing Website Prototype

---

## 1. Color Palette

### Primary Brand Colors

```css
/* Teal Gradient System (Primary Brand Identity) */
--teal-accent: #117C92;      /* Primary teal - CTAs, accents, links */
--teal-primary: #0E5A6A;     /* Mid-range teal - gradients, headers */
--teal-deep: #0F2A2A;        /* Deep teal - dark backgrounds */

/* Navy System */
--navy-dark: #0A1220;        /* Dark navy - primary text, dark sections */
--navy-gradient-start: #0A1628;  /* Hero gradient start */

/* Background Colors */
--bg: #ffffff;               /* Primary background - white */
--bg2: #f8fafb;             /* Secondary background - light gray-blue */
```

### Gradients

```css
/* Hero Section Gradient */
background: linear-gradient(180deg, #0A1628 0%, #0E5A6A 100%);

/* CTA Section Gradient */
background: linear-gradient(135deg, #0A1628, #0E5A6A);

/* Button Gradient */
background: linear-gradient(135deg, #117C92, #0E5A6A);

/* Subtle Background Gradient */
background: linear-gradient(135deg, rgba(17, 124, 146, 0.05), rgba(14, 90, 106, 0.05));
```

### Semantic Colors

```css
/* UI Colors */
--border: rgba(0, 0, 0, 0.1);
--input-background: #f3f3f5;
--muted: #ececf0;
--muted-foreground: #717182;
--destructive: #d4183d;
--destructive-foreground: #ffffff;
```

### Text Colors

```css
/* Primary Text */
color: #0A1220;              /* Dark navy - headings, body */

/* White Text (on dark backgrounds) */
color: #FFFFFF;

/* Muted Text */
color: rgba(255,255,255,0.9);  /* Light text on dark backgrounds */
color: rgba(255,255,255,0.8);  /* Secondary light text */
color: rgba(255,255,255,0.05); /* Very subtle backgrounds */
color: #6B7280;                /* Gray text on light backgrounds */
color: #666666;                /* Mid-gray body text */
color: #888888;                /* Disabled/placeholder text */
color: #AAAAAA;                /* Very light gray text */
```

### Accent & Interactive Colors

```css
/* Links & Accents */
color: #117C92;              /* Primary teal - links, accents */
color: #0E5A6A;              /* Hover state for teal */
color: #0D7377;              /* Footer accent links */

/* Category Tags */
background: rgba(17,124,146,0.1);
color: #117C92;
```

---

## 2. Typography

### Font Families

```css
/* Primary Serif - Headers, CTAs, Buttons */
--font-serif: 'Playfair Display', Georgia, serif;
font-family: var(--font-serif);

/* Alternative Serif */
--font-serif-alt: 'Crimson Text', Georgia, serif;
font-family: var(--font-serif-alt);

/* Sans Serif - Body Text, Navigation, Labels */
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
font-family: var(--font-sans);

/* Script Font - Decorative/Emphasis */
--font-script: 'Dancing Script', cursive;
font-family: var(--font-script);
```

### Font Imports

```css
/* Google Fonts CDN */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600&display=swap');
```

### Typography Scale & Hierarchy

#### Headings (Serif Font Family)

```css
/* H1 - Page Titles/Hero Headlines */
h1 {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 5vw, 3.75rem);  /* 40px - 60px responsive */
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #0A1220;
}

/* H2 - Section Headings */
h2 {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 2.75rem);    /* 32px - 44px responsive */
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: #0A1220;
}

/* H3 - Subsection Headings */
h3 {
  font-family: var(--font-serif);
  font-size: 1.375rem;                      /* 22px */
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: #0A1220;
}

/* H4 - Card/Component Titles */
h4 {
  font-family: var(--font-serif);
  font-size: 1.125rem;                      /* 18px */
  font-weight: 600;
  line-height: 1.4;
  color: #0A1220;
}
```

#### Body Text (Sans Serif Font Family)

```css
/* Body - Standard */
p {
  font-family: var(--font-sans);
  font-size: 1rem;                          /* 16px */
  font-weight: 400;
  line-height: 1.6;
  color: #0A1220;
}

/* Body - Large (Subheadings, Intros) */
.text-large {
  font-family: var(--font-sans);
  font-size: 1.125rem;                      /* 18px */
  line-height: 1.6;
  color: #666666;
}

/* Body - Medium */
.text-medium {
  font-family: var(--font-sans);
  font-size: 1.0625rem;                     /* 17px */
  line-height: 1.6;
  color: rgba(255,255,255,0.9);
}

/* Body - Small */
.text-small {
  font-family: var(--font-sans);
  font-size: 0.9375rem;                     /* 15px */
  line-height: 1.6;
  color: #6B7280;
}

/* Body - Extra Small */
.text-xs {
  font-family: var(--font-sans);
  font-size: 0.875rem;                      /* 14px */
  line-height: 1.5;
  color: #666666;
}
```

#### Eyebrow Labels (Uppercase, Sans Serif)

```css
/* Eyebrow - Standard */
.eyebrow {
  font-family: var(--font-sans);
  font-size: 0.8125rem;                     /* 13px */
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #117C92;
}

/* Eyebrow - Small (Category Tags) */
.eyebrow-small {
  font-family: var(--font-sans);
  font-size: 0.6875rem;                     /* 11px */
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #117C92;
}
```

#### Buttons & CTAs (Serif Font Family)

```css
/* Primary Button/CTA */
button, .button {
  font-family: var(--font-serif);
  font-size: 1.0625rem;                     /* 17px */
  font-weight: 600;
  line-height: 1.5;
  color: #0A1220;                           /* Dark text on white button */
}

/* CTA Button Specific */
.cta-button {
  font-family: var(--font-serif);
  font-size: 1.0625rem;
  font-weight: 600;
  min-height: 56px;
  padding: 16px 32px;
  background-color: #FFFFFF;
  color: #0A1220;
}
```

#### Navigation (Sans Serif)

```css
/* Header Navigation Links */
.nav-link {
  font-family: var(--font-sans);
  font-size: 0.9375rem;                     /* 15px */
  font-weight: 500;
  color: #FFFFFF;
  letter-spacing: 0.01em;
}

/* Footer Navigation */
.footer-nav {
  font-family: Arial, sans-serif;
  font-size: 0.875rem;                      /* 14px */
  color: #FFFFFF;
}

/* Footer Heading */
.footer-heading {
  font-family: Arial, sans-serif;
  font-size: 0.6875rem;                     /* 11px */
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #0D7377;
}
```

#### Form Elements (Sans Serif)

```css
/* Labels */
label {
  font-family: var(--font-sans);
  font-size: 1rem;                          /* 16px */
  font-weight: 500;
  line-height: 1.5;
  color: #0A1220;
}

/* Input & Textarea */
input, textarea {
  font-family: var(--font-sans);
  font-size: 1rem;                          /* 16px */
  font-weight: 400;
  line-height: 1.5;
  background: #f3f3f5;
  color: #0A1220;
}
```

---

## 3. Spacing & Layout

### Container Widths

```css
/* Maximum Content Width */
.max-w-7xl {
  max-width: 1280px;
}

.max-w-5xl {
  max-width: 1024px;
}

.max-w-4xl {
  max-width: 896px;
}

.max-w-3xl {
  max-width: 768px;
}

.max-w-2xl {
  max-width: 672px;
}
```

### Section Padding

```css
/* Standard Section Padding */
.section-padding {
  padding-top: 80px;      /* 5rem / 20 on scale */
  padding-bottom: 80px;
}

/* Large Section Padding (Hero, Feature Sections) */
.section-padding-lg {
  padding-top: 112px;     /* 7rem / 28 on scale */
  padding-bottom: 112px;
}

/* Responsive Section Padding */
padding-top: clamp(80px, 10vw, 112px);
padding-bottom: clamp(80px, 10vw, 112px);
```

### Responsive Padding (Horizontal)

```css
/* Container Horizontal Padding */
padding-left: 16px;    /* Mobile: 1rem */
padding-right: 16px;

@media (min-width: 640px) {
  padding-left: 24px;  /* Tablet: 1.5rem */
  padding-right: 24px;
}

@media (min-width: 1024px) {
  padding-left: 32px;  /* Desktop: 2rem */
  padding-right: 32px;
}
```

### Spacing Scale

```css
/* Margin/Padding Scale */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-28: 112px;
--space-32: 128px;
```

---

## 4. Component Styles

### Buttons

```css
/* Primary CTA Button */
.button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  padding: 16px 32px;
  border-radius: 4px;
  font-family: var(--font-serif);
  font-size: 1.0625rem;
  font-weight: 600;
  background-color: #FFFFFF;
  color: #0A1220;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(17,124,146,0.2);
}

.button-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(17,124,146,0.35);
}

/* Gradient Button */
.button-gradient {
  background: linear-gradient(135deg, #117C92, #0E5A6A);
  color: #FFFFFF;
  box-shadow: 0 8px 24px rgba(17,124,146,.35);
}

.button-gradient:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 32px rgba(17,124,146,.5);
}
```

### Cards

```css
/* Content Card */
.card {
  padding: 32px;
  border-radius: 8px;
  border: 1px solid #E5E5E5;
  background-color: #FFFFFF;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: #117C92;
  box-shadow: 0 8px 24px rgba(17,124,146,0.15);
}

/* Callout Card (Tinted Background) */
.callout-card {
  padding: 24px;
  border-radius: 4px;
  background-color: rgba(255,255,255,0.05);
  border-left: 3px solid #117C92;
}
```

### Category Tags

```css
.category-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 4px;
  font-family: var(--font-sans);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background-color: rgba(17,124,146,0.1);
  color: #117C92;
}
```

### Links

```css
/* Standard Link */
a {
  color: #117C92;
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: #0E5A6A;
  text-decoration: underline;
}

/* Navigation Link */
.nav-link {
  color: #FFFFFF;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.nav-link:hover {
  opacity: 0.8;
}

/* Footer Link */
.footer-link {
  color: #FFFFFF;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #0D7377;
}
```

---

## 5. Header Navigation

```css
/* Global Header */
.global-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(10, 22, 32, 0.9);
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
}

.global-header.scrolled {
  backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

/* Logo/Wordmark */
.header-logo {
  font-family: Georgia, serif;
  font-size: 1.25rem;
  font-weight: normal;
  color: #FFFFFF;
}

/* Navigation Items */
.nav-item {
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  font-weight: 500;
  color: #FFFFFF;
  padding: 8px 16px;
}

/* CTA Button in Header */
.header-cta {
  padding: 10px 24px;
  border-radius: 4px;
  font-family: var(--font-serif);
  font-size: 0.9375rem;
  font-weight: 600;
  background: linear-gradient(135deg, #117C92, #0E5A6A);
  color: #FFFFFF;
}
```

---

## 6. Footer

```css
/* Global Footer */
.global-footer {
  background-color: #0A1628;
  color: #FFFFFF;
  padding: 64px 80px;
}

/* Footer Wordmark */
.footer-wordmark {
  font-family: Georgia, serif;
  font-size: 1.25rem;
  font-weight: normal;
  color: #FFFFFF;
  margin-bottom: 14px;
}

/* Footer Tagline */
.footer-tagline {
  font-family: Georgia, serif;
  font-size: 1rem;
  font-style: italic;
  color: #AAAAAA;
  line-height: 1.6;
  margin-bottom: 14px;
}

/* Footer Location */
.footer-location {
  font-family: Arial, sans-serif;
  font-size: 0.8125rem;
  color: #888888;
}

/* Footer Column Heading */
.footer-heading {
  font-family: Arial, sans-serif;
  font-size: 0.6875rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #0D7377;
  margin-bottom: 16px;
}

/* Footer Link */
.footer-link {
  font-family: Arial, sans-serif;
  font-size: 0.875rem;
  color: #FFFFFF;
  line-height: 30px;
}

/* Footer Copyright */
.footer-copyright {
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  color: #666666;
  text-align: center;
  padding: 24px 0;
}
```

---

## 7. Accessibility & States

### Focus States

```css
/* Focus Ring */
*:focus-visible {
  outline: 2px solid rgba(17,124,146,0.5);
  outline-offset: 2px;
}

/* Skip Link */
.skip-link {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 9999;
  padding: 16px;
  background-color: #0E5A6A;
  color: #FFFFFF;
  border-radius: 4px;
}

.skip-link:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### Hover States

```css
/* Button Hover */
button:hover,
.button:hover {
  transform: scale(1.05);
  transition: all 0.3s ease;
}

/* Link Hover */
a:hover {
  color: #0E5A6A;
  text-decoration: underline;
}

/* Card Hover */
.card:hover {
  border-color: #117C92;
  box-shadow: 0 8px 24px rgba(17,124,146,0.15);
}
```

### Active States

```css
/* Button Active */
button:active {
  transform: scale(0.98);
}

/* Link Active */
a:active {
  color: #0F2A2A;
}
```

---

## 8. Border Radius

```css
--radius: 0.625rem;           /* 10px - default */
--radius-sm: 0.375rem;        /* 6px - small elements */
--radius-md: 0.5rem;          /* 8px - medium elements */
--radius-lg: 0.625rem;        /* 10px - large elements */
--radius-xl: 0.875rem;        /* 14px - extra large */

/* Applied to components */
border-radius: 4px;           /* Buttons, inputs */
border-radius: 8px;           /* Cards */
border-radius: 12px;          /* Large cards, modals */
```

---

## 9. Shadows

```css
/* Button Shadow */
box-shadow: 0 4px 16px rgba(17,124,146,0.2);

/* Button Hover Shadow */
box-shadow: 0 8px 24px rgba(17,124,146,0.35);

/* Gradient Button Shadow */
box-shadow: 0 8px 24px rgba(17,124,146,.35);

/* Card Shadow */
box-shadow: 0 8px 24px rgba(17,124,146,0.15);

/* Large Shadow */
box-shadow: 0 12px 32px rgba(17,124,146,.5);
```

---

## 10. Transitions & Animations

```css
/* Standard Transition */
transition: all 0.3s ease;

/* Color Transition */
transition: color 0.2s ease;

/* Opacity Transition */
transition: opacity 0.2s ease;

/* Transform Transition */
transition: transform 0.3s ease;

/* Hover Scale */
transform: scale(1.05);

/* Active Scale */
transform: scale(0.98);

/* Translate (for arrows, etc.) */
transform: translateX(4px);
```

---

## 11. Responsive Breakpoints

```css
/* Mobile First Approach */

/* Small (sm) - Tablets */
@media (min-width: 640px) { }

/* Medium (md) - Small Desktop */
@media (min-width: 768px) { }

/* Large (lg) - Desktop */
@media (min-width: 1024px) { }

/* Extra Large (xl) - Large Desktop */
@media (min-width: 1280px) { }

/* 2XL - Very Large Desktop */
@media (min-width: 1536px) { }
```

---

## 12. Brand Voice CSS Notes

### Editorial Clarity
- Clean, spacious layouts with generous whitespace
- Clear hierarchy through typography scale
- Consistent spacing between elements

### Calm Authority
- Muted color palette with strategic teal accents
- Serif fonts for gravitas in headlines
- Smooth transitions and animations

### Professional Polish
- Subtle shadows and gradients
- Precise border radius consistency
- Enterprise-level attention to detail

### Nautical Aesthetic
- Teal and navy color dominance
- Ocean-inspired gradient transitions
- Deep, sophisticated color depth

---

## 13. Usage Guidelines

### DO:
- Use serif fonts (Playfair Display) for all headlines, CTAs, and buttons
- Use sans-serif fonts (Inter) for all body text, navigation, and labels
- Apply teal accent color (#117C92) to links, eyebrows, and interactive elements
- Use white buttons with dark text for primary CTAs
- Maintain WCAG 2.1 AA contrast ratios

### DON'T:
- Mix font families within the same text element
- Use colors outside the defined palette
- Create custom gradients beyond the specified brand gradients
- Apply font sizes that aren't responsive (always use clamp or media queries)
- Forget hover/focus states on interactive elements

---

## 14. File Structure

```
/src/styles/
  ├── fonts.css       - Font imports
  ├── theme.css       - CSS variables, brand colors, typography defaults
  ├── tailwind.css    - Tailwind v4 configuration
  └── index.css       - Main entry point
```

---

**END OF SPECIFICATIONS**

For implementation questions or brand extension requests, refer to:
- `/BACKEND_DEV_REQUIREMENTS.md` (Version 1.1)
- `/SITE_OUTLINE.md`
- Contact: Thompson & Co Collective Design Team
