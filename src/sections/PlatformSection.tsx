import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import AiInsightCard from "../components/cards/feature/AiInsightCard";
import UnifiedDataCard from "../components/cards/feature/UnifiedDataCard";
import RealTimeAnalyticsCard from "../components/cards/feature/RealTimeAnalyticsCard";
import AutomatedReportsCard from "../components/cards/feature/AutomatedReportsCard";

gsap.registerPlugin(ScrollTrigger);

export const PlatformSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      // Respect reduced-motion preferences
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      const cards = gsap.utils.toArray<HTMLElement>(
        ".platform-feature-card"
      );

      /*
       * Each card rises into its position as the user scrolls.
       *
       * No opacity.
       * No shading.
       * No independent parallax.
       *
       * Every card uses the same movement and scroll distance
       * to keep the rhythm consistent throughout the section.
       */
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 120,
          },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 100%",
              end: "top 55%",
              scrub: true,
            },
          }
        );
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 px-4 sm:px-6 lg:px-8"
      id="product"
    >
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-eyebrow">
            PLATFORM
          </span>

          <h2 className="text-heading max-w-4xl">
            Everything between raw data and a{" "}
            <span className="font-serif-italic text-[var(--secondary)]">
              good{" "}
            </span>
            decision.
          </h2>
        </div>

        {/* AI Insight */}
        <div className="platform-feature-card">
          <AiInsightCard />
        </div>

        {/* Unified Data */}
        <div className="platform-feature-card">
          <UnifiedDataCard />
        </div>

        {/* Real-Time Analytics */}
        <div className="platform-feature-card">
          <RealTimeAnalyticsCard />
        </div>

        {/* Automated Reports */}
        <div className="platform-feature-card">
          <AutomatedReportsCard />
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;