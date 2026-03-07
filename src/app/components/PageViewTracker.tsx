import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag is available
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      const gtag = (window as any).gtag;
      
      // Fire page_view event with page_path and page_location
      gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
      });
    }
  }, [location]);

  return null;
}
