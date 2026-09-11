import React from "react";

export const InsideOrbitSection: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4">
      {/* Top Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-3">
          INSIDE ORBIT
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--primary)] mb-4">
          One <span className="font-serif-italic font-normal">workspace</span> for every metric that matters.
        </h2>
        <p className="text-[var(--ternary)] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Most teams don't lack data. They lack a way to see it clearly. Every
          additional tool adds another place the answer might be hiding.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Card 1: Acquisition channels */}
        <div className="main-card max-w-none flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-center text-[var(--primary)] mb-1">
              Acquisition channels
            </h3>
            <p className="text-xs text-center text-[var(--ternary)] mb-8">
              Where customers are coming from
            </p>

            {/* Donut Chart with Floating Pills */}
            <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                {/* Segment 1: Positive Green */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="var(--positive)"
                  strokeWidth="14"
                  strokeDasharray="120 240"
                  strokeDashoffset="0"
                />
                {/* Segment 2: Dark Slate */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="var(--ternary)"
                  strokeWidth="14"
                  strokeDasharray="70 240"
                  strokeDashoffset="-120"
                />
                {/* Segment 3: Accent Purple */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="14"
                  strokeDasharray="30 240"
                  strokeDashoffset="-190"
                />
                {/* Segment 4: Orange */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="#F6AD55"
                  strokeWidth="14"
                  strokeDasharray="20 240"
                  strokeDashoffset="-220"
                />
              </svg>

              {/* Channel Pill Overlays */}
              <div className="absolute -top-1 -left-2 bg-white/90 border border-slate-200 rounded-full px-2.5 py-0.5 text-[10px] font-medium flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)]"></span>
                <span>Self-serve <strong className="font-semibold">42%</strong></span>
              </div>

              <div className="absolute -top-1 -right-2 bg-white/90 border border-slate-200 rounded-full px-2.5 py-0.5 text-[10px] font-medium flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)]"></span>
                <span>Self-serve <strong className="font-semibold">42%</strong></span>
              </div>

              <div className="absolute -bottom-1 -left-2 bg-white/90 border border-slate-200 rounded-full px-2.5 py-0.5 text-[10px] font-medium flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)]"></span>
                <span>Self-serve <strong className="font-semibold">42%</strong></span>
              </div>

              <div className="absolute -bottom-1 -right-2 bg-white/90 border border-slate-200 rounded-full px-2.5 py-0.5 text-[10px] font-medium flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)]"></span>
                <span>Self-serve <strong className="font-semibold">42%</strong></span>
              </div>
            </div>
          </div>

          <p className="text-xs text-center font-medium text-[var(--ternary)] mt-4">
            92% from the top 3 channels
          </p>
        </div>

        {/* Card 2: Conversion funnel */}
        <div className="main-card max-w-none flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-center text-[var(--primary)] mb-1">
              Conversion funnel
            </h3>
            <p className="text-xs text-center text-[var(--ternary)] mb-8">
              From first visit to paid
            </p>

            {/* Funnel Progress Bars */}
            <div className="space-y-6 px-1">
              <div>
                <div className="flex justify-between text-xs font-semibold text-[var(--primary)] mb-1.5">
                  <span>Visitors</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-3.5 bg-slate-200/80 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--accent)] rounded-full w-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-[var(--primary)] mb-1.5">
                  <span>Visitors</span>
                  <span>44%</span>
                </div>
                <div className="w-full h-3.5 bg-slate-200/80 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--accent)] rounded-full w-[44%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-[var(--primary)] mb-1.5">
                  <span>Visitors</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-3.5 bg-slate-200/80 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--accent)] rounded-full w-[35%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-[var(--primary)] mb-1.5">
                  <span>Visitors</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-3.5 bg-slate-200/80 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--accent)] rounded-full w-[22%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-xs font-medium text-[var(--ternary)]">
              12% visitor → paid
            </p>
            <p className="text-[11px] font-medium text-[var(--ternary)]/80 mt-0.5">
              Biggest drop: Visitors → Signups
            </p>
          </div>
        </div>

        {/* Card 3: Customer health */}
        <div className="main-card max-w-none flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-center text-[var(--primary)] mb-1">
              Customer health
            </h3>
            <p className="text-xs text-center text-[var(--ternary)] mb-6">
              Accounts that need attention
            </p>

            {/* Table */}
            <div className="w-full">
              <div className="grid grid-cols-3 text-[11px] font-semibold text-[var(--ternary)] border-b border-slate-200/70 pb-2 mb-2 px-1">
                <span>Customer</span>
                <span className="text-right">MRR</span>
                <span className="text-right">Health</span>
              </div>

              <div className="space-y-2.5 text-xs font-medium text-[var(--primary)] px-1">
                <div className="grid grid-cols-3 items-center">
                  <span className="truncate font-semibold">Northwind Retail</span>
                  <span className="text-right font-semibold">$18.4k</span>
                  <span className="text-right flex items-center justify-end gap-1 font-semibold text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span> Healthy
                  </span>
                </div>

                <div className="grid grid-cols-3 items-center">
                  <span className="truncate font-semibold">Vantage Point</span>
                  <span className="text-right font-semibold">$6.1k</span>
                  <span className="text-right flex items-center justify-end gap-1 font-semibold text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span> Healthy
                  </span>
                </div>

                <div className="grid grid-cols-3 items-center">
                  <span className="truncate font-semibold">Halcyon Freight</span>
                  <span className="text-right font-semibold">$5.0k</span>
                  <span className="text-right flex items-center justify-end gap-1 font-semibold text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span> At risk
                  </span>
                </div>

                <div className="grid grid-cols-3 items-center">
                  <span className="truncate font-semibold">Redgate Labs</span>
                  <span className="text-right font-semibold">$1.2k</span>
                  <span className="text-right flex items-center justify-end gap-1 font-semibold text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span> Healthy
                  </span>
                </div>

                <div className="grid grid-cols-3 items-center">
                  <span className="truncate font-semibold">Marlowe & Co</span>
                  <span className="text-right font-semibold">$21.8k</span>
                  <span className="text-right flex items-center justify-end gap-1 font-semibold text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span> Healthy
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-xs font-semibold text-[var(--ternary)]">
              $5.0k MRR at risk
            </p>
            <p className="text-[11px] font-medium text-[var(--ternary)]/80 mt-0.5">
              1 account needs attention
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsideOrbitSection;