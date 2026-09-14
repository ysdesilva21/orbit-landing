import React, { useRef } from "react";
import { gsap } from "gsap";

export const ReportingTakesDaysCard: React.FC = () => {
  const outerCardRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  /*
  ============================================================
  REDUCED MOTION
  ============================================================
  */

  const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /*
  ============================================================
  OUTER CARD HOVER
  ============================================================
  */

  const handleOuterEnter = () => {
    const card = outerCardRef.current;

    if (!card || prefersReducedMotion()) return;

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

    gsap.to(".reporting-connection", {
      opacity: 0.65,
      duration: 0.35,
      ease: "power2.out",
      overwrite: true,
    });
  };

  /*
  ============================================================
  OUTER CARD LEAVE
  ============================================================
  */

  const handleOuterLeave = () => {
    const card = outerCardRef.current;

    if (!card || prefersReducedMotion()) return;

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

    gsap.to(".reporting-connection", {
      opacity: 0.4,
      duration: 0.4,
      ease: "power3.out",
      overwrite: true,
    });
  };

  /*
  ============================================================
  NODE HOVER
  ============================================================
  */

  const handleNodeEnter = (index: number) => {
    const node = nodeRefs.current[index];

    if (!node || prefersReducedMotion()) return;

    gsap.to(node, {
      y: -5,
      scale: 1.035,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });
  };

  /*
  ============================================================
  NODE LEAVE
  ============================================================
  */

  const handleNodeLeave = (index: number) => {
    const node = nodeRefs.current[index];

    if (!node || prefersReducedMotion()) return;

    gsap.to(node, {
      y: 0,
      scale: 1,
      duration: 0.4,
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
        justify-between
        select-none
        bg-[#C6D0D9]/10
        will-change-transform
      "
    >
      <div>
        {/* =====================================================
            TITLE
        ===================================================== */}

        <h3
          className="
            text-xl
            sm:text-2xl
            font-bold
            text-center
            text-[var(--primary)]
            mb-8
            sm:mb-10
          "
        >
          Reporting takes days
        </h3>

        {/* =====================================================
            DIAGRAM CONTAINER
        ===================================================== */}

        <div
          className="
            relative
            w-full
            max-w-[320px]
            mx-auto
            h-[260px]
            mb-6
            flex
            items-center
            justify-center
          "
        >
          {/* ===================================================
              GRAPH AREA
          =================================================== */}

          <div
            className="
              relative
              w-full
              h-[220px]
              mt-15
            "
          >
            {/* =================================================
                DASHED LOOP
            ================================================= */}

            <svg
              className="
                absolute
                inset-0
                w-full
                h-full
                pointer-events-none
                z-0
                overflow-visible
              "
              viewBox="0 0 280 220"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* =================================================
                  TOP → RIGHT
              ================================================= */}

              <path
                d="
                  M 68 24
                  H 200
                  A 12 12 0 0 1 212 36
                  V 90
                "
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="
                  dash-line
                  reporting-connection
                  opacity-40
                "
                fill="none"
                vectorEffect="non-scaling-stroke"
              />

              {/* =================================================
                  RIGHT → BOTTOM
              ================================================= */}

              <path
                d="
                  M 212 130
                  V 184
                  A 12 12 0 0 1 200 196
                  H 80
                "
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="
                  dash-line
                  reporting-connection
                  opacity-40
                "
                fill="none"
                vectorEffect="non-scaling-stroke"
              />

              {/* =================================================
                  BOTTOM → LEFT
              ================================================= */}

              <path
                d="
                  M 80 196
                  H 68
                  A 12 12 0 0 1 56 184
                  V 130
                "
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="
                  dash-line
                  reporting-connection
                  opacity-40
                "
                fill="none"
                vectorEffect="non-scaling-stroke"
              />

              {/* =================================================
                  LEFT → TOP
              ================================================= */}

              <path
                d="
                  M 56 90
                  V 36
                  A 12 12 0 0 1 68 24
                "
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="
                  dash-line
                  reporting-connection
                  opacity-40
                "
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* =================================================
                TOP NODE — DATA
            ================================================= */}

            <div
              className="
                absolute
                top-[2px]
                left-1/2
                -translate-x-1/2
                z-10
              "
            >
              <div
                ref={(el) => {
                  nodeRefs.current[0] = el;
                }}
                onMouseEnter={() => handleNodeEnter(0)}
                onMouseLeave={() => handleNodeLeave(0)}
                className="
                  relative
                  min-w-[125px]
                  border
                  border-[#EBE8F0]
                  rounded-[10px]
                  px-3.5
                  py-2
                  flex
                  items-center
                  justify-between
                  gap-4
                  backdrop-blur-xs
                  shadow-sm
                  bg-[#f1f1f5]
                  will-change-transform
                  cursor-pointer
                  z-10
                "
              >
                <span
                  className="
                    text-[11px]
                    sm:text-xs
                    font-semibold
                    leading-none
                    text-[var(--ternary)]
                  "
                >
                  Data
                </span>

                <span
                  className="
                    text-xs
                    sm:text-sm
                    font-bold
                    leading-none
                    text-[var(--primary)]
                  "
                >
                  659k
                </span>
              </div>
            </div>

            {/* =================================================
                RIGHT NODE — EXPORT
            ================================================= */}

            <div
              className="
                absolute
                right-[0px]
                top-1/2
                -translate-y-1/2
                z-10
              "
            >
              <div
                ref={(el) => {
                  nodeRefs.current[1] = el;
                }}
                onMouseEnter={() => handleNodeEnter(1)}
                onMouseLeave={() => handleNodeLeave(1)}
                className="
                  relative
                  min-w-[145px]
                  border
                  border-[#EBE8F0]
                  rounded-[10px]
                  px-3.5
                  py-2
                  flex
                  items-center
                  justify-between
                  gap-4
                  backdrop-blur-xs
                  shadow-sm
                  bg-[#f1f1f5]
                  will-change-transform
                  cursor-pointer
                  z-10
                "
              >
                <span
                  className="
                    text-[11px]
                    sm:text-xs
                    font-semibold
                    leading-none
                    text-[var(--ternary)]
                  "
                >
                  Export
                </span>

                <span
                  className="
                    text-[10px]
                    sm:text-[11px]
                    font-bold
                    leading-none
                    text-[var(--primary)]
                    uppercase
                    tracking-tight
                  "
                >
                  CSV / XLS
                </span>
              </div>
            </div>

            {/* =================================================
                BOTTOM NODE — FORMAT
            ================================================= */}

            <div
              className="
                absolute
                bottom-[2px]
                left-1/2
                -translate-x-1/2
                z-10
              "
            >
              <div
                ref={(el) => {
                  nodeRefs.current[2] = el;
                }}
                onMouseEnter={() => handleNodeEnter(2)}
                onMouseLeave={() => handleNodeLeave(2)}
                className="
                  relative
                  min-w-[130px]
                  border
                  border-[#EBE8F0]
                  rounded-[10px]
                  px-3.5
                  py-2
                  flex
                  items-center
                  justify-between
                  gap-4
                  backdrop-blur-xs
                  shadow-sm
                  bg-[#f1f1f5]
                  will-change-transform
                  cursor-pointer
                  z-10
                "
              >
                <span
                  className="
                    text-[11px]
                    sm:text-xs
                    font-semibold
                    leading-none
                    text-[var(--ternary)]
                  "
                >
                  Format
                </span>

                <span
                  className="
                    text-xs
                    sm:text-sm
                    font-bold
                    leading-none
                    text-[var(--primary)]
                  "
                >
                  Slides
                </span>
              </div>
            </div>

            {/* =================================================
                LEFT NODE — SHARE
            ================================================= */}

            <div
              className="
                absolute
                left-[0px]
                top-1/2
                -translate-y-1/2
                z-10
              "
            >
              <div
                ref={(el) => {
                  nodeRefs.current[3] = el;
                }}
                onMouseEnter={() => handleNodeEnter(3)}
                onMouseLeave={() => handleNodeLeave(3)}
                className="
                  relative
                  min-w-[125px]
                  border
                  border-[#EBE8F0]
                  rounded-[10px]
                  px-3.5
                  py-2
                  flex
                  items-center
                  justify-between
                  gap-4
                  backdrop-blur-xs
                  shadow-sm
                  bg-[#f1f1f5]
                  will-change-transform
                  cursor-pointer
                  z-10
                "
              >
                <span
                  className="
                    text-[11px]
                    sm:text-xs
                    font-semibold
                    leading-none
                    text-[var(--ternary)]
                  "
                >
                  Share
                </span>

                <span
                  className="
                    text-xs
                    sm:text-sm
                    font-bold
                    leading-none
                    text-[var(--primary)]
                  "
                >
                  Team
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =======================================================
          DESCRIPTION
      ======================================================= */}

      <p
        className="
          font-medium
          text-base
          sm:text-sm
          leading-relaxed
          mt-1
          sm:mt-4
          text-[var(--primary)]
        "
      >
        By the time the deck is exported, formatted, and shared, the
        numbers inside it are already a week old.
      </p>
    </div>
  );
};

export default ReportingTakesDaysCard;