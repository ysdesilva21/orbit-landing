import React from 'react';

const reviewsData = [
  {
    name: 'Maya Chen',
    role: 'VP Growth · Acme',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    title: "It's really convenience !",
    content: '"Orbit replaced the weekly reporting process we had built around spreadsheets and Slack. Our team can finally see what\'s happening without waiting for an analyst."'
  },
  {
    name: 'Daniel Ross',
    role: 'COO · Northstar',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    title: "It's super easy !",
    content: '"The biggest change wasn\'t another dashboard. It was having one reliable view of the business that everyone could actually trust."'
  },
  {
    name: 'Sarah Kim',
    role: 'VP Growth · Acme',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300',
    title: "It's really fast !",
    content: '"We went from spending hours reconciling metrics to having the answer in front of us."'
  }
];

export const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-[#FBFBFE] text-[#221C38]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#6E55A0] mb-2">
            REVIEWS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Trusted by teams that need one source of <span className="italic font-serif font-normal text-[#6E55A0]">truth</span>
          </h2>
          <p className="text-slate-600 text-sm font-medium">
            Finally, everyone is looking at the same numbers.
          </p>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {reviewsData.map((item, idx) => (
            <div key={idx} className="relative pt-16">
              {/* Floating Circular Avatar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <div className="p-1 bg-white rounded-full border border-slate-200 shadow-md">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Card Box */}
              <div className="bg-[#F3EFF8] border border-[#E5DFEF] rounded-2xl p-8 pt-16 flex flex-col justify-between h-full text-left">
                <div>
                  {/* Star Rating */}
                  <div className="flex justify-center gap-1 mb-6 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-[#221C38]">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    {item.content}
                  </p>
                </div>

                <div>
                  <div className="font-bold text-sm text-[#221C38]">{item.name}</div>
                  <div className="text-xs text-[#6E55A0] font-medium">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8 border-t border-slate-200">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[#6E55A0]">14, 000+</div>
            <div className="text-slate-500 font-medium text-sm mt-1">teams</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[#6E55A0]">45M+</div>
            <div className="text-slate-500 font-medium text-sm mt-1">
              data points analyzed
            </div>
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