import AIInsightCard from '../components/cards/AIInsightCard';
import BusinessOverviewCard from '../components/cards/BusinessOverviewCard';
import AIWorkflowCard from '../components/cards/AIWorkflowCard';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-10 pt-8 pb-0 md:py-12 lg:flex-row lg:py-20">

        {/* Left Content */}
        <div className="z-10 w-full pb-20 pt-10 lg:w-1/2 lg:pb-0">

          {/* Heading */}
          <h1 className="mb-5 text-[34px] font-bold leading-[1.12] tracking-[-0.03em] text-[#1E1B2E] sm:text-[42px] md:text-[52px] lg:text-[64px]">
            Your business{' '}
            <span
              className="font-normal italic text-[#5B3E86]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              data.
            </span>
            <br />
            One{' '}
            <span
              className="font-normal italic text-[#5B3E86]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              intelligent
            </span>{' '}
            view.
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-lg text-[15px] font-normal leading-[1.55] text-[#555263] sm:text-[16px] md:text-[18px]">
            Orbit connects the tools your business already runs on, analyzes
            the data with AI, and surfaces the insights that matter, without
            requiring a team of analysts to find them.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 sm:gap-10">
            <button
              type="button"
              className="rounded-xl bg-[#5C457D] px-5 py-3 text-[14px] font-medium text-white transition-all hover:bg-[#4A3667] active:scale-95 sm:px-6 sm:py-3.5 sm:text-[15px]"
            >
              Start Analyzing
            </button>

            <button
              type="button"
              className="rounded-xl border border-[#D5CFE2] bg-[#EAE5F3] px-5 py-3 text-[14px] font-medium text-[#3A2F4C] transition-all hover:bg-[#DFD9EC] active:scale-95 sm:px-6 sm:py-3.5 sm:text-[15px]"
            >
              View Problem
            </button>
          </div>
        </div>

        {/* Right Content - Visual Canvas */}
        <div className="-mx-6 relative w-[calc(100%+3rem)] lg:mx-0 lg:w-1/2 lg:max-w-[540px]">
          
          {/* Main Visual Canvas Area */}
          <div className="relative h-[680px] w-full overflow-hidden lg:h-[560px] lg:rounded-[28px]">

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