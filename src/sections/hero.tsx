'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AIInsightCard from '../components/cards/AIInsightCard';
import BusinessOverviewCard from '../components/cards/BusinessOverviewCard';
import AIWorkflowCard from '../components/cards/AIWorkflowCard';

// Register ScrollTrigger plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const dashboardContainerRef = useRef<HTMLDivElement>(null);
  const cardInsightRef = useRef<HTMLDivElement>(null);
  const cardOverviewRef = useRef<HTMLDivElement>(null);
  const cardWorkflowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Check for user reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        // Simple accessibility fallback: Opacity-only fades
        gsap.set(
          [
            headlineRef.current,
            descriptionRef.current,
            ctaRef.current,
            dashboardContainerRef.current,
          ],
          { opacity: 0 }
        );

        gsap.to(
          [
            headlineRef.current,
            descriptionRef.current,
            ctaRef.current,
            dashboardContainerRef.current,
          ],
          {
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
          }
        );
        return;
      }

      // -------------------------------------------------------------
      // 1. Initial Load Entrance Sequence
      // Custom Easing: cubic-bezier(0.22, 1, 0.36, 1) -> "power3.out" or custom string
      // -------------------------------------------------------------
      const customEase = 'cubic-bezier(0.22, 1, 0.36, 1)';

      // Set initial states
      gsap.set([headlineRef.current, descriptionRef.current, ctaRef.current], {
        opacity: 0,
        y: 20,
      });

      gsap.set(dashboardContainerRef.current, {
        opacity: 0,
        y: 16,
        scale: 0.98,
      });

      const entranceTl = gsap.timeline({ defaults: { ease: customEase } });

      entranceTl
        .to(headlineRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.1,
        })
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
          },
          '-=0.85'
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          '-=0.75'
        )
        .to(
          dashboardContainerRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
          },
          '-=0.8'
        );

      // -------------------------------------------------------------
      // 2. Scroll-Driven Animation (Scrubbing)
      // -------------------------------------------------------------
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6, // Smooth scrubbing response
          invalidateOnRefresh: true,
        },
      });

      // Subtle vertical / parallax movement on Left Content
      scrollTl.to(
        headlineRef.current,
        {
          y: -30,
          opacity: 0.2,
          ease: 'none',
        },
        0
      );

      // Supporting text & CTAs move slightly faster to create restrained depth
      scrollTl.to(
        [descriptionRef.current, ctaRef.current],
        {
          y: -48,
          opacity: 0.1,
          ease: 'none',
        },
        0
      );

      // Main Dashboard Anchor scaling down to ~0.96 with small upward movement
      scrollTl.to(
        dashboardContainerRef.current,
        {
          scale: 0.96,
          y: -20,
          ease: 'none',
        },
        0
      );

      // Subtle internal card parallax movements to give life to the UI
      scrollTl.to(
        cardInsightRef.current,
        {
          y: -14,
          x: -4,
          ease: 'none',
        },
        0
      );

      scrollTl.to(
        cardOverviewRef.current,
        {
          y: -8,
          x: 4,
          ease: 'none',
        },
        0
      );

      scrollTl.to(
        cardWorkflowRef.current,
        {
          y: -22,
          ease: 'none',
        },
        0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 pt-8 pb-0 sm:px-10 md:py-12 lg:flex-row lg:py-20">
        
        {/* Left Content */}
        <div className="z-10 w-full pb-20 pt-10 lg:w-1/2 lg:pb-0">

          {/* Heading */}
          <h1
            ref={headlineRef}
            className="mb-5 text-[34px] font-medium leading-[1.12] text-[var(--primary)] sm:text-[42px] md:text-[52px] lg:text-[64px]"
          >
            Your business{' '}
            <span
              className="font-normal italic text-[var(--accent)]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              data.
            </span>
            <br />
            One{' '}
            <span
              className="font-normal italic text-[var(--accent)]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              intelligent
            </span>{' '}
            view.
          </h1>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="mb-8 max-w-lg text-[18px] font-medium leading-[1.55] text-[var(--ternary)] sm:text-[16px] md:text-[18px]"
          >
            Orbit connects the tools your business already runs on, analyzes
            the data with AI, and surfaces the insights that matter, without
            requiring a team of analysts to find them.
          </p>

          {/* Buttons */}
          <div ref={ctaRef} className="flex items-center gap-3 sm:gap-6">
            
            {/* Primary Button */}
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

            {/* Secondary Button */}
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

        {/* Right Content - Visual Canvas */}
        <div className="-mx-6 relative w-[calc(100%+3rem)] lg:mx-0 lg:w-1/2 lg:max-w-[540px]">
          
          {/* Main Visual Canvas Area */}
          <div
            ref={dashboardContainerRef}
            className="relative h-[680px] w-full overflow-hidden lg:h-[560px] lg:rounded-[28px]"
          >

            {/* Background Image Container */}
            <div className="absolute inset-0 bg-[#C1C9DF]">
              <img
                src="/orbit-hero-bg.png"
                alt="Orbit Hero Background"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* AI Insight Card (Top-Left Position) */}
            <div
              ref={cardInsightRef}
              className="absolute -left-4 top-[6%] z-20 md:left-[3%] md:top-[3%]"
            >
              <AIInsightCard />
            </div>

            {/* Business Overview Card (Center-Right Position) */}
            <div
              ref={cardOverviewRef}
              className="absolute -right-40 top-[24%] z-10 md:right-[3%] md:top-[18%]"
            >
              <BusinessOverviewCard />
            </div>

            {/* AI Workflow Card (Bottom-Left Position) */}
            <div
              ref={cardWorkflowRef}
              className="absolute -left-3 bottom-[6%] z-20 md:left-[6%] md:bottom-[4%]"
            >
              <AIWorkflowCard />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}