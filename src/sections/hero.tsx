'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AIInsightCard from '../components/cards/hero/AIInsightCard';
import BusinessOverviewCard from '../components/cards/hero/BusinessOverviewCard';
import AIWorkflowCard from '../components/cards/hero/AIWorkflowCard';
import HeroBG from '../assets/images/orbit-hero-bg.png';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const canvasRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  // Card refs
  const cardInsightRef = useRef<HTMLDivElement>(null);
  const cardOverviewRef = useRef<HTMLDivElement>(null);
  const cardWorkflowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      // -------------------------------------------------------------
      // REDUCED MOTION
      // -------------------------------------------------------------

      if (prefersReducedMotion) {
        gsap.set(
          [
            headlineRef.current,
            descriptionRef.current,
            ctaRef.current,
            bgImageRef.current,
            canvasRef.current,
            cardInsightRef.current,
            cardOverviewRef.current,
            cardWorkflowRef.current,
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

      const customEase = 'cubic-bezier(0.22, 1, 0.36, 1)';

      // -------------------------------------------------------------
      // INITIAL STATES
      // -------------------------------------------------------------

      // Text
      gsap.set(
        [
          headlineRef.current,
          descriptionRef.current,
          ctaRef.current,
        ],
        {
          opacity: 0,
          y: 18,
        }
      );

      // Background
      gsap.set(bgImageRef.current, {
        opacity: 0,
        scale: 0.98,
      });

      // Cards
      gsap.set(
        [
          cardInsightRef.current,
          cardOverviewRef.current,
          cardWorkflowRef.current,
        ],
        {
          opacity: 0,
          y: 24,
          scale: 0.95,
        }
      );

      // -------------------------------------------------------------
      // ENTRANCE ANIMATION
      // -------------------------------------------------------------

      const entranceTl = gsap.timeline({
        delay: 0.1,
        defaults: {
          ease: customEase,
        },
      });

      entranceTl
        // Headline
        .to(headlineRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
        })

        // Description
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          '-=0.55'
        )

        // CTA
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
          },
          '-=0.5'
        )

        // Background
        .to(
          bgImageRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.9,
          },
          '-=0.7'
        )

        // Cards
        .to(
          [
            cardInsightRef.current,
            cardOverviewRef.current,
            cardWorkflowRef.current,
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
          },
          '-=0.55'
        );

      // -------------------------------------------------------------
      // SCROLL-DRIVEN PARALLAX
      // -------------------------------------------------------------
      //
      // IMPORTANT:
      // No opacity changes here.
      //
      // The hero remains fully visible while scrolling.
      // The movement simply creates depth.
      //
      // Because this uses scrub, scrolling upward reverses
      // the animation naturally.
      // -------------------------------------------------------------

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.1,
          invalidateOnRefresh: true,
        },
      });

      // -------------------------------------------------------------
      // TEXT
      // -------------------------------------------------------------

      scrollTl.to(
        headlineRef.current,
        {
          y: -18,
          ease: 'none',
        },
        0
      );

      scrollTl.to(
        descriptionRef.current,
        {
          y: -24,
          ease: 'none',
        },
        0
      );

      scrollTl.to(
        ctaRef.current,
        {
          y: -28,
          ease: 'none',
        },
        0
      );

      // -------------------------------------------------------------
      // BACKGROUND
      // -------------------------------------------------------------

      scrollTl.to(
        bgImageRef.current,
        {
          y: -10,
          ease: 'none',
        },
        0
      );

      // -------------------------------------------------------------
      // VISUAL CANVAS
      // -------------------------------------------------------------

      scrollTl.to(
        canvasRef.current,
        {
          y: -12,
          ease: 'none',
        },
        0
      );

      // -------------------------------------------------------------
      // CARD PARALLAX
      // -------------------------------------------------------------

      // Insight card
      scrollTl.to(
        cardInsightRef.current,
        {
          y: -30,
          x: -5,
          ease: 'none',
        },
        0
      );

      // Business overview
      scrollTl.to(
        cardOverviewRef.current,
        {
          y: -17,
          x: 7,
          ease: 'none',
        },
        0
      );

      // AI workflow
      scrollTl.to(
        cardWorkflowRef.current,
        {
          y: -36,
          x: -4,
          ease: 'none',
        },
        0
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white"
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          px-6
          pt-8
          pb-0
          sm:px-10
          md:py-12
          lg:flex-row
          lg:py-20
        "
      >
        {/* =========================================================
            LEFT CONTENT
        ========================================================= */}

        <div
          className="
            z-10
            w-full
            pb-10
            pt-6
            md:pb-12
            lg:w-1/2
            lg:pb-0
            lg:pt-10
          "
        >
          {/* -------------------------------------------------------
              HEADLINE
          ------------------------------------------------------- */}

          <h1
            ref={headlineRef}
            className="
              mb-5
              whitespace-nowrap
              text-heading
              leading-tight
              will-change-transform
            "
          >
            Your business{' '}
            <span
              className="
                font-normal
                italic
                text-[var(--secondary)]
              "
              style={{
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              data.
            </span>

            <br />

            One{' '}
            <span
              className="
                font-normal
                italic
                text-[var(--secondary)]
              "
              style={{
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              intelligent
            </span>{' '}
            view.
          </h1>

          {/* -------------------------------------------------------
              DESCRIPTION
          ------------------------------------------------------- */}

          <p
            ref={descriptionRef}
            className="
              mb-8
              max-w-lg
              text-body
              will-change-transform
            "
          >
            Orbit connects the tools your business already runs on,
            analyzes the data with AI, and surfaces the insights that
            matter, without requiring a team of analysts to find them.
          </p>

          {/* -------------------------------------------------------
              CTA
          ------------------------------------------------------- */}

          <div
            ref={ctaRef}
            className="
              flex
              items-center
              gap-3
              will-change-transform
              sm:gap-6
            "
          >
            <button
              type="button"
              className="
                primary-button
                rounded-lg
                px-4
                py-2
                text-[15px]
                font-medium
                active:scale-95
              "
            >
              Start Analyzing
            </button>

            <button
              type="button"
              className="
                secondary-button
                rounded-lg
                px-4
                py-2
                text-[15px]
                font-semibold
                active:scale-95
              "
            >
              View Problem
            </button>
          </div>
        </div>

        {/* =========================================================
            RIGHT CONTENT — VISUAL CANVAS
        ========================================================= */}

        <div
          className="
            relative
            -mx-6
            w-[calc(100%+3rem)]
            md:mx-0
            md:w-full
            md:max-w-[620px]
            lg:w-1/2
            lg:max-w-[540px]
          "
        >
          <div
            ref={canvasRef}
            className="
              relative
              h-[620px]
              w-full
              overflow-hidden
              will-change-transform
              md:h-[480px]
              md:rounded-[15px]
              lg:h-[560px]
            "
          >
            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div
              ref={bgImageRef}
              className="
                absolute
                inset-0
                will-change-transform
              "
            >
              <img
                src={HeroBG}
                alt="Orbit Hero Background"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            </div>

            {/* =====================================================
                AI INSIGHT CARD
            ===================================================== */}

            <div
              ref={cardInsightRef}
              className="
                absolute
                -left-2
                top-[4%]
                z-20
                origin-top-left
                will-change-transform
                md:left-[4%]
                md:top-[4%]
                md:scale-[0.88]
                lg:scale-100
              "
            >
              <AIInsightCard />
            </div>

            {/* =====================================================
                BUSINESS OVERVIEW CARD
            ===================================================== */}

            <div
              ref={cardOverviewRef}
              className="
                absolute
                -right-50
                top-[15%]
                z-10
                origin-top-right
                will-change-transform
                md:right-[4%]
                md:top-[22%]
                md:scale-[0.88]
                lg:scale-100
              "
            >
              <BusinessOverviewCard />
            </div>

            {/* =====================================================
                AI WORKFLOW CARD
            ===================================================== */}

            <div
              ref={cardWorkflowRef}
              className="
                absolute
                -left-2
                bottom-[10%]
                z-20
                origin-bottom-left
                will-change-transform
                md:left-[4%]
                md:bottom-[4%]
                md:scale-[0.88]
                lg:scale-100
              "
            >
              <AIWorkflowCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}