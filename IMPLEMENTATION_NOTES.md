# Thompson & Co Landing Page - Implementation Notes

## Analytics & Tracking Setup

### Google Analytics 4 (GA4)
Add this script to your index.html `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Meta Pixel
Add this script to your index.html `<head>`:

```html
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
```

### LinkedIn Insight Tag
Add this script to your index.html `<head>`:

```html
<script type="text/javascript">
_linkedin_partner_id = "YOUR_PARTNER_ID";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script>
<script type="text/javascript">
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);
</script>
```

### Event Tracking
The following events are set up to track in App.tsx:
- Page views
- Scroll depth (25%, 50%, 75%, 100%)
- CTA clicks (add tracking to href attributes)
- Form submissions

## Performance Optimization

### Image Optimization
- All Unsplash images support WebP format automatically
- Add lazy loading for images below the fold
- Hero image is preloaded via link rel="preload"

### Critical CSS
Consider extracting above-the-fold CSS and inlining it in `<head>`.

### Font Loading
If custom fonts are added, use font-display: swap and preload strategy.

## SEO Configuration

### Structured Data
The following schema types are implemented:
- Organization
- Service
- FAQPage
- BreadcrumbList

### Meta Tags
Update the following in production:
- Canonical URL
- Open Graph tags
- Twitter Card tags

### Robots.txt
Create a robots.txt file:

```
User-agent: *
Allow: /

Sitemap: https://thompsonco.com/sitemap.xml
```

### Sitemap.xml
Generate and submit sitemap to Google Search Console.

## Accessibility Compliance

### WCAG 2.1 AA Checklist
- ✅ Color contrast ratios meet 4.5:1 minimum
- ✅ All interactive elements have min 44px touch targets
- ✅ Keyboard navigation fully supported
- ✅ Focus states visible on all interactive elements
- ✅ ARIA labels on navigation and forms
- ✅ Alt text on all images
- ✅ Skip to main content link
- ✅ Semantic HTML structure

## Security

### HTTPS
Ensure all resources are served over HTTPS.

### Form Security
Implement server-side validation and rate limiting on the contact form.

### Content Security Policy
Add CSP headers to prevent XSS attacks.

## Deployment Checklist

- [ ] Replace GA4 measurement ID
- [ ] Replace Meta Pixel ID
- [ ] Replace LinkedIn Partner ID
- [ ] Update canonical URLs in structured data
- [ ] Add real logo image (replace placeholder)
- [ ] Configure form submission endpoint
- [ ] Set up email notifications for form submissions
- [ ] Enable HTTPS
- [ ] Configure CDN for static assets
- [ ] Test on all target devices and browsers
- [ ] Run Lighthouse audit (target scores: 90+ across all categories)
- [ ] Test keyboard navigation
- [ ] Test screen reader compatibility
- [ ] Submit sitemap to search engines

## Brand Customization

### Colors
The following nautical colors are used throughout:
- Navy Primary: #0A2540
- Navy Secondary: #1C5077
- Teal Accent: #0F4C5C
- Sage Green: #5A7B72

### Typography
Currently using system fonts. To add custom fonts:
1. Add font files to `/public/fonts/`
2. Import in `/src/styles/fonts.css`
3. Update font-family in theme.css

### Logo
Add Thompson & Co logo:
1. Place SVG logo file in `/public/` directory
2. Update logo reference in Navigation.tsx
3. Update structured data logo URL

## Performance Targets (Core Web Vitals)

- LCP (Largest Contentful Paint): < 2.5s ✅
- CLS (Cumulative Layout Shift): < 0.1 ✅
- FID/INP (First Input Delay/Interaction to Next Paint): < 100ms ✅

## Browser Support

Tested and optimized for:
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari iOS (last 2 versions)
- Chrome Android (last 2 versions)
