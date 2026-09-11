import React from "react";
import { Check } from "lucide-react";

import chart from "../images/barchart.png";

export const RealTimeAnalyticsCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Left Text Column */}
      <div className="space-y-4">
        <span className="text-eyebrow">
          Real-Time Analytics
        </span>

        <h3 className="text-subheading">
          Numbers that move when your business does.
        </h3>

        <p className="text-body">
          No more overnight batch jobs. Orbit streams changes as they happen,
          so the dashboard your team is looking at right now reflects the
          business right now.
        </p>

        <ul className="space-y-3 pt-2">
          <li className="flex items-center gap-2.5 text-small">
            <Check
              className="w-4 h-4 text-[var(--positive)] stroke-[2.5] shrink-0"
            />
            Sub-minute data freshness on core metrics
          </li>

          <li className="flex items-center gap-2.5 text-small">
            <Check
              className="w-4 h-4 text-[var(--positive)] stroke-[2.5] shrink-0"
            />
            Live cohorts, funnels, and revenue tracking
          </li>

          <li className="flex items-center gap-2.5 text-small">
            <Check
              className="w-4 h-4 text-[var(--positive)] stroke-[2.5] shrink-0"
            />
            Alerts fire the moment a threshold is crossed
          </li>
        </ul>
      </div>

      {/* Right Graphic Preview */}
      <div className="card p-5 sm:p-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[color-mix(in_srgb,var(--primary)_10%,transparent)]">
          <span className="text-third-heading">
            Live Event Stream
          </span>

            <span
            className="
              flex items-center gap-1.5
              text-small
              !text-[var(--secondary)]
              bg-white
              border border-[color-mix(in_srgb,var(--secondary)_25%,transparent)]
              px-2 py-0.5
              rounded-[10px]
            "
          >
            <span className="w-1.5 h-1.5 rounded-[5px] bg-[var(--secondary)] animate-pulse" />
            Streaming
          </span>
        </div>

        {/* Chart */}
        <div className="w-full h-56 sm:h-64 overflow-hidden">
          <img
            src={chart}
            alt="Real-time analytics chart"
            className="w-full h-full object-fill"
          />
        </div>

        {/* Chart Footer */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-[color-mix(in_srgb,var(--primary)_8%,transparent)]">
          <span className="text-small">
            Live data
          </span>

          <span className="text-small !text-[var(--secondary)]">
            Updated now
          </span>
        </div>
      </div>
    </div>
  );
};

export default RealTimeAnalyticsCard;