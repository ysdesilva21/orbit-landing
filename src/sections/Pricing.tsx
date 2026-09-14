import React, { useRef, useState } from "react";
import { Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const pricingCardsRef = useRef<HTMLDivElement | null>(null);
  const metricsRef = useRef<HTMLDivElement | null>(null);

  const billingToggleRef = useRef<HTMLDivElement | null>(null);

  const starterCardRef = useRef<HTMLDivElement | null>(null);
  const growthCardRef = useRef<HTMLDivElement | null>(null);
  const enterpriseCardRef = useRef<HTMLDivElement | null>(null);

  const monthlyGrowthPrice = 149;
  const fullYearlyPrice = monthlyGrowthPrice * 12;
  const yearlyGrowthPrice = fullYearlyPrice * 0.8;
  const yearlySavings = fullYearlyPrice - yearlyGrowthPrice;

  const isYearly = billingCycle === "yearly";

  const handleBillingChange = (cycle: "monthly" | "yearly") => {
    setBillingCycle(cycle);
  };

  /*
  ============================================================
  SCROLL-DRIVEN ANIMATION
  ============================================================
  */
  useGSAP(
    () => {
      const section = sectionRef.current;
      const header = headerRef.current;
      const metrics = metricsRef.current;
      const billingToggle = billingToggleRef.current;
      const starterCard = starterCardRef.current;
      const growthCard = growthCardRef.current;
      const enterpriseCard = enterpriseCardRef.current;

      if (!(section instanceof HTMLElement)) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      /*
      ------------------------------------------------------------
      ELEMENTS
      ------------------------------------------------------------
      */
      const eyebrow =
        header?.querySelector<HTMLElement>(".pricing-eyebrow") ?? null;

      const heading =
        header?.querySelector<HTMLElement>(".pricing-heading") ?? null;

      const description =
        header?.querySelector<HTMLElement>(".pricing-description") ?? null;

      const cards: HTMLDivElement[] = [
        starterCard,
        growthCard,
        enterpriseCard,
      ].filter(
        (card): card is HTMLDivElement => card instanceof HTMLDivElement
      );

      const metricItems: HTMLElement[] = metrics
        ? Array.from(metrics.children).filter(
            (element): element is HTMLElement =>
              element instanceof HTMLElement
          )
        : [];

      /*
      ------------------------------------------------------------
      INITIAL STATES
      ------------------------------------------------------------
      */
      if (eyebrow instanceof HTMLElement) {
        gsap.set(eyebrow, { y: 18, opacity: 0 });
      }

      if (heading instanceof HTMLElement) {
        gsap.set(heading, { y: 32, opacity: 0 });
      }

      if (description instanceof HTMLElement) {
        gsap.set(description, { y: 20, opacity: 0 });
      }

      if (billingToggle instanceof HTMLElement) {
        gsap.set(billingToggle, { y: 18, opacity: 0 });
      }

      if (cards.length > 0) {
        gsap.set(cards, {
          y: 45,
          opacity: 0,
        });
      }

      if (growthCard instanceof HTMLDivElement) {
        gsap.set(growthCard, {
          y: 58,
          opacity: 0,
        });
      }

      if (metricItems.length > 0) {
        gsap.set(metricItems, {
          y: 22,
          opacity: 0,
        });
      }

      /*
      ------------------------------------------------------------
      MAIN SCROLL TIMELINE
      ------------------------------------------------------------
      */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          end: "bottom 58%",
          scrub: 1.1,
          invalidateOnRefresh: true,
        },
      });

      /*
      ------------------------------------------------------------
      HEADER & TOGGLE
      ------------------------------------------------------------
      */
      if (eyebrow instanceof HTMLElement) {
        tl.to(
          eyebrow,
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power3.out",
          },
          0
        );
      }

      if (heading instanceof HTMLElement) {
        tl.to(
          heading,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.2"
        );
      }

      if (description instanceof HTMLElement) {
        tl.to(
          description,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.25"
        );
      }

      if (billingToggle instanceof HTMLElement) {
        tl.to(
          billingToggle,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2"
        );
      }

      /*
      ------------------------------------------------------------
      PRICING CARDS
      ------------------------------------------------------------
      */
      const firstCard = cards[0];
      const secondCard = cards[1];
      const thirdCard = cards[2];

      if (firstCard instanceof HTMLDivElement) {
        tl.to(
          firstCard,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.15"
        );
      }

      if (secondCard instanceof HTMLDivElement) {
        tl.to(
          secondCard,
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }

      if (thirdCard instanceof HTMLDivElement) {
        tl.to(
          thirdCard,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.55"
        );
      }

      /*
      ------------------------------------------------------------
      CARD CONTENT DEPTH
      ------------------------------------------------------------
      */
      const starterContent =
        starterCard?.querySelector<HTMLElement>(
          ".pricing-card-content"
        ) ?? null;

      const growthContent =
        growthCard?.querySelector<HTMLElement>(
          ".pricing-card-content"
        ) ?? null;

      const enterpriseContent =
        enterpriseCard?.querySelector<HTMLElement>(
          ".pricing-card-content"
        ) ?? null;

      if (starterContent instanceof HTMLElement) {
        tl.to(
          starterContent,
          {
            y: -8,
            ease: "none",
          },
          ">"
        );
      }

      if (growthContent instanceof HTMLElement) {
        tl.to(
          growthContent,
          {
            y: -12,
            ease: "none",
          },
          "<"
        );
      }

      if (enterpriseContent instanceof HTMLElement) {
        tl.to(
          enterpriseContent,
          {
            y: -8,
            ease: "none",
          },
          "<"
        );
      }

      /*
      ------------------------------------------------------------
      BOTTOM METRICS
      ------------------------------------------------------------
      */
      if (metricItems.length > 0) {
        tl.to(
          metricItems,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.25"
        );

        tl.to(
          metricItems,
          {
            y: -10,
            ease: "none",
            stagger: 0.04,
          },
          ">"
        );
      }
    },
    {
      scope: sectionRef,
    }
  );

  /*
  ============================================================
  BILLING PRICE TRANSITION
  ============================================================
  */
  useGSAP(
    () => {
      const growthCard = growthCardRef.current;

      if (!(growthCard instanceof HTMLDivElement)) return;

      const priceElements: HTMLElement[] = Array.from(
        growthCard.querySelectorAll(".growth-price")
      ).filter(
        (element): element is HTMLElement =>
          element instanceof HTMLElement
      );

      if (priceElements.length === 0) return;

      gsap.fromTo(
        priceElements,
        {
          y: 8,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.04,
          ease: "power2.out",
        }
      );
    },
    {
      scope: sectionRef,
      dependencies: [billingCycle],
    }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20"
      id="pricing"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={headerRef}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <p className="pricing-eyebrow text-eyebrow mb-4">
            Pricing Plans
          </p>

          <h2 className="pricing-heading text-heading mx-auto mb-4 max-w-2xl">
            <span className="font-serif-italic text-[var(--secondary)]">
              Simple
            </span>{" "}
            pricing plans for your budget
          </h2>

          <p className="pricing-description text-body mx-auto">
            Everything you need to understand the business.
          </p>

          <div
            ref={billingToggleRef}
            className="mt-8 inline-flex items-center rounded-xl border border-[color-mix(in_srgb,#C6D0D9_30%,transparent)] bg-[color-mix(in_srgb,var(--accent)_5%,transparent)] p-1"
          >
            <button
              type="button"
              onClick={() => handleBillingChange("monthly")}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-[var(--primary)] shadow-sm"
                  : "text-[color-mix(in_srgb,var(--primary)_65%,transparent)] hover:text-[var(--primary)]"
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => handleBillingChange("yearly")}
              className={`flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-medium transition-all ${
                billingCycle === "yearly"
                  ? "bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-[var(--primary)] shadow-sm"
                  : "text-[color-mix(in_srgb,var(--primary)_65%,transparent)] hover:text-[var(--primary)]"
              }`}
            >
              <span>Yearly</span>

              <span className="rounded border border-[color-mix(in_srgb,var(--accent)_25%,transparent)] bg-white px-1.5 py-0.5 text-[10px] font-semibold uppercase text-[var(--accent)]">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div
          ref={pricingCardsRef}
          className="mb-20 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3"
        >
          {/* STARTER */}
          <div
            ref={starterCardRef}
            className="card flex flex-col justify-between bg-[color-mix(in_srgb,var(--accent)_5%,transparent)] p-8 will-change-transform"
          >
            <div className="pricing-card-content will-change-transform">
              <h3 className="text-subheading mb-2">
                Starter
              </h3>

              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-metric">$0</span>
                <span className="text-small">/mo</span>
              </div>

              <p className="text-small mb-8 max-w-xs">
                For small teams getting their data in one place.
              </p>

              <ul className="space-y-4">
                {[
                  "Up to 5 users",
                  "3 data sources",
                  "5 dashboards",
                  "Automated reports",
                  "Email support",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-[var(--accent)]"
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* GROWTH */}
          <div
            ref={growthCardRef}
            className="relative flex flex-col justify-between rounded-2xl border-2 border-[var(--secondary)] bg-[color-mix(in_srgb,var(--secondary)_10%,transparent)] p-8 shadow-lg will-change-transform"
          >
            <span className="absolute right-6 top-6 text-small font-semibold text-[var(--secondary)]">
              Recommended
            </span>

            <div className="pricing-card-content will-change-transform">
              <h3 className="text-subheading mb-2">
                Growth
              </h3>

              <div className="mb-2">
                {isYearly ? (
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="growth-price text-small text-[color-mix(in_srgb,var(--primary)_45%,transparent)] line-through">
                      ${fullYearlyPrice.toLocaleString()}
                    </span>

                    <span className="growth-price text-metric text-[var(--secondary)]">
                      ${yearlyGrowthPrice.toFixed(2)}
                    </span>

                    <span className="growth-price text-small">
                      /year
                    </span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="growth-price text-metric">
                      ${monthlyGrowthPrice}
                    </span>

                    <span className="growth-price text-small">
                      /mo
                    </span>
                  </div>
                )}
              </div>

              <p className="text-small mb-8 max-w-xs">
                {isYearly
                  ? `Save $${yearlySavings.toFixed(2)} · 20% off`
                  : "For growing teams that need deeper insights and automation."}
              </p>

              <ul className="space-y-4">
                {[
                  "Up to 25 users",
                  "15 data sources",
                  "Unlimited dashboards",
                  "Automated reports",
                  "Custom metrics",
                  "AI insights",
                  "Priority support",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-[var(--secondary)]"
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ENTERPRISE */}
          <div
            ref={enterpriseCardRef}
            className="card flex flex-col justify-between bg-[color-mix(in_srgb,var(--accent)_5%,transparent)] p-8 will-change-transform"
          >
            <div className="pricing-card-content will-change-transform">
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
                className="secondary-button mb-6 w-full rounded-lg px-4 py-2.5 text-sm font-medium"
              >
                Talk to sales
              </button>

              <ul className="space-y-4">
                {[
                  "Unlimited data sources",
                  "Unlimited users",
                  "Unlimited dashboards",
                  "Automated reports",
                  "Custom metrics",
                  "AI insights",
                  "Advanced permissions",
                  "Dedicated support",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-[var(--accent)]"
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* METRICS */}
        <div
          ref={metricsRef}
          className="grid grid-cols-1 gap-8 border-t border-[color-mix(in_srgb,#C6D0D9_30%,transparent)] pt-8 text-center md:grid-cols-3"
        >
          <div className="will-change-transform">
            <div className="text-metric text-[var(--accent)]">
              14,000+
            </div>
            <div className="text-small mt-1">
              teams
            </div>
          </div>

          <div className="will-change-transform">
            <div className="text-metric text-[var(--accent)]">
              45M+
            </div>
            <div className="text-small mt-1">
              data points analyzed
            </div>
          </div>

          <div className="will-change-transform">
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

export default Pricing;