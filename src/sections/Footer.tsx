import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#EDE8F7] to-[#B29EF0] text-[#221C38] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold leading-tight max-w-xs">
              Turn your business data into decisions.
            </h3>

            {/* Social / Icon Placeholders Row 1 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm" />
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm" />
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm" />
            </div>

            <p className="text-sm font-semibold pt-2">Ask about orbit on</p>

            {/* Social / Icon Placeholders Row 2 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm" />
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm" />
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm" />
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm" />
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm" />
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Product */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-4">PRODUCT</h4>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li><a href="#" className="hover:text-black transition">Overview</a></li>
                <li><a href="#" className="hover:text-black transition">AI insights</a></li>
                <li><a href="#" className="hover:text-black transition">Integrations</a></li>
                <li><a href="#" className="hover:text-black transition">Pricing</a></li>
                <li><a href="#" className="hover:text-black transition">Changelog</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-4">COMPANY</h4>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li><a href="#" className="hover:text-black transition">About</a></li>
                <li><a href="#" className="hover:text-black transition">Careers</a></li>
                <li><a href="#" className="hover:text-black transition">Blog</a></li>
                <li><a href="#" className="hover:text-black transition">Press</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-4">RESOURCES</h4>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li><a href="#" className="hover:text-black transition">Documentation</a></li>
                <li><a href="#" className="hover:text-black transition">API reference</a></li>
                <li><a href="#" className="hover:text-black transition">Guides</a></li>
                <li><a href="#" className="hover:text-black transition">Community</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-4">LEGAL</h4>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li><a href="#" className="hover:text-black transition">Privacy</a></li>
                <li><a href="#" className="hover:text-black transition">Terms</a></li>
                <li><a href="#" className="hover:text-black transition">Security</a></li>
                <li><a href="#" className="hover:text-black transition">DPA</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-sm text-slate-600 border-t border-slate-300/40">
          <div>@ 2026 orbit technologies, Inc.</div>
          <div>Build for teams who trust their numbers.</div>
        </div>
      </div>
    </footer>
  );
};