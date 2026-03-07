# Market Reality CTA System - Complete Implementation

## ✅ Implementation Complete

**Breakpoint Confirmed:** 768px (md:)
- Desktop labels: ≥768px
- Mobile labels: <768px

---

## 📋 HTML Structure (React/TSX)

### Card 1 — AI First Impressions

```tsx
{/* CTA Link with Tooltip */}
<div className="relative" style={{ marginTop: '16px' }}>
  <Link 
    to="/our-approach#ai-visibility"
    className="market-reality-link"
    aria-describedby="tooltip-card-1"
    onClick={() => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'market_reality_cta_click', {
          card: 'ai_first_impressions',
          destination: '/our-approach#ai-visibility'
        });
      }
    }}
  >
    <span className="label-desktop">Govern your AI narrative</span>
    <span className="label-mobile">Strengthen AI visibility</span>
    <span className="link-arrow" aria-hidden="true">→</span>
  </Link>
  <div 
    role="tooltip"
    id="tooltip-card-1"
    className="link-tooltip"
  >
    Protect your first impression where candidates evaluate you first.
  </div>
</div>
```

### Card 2 — Spend & Conversion

```tsx
{/* CTA Link with Tooltip */}
<div className="relative" style={{ marginTop: '16px' }}>
  <Link 
    to="/capabilities#recruitment-marketing"
    className="market-reality-link"
    aria-describedby="tooltip-card-2"
    onClick={() => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'market_reality_cta_click', {
          card: 'spend_conversion',
          destination: '/capabilities#recruitment-marketing'
        });
      }
    }}
  >
    <span className="label-desktop">Improve paid media ROI</span>
    <span className="label-mobile">Fix funnel friction</span>
    <span className="link-arrow" aria-hidden="true">→</span>
  </Link>
  <div 
    role="tooltip"
    id="tooltip-card-2"
    className="link-tooltip"
  >
    Fix the friction points slowing qualified applies.
  </div>
</div>
```

### Card 3 — Claims & Credibility

```tsx
{/* CTA Link with Tooltip */}
<div className="relative" style={{ marginTop: '16px' }}>
  <Link 
    to="/capabilities#employer-brand"
    className="market-reality-link"
    aria-describedby="tooltip-card-3"
    onClick={() => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'market_reality_cta_click', {
          card: 'claims_credibility',
          destination: '/capabilities#employer-brand'
        });
      }
    }}
  >
    <span className="label-desktop">Make your EVP defensible</span>
    <span className="label-mobile">EVP credibility</span>
    <span className="link-arrow" aria-hidden="true">→</span>
  </Link>
  <div 
    role="tooltip"
    id="tooltip-card-3"
    className="link-tooltip"
  >
    Make your narrative consistent, verifiable, and conversion-ready.
  </div>
</div>
```

---

## 🎨 Complete CSS

```css
/* Market Reality Link Styles */
.market-reality-link {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  color: #0D7377;
  font-family: Arial, sans-serif;
  font-size: 13px;
  text-decoration: none;
  opacity: 1;
  transition: opacity 140ms cubic-bezier(0.25, 0.1, 0.25, 1),
              text-decoration 140ms cubic-bezier(0.25, 0.1, 0.25, 1);
}

.market-reality-link:hover {
  opacity: 0.85;
  text-decoration: underline;
}

.link-arrow {
  display: inline-block;
  transition: transform 140ms cubic-bezier(0.25, 0.1, 0.25, 1);
}

.market-reality-link:hover .link-arrow {
  transform: translateX(1px);
}

/* Tooltip */
.link-tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background-color: #0A1628;
  color: #FFFFFF;
  font-family: Arial, sans-serif;
  font-size: 12px;
  padding: 6px 8px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 140ms cubic-bezier(0.25, 0.1, 0.25, 1);
  transition-delay: 200ms;
  z-index: 10;
}

.market-reality-link:hover + .link-tooltip,
.market-reality-link:focus + .link-tooltip {
  opacity: 1;
}

/* Desktop - show desktop labels */
@media (min-width: 768px) {
  .label-desktop {
    display: inline;
  }

  .label-mobile {
    display: none;
  }
}

/* Mobile - show mobile labels, hide tooltip */
@media (max-width: 767px) {
  .link-tooltip {
    display: none;
  }

  .label-desktop {
    display: none;
  }

  .label-mobile {
    display: inline;
  }
}
```

---

## 📊 CTA Text Reference

| Card | Desktop Label | Mobile Label | Tooltip Microcopy |
|------|--------------|--------------|-------------------|
| **Card 1** | Govern your AI narrative → | Strengthen AI visibility → | Protect your first impression where candidates evaluate you first. |
| **Card 2** | Improve paid media ROI → | Fix funnel friction → | Fix the friction points slowing qualified applies. |
| **Card 3** | Make your EVP defensible → | EVP credibility → | Make your narrative consistent, verifiable, and conversion-ready. |

---

## 🔗 Destinations

- **Card 1:** `/our-approach#ai-visibility`
- **Card 2:** `/capabilities#recruitment-marketing`
- **Card 3:** `/capabilities#employer-brand`

---

## 📈 Analytics Events

All three CTAs fire analytics events on click:

```javascript
// Card 1
gtag('event', 'market_reality_cta_click', {
  card: 'ai_first_impressions',
  destination: '/our-approach#ai-visibility'
});

// Card 2
gtag('event', 'market_reality_cta_click', {
  card: 'spend_conversion',
  destination: '/capabilities#recruitment-marketing'
});

// Card 3
gtag('event', 'market_reality_cta_click', {
  card: 'claims_credibility',
  destination: '/capabilities#employer-brand'
});
```

---

## ♿ Accessibility Features

✅ **ARIA Labels:**
- `aria-describedby` connects each link to its tooltip
- `role="tooltip"` on tooltip divs for WCAG 2.1 AA compliance
- `aria-hidden="true"` on arrow spans prevents screen readers from announcing "right arrow"

✅ **Keyboard Support:**
- `:focus` state triggers tooltip visibility
- All links are fully keyboard navigable

✅ **Mobile/Touch:**
- Tooltips hidden on mobile (<768px)
- Mobile labels carry meaning independently
- Touch-optimized shorter labels

✅ **Color Contrast:**
- Teal (#0D7377) on white background meets WCAG AA 4.5:1 minimum

---

## 🎯 Micro-Interactions Summary

**On Hover:**
1. Underline fades in (140ms)
2. Opacity: 100% → 85% (140ms)
3. Arrow shifts 1px right (140ms)
4. Tooltip appears after 200ms delay
5. Color stays teal (#0D7377) throughout

**Easing:** `cubic-bezier(0.25, 0.1, 0.25, 1)` — smooth, professional, not bouncy

---

## 🚀 Implementation Status

- ✅ All three cards updated with new CTA text
- ✅ Desktop/mobile label variants implemented
- ✅ Custom styled tooltips added
- ✅ Arrow micro-animation configured
- ✅ Analytics tracking integrated
- ✅ Accessibility features complete
- ✅ Responsive breakpoint matched (768px)
- ✅ CSS added to HomePage component
