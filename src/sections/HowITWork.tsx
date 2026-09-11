import React from 'react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-700">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            From scattered data to a <span className="italic font-serif font-normal text-purple-800">clear decision</span>, in three steps.
          </h2>
        </div>

        {/* Timeline Stepper Container */}
        <div className="relative pt-2">
          {/* Horizontal Connecting Line */}
          <div className="hidden md:block absolute top-[20px] left-0 right-0 h-[1.5px] bg-slate-200 z-0">
            {/* Highlighted Left Segment */}
            <div className="w-1/3 h-full bg-purple-400"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col space-y-6">
              <div className="w-10 h-10 rounded-full bg-white border-2 border-purple-600 flex items-center justify-center text-slate-900 font-semibold text-sm shadow-xs">
                01
              </div>
              <div className="flex flex-col space-y-3">
                <span className="text-sm font-semibold text-slate-800">
                  Connect
                </span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Link your sources in minutes.
                </h3>
                <p className="text-slate-600 font-normal text-sm leading-relaxed">
                  Revenue in your billing tool. Usage in your product database. Pipeline in
                  the CRM. Nobody has the full picture, so every answer starts with a Slack
                  thread.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col space-y-6">
              <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-300 flex items-center justify-center text-slate-800 font-semibold text-sm shadow-xs">
                02
              </div>
              <div className="flex flex-col space-y-3">
                <span className="text-sm font-semibold text-slate-800">
                  Understand
                </span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  AI surfaces what matters.
                </h3>
                <p className="text-slate-600 font-normal text-sm leading-relaxed">
                  Orbit continuously analyzes the combined data and highlights the trends,
                  risks, and opportunities worth your attention today.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col space-y-6">
              <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-300 flex items-center justify-center text-slate-800 font-semibold text-sm shadow-xs">
                03
              </div>
              <div className="flex flex-col space-y-3">
                <span className="text-sm font-semibold text-slate-800 uppercase tracking-wider">
                  ACT
                </span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Move from insight to decision.
                </h3>
                <p className="text-slate-600 font-normal text-sm leading-relaxed">
                  Share a finding, assign an owner, or trigger an alert to your team,
                  directly from the insight, with the supporting data attached.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;