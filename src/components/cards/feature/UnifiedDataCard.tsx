import React from "react";
import { Check } from "lucide-react";

export const UnifiedDataCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Left Graphic Preview */}
      <div
        className="
          card
          p-6
          relative
          min-h-[280px]
          flex items-center justify-center
          order-2 lg:order-1
        "
      >
        {/* Preview Header */}
        <div className="flex items-center justify-between absolute top-5 left-6 right-6">
          <span className="text-third-heading">
            Connected Sources
          </span>

          <span className="text-small">
            8 active
          </span>
        </div>

        {/* Orbit / Radial Diagram */}
        <div className="relative w-full max-w-[280px] h-[200px] flex items-center justify-center mt-6">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 280 200"
            preserveAspectRatio="none"
          >
            {/* Connection Lines */}
            <line
              x1="140"
              y1="100"
              x2="140"
              y2="35"
              stroke="color-mix(in srgb, var(--accent) 30%, transparent)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />

            <line
              x1="140"
              y1="100"
              x2="220"
              y2="55"
              stroke="color-mix(in srgb, var(--accent) 30%, transparent)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />

            <line
              x1="140"
              y1="100"
              x2="230"
              y2="120"
              stroke="color-mix(in srgb, var(--accent) 30%, transparent)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />

            <line
              x1="140"
              y1="100"
              x2="180"
              y2="170"
              stroke="color-mix(in srgb, var(--accent) 30%, transparent)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />

            <line
              x1="140"
              y1="100"
              x2="100"
              y2="170"
              stroke="color-mix(in srgb, var(--accent) 30%, transparent)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />

            <line
              x1="140"
              y1="100"
              x2="50"
              y2="120"
              stroke="color-mix(in srgb, var(--accent) 30%, transparent)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />

            <line
              x1="140"
              y1="100"
              x2="60"
              y2="55"
              stroke="color-mix(in srgb, var(--accent) 30%, transparent)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          </svg>

          {/* Central Orbit Node */}
          <div
            className="
              relative z-10
              w-12 h-12
              rounded-full
              bg-white
              border-2 border-[var(--accent)]
              flex items-center justify-center
              shadow-[0_0_20px_color-mix(in_srgb,var(--accent)_18%,transparent)]
            "
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />

            <span className="absolute -bottom-5 text-small !text-[var(--accent)] font-semibold">
              Orbit
            </span>
          </div>

          {/* Source Nodes */}

          {/* 1 — Warehouse */}
          <span
            className="
              absolute top-2 left-1/2 -translate-x-1/2
              text-small
              !text-[var(--ternary)]
              bg-white
              px-2 py-1
              rounded
              border border-[color-mix(in_srgb,var(--accent)_15%,transparent)]
              shadow-sm
            "
          >
            Warehouse
          </span>

          {/* 2 — CRM */}
          <span
            className="
              absolute top-8 right-6
              text-small
              !text-[var(--ternary)]
              bg-white
              px-2 py-1
              rounded
              border border-[color-mix(in_srgb,var(--accent)_15%,transparent)]
              shadow-sm
            "
          >
            CRM
          </span>

          {/* 3 — Billing */}
          <span
            className="
              absolute top-24 right-2
              text-small
              !text-[var(--ternary)]
              bg-white
              px-2 py-1
              rounded
              border border-[color-mix(in_srgb,var(--accent)_15%,transparent)]
              shadow-sm
            "
          >
            Billing
          </span>

          {/* 4 — Product */}
          <span
            className="
              absolute bottom-4 right-12
              text-small
              !text-[var(--ternary)]
              bg-white
              px-2 py-1
              rounded
              border border-[color-mix(in_srgb,var(--accent)_15%,transparent)]
              shadow-sm
            "
          >
            Product
          </span>

          {/* 5 — Support */}
          <span
            className="
              absolute bottom-4 left-12
              text-small
              !text-[var(--ternary)]
              bg-white
              px-2 py-1
              rounded
              border border-[color-mix(in_srgb,var(--accent)_15%,transparent)]
              shadow-sm
            "
          >
            Support
          </span>

          {/* 6 — Ads */}
          <span
            className="
              absolute top-24 left-2
              text-small
              !text-[var(--ternary)]
              bg-white
              px-2 py-1
              rounded
              border border-[color-mix(in_srgb,var(--accent)_15%,transparent)]
              shadow-sm
            "
          >
            Ads
          </span>

          {/* 7 — Marketing */}
          <span
            className="
              absolute top-[2.5rem] left-5
              text-small
              !text-[var(--ternary)]
              bg-white
              px-2 py-1
              rounded
              border border-[color-mix(in_srgb,var(--accent)_15%,transparent)]
              shadow-sm
            "
          >
            Marketing
          </span>
        </div>
      </div>

      {/* Right Text Column */}
      <div className="space-y-4 order-1 lg:order-2">
        <span className="text-eyebrow">
          Unified Data
        </span>

        <h3 className="text-subheading">
          Every source, one consistent model.
        </h3>

        <p className="text-body">
          Connect your warehouse, product analytics, CRM, and billing system
          once. Orbit reconciles naming, currencies, and time zones
          automatically, so a customer means the same thing everywhere.
        </p>

        <ul className="space-y-3 pt-2">
          <li className="flex items-center gap-2.5 text-small">
            <Check
              className="w-4 h-4 text-[var(--positive)] stroke-[2.5] shrink-0"
            />
            40+ native connectors, no engineering required
          </li>

          <li className="flex items-center gap-2.5 text-small">
            <Check
              className="w-4 h-4 text-[var(--positive)] stroke-[2.5] shrink-0"
            />
            Automatic schema mapping and deduplication
          </li>

          <li className="flex items-center gap-2.5 text-small">
            <Check
              className="w-4 h-4 text-[var(--positive)] stroke-[2.5] shrink-0"
            />
            One customer record across every tool
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UnifiedDataCard;