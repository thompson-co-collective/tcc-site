import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl border-b border-white/10' : 'backdrop-blur-sm'
      }`}
      style={{
        background: isScrolled 
          ? 'rgba(10,18,32,0.95)' 
          : 'rgba(10,18,32,0.3)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* Logo - Wordmark Style */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'white',
                  letterSpacing: '-0.01em',
                }}
              >
                Thompson & Co Collective
              </div>
            </a>
          </div>

          {/* Desktop Navigation - Unified Right Group */}
          <div className="hidden md:flex items-center gap-6 lg:gap-7">
            <a 
              href="#how-we-plug-in" 
              className="text-white/80 hover:text-white transition-colors text-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              How We Plug In
            </a>
            <a 
              href="#partner-support" 
              className="text-white/80 hover:text-white transition-colors text-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Partner Support
            </a>
            <a 
              href="#contact"
              className="px-5 lg:px-6 py-2 rounded text-white transition-all hover:shadow-2xl hover:scale-105 relative group overflow-hidden"
              style={{ 
                minHeight: '40px',
                background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
                boxShadow: '0 8px 24px rgba(17,124,146,.35)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 600,
                fontSize: '0.9375rem',
              }}
            >
              <span className="relative z-10">Book a Clarity Call</span>
              <div 
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
              />
            </a>
          </div>

          {/* Mobile Menu Button & CTA */}
          <div className="md:hidden flex items-center gap-3">
            <a 
              href="#contact"
              className="px-4 py-2 rounded text-white text-sm"
              style={{ 
                minHeight: '40px',
                background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 600,
              }}
            >
              Clarity Call
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white"
              style={{ minHeight: '44px', minWidth: '44px' }}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a 
                href="#how-we-plug-in" 
                className="text-white/80 hover:text-white transition-colors py-2"
                style={{ fontFamily: 'var(--font-sans)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                How We Plug In
              </a>
              <a 
                href="#partner-support" 
                className="text-white/80 hover:text-white transition-colors py-2"
                style={{ fontFamily: 'var(--font-sans)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Partner Support
              </a>
              <a 
                href="#contact" 
                className="text-white/80 hover:text-white transition-colors py-2"
                style={{ fontFamily: 'var(--font-sans)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Clarity Call
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}