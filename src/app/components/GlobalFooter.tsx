import { Link } from "react-router-dom";
import logo from "figma:asset/2e4bd1954356ddbc1a3bc77f91e7e49e081d77f1.png";

export function GlobalFooter() {
  return (
    <footer 
      style={{
        backgroundColor: '#0A1628',
        color: 'white',
      }}
      role="contentinfo"
    >
      {/* Main Footer Content */}
      <div 
        className="mx-auto"
        style={{
          paddingTop: '64px',
          paddingBottom: '64px',
          paddingLeft: '80px',
          paddingRight: '80px',
        }}
      >
        {/* Four Column Layout */}
        <div 
          className="grid grid-cols-1 md:grid-cols-12"
          style={{
            gap: '48px',
          }}
        >
          {/* Column 1 — Brand (30% width) */}
          <div className="md:col-span-4">
            {/* Wordmark */}
            <Link 
              to="/"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '20px',
                fontWeight: 'normal',
                color: '#FFFFFF',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '14px',
              }}
              className="hover:opacity-80 transition-opacity"
            >
              Thompson & Co Collective
            </Link>

            {/* Tagline */}
            <p 
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '16px',
                fontStyle: 'italic',
                color: '#AAAAAA',
                lineHeight: 1.6,
                marginBottom: '14px',
              }}
            >
              The collective approach to talent attraction.
            </p>

            {/* Location */}
            <p 
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '13px',
                color: '#888888',
              }}
            >
              Charlotte, NC Metro
            </p>
          </div>

          {/* Column 2 — Company */}
          <div className="md:col-span-3">
            <h3 
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '11px',
                fontWeight: 'normal',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#0D7377',
                marginBottom: '16px',
                textAlign: 'right',
              }}
            >
              COMPANY
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'right' }}>
              <li style={{ lineHeight: '30px' }}>
                <Link 
                  to="/about" 
                  className="hover:text-[#0D7377] transition-colors"
                  style={{ 
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                >
                  About
                </Link>
              </li>
              <li style={{ lineHeight: '30px' }}>
                <Link 
                  to="/capabilities" 
                  className="hover:text-[#0D7377] transition-colors"
                  style={{ 
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                >
                  Capabilities
                </Link>
              </li>
              <li style={{ lineHeight: '30px' }}>
                <Link 
                  to="/our-approach" 
                  className="hover:text-[#0D7377] transition-colors"
                  style={{ 
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                >
                  Approach
                </Link>
              </li>
              <li style={{ lineHeight: '30px' }}>
                <Link 
                  to="/insights" 
                  className="hover:text-[#0D7377] transition-colors"
                  style={{ 
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                >
                  Insights
                </Link>
              </li>
              <li style={{ lineHeight: '30px' }}>
                <Link 
                  to="/contact" 
                  className="hover:text-[#0D7377] transition-colors"
                  style={{ 
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div className="md:col-span-3">
            <h3 
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '11px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#0D7377',
                marginBottom: '16px',
              }}
            >
              SERVICES
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ lineHeight: '30px' }}>
                <Link 
                  to="/capabilities#employer-brand-evp" 
                  className="hover:text-[#0D7377] transition-colors"
                  style={{ 
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                >
                  Employer Brand & EVP
                </Link>
              </li>
              <li style={{ lineHeight: '30px' }}>
                <Link 
                  to="/capabilities#recruitment-marketing" 
                  className="hover:text-[#0D7377] transition-colors"
                  style={{ 
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                >
                  Recruitment Marketing
                </Link>
              </li>
              <li style={{ lineHeight: '30px' }}>
                <Link 
                  to="/capabilities#candidate-experience" 
                  className="hover:text-[#0D7377] transition-colors"
                  style={{ 
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                >
                  Candidate Experience
                </Link>
              </li>
              <li style={{ lineHeight: '30px' }}>
                <Link 
                  to="/attraction-diagnostic" 
                  className="hover:text-[#0D7377] transition-colors"
                  style={{ 
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                >
                  Attraction Diagnostic
                </Link>
              </li>
              <li style={{ lineHeight: '30px' }}>
                <Link 
                  to="/our-approach#ai-visibility" 
                  className="hover:text-[#0D7377] transition-colors"
                  style={{ 
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                >
                  AI & Visibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Connect */}
          <div className="md:col-span-2">
            <h3 
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '11px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#0D7377',
                marginBottom: '16px',
              }}
            >
              CONNECT
            </h3>

            {/* All Icons in One Row */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px',
              }}
            >
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/company/thompson-co-collective" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                style={{ color: '#0D7377' }}
                aria-label="LinkedIn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/thompsoncollective" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                style={{ color: '#0D7377' }}
                aria-label="Instagram"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072zm0-2.163c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com/thompsoncollective" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                style={{ color: '#0D7377' }}
                aria-label="Facebook"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com/@thompsoncollective" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                style={{ color: '#0D7377' }}
                aria-label="YouTube"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Email */}
              <a 
                href="mailto:hello@thompsoncollective.co"
                className="hover:text-white transition-colors"
                style={{ color: '#0D7377' }}
                aria-label="Email"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>

              {/* Phone */}
              <a 
                href="tel:+19804001254"
                className="hover:text-white transition-colors"
                style={{ color: '#0D7377' }}
                aria-label="Phone"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>

            {/* Separator and Agency Partners Section */}
            <div>
              {/* Horizontal Rule */}
              <div 
                style={{
                  height: '1px',
                  backgroundColor: '#1E2A3A',
                  width: '100%',
                  marginBottom: '16px',
                }}
              />
              
              {/* Agency Partners Link */}
              <div>
                <p 
                  style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '11px',
                    fontStyle: 'italic',
                    color: '#888888',
                    margin: 0,
                    marginBottom: '4px',
                  }}
                >
                  For agencies and HR Consultants
                </p>
                <a 
                  href="https://partners.thompsoncollective.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    color: '#0D7377',
                    textDecoration: 'none',
                  }}
                >
                  Agency Partners →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div 
        style={{
          borderTop: '1px solid #1E2A3A',
          paddingTop: '24px',
          paddingBottom: '24px',
          paddingLeft: '80px',
          paddingRight: '80px',
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            style={{ 
              fontFamily: 'Arial, sans-serif',
              fontSize: '13px',
              color: '#888888',
              margin: 0,
            }}
          >
            © 2026 Thompson & Co Collective. All rights reserved.
          </p>
          <div 
            className="flex items-center gap-2"
            style={{ 
              fontFamily: 'Arial, sans-serif',
              fontSize: '13px',
              color: '#888888',
            }}
          >
            <Link
              to="/privacy"
              className="hover:text-white transition-colors"
              style={{ textDecoration: 'none', color: '#888888' }}
            >
              Privacy Policy
            </Link>
            <span style={{ color: '#0D7377' }}>·</span>
            <Link
              to="/terms"
              className="hover:text-white transition-colors"
              style={{ textDecoration: 'none', color: '#888888' }}
            >
              Terms
            </Link>
            <span style={{ color: '#0D7377' }}>·</span>
            <Link
              to="/sitemap"
              className="hover:text-white transition-colors"
              style={{ textDecoration: 'none', color: '#888888' }}
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          footer > div:first-child {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
          footer > div:first-child > div {
            gap: 32px !important;
          }
          footer > div:first-child > div > div:nth-child(2),
          footer > div:first-child > div > div:nth-child(3) {
            display: inline-block;
            width: calc(50% - 12px);
            vertical-align: top;
          }
          footer > div:first-child > div > div:nth-child(4) {
            text-align: center;
          }
          footer > div:first-child > div > div:nth-child(4) > div {
            justify-content: center;
          }
          footer > div:last-child {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          footer > div:last-child > div {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}