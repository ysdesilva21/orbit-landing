import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="py-20 bg-[#F9F8FD] text-[#221C38]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#6E55A0] mb-2">
            PRICING PLANS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            <span className="italic font-serif font-normal text-[#6E55A0]">Simple</span> pricing plans for your budget
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to understand the business.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#EBE7F5] rounded-xl">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#DDD5ED] text-[#221C38] shadow-sm'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-[#DDD5ED] text-[#221C38] shadow-sm'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              <span>Yearly</span>
              <span className="text-[10px] uppercase bg-white text-[#6E55A0] px-1.5 py-0.5 rounded font-semibold border border-[#D5CBEA]">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-20">
          {/* Starter Plan */}
          <div className="bg-[#F2EFF8] border border-[#E3DEF0] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-slate-500 text-sm">/mo</span>
              </div>
              <p className="text-slate-500 text-xs mb-8">
                For small teams getting their data in one place.
              </p>

              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> Up to 5 users
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> 3 data source
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> 5 dashboard
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> Automated reports
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> Email support
                </li>
              </ul>
            </div>
          </div>

          {/* Growth Plan (Highlighted) */}
          <div className="bg-[#E4DEEE] border-2 border-[#6E55A0] rounded-2xl p-8 flex flex-col justify-between relative shadow-lg">
            <span className="absolute top-6 right-6 text-xs font-semibold text-[#6E55A0]">
              Recommended
            </span>
            <div>
              <h3 className="text-xl font-bold mb-2">Growth</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold">$149</span>
                <span className="text-slate-500 text-sm">/mo</span>
              </div>
              <p className="text-slate-600 text-xs mb-8">
                For growing teams that need deeper insights and automation.
              </p>

              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-center gap-3 font-medium">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> Up to 25 users
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> 15 data sources
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> Unlimited dashboards
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> Automated reports
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> Custom metrics
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> AI insights
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> Priority support
                </li>
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#F2EFF8] border border-[#E3DEF0] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <div className="mb-2">
                <span className="text-3xl font-bold">Custom</span>
              </div>
              <p className="text-slate-500 text-xs mb-6">
                For larger teams with complex data and advanced needs.
              </p>

              <button className="w-full py-2.5 mb-6 px-4 rounded-xl border border-[#6E55A0] text-[#221C38] bg-[#DDD5ED] hover:bg-[#d0c5e3] transition font-medium text-sm">
                Talk to sales
              </button>

              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> Unlimited data sources
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> Unlimited users
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> Unlimited dashboards
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> Automated reports
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> Custom metrics
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> AI insights
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> Advanced permissions
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#6E55A0] shrink-0" /> Dedicated support
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8 border-t border-[#E3DEF0]/60">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[#6E55A0]">14, 000+</div>
            <div className="text-slate-500 font-medium text-sm mt-1">teams</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[#6E55A0]">45M+</div>
            <div className="text-slate-500 font-medium text-sm mt-1">data points analyzed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[#6E55A0]">99.9%</div>
            <div className="text-slate-500 font-medium text-sm mt-1">uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};