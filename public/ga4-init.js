window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}

// GA4 baseline-only config (no ads/remarketing signals)
gtag('consent', 'default', {
  ad_storage: 'denied',
  analytics_storage: 'granted'
});

gtag('js', new Date());
gtag('config', 'G-XR2CJ9LZ2Z', {
  send_page_view: false,
  allow_google_signals: false,
  allow_ad_personalization_signals: false
});
