import React, { useRef } from "react";
import { gsap } from "gsap";
import {
  TrendingUp,
  TrendingDown,
  BarChart2,
  Hexagon,
  Box,
  Share2,
  Users,
} from "lucide-react";

export const DashboardSprawlCard: React.FC = () => {
  const outerCardRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const centerNodeRef = useRef<HTMLDivElement>(null);

  /*
  ============================================================
  OUTER CARD HOVER
  ============================================================
  */

  const handleOuterEnter = () => {
    const card = outerCardRef.current;

    if (!card) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    gsap.to(card, {
      y: -4,
      duration: 0.4,
      ease: "power3.out",
      overwrite: true,

      borderColor: "var(--secondary)",

      boxShadow: `
        0 0 0 1px var(--secondary),
        0 8px 30px rgba(243, 246, 239, 0.22),
        0 0 24px rgba(243, 246, 239, 0.18)
      `,
    });

    /*
     * Make the center node subtly react.
     */
    if (centerNodeRef.current) {
      gsap.to(centerNodeRef.current, {
        scale: 1.03,
        duration: 0.4,
        ease: "power3.out",
        overwrite: true,
      });
    }

    /*
     * Make the network slightly more visible.
     */
    gsap.to(".dashboard-connection", {
      opacity: 0.65,
      duration: 0.35,
      ease: "power2.out",
      overwrite: true,
    });
  };

  const handleOuterLeave = () => {
    const card = outerCardRef.current;

    if (!card) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    gsap.to(card, {
      y: 0,
      duration: 0.5,
      ease: "power3.out",
      overwrite: true,

      borderColor: "#EBE8F0",

      boxShadow: `
        0 1px 2px rgba(0, 0, 0, 0.05)
      `,
    });

    /*
     * Reset center node.
     */
    if (centerNodeRef.current) {
      gsap.to(centerNodeRef.current, {
        scale: 1,
        duration: 0.45,
        ease: "power3.out",
        overwrite: true,
      });
    }

    /*
     * Reset connector lines.
     */
    gsap.to(".dashboard-connection", {
      opacity: 0.5,
      duration: 0.4,
      ease: "power3.out",
      overwrite: true,
    });
  };

  /*
  ============================================================
  SMALL CARD HOVER
  ============================================================
  */

  const handleCardEnter = (index: number) => {
    const card = cardRefs.current[index];

    if (!card) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    /*
     * Card
     */
    gsap.to(card, {
      y: -5,
      scale: 1.035,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });

    /*
     * Icon
     */
    const icon = card.querySelector(".dashboard-icon");

    if (icon) {
      gsap.to(icon, {
        scale: 1.12,
        rotate: 4,
        duration: 0.3,
        ease: "power2.out",
        overwrite: true,
      });
    }

    /*
     * Pills
     */
    const pills = card.querySelectorAll(".dashboard-pill");

    gsap.to(pills, {
      y: -2,
      duration: 0.25,
      ease: "power2.out",
      overwrite: true,
    });
  };

  const handleCardLeave = (index: number) => {
    const card = cardRefs.current[index];

    if (!card) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    /*
     * Card
     */
    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
      overwrite: true,
    });

    /*
     * Icon
     */
    const icon = card.querySelector(".dashboard-icon");

    if (icon) {
      gsap.to(icon, {
        scale: 1,
        rotate: 0,
        duration: 0.4,
        ease: "power3.out",
        overwrite: true,
      });
    }

    /*
     * Pills
     */
    const pills = card.querySelectorAll(".dashboard-pill");

    gsap.to(pills, {
      y: 0,
      duration: 0.3,
      ease: "power3.out",
      overwrite: true,
    });
  };

  return (
    <div
      ref={outerCardRef}
      onMouseEnter={handleOuterEnter}
      onMouseLeave={handleOuterLeave}
      className="
        w-full
        max-w-md
        border
        border-[#EBE8F0]
        rounded-2xl
        p-5
        sm:p-6
        shadow-sm
        flex
        flex-col
        select-none
        bg-[#C6D0D9]/10
        will-change-transform
      "
    >
      {/* =========================================================
          TITLE
      ========================================================= */}

      <h3
        className="
          text-xl
          sm:text-2xl
          font-bold
          text-center
          text-[var(--primary)]
          mb-6
          sm:mb-8
        "
      >
        Dashboard sprawl
      </h3>

      {/* =========================================================
          GRAPH / DIAGRAM AREA
      ========================================================= */}

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full py-2 mb-8">

          {/* =====================================================
              CONNECTING LINES
          ===================================================== */}

          <svg
            className="
              absolute
              inset-0
              w-full
              h-full
              pointer-events-none
              z-0
            "
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Top Left → Center */}

            <path
              d="M 25 32 V 46 A 4 4 0 0 0 29 50 H 35"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              className="
                dash-line
                dashboard-connection
                opacity-50
              "
              vectorEffect="non-scaling-stroke"
            />

            {/* Top Right → Center */}

            <path
              d="M 75 32 V 46 A 4 4 0 0 1 71 50 H 65"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              className="
                dash-line
                dashboard-connection
                opacity-50
              "
              vectorEffect="non-scaling-stroke"
            />

            {/* Center → Bottom Left */}

            <path
              d="M 35 50 H 29 A 4 4 0 0 0 25 54 V 68"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              className="
                dash-line
                dashboard-connection
                opacity-50
              "
              vectorEffect="non-scaling-stroke"
            />

            {/* Center → Bottom Right */}

            <path
              d="M 65 50 H 71 A 4 4 0 0 1 75 54 V 68"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              className="
                dash-line
                dashboard-connection
                opacity-50
              "
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* =====================================================
              TOP ROW
          ===================================================== */}

          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:gap-4
              relative
              z-10
              mb-6
              justify-items-center
            "
          >
            {/* ===================================================
                FINANCE
            =================================================== */}

            <div
              ref={(el) => {
                cardRefs.current[0] = el;
              }}
              onMouseEnter={() => handleCardEnter(0)}
              onMouseLeave={() => handleCardLeave(0)}
              className="
                relative
                w-[145px]
                sm:w-[160px]
                h-[64px]
                border
                border-[#EBE8F0]
                rounded-[10px]
                p-2
                sm:p-2.5
                flex
                items-center
                gap-2.5
                backdrop-blur-xs
                shadow-sm
                bg-[#614986]/5
                will-change-transform
                cursor-pointer
              "
            >
              {/* Top Left Pill */}

              <span
                className="
                  dashboard-pill
                  absolute
                  -top-2.5
                  left-2
                  bg-white
                  border
                  border-emerald-200
                  text-[var(--positive)]
                  text-[10px]
                  font-semibold
                  px-2
                  py-0.5
                  rounded-full
                  flex
                  items-center
                  gap-0.5
                  shadow-xs
                  will-change-transform
                "
              >
                <TrendingUp className="w-2.5 h-2.5 stroke-[2.5]" />
                12.4%
              </span>

              {/* Bottom Right Pill */}

              <span
                className="
                  dashboard-pill
                  absolute
                  -bottom-2.5
                  right-2
                  bg-white
                  border
                  border-rose-200
                  text-rose-500
                  text-[10px]
                  font-semibold
                  px-2
                  py-0.5
                  rounded-full
                  flex
                  items-center
                  gap-0.5
                  shadow-xs
                  will-change-transform
                "
              >
                <TrendingDown className="w-2.5 h-2.5 stroke-[2.5]" />
                3.7%
              </span>

              {/* Icon */}

              <div
                className="
                  dashboard-icon
                  p-1.5
                  bg-[var(--primary)]
                  text-white
                  rounded-lg
                  shrink-0
                  flex
                  items-center
                  justify-center
                  will-change-transform
                "
              >
                <BarChart2 className="w-4 h-4" />
              </div>

              {/* Content */}

              <div className="overflow-hidden">
                <p
                  className="
                    text-[11px]
                    sm:text-xs
                    font-semibold
                    leading-none
                    mb-1
                    truncate
                    text-[var(--ternary)]
                  "
                >
                  Finance
                </p>

                <p
                  className="
                    text-xs
                    sm:text-sm
                    font-bold
                    leading-none
                    truncate
                    text-[var(--primary)]
                  "
                >
                  $365k
                </p>
              </div>
            </div>

            {/* ===================================================
                SALES
            =================================================== */}

            <div
              ref={(el) => {
                cardRefs.current[1] = el;
              }}
              onMouseEnter={() => handleCardEnter(1)}
              onMouseLeave={() => handleCardLeave(1)}
              className="
                relative
                w-[145px]
                sm:w-[160px]
                h-[64px]
                border
                border-[#EBE8F0]
                rounded-[10px]
                p-2
                sm:p-2.5
                flex
                items-center
                gap-2.5
                backdrop-blur-xs
                shadow-sm
                bg-[#614986]/5
                will-change-transform
                cursor-pointer
              "
            >
              {/* Top Right Pill */}

              <span
                className="
                  dashboard-pill
                  absolute
                  -top-2.5
                  right-2
                  bg-white
                  border
                  border-emerald-200
                  text-[var(--positive)]
                  text-[10px]
                  font-semibold
                  px-2
                  py-0.5
                  rounded-full
                  shadow-xs
                  will-change-transform
                "
              >
                42 Deals
              </span>

              {/* Icon */}

              <div
                className="
                  dashboard-icon
                  p-1.5
                  bg-[var(--primary)]
                  text-white
                  rounded-lg
                  shrink-0
                  flex
                  items-center
                  justify-center
                  will-change-transform
                "
              >
                <Hexagon
                  className="
                    w-4
                    h-4
                    fill-[var(--primary)]
                    text-white
                  "
                />
              </div>

              {/* Content */}

              <div className="overflow-hidden">
                <p
                  className="
                    text-[11px]
                    sm:text-xs
                    font-semibold
                    leading-none
                    mb-1
                    truncate
                    text-[var(--ternary)]
                  "
                >
                  Sales
                </p>

                <p
                  className="
                    text-xs
                    sm:text-sm
                    font-bold
                    leading-none
                    truncate
                    text-[var(--primary)]
                  "
                >
                  $1.2M
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              CENTER DASHBOARD NODE
          ===================================================== */}

          <div
            className="
              relative
              z-10
              flex
              justify-center
              my-3
            "
          >
            <div
              ref={centerNodeRef}
              className="
                bg-white
                border-2
                border-dashed
                border-[var(--accent)]/50
                rounded-lg
                px-4
                py-1.5
                text-center
                shadow-sm
                will-change-transform
              "
            >
              <h4
                className="
                  text-xs
                  font-bold
                  text-[var(--accent)]
                "
              >
                Dashboard
              </h4>

              <p
                className="
                  text-[10px]
                  font-medium
                  text-[var(--ternary)]
                "
              >
                All data views
              </p>
            </div>
          </div>

          {/* =====================================================
              BOTTOM ROW
          ===================================================== */}

          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:gap-4
              relative
              z-10
              mt-6
              justify-items-center
            "
          >
            {/* ===================================================
                ANALYTICS
            =================================================== */}

            <div
              ref={(el) => {
                cardRefs.current[2] = el;
              }}
              onMouseEnter={() => handleCardEnter(2)}
              onMouseLeave={() => handleCardLeave(2)}
              className="
                relative
                w-[145px]
                sm:w-[160px]
                h-[64px]
                border
                border-[#EBE8F0]
                rounded-[10px]
                p-2
                sm:p-2.5
                flex
                items-center
                gap-2.5
                backdrop-blur-xs
                shadow-sm
                bg-[#614986]/5
                will-change-transform
                cursor-pointer
              "
            >
              {/* Bottom Pill */}

              <span
                className="
                  dashboard-pill
                  absolute
                  -bottom-2.5
                  right-2
                  bg-white
                  border
                  border-emerald-200
                  text-[var(--positive)]
                  text-[10px]
                  font-semibold
                  px-2
                  py-0.5
                  rounded-full
                  flex
                  items-center
                  gap-1
                  shadow-xs
                  will-change-transform
                "
              >
                9,284

                <Users
                  className="
                    w-2.5
                    h-2.5
                    fill-[var(--positive)]
                    text-[var(--positive)]
                  "
                />
              </span>

              {/* Icon */}

              <div
                className="
                  dashboard-icon
                  p-1.5
                  border-2
                  border-[var(--primary)]
                  text-[var(--primary)]
                  rounded-lg
                  shrink-0
                  flex
                  items-center
                  justify-center
                  will-change-transform
                "
              >
                <Box className="w-4 h-4" />
              </div>

              {/* Content */}

              <div className="overflow-hidden">
                <p
                  className="
                    text-[11px]
                    sm:text-xs
                    font-semibold
                    leading-none
                    mb-1
                    truncate
                    text-[var(--ternary)]
                  "
                >
                  Analytics
                </p>

                <p
                  className="
                    text-xs
                    sm:text-sm
                    font-bold
                    leading-none
                    truncate
                    text-[var(--primary)]
                  "
                >
                  84.2%
                </p>
              </div>
            </div>

            {/* ===================================================
                REPORTING
            =================================================== */}

            <div
              ref={(el) => {
                cardRefs.current[3] = el;
              }}
              onMouseEnter={() => handleCardEnter(3)}
              onMouseLeave={() => handleCardLeave(3)}
              className="
                relative
                w-[145px]
                sm:w-[160px]
                h-[64px]
                border
                border-[#EBE8F0]
                rounded-[10px]
                p-2
                sm:p-2.5
                flex
                items-center
                gap-2.5
                backdrop-blur-xs
                shadow-sm
                bg-[#614986]/5
                will-change-transform
                cursor-pointer
              "
            >
              {/* Icon */}

              <div
                className="
                  dashboard-icon
                  text-[var(--primary)]
                  shrink-0
                  pl-1
                  will-change-transform
                "
              >
                <Share2
                  className="
                    w-5
                    h-5
                    rotate-90
                    stroke-[2.5]
                  "
                />
              </div>

              {/* Content */}

              <div className="overflow-hidden">
                <p
                  className="
                    text-xs
                    sm:text-sm
                    font-bold
                    leading-none
                    mb-1
                    truncate
                    text-[var(--primary)]
                  "
                >
                  +12
                </p>

                <p
                  className="
                    text-[11px]
                    sm:text-xs
                    font-semibold
                    leading-none
                    truncate
                    text-[var(--ternary)]
                  "
                >
                  more tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          DESCRIPTION
      ========================================================= */}

      <p
        className="
          font-medium
          text-base
          sm:text-sm
          leading-relaxed
          mt-1
          sm:mt-6
          text-[var(--primary)]
        "
      >
        More tools, more logins, more versions of the truth. Teams build new
        dashboards faster than anyone can retire the old ones.
      </p>
    </div>
  );
};

export default DashboardSprawlCard;