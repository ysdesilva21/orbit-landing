import React from "react";

export default function AIInsightCard() {
  return (
    <div className="w-[300px] rounded-[18px] border border-[#EBE8F0] bg-white/95 p-4 shadow-lg backdrop-blur-sm">
      <div className="flex items-start justify-between">
        
        {/* Content */}
        <div className="space-y-1.5">
          <h3 className="text-[17px] font-semibold tracking-tight text-[#5B3E86]">
            AI Insight
          </h3>

          <p className="text-[14px] font-medium text-[#4A5568]">
            Revenue is up <span className="font-semibold text-[#1ECF7D]">15.8%</span>
          </p>

          <p className="pt-1 text-[12px] font-semibold text-[#2D3748]">
            Primary driver :{" "}
            <span className="font-normal text-[#8A94A6]">
              Enterprise expansion
            </span>
          </p>
        </div>

        {/* Action Button */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#EBE8F0] bg-[#FAFAFC] text-[#2D3132] transition hover:bg-gray-100"
          aria-label="Open AI Insight details"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </button>

      </div>
    </div>
  );
}