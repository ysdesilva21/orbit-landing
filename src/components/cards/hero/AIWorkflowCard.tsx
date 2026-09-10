import React from "react";

export default function AIWorkflowCard() {
  return (
    <div className="w-[360px] rounded-[10px] border border-[#EBE8F0] bg-white/95 px-2 py-2 shadow-lg backdrop-blur-sm">
      
      {/* Header with Status Pill */}
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-[16px] font-medium tracking-tight text-[var(--accent)]">
          AI Workflow
        </h3>
        
        <div className="flex items-center gap-1.5 rounded-full border border-[#D1F5E1] bg-[#E8FAF0] px-2 py-0.5 text-[12px] font-medium text-[#1ECF7D]">
          <span className="h-2 w-2 rounded-full bg-[#1ECF7D]" />
          <span>Status</span>
        </div>
      </div>

      {/* 3 Step Sub-Cards Grid */}
      <div className="mb-2 grid grid-cols-3 gap-2">
        
        {/* Step 1: Primary Driver */}
        <div className="rounded-[5px] border border-[#EBE8F0] bg-[#FAFAFC] p-2">
          <p className="text-[12px] font-medium text-[#2D3748]">
            Primary driver
          </p>
          <p className="text-[12px] leading-snug font-normal text-[#8A94A6]">
            Revenue anomaly
          </p>
        </div>

        {/* Step 2: Analyze */}
        <div className="rounded-[5px] border border-[#EBE8F0] bg-[#FAFAFC] p-2">
          <p className="text-[12px] font-medium text-[#2D3748]">
            Analyze
          </p>
          <p className="text-[12px] leading-snug font-normal text-[#8A94A6]">
            18 affected accounts
          </p>
        </div>

        {/* Step 3: Action */}
        <div className="rounded-[5px] border border-[#EBE8F0] bg-[#FAFAFC] p-2">
          <p className="text-[12px] font-medium text-[#2D3748]">
            Action
          </p>
          <p className="text-[12px] leading-snug font-normal text-[#8A94A6]">
            create follow-up
          </p>
        </div>

      </div>

      {/* Action Footer Button */}
      <div className="flex justify-end">
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-[5px] border border-[#EBE8F0] bg-[#FAFAFC] px-3 py-1 text-[12px] font-medium text-[#2D3132] transition hover:bg-gray-100"
        >
          <span>Run Workflow</span>
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>

    </div>
  );
}