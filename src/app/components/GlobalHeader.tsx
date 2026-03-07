import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export function GlobalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Navigation structure
  const navLinks = [
    { label: "Capabilities", path: "/capabilities" },
    { label: "Approach", path: "/our-approach" },
    { label: "About", path: "/about" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  // Check if we're on the audit page
  const isAuditPage = location.pathname === "/audit";

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-xl border-b border-white/10' : 'backdrop-blur-sm'
        }`}
        style={{
          background: isAuditPage 
            ? 'transparent'
            : isScrolled 
              ? 'rgba(10,18,32,0.95)' 
              : 'rgba(10,18,32,0.3)',
        }}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-18">
            {/* Logo - Left */}
            <div className="flex items-center flex-shrink-0 min-w-0 mr-3">
              <Link 
                to="/" 
                className="flex items-center hover:opacity-80 transition-opacity min-w-0 max-w-full"
                aria-label="Thompson & Co Collective - Home"
              >
                <div 
                  className="truncate"
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '20px',
                    fontWeight: 'normal',
                    color: '#FFFFFF',
                    maxWidth: 'calc(100vw - 200px)', // Leave room for CTA + hamburger on mobile
                  }}
                >
                  Thompson & Co Collective
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-all duration-200 ${
                    isActive(link.path) 
                      ? 'text-white border-b-2 border-[#117C92]' 
                      : 'text-white/80 hover:text-white'
                  }`}
                  style={{ 
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px',
                    fontWeight: 'normal',
                    paddingBottom: '2px',
                  }}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Group: CTA + Hamburger */}
            <div className="flex items-center gap-3">
              {/* CTA - Always Visible */}
              <Link
                to="/contact"
                className="px-4 lg:px-6 py-2 rounded text-white transition-all hover:shadow-2xl hover:scale-105 relative group overflow-hidden"
                style={{ 
                  minHeight: '44px',
                  background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
                  boxShadow: '0 8px 24px rgba(17,124,146,.35)',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  fontSize: 'clamp(0.8125rem, 2vw, 0.9375rem)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                data-cta-label="lets_connect"
                data-cta-location="header"
                data-cta-type="primary"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'cta_primary_clicked', {
                      'event_category': 'conversion',
                      'cta_location': 'header',
                      'cta_label': 'lets_connect'
                    });
                  }
                }}
              >
                <span className="relative z-10">Let's Connect</span>
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                />
              </Link>

              {/* Hamburger - Mobile/Tablet Only */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded transition-colors"
                style={{ minHeight: '44px', minWidth: '44px' }}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop - Click to Close */}
          <div 
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Menu Drawer - Right Side */}
          <div 
            id="mobile-menu"
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#0A1628] z-50 lg:hidden shadow-2xl"
            style={{
              animation: 'slideInRight 0.3s ease-out',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Menu Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b-2 border-white/20">
              <div 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'white',
                }}
              >
                Menu
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white hover:bg-white/10 rounded transition-colors"
                style={{ minHeight: '44px', minWidth: '44px' }}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col px-6 py-6">
              {/* CTA Button - First Item */}
              <Link
                to="/contact"
                className="mb-6 px-6 py-3 rounded text-white text-center transition-all hover:shadow-2xl hover:scale-105 relative group overflow-hidden"
                style={{ 
                  minHeight: '52px',
                  background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
                  boxShadow: '0 8px 24px rgba(17,124,146,.35)',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  fontSize: '1.0625rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                data-cta-label="lets_connect"
                data-cta-location="mobile_menu"
                data-cta-type="primary"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'cta_primary_clicked', {
                      'event_category': 'conversion',
                      'cta_location': 'mobile_menu',
                      'cta_label': 'lets_connect'
                    });
                  }
                }}
              >
                <span className="relative z-10">Let's Connect</span>
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                />
              </Link>

              {/* Navigation Links */}
              <div className="flex flex-col">
                <Link
                  to="/"
                  className={`py-4 border-b border-white/10 transition-all duration-200 ${
                    isActive("/") 
                      ? 'text-white font-semibold border-l-4 border-l-[#117C92] pl-4 -ml-4' 
                      : 'text-white/80 hover:text-white hover:pl-2'
                  }`}
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.125rem',
                  }}
                  aria-current={isActive("/") ? "page" : undefined}
                >
                  Home
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`py-4 border-b border-white/10 transition-all duration-200 ${
                      isActive(link.path) 
                        ? 'text-white font-semibold border-l-4 border-l-[#117C92] pl-4 -ml-4' 
                        : 'text-white/80 hover:text-white hover:pl-2'
                    }`}
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.125rem',
                    }}
                    aria-current={isActive(link.path) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Slide-in Animation */}
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}