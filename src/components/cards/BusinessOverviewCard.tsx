import React from 'react';

export default function BusinessOverviewCard() {
  return (
    <div className="w-96 bg-white rounded-2xl p-8 shadow-xl">
      {/* Header */}
      <h3 className="text-gray-900 font-semibold text-base mb-6">Business Overview</h3>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* MRR */}
        <div>
          <p className="text-gray-600 text-xs font-medium mb-2">MRR</p>
          <div className="flex items-baseline gap-2">
            <span className="text-gray-900 font-bold text-2xl">$426.9K</span>
            <span className="text-green-500 font-semibold text-sm">↑ 12.4%</span>
          </div>
        </div>

        {/* Customers */}
        <div>
          <p className="text-gray-600 text-xs font-medium mb-2">Customers</p>
          <p className="text-gray-900 font-bold text-2xl">2,586</p>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-48 mb-4">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 font-medium pr-2">
          <span>600K</span>
          <span>400K</span>
          <span>200K</span>
          <span>0</span>
        </div>

        {/* Chart Area */}
        <svg
          viewBox="0 0 300 180"
          className="w-full h-full ml-8"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          <line x1="0" y1="45" x2="300" y2="45" stroke="#f0f0f0" strokeWidth="1" />
          <line x1="0" y1="90" x2="300" y2="90" stroke="#f0f0f0" strokeWidth="1" />
          <line x1="0" y1="135" x2="300" y2="135" stroke="#f0f0f0" strokeWidth="1" />

          {/* Area fill */}
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a8c5dd" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#a8c5dd" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Path for the area chart */}
          <path
            d="M 0 120 Q 25 110, 50 105 T 100 95 T 150 70 T 200 55 T 250 45 T 300 35 L 300 180 L 0 180 Z"
            fill="url(#areaGradient)"
          />

          {/* Line for the chart */}
          <path
            d="M 0 120 Q 25 110, 50 105 T 100 95 T 150 70 T 200 55 T 250 45 T 300 35"
            stroke="#4a7ba7"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}