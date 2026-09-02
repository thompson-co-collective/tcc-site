import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CtaPairProps {
  /** "light" = white primary button (for dark backgrounds); "dark" = teal primary button (for light backgrounds) */
  variant?: "light" | "dark";
  className?: string;
  layout?: "row" | "col";
  cta1Label?: string;
  cta2Label?: string;
  cta1To?: string;
  cta2To?: string;
}

/**
 * Standard dual-CTA — used in every hero and bottom-of-page section.
 * CTA 1: "Schedule a clarity call →"  →  /contact
 * CTA 2: Label can be tailored by page; destination defaults to /audit.
 * CTAs use the sans-serif UI font so display typography stays reserved for headings.
 */
export function CtaPair({
  variant = "light",
  className = "",
  layout = "row",
  cta1Label = "Schedule a clarity call",
  cta2Label = "Get your baseline",
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
        className="inline-flex items-center justify-center px-8 py-4 rounded transition-colors group"
        style={{
          minHeight: "56px",
          fontFamily: "var(--font-sans)",
          fontSize: "1.0625rem",
          fontWeight: 600,
          ...(isLight
            ? {
                backgroundColor: "#FFFFFF",
                color: "#0E5A6A",
              }
            : {
                backgroundColor: "#117C92",
                color: "#FFFFFF",
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
      </Link>

      {/* CTA 2 — Ghost */}
      <Link
        to={cta2To}
        className="inline-flex items-center justify-center px-6 py-4 rounded transition-colors"
        style={{
          minHeight: "56px",
          fontFamily: "var(--font-sans)",
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
          {cta2Label}
          <ArrowRight size={16} />
        </span>
      </Link>
    </div>
  );
}
