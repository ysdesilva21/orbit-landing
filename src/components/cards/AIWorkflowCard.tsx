import React from 'react';

export default function AIWorkflowCard() {
  return (
    <div className="w-80 bg-white rounded-2xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-gray-900 font-semibold text-base">AI Workflow</h3>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-gray-600 text-xs font-medium">Status</span>
        </div>
      </div>

      {/* Workflow Columns */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Primary Driver */}
        <div>
          <p className="text-gray-600 text-xs font-medium mb-3">Primary driver</p>
          <p className="text-gray-700 text-sm">Revenue anomaly</p>
        </div>

        {/* Analyze */}
        <div>
          <p className="text-gray-600 text-xs font-medium mb-3">Analyze</p>
          <p className="text-gray-700 text-sm">18 affected accounts</p>
        </div>

        {/* Action */}
        <div>
          <p className="text-gray-600 text-xs font-medium mb-3">Action</p>
          <p className="text-gray-700 text-sm">Create follow-up</p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 pt-4">
        <a
          href="#"
          className="text-gray-700 text-sm font-medium hover:text-gray-900 flex items-center gap-1 transition"
        >
          Run Workflow
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}