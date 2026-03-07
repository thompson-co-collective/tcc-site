import logo from "figma:asset/2e4bd1954356ddbc1a3bc77f91e7e49e081d77f1.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1220] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <img 
              src={logo} 
              alt="Thompson & Co Collective" 
              className="h-10 mb-4 brightness-0 invert"
            />
            <p 
              className="text-white/80 mb-6 max-w-md"
              style={{ fontFamily: 'var(--font-sans)', lineHeight: 1.6 }}
            >
              North Carolina-based consultancy helping employers become the place 
              great people want to work.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="mb-4"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Navigation
            </h4>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-sans)' }}>
              <li>
                <a href="#how-we-plug-in" className="text-white/80 hover:text-white transition-colors">
                  How We Plug In
                </a>
              </li>
              <li>
                <a href="#partner-support" className="text-white/80 hover:text-white transition-colors">
                  Partner Support
                </a>
              </li>
              <li>
                <a href="#proof" className="text-white/80 hover:text-white transition-colors">
                  Proof
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/80 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="mb-4"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Contact
            </h4>
            <ul className="space-y-3 text-white/80" style={{ fontFamily: 'var(--font-sans)' }}>
              <li>
                <a href="mailto:hello@thompsonco.com" className="hover:text-white transition-colors">
                  hello@thompsonco.com
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Book a Clarity Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            className="text-white/70 text-sm"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            © {currentYear} Thompson & Co Collective. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
            <a href="#privacy" className="text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-white/70 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}