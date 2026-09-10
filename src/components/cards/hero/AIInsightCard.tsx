import React from "react";

export default function AIInsightCard() {
  return (
    <div className="w-[275px] rounded-[10px] border border-[#EBE8F0] bg-white/95 shadow-lg px-4 py-2 backdrop-blur-sm">
      <div className="flex items-start justify-between">
        
        {/* Content */}
        <div className="">
          <h3 className="text-[16px] font-medium tracking-tight text-[var(--accent)]">
            AI Insight
          </h3>

          <p className="text-[14px] font-medium text-[#4A5568]">
            Revenue is up <span className="font-medium text-[#1ECF7D]">15.8%</span>
          </p>

          <p className="text-[12px] font-medium text-[#2D3748]">
            Primary driver :{" "}
            <span className="font-normal text-[#8A94A6]">
              Enterprise expansion
            </span>
          </p>
        </div>

        {/* Action Button */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-[5px] border border-[#EBE8F0] bg-[#FAFAFC] text-[#2D3132] transition hover:bg-gray-100"
          aria-label="Open AI Insight details"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="h-7 w-7"
            viewBox="0 0 24 24"
            style={{ opacity: 1, transform: "rotate(0deg)", color: "rgb(45, 49, 50)" }}
          >
            <path
              fill="currentColor"
              d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"
            />
          </svg>
        </button>

      </div>
    </div>
  );
}