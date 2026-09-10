'use client';

import AIInsightCard from '../components/cards/hero/AIInsightCard';
import BusinessOverviewCard from '../components/cards/hero/BusinessOverviewCard';
import AIWorkflowCard from '../components/cards/hero/AIWorkflowCard';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 pt-8 pb-0 sm:px-10 md:py-12 lg:flex-row lg:py-20">
        
        {/* Left Content */}
        <div className="z-10 w-full pb-20 pt-10 lg:w-1/2 lg:pb-0">

          {/* Heading */}
          <h1 className="mb-5 text-[34px] font-medium leading-[1.12] text-[var(--primary)] sm:text-[42px] md:text-[52px] lg:text-[64px]">
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
          <p className="mb-8 max-w-lg text-[18px] font-medium leading-[1.55] text-[var(--ternary)] sm:text-[16px] md:text-[18px]">
            Orbit connects the tools your business already runs on, analyzes
            the data with AI, and surfaces the insights that matter, without
            requiring a team of analysts to find them.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 sm:gap-6">
            
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
          <div className="relative h-[680px] w-full overflow-hidden lg:h-[560px] lg:rounded-[15px]">

            {/* Background Image Container */}
            <div className="absolute inset-0 bg-[#C1C9DF]">
              <img
                src="/orbit-hero-bg.png"
                alt="Orbit Hero Background"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* AI Insight Card (Top-Left Position) */}
            <div className="absolute -left-4 top-[6%] z-20 md:left-[3%] md:top-[3%]">
              <AIInsightCard />
            </div>

            {/* Business Overview Card (Center-Right Position) */}
            <div className="absolute -right-40 top-[24%] z-10 md:right-[3%] md:top-[18%]">
              <BusinessOverviewCard />
            </div>

            {/* AI Workflow Card (Bottom-Left Position) */}
            <div className="absolute -left-3 bottom-[6%] z-20 md:left-[6%] md:bottom-[4%]">
              <AIWorkflowCard />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}