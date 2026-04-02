import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { GlobalHeader } from "./components/GlobalHeader";
import { GlobalFooter } from "./components/GlobalFooter";
import { ExitIntentPopup } from "./components/ExitIntentPopup";
import { FloatingCTA } from "./components/FloatingCTA";
import { PageViewTracker } from "./components/PageViewTracker";
import { RouteMetaManager } from "./components/RouteMetaManager";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PartnerPage = lazy(() => import("./pages/PartnerPage"));
const CapabilitiesPage = lazy(() => import("./pages/CapabilitiesPage"));
const OurApproachPage = lazy(() => import("./pages/OurApproachPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const InsightsPage = lazy(() => import("./pages/InsightsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const SitemapPage = lazy(() => import("./pages/SitemapPage"));
const TalentAudit = lazy(() => import("./pages/TalentAudit"));
const AttractionDiagnosticPage = lazy(() => import("./pages/AttractionDiagnosticPage"));
const WhyEmployerBrandsFail = lazy(() => import("./pages/insights/WhyEmployerBrandsFail"));
const TheQuietCollapseOfJobBoardStrategy = lazy(() => import("./pages/insights/TheQuietCollapseOfJobBoardStrategy"));
const MostCompaniesAreAtStageOne = lazy(() => import("./pages/insights/MostCompaniesAreAtStageOne"));
const TheHiddenCostOfBadHiring = lazy(() => import("./pages/insights/TheHiddenCostOfBadHiring"));
const OptimizingForAISearch = lazy(() => import("./pages/insights/OptimizingForAISearch"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

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

// Loading component for lazy-loaded pages
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#117C92]"></div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <SkipLink />
          <ScrollToTop />
          <RouteMetaManager />
          <PageViewTracker />

          <GlobalHeader />

          <Suspense fallback={<PageLoader />}>
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
                element={<WhyEmployerBrandsFail />}
              />

              <Route
                path="/insights/job-board-strategy"
                element={<TheQuietCollapseOfJobBoardStrategy />}
              />

              <Route
                path="/insights/talent-maturity-gap"
                element={<MostCompaniesAreAtStageOne />}
              />

              <Route
                path="/insights/hidden-cost-bad-hiring"
                element={<TheHiddenCostOfBadHiring />}
              />

              <Route
                path="/insights/ai-search-optimization"
                element={<OptimizingForAISearch />}
              />

              <Route path="/blog" element={<Navigate to="/insights" replace />} />
              <Route path="/partner" element={<PartnerPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>

          <GlobalFooter />
          <ExitIntentPopup />
          <FloatingCTA />
        </div>
      </Router>
    </HelmetProvider>
  );
}
