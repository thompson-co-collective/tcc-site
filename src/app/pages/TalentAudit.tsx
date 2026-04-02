import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import ampersandWhite from "../../assets/ampersand-white.png";

// Lazy load confetti
const loadConfetti = () => import('canvas-confetti');

// Types
type Answer = 0 | 1 | 2 | null;
type Stage = 'intro' | 'questions' | 'results';
type Band = 'Nascent' | 'Developing' | 'Aligned' | 'Optimized';

interface AuditState {
  answers: Answer[];
  currentQuestionIndex: number;
  stage: Stage;
  score: number | null;
  band: Band | null;
}

// Constants
const STORAGE_KEY = 'tcc_audit_v3';
const UTM_STORAGE_KEY = 'tcc_audit_utms';
const CALENDLY_URL = 'https://calendly.com/candice-thompsoncollective/clarity-call';

const QUESTIONS = [
  'We have defined 12–18 month hiring priorities tied to business strategy, and we review them quarterly.',
  'We have identified mission-critical roles (role families) and documented what "qualified" means beyond requirements (skills, traits, dealbreakers).',
  'We have a documented EVP informed by real employee/candidate insight (not leadership-only).',
  'Our talent narrative is governed: recruiters and hiring leaders communicate the same core story consistently.',
  'Our EVP claims are evidence-backed (proof points mapped), and we can defend them across channels.',
  'We monitor "message–reality drift" (where candidate experience contradicts the promise) and adjust narrative or operations accordingly.',
  'We have an always-on content engine beyond job postings and publish on a defined cadence.',
  'Our careers site and priority job content have been updated within 12 months and are structured to convert (clarity, scannability, mobile).',
  'We actively manage AI-era first impressions: what candidates find in search/AI/review platforms is consistent with our intended narrative (SEO/GEO/AEO basics in place).',
  'We know which channels drive qualified hires by role family, and we reallocate budget/effort based on performance.',
  'We have job ad governance (message consistency, inclusive language, quality control) and treat job ads as "claims" that must match EVP.',
  'We track apply flow friction, candidate communication SLAs, and candidate feedback — and we act on it.',
  'We have baseline funnel analytics (source quality, conversion, time-to-decision, offer acceptance) and use the data to decide what changes next.',
];

const BAND_CONTENT = {
  Nascent: {
    range: '0–7',
    meaning: 'Hiring is happening, but the system is informal. Outcomes feel inconsistent and hard to diagnose.',
    priorities: [
      'Establish an EVP-lite: 3–5 defensible claims + proof.',
      'Fix conversion choke points (job clarity + apply flow) before adding spend.',
      'Stand up one always-on channel with a weekly publishing cadence.',
    ],
    next3: [
      'Define "qualified" for 1–2 mission-critical role families (beyond requirements).',
      'Set 2–3 baseline metrics (apply completion, time-to-decision, offer acceptance) and review monthly.',
      'Standardize candidate communication expectations (SLA + templates) to reduce drop-off.',
    ],
  },
  Developing: {
    range: '8–14',
    meaning: 'Pieces exist, but consistency and accountability are weak across channels and leaders.',
    priorities: [
      'Govern narrative across recruiters + hiring leaders; standardize job ad claims.',
      'Implement clean baselines by role family (source quality + conversion).',
      'Turn EVP themes into proof-led assets (specificity beats "culture language").',
    ],
    next3: [
      'Build a simple content cadence (weekly/biweekly) tied to priority roles.',
      'Identify the top 2 friction points (apply steps, screening lag, scheduling) and fix them.',
      'Create a lightweight proof map (claims → evidence → where it lives on-site/ads/AI-visible content).',
    ],
  },
  Aligned: {
    range: '15–20',
    meaning: 'You have a coherent foundation; performance is limited by optimization loops and scale discipline.',
    priorities: [
      'Optimize funnel: apply starts→completes, time-to-decision, offer→accept.',
      'Scale distribution: coordinate paid/owned/earned to reduce channel waste.',
      'Tighten AI/search/review footprint to reduce narrative drift.',
    ],
    next3: [
      'Segment by role family (2–3 variants) for message + channel strategy.',
      'Add quarterly governance checkpoints (job ads, landing pages, reviews, EVP proof).',
      'Enable hiring leaders with a simple talk track + proof points to keep the story consistent "in the room."',
    ],
  },
  Optimized: {
    range: '21–26',
    meaning: 'Strong governance + measurement. The opportunity is scale, resilience, and defensibility.',
    priorities: [
      'Expand role-family segmentation (message + channel strategy).',
      'Operationalize narrative defense (monitoring + response playbook).',
      'Run a quarterly improvement cadence with benchmarks and decisions.',
    ],
    next3: [
      'Build a signal-monitoring routine (reviews, search, AI summaries, candidate feedback) with owner + SLA.',
      'Introduce test-and-learn discipline (message/creative tests tied to conversion + quality, not clicks).',
      'Create a 1-page quarterly readout (what moved, why, what\'s next) for exec visibility.',
    ],
  },
};

// Helper: Calculate band from score
const calculateBand = (score: number): Band => {
  if (score <= 7) return 'Nascent';
  if (score <= 14) return 'Developing';
  if (score <= 20) return 'Aligned';
  return 'Optimized';
};

// Helper: Fire confetti
const fireConfetti = async () => {
  const confetti = (await loadConfetti()).default;
  const duration = 1200;
  const end = Date.now() + duration;

  const colors = ['#117C92', '#0E5A6A', '#0F2A2A'];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

// Segmented Control Component
const SegmentedControl: React.FC<{
  value: Answer;
  onChange: (value: 0 | 1 | 2) => void;
  labels: [string, string, string];
}> = (props: {
  value: Answer;
  onChange: (value: 0 | 1 | 2) => void;
  labels: [string, string, string];
}) => {
  const { value, onChange, labels } = props;
  return (
    <div
      className="inline-flex rounded-lg border border-gray-300 bg-white overflow-hidden"
      role="radiogroup"
      aria-label="Answer selection"
    >
      {labels.map((label: string, index: number) => {
        const val = index as 0 | 1 | 2;
        const isSelected = value === val;
        return (
          <button
            key={val}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange(val)}
            className="px-6 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-[#117C92] focus:z-10"
            style={{
              minWidth: '100px',
              minHeight: '44px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9375rem',
              fontWeight: 500,
              backgroundColor: isSelected ? '#117C92' : 'white',
              color: isSelected ? 'white' : '#0A1220',
              borderRight: index < 2 ? '1px solid #E5E7EB' : 'none',
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

// Main Component
export default function TalentAudit() {
  const [state, setState] = useState<AuditState>({
    answers: Array(13).fill(null),
    currentQuestionIndex: 0,
    stage: 'intro',
    score: null,
    band: null,
  });

  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [showRestoredNotification, setShowRestoredNotification] = useState(false);
  const [showBaselineMessage, setShowBaselineMessage] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resultsRef = useRef<HTMLDivElement>(null);

  // Set document title
  useEffect(() => {
    document.title = 'Talent Maturity Audit | Thompson & Co Collective';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Assess your organization's talent attraction maturity. Get a baseline diagnostic and clear next steps for employer brand and recruitment marketing improvement."
      );
    }
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'noindex');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex';
      document.head.appendChild(meta);
    }
  }, []);

  // Persist UTMs on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utms: Record<string, string> = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((key) => {
      const val = params.get(key);
      if (val) utms[key] = val;
    });
    if (Object.keys(utms).length > 0) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utms));
    }
  }, []);

  // Restore state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setState((prev: AuditState) => ({ ...prev, answers: parsed.answers || prev.answers }));
        setShowRestoredNotification(true);
        setTimeout(() => setShowRestoredNotification(false), 3000);
      } catch (e) {
        console.error('Failed to restore audit state', e);
      }
    }
  }, []);

  // Save to localStorage whenever answers change
  useEffect(() => {
    if (state.answers.some((a: Answer) => a !== null)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers: state.answers }));
    }
  }, [state.answers]);

  // Analytics placeholder
  const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', eventName, params);
    }
    if (typeof window !== 'undefined' && Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({ event: eventName, ...params });
    }
  };

  // Clear saved answers
  const handleClearAnswers = () => {
    localStorage.removeItem(STORAGE_KEY);
    setState({
      answers: Array(13).fill(null),
      currentQuestionIndex: 0,
      stage: 'intro',
      score: null,
      band: null,
    });
    setEmailSubmitted(false);
    setEmailValue('');
    setShowClearConfirm(false);
  };

  // Start audit
  const handleStartAudit = () => {
    setState((prev: AuditState) => ({ ...prev, stage: 'questions' }));
    trackEvent('audit_started', { page: '/audit', cta_name: 'Start Audit' });
  };

  // Update answer
  const handleAnswerChange = (index: number, value: 0 | 1 | 2) => {
    const newAnswers = [...state.answers];
    newAnswers[index] = value;
    setState((prev: AuditState) => ({ ...prev, answers: newAnswers }));
  };

  // Submit audit
  const handleSubmit = async () => {
    const unanswered = state.answers
      .map((a: Answer, i: number) => (a === null ? i : null))
      .filter((i): i is number => i !== null);

    if (unanswered.length > 0) {
      // Scroll to first unanswered
      const firstMissing = unanswered[0]!;
      setState((prev: AuditState) => ({ ...prev, currentQuestionIndex: firstMissing }));
      return;
    }

    // Calculate score
    const totalScore = state.answers.reduce((sum: number, val: Answer) => sum + (val || 0), 0);
    const band = calculateBand(totalScore);

    setState((prev: AuditState) => ({ ...prev, score: totalScore, band }));

    // Fire confetti
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      await fireConfetti();
    }

    // Show baseline message
    setShowBaselineMessage(true);
    setTimeout(() => {
      setShowBaselineMessage(false);
      setState((prev: AuditState) => ({ ...prev, stage: 'results' }));
      // Scroll to results
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }, 1500);

    trackEvent('audit_completed', {
      audit_score: totalScore,
      maturity_band: band,
      page: '/audit',
    });
  };

  // Email capture
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValue || state.score === null || !state.band) return;

    setIsSubmitting(true);

    // Mock API call (replace with real HubSpot endpoint)
    try {
      const response = await fetch('/api/audit-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailValue,
          score: state.score,
          band: state.band,
          utms: JSON.parse(sessionStorage.getItem(UTM_STORAGE_KEY) || '{}'),
        }),
      }).catch(() => ({ ok: true })); // Mock success on network error

      if (response.ok) {
        setEmailSubmitted(true);
        trackEvent('audit_email_captured', {
          audit_score: state.score,
          maturity_band: state.band,
          page: '/audit',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calendly click
  const handleCalendlyClick = () => {
    trackEvent('calendly_clicked', { page: '/audit', location: 'results_cta' });
  };

  const currentQuestion = QUESTIONS[state.currentQuestionIndex];
  const currentAnswer = state.answers[state.currentQuestionIndex];
  const isLastQuestion = state.currentQuestionIndex === QUESTIONS.length - 1;
  const allAnswered = state.answers.every((a: Answer) => a !== null);

  return (
    <div className="min-h-screen bg-white">
      {/* Utility Bar with Clear Button (only shown during questions/results) */}
      {state.stage !== 'intro' && (
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-end">
            <button
              onClick={() => setShowClearConfirm(true)}
              className="text-sm text-gray-500 hover:text-[#117C92] transition-colors"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              Clear saved answers
            </button>
          </div>
        </div>
      )}

      {/* Restored Notification */}
      {showRestoredNotification && (
        <div
          className="fixed top-20 right-4 bg-white border border-gray-200 shadow-lg rounded-lg px-4 py-3 animate-in fade-in slide-in-from-top-2 duration-300 z-50"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem',
            color: '#0A1220',
          }}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-[#117C92]" />
            <span>Progress restored.</span>
          </div>
        </div>
      )}

      {/* Clear Confirmation Dialog */}
      {showClearConfirm && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
          onClick={() => setShowClearConfirm(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              className="mb-3"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                fontWeight: 500,
                color: '#0A1220',
              }}
            >
              Clear all saved answers?
            </h3>
            <p
              className="mb-6"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: '#4B5563',
              }}
            >
              This will permanently delete your progress and reset the audit. You'll need to start
              over.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleClearAnswers}
                className="px-4 py-2 rounded-md bg-[#117C92] text-white hover:bg-[#0E5A6A] transition-colors"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                }}
              >
                Clear answers
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className={state.stage === 'intro' ? '' : 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20'}>
        {/* INTRO STAGE */}
        {state.stage === 'intro' && (
          <>
            {/* Full-Bleed Hero Band - Matching homepage */}
            <div 
              className="relative w-full overflow-hidden"
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
                minHeight: '240px',
              }}
            >
              {/* Background overlays */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(600px 300px at 80% 20%, rgba(17,124,146,0.18), transparent 70%)',
                }}
              />
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, transparent 0%, rgba(17,124,146,0.08) 50%, transparent 100%)',
                }}
              />
              
              {/* AMP — Echo Layer (behind base, blurred depth) */}
              <div
                className="amp-echo"
                style={{
                  position: 'absolute',
                  right: '-30%',
                  top: '50%',
                  transform: 'translateY(-50%) rotate(-20deg) translate(-18px, 22px)',
                  width: 'min(840px, 39vw)',
                  height: 'auto',
                  opacity: 0.03,
                  pointerEvents: 'none',
                  zIndex: 0,
                  filter: 'blur(24px)',
                  maskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.8) 70%, white 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.8) 70%, white 100%)',
                }}
                aria-hidden="true"
              >
                <img
                  src={ampersandWhite}
                  alt=""
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                  draggable={false}
                />
              </div>

              {/* AMP — Base Layer (main white ampersand) */}
              <div
                className="amp-base"
                style={{
                  position: 'absolute',
                  right: '-30%',
                  top: '50%',
                  transform: 'translateY(-50%) rotate(-20deg)',
                  width: 'min(840px, 39vw)',
                  height: 'auto',
                  opacity: 0.06,
                  pointerEvents: 'none',
                  zIndex: 0,
                  filter: 'blur(1px)',
                  maskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.8) 70%, white 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.8) 70%, white 100%)',
                }}
                aria-hidden="true"
              >
                <img
                  src={ampersandWhite}
                  alt=""
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                  draggable={false}
                />
              </div>

              {/* Mobile-specific ampersand adjustments */}
              <style>{`
                @media (max-width: 768px) {
                  .amp-base {
                    opacity: 0.04 !important;
                    right: -45% !important;
                    width: 57vw !important;
                  }
                  .amp-echo {
                    opacity: 0.02 !important;
                    right: -45% !important;
                    width: 57vw !important;
                    filter: blur(20px) !important;
                  }
                }
              `}</style>
              
              <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-12 md:pb-16" style={{ zIndex: 2 }}>
                <div className="max-w-2xl mx-auto text-center">
                  <h1
                    className="mb-5"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                      fontWeight: 400,
                      lineHeight: 1.15,
                      letterSpacing: '-0.02em',
                      color: 'white',
                    }}
                  >
                    Talent Maturity Audit
                  </h1>
                  <p
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.0625rem',
                      lineHeight: 1.55,
                      color: 'rgba(255,255,255,0.9)',
                    }}
                  >
                    <strong className="text-white">Get your talent attraction baseline in 5 minutes.</strong> Discover exactly what to fix first — no sales pitch, just actionable insights used by 200+ organizations.
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-white/80">
                      <span className="text-green-400">✓</span>
                      <span className="text-sm">Free assessment</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <span className="text-green-400">✓</span>
                      <span className="text-sm">5-minute completion</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <span className="text-green-400">✓</span>
                      <span className="text-sm">Actionable results</span>
                    </div>
                  </div>
                  <p
                    className="mb-0"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9375rem',
                      lineHeight: 1.5,
                      color: 'rgba(255,255,255,0.65)',
                    }}
                  >
                    Built for AI-shaped first impressions, conversion friction, and credibility gaps.
                  </p>
                </div>
              </div>
            </div>

            {/* Compact content module */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="max-w-2xl mx-auto">
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    color: '#0A1220',
                  }}
                >
                  What you'll get
                </h2>
                <ul
                  className="mb-7 space-y-3"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.65,
                    color: '#4B5563',
                  }}
                >
                  <li className="flex items-start gap-3">
                    <span className="text-[#117C92] mt-1 flex-shrink-0">•</span>
                    <span>
                      <strong style={{ fontWeight: 600, color: '#0A1220' }}>Baseline score + maturity band</strong> across 13 drivers of hiring outcomes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#117C92] mt-1 flex-shrink-0">•</span>
                    <span>
                      <strong style={{ fontWeight: 600, color: '#0A1220' }}>System snapshot</strong> showing what's built vs. where opportunity exists — and your next best actions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#117C92] mt-1 flex-shrink-0">•</span>
                    <span>
                      <strong style={{ fontWeight: 600, color: '#0A1220' }}>Six tailored recommendations:</strong> three moves to improve performance now, plus three to strengthen long-term durability
                    </span>
                  </li>
                </ul>

                {/* CTA */}
                <div className="text-center">
                  <button
                    onClick={handleStartAudit}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-[#117C92] text-white hover:bg-[#0E5A6A] transition-all shadow-sm hover:shadow-md group"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.0625rem',
                      fontWeight: 500,
                      minHeight: '48px',
                    }}
                  >
                    Get your baseline
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </button>
                  <p
                    className="mt-3"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8125rem',
                      color: '#9CA3AF',
                    }}
                  >
                    Instant results.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* QUESTIONS STAGE */}
        {state.stage === 'questions' && !showBaselineMessage && (
          <div className="max-w-2xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: '#6B7280',
                  }}
                >
                  Question {state.currentQuestionIndex + 1} of {QUESTIONS.length}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    color: '#9CA3AF',
                  }}
                >
                  {Math.round(((state.currentQuestionIndex + 1) / QUESTIONS.length) * 100)}%
                </span>
              </div>
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#117C92] transition-all duration-300"
                  style={{
                    width: `${((state.currentQuestionIndex + 1) / QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: '#0A1220',
                }}
              >
                {currentQuestion}
              </h2>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: '#6B7280',
                  }}
                >
                  How true is this?
                </span>
                <SegmentedControl
                  value={currentAnswer}
                  onChange={(val) => handleAnswerChange(state.currentQuestionIndex, val)}
                  labels={['Not true', 'Partly true', 'Very true']}
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-3 justify-between">
              <button
                onClick={() =>
                  setState((prev) => ({
                    ...prev,
                    currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1),
                  }))
                }
                disabled={state.currentQuestionIndex === 0}
                className="inline-flex items-center px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  minHeight: '44px',
                }}
              >
                <ArrowLeft className="mr-2" size={18} />
                Previous
              </button>

              {!isLastQuestion ? (
                <button
                  onClick={() =>
                    setState((prev) => ({
                      ...prev,
                      currentQuestionIndex: prev.currentQuestionIndex + 1,
                    }))
                  }
                  disabled={currentAnswer === null}
                  className="inline-flex items-center px-6 py-3 rounded-md bg-[#117C92] text-white hover:bg-[#0E5A6A] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    minHeight: '44px',
                  }}
                >
                  Next
                  <ArrowRight className="ml-2" size={18} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!allAnswered}
                  className="inline-flex items-center px-8 py-3 rounded-md bg-[#117C92] text-white hover:bg-[#0E5A6A] disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm hover:shadow-md"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.0625rem',
                    fontWeight: 500,
                    minHeight: '44px',
                  }}
                >
                  Submit audit
                  <ArrowRight className="ml-2" size={20} />
                </button>
              )}
            </div>
          </div>
        )}

        {/* BASELINE MESSAGE (shown briefly after submit) */}
        {showBaselineMessage && (
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#117C92]/10 mb-6">
              <CheckCircle2 size={32} className="text-[#117C92]" />
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                fontWeight: 500,
                color: '#0A1220',
              }}
            >
              Baseline established.
            </h2>
          </div>
        )}

        {/* RESULTS STAGE */}
        {state.stage === 'results' && state.band && state.score !== null && (
          <div ref={resultsRef}>
            {/* Full-Bleed Results Hero - Full screen width */}
            <div 
              className="relative w-full overflow-hidden -mt-12 md:-mt-20"
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
                minHeight: '364px',
              }}
            >
              {/* Background overlays */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(600px 300px at 80% 20%, rgba(17,124,146,0.18), transparent 70%)',
                }}
              />
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, transparent 0%, rgba(17,124,146,0.08) 50%, transparent 100%)',
                }}
              />
              
              {/* AMP — Echo Layer (behind base, blurred depth) */}
              <div
                className="amp-echo"
                style={{
                  position: 'absolute',
                  right: '-30%',
                  top: '50%',
                  transform: 'translateY(-50%) rotate(-20deg) translate(-18px, 22px)',
                  width: 'min(840px, 39vw)',
                  height: 'auto',
                  opacity: 0.03,
                  pointerEvents: 'none',
                  zIndex: 0,
                  filter: 'blur(24px)',
                  maskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.8) 70%, white 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.8) 70%, white 100%)',
                }}
                aria-hidden="true"
              >
                <img
                  src={ampersandWhite}
                  alt=""
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                  draggable={false}
                />
              </div>

              {/* AMP — Base Layer (main white ampersand) */}
              <div
                className="amp-base"
                style={{
                  position: 'absolute',
                  right: '-30%',
                  top: '50%',
                  transform: 'translateY(-50%) rotate(-20deg)',
                  width: 'min(840px, 39vw)',
                  height: 'auto',
                  opacity: 0.06,
                  pointerEvents: 'none',
                  zIndex: 0,
                  filter: 'blur(1px)',
                  maskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.8) 70%, white 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.8) 70%, white 100%)',
                }}
                aria-hidden="true"
              >
                <img
                  src={ampersandWhite}
                  alt=""
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                  draggable={false}
                />
              </div>

              <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12" style={{ zIndex: 2 }}>
                <div className="max-w-3xl mx-auto text-center">
                  {/* Score Badge */}
                  <div
                    className="inline-block mb-3 px-4 py-2 rounded-full"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: 'rgba(255, 255, 255, 0.9)',
                      }}
                    >
                      Your Score
                    </span>
                  </div>

                  {/* Score Number */}
                  <div
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(2.5rem, 7vw, 4rem)',
                      fontWeight: 400,
                      lineHeight: 1,
                      color: 'white',
                    }}
                  >
                    {state.score}
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.5em' }}>/26</span>
                  </div>

                  {/* Band Name */}
                  <h2
                    className="mb-6"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.75rem',
                      fontWeight: 500,
                      color: 'white',
                    }}
                  >
                    {state.band}
                  </h2>

                  {/* What this means - MOVED INSIDE HERO */}
                  <div 
                    className="p-5 rounded-lg max-w-4xl mx-auto"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <h3
                      className="mb-2"
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.0625rem',
                        fontWeight: 500,
                        color: 'white',
                      }}
                    >
                      What this means
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                        lineHeight: 1.5,
                        color: 'rgba(255, 255, 255, 0.85)',
                      }}
                    >
                      {BAND_CONTENT[state.band].meaning}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Below Hero */}
            <div className="bg-white">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
                <div className="max-w-3xl mx-auto">
                  {/* Email Capture - Above the fold, just below hero */}
                  {!emailSubmitted ? (
                    <div className="mb-10 p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
                    <h3
                      className="mb-2 text-center"
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.0625rem',
                        fontWeight: 500,
                        color: '#0A1220',
                      }}
                    >
                      Want a copy of your results + recommended next steps?
                    </h3>
                    <p
                      className="mb-5 text-center"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        color: '#6B7280',
                      }}
                    >
                      No spam. This is just your score and what to do next.
                    </p>
                    <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                      <div className="flex gap-3">
                        <input
                          type="email"
                          value={emailValue}
                          onChange={(e) => setEmailValue(e.target.value)}
                          placeholder="your@email.com"
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#117C92] focus:border-transparent"
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.9375rem',
                            minHeight: '44px',
                          }}
                        />
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-3 rounded-md bg-[#117C92] text-white hover:bg-[#0E5A6A] disabled:opacity-50 transition-colors"
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.9375rem',
                            fontWeight: 500,
                            minHeight: '44px',
                          }}
                        >
                          {isSubmitting ? 'Sending...' : 'Send my results'}
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="mb-10 text-center p-4 rounded-lg bg-green-50 border border-green-200">
                    <div className="inline-flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-green-600" />
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.9375rem',
                          fontWeight: 500,
                          color: '#16A34A',
                        }}
                      >
                        Sent. Check your inbox.
                      </span>
                    </div>
                  </div>
                )}

                {/* System Snapshot */}
                <div className="mb-10 p-6 bg-gray-50 rounded-lg">
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      fontWeight: 500,
                      color: '#0A1220',
                    }}
                  >
                    System Snapshot
                  </h3>
                  <p
                    className="mb-6"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      color: '#6B7280',
                    }}
                  >
                    What's strong vs. where opportunity exists across the systems that drive hiring outcomes.
                  </p>
                  
                  <div className="space-y-4">
                {/* Strategy & Ownership (Q1-Q2) */}
                {(() => {
                  const avg = (state.answers[0]! + state.answers[1]!) / 2;
                  const isStrong = avg >= 1.5;
                  return (
                    <div className="flex items-start gap-3">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
                        style={{
                          backgroundColor: isStrong ? 'rgba(17,124,146,0.1)' : 'rgba(251,146,60,0.1)',
                          color: isStrong ? '#117C92' : '#EA580C',
                          fontFamily: 'var(--font-sans)',
                        }}
                      >
                        {isStrong ? 'Strong' : 'Opportunity'}
                      </span>
                      <div className="flex-1">
                        <h4
                          className="mb-1"
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '0.9375rem',
                            fontWeight: 500,
                            color: '#0A1220',
                          }}
                        >
                          Strategy & Ownership
                        </h4>
                        <p
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.8125rem',
                            lineHeight: 1.5,
                            color: '#6B7280',
                          }}
                        >
                          Hiring priorities and role clarity are defined and reviewed.
                        </p>
                      </div>
                    </div>
                  );
                })()}

                {/* Narrative & Proof (Q3-Q6) */}
                {(() => {
                  const avg = (state.answers[2]! + state.answers[3]! + state.answers[4]! + state.answers[5]!) / 4;
                  const isStrong = avg >= 1.5;
                  return (
                    <div className="flex items-start gap-3">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
                        style={{
                          backgroundColor: isStrong ? 'rgba(17,124,146,0.1)' : 'rgba(251,146,60,0.1)',
                          color: isStrong ? '#117C92' : '#EA580C',
                          fontFamily: 'var(--font-sans)',
                        }}
                      >
                        {isStrong ? 'Strong' : 'Opportunity'}
                      </span>
                      <div className="flex-1">
                        <h4
                          className="mb-1"
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '0.9375rem',
                            fontWeight: 500,
                            color: '#0A1220',
                          }}
                        >
                          Narrative & Proof
                        </h4>
                        <p
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.8125rem',
                            lineHeight: 1.5,
                            color: '#6B7280',
                          }}
                        >
                          EVP claims are consistent, evidenced, and governed.
                        </p>
                      </div>
                    </div>
                  );
                })()}

                {/* Visibility & AI (Q7-Q9) */}
                {(() => {
                  const avg = (state.answers[6]! + state.answers[7]! + state.answers[8]!) / 3;
                  const isStrong = avg >= 1.5;
                  return (
                    <div className="flex items-start gap-3">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
                        style={{
                          backgroundColor: isStrong ? 'rgba(17,124,146,0.1)' : 'rgba(251,146,60,0.1)',
                          color: isStrong ? '#117C92' : '#EA580C',
                          fontFamily: 'var(--font-sans)',
                        }}
                      >
                        {isStrong ? 'Strong' : 'Opportunity'}
                      </span>
                      <div className="flex-1">
                        <h4
                          className="mb-1"
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '0.9375rem',
                            fontWeight: 500,
                            color: '#0A1220',
                          }}
                        >
                          Visibility & AI
                        </h4>
                        <p
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.8125rem',
                            lineHeight: 1.5,
                            color: '#6B7280',
                          }}
                        >
                          First impressions in search/AI/reviews are managed.
                        </p>
                      </div>
                    </div>
                  );
                })()}

                {/* Governance (Q10-Q11) */}
                {(() => {
                  const avg = (state.answers[9]! + state.answers[10]!) / 2;
                  const isStrong = avg >= 1.5;
                  return (
                    <div className="flex items-start gap-3">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
                        style={{
                          backgroundColor: isStrong ? 'rgba(17,124,146,0.1)' : 'rgba(251,146,60,0.1)',
                          color: isStrong ? '#117C92' : '#EA580C',
                          fontFamily: 'var(--font-sans)',
                        }}
                      >
                        {isStrong ? 'Strong' : 'Opportunity'}
                      </span>
                      <div className="flex-1">
                        <h4
                          className="mb-1"
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '0.9375rem',
                            fontWeight: 500,
                            color: '#0A1220',
                          }}
                        >
                          Governance
                        </h4>
                        <p
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.8125rem',
                            lineHeight: 1.5,
                            color: '#6B7280',
                          }}
                        >
                          Channel spend and performance are tracked by role family.
                        </p>
                      </div>
                    </div>
                  );
                })()}

                {/* Experience & Measurement (Q12-Q13) */}
                {(() => {
                  const avg = (state.answers[11]! + state.answers[12]!) / 2;
                  const isStrong = avg >= 1.5;
                  return (
                    <div className="flex items-start gap-3">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
                        style={{
                          backgroundColor: isStrong ? 'rgba(17,124,146,0.1)' : 'rgba(251,146,60,0.1)',
                          color: isStrong ? '#117C92' : '#EA580C',
                          fontFamily: 'var(--font-sans)',
                        }}
                      >
                        {isStrong ? 'Strong' : 'Opportunity'}
                      </span>
                      <div className="flex-1">
                        <h4
                          className="mb-1"
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '0.9375rem',
                            fontWeight: 500,
                            color: '#0A1220',
                          }}
                        >
                          Experience & Measurement
                        </h4>
                        <p
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.8125rem',
                            lineHeight: 1.5,
                            color: '#6B7280',
                          }}
                        >
                          Funnel conversion and decision metrics drive optimizations.
                        </p>
                      </div>
                    </div>
                  );
                })()}
                  </div>
                </div>

                {/* Top 3 Priorities */}
                <div className="mb-10">
              <h3
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: '#0A1220',
                }}
              >
                Your top 3 priorities
              </h3>
              <ol className="space-y-4">
                {BAND_CONTENT[state.band].priorities.map((priority, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full"
                      style={{
                        backgroundColor: 'rgba(17, 124, 146, 0.1)',
                        fontFamily: 'var(--font-serif)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: '#117C92',
                      }}
                    >
                      {i + 1}
                    </span>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        color: '#0A1220',
                      }}
                    >
                      {priority}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Next 3 Considerations */}
            <div className="mb-10">
              <h3
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: '#0A1220',
                }}
              >
                Next 3 considerations
              </h3>
              <ul className="space-y-3">
                {BAND_CONTENT[state.band].next3.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span style={{ color: '#117C92', fontSize: '1.25rem', lineHeight: 1.7 }}>•</span>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                        lineHeight: 1.7,
                        color: '#0A1220',
                      }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Primary CTA */}
            <div className="text-center p-8 bg-gradient-to-br from-[#117C92]/5 to-[#0F2A2A]/5 rounded-lg">
              <p
                className="mb-2"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#6B7280',
                }}
              >
                Not sure where to begin?
              </p>
              <h3
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: '#0A1220',
                }}
              >
                Ready to act on these insights?
              </h3>
              <p
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  color: '#4B5563',
                }}
              >
                Book a 30-minute discussion to translate your score into a tailored roadmap.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCalendlyClick}
                className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-[#117C92] text-white hover:bg-[#0E5A6A] transition-all shadow-sm hover:shadow-md group"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.0625rem',
                  fontWeight: 500,
                  minHeight: '48px',
                }}
              >
                Schedule a clarity call →
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
      )}
      </main>
    </div>
  );
}
