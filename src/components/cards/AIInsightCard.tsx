import React from 'react';

export default function AIInsightCard() {
  return (
    <div className="w-[275px] h-[80px] bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.25)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] leading-none font-medium text-[var(--accent)]">
          AI Insight
        </h3>

        {/* Arrow background */}
        <div className="w-6.25 h-6.25 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.25)] flex items-center justify-center">
          {/* External SVG goes here */}
          <img
            src="/arrow.svg"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Revenue insight */}
      <div className="mt-auto">
        <p className="text-[15px] leading-[1.2] text-[var(--ternary)]/80">
          Revenue is
          <span className="text-[15px] leading-[1.2] text-[var(--positive)]">
          up 15.8%
        </span>
        </p>

        
      </div>

      {/* Primary driver */}
      <div className="text-right">
        <p className="text-[12px] leading-[1.3] text-[var(--primary)]">
          Primary driver:
        </p>

        <p className="text-[14px] leading-[1.3] text-[var(--ternary)]/50">
          Enterprise expansion
        </p>
      </div>
    </div>
  );
}