import React from "react";
import { Check } from "lucide-react";

export const AiInsightCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Left Text Column */}
      <div className="space-y-4">
        <span className="text-eyebrow">AI Insight</span>

        <h3 className="text-subheading">
          Orbit reads the data so your team doesn't have to.
        </h3>

        <p className="text-body">
          Orbit's models continuously scan every connected metric for
          anomalies, inflection points, and correlations, then write them up
          in plain language before anyone has to go looking.
        </p>

        <ul className="space-y-3 pt-2">
          <li className="flex items-center gap-2.5 text-small">
            <Check
              className="w-4 h-4 text-[var(--positive)] stroke-[2.5] shrink-0"
            />
            Plain-language explanations, not just charts
          </li>

          <li className="flex items-center gap-2.5 text-small">
            <Check
              className="w-4 h-4 text-[var(--positive)] stroke-[2.5] shrink-0"
            />
            Anomaly detection across every connected source
          </li>

          <li className="flex items-center gap-2.5 text-small">
            <Check
              className="w-4 h-4 text-[var(--positive)] stroke-[2.5] shrink-0"
            />
            Automatic root-cause analysis on key metrics
          </li>
        </ul>
      </div>

      {/* Right Graphic Preview UI */}
      <div className="card p-5 sm:p-6 relative overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[color-mix(in_srgb,var(--primary)_10%,transparent)]">
          <span className="text-third-heading">
            AI insight feed
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
            Live
          </span>
        </div>

        {/* Insight Items Feed */}
        <div className="space-y-3">
          {/* Item 1 */}
          <div
            className="
              bg-white
              border border-[color-mix(in_srgb,var(--primary)_8%,transparent)]
              rounded-xl
              p-3.5
              flex gap-3
              items-start
              shadow-sm
            "
          >
            <div className="w-2 h-2 rounded-full bg-[var(--positive)] mt-1.5 shrink-0" />

            <div>
              <p className="text-small !text-[var(--primary)] font-semibold mb-0.5">
                Revenue
              </p>

              <p className="text-small">
                Expansion revenue exceeded forecast by 24% this quarter.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div
            className="
              bg-white
              border border-[color-mix(in_srgb,var(--primary)_8%,transparent)]
              rounded-xl
              p-3.5
              flex gap-3
              items-start
              shadow-sm
            "
          >
            <div className="w-2 h-2 rounded-full bg-[var(--secondary)] mt-1.5 shrink-0" />

            <div>
              <p className="text-small !text-[var(--primary)] font-semibold mb-0.5">
                Churn Risk
              </p>

              <p className="text-small">
                Mid-market freight usage dropped 38% in 14 days.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div
            className="
              bg-white
              border border-[color-mix(in_srgb,var(--primary)_8%,transparent)]
              rounded-xl
              p-3.5
              flex gap-3
              items-start
              shadow-sm
            "
          >
            <div className="w-2 h-2 rounded-full bg-[var(--positive)] mt-1.5 shrink-0" />

            <div>
              <p className="text-small !text-[var(--primary)] font-semibold mb-0.5">
                Usage Spike
              </p>

              <p className="text-small">
                Mid-market freight usage increased 38% in 14 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiInsightCard;