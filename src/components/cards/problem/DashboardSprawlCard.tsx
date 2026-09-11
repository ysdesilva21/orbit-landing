import React from "react";
import {
  TrendingUp,
  TrendingDown,
  BarChart2,
  Hexagon,
  Box,
  Share2,
  Users,
} from "lucide-react";

export const DashboardSprawlCard: React.FC = () => {
  return (
    <div className="w-full max-w-md border border-[#EBE8F0] rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between select-none bg-[#C6D0D9]/10">
      <div>
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-center text-[var(--primary)] mb-6 sm:mb-8">
          Dashboard sprawl
        </h3>

        {/* Diagram Container */}
        <div className="relative w-full py-2 mb-8">
          {/* SVG Connecting Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Top Left Card -> Center Box */}
            <path
              d="M 25 32 V 46 A 4 4 0 0 0 29 50 H 35"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              className="dash-line opacity-50"
              vectorEffect="non-scaling-stroke"
            />

            {/* Top Right Card -> Center Box */}
            <path
              d="M 75 32 V 46 A 4 4 0 0 1 71 50 H 65"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              className="dash-line opacity-50"
              vectorEffect="non-scaling-stroke"
            />

            {/* Center Box -> Bottom Left Card */}
            <path
              d="M 35 50 H 29 A 4 4 0 0 0 25 54 V 68"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              className="dash-line opacity-50"
              vectorEffect="non-scaling-stroke"
            />

            {/* Center Box -> Bottom Right Card */}
            <path
              d="M 65 50 H 71 A 4 4 0 0 1 75 54 V 68"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              className="dash-line opacity-50"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* =========================
              TOP ROW
          ========================= */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10 mb-6 justify-items-center">
            {/* Finance Dashboard */}
            <div className="relative w-[145px] sm:w-[160px] h-[64px] border border-[#EBE8F0] rounded-[10px] p-2 sm:p-2.5 flex items-center gap-2.5 backdrop-blur-xs shadow-sm bg-[#614986]/5">
              {/* Top-Left Pill */}
              <span className="absolute -top-2.5 left-2 bg-white border border-emerald-200 text-[var(--positive)] text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-0.5 shadow-xs">
                <TrendingUp className="w-2.5 h-2.5 stroke-[2.5]" />
                12.4%
              </span>

              {/* Bottom-Right Pill */}
              <span className="absolute -bottom-2.5 right-2 bg-white border border-rose-200 text-rose-500 text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-0.5 shadow-xs">
                <TrendingDown className="w-2.5 h-2.5 stroke-[2.5]" />
                3.7%
              </span>

              <div className="p-1.5 bg-[var(--primary)] text-white rounded-lg shrink-0 flex items-center justify-center">
                <BarChart2 className="w-4 h-4" />
              </div>

              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs font-semibold leading-none mb-1 truncate text-[var(--ternary)]">
                  Finance
                </p>

                <p className="text-xs sm:text-sm font-bold leading-none truncate text-[var(--primary)]">
                  $365k
                </p>
              </div>
            </div>

            {/* Sales Dashboard */}
            <div className="relative w-[145px] sm:w-[160px] h-[64px] border border-[#EBE8F0] rounded-[10px] p-2 sm:p-2.5 flex items-center gap-2.5 backdrop-blur-xs shadow-sm bg-[#614986]/5">
              {/* Top-Right Pill */}
              <span className="absolute -top-2.5 right-2 bg-white border border-emerald-200 text-[var(--positive)] text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-xs">
                42 Deals
              </span>

              <div className="p-1.5 bg-[var(--primary)] text-white rounded-lg shrink-0 flex items-center justify-center">
                <Hexagon className="w-4 h-4 fill-[var(--primary)] text-white" />
              </div>

              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs font-semibold leading-none mb-1 truncate text-[var(--ternary)]">
                  Sales
                </p>

                <p className="text-xs sm:text-sm font-bold leading-none truncate text-[var(--primary)]">
                  $1.2M
                </p>
              </div>
            </div>
          </div>

          {/* =========================
              CENTER DASHBOARD NODE
          ========================= */}
          <div className="relative z-10 flex justify-center my-3">
            <div className="bg-white border-2 border-dashed border-[var(--accent)]/50 rounded-lg px-4 py-1.5 text-center shadow-sm">
              <h4 className="text-xs font-bold text-[var(--accent)]">
                Dashboard
              </h4>

              <p className="text-[10px] font-medium text-[var(--ternary)]">
                All data views
              </p>
            </div>
          </div>

          {/* =========================
              BOTTOM ROW
          ========================= */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10 mt-6 justify-items-center">
            {/* Product Analytics */}
            <div className="relative w-[145px] sm:w-[160px] h-[64px] border border-[#EBE8F0] rounded-[10px] p-2 sm:p-2.5 flex items-center gap-2.5 backdrop-blur-xs shadow-sm bg-[#614986]/5">
              {/* Bottom Pill */}
              <span className="absolute -bottom-2.5 right-2 bg-white border border-emerald-200 text-[var(--positive)] text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                9,284
                <Users className="w-2.5 h-2.5 fill-[var(--positive)] text-[var(--positive)]" />
              </span>

              <div className="p-1.5 border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg shrink-0 flex items-center justify-center">
                <Box className="w-4 h-4" />
              </div>

              <div className="overflow-hidden">
                <p className="text-[11px] sm:text-xs font-semibold leading-none mb-1 truncate text-[var(--ternary)]">
                  Analytics
                </p>

                <p className="text-xs sm:text-sm font-bold leading-none truncate text-[var(--primary)]">
                  84.2%
                </p>
              </div>
            </div>

            {/* Reporting */}
            <div className="relative w-[145px] sm:w-[160px] h-[64px] border border-[#EBE8F0] rounded-[10px] p-2 sm:p-2.5 flex items-center gap-2.5 backdrop-blur-xs shadow-sm bg-[#614986]/5">
              <div className="text-[var(--primary)] shrink-0 pl-1">
                <Share2 className="w-5 h-5 rotate-90 stroke-[2.5]" />
              </div>

              <div className="overflow-hidden">
                <p className="text-xs sm:text-sm font-bold leading-none mb-1 truncate text-[var(--primary)]">
                  +12
                </p>

                <p className="text-[11px] sm:text-xs font-semibold leading-none truncate text-[var(--ternary)]">
                  more tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Text */}
      <p className="font-medium text-base sm:text-sm leading-relaxed mt-1 sm:mt-6 text-[var(--primary)]">
        More tools, more logins, more versions of the truth. Teams build new
        dashboards faster than anyone can retire the old ones.
      </p>
    </div>
  );
};

export default DashboardSprawlCard;