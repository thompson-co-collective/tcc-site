import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { GlobalHeader } from "./components/GlobalHeader";
import { GlobalFooter } from "./components/GlobalFooter";
// import { PageViewTracker } from "./components/PageViewTracker"; // TEMP DISABLED
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { PartnerPage } from "./pages/PartnerPage";
import { CapabilitiesPage } from "./pages/CapabilitiesPage";
import { OurApproachPage } from "./pages/OurApproachPage";
import { AboutPage } from "./pages/AboutPage";
import { InsightsPage } from "./pages/InsightsPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { SitemapPage } from "./pages/SitemapPage";
import TalentAudit from "./pages/TalentAudit";
import { AttractionDiagnosticPage } from "./pages/AttractionDiagnosticPage";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Skip link component
function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0E5A6A] focus:text-white focus:rounded"
    >
      Skip to main content
    </a>
  );
}

// Placeholder pages
function PlaceholderPage({ title }: { title: string }) {
  return (
    <main id="main-content" className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className="mb-6"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 600,
            fontFamily: "var(--font-serif)",
            color: "#0A1220",
          }}
        >
          {title}
        </h1>
        <p
          className="text-gray-600 mb-8"
          style={{
            fontSize: "1.125rem",
            fontFamily: "var(--font-sans)",
          }}
        >
          This page is under construction and will be available soon.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 rounded text-white"
          style={{
            background: "linear-gradient(135deg, #117C92, #0E5A6A)",
            fontFamily: "var(--font-serif)",
            fontWeight: 600,
          }}
        >
          Return Home
        </a>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <SkipLink />
          <ScrollToTop />
          {/* PageViewTracker temporarily disabled to isolate runtime crash */}
          {/* <PageViewTracker /> */}

          <GlobalHeader />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/capabilities" element={<CapabilitiesPage />} />
            <Route path="/our-approach" element={<OurApproachPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/audit" element={<TalentAudit />} />

            {/* Redirect legacy URL */}
            <Route path="/talent-maturity-audit" element={<Navigate to="/audit" replace />} />

            <Route path="/attraction-diagnostic" element={<AttractionDiagnosticPage />} />
            <Route path="/insights" element={<InsightsPage />} />

            <Route
              path="/insights/why-employer-brands-fail"
              element={<PlaceholderPage title="Why Most Employer Brands Fail Before They Launch" />}
            />

            <Route
              path="/insights/job-board-strategy"
              element={<PlaceholderPage title="The Quiet Collapse of the Job Board Strategy" />}
            />

            <Route
              path="/insights/talent-maturity-gap"
              element={<PlaceholderPage title="Most Companies Are at Stage One" />}
            />

            <Route path="/blog" element={<Navigate to="/insights" replace />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
          </Routes>

          <GlobalFooter />
        </div>
      </Router>
    </HelmetProvider>
  );
}
