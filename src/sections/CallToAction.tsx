import React from 'react';
import { ArrowRight, Sparkles,} from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0B0C10] text-white">
      {/* Background Gradient Blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02] p-8 md:p-14 backdrop-blur-2xl shadow-2xl shadow-purple-950/20 overflow-hidden">
          
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
            {/* Left Column Text Content */}
            <div className="max-w-2xl space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                ONE SOURCE
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Stop piecing the business <span className="italic font-serif font-normal bg-gradient-to-r from-purple-300 via-indigo-200 to-purple-400 bg-clip-text text-transparent">together.</span>
              </h2>

              <p className="text-lg text-slate-300 font-normal max-w-xl">
                Bring your revenue, customers, acquisition, and product data into one place.
              </p>
            </div>

            {/* Right Column Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]">
                <span>Start Analyzing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-white/25 transition-all duration-200 active:scale-[0.98]">
                View Problem
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};