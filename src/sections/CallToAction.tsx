import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CallToAction: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const glowLeftRef = useRef<HTMLDivElement | null>(null);
  const glowRightRef = useRef<HTMLDivElement | null>(null);

  const gridRef = useRef<HTMLDivElement | null>(null);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const actionsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            cardRef.current,
            eyebrowRef.current,
            headingRef.current,
            descriptionRef.current,
            actionsRef.current,
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          }
        );

        return;
      }

      /*
      ========================================================
      INITIAL STATES
      ========================================================
      */

      gsap.set(cardRef.current, {
        opacity: 0,
        y: 45,
        scale: 0.985,
      });

      gsap.set(eyebrowRef.current, {
        opacity: 0,
        y: 18,
      });

      gsap.set(headingRef.current, {
        opacity: 0,
        y: 28,
      });

      gsap.set(descriptionRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(actionsRef.current, {
        opacity: 0,
        y: 22,
      });

      gsap.set(gridRef.current, {
        opacity: 0,
      });

      gsap.set([glowLeftRef.current, glowRightRef.current], {
        opacity: 0,
      });

      /*
      ========================================================
      SCROLL-DRIVEN ANIMATION
      ========================================================
      */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
          end: 'bottom 58%',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      /*
      --------------------------------------------------------
      Card
      --------------------------------------------------------
      */

      tl.to(
        cardRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: 'none',
        },
        0
      );

      /*
      --------------------------------------------------------
      Background
      --------------------------------------------------------
      */

      tl.to(
        gridRef.current,
        {
          opacity: 0.4,
          ease: 'none',
        },
        0.08
      );

      tl.to(
        [glowLeftRef.current, glowRightRef.current],
        {
          opacity: 1,
          ease: 'none',
        },
        0
      );

      /*
      --------------------------------------------------------
      Text
      --------------------------------------------------------
      */

      tl.to(
        eyebrowRef.current,
        {
          opacity: 1,
          y: 0,
          ease: 'none',
        },
        0.12
      );

      tl.to(
        headingRef.current,
        {
          opacity: 1,
          y: 0,
          ease: 'none',
        },
        0.18
      );

      tl.to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          ease: 'none',
        },
        0.28
      );

      /*
      --------------------------------------------------------
      Actions
      --------------------------------------------------------
      */

      tl.to(
        actionsRef.current,
        {
          opacity: 1,
          y: 0,
          ease: 'none',
        },
        0.34
      );

      /*
      ========================================================
      SUBTLE PARALLAX
      ========================================================
      */

      tl.to(
        cardRef.current,
        {
          y: -8,
          ease: 'none',
        },
        0.6
      );

      tl.to(
        headingRef.current,
        {
          y: -6,
          ease: 'none',
        },
        0.6
      );

      tl.to(
        descriptionRef.current,
        {
          y: -8,
          ease: 'none',
        },
        0.6
      );

      tl.to(
        actionsRef.current,
        {
          y: -10,
          ease: 'none',
        },
        0.6
      );

      /*
      --------------------------------------------------------
      Background depth
      --------------------------------------------------------
      */

      tl.to(
        glowLeftRef.current,
        {
          x: -20,
          y: -12,
          ease: 'none',
        },
        0
      );

      tl.to(
        glowRightRef.current,
        {
          x: 20,
          y: 12,
          ease: 'none',
        },
        0
      );

      tl.to(
        gridRef.current,
        {
          y: -10,
          ease: 'none',
        },
        0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24"
    >
      {/* ====================================================
          BACKGROUND ACCENTS
      ==================================================== */}

      <div
        ref={glowLeftRef}
        className="
          pointer-events-none
          absolute
          left-1/4
          top-1/2
          h-80
          w-80
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#5C3E94]/10
          blur-[120px]
          will-change-transform
        "
      />

      <div
        ref={glowRightRef}
        className="
          pointer-events-none
          absolute
          right-1/4
          top-1/2
          h-80
          w-80
          translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#F25912]/8
          blur-[120px]
          will-change-transform
        "
      />

      {/* ====================================================
          CONTAINER
      ==================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* ==================================================
            CTA CARD
        ================================================== */}

        <div
          ref={cardRef}
          className="
            main-card
            card
            relative
            overflow-hidden
            p-8
            md:p-14
            will-change-transform
          "
        >
          {/* ==================================================
              SUBTLE GRID
          ================================================== */}

          <div
            ref={gridRef}
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-40
              [background-image:linear-gradient(to_right,#5C3E9410_1px,transparent_1px),linear-gradient(to_bottom,#5C3E9410_1px,transparent_1px)]
              [background-size:24px_24px]
              will-change-transform
            "
          />

          {/* ==================================================
              CONTENT
          ================================================== */}

          <div
            ref={contentRef}
            className="
              relative
              z-10
              flex
              flex-col
              items-center
              justify-between
              gap-10
              lg:flex-row
            "
          >
            {/* ==================================================
                TEXT
            ================================================== */}

            <div className="max-w-2xl text-center lg:text-left">

              {/* Eyebrow */}

              <div
                ref={eyebrowRef}
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                  will-change-transform
                "
              >
                <Sparkles
                  className="h-3.5 w-3.5 text-[var(--accent)]"
                  strokeWidth={2}
                />

                <span className="text-eyebrow">
                  One source
                </span>
              </div>

              {/* Heading */}

              <h2
                ref={headingRef}
                className="
                  text-heading
                  max-w-2xl
                  will-change-transform
                "
              >
                Stop piecing the business{' '}
                <span className="font-serif-italic text-[var(--accent)]">
                  together.
                </span>
              </h2>

              {/* Description */}

              <p
                ref={descriptionRef}
                className="
                  text-body
                  mt-6
                  max-w-xl
                  will-change-transform
                "
              >
                Bring your revenue, customers, acquisition, and product data
                into one place — and turn it into decisions you can act on.
              </p>
            </div>

            {/* ==================================================
                ACTIONS
            ================================================== */}

            <div
              ref={actionsRef}
              className="
                flex
                w-full
                shrink-0
                flex-col
                items-center
                gap-3
                sm:w-auto
                sm:flex-row
                will-change-transform
              "
            >
              <button
                type="button"
                className="
                  primary-button
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  px-6
                  py-3
                  text-sm
                  font-medium
                  shadow-sm
                  transition-transform
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-md
                  active:translate-y-0
                  sm:w-auto
                "
              >
                <span>Start Analyzing</span>

                <ArrowRight
                  className="h-4 w-4"
                  strokeWidth={2}
                />
              </button>

              <button
                type="button"
                className="
                  secondary-button
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  px-6
                  py-3
                  text-sm
                  font-medium
                  transition-transform
                  duration-200
                  hover:-translate-y-0.5
                  sm:w-auto
                "
              >
                View Problem
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};