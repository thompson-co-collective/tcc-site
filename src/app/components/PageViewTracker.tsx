import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from '../lib/analytics';

export function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    try {
      trackEvent("page_view", {
        page_path: location.pathname + location.search,
        page_location: typeof window !== "undefined" ? window.location.href : "",
      });
    } catch (error) {
      console.error("page_view tracking failed", error);
    }
  }, [location]);

  return null;
}
