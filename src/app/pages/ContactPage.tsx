import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Clock } from "lucide-react";
import { trackEvent } from "../lib/analytics";
import { submitContactSubmission } from "../lib/contactSubmission";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    needHelp: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Please enter your company name";
    }

    if (!formData.needHelp) {
      newErrors.needHelp = "Please select what you need help with";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus("submitting");
    setSubmitErrorMessage("");
    try {
      const result = await submitContactSubmission(formData, "contact_page");
      if (!result.ok) {
        throw new Error(
          result.status
            ? `Contact submission failed with status ${result.status}`
            : `Contact submission failed with ${result.errorType}`
        );
      }

      setFormStatus("success");
    } catch (error) {
      console.error("Contact form submission failed", error);
      setSubmitErrorMessage(
        "We couldn't send your message right now. Please try again in a moment, or email hello@thompsoncollective.co."
      );
      setFormStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  if (formStatus === "success") {
    return (
      <main id="main-content" className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full"
            style={{
              background: 'rgba(17,124,146,0.1)',
            }}
          >
            <CheckCircle2 size={40} style={{ color: '#117C92' }} />
          </div>

          <h1 
            className="mb-6"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-serif)',
              color: '#0A1220',
            }}
          >
            Message received
          </h1>

          <p 
            className="mb-4 text-gray-600"
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
            }}
          >
            We respond within 1 business day.
          </p>

          <p 
            className="mb-10 text-gray-600"
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
            }}
          >
            Next: we'll review your note and recommend the right first step—whether that's a diagnostic call, a specific engagement model, or resources that make sense for where you are.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/capabilities"
              className="inline-flex items-center justify-center px-6 py-3 rounded transition-colors"
              style={{
                background: 'linear-gradient(135deg, #117C92, #0E5A6A)',
                color: 'white',
                fontFamily: 'var(--font-serif)',
                fontWeight: 600,
              }}
            >
              Explore Capabilities
            </Link>
            <Link
              to="/insights"
              className="inline-flex items-center justify-center px-6 py-3 rounded border-2 transition-colors hover:border-[#117C92]"
              style={{
                borderColor: '#E5E7EB',
                color: '#0A1220',
                fontFamily: 'var(--font-serif)',
                fontWeight: 600,
              }}
            >
              Read Insights
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content">
      {/* Hero */}
      <section 
        className="pt-32 pb-12 md:pt-40 md:pb-16"
        style={{
          background: `radial-gradient(
            ellipse 85% 65% at 68% 58%,
            rgba(17,124,146,0.14) 0%,
            rgba(17,124,146,0.08) 22%,
            rgba(17,124,146,0.03) 40%,
            rgba(17,124,146,0) 64%
          ),
          radial-gradient(
            ellipse 120% 90% at 50% -10%,
            rgba(255,255,255,0.04) 0%,
            rgba(255,255,255,0.015) 18%,
            rgba(255,255,255,0) 42%
          ),
          linear-gradient(
            135deg,
            #010308 0%,
            #02050b 18%,
            #040912 42%,
            #08131d 68%,
            #0d2a36 88%,
            #123f4c 100%
          )`,
          color: 'white',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="mb-6"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              fontFamily: 'var(--font-serif)',
            }}
          >
            Start here
          </h1>
          
          <p 
            className="text-white/80 max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(1.0625rem, 1.75vw, 1.1875rem)',
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
            }}
          >
            Tell us where you are and what you need. We respond within 1 business day with a clear next step—no pitch, just an honest assessment of fit and approach.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Signals */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>1 business day response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>No sales pitch</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              Join 200+ organizations who've improved their hiring outcomes
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {formStatus === "error" && (
              <div
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem" }}
              >
                {submitErrorMessage || "We couldn't send your message right now. Please try again in a moment."}
              </div>
            )}

            {/* Name */}
            <div>
              <label 
                htmlFor="name" 
                className="block mb-2"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Full Name <span style={{ color: '#117C92' }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#117C92]/20 focus:border-[#117C92]"
                style={{
                  borderColor: errors.name ? '#EF4444' : '#E5E7EB',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                }}
              />
              {errors.name && (
                <p id="name-error" role="alert" style={{ color: '#EF4444', fontSize: '0.875rem', marginTop: '0.5rem', fontFamily: 'var(--font-sans)' }}>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label 
                htmlFor="email" 
                className="block mb-2"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Work Email <span style={{ color: '#117C92' }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                autoComplete="email"
                className="w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#117C92]/20 focus:border-[#117C92]"
                style={{
                  borderColor: errors.email ? '#EF4444' : '#E5E7EB',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                }}
              />
              {errors.email && (
                <p id="email-error" role="alert" style={{ color: '#EF4444', fontSize: '0.875rem', marginTop: '0.5rem', fontFamily: 'var(--font-sans)' }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Company */}
            <div>
              <label 
                htmlFor="company" 
                className="block mb-2"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Company <span style={{ color: '#117C92' }}>*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!errors.company}
                aria-describedby={errors.company ? "company-error" : undefined}
                autoComplete="organization"
                className="w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#117C92]/20 focus:border-[#117C92]"
                style={{
                  borderColor: errors.company ? '#EF4444' : '#E5E7EB',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                }}
              />
              {errors.company && (
                <p id="company-error" role="alert" style={{ color: '#EF4444', fontSize: '0.875rem', marginTop: '0.5rem', fontFamily: 'var(--font-sans)' }}>
                  {errors.company}
                </p>
              )}
            </div>

            {/* What do you need help with? */}
            <div>
              <label 
                htmlFor="needHelp" 
                className="block mb-2"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                What do you need help with? <span style={{ color: '#117C92' }}>*</span>
              </label>
              <select
                id="needHelp"
                name="needHelp"
                value={formData.needHelp}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!errors.needHelp}
                aria-describedby={errors.needHelp ? "needHelp-error" : undefined}
                className="w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#117C92]/20 focus:border-[#117C92]"
                style={{
                  borderColor: errors.needHelp ? '#EF4444' : '#E5E7EB',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                }}
              >
                <option value="">Select an option</option>
                <option value="funnel-conversion">Talent funnel conversion / drop-off</option>
                <option value="candidate-experience">Candidate experience (apply → offer)</option>
                <option value="employer-brand">Employer brand clarity / EVP system</option>
                <option value="recruitment-marketing">Recruitment marketing assets (job ads, careers page, outreach)</option>
                <option value="ai-governance">AI-safe messaging / governance</option>
                <option value="vendor-governance">Vendor / media governance</option>
                <option value="not-sure">Not sure yet (diagnose)</option>
              </select>
              {errors.needHelp && (
                <p id="needHelp-error" role="alert" style={{ color: '#EF4444', fontSize: '0.875rem', marginTop: '0.5rem', fontFamily: 'var(--font-sans)' }}>
                  {errors.needHelp}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label 
                htmlFor="message" 
                className="block mb-2"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-sans)',
                  color: '#0A1220',
                }}
              >
                Tell us more (optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#117C92]/20 focus:border-[#117C92]"
                style={{
                  borderColor: '#E5E7EB',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  resize: 'vertical',
                }}
                placeholder="Share any context that helps us understand where you are and what you're trying to solve."
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full px-8 py-4 rounded text-white transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  minHeight: '56px',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-serif)',
                  background: 'linear-gradient(180deg, #117C92, #0E5A6A)',
                  boxShadow: '0 12px 34px rgba(17,124,146,.22)',
                }}
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </button>
              <p 
                className="text-center mt-3 text-gray-500 text-sm"
                style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic' }}
              >
                No pitch, just a clear path forward.
              </p>
            </div>

            {/* Privacy Line */}
            <p 
              className="text-center text-gray-500 text-xs"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              We respect your privacy. Your information is used solely to respond to your inquiry and will never be shared with third parties.
            </p>
          </form>

          {/* Calendly Secondary Option */}
          <div className="mt-12 pt-12 border-t border-gray-200 text-center">
            <p 
              className="text-gray-600 mb-3"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem' }}
            >
              Prefer to schedule directly?
            </p>
            <a
              href="https://calendly.com/thompsonco/20min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#117C92] underline hover:text-[#0E5A6A] transition-colors"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', fontWeight: 500 }}
              onClick={() => {
                trackEvent("calendly_clicked", {
                  event_category: "External Link",
                  event_label: "Calendly",
                });
              }}
            >
              Book 20 minutes
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-center mb-12"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 600,
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
              fontFamily: 'var(--font-serif)',
              color: '#0A1220',
            }}
          >
            What happens next
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div 
                className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full"
                style={{
                  background: 'rgba(17,124,146,0.1)',
                  color: '#117C92',
                }}
              >
                <Clock size={24} />
              </div>
              <h3 
                className="mb-2"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-serif)',
                  color: '#0A1220',
                }}
              >
                Within 1 business day
              </h3>
              <p 
                className="text-gray-600"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                We review your message and respond with initial thoughts
              </p>
            </div>

            <div className="text-center">
              <div 
                className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full"
                style={{
                  background: 'rgba(17,124,146,0.1)',
                  color: '#117C92',
                }}
              >
                <CheckCircle2 size={24} />
              </div>
              <h3 
                className="mb-2"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-serif)',
                  color: '#0A1220',
                }}
              >
                Clarity call
              </h3>
              <p 
                className="text-gray-600"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                20-30 minute conversation to understand where you are
              </p>
            </div>

            <div className="text-center">
              <div 
                className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full"
                style={{
                  background: 'rgba(17,124,146,0.1)',
                  color: '#117C92',
                }}
              >
                <CheckCircle2 size={24} />
              </div>
              <h3 
                className="mb-2"
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-serif)',
                  color: '#0A1220',
                }}
              >
                Clear next step
              </h3>
              <p 
                className="text-gray-600"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Honest recommendation—whether that's an engagement, resources, or "not right now"
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
