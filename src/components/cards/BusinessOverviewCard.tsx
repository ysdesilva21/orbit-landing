import React from "react";

export default function BusinessOverviewCard({ chartSrc = "/orbit-business-chart.png" }) {
  return (
    <div className="w-[440px] rounded-[22px] border border-[#EBE8F0] bg-white/95 p-5 shadow-xl backdrop-blur-sm">
      
      {/* Title */}
      <h3 className="mb-4 text-[17px] font-semibold tracking-tight text-[#5B3E86]">
        Business Overview
      </h3>

      {/* Metrics Header */}
      <div className="mb-2 flex items-baseline justify-between px-1">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-wider text-[#718096]">
            MRR
          </p>
          <div className="mt-0.5 flex items-baseline gap-2">
            <span className="text-[26px] font-bold tracking-tight text-[#2D3748]">
              $426.9K
            </span>
            <span className="text-[13px] font-semibold text-[#1ECF7D]">
              ↑ 12.4%
            </span>
          </div>
        </div>

        <div className="text-right">
          <p className="text-[12px] font-medium text-[#718096]">
            Customers
          </p>
          <p className="mt-0.5 text-[15px] font-semibold text-[#2D3748]">
            2,586
          </p>
        </div>
      </div>

      {/* Embedded Chart Graphic */}
      <div className="relative mt-2 w-full overflow-hidden rounded-lg">
        <img
          src={chartSrc}
          alt="Business Overview MRR Trend Line Chart"
          className="h-auto w-full object-contain"
        />
      </div>

    </div>
  );
}