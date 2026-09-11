import React from "react";

export const ReportingTakesDaysCard: React.FC = () => {
  return (
    <div className="w-full max-w-md border border-[#EBE8F0] rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between select-none bg-[#C6D0D9]/10">
      <div>
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-center text-[var(--primary)] mb-8 sm:mb-10">
          Reporting takes days
        </h3>

        {/* Diagram Container */}
        <div className="relative w-full max-w-[320px] mx-auto h-[240px] mb-6 flex items-center justify-center">
          {/* SVG Dashed Loop Path with Arrows */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 280 220"
            fill="none"
          >
            <defs>
              <marker
                id="reporting-arrow-right"
                markerWidth="6"
                markerHeight="6"
                refX="5"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L6,3 Z" fill="var(--accent)" />
              </marker>

              <marker
                id="reporting-arrow-down"
                markerWidth="6"
                markerHeight="6"
                refX="5"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L6,3 Z" fill="var(--accent)" />
              </marker>

              <marker
                id="reporting-arrow-left"
                markerWidth="6"
                markerHeight="6"
                refX="5"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L6,3 Z" fill="var(--accent)" />
              </marker>

              <marker
                id="reporting-arrow-up"
                markerWidth="6"
                markerHeight="6"
                refX="5"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L6,3 Z" fill="var(--accent)" />
              </marker>
            </defs>

            {/* Main Loop */}
            <path
              d="M 68 30 H 200 A 12 12 0 0 1 212 42 V 168 A 12 12 0 0 1 200 180 H 68 A 12 12 0 0 1 56 168 V 42 A 12 12 0 0 1 68 30 Z"
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="dash-line opacity-40"
              fill="none"
            />

            {/* Directional Arrows */}
            <path
              d="M 90 30 H 96"
              stroke="var(--accent)"
              strokeWidth="1.5"
              markerEnd="url(#reporting-arrow-right)"
              opacity="0.65"
            />

            <path
              d="M 212 90 V 96"
              stroke="var(--accent)"
              strokeWidth="1.5"
              markerEnd="url(#reporting-arrow-down)"
              opacity="0.65"
            />

            <path
              d="M 190 180 H 184"
              stroke="var(--accent)"
              strokeWidth="1.5"
              markerEnd="url(#reporting-arrow-left)"
              opacity="0.65"
            />

            <path
              d="M 56 110 V 104"
              stroke="var(--accent)"
              strokeWidth="1.5"
              markerEnd="url(#reporting-arrow-up)"
              opacity="0.65"
            />
          </svg>

          {/* Top Node: Data */}
          <div className="absolute top-[8px] left-1/2 -translate-x-1/2 z-10">
            <div className="border border-[#EBE8F0] rounded-[10px] px-3.5 py-2 flex items-center justify-between gap-4 backdrop-blur-xs shadow-sm bg-[#614986]/5 min-w-[130px]">
              <span className="text-xs sm:text-sm font-bold text-[var(--primary)]">
                Data
              </span>

              <span className="text-[11px] sm:text-xs font-semibold text-[var(--ternary)]">
                659k
              </span>
            </div>
          </div>

          {/* Right Node: Export */}
          <div className="absolute right-[0px] top-1/2 -translate-y-1/2 z-10">
            <div className="border border-[#EBE8F0] rounded-[10px] px-3.5 py-2 flex items-center justify-between gap-4 backdrop-blur-xs shadow-sm bg-[#614986]/5 min-w-[145px]">
              <span className="text-xs sm:text-sm font-bold text-[var(--primary)]">
                Export
              </span>

              <span className="text-[10px] sm:text-[11px] font-semibold text-[var(--ternary)] uppercase tracking-tight">
                CSV / XLS
              </span>
            </div>
          </div>

          {/* Bottom Node: Format */}
          <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 z-10">
            <div className="border border-[#EBE8F0] rounded-[10px] px-3.5 py-2 flex items-center justify-between gap-4 backdrop-blur-xs shadow-sm bg-[#614986]/5 min-w-[130px]">
              <span className="text-xs sm:text-sm font-bold text-[var(--primary)]">
                Format
              </span>

              <span className="text-[11px] sm:text-xs font-semibold text-[var(--ternary)]">
                Slides
              </span>
            </div>
          </div>

          {/* Left Node: Share */}
          <div className="absolute left-[0px] top-1/2 -translate-y-1/2 z-10">
            <div className="border border-[#EBE8F0] rounded-[10px] px-3.5 py-2 flex items-center justify-between gap-4 backdrop-blur-xs shadow-sm bg-[#614986]/5 min-w-[125px]">
              <span className="text-xs sm:text-sm font-bold text-[var(--primary)]">
                Share
              </span>

              <span className="text-[11px] sm:text-xs font-semibold text-[var(--ternary)]">
                Team
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="font-medium text-base sm:text-sm leading-relaxed mt-1 sm:mt-4 text-[var(--primary)]">
        By the time the deck is exported, formatted, and shared, the numbers
        inside it are already a week old.
      </p>
    </div>
  );
};

export default ReportingTakesDaysCard;