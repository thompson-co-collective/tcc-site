import { useState } from "react";
import { Shield, Clock, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate form submission
    setSubmitted(true);
    setErrors({});
    
    // Track form submission event (placeholder for analytics)
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 lg:py-32 text-white relative overflow-hidden"
      style={{
        background: `
          radial-gradient(600px 300px at 80% 20%, rgba(17,124,146,.3), transparent 70%),
          linear-gradient(135deg, var(--teal-primary), var(--teal-deep))
        `,
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <div>
            <div className="inline-block mb-4">
              <span 
                className="text-white/90 px-4 py-2 rounded-full border border-white/30 text-sm"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '0.05em' }}
              >
                Get Started
              </span>
            </div>
            
            <h2 
              className="mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-serif)',
              }}
            >
              Book a 30-Minute Clarity Call
            </h2>
            <p 
              className="mb-8 text-white/90"
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                fontFamily: 'var(--font-sans)',
              }}
            >
              We'll talk through where you need capacity, what the work looks like, and whether this is the right fit—for both of us.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-white/90 mt-0.5 flex-shrink-0" />
                <div>
                  <div 
                    className="mb-1"
                    style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                  >
                    30 minutes
                  </div>
                  <div 
                    className="text-white/80 text-sm"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Focused partner fit review
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-white/90 mt-0.5 flex-shrink-0" />
                <div>
                  <div 
                    className="mb-1"
                    style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                  >
                    Actionable next steps
                  </div>
                  <div 
                    className="text-white/80 text-sm"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    2–3 clear recommendations
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-white/90 mt-0.5 flex-shrink-0" />
                <div>
                  <div 
                    className="mb-1"
                    style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                  >
                    Confidential
                  </div>
                  <div 
                    className="text-white/80 text-sm"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    NDA-friendly if required
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-lg p-8 md:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block mb-2 text-[#0A1220]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg text-[#0A1220] focus:outline-none focus:ring-2 focus:ring-[#117C92] ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    style={{ 
                      minHeight: '48px',
                      fontFamily: 'var(--font-sans)',
                    }}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p 
                      id="name-error" 
                      className="mt-1 text-sm text-red-600"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block mb-2 text-[#0A1220]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg text-[#0A1220] focus:outline-none focus:ring-2 focus:ring-[#117C92] ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    style={{ 
                      minHeight: '48px',
                      fontFamily: 'var(--font-sans)',
                    }}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p 
                      id="email-error" 
                      className="mt-1 text-sm text-red-600"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label 
                    htmlFor="company" 
                    className="block mb-2 text-[#0A1220]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Agency / Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg text-[#0A1220] focus:outline-none focus:ring-2 focus:ring-[#117C92] ${
                      errors.company ? 'border-red-500' : 'border-gray-300'
                    }`}
                    style={{ 
                      minHeight: '48px',
                      fontFamily: 'var(--font-sans)',
                    }}
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? "company-error" : undefined}
                  />
                  {errors.company && (
                    <p 
                      id="company-error" 
                      className="mt-1 text-sm text-red-600"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {errors.company}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded text-white transition-all"
                  style={{ 
                    minHeight: '56px',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-serif)',
                    background: 'linear-gradient(180deg, var(--accentHero), var(--accentHero2))',
                    boxShadow: '0 12px 34px rgba(17,124,146,.22)',
                  }}
                >
                  Book a Clarity Call
                </button>
                <p 
                  className="text-center mt-3 text-gray-500 text-sm"
                  style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic' }}
                >
                  No pitch, just a clear path forward.
                </p>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 
                  className="mb-4 text-[#0A1220]"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  We'll Be In Touch
                </h3>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Expect an email within one business day to schedule your Fit Check.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}