import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-6 py-12 md:py-20 font-['Familjen_Grotesk'] text-[#2D3132]">
      {/* Header Section */}
      <div className="mb-10 md:mb-14 max-w-2xl">
        <span className="text-xs font-bold tracking-wider uppercase text-[#614986] block mb-3">
          THE PROBLEM
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#2D3132] mb-4 leading-tight">
          Stop searching for the <span className="font-serif-italic text-[#614986] font-normal text-4xl md:text-[46px]">signal.</span>
        </h2>
        <p className="text-[#555B5D] text-sm md:text-base leading-relaxed font-normal">
          Most teams don't lack data. They lack a way to see it clearly. Every additional tool adds another place the answer might be hiding.
        </p>
      </div>

      {/* Cards Container 
          Mobile: Order is Card 3 (Reporting), Card 1 (Data scattered), Card 2 (Dashboard sprawl)
          Desktop: Order is Card 1, Card 2, Card 3
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* CARD 1: Data scattered everywhere */}
        <div className="bg-[#F8F9FA] border border-[#E9ECEF] rounded-2xl p-6 md:p-8 flex flex-col justify-between order-2 md:order-1 min-h-[480px]">
          <div>
            <h3 className="text-lg font-bold text-center text-[#2D3132] mb-6">
              Data scattered everywhere
            </h3>

            {/* Diagram 1 */}
            <div className="relative w-full h-[220px] flex items-center justify-center my-4">
              {/* SVG Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 200" fill="none">
                <path d="M 80 60 L 80 100 L 140 100" stroke="#CED4DA" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 220 100 L 160 100" stroke="#CED4DA" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 150 115 L 150 140" stroke="#CED4DA" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>

              {/* Stripe Box */}
              <div className="absolute top-2 left-2 bg-white border border-[#E5E7EB] rounded-xl px-3 py-2 shadow-sm flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#635BFF]/10 flex items-center justify-center text-[#635BFF] font-bold text-[10px]">
                  stripe
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-[#2D3132]">Revenue</div>
                  <div className="text-[10px] text-gray-500">$482k</div>
                </div>
              </div>

              {/* Database Box */}
              <div className="absolute top-16 right-2 bg-white border border-[#E5E7EB] rounded-xl px-3 py-2 shadow-sm flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-[#2D3132]">Database</div>
                  <div className="text-[10px] text-gray-500">9.2k Users</div>
                </div>
              </div>

              {/* Center Question Circle */}
              <div className="z-10 w-9 h-9 rounded-full bg-white border border-[#CED4DA] flex items-center justify-center text-[#2D3132] font-semibold text-sm shadow-sm">
                ?
              </div>

              {/* CRM Box */}
              <div className="absolute bottom-2 left-24 bg-white border border-[#E5E7EB] rounded-xl px-4 py-2 shadow-sm flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#1ECF7D] flex items-center justify-center text-white">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-[#2D3132]">CRM</div>
                  <div className="text-[10px] text-gray-500">42 Deals</div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#6C757D] leading-relaxed mt-6">
            Revenue in your billing tool. Usage in your product database. Pipeline in the CRM. Nobody has the full picture, so every answer starts with a Slack thread.
          </p>
        </div>


        {/* CARD 2: Dashboard sprawl */}
        <div className="bg-[#F8F9FA] border border-[#E9ECEF] rounded-2xl p-6 md:p-8 flex flex-col justify-between order-3 md:order-2 min-h-[480px]">
          <div>
            <h3 className="text-lg font-bold text-center text-[#2D3132] mb-6">
              Dashboard sprawl
            </h3>

            {/* Diagram 2 */}
            <div className="relative w-full h-[220px] flex items-center justify-center my-2">
              {/* Floating Badges */}
              <span className="absolute top-0 left-3 text-[9px] font-semibold text-[#1ECF7D]">
                ↗ 12.4%
              </span>
              <span className="absolute top-1 right-3 text-[9px] font-semibold text-[#1ECF7D]">
                42 Deals
              </span>
              <span className="absolute top-[88px] left-[138px] text-[9px] font-semibold text-[#EF4444]">
                ↘ 3.7%
              </span>
              <span className="absolute bottom-[2px] left-[130px] text-[9px] font-semibold text-[#1ECF7D]">
                9,284 👥
              </span>

              {/* Connecting Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 200" fill="none">
                <path d="M 85 62 L 85 105 L 110 105" stroke="#CED4DA" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 215 62 L 215 105 L 190 105" stroke="#CED4DA" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 85 158 L 85 125 L 110 125" stroke="#CED4DA" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 215 158 L 215 125 L 190 125" stroke="#CED4DA" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>

              {/* Finance Dashboard */}
              <div className="absolute top-3 left-1 bg-white border border-[#E5E7EB] rounded-xl p-2 w-[125px] shadow-sm">
                <div className="text-[10px] text-gray-500 font-medium mb-1">Finance Dashboard</div>
                <div className="flex items-center gap-1.5">
                  <div className="text-[#2D3132]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] text-gray-400 leading-tight">MRR</div>
                    <div className="text-[10px] font-bold text-[#2D3132] leading-tight">$365k</div>
                  </div>
                </div>
              </div>

              {/* Sales Dashboard */}
              <div className="absolute top-3 right-1 bg-white border border-[#E5E7EB] rounded-xl p-2 w-[125px] shadow-sm">
                <div className="text-[10px] text-gray-500 font-medium mb-1">Sales Dashboard</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 bg-[#2D3132] rounded flex items-center justify-center text-white text-[8px]">
                    📊
                  </div>
                  <div>
                    <div className="text-[9px] text-gray-400 leading-tight">Pipeline</div>
                    <div className="text-[10px] font-bold text-[#2D3132] leading-tight">$1.2M</div>
                  </div>
                </div>
              </div>

              {/* Center Dashboard (All data views) */}
              <div className="z-10 bg-white border border-[#CBD5E1] rounded-xl px-4 py-2 shadow-sm text-center">
                <div className="text-[11px] font-semibold text-[#2D3132]">Dashboard</div>
                <div className="text-[9px] text-gray-400">All data views</div>
              </div>

              {/* Product Analytics */}
              <div className="absolute bottom-2 left-1 bg-white border border-[#E5E7EB] rounded-xl p-2 w-[125px] shadow-sm">
                <div className="text-[10px] text-gray-500 font-medium mb-1">Product Analytics</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 border border-gray-400 rounded flex items-center justify-center text-[9px]">
                    📖
                  </div>
                  <div>
                    <div className="text-[9px] text-gray-400 leading-tight">Pipeline</div>
                    <div className="text-[10px] font-bold text-[#2D3132] leading-tight">$1.2M</div>
                  </div>
                </div>
              </div>

              {/* Reporting */}
              <div className="absolute bottom-2 right-1 bg-white border border-[#E5E7EB] rounded-xl p-2 w-[125px] shadow-sm">
                <div className="text-[10px] text-gray-500 font-medium mb-1">Reporting</div>
                <div className="flex items-center gap-1.5">
                  <div className="text-[#2D3132]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-[#2D3132] leading-tight">+12</div>
                    <div className="text-[9px] text-gray-400 leading-tight">more</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#6C757D] leading-relaxed mt-6">
            More tools, more logins, more versions of the truth. Teams build new dashboards faster than anyone can retire the old ones.
          </p>
        </div>


        {/* CARD 3: Reporting takes days */}
        <div className="bg-[#F8F9FA] border border-[#E9ECEF] rounded-2xl p-6 md:p-8 flex flex-col justify-between order-1 md:order-3 min-h-[480px]">
          <div>
            <h3 className="text-lg font-bold text-center text-[#2D3132] mb-6">
              Reporting takes days
            </h3>

            {/* Diagram 3 - Loop Cycle */}
            <div className="relative w-full h-[220px] flex items-center justify-center my-2">
              {/* Rectangle Dashed Loop Path */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 200" fill="none">
                <rect 
                  x="70" 
                  y="40" 
                  width="160" 
                  height="120" 
                  rx="12" 
                  stroke="#CED4DA" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4" 
                />
                {/* Arrowheads for cyclic loop */}
                <path d="M 150 40 L 155 37 M 150 40 L 155 43" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 230 100 L 227 105 M 230 100 L 233 105" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 150 160 L 145 157 M 150 160 L 145 163" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 70 100 L 67 95 M 70 100 L 73 95" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
              </svg>

              {/* Data Badge */}
              <div className="absolute top-7 bg-white border border-[#E5E7EB] rounded-full px-3 py-1 shadow-sm flex items-center gap-2">
                <span className="text-[11px] font-semibold text-[#2D3132]">Data</span>
                <span className="text-[10px] text-gray-400 font-mono">659k</span>
              </div>

              {/* Export Badge */}
              <div className="absolute right-3 bg-white border border-[#E5E7EB] rounded-full px-3 py-1 shadow-sm flex items-center gap-2">
                <span className="text-[11px] font-semibold text-[#2D3132]">Export</span>
                <span className="text-[9px] text-gray-400 uppercase font-mono">CSV / XLS</span>
              </div>

              {/* Format Badge */}
              <div className="absolute bottom-7 bg-white border border-[#E5E7EB] rounded-full px-3 py-1 shadow-sm flex items-center gap-2">
                <span className="text-[11px] font-semibold text-[#2D3132]">Format</span>
                <span className="text-[10px] text-gray-400 font-mono">Slides</span>
              </div>

              {/* Share Badge */}
              <div className="absolute left-3 bg-white border border-[#E5E7EB] rounded-full px-3 py-1 shadow-sm flex items-center gap-2">
                <span className="text-[11px] font-semibold text-[#2D3132]">Share</span>
                <span className="text-[10px] text-gray-400 font-mono">Team</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#6C757D] leading-relaxed mt-6">
            By the time the deck is exported, formatted, and shared, the numbers inside it are already a week old.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;