import React from "react";
import {
  Check,
  ArrowUpRight,
  ArrowDownRight,
  Share2,
} from "lucide-react";

export const AutomatedReportsCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Left Graphic Preview */}
      <div className="card p-5 sm:p-6 relative order-2 lg:order-1">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[color-mix(in_srgb,var(--primary)_10%,transparent)]">
          <span className="text-third-heading">
            Automated Reports
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

        {/* Inner Digest Card */}
        <div
          className="
            bg-white
            border border-[color-mix(in_srgb,var(--primary)_8%,transparent)]
            rounded-xl
            p-4
            space-y-4
            shadow-sm
          "
        >
          {/* Digest Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <span className="text-small !text-[var(--primary)] font-semibold uppercase tracking-wider">
              Weekly Business Review
            </span>

            <span
              className="
                text-small
                !text-[var(--ternary)]
                bg-[color-mix(in_srgb,var(--accent)_6%,transparent)]
                px-2 py-1
                rounded
                border border-[color-mix(in_srgb,var(--accent)_12%,transparent)]
              "
            >
              Monday Executive Brief
            </span>
          </div>

          {/* Metric Rows */}
          <div className="space-y-2">
            {/* Revenue */}
            <div
              className="
                grid grid-cols-[1fr_auto_auto]
                gap-3
                items-center
                pb-2
                border-b border-[color-mix(in_srgb,var(--primary)_8%,transparent)]
              "
            >
              <span className="text-small">
                Revenue
              </span>

              <span className="text-small !text-[var(--primary)] font-semibold">
                $482,400
              </span>

              <span className="text-small !text-[var(--positive)] font-semibold flex items-center">
                <ArrowUpRight className="w-3 h-3" />
                12.4%
              </span>
            </div>

            {/* Active Users */}
            <div
              className="
                grid grid-cols-[1fr_auto_auto]
                gap-3
                items-center
                pb-2
                border-b border-[color-mix(in_srgb,var(--primary)_8%,transparent)]
              "
            >
              <span className="text-small">
                Active users
              </span>

              <span className="text-small !text-[var(--primary)] font-semibold">
                9,284
              </span>

              <span className="text-small !text-[var(--secondary)] font-semibold flex items-center">
                <ArrowDownRight className="w-3 h-3" />
                3.7%
              </span>
            </div>

            {/* Pipeline */}
            <div className="grid grid-cols-[1fr_auto_auto] gap-3 items-center">
              <span className="text-small">
                Pipeline
              </span>

              <span className="text-small !text-[var(--primary)] font-semibold">
                $1.2M
              </span>

              <span className="text-small !text-[var(--positive)] font-semibold flex items-center">
                <ArrowUpRight className="w-3 h-3" />
                8.2%
              </span>
            </div>
          </div>

          {/* AI Summary */}
          <p className="text-small pt-1 italic text-[color-mix(in_srgb,var(--accent)_75%,transparent)]">
            Revenue grew 12.4% this week, driven by...
          </p>

          {/* Footer Controls */}
          <div className="flex items-center justify-between pt-3 border-t border-[color-mix(in_srgb,var(--primary)_8%,transparent)]">
            <div className="flex gap-2 text-[color-mix(in_srgb,var(--primary)_45%,transparent)]">
              <Share2 className="w-4 h-4" />
            </div>

            <button className="primary-button text-small px-3 py-1.5 rounded-full">
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Right Text Column */}
      <div className="space-y-4 order-1 lg:order-2">
        <span className="text-eyebrow">
          Automated Reports
        </span>

        <h3 className="text-subheading">
          The Monday report writes itself.
        </h3>

        <p className="text-body">
          Orbit assembles board decks and weekly digests on a schedule you set,
          complete with narrative summaries, so your team spends time acting on
          numbers instead of formatting slides.
        </p>

        <ul className="space-y-3 pt-2">
          <li className="flex items-center gap-2.5 text-small">
            <Check
              className="w-4 h-4 text-[var(--positive)] stroke-[2.5] shrink-0"
            />
            Scheduled delivery to Slack, email, or PDF
          </li>

          <li className="flex items-center gap-2.5 text-small">
            <Check
              className="w-4 h-4 text-[var(--positive)] stroke-[2.5] shrink-0"
            />
            Narrative summaries generated automatically
          </li>

          <li className="flex items-center gap-2.5 text-small">
            <Check
              className="w-4 h-4 text-[var(--positive)] stroke-[2.5] shrink-0"
            />
            Templates for board, exec, and team reporting
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AutomatedReportsCard;