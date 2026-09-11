'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AIInsightCard from '../components/cards/hero/AIInsightCard';
import BusinessOverviewCard from '../components/cards/hero/BusinessOverviewCard';
import AIWorkflowCard from '../components/cards/hero/AIWorkflowCard';

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

      if (prefersReducedMotion) {
        gsap.set(
          [
            headlineRef.current,
            descriptionRef.current,
            ctaRef.current,
            bgImageRef.current,
            cardInsightRef.current,
            cardOverviewRef.current,
            cardWorkflowRef.current,
          ],
          { opacity: 1, y: 0, scale: 1 }
        );
        return;
      }

      const customEase = 'cubic-bezier(0.22, 1, 0.36, 1)';

      // -------------------------------------------------------------
      // 1. Initial State Setup
      // -------------------------------------------------------------
      gsap.set([headlineRef.current, descriptionRef.current, ctaRef.current], {
        opacity: 0,
        y: 18,
      });

      gsap.set(bgImageRef.current, {
        opacity: 0,
        scale: 0.97,
      });

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
      // 2. Entrance Sequence
      // -------------------------------------------------------------
      const entranceTl = gsap.timeline({
        delay: 0.1,
        defaults: { ease: customEase },
        onComplete: () => {
          // Initialize ScrollTrigger only AFTER entrance sequence finishes
          // to prevent property collision
          initScrollTrigger();
        },
      });

      entranceTl
        .to(headlineRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.9,
        })
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.65'
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
          },
          '-=0.55'
        )
        .to(
          bgImageRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.9,
          },
          '<'
        )
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
            duration: 0.85,
            stagger: 0.12,
          },
          '-=0.45'
        );

      // -------------------------------------------------------------
      // 3. Scroll Scrubbing Timeline with Explicit `fromTo` Bounds
      // -------------------------------------------------------------
      function initScrollTrigger() {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.0,
            invalidateOnRefresh: true,
          },
        });

        // Explicitly defining standard start state (opacity 1, y 0) -> target state on scroll
        scrollTl.fromTo(
          headlineRef.current,
          { opacity: 1, y: 0 },
          { opacity: 0.3, y: -25, ease: 'none' },
          0
        );

        scrollTl.fromTo(
          [descriptionRef.current, ctaRef.current],
          { opacity: 1, y: 0 },
          { opacity: 0.2, y: -38, ease: 'none' },
          0
        );

        scrollTl.fromTo(
          canvasRef.current,
          { y: 0, scale: 1 },
          { y: -15, scale: 0.98, ease: 'none' },
          0
        );

        scrollTl.fromTo(
          cardInsightRef.current,
          { y: 0, x: 0 },
          { y: -32, x: -6, ease: 'none' },
          0
        );

        scrollTl.fromTo(
          cardOverviewRef.current,
          { y: 0, x: 0 },
          { y: -18, x: 8, ease: 'none' },
          0
        );

        scrollTl.fromTo(
          cardWorkflowRef.current,
          { y: 0, x: 0 },
          { y: -40, x: -4, ease: 'none' },
          0
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 pt-8 pb-0 sm:px-10 md:py-12 lg:flex-row lg:py-20">
        
        {/* Left Content */}
        <div className="z-10 w-full pb-10 pt-6 md:pb-12 lg:w-1/2 lg:pb-0 lg:pt-10">

          {/* Heading */}
          <h1
            ref={headlineRef}
            className="mb-5 text-display whitespace-nowrap"
          >
            Your business{' '}
            <span
              className="font-normal italic text-[var(--secondary)]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              data.
            </span>
            <br />
            One{' '}
            <span
              className="font-normal italic text-[var(--secondary)]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              intelligent
            </span>{' '}
            view.
          </h1>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="mb-8 max-w-lg text-body"
          >
            Orbit connects the tools your business already runs on, analyzes
            the data with AI, and surfaces the insights that matter, without
            requiring a team of analysts to find them.
          </p>

          {/* Buttons */}
          <div ref={ctaRef} className="flex items-center gap-3 sm:gap-6">
            <button
              type="button"
              className="primary-button rounded-lg px-4 py-2 text-[15px] font-medium active:scale-95"
            >
              Start Analyzing
            </button>
            <button
              type="button"
              className="secondary-button rounded-lg px-4 py-2 text-[15px] font-semibold active:scale-95"
            >
              View Problem
            </button>
          </div>
        </div>

        {/* Right Content - Visual Canvas */}
        <div className="-mx-6 relative w-[calc(100%+3rem)] md:mx-0 md:w-full md:max-w-[620px] lg:w-1/2 lg:max-w-[540px]">
          
          <div
            ref={canvasRef}
            className="relative h-[620px] w-full overflow-hidden md:h-[480px] md:rounded-[15px] lg:h-[560px]"
          >

            {/* Background Image Container */}
            <div ref={bgImageRef} className="absolute inset-0">
              <img
                src="/orbit-hero-bg.png"
                alt="Orbit Hero Background"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* AI Insight Card */}
            <div
              ref={cardInsightRef}
              className="absolute -left-2 top-[4%] z-20 origin-top-left md:left-[4%] md:top-[4%] md:scale-[0.88] lg:scale-100"
            >
              <AIInsightCard />
            </div>

            {/* Business Overview Card */}
            <div
              ref={cardOverviewRef}
              className="absolute -right-50 top-[18%] z-10 origin-top-right md:right-[4%] md:top-[22%] md:scale-[0.88] lg:scale-100"
            >
              <BusinessOverviewCard />
            </div>

            {/* AI Workflow Card */}
            <div
              ref={cardWorkflowRef}
              className="absolute -left-2 bottom-[4%] z-20 origin-bottom-left md:left-[4%] md:bottom-[4%] md:scale-[0.88] lg:scale-100"
            >
              <AIWorkflowCard />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}