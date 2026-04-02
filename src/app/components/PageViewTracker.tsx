import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        const gtag = (window as any).gtag;
        gtag("event", "page_view", {
          page_path: location.pathname + location.search,
          page_location: window.location.href,
        });
      }
    } catch (error) {
      console.error("page_view tracking failed", error);
    }
  }, [location]);

  return null;
}
