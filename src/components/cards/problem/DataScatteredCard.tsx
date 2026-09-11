import React, { useState, useRef, useLayoutEffect } from 'react';

// Replace these imports with your actual image paths or icons
import Revenue from '../images/problem/stripe.png';
import Database from '../images/problem/database.png';
import CRM from '../images/problem/crm.png';

export const DataScatteredCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const revenueCardRef = useRef<HTMLDivElement>(null);
  const databaseCardRef = useRef<HTMLDivElement>(null);
  const crmCardRef = useRef<HTMLDivElement>(null);
  const questionBadgeRef = useRef<HTMLDivElement>(null);

  const [paths, setPaths] = useState({
    revenuePath: '',
    databasePath: '',
    crmPath: '',
  });

  const updatePaths = () => {
    if (
      !containerRef.current ||
      !revenueCardRef.current ||
      !databaseCardRef.current ||
      !crmCardRef.current ||
      !questionBadgeRef.current
    ) {
      return;
    }

    const container = containerRef.current;
    const cRect = container.getBoundingClientRect();

    // Scale calculation to adjust for CSS transforms
    const scaleX = container.offsetWidth > 0 ? cRect.width / container.offsetWidth : 1;
    const scaleY = container.offsetHeight > 0 ? cRect.height / container.offsetHeight : 1;

    const getRelPoint = (
      rect: DOMRect,
      xPos: 'left' | 'center' | 'right',
      yPos: 'top' | 'center' | 'bottom'
    ) => {
      let x = (rect.left - cRect.left) / scaleX;
      let y = (rect.top - cRect.top) / scaleY;

      const w = rect.width / scaleX;
      const h = rect.height / scaleY;

      if (xPos === 'center') x += w / 2;
      if (xPos === 'right') x += w;

      if (yPos === 'center') y += h / 2;
      if (yPos === 'bottom') y += h;

      return { x, y };
    };

    const revRect = revenueCardRef.current.getBoundingClientRect();
    const dbRect = databaseCardRef.current.getBoundingClientRect();
    const crmRect = crmCardRef.current.getBoundingClientRect();
    const qRect = questionBadgeRef.current.getBoundingClientRect();

    const radius = 12; // Radius for smooth rounded elbow corners

    // 1. Revenue Card (Bottom-Center) -> "?" Badge (Left-Center)
    const revStart = getRelPoint(revRect, 'center', 'bottom');
    const qLeft = getRelPoint(qRect, 'left', 'center');

    const revMidY = qLeft.y;
    const revRadius = Math.min(radius, Math.abs(revMidY - revStart.y));

    const revPathStr = `
      M ${revStart.x} ${revStart.y}
      V ${revMidY - revRadius}
      A ${revRadius} ${revRadius} 0 0 0 ${revStart.x + revRadius} ${revMidY}
      H ${qLeft.x}
    `;

    // 2. Database Card (Top-Center) -> "?" Badge (Top-Center)
    const dbStart = getRelPoint(dbRect, 'center', 'top');
    const qTop = getRelPoint(qRect, 'center', 'top');

    const peakY = Math.min(dbStart.y - 30, qTop.y - 50);
    const dbRadius = Math.min(radius, Math.abs(dbStart.x - qTop.x) / 2, Math.abs(dbStart.y - peakY));

    const dbPathStr = `
      M ${qTop.x} ${qTop.y}
      V ${peakY + dbRadius}
      A ${dbRadius} ${dbRadius} 0 0 1 ${qTop.x + dbRadius} ${peakY}
      H ${dbStart.x - dbRadius}
      A ${dbRadius} ${dbRadius} 0 0 1 ${dbStart.x} ${peakY + dbRadius}
      V ${dbStart.y}
    `;

    // 3. CRM Card (Top-Center) -> "?" Badge (Bottom-Center)
    const crmStart = getRelPoint(crmRect, 'center', 'top');
    const qBottom = getRelPoint(qRect, 'center', 'bottom');

    const crmPathStr = `
      M ${crmStart.x} ${crmStart.y}
      V ${qBottom.y}
    `;

    setPaths({
      revenuePath: revPathStr,
      databasePath: dbPathStr,
      crmPath: crmPathStr,
    });
  };

  useLayoutEffect(() => {
    updatePaths();

    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => updatePaths());
    resizeObserver.observe(container);
    window.addEventListener('resize', updatePaths);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updatePaths);
    };
  }, []);

  return (
    <div className="w-full max-w-md border border-[#EBE8F0] rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between select-none bg-[#C6D0D9]/10">
      <div>
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-[var(--primary)]">
          Data scattered everywhere
        </h2>

        {/* Dynamic Diagram Area */}
        <div
          ref={containerRef}
          className="relative w-full h-[300px] sm:h-[320px] my-2 flex items-center justify-center"
        >
          {/* Dynamic SVG Connector Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            {/* Revenue -> ? */}
            <path
              d={paths.revenuePath}
              stroke="var(--accent)"
              strokeWidth="1.5"
              className="dash-line opacity-50 fill-none"
            />

            {/* Database -> ? */}
            <path
              d={paths.databasePath}
              stroke="var(--accent)"
              strokeWidth="1.5"
              className="dash-line opacity-50 fill-none"
            />

            {/* CRM -> ? */}
            <path
              d={paths.crmPath}
              stroke="var(--accent)"
              strokeWidth="1.5"
              className="dash-line opacity-50 fill-none"
            />
          </svg>

          {/* CARD 1: REVENUE (Top-Left) */}
          <div
            ref={revenueCardRef}
            className="absolute top-2 left-0 z-10 w-[145px] sm:w-[160px] h-[64px] border border-[#EBE8F0] rounded-[10px] p-2 sm:p-2.5 flex items-center gap-2.5 backdrop-blur-xs shadow-sm bg-[#614986]/5"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={Revenue}
                alt="Revenue"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] sm:text-xs font-semibold leading-none mb-1 truncate text-[var(--ternary)]">
                Revenue
              </p>
              <p className="text-xs sm:text-sm font-bold leading-none truncate text-[var(--primary)]">
                $482k
              </p>
            </div>
          </div>

          {/* CARD 2: DATABASE (Middle-Right) */}
          <div
            ref={databaseCardRef}
            className="absolute top-[135px] sm:top-[145px] right-0 z-10 w-[145px] sm:w-[160px] h-[64px] border border-[#EBE8F0] rounded-[10px] p-2 sm:p-2.5 flex items-center gap-2.5 backdrop-blur-xs shadow-sm bg-[#614986]/5"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={Database}
                alt="Database"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] sm:text-xs font-semibold leading-none mb-1 truncate text-[var(--ternary)]">
                Database
              </p>
              <p className="text-xs sm:text-sm font-bold leading-none truncate text-[var(--primary)]">
                9.2k Users
              </p>
            </div>
          </div>

          {/* CENTER QUESTION MARK BADGE */}
          <div
            ref={questionBadgeRef}
            className="absolute top-[130px] sm:top-[140px] left-[calc(50%-2.5rem)] -translate-x-1/2 z-20"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-dashed border-[var(--accent)] bg-white flex items-center justify-center shadow-sm">
              <span className="font-semibold text-base sm:text-lg text-[var(--accent)]">
                ?
              </span>
            </div>
          </div>

          {/* CARD 3: CRM (Bottom-Center) */}
          <div
            ref={crmCardRef}
            className="absolute bottom-2 left-[calc(50%-2.5rem)] -translate-x-1/2 z-10 w-[145px] sm:w-[160px] h-[64px] border border-[#EBE8F0] rounded-[10px] p-2 sm:p-2.5 flex items-center gap-2.5 backdrop-blur-xs shadow-sm bg-[#614986]/5"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={CRM}
                alt="CRM"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] sm:text-xs font-semibold leading-none mb-1 truncate text-[var(--ternary)]">
                CRM
              </p>
              <p className="text-xs sm:text-sm font-bold leading-none truncate text-[var(--primary)]">
                42 Deals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description Text */}
      <p className="font-medium text-base sm:text-sm leading-relaxed mt-1 sm:mt-6 text-[var(--primary)]">
        Revenue in your billing tool. Usage in your product database. Pipeline in
        the CRM. Nobody has the full picture, so every answer starts with a Slack
        thread.
      </p>
    </div>
  );
};

export default DataScatteredCard;