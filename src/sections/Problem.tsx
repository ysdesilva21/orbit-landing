import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import DashboardSprawlCard from "../components/cards/problem/DashboardSprawlCard";
import DataScatteredCard from "../components/cards/problem/DataScatteredCard";
import ReportingTakesDaysCard from "../components/cards/problem/ReportingTakesDaysCard";

gsap.registerPlugin(Draggable, ScrollTrigger);

const ProblemSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);

  const headingRef = useRef<HTMLDivElement>(null);
  const desktopCardsRef = useRef<HTMLDivElement>(null);

  const trackRef = useRef<HTMLDivElement>(null);
  const mobileCardsRef = useRef<HTMLDivElement>(null);

  const cards = [
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

  /*
  ============================================================
  CAROUSEL ANIMATION
  ============================================================
  */

  const animateCards = (index: number) => {
    if (!mobileCardsRef.current) return;

    const cardElements = Array.from(
      mobileCardsRef.current.children
    ) as HTMLElement[];

    cardElements.forEach((card, i) => {
      gsap.to(card, {
        scale: i === index ? 1 : 0.96,
        opacity: i === index ? 1 : 0.72,
        duration: 0.55,
        ease: "power3.out",
        overwrite: true,
      });
    });
  };

  const animateToIndex = (index: number) => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const viewport = track.parentElement;

    if (!viewport) return;

    const cardWidth = viewport.clientWidth;

    const clampedIndex = Math.max(
      0,
      Math.min(index, cards.length - 1)
    );

    gsap.to(track, {
      x: -clampedIndex * cardWidth,
      duration: 0.65,
      ease: "power3.out",
      overwrite: true,
    });

    animateCards(clampedIndex);

    setActiveIndex(clampedIndex);
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

  /*
  ============================================================
  SCROLL-DRIVEN SECTION ANIMATION
  ============================================================
  */

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      const headingEyebrow = headingRef.current?.querySelector(
        ".problem-eyebrow"
      );

      const heading = headingRef.current?.querySelector(
        ".problem-heading"
      );

      const description = headingRef.current?.querySelector(
        ".problem-description"
      );

      const desktopCards = desktopCardsRef.current
        ? gsap.utils.toArray<HTMLElement>(
            desktopCardsRef.current.children
          )
        : [];

      /*
      ------------------------------------------------------------
      INITIAL STATES
      ------------------------------------------------------------
      */

      gsap.set(headingEyebrow, {
        y: 18,
        opacity: 0,
      });

      gsap.set(heading, {
        y: 35,
        opacity: 0,
      });

      gsap.set(description, {
        y: 22,
        opacity: 0,
      });

      gsap.set(desktopCards, {
        y: 55,
        opacity: 0,
      });

      /*
      ------------------------------------------------------------
      ENTRANCE + SCROLL-DRIVEN TIMELINE
      ------------------------------------------------------------

      The important difference:

      There is NO `once: true`.

      The entire animation is tied to scroll progress and
      therefore reverses when the user scrolls back upward.
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
      HEADER REVEAL
      ------------------------------------------------------------
      */

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

      tl.to(
        heading,
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.25"
      );

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

      /*
      ------------------------------------------------------------
      DESKTOP CARD REVEAL
      ------------------------------------------------------------
      */

      if (desktopCards.length) {
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
      }

      /*
      ------------------------------------------------------------
      SUBTLE DESKTOP PARALLAX
      ------------------------------------------------------------

      Cards don't fade out.

      They simply continue moving upward at slightly different
      rates as the user scrolls through the section.
      ------------------------------------------------------------
      */

      if (desktopCards.length) {
        tl.to(
          desktopCards[0],
          {
            y: -16,
            ease: "none",
          },
          ">"
        );

        tl.to(
          desktopCards[1],
          {
            y: -26,
            ease: "none",
          },
          "<"
        );

        tl.to(
          desktopCards[2],
          {
            y: -20,
            ease: "none",
          },
          "<"
        );
      }

      /*
      ------------------------------------------------------------
      MOBILE INITIAL CARD STATE
      ------------------------------------------------------------
      */

      if (mobileCardsRef.current) {
        const mobileCards = Array.from(
          mobileCardsRef.current.children
        ) as HTMLElement[];

        gsap.set(mobileCards, {
          scale: 0.96,
          opacity: 0.72,
        });

        gsap.set(mobileCards[0], {
          scale: 1,
          opacity: 1,
        });
      }

      /*
      ------------------------------------------------------------
      MOBILE SCROLL-DRIVEN ENTRANCE
      ------------------------------------------------------------
      */

      const mobileCards = mobileCardsRef.current
        ? gsap.utils.toArray<HTMLElement>(
            mobileCardsRef.current.children
          )
        : [];

      if (mobileCards.length) {
        tl.to(
          mobileCards[0],
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35"
        );
      }
    },
    {
      scope: sectionRef,
    }
  );

  /*
  ============================================================
  DRAGGABLE CAROUSEL
  ============================================================
  */

  useGSAP(
    () => {
      if (!trackRef.current) return;

      const track = trackRef.current;
      const viewport = track.parentElement;

      if (!viewport) return;

      const getCardWidth = () => viewport.clientWidth;

      const draggable = Draggable.create(track, {
        type: "x",

        edgeResistance: 0.8,

        bounds: () => ({
          minX: -((cards.length - 1) * getCardWidth()),
          maxX: 0,
        }),

        onPress: function () {
          gsap.killTweensOf(track);
        },

        onDrag: function () {
          const cardWidth = getCardWidth();

          const rawIndex = Math.abs(this.x) / cardWidth;

          const leftIndex = Math.floor(rawIndex);
          const rightIndex = Math.ceil(rawIndex);

          const cardElements = Array.from(
            track.children
          ) as HTMLElement[];

          cardElements.forEach((card, i) => {
            if (i === leftIndex || i === rightIndex) {
              const distance = Math.abs(i - rawIndex);

              gsap.set(card, {
                scale: gsap.utils.mapRange(
                  0,
                  1,
                  1,
                  0.96,
                  Math.min(distance, 1)
                ),

                opacity: gsap.utils.mapRange(
                  0,
                  1,
                  1,
                  0.72,
                  Math.min(distance, 1)
                ),
              });
            }
          });
        },

        onDragEnd: function () {
          const cardWidth = getCardWidth();

          const nearestIndex = Math.round(
            Math.abs(this.endX) / cardWidth
          );

          const clampedIndex = Math.max(
            0,
            Math.min(nearestIndex, cards.length - 1)
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

        gsap.set(track, {
          x: -activeIndex * cardWidth,
        });

        draggable[0].applyBounds({
          minX: -((cards.length - 1) * cardWidth),
          maxX: 0,
        });

        animateCards(activeIndex);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        draggable[0].kill();
      };
    },
    {
      scope: trackRef,
      dependencies: [],
    }
  );

  return (
    <section
      ref={sectionRef}
      className="
        mx-auto
        w-full
        max-w-[1240px]
        overflow-hidden
        px-4
        py-8
        font-['Familjen_Grotesk']
        text-[#2D3132]
        sm:px-6
        sm:py-12
        md:py-20
      "
    >
      {/* =========================================================
          SECTION HEADING
      ========================================================= */}

      <div
        ref={headingRef}
        className="
          mb-8
          max-w-2xl
          text-left
          sm:mb-10
          md:mb-14
        "
      >
        {/* Eyebrow */}

        <span
          className="
            problem-eyebrow
            mb-2
            block
            text-[16px]
            font-medium
            uppercase
            tracking-wider
            text-[var(--accent)]
            sm:mb-3
            sm:text-[18px]
          "
        >
          THE PROBLEM
        </span>

        {/* Heading */}

        <h2
          className="
            problem-heading
            mb-3
            text-2xl
            font-semibold
            leading-tight
            tracking-tight
            text-[var(--primary)]
            sm:text-3xl
            md:text-4xl
            lg:text-[40px]
          "
        >
          Stop searching for the{" "}
          <span
            className="
              font-serif-italic
              text-3xl
              font-normal
              text-[var(--secondary)]
              sm:text-4xl
              md:text-[46px]
            "
          >
            signal.
          </span>
        </h2>

        {/* Description */}

        <p
          className="
            problem-description
            text-xs
            font-normal
            leading-relaxed
            text-[#555B5D]
            sm:text-sm
            md:text-base
          "
        >
          Most teams don't lack data. They lack a way to see it clearly.
          Every additional tool adds another place the answer might be
          hiding.
        </p>
      </div>

      {/* =========================================================
          DESKTOP CARDS
      ========================================================= */}

      <div
        ref={desktopCardsRef}
        className="
          hidden
          items-stretch
          gap-6
          lg:grid
          lg:grid-cols-3
          [&>div>div]:h-full
        "
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="
              h-full
              w-full
              will-change-transform
            "
          >
            {card.component}
          </div>
        ))}
      </div>

      {/* =========================================================
          MOBILE / TABLET CAROUSEL
      ========================================================= */}

      <div className="block w-full overflow-hidden lg:hidden">
        <div
          className="
            mx-auto
            w-full
            max-w-[360px]
            overflow-hidden
          "
        >
          <div
            ref={trackRef}
            className="
              flex
              cursor-grab
              items-stretch
              touch-pan-y
              will-change-transform
              active:cursor-grabbing
            "
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="
                  flex
                  w-full
                  shrink-0
                  justify-center
                  px-1
                  will-change-transform
                "
              >
                {card.component}
              </div>
            ))}
          </div>
        </div>

        {/* =======================================================
            CONTROLS
        ======================================================= */}

        <div
          className="
            mx-auto
            mt-6
            flex
            max-w-[360px]
            items-center
            justify-between
            px-2
          "
        >
          {/* Previous */}

          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous card"
            className="
              flex
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              p-2
              text-slate-700
              shadow-xs
              transition-all
              hover:bg-slate-50
              active:scale-95
              disabled:pointer-events-none
              disabled:opacity-30
            "
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Pagination */}

          <div className="flex items-center space-x-2">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => animateToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`
                  h-2.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    activeIndex === idx
                      ? "w-7 bg-[#614986]"
                      : "w-2.5 bg-slate-300"
                  }
                `}
              />
            ))}
          </div>

          {/* Next */}

          <button
            onClick={handleNext}
            disabled={activeIndex === cards.length - 1}
            aria-label="Next card"
            className="
              flex
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              p-2
              text-slate-700
              shadow-xs
              transition-all
              hover:bg-slate-50
              active:scale-95
              disabled:pointer-events-none
              disabled:opacity-30
            "
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;