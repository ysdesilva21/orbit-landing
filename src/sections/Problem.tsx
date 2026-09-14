import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import DashboardSprawlCard from "../components/cards/problem/DashboardSprawlCard";
import DataScatteredCard from "../components/cards/problem/DataScatteredCard";
import ReportingTakesDaysCard from "../components/cards/problem/ReportingTakesDaysCard";

gsap.registerPlugin(Draggable, ScrollTrigger);

const CARDS = [
  {
    id: "scattered",
    component: <DataScatteredCard />,
  },
  {
    id: "sprawl",
    component: <DashboardSprawlCard />,
  },
  {
    id: "reporting",
    component: <ReportingTakesDaysCard />,
  },
];

const ProblemSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeIndexRef = useRef(activeIndex);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const desktopCardsRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  /*
  ============================================================
  CAROUSEL CONTROLS & ANIMATIONS
  ============================================================
  */
  const animateCards = useCallback((index: number) => {
    const track = trackRef.current;

    if (!(track instanceof HTMLDivElement)) return;

    const cardElements: HTMLElement[] = Array.from(
      track.children
    ).filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement
    );

    cardElements.forEach((card, i) => {
      gsap.to(card, {
        scale: i === index ? 1 : 0.96,
        opacity: i === index ? 1 : 0.72,
        duration: 0.55,
        ease: "power3.out",
        overwrite: "auto",
      });
    });
  }, []);

  const animateToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;

      if (!(track instanceof HTMLDivElement)) return;

      const viewport = track.parentElement;

      if (!(viewport instanceof HTMLElement)) return;

      const cardWidth = viewport.clientWidth;

      const clampedIndex = Math.max(
        0,
        Math.min(index, CARDS.length - 1)
      );

      gsap.to(track, {
        x: -clampedIndex * cardWidth,
        duration: 0.65,
        ease: "power3.out",
        overwrite: "auto",
      });

      animateCards(clampedIndex);
      setActiveIndex(clampedIndex);
    },
    [animateCards]
  );

  const handlePrev = () => {
    if (activeIndex > 0) {
      animateToIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < CARDS.length - 1) {
      animateToIndex(activeIndex + 1);
    }
  };

  /*
  ============================================================
  SCROLL-DRIVEN SECTION ANIMATION
  ============================================================
  */
  useGSAP(
    () => {
      const section = sectionRef.current;
      const heading = headingRef.current;
      const desktopCardsContainer =
        desktopCardsRef.current;

      if (!(section instanceof HTMLElement)) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      const headingEyebrow =
        heading?.querySelector<HTMLElement>(
          ".problem-eyebrow"
        ) ?? null;

      const headingText =
        heading?.querySelector<HTMLElement>(
          ".problem-heading"
        ) ?? null;

      const description =
        heading?.querySelector<HTMLElement>(
          ".problem-description"
        ) ?? null;

      const desktopCards: HTMLElement[] =
        desktopCardsContainer
          ? Array.from(
              desktopCardsContainer.children
            ).filter(
              (element): element is HTMLElement =>
                element instanceof HTMLElement
            )
          : [];

      /*
      ------------------------------------------------------------
      INITIAL STATES
      ------------------------------------------------------------
      */
      if (headingEyebrow instanceof HTMLElement) {
        gsap.set(headingEyebrow, {
          y: 18,
          opacity: 0,
        });
      }

      if (headingText instanceof HTMLElement) {
        gsap.set(headingText, {
          y: 35,
          opacity: 0,
        });
      }

      if (description instanceof HTMLElement) {
        gsap.set(description, {
          y: 22,
          opacity: 0,
        });
      }

      if (desktopCards.length > 0) {
        gsap.set(desktopCards, {
          y: 55,
          opacity: 0,
        });
      }

      /*
      ------------------------------------------------------------
      MAIN TIMELINE
      ------------------------------------------------------------
      */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom 55%",
          scrub: 1.1,
          invalidateOnRefresh: true,
        },
      });

      /*
      ------------------------------------------------------------
      HEADING
      ------------------------------------------------------------
      */
      if (headingEyebrow instanceof HTMLElement) {
        tl.to(
          headingEyebrow,
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power3.out",
          },
          0
        );
      }

      if (headingText instanceof HTMLElement) {
        tl.to(
          headingText,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.25"
        );
      }

      if (description instanceof HTMLElement) {
        tl.to(
          description,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.3"
        );
      }

      /*
      ------------------------------------------------------------
      DESKTOP CARDS
      ------------------------------------------------------------
      */
      if (desktopCards.length > 0) {
        tl.to(
          desktopCards,
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.25"
        );

        const firstCard = desktopCards[0];
        const secondCard = desktopCards[1];
        const thirdCard = desktopCards[2];

        if (firstCard instanceof HTMLElement) {
          tl.to(
            firstCard,
            {
              y: -16,
              ease: "none",
            },
            ">"
          );
        }

        if (secondCard instanceof HTMLElement) {
          tl.to(
            secondCard,
            {
              y: -26,
              ease: "none",
            },
            "<"
          );
        }

        if (thirdCard instanceof HTMLElement) {
          tl.to(
            thirdCard,
            {
              y: -20,
              ease: "none",
            },
            "<"
          );
        }
      }
    },
    {
      scope: sectionRef,
    }
  );

  /*
  ============================================================
  DRAGGABLE CAROUSEL SETUP
  ============================================================
  */
  useGSAP(
    () => {
      const track = trackRef.current;

      if (!(track instanceof HTMLDivElement)) return;

      const viewport = track.parentElement;

      if (!(viewport instanceof HTMLElement)) return;

      const getCardWidth = (): number => {
        return viewport.clientWidth;
      };

      /*
      ------------------------------------------------------------
      CARD ELEMENTS
      ------------------------------------------------------------
      */
      const cardElements: HTMLElement[] = Array.from(
        track.children
      ).filter(
        (element): element is HTMLElement =>
          element instanceof HTMLElement
      );

      /*
      ------------------------------------------------------------
      INITIAL CARD STATE
      ------------------------------------------------------------
      */
      cardElements.forEach((card, i) => {
        gsap.set(card, {
          scale: i === 0 ? 1 : 0.96,
          opacity: i === 0 ? 1 : 0.72,
        });
      });

      /*
      ------------------------------------------------------------
      DRAG BOUNDS
      ------------------------------------------------------------
      */
      const getBounds = () => ({
        minX: viewport.clientWidth - track.scrollWidth,
        maxX: 0,
      });

      const drg = Draggable.create(track, {
        type: "x",
        edgeResistance: 0.8,
        bounds: getBounds(),

        onPress: function () {
          gsap.killTweensOf(track);
        },

        onDrag: function () {
          const cardWidth = getCardWidth();

          if (cardWidth <= 0) return;

          const rawIndex =
            Math.abs(this.x) / cardWidth;

          const leftIndex = Math.floor(rawIndex);
          const rightIndex = Math.ceil(rawIndex);

          cardElements.forEach((card, i) => {
            if (
              i === leftIndex ||
              i === rightIndex
            ) {
              const distance = Math.abs(
                i - rawIndex
              );

              const clampedDistance = Math.min(
                distance,
                1
              );

              gsap.set(card, {
                scale: gsap.utils.mapRange(
                  0,
                  1,
                  1,
                  0.96,
                  clampedDistance
                ),
                opacity: gsap.utils.mapRange(
                  0,
                  1,
                  1,
                  0.72,
                  clampedDistance
                ),
              });
            }
          });
        },

        onDragEnd: function () {
          const cardWidth = getCardWidth();

          if (cardWidth <= 0) return;

          const nearestIndex = Math.round(
            Math.abs(this.endX) / cardWidth
          );

          const clampedIndex = Math.max(
            0,
            Math.min(
              nearestIndex,
              CARDS.length - 1
            )
          );

          animateToIndex(clampedIndex);
        },
      });

      /*
      ------------------------------------------------------------
      RESIZE
      ------------------------------------------------------------
      */
      const handleResize = () => {
        const cardWidth = getCardWidth();

        if (cardWidth <= 0) return;

        gsap.set(track, {
          x:
            -activeIndexRef.current *
            cardWidth,
        });

        const draggable = drg[0];

        if (draggable) {
          draggable.applyBounds(getBounds());
        }

        animateCards(activeIndexRef.current);
      };

      window.addEventListener(
        "resize",
        handleResize
      );

      /*
      ------------------------------------------------------------
      CLEANUP
      ------------------------------------------------------------
      */
      return () => {
        window.removeEventListener(
          "resize",
          handleResize
        );

        const draggable = drg[0];

        if (draggable) {
          draggable.kill();
        }
      };
    },
    {
      scope: trackRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="mx-auto w-full max-w-[1240px] overflow-hidden px-4 py-8 font-['Familjen_Grotesk'] text-[#2D3132] sm:px-6 sm:py-12 md:py-20"
    >
      {/* SECTION HEADING */}
      <div
        ref={headingRef}
        className="mb-8 max-w-2xl text-left sm:mb-10 md:mb-14"
      >
        <span className="problem-eyebrow mb-2 block text-[16px] font-medium uppercase tracking-wider text-[var(--accent)] sm:mb-3 sm:text-[18px]">
          THE PROBLEM
        </span>

        <h2 className="problem-heading mb-3 text-2xl font-semibold leading-tight tracking-tight text-[var(--primary)] sm:text-3xl md:text-4xl lg:text-[40px]">
          Stop searching for the{" "}
          <span className="font-serif-italic text-3xl font-normal text-[var(--secondary)] sm:text-4xl md:text-[46px]">
            signal.
          </span>
        </h2>

        <p className="problem-description text-xs font-normal leading-relaxed text-[#555B5D] sm:text-sm md:text-base">
          Most teams don't lack data. They lack a way
          to see it clearly. Every additional tool adds
          another place the answer might be hiding.
        </p>
      </div>

      {/* DESKTOP CARDS */}
      <div
        ref={desktopCardsRef}
        className="hidden items-stretch gap-6 lg:grid lg:grid-cols-3 [&>div>div]:h-full"
      >
        {CARDS.map((card) => (
          <div
            key={card.id}
            className="h-full w-full will-change-transform"
          >
            {card.component}
          </div>
        ))}
      </div>

      {/* MOBILE / TABLET CAROUSEL */}
      <div className="block w-full overflow-hidden lg:hidden">
        <div className="mx-auto w-full max-w-[360px] overflow-hidden">
          <div
            ref={trackRef}
            className="flex cursor-grab items-stretch touch-pan-y will-change-transform active:cursor-grabbing"
          >
            {CARDS.map((card) => (
              <div
                key={card.id}
                className="flex w-full shrink-0 justify-center px-1 will-change-transform"
              >
                {card.component}
              </div>
            ))}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="mx-auto mt-6 flex max-w-[360px] items-center justify-between px-2">
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous card"
            className="flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-xs transition-all hover:bg-slate-50 active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center space-x-2">
            {CARDS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() =>
                  animateToIndex(idx)
                }
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-7 bg-[#614986]"
                    : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={
              activeIndex === CARDS.length - 1
            }
            aria-label="Next card"
            className="flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-xs transition-all hover:bg-slate-50 active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;