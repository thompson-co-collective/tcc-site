# Thompson & Co Landing Page - Responsive Design System

## Breakpoint Strategy

### Mobile First Approach
The design is built mobile-first with progressive enhancement for larger screens.

### Defined Breakpoints

```css
/* Mobile (Default) */
360px - 767px

/* Tablet */
768px - 1023px (md:)

/* Small Desktop */
1024px - 1279px (lg:)

/* Large Desktop */
1280px - 1599px (xl:)

/* XL Screens */
1600px+ (2xl:)
```

## Component Responsive Behavior

### Navigation
**Mobile (360-767px)**
- Hamburger menu icon (44px min touch target)
- Full-width mobile menu drawer
- Stacked vertical links
- Logo centered or left-aligned

**Tablet & Up (768px+)**
- Horizontal navigation bar
- All links visible inline
- CTA button right-aligned

### Hero Section
**Mobile (360-767px)**
- Font size: 36px (2.25rem) via clamp()
- Single column layout
- Buttons stack vertically
- Full-width buttons
- Background image 30% opacity
- Padding: 128px top, 80px bottom

**Tablet (768px+)**
- Font size: 48-52px via clamp()
- Buttons in row (flexbox)
- Increased padding

**Desktop (1024px+)**
- Font size: 56-64px via clamp()
- Maximum width: 896px (max-w-4xl)
- Padding: 192px top, 128px bottom

### What's Included Grid
**Mobile (360-767px)**
- Single column (grid-cols-1)
- Cards full width
- 32px gap between cards

**Tablet (768px+)**
- Two columns (md:grid-cols-2)
- 40px gap

**Desktop (1024px+)**
- Three columns (lg:grid-cols-3)
- 40px gap

### Who It's For Section
**Mobile (360-767px)**
- Single column
- Cards stack vertically
- Full-width

**Desktop (1024px+)**
- Three columns (lg:grid-cols-3)
- Equal width columns

### Proof Section (Logos & Testimonials)
**Mobile (360-767px)**
- Logos: 2 columns (grid-cols-2)
- Testimonials: Single column

**Tablet (768px+)**
- Logos: 3 columns (md:grid-cols-3)
- Testimonials: Single column

**Desktop (1024px+)**
- Logos: 6 columns (lg:grid-cols-6)
- Testimonials: 2 columns (lg:grid-cols-2)

### FAQ Accordion
**All Breakpoints**
- Single column layout
- Max width: 896px (max-w-4xl)
- Touch-friendly 48px min height
- Full-width on mobile

### Contact Form
**Mobile (360-767px)**
- Single column layout
- Form fields full width
- Content stacks above form

**Desktop (1024px+)**
- Two columns (lg:grid-cols-2)
- 50/50 split: content left, form right

## Typography Scaling

### Fluid Typography with clamp()

```css
/* Hero H1 */
font-size: clamp(2.25rem, 5vw, 4rem);
/* Mobile: 36px, Desktop: 64px */

/* Section H2 */
font-size: clamp(2rem, 4vw, 3rem);
/* Mobile: 32px, Desktop: 48px */

/* Body Text Large */
font-size: clamp(1rem, 2vw, 1.25rem);
/* Mobile: 16px, Desktop: 20px */

/* Body Text */
font-size: clamp(1rem, 1.5vw, 1.125rem);
/* Mobile: 16px, Desktop: 18px */
```

### Line Height Adjustments
- Headlines: 1.1 - 1.2
- Subheadings: 1.3 - 1.4
- Body text: 1.6 - 1.7
- Captions: 1.5

## Spacing System

### Vertical Section Padding
**Mobile (360-767px)**
- py-20 (80px / 5rem)

**Tablet (768px+)**
- md:py-28 (112px / 7rem)

**Desktop (1024px+)**
- lg:py-32 (128px / 8rem)

### Container Padding
**All Breakpoints**
- Mobile: px-4 (16px)
- Tablet: sm:px-6 (24px)
- Desktop: lg:px-8 (32px)

### Content Max Width
- max-w-7xl: 1280px (main content)
- max-w-5xl: 1024px (CTA sections)
- max-w-4xl: 896px (FAQ, centered content)
- max-w-3xl: 768px (section intros)
- max-w-2xl: 672px (narrow text blocks)

## Touch Targets & Interaction

### Minimum Sizes (Mobile)
- Buttons: 56px height (py-4)
- Navigation items: 44px height
- Form fields: 48px height (py-3)
- Accordion triggers: 48px min height

### Spacing Between Interactive Elements
- Minimum: 8px (gap-2)
- Recommended: 12px (gap-3)
- Comfortable: 16px (gap-4)

## Image Responsive Behavior

### Hero Background
```css
background-size: cover;
background-position: center;
object-fit: cover;
```

### Content Images
- Lazy loading: loading="lazy"
- Responsive sources: srcset with multiple sizes
- Aspect ratio reserved to prevent CLS
- WebP with PNG/JPG fallback

## Grid Collapse Patterns

### 3 → 2 → 1 Pattern
```
Desktop (3 columns)
[Item] [Item] [Item]
[Item] [Item] [Item]

Tablet (2 columns)
[Item] [Item]
[Item] [Item]
[Item] [Item]

Mobile (1 column)
[Item]
[Item]
[Item]
[Item]
[Item]
[Item]
```

### 6 → 3 → 2 Pattern (Logos)
```
Desktop (6 columns)
[Logo] [Logo] [Logo] [Logo] [Logo] [Logo]

Tablet (3 columns)
[Logo] [Logo] [Logo]
[Logo] [Logo] [Logo]

Mobile (2 columns)
[Logo] [Logo]
[Logo] [Logo]
[Logo] [Logo]
```

## Performance Considerations

### Mobile Performance
- Minimize bundle size for 3G/4G
- Lazy load images below fold
- Defer non-critical JavaScript
- Optimize first contentful paint

### Desktop Performance
- Leverage browser caching
- Preload hero image
- Use WebP images where supported
- Minimize layout shifts

## Testing Viewports

### Primary Test Devices
- iPhone 12/13/14 (390x844)
- iPhone 12/13/14 Pro Max (428x926)
- Samsung Galaxy S21 (360x800)
- iPad (768x1024)
- iPad Pro (1024x1366)
- MacBook Air (1440x900)
- Desktop 1080p (1920x1080)
- Desktop 1440p (2560x1440)

### Browser DevTools Testing
```
Mobile Presets:
- 360px (Galaxy S9)
- 375px (iPhone X)
- 390px (iPhone 12 Pro)
- 414px (iPhone XR)
- 428px (iPhone 14 Pro Max)

Tablet Presets:
- 768px (iPad)
- 810px (iPad Pro 11")
- 1024px (iPad Pro 12.9")

Desktop Presets:
- 1280px (720p)
- 1366px (Common laptop)
- 1920px (1080p)
- 2560px (1440p)
```

## CSS Architecture

### Tailwind Utilities
Mobile-first utilities are applied by default, with breakpoint modifiers for larger screens:

```jsx
className="
  grid               // Base mobile style
  grid-cols-1        // Mobile: 1 column
  md:grid-cols-2     // Tablet: 2 columns
  lg:grid-cols-3     // Desktop: 3 columns
  gap-8              // Base gap
  md:gap-10          // Larger gap on tablet+
"
```

### Custom CSS Variables
Located in `/src/styles/theme.css`:
```css
--navy-primary: #0A2540;
--navy-secondary: #1C5077;
--teal-accent: #0F4C5C;
--sage-green: #5A7B72;
```

## Accessibility at Different Breakpoints

### Mobile Accessibility
- Larger touch targets (56px buttons)
- Sufficient spacing between elements
- Readable font sizes (minimum 16px)
- Easy thumb reach for navigation

### Desktop Accessibility
- Visible focus states on keyboard navigation
- Hover states for mouse users
- Appropriate click target sizes
- Clear visual hierarchy

## Common Responsive Patterns Used

### Stack to Sidebar
Content and form stack on mobile, side-by-side on desktop.

### Hamburger Menu
Navigation collapses to hamburger icon on mobile.

### Fluid Typography
Font sizes scale smoothly across breakpoints using clamp().

### Flexible Grids
CSS Grid with minmax() and auto-fit for responsive columns.

### Mobile-First Media Queries
Styles apply to mobile by default, enhanced for larger screens.

### Container Queries (Future Enhancement)
Consider implementing container queries for component-level responsiveness.

## Print Styles (Future Enhancement)

Consider adding print styles:
```css
@media print {
  /* Hide navigation, CTAs */
  /* Optimize typography for print */
  /* Ensure links show URLs */
}
```

## Dark Mode Considerations

While not currently implemented, the design system supports dark mode:
```css
.dark {
  /* Dark mode variables in theme.css */
}
```

To implement:
1. Add theme toggle component
2. Use class strategy: `dark:bg-gray-900`
3. Test contrast ratios in dark mode
4. Respect user's system preference
