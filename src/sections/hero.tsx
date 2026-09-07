import AIInsightCard from '../components/cards/AIInsightCard';
import BusinessOverviewCard from '../components/cards/BusinessOverviewCard';
import AIWorkflowCard from '../components/cards/AIWorkflowCard';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">

        {/* Left Content */}
        <div className="z-10 w-full lg:w-1/2">

          {/* Heading */}
          <h1
            className="
              mb-8
              text-[36px]
              font-bold
              leading-[1.08]
              tracking-[-0.035em]
              text-[var(--primary)]
              md:text-[48px]
              lg:text-[64px]
            "
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
            className="
              mb-12
              max-w-xl
              text-[18px]
              font-medium
              leading-[1.6]
              text-[var(--ternary)]
            "
          >
            Orbit connects the tools your business already runs on, analyzes
            the data with AI, and surfaces the insights that matter, without
            requiring a team of analysts to find them.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4">

            {/* Primary Button */}
            <button
              type="button"
              className="
                primary-button
                rounded-lg
                px-8
                py-3
                text-[16px]
                font-semibold
                transition
              "
            >
              Start Analyzing
            </button>

            {/* Secondary Button */}
            <button
              type="button"
              className="
                rounded-lg
                border-2
                border-[var(--primary)]
                bg-transparent
                px-8
                py-3
                text-[16px]
                font-semibold
                text-[var(--primary)]
                transition-all
                duration-200
                hover:border-transparent
                hover:bg-transparent
                hover:text-[var(--accent)]
                hover:underline
                hover:decoration-[var(--accent)]
                hover:underline-offset-4
              "
            >
              View Problem
            </button>

          </div>
        </div>

        {/* Right Content */}
        <div className="relative hidden h-[600px] w-1/2 items-center justify-end lg:flex">

          {/* Hero Background Placeholder */}
          <div
            className="
              absolute
              right-0
              h-[560px]
              w-[92%]
              overflow-hidden
              rounded-3xl
              bg-[var(--secondary)]
            "
          >
            <img
                src="/orbit-hero-bg.png"
                alt=""
                className="h-full w-full object-cover"
            />
          </div>

          
          {/* Cards Container */}
          <div className="relative h-[560px] w-full">

            {/* AI Insight — Top Left */}
            <div className="absolute left-0 top-10">
              <AIInsightCard />
            </div>

            

          </div>
        </div>

      </div>
    </section>
  );
}