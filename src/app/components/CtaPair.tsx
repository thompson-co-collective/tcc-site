import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CtaPairProps {
  /** "light" = white primary button (for dark backgrounds); "dark" = teal primary button (for light backgrounds) */
  variant?: "light" | "dark";
  className?: string;
  layout?: "row" | "col";
  cta1Label?: string;
  cta1To?: string;
  cta2To?: string;
}

/**
 * Standard dual-CTA — used in every hero and bottom-of-page section.
 * CTA 1: "Schedule a clarity call →"  →  /contact
 * CTA 2: "Get your baseline →"  →  /audit
 * All CTAs use serif font per brand spec.
 */
export function CtaPair({
  variant = "light",
  className = "",
  layout = "row",
  cta1Label = "Schedule a clarity call",
  cta1To = "/contact",
  cta2To = "/audit",
}: CtaPairProps) {
  const isLight = variant === "light";

  return (
    <div
      className={`flex ${layout === "row" ? "flex-col sm:flex-row" : "flex-col"} gap-4 ${className}`}
    >
      {/* CTA 1 — Primary */}
      <Link
        to={cta1To}
        className="inline-flex items-center justify-center px-8 py-4 rounded transition-all hover:scale-105 hover:shadow-2xl relative group overflow-hidden"
        style={{
          minHeight: "56px",
          fontFamily: "var(--font-serif)",
          fontSize: "1.0625rem",
          fontWeight: 600,
          ...(isLight
            ? {
                backgroundColor: "#FFFFFF",
                color: "#0E5A6A",
                boxShadow: "0 20px 50px rgba(255,255,255,0.15)",
              }
            : {
                backgroundColor: "#117C92",
                color: "#FFFFFF",
                boxShadow: "0 20px 50px rgba(17,124,146,0.25)",
              }),
        }}
        data-cta-label="schedule_clarity_call"
        data-cta-destination="/contact"
        data-cta-type="primary"
      >
        <span className="relative z-10 flex items-center gap-2">
          {cta1Label}
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      </Link>

      {/* CTA 2 — Ghost */}
      <Link
        to={cta2To}
        className="inline-flex items-center justify-center px-6 py-4 rounded transition-all relative overflow-hidden hover:scale-105"
        style={{
          minHeight: "56px",
          fontFamily: "var(--font-serif)",
          fontSize: "1.0625rem",
          fontWeight: 500,
          ...(isLight
            ? {
                color: "rgba(255,255,255,0.9)",
                border: "2px solid rgba(255,255,255,0.35)",
                background: "transparent",
              }
            : {
                color: "#0E5A6A",
                border: "2px solid rgba(14,90,106,0.35)",
                background: "transparent",
              }),
          transition: "all 0.2s ease",
        }}
        data-cta-label="get_your_baseline"
        data-cta-destination="/audit"
        data-cta-type="secondary"
      >
        <span className="flex items-center gap-1">
          Get your baseline
          <ArrowRight size={16} />
        </span>
      </Link>
    </div>
  );
}