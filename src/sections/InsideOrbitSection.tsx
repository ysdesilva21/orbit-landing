import React from "react";

export const InsideOrbitSection: React.FC = () => {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* ========================================
            HEADER
        ======================================== */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-eyebrow mb-4">
            Inside Orbit
          </p>

          <h2 className="text-heading mx-auto mb-5 max-w-3xl">
            One{" "}
            <span className="font-serif-italic font-semibold text-[var(--secondary)]">
              workspace
            </span>{" "}
            for every metric that matters.
          </h2>

          <p className="text-body mx-auto max-w-2xl">
            Most teams don't lack data. They lack a way to see it clearly.
            Every additional tool adds another place the answer might be
            hiding.
          </p>
        </div>

        {/* ========================================
            CARDS
        ======================================== */}

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">

          {/* ======================================
              CARD 1 — ACQUISITION CHANNELS
          ====================================== */}

          <div className="card main-card max-w-none">

            <div>
              {/* Card Header */}
              <div className="mb-8 text-center">
                <h3 className="text-subheading mb-1">
                  Acquisition channels
                </h3>

                <p className="text-small">
                  Where customers are coming from
                </p>
              </div>

              {/* Donut Chart */}
              <div className="relative mx-auto mb-8 flex h-48 w-48 items-center justify-center">

                <svg
                  className="h-full w-full -rotate-90"
                  viewBox="0 0 100 100"
                >
                  {/* Self-serve */}
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

                  {/* Sales */}
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

                  {/* Partners */}
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

                  {/* Other */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="var(--secondary)"
                    strokeWidth="14"
                    strokeDasharray="20 240"
                    strokeDashoffset="-220"
                  />
                </svg>

                {/* Center */}
                <div className="absolute flex flex-col items-center">
                  <span className="text-metric text-[var(--accent)]">
                    92%
                  </span>

                  <span className="text-small">
                    top channels
                  </span>
                </div>

                {/* Self-serve */}
                <div
                  className="
                    absolute
                    -left-3
                    -top-1
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-[color-mix(in_srgb,#C6D0D9_30%,transparent)]
                    bg-white/95
                    px-2.5
                    py-1
                    text-[10px]
                    font-medium
                    shadow-sm
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--positive)]" />

                  <span className="text-[var(--primary)]">
                    Self-serve{" "}
                    <strong className="font-semibold">
                      42%
                    </strong>
                  </span>
                </div>

                {/* Sales */}
                <div
                  className="
                    absolute
                    -right-3
                    -top-1
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-[color-mix(in_srgb,#C6D0D9_30%,transparent)]
                    bg-white/95
                    px-2.5
                    py-1
                    text-[10px]
                    font-medium
                    shadow-sm
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--ternary)]" />

                  <span className="text-[var(--primary)]">
                    Sales{" "}
                    <strong className="font-semibold">
                      31%
                    </strong>
                  </span>
                </div>

                {/* Partners */}
                <div
                  className="
                    absolute
                    -bottom-1
                    -left-3
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-[color-mix(in_srgb,#C6D0D9_30%,transparent)]
                    bg-white/95
                    px-2.5
                    py-1
                    text-[10px]
                    font-medium
                    shadow-sm
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />

                  <span className="text-[var(--primary)]">
                    Partners{" "}
                    <strong className="font-semibold">
                      12%
                    </strong>
                  </span>
                </div>

                {/* Other */}
                <div
                  className="
                    absolute
                    -bottom-1
                    -right-3
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-[color-mix(in_srgb,#C6D0D9_30%,transparent)]
                    bg-white/95
                    px-2.5
                    py-1
                    text-[10px]
                    font-medium
                    shadow-sm
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--secondary)]" />

                  <span className="text-[var(--primary)]">
                    Other{" "}
                    <strong className="font-semibold">
                      8%
                    </strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="text-center">
              <p className="text-small text-[var(--ternary)]">
                92% from the top 3 channels
              </p>
            </div>
          </div>

          {/* ======================================
              CARD 2 — CONVERSION FUNNEL
          ====================================== */}

          <div className="card main-card max-w-none">

            <div>
              {/* Card Header */}
              <div className="mb-8 text-center">
                <h3 className="text-subheading mb-1">
                  Conversion funnel
                </h3>

                <p className="text-small">
                  From first visit to paid
                </p>
              </div>

              {/* Funnel */}
              <div className="space-y-6">

                {/* Visitors */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-small text-[var(--primary)]">
                      Visitors
                    </span>

                    <span className="text-small font-semibold text-[var(--accent)]">
                      100%
                    </span>
                  </div>

                  <div className="h-3.5 w-full overflow-hidden rounded-full bg-[color-mix(in_srgb,#C6D0D9_40%,transparent)]">
                    <div className="h-full w-full rounded-full bg-[var(--accent)]" />
                  </div>
                </div>

                {/* Signups */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-small text-[var(--primary)]">
                      Signups
                    </span>

                    <span className="text-small font-semibold text-[var(--accent)]">
                      44%
                    </span>
                  </div>

                  <div className="h-3.5 w-full overflow-hidden rounded-full bg-[color-mix(in_srgb,#C6D0D9_40%,transparent)]">
                    <div className="h-full w-[44%] rounded-full bg-[var(--accent)]" />
                  </div>
                </div>

                {/* Trials */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-small text-[var(--primary)]">
                      Trials
                    </span>

                    <span className="text-small font-semibold text-[var(--accent)]">
                      35%
                    </span>
                  </div>

                  <div className="h-3.5 w-full overflow-hidden rounded-full bg-[color-mix(in_srgb,#C6D0D9_40%,transparent)]">
                    <div className="h-full w-[35%] rounded-full bg-[var(--accent)]" />
                  </div>
                </div>

                {/* Paid */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-small text-[var(--primary)]">
                      Paid
                    </span>

                    <span className="text-small font-semibold text-[var(--accent)]">
                      12%
                    </span>
                  </div>

                  <div className="h-3.5 w-full overflow-hidden rounded-full bg-[color-mix(in_srgb,#C6D0D9_40%,transparent)]">
                    <div className="h-full w-[22%] rounded-full bg-[var(--accent)]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-6 text-center">
              <p className="text-small font-semibold text-[var(--accent)]">
                12% visitor → paid
              </p>

              <p className="mt-1 text-[11px] font-medium text-[color-mix(in_srgb,var(--primary)_55%,transparent)]">
                Biggest drop: Visitors → Signups
              </p>
            </div>
          </div>

          {/* ======================================
              CARD 3 — CUSTOMER HEALTH
          ====================================== */}

          <div className="card main-card max-w-none">

            <div>
              {/* Card Header */}
              <div className="mb-6 text-center">
                <h3 className="text-subheading mb-1">
                  Customer health
                </h3>

                <p className="text-small">
                  Accounts that need attention
                </p>
              </div>

              {/* Table */}
              <div className="w-full">

                {/* Table Header */}
                <div
                  className="
                    mb-3
                    grid
                    grid-cols-3
                    border-b
                    border-[color-mix(in_srgb,#C6D0D9_30%,transparent)]
                    px-1
                    pb-2
                  "
                >
                  <span className="text-small text-[var(--ternary)]">
                    Customer
                  </span>

                  <span className="text-right text-small text-[var(--ternary)]">
                    MRR
                  </span>

                  <span className="text-right text-small text-[var(--ternary)]">
                    Health
                  </span>
                </div>

                {/* Rows */}
                <div className="space-y-3 px-1">

                  {/* Northwind */}
                  <div className="grid grid-cols-3 items-center">
                    <span className="truncate text-[11px] font-semibold text-[var(--primary)]">
                      Northwind Retail
                    </span>

                    <span className="text-right text-[11px] font-semibold text-[var(--primary)]">
                      $18.4k
                    </span>

                    <span className="flex items-center justify-end gap-1 text-right text-[11px] font-semibold text-[var(--positive)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--positive)]" />
                      Healthy
                    </span>
                  </div>

                  {/* Vantage */}
                  <div className="grid grid-cols-3 items-center">
                    <span className="truncate text-[11px] font-semibold text-[var(--primary)]">
                      Vantage Point
                    </span>

                    <span className="text-right text-[11px] font-semibold text-[var(--primary)]">
                      $6.1k
                    </span>

                    <span className="flex items-center justify-end gap-1 text-right text-[11px] font-semibold text-[var(--positive)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--positive)]" />
                      Healthy
                    </span>
                  </div>

                  {/* Halcyon */}
                  <div className="grid grid-cols-3 items-center">
                    <span className="truncate text-[11px] font-semibold text-[var(--primary)]">
                      Halcyon Freight
                    </span>

                    <span className="text-right text-[11px] font-semibold text-[var(--primary)]">
                      $5.0k
                    </span>

                    <span className="flex items-center justify-end gap-1 text-right text-[11px] font-semibold text-[var(--secondary)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--secondary)]" />
                      At risk
                    </span>
                  </div>

                  {/* Redgate */}
                  <div className="grid grid-cols-3 items-center">
                    <span className="truncate text-[11px] font-semibold text-[var(--primary)]">
                      Redgate Labs
                    </span>

                    <span className="text-right text-[11px] font-semibold text-[var(--primary)]">
                      $1.2k
                    </span>

                    <span className="flex items-center justify-end gap-1 text-right text-[11px] font-semibold text-[var(--positive)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--positive)]" />
                      Healthy
                    </span>
                  </div>

                  {/* Marlowe */}
                  <div className="grid grid-cols-3 items-center">
                    <span className="truncate text-[11px] font-semibold text-[var(--primary)]">
                      Marlowe & Co
                    </span>

                    <span className="text-right text-[11px] font-semibold text-[var(--primary)]">
                      $21.8k
                    </span>

                    <span className="flex items-center justify-end gap-1 text-right text-[11px] font-semibold text-[var(--positive)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--positive)]" />
                      Healthy
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-6 text-center">
              <p className="text-small font-semibold text-[var(--secondary)]">
                $5.0k MRR at risk
              </p>

              <p className="mt-1 text-[11px] font-medium text-[color-mix(in_srgb,var(--primary)_55%,transparent)]">
                1 account needs attention
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InsideOrbitSection;