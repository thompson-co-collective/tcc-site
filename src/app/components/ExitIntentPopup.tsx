import { useEffect, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../lib/analytics';

export function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('exit-intent-shown');
    if (hasSeenPopup) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only show if mouse leaves from top of screen (not sides/bottom)
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
        localStorage.setItem('exit-intent-shown', 'true');

        trackEvent('exit_intent_popup_shown', {
          event_category: 'Conversion',
          event_label: 'Exit Intent Popup'
        });
      }
    };

    // Add scroll-based trigger as backup (if user scrolls fast toward top)
    const handleScroll = () => {
      if (window.scrollY <= 100 && !hasShown) {
        setTimeout(() => {
          if (!hasShown) {
            setShowPopup(true);
            setHasShown(true);
            localStorage.setItem('exit-intent-shown', 'true');
          }
        }, 1000);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  const handleClose = () => {
    setShowPopup(false);

    trackEvent('exit_intent_popup_dismissed', {
      event_category: 'Conversion',
      event_label: 'Exit Intent Popup'
    });
  };

  const handleCTAClick = () => {
    setShowPopup(false);

    trackEvent('exit_intent_popup_cta_clicked', {
      event_category: 'Conversion',
      event_label: 'Exit Intent Popup',
      event_value: 1
    });
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="relative max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-300"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close popup"
        >
          <X size={20} className="text-gray-400" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Icon */}
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{
              background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
            }}
          >
            <span className="text-2xl">⚡</span>
          </div>

          {/* Headline */}
          <h3
            className="text-2xl font-bold mb-3"
            style={{
              fontFamily: 'var(--font-serif)',
              color: '#0A1220',
            }}
          >
            Don't leave without your baseline
          </h3>

          {/* Subtext */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            Get a free 5-minute assessment of your talent attraction maturity.
            Discover exactly what to fix first — no sales pitch, just actionable insights.
          </p>

          {/* CTA */}
          <Link
            to="/audit"
            onClick={handleCTAClick}
            className="inline-flex items-center justify-center w-full px-6 py-4 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
              color: 'white',
              fontFamily: 'var(--font-serif)',
            }}
          >
            Get My Free Assessment
            <ArrowRight size={18} className="ml-2" />
          </Link>

          {/* Trust signal */}
          <p className="text-xs text-gray-400 mt-4">
            Used by 200+ organizations • Takes 5 minutes • No email required
          </p>
        </div>
      </div>
    </div>
  );
}
