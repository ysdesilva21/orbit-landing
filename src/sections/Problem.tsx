import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DashboardSprawlCard from "../components/cards/problem/DashboardSprawlCard";
import DataScatteredCard from "../components/cards/problem/DataScatteredCard";
import ReportingTakesDaysCard from "../components/cards/problem/ReportingTakesDaysCard";

gsap.registerPlugin(Draggable);

/* ==========================================================================
   Main Section Component: ProblemSection
   ========================================================================== */
export const ProblemSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const cards = [
    { id: "scattered", component: <DataScatteredCard /> },
    { id: "sprawl", component: <DashboardSprawlCard /> },
    { id: "reporting", component: <ReportingTakesDaysCard /> },
  ];

  const animateToIndex = (index: number) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.clientWidth;

    gsap.to(trackRef.current, {
      x: -index * cardWidth,
      duration: 0.4,
      ease: "power2.out",
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      animateToIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < cards.length - 1) {
      animateToIndex(activeIndex + 1);
    }
  };

  useGSAP(
    () => {
      if (!trackRef.current) return;

      const track = trackRef.current;

      Draggable.create(track, {
        type: "x",
        edgeResistance: 0.65,
        bounds: {
          minX: -((cards.length - 1) * track.clientWidth),
          maxX: 0,
        },
        onDragEnd: function () {
          const cardWidth = track.clientWidth;
          const currentX = this.endX;
          const nearestIndex = Math.round(Math.abs(currentX) / cardWidth);
          const clampedIndex = Math.max(
            0,
            Math.min(nearestIndex, cards.length - 1)
          );

          animateToIndex(clampedIndex);
        },
      });
    },
    { scope: trackRef }
  );

  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20 font-['Familjen_Grotesk'] text-[#2D3132] overflow-hidden">
      {/* Header Section */}
      <div className="mb-8 sm:mb-10 md:mb-14 max-w-2xl text-left">
        <span className="text-[16px] sm:text-[18px] font-medium tracking-wider uppercase text-[#614986] block mb-2 sm:mb-3">
          THE PROBLEM
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#2D3132] mb-3 sm:mb-4 leading-tight">
          Stop searching for the{" "}
          <span className="font-serif-italic text-[#614986] font-normal text-3xl sm:text-4xl md:text-[46px]">
            signal.
          </span>
        </h2>
        <p className="text-[#555B5D] text-xs sm:text-sm md:text-base leading-relaxed font-normal">
          Most teams don't lack data. They lack a way to see it clearly. Every
          additional tool adds another place the answer might be hiding.
        </p>
      </div>

      {/* ===================================================================
          DESKTOP VIEW: 3-Column Grid (lg and above)
         =================================================================== */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-stretch">
        {cards.map((card) => (
          <div key={card.id} className="w-full h-full">
            {card.component}
          </div>
        ))}
      </div>

      {/* ===================================================================
          MOBILE & TABLET VIEW: GSAP Draggable Single-Card Carousel (< lg)
         =================================================================== */}
      <div className="block lg:hidden w-full overflow-hidden">
        <div className="w-full max-w-[360px] mx-auto overflow-hidden">
          <div
            ref={trackRef}
            className="flex cursor-grab active:cursor-grabbing touch-pan-y items-stretch"
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-full shrink-0 flex justify-center px-1"
              >
                {card.component}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Controls & Indicators */}
        <div className="flex items-center justify-between max-w-[360px] mx-auto mt-6 px-2">
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous card"
            className="flex items-center justify-center p-2 rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs hover:bg-slate-50 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Carousel Dot Indicators */}
          <div className="flex items-center space-x-2">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => animateToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-7 bg-[#614986]" : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            disabled={activeIndex === cards.length - 1}
            aria-label="Next card"
            className="flex items-center justify-center p-2 rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs hover:bg-slate-50 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;