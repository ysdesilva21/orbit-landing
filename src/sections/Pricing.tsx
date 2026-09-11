import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    'monthly'
  );

  const monthlyGrowthPrice = 149;
  const fullYearlyPrice = monthlyGrowthPrice * 12;
  const yearlyGrowthPrice = fullYearlyPrice * 0.8;
  const yearlySavings = fullYearlyPrice - yearlyGrowthPrice;

  const isYearly = billingCycle === 'yearly';

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-eyebrow mb-4">
            Pricing Plans
          </p>

          <h2 className="text-heading mx-auto mb-4 max-w-2xl">
            <span className="font-serif-italic text-[var(--secondary)]">
              Simple
            </span>{' '}
            pricing plans for your budget
          </h2>

          <p className="text-body mx-auto">
            Everything you need to understand the business.
          </p>

          {/* BILLING TOGGLE */}
          <div
            className="
              mt-8
              inline-flex
              items-center
              rounded-xl
              border
              border-[color-mix(in_srgb,#C6D0D9_30%,transparent)]
              bg-[color-mix(in_srgb,var(--accent)_5%,transparent)]
              p-1
            "
          >
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`
                rounded-lg
                px-5
                py-2
                text-sm
                font-medium
                transition-all
                ${
                  billingCycle === 'monthly'
                    ? `
                      bg-[color-mix(in_srgb,var(--accent)_15%,transparent)]
                      text-[var(--primary)]
                      shadow-sm
                    `
                    : `
                      text-[color-mix(in_srgb,var(--primary)_65%,transparent)]
                      hover:text-[var(--primary)]
                    `
                }
              `}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`
                flex
                items-center
                gap-2
                rounded-lg
                px-5
                py-2
                text-sm
                font-medium
                transition-all
                ${
                  billingCycle === 'yearly'
                    ? `
                      bg-[color-mix(in_srgb,var(--accent)_15%,transparent)]
                      text-[var(--primary)]
                      shadow-sm
                    `
                    : `
                      text-[color-mix(in_srgb,var(--primary)_65%,transparent)]
                      hover:text-[var(--primary)]
                    `
                }
              `}
            >
              <span>Yearly</span>

              <span
                className="
                  rounded
                  border
                  border-[color-mix(in_srgb,var(--accent)_25%,transparent)]
                  bg-white
                  px-1.5
                  py-0.5
                  text-[10px]
                  font-semibold
                  uppercase
                  text-[var(--accent)]
                "
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* PRICING CARDS */}
        <div className="mb-20 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">

          {/* STARTER */}
          <div
            className="
              card
              flex
              flex-col
              justify-between
              bg-[color-mix(in_srgb,var(--accent)_5%,transparent)]
              p-8
            "
          >
            <div>
              <h3 className="text-subheading mb-2">
                Starter
              </h3>

              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-metric">
                  $0
                </span>

                <span className="text-small">
                  /mo
                </span>
              </div>

              <p className="text-small mb-8 max-w-xs">
                For small teams getting their data in one place.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--accent)]"
                    strokeWidth={2}
                  />
                  Up to 5 users
                </li>

                <li className="flex items-center gap-3 text-sm">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--accent)]"
                    strokeWidth={2}
                  />
                  3 data sources
                </li>

                <li className="flex items-center gap-3 text-sm">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--accent)]"
                    strokeWidth={2}
                  />
                  5 dashboards
                </li>

                <li className="flex items-center gap-3 text-sm">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--accent)]"
                    strokeWidth={2}
                  />
                  Automated reports
                </li>

                <li className="flex items-center gap-3 text-sm">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--accent)]"
                    strokeWidth={2}
                  />
                  Email support
                </li>
              </ul>
            </div>
          </div>

          {/* GROWTH */}
          <div
            className="
              relative
              flex
              flex-col
              justify-between
              rounded-2xl
              border-2
              border-[var(--secondary)]
              bg-[color-mix(in_srgb,var(--secondary)_10%,transparent)]
              p-8
              shadow-lg
            "
          >
            <span
              className="
                absolute
                right-6
                top-6
                text-small
                font-semibold
                text-[var(--secondary)]
              "
            >
              Recommended
            </span>

            <div>
              <h3 className="text-subheading mb-2">
                Growth
              </h3>

              {/* GROWTH PRICE */}
              <div className="mb-2">
                {isYearly ? (
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span
                      className="
                        text-small
                        text-[color-mix(in_srgb,var(--primary)_45%,transparent)]
                        line-through
                      "
                    >
                      ${fullYearlyPrice.toLocaleString()}
                    </span>

                    <span className="text-metric text-[var(--secondary)]">
                      ${yearlyGrowthPrice.toFixed(2)}
                    </span>

                    <span className="text-small">
                      /year
                    </span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-metric">
                      ${monthlyGrowthPrice}
                    </span>

                    <span className="text-small">
                      /mo
                    </span>
                  </div>
                )}
              </div>

              {/* YEARLY SAVINGS */}
              {isYearly && (
                <p className="mb-8 text-small text-[var(--secondary)]">
                  Save ${yearlySavings.toFixed(2)} · 20% off
                </p>
              )}

              {!isYearly && (
                <p className="text-small mb-8 max-w-xs">
                  For growing teams that need deeper insights and automation.
                </p>
              )}

              {isYearly && (
                <p className="text-small mb-8 max-w-xs">
                  For growing teams that need deeper insights and automation.
                </p>
              )}

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--secondary)]"
                    strokeWidth={2}
                  />
                  Up to 25 users
                </li>

                <li className="flex items-center gap-3 text-sm font-medium">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--secondary)]"
                    strokeWidth={2}
                  />
                  15 data sources
                </li>

                <li className="flex items-center gap-3 text-sm font-medium">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--secondary)]"
                    strokeWidth={2}
                  />
                  Unlimited dashboards
                </li>

                <li className="flex items-center gap-3 text-sm font-medium">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--secondary)]"
                    strokeWidth={2}
                  />
                  Automated reports
                </li>

                <li className="flex items-center gap-3 text-sm font-medium">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--secondary)]"
                    strokeWidth={2}
                  />
                  Custom metrics
                </li>

                <li className="flex items-center gap-3 text-sm font-medium">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--secondary)]"
                    strokeWidth={2}
                  />
                  AI insights
                </li>

                <li className="flex items-center gap-3 text-sm font-medium">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--secondary)]"
                    strokeWidth={2}
                  />
                  Priority support
                </li>
              </ul>
            </div>
          </div>

          {/* ENTERPRISE */}
          <div
            className="
              card
              flex
              flex-col
              justify-between
              bg-[color-mix(in_srgb,var(--accent)_5%,transparent)]
              p-8
            "
          >
            <div>
              <h3 className="text-subheading mb-2">
                Enterprise
              </h3>

              <div className="mb-2">
                <span className="text-metric">
                  Custom
                </span>
              </div>

              <p className="text-small mb-6 max-w-xs">
                For larger teams with complex data and advanced needs.
              </p>

              <button
                type="button"
                className="
                  secondary-button
                  mb-6
                  w-full
                  rounded-lg
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                "
              >
                Talk to sales
              </button>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--accent)]"
                    strokeWidth={2}
                  />
                  Unlimited data sources
                </li>

                <li className="flex items-center gap-3 text-sm">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--accent)]"
                    strokeWidth={2}
                  />
                  Unlimited users
                </li>

                <li className="flex items-center gap-3 text-sm">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--accent)]"
                    strokeWidth={2}
                  />
                  Unlimited dashboards
                </li>

                <li className="flex items-center gap-3 text-sm">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--accent)]"
                    strokeWidth={2}
                  />
                  Automated reports
                </li>

                <li className="flex items-center gap-3 text-sm">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--accent)]"
                    strokeWidth={2}
                  />
                  Custom metrics
                </li>

                <li className="flex items-center gap-3 text-sm">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--accent)]"
                    strokeWidth={2}
                  />
                  AI insights
                </li>

                <li className="flex items-center gap-3 text-sm">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--accent)]"
                    strokeWidth={2}
                  />
                  Advanced permissions
                </li>

                <li className="flex items-center gap-3 text-sm">
                  <Check
                    className="h-4 w-4 shrink-0 text-[var(--accent)]"
                    strokeWidth={2}
                  />
                  Dedicated support
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM METRICS */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            border-t
            border-[color-mix(in_srgb,#C6D0D9_30%,transparent)]
            pt-8
            text-center
            md:grid-cols-3
          "
        >
          <div>
            <div className="text-metric text-[var(--accent)]">
              14,000+
            </div>

            <div className="text-small mt-1">
              teams
            </div>
          </div>

          <div>
            <div className="text-metric text-[var(--accent)]">
              45M+
            </div>

            <div className="text-small mt-1">
              data points analyzed
            </div>
          </div>

          <div>
            <div className="text-metric text-[var(--accent)]">
              99.9%
            </div>

            <div className="text-small mt-1">
              uptime
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};