import React, { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

import Revenue from "../../../assets/icons/stripe.png";
import Database from "../../../assets/icons/database.png";
import CRM from "../../../assets/icons/crm.png";

export const DataScatteredCard: React.FC = () => {
  /*
  ============================================================
  REFS
  ============================================================
  */

  const outerCardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const revenueCardRef = useRef<HTMLDivElement>(null);
  const databaseCardRef = useRef<HTMLDivElement>(null);
  const crmCardRef = useRef<HTMLDivElement>(null);

  const questionBadgeRef = useRef<HTMLDivElement>(null);

  /*
  ============================================================
  SVG PATH STATE
  ============================================================
  */

  const [paths, setPaths] = useState({
    revenuePath: "",
    databasePath: "",
    crmPath: "",
  });

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

    /*
     * Outer card
     */

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
     * Question badge
     */

    if (questionBadgeRef.current) {
      gsap.to(questionBadgeRef.current, {
        scale: 1.05,
        duration: 0.4,
        ease: "power3.out",
        overwrite: true,
      });
    }

    /*
     * Connector lines
     */

    gsap.to(".scattered-connection", {
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

    /*
     * Outer card
     */

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
     * Question badge
     */

    if (questionBadgeRef.current) {
      gsap.to(questionBadgeRef.current, {
        scale: 1,
        duration: 0.45,
        ease: "power3.out",
        overwrite: true,
      });
    }

    /*
     * Connector lines
     */

    gsap.to(".scattered-connection", {
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

  const handleCardEnter = (
    cardRef: React.RefObject<HTMLDivElement | null>
  ) => {
    const card = cardRef.current;

    if (!card || prefersReducedMotion()) return;

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
     * Icon / image
     */

    const icon = card.querySelector(".scattered-icon");

    if (icon) {
      gsap.to(icon, {
        scale: 1.12,
        rotate: 4,
        duration: 0.3,
        ease: "power2.out",
        overwrite: true,
      });
    }
  };

  /*
  ============================================================
  SMALL CARD LEAVE
  ============================================================
  */

  const handleCardLeave = (
    cardRef: React.RefObject<HTMLDivElement | null>
  ) => {
    const card = cardRef.current;

    if (!card || prefersReducedMotion()) return;

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
     * Icon / image
     */

    const icon = card.querySelector(".scattered-icon");

    if (icon) {
      gsap.to(icon, {
        scale: 1,
        rotate: 0,
        duration: 0.4,
        ease: "power3.out",
        overwrite: true,
      });
    }
  };

  /*
  ============================================================
  UPDATE SVG PATHS
  ============================================================
  */

  const updatePaths = () => {
    if (
      !containerRef.current ||
      !revenueCardRef.current ||
      !databaseCardRef.current ||
      !crmCardRef.current ||
      !questionBadgeRef.current
    ) {
      return;
    }

    const container = containerRef.current;
    const cRect = container.getBoundingClientRect();

    /*
     * Scale calculation to adjust for CSS transforms
     */

    const scaleX =
      container.offsetWidth > 0
        ? cRect.width / container.offsetWidth
        : 1;

    const scaleY =
      container.offsetHeight > 0
        ? cRect.height / container.offsetHeight
        : 1;

    const getRelPoint = (
      rect: DOMRect,
      xPos: "left" | "center" | "right",
      yPos: "top" | "center" | "bottom"
    ) => {
      let x = (rect.left - cRect.left) / scaleX;
      let y = (rect.top - cRect.top) / scaleY;

      const w = rect.width / scaleX;
      const h = rect.height / scaleY;

      if (xPos === "center") x += w / 2;
      if (xPos === "right") x += w;

      if (yPos === "center") y += h / 2;
      if (yPos === "bottom") y += h;

      return { x, y };
    };

    const revRect =
      revenueCardRef.current.getBoundingClientRect();

    const dbRect =
      databaseCardRef.current.getBoundingClientRect();

    const crmRect =
      crmCardRef.current.getBoundingClientRect();

    const qRect =
      questionBadgeRef.current.getBoundingClientRect();

    const radius = 12;

    /*
     ============================================================
     1. REVENUE -> QUESTION
     ============================================================
    */

    const revStart = getRelPoint(
      revRect,
      "center",
      "bottom"
    );

    const qLeft = getRelPoint(
      qRect,
      "left",
      "center"
    );

    const revMidY = qLeft.y;

    const revRadius = Math.min(
      radius,
      Math.abs(revMidY - revStart.y)
    );

    const revPathStr = `
      M ${revStart.x} ${revStart.y}
      V ${revMidY - revRadius}
      A ${revRadius} ${revRadius}
      0 0 0
      ${revStart.x + revRadius} ${revMidY}
      H ${qLeft.x}
    `;

    /*
     ============================================================
     2. DATABASE -> QUESTION
     ============================================================
    */

    const dbStart = getRelPoint(
      dbRect,
      "center",
      "top"
    );

    const qTop = getRelPoint(
      qRect,
      "center",
      "top"
    );

    const peakY = Math.min(
      dbStart.y - 30,
      qTop.y - 50
    );

    const dbRadius = Math.min(
      radius,
      Math.abs(dbStart.x - qTop.x) / 2,
      Math.abs(dbStart.y - peakY)
    );

    const dbPathStr = `
      M ${qTop.x} ${qTop.y}
      V ${peakY + dbRadius}
      A ${dbRadius} ${dbRadius}
      0 0 1
      ${qTop.x + dbRadius} ${peakY}
      H ${dbStart.x - dbRadius}
      A ${dbRadius} ${dbRadius}
      0 0 1
      ${dbStart.x} ${peakY + dbRadius}
      V ${dbStart.y}
    `;

    /*
     ============================================================
     3. CRM -> QUESTION
     ============================================================
    */

    const crmStart = getRelPoint(
      crmRect,
      "center",
      "top"
    );

    const qBottom = getRelPoint(
      qRect,
      "center",
      "bottom"
    );

    const crmPathStr = `
      M ${crmStart.x} ${crmStart.y}
      V ${qBottom.y}
    `;

    setPaths({
      revenuePath: revPathStr,
      databasePath: dbPathStr,
      crmPath: crmPathStr,
    });
  };

  /*
  ============================================================
  LAYOUT / RESIZE
  ============================================================
  */

  useLayoutEffect(() => {
    updatePaths();

    const container = containerRef.current;

    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      updatePaths();
    });

    resizeObserver.observe(container);

    window.addEventListener("resize", updatePaths);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePaths);
    };
  }, []);

  /*
  ============================================================
  RENDER
  ============================================================
  */

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
      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div>
        {/* =====================================================
            TITLE
        ===================================================== */}

        <h2
          className="
            text-xl
            sm:text-2xl
            font-bold
            text-center
            mb-6
            sm:mb-8
            text-[var(--primary)]
          "
        >
          Data scattered everywhere
        </h2>

        {/* =====================================================
            DIAGRAM AREA
        ===================================================== */}

        <div
          ref={containerRef}
          className="
            relative
            w-full
            h-[300px]
            sm:h-[320px]
            my-2
            flex
            items-center
            justify-center
          "
        >
          {/* ===================================================
              SVG CONNECTOR LINES
          =================================================== */}

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
          >
            {/* Revenue -> ? */}

            <path
              d={paths.revenuePath}
              stroke="var(--accent)"
              strokeWidth="1.5"
              className="
                dash-line
                scattered-connection
                opacity-50
                fill-none
              "
              vectorEffect="non-scaling-stroke"
            />

            {/* Database -> ? */}

            <path
              d={paths.databasePath}
              stroke="var(--accent)"
              strokeWidth="1.5"
              className="
                dash-line
                scattered-connection
                opacity-50
                fill-none
              "
              vectorEffect="non-scaling-stroke"
            />

            {/* CRM -> ? */}

            <path
              d={paths.crmPath}
              stroke="var(--accent)"
              strokeWidth="1.5"
              className="
                dash-line
                scattered-connection
                opacity-50
                fill-none
              "
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* ===================================================
              REVENUE CARD
          =================================================== */}

          <div
            ref={revenueCardRef}
            onMouseEnter={() =>
              handleCardEnter(revenueCardRef)
            }
            onMouseLeave={() =>
              handleCardLeave(revenueCardRef)
            }
            className="
              absolute
              top-2
              left-0
              z-10
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
            <div
              className="
                scattered-icon
                w-9
                h-9
                sm:w-10
                sm:h-10
                shrink-0
                rounded-full
                flex
                items-center
                justify-center
                overflow-hidden
                will-change-transform
              "
            >
              <img
                src={Revenue}
                alt="Revenue"
                className="
                  w-full
                  h-full
                  object-contain
                "
              />
            </div>

            <div className="min-w-0">
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
                Revenue
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
                $482k
              </p>
            </div>
          </div>

          {/* ===================================================
              DATABASE CARD
          =================================================== */}

          <div
            ref={databaseCardRef}
            onMouseEnter={() =>
              handleCardEnter(databaseCardRef)
            }
            onMouseLeave={() =>
              handleCardLeave(databaseCardRef)
            }
            className="
              absolute
              top-[135px]
              sm:top-[145px]
              right-0
              z-10
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
            <div
              className="
                scattered-icon
                w-9
                h-9
                sm:w-10
                sm:h-10
                shrink-0
                rounded-full
                flex
                items-center
                justify-center
                overflow-hidden
                will-change-transform
              "
            >
              <img
                src={Database}
                alt="Database"
                className="
                  w-full
                  h-full
                  object-contain
                "
              />
            </div>

            <div className="min-w-0">
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
                Database
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
                9.2k Users
              </p>
            </div>
          </div>

          {/* ===================================================
              QUESTION BADGE
          =================================================== */}

          <div
            ref={questionBadgeRef}
            className="
              absolute
              top-[130px]
              sm:top-[140px]
              left-[calc(50%-2.5rem)]
              -translate-x-1/2
              z-20
              will-change-transform
            "
          >
            <div
              className="
                w-10
                h-10
                sm:w-11
                sm:h-11
                rounded-full
                border-2
                border-dashed
                border-[var(--accent)]
                bg-white
                flex
                items-center
                justify-center
                shadow-sm
              "
            >
              <span
                className="
                  font-semibold
                  text-base
                  sm:text-lg
                  text-[var(--accent)]
                "
              >
                ?
              </span>
            </div>
          </div>

          {/* ===================================================
              CRM CARD
          =================================================== */}

          <div
            ref={crmCardRef}
            onMouseEnter={() =>
              handleCardEnter(crmCardRef)
            }
            onMouseLeave={() =>
              handleCardLeave(crmCardRef)
            }
            className="
              absolute
              bottom-2
              left-[calc(50%-2.5rem)]
              -translate-x-1/2
              z-10
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
            <div
              className="
                scattered-icon
                w-9
                h-9
                sm:w-10
                sm:h-10
                shrink-0
                rounded-full
                flex
                items-center
                justify-center
                overflow-hidden
                will-change-transform
              "
            >
              <img
                src={CRM}
                alt="CRM"
                className="
                  w-full
                  h-full
                  object-contain
                "
              />
            </div>

            <div className="min-w-0">
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
                CRM
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
                42 Deals
              </p>
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
        Revenue in your billing tool. Usage in your product database.
        Pipeline in the CRM. Nobody has the full picture, so every
        answer starts with a Slack thread.
      </p>
    </div>
  );
};

export default DataScatteredCard;