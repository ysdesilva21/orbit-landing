import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const HowItWorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      const timeline = section.querySelector(
        ".how-it-works-timeline"
      );

      const lineOne = section.querySelector(
        ".timeline-line-one"
      );

      const lineTwo = section.querySelector(
        ".timeline-line-two"
      );

      const stepOne = section.querySelector(
        ".timeline-step-one"
      );

      const stepTwo = section.querySelector(
        ".timeline-step-two"
      );

      const stepThree = section.querySelector(
        ".timeline-step-three"
      );

      const numberOne = section.querySelector(
        ".timeline-number-one"
      );

      const numberTwo = section.querySelector(
        ".timeline-number-two"
      );

      const numberThree = section.querySelector(
        ".timeline-number-three"
      );

      const mobileLineOne = section.querySelector(
        ".timeline-mobile-line-one"
      );

      const mobileLineTwo = section.querySelector(
        ".timeline-mobile-line-two"
      );

      if (
        !timeline ||
        !lineOne ||
        !lineTwo ||
        !stepOne ||
        !stepTwo ||
        !stepThree ||
        !numberOne ||
        !numberTwo ||
        !numberThree
      ) {
        return;
      }

      const mm = gsap.matchMedia();

      // =====================================================
      // DESKTOP
      // =====================================================

      mm.add("(min-width: 768px)", () => {
        // ---------------------------------------------
        // Initial states
        // ---------------------------------------------

        gsap.set(lineOne, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        gsap.set(lineTwo, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        // All steps begin hidden
        gsap.set([stepOne, stepTwo, stepThree], {
          opacity: 0,
          scale: 0.96,
          transformOrigin: "center top",
        });

        // All numbers begin white
        gsap.set([numberOne, numberTwo, numberThree], {
          backgroundColor: "white",
          color: "var(--accent)",
          borderColor: "var(--accent)",
        });

        // ---------------------------------------------
        // Scroll-driven timeline
        // ---------------------------------------------

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: timeline,
            start: "top 78%",
            end: "bottom 62%",
            scrub: 1,
          },
        });

        // =============================================
        // STEP 01 APPEARS
        // =============================================

        tl.to(stepOne, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        // 01 becomes accent-filled
        tl.to(
          numberOne,
          {
            backgroundColor: "var(--accent)",
            color: "white",
            borderColor: "var(--accent)",
            duration: 0.2,
            ease: "none",
          },
          "<"
        );

        // =============================================
        // LINE 01 → 02
        // =============================================

        tl.to(lineOne, {
          scaleX: 1,
          duration: 1,
          ease: "none",
        });

        // =============================================
        // STEP 02 APPEARS
        // =============================================

        tl.to(stepTwo, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        tl.to(
          numberTwo,
          {
            backgroundColor: "var(--accent)",
            color: "white",
            borderColor: "var(--accent)",
            duration: 0.2,
            ease: "none",
          },
          "<"
        );

        // =============================================
        // LINE 02 → 03
        // =============================================

        tl.to(lineTwo, {
          scaleX: 1,
          duration: 1,
          ease: "none",
        });

        // =============================================
        // STEP 03 APPEARS
        // =============================================

        tl.to(stepThree, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        tl.to(
          numberThree,
          {
            backgroundColor: "var(--accent)",
            color: "white",
            borderColor: "var(--accent)",
            duration: 0.2,
            ease: "none",
          },
          "<"
        );
      });

      // =====================================================
      // MOBILE
      // =====================================================

      mm.add("(max-width: 767px)", () => {
        if (!mobileLineOne || !mobileLineTwo) return;

        // ---------------------------------------------
        // Initial states
        // ---------------------------------------------

        gsap.set(mobileLineOne, {
          scaleY: 0,
          transformOrigin: "top center",
        });

        gsap.set(mobileLineTwo, {
          scaleY: 0,
          transformOrigin: "top center",
        });

        gsap.set([stepOne, stepTwo, stepThree], {
          opacity: 0,
          scale: 0.96,
          transformOrigin: "left top",
        });

        gsap.set([numberOne, numberTwo, numberThree], {
          backgroundColor: "white",
          color: "var(--accent)",
          borderColor: "var(--accent)",
        });

        // ---------------------------------------------
        // Scroll-driven timeline
        // ---------------------------------------------

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: timeline,
            start: "top 78%",
            end: "bottom 65%",
            scrub: 1,
          },
        });

        // STEP 01
        tl.to(stepOne, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        tl.to(
          numberOne,
          {
            backgroundColor: "var(--accent)",
            color: "white",
            borderColor: "var(--accent)",
            duration: 0.2,
            ease: "none",
          },
          "<"
        );

        // LINE 01 → 02
        tl.to(mobileLineOne, {
          scaleY: 1,
          duration: 1,
          ease: "none",
        });

        // STEP 02
        tl.to(stepTwo, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        tl.to(
          numberTwo,
          {
            backgroundColor: "var(--accent)",
            color: "white",
            borderColor: "var(--accent)",
            duration: 0.2,
            ease: "none",
          },
          "<"
        );

        // LINE 02 → 03
        tl.to(mobileLineTwo, {
          scaleY: 1,
          duration: 1,
          ease: "none",
        });

        // STEP 03
        tl.to(stepThree, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        tl.to(
          numberThree,
          {
            backgroundColor: "var(--accent)",
            color: "white",
            borderColor: "var(--accent)",
            duration: 0.2,
            ease: "none",
          },
          "<"
        );
      });

      return () => mm.revert();
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8"
      id="solutions"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <span className="text-eyebrow">
            How It Works
          </span>

          <h2 className="text-heading max-w-4xl">
            From scattered data to a{" "}
            <span className="font-serif-italic text-[var(--secondary)]">
              clear decision
            </span>
            , in three steps.
          </h2>
        </div>

        {/* Timeline */}
        <div className="how-it-works-timeline relative pt-4">
          {/* =========================================
              DESKTOP CONNECTING LINES
              ========================================= */}

          <div className="hidden md:block absolute top-[29px] left-[24px] right-[24px] h-px">
            {/* 01 → 02 */}
            <div className="absolute left-0 top-0 w-1/2 h-px bg-[color-mix(in_srgb,var(--primary)_12%,transparent)]">
              <div className="timeline-line-one w-full h-full bg-[var(--accent)]" />
            </div>

            {/* 02 → 03 */}
            <div className="absolute right-0 top-0 w-1/2 h-px bg-[color-mix(in_srgb,var(--primary)_12%,transparent)]">
              <div className="timeline-line-two w-full h-full bg-[var(--accent)]" />
            </div>
          </div>

          {/* =========================================
              MOBILE CONNECTING LINES
              ========================================= */}

          <div className="md:hidden absolute left-[24px] top-[28px] bottom-[28px] w-px">
            {/* Base line */}
            <div className="absolute left-0 top-0 w-px h-full bg-[color-mix(in_srgb,var(--primary)_12%,transparent)]" />

            {/* 01 → 02 */}
            <div className="timeline-mobile-line-one absolute left-0 top-0 w-px h-[33.33%] bg-[var(--accent)]" />

            {/* 02 → 03 */}
            <div className="timeline-mobile-line-two absolute left-0 top-[33.33%] w-px h-[33.33%] bg-[var(--accent)]" />
          </div>

          {/* =========================================
              STEPS
              ========================================= */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 relative z-10">
            {/* STEP 01 */}
            <div className="timeline-step-one flex flex-col gap-6">
              <div className="flex items-center">
                <div
                  className="
                    timeline-number-one
                    w-12 h-12
                    rounded-full
                    bg-white
                    border-2
                    border-[var(--accent)]
                    flex
                    items-center
                    justify-center
                    text-small
                    text-[var(--accent)]
                    shadow-sm
                  "
                >
                  01
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-small text-[var(--accent)]">
                  Connect
                </span>

                <h3 className="text-subheading">
                  Link your sources in minutes.
                </h3>

                <p className="text-body">
                  Revenue in your billing tool. Usage in your
                  product database. Pipeline in the CRM. Nobody has
                  the full picture, so every answer starts with a
                  Slack thread.
                </p>
              </div>
            </div>

            {/* STEP 02 */}
            <div className="timeline-step-two flex flex-col gap-6">
              <div className="flex items-center">
                <div
                  className="
                    timeline-number-two
                    w-12 h-12
                    rounded-full
                    bg-white
                    border
                    flex
                    items-center
                    justify-center
                    text-small
                  "
                >
                  02
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-small text-[var(--accent)]">
                  Understand
                </span>

                <h3 className="text-subheading">
                  AI surfaces what matters.
                </h3>

                <p className="text-body">
                  Orbit continuously analyzes the combined data and
                  highlights the trends, risks, and opportunities
                  worth your attention today.
                </p>
              </div>
            </div>

            {/* STEP 03 */}
            <div className="timeline-step-three flex flex-col gap-6">
              <div className="flex items-center">
                <div
                  className="
                    timeline-number-three
                    w-12 h-12
                    rounded-full
                    bg-white
                    border
                    flex
                    items-center
                    justify-center
                    text-small
                  "
                >
                  03
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-small text-[var(--secondary)]">
                  Act
                </span>

                <h3 className="text-subheading">
                  Move from insight to decision.
                </h3>

                <p className="text-body">
                  Share a finding, assign an owner, or trigger an
                  alert to your team, directly from the insight,
                  with the supporting data attached.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;