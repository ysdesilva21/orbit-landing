import React from "react";

export default function BusinessOverviewCard({ chartSrc = "/orbit-business-chart.png" }) {
  return (
    <div className="w-[440px] rounded-[10px] border border-[#EBE8F0] bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm">
      
      {/* Title */}
      <h3 className="text-[16px] font-medium tracking-tight text-[var(--accent)]">
        Business Overview
      </h3>

      {/* Metrics Header */}
      <div className="mt-1 flex items-baseline justify-between">
        <div>
          <p className="text-[12px] font-medium text-[#2D3748]">
            MRR
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-[24px] font-medium text-[#2D3748]">
              $426.9K
            </span>
            <span className="text-[14px] font-medium text-[#1ECF7D]">
              ↑ 12.4%
            </span>
          </div>
        </div>

        <div className="text-right">
          <p className="text-[12px] font-medium text-[#2D3748]">
            Customers
          </p>
          <p className="text-[12px] font-normal text-[#8A94A6]">
            2,586
          </p>
        </div>
      </div>

      {/* Embedded Chart Graphic */}
      <div className="relative mt-2 w-full overflow-hidden rounded-[5px]">
        <img
          src={chartSrc}
          alt="Business Overview MRR Trend Line Chart"
          className="h-auto w-full object-contain"
        />
      </div>

    </div>
  );
}