import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <Link
        to="/audit"
        className="inline-flex items-center gap-2 px-4 py-3 rounded-full font-semibold text-sm shadow-lg transition-all hover:scale-105 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
          color: 'white',
          fontFamily: 'var(--font-serif)',
          boxShadow: '0 10px 25px rgba(17, 124, 146, 0.3)',
        }}
        onClick={() => {
          trackEvent('floating_cta_clicked', {
            event_category: 'Conversion',
            event_label: 'Mobile Floating CTA'
          });
        }}
      >
        <span>Get My Baseline</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
