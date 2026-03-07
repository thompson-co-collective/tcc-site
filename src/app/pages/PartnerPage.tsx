import { useEffect } from "react";
import { HeroSection } from "../components/HeroSection";
import { ServicesTicker } from "../components/ServicesTicker";
import { HowWePlugInSection } from "../components/HowWePlugInSection";
import { PartnerPackagesSection } from "../components/PartnerPackagesSection";
import { ProofSection } from "../components/ProofSection";
import { MeetCandiceSection } from "../components/MeetCandiceSection";
import { FaqSection } from "../components/FaqSection";
import { ContactSection } from "../components/ContactSection";

export function PartnerPage() {
  useEffect(() => {
    // Set page metadata
    document.title = "Thompson & Co Collective – Fractional Recruitment Marketing for Agency Partners";

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Thompson & Co Collective provides fractional talent attraction marketing and embedded recruitment marketing support for agency and consulting partners. Integrated partner support, not an outside vendor."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Thompson & Co Collective provides fractional talent attraction marketing and embedded recruitment marketing support for agency and consulting partners. Integrated partner support, not an outside vendor.";
      document.head.appendChild(meta);
    }

    // Add structured data for Organization
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Thompson & Co Collective",
      url: "https://thompsoncollective.co",
      logo: "https://thompsoncollective.co/logo.png",
      description:
        "Fractional recruitment marketing and employer branding consultancy for agency partners",
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@thompsoncollective.co",
        contactType: "Sales",
      },
    };

    // Add structured data for Service
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Fractional Recruitment Marketing for Agency Partners",
      provider: {
        "@type": "Organization",
        name: "Thompson & Co Collective",
      },
      serviceType: "Recruitment Marketing",
      areaServed: "US",
      description:
        "Embedded fractional recruitment marketing support for agency and consulting partners. Behind-the-scenes execution, co-led delivery, and client-facing specialist support.",
    };

    // Add structured data for FAQ
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you work under our brand or as Thompson & Co Collective?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can decide. We default to your brand — inside your tools, aligned to your quality standards, invisible to the client if that's what the relationship requires. When credible expert presence adds value, we can show up as a named specialist under your banner. Your account, your call.",
          },
        },
      ],
    };

    // Insert all schemas
    const scriptOrg = document.createElement("script");
    scriptOrg.type = "application/ld+json";
    scriptOrg.text = JSON.stringify(organizationSchema);
    document.head.appendChild(scriptOrg);

    const scriptService = document.createElement("script");
    scriptService.type = "application/ld+json";
    scriptService.text = JSON.stringify(serviceSchema);
    document.head.appendChild(scriptService);

    const scriptFaq = document.createElement("script");
    scriptFaq.type = "application/ld+json";
    scriptFaq.text = JSON.stringify(faqSchema);
    document.head.appendChild(scriptFaq);

    // Cleanup
    return () => {
      scriptOrg.remove();
      scriptService.remove();
      scriptFaq.remove();
    };
  }, []);

  return (
    <main id="main-content">
      <HeroSection />
      <ServicesTicker />
      <HowWePlugInSection />
      <PartnerPackagesSection />
      <ProofSection />
      <MeetCandiceSection />
      <FaqSection />
      <ContactSection />

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-white border-t border-gray-200 shadow-lg">
        <a
          href="#contact"
          className="block w-full text-center px-6 py-3 rounded text-white transition-colors"
          style={{
            minHeight: "48px",
            fontWeight: 600,
            fontFamily: "var(--font-serif)",
            background: "linear-gradient(180deg, var(--accentHero), var(--accentHero2))",
            boxShadow: "0 12px 34px rgba(17,124,146,.22)",
          }}
        >
          Explore Partner Support
        </a>
      </div>
    </main>
  );
}