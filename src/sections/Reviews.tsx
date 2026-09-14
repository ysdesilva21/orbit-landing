import React, { useRef } from "react";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const reviewsData = [
  {
    name: "Maya Chen",
    role: "VP Growth · Acme",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    title: "It's really convenient!",
    content:
      '"Orbit replaced the weekly reporting process we had built around spreadsheets and Slack. Our team can finally see what\'s happening without waiting for an analyst."',
  },
  {
    name: "Daniel Ross",
    role: "COO · Northstar",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    title: "It's super easy!",
    content:
      '"The biggest change wasn\'t another dashboard. It was having one reliable view of the business that everyone could actually trust."',
  },
  {
    name: "Sarah Kim",
    role: "VP Growth · Acme",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300",
    title: "It's really fast!",
    content:
      '"We went from spending hours reconciling metrics to having the answer in front of us."',
  },
];

export const Reviews: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      // ========================================
      // ELEMENTS
      // ========================================

      const eyebrow = section.querySelector(".reviews-eyebrow");

      const heading = section.querySelector(".reviews-heading");

      const description = section.querySelector(
        ".reviews-description"
      );

      const reviewItems = gsap.utils.toArray<HTMLElement>(
        ".review-item"
      );

      const cards = gsap.utils.toArray<HTMLElement>(
        ".review-card"
      );

      const avatars = gsap.utils.toArray<HTMLElement>(
        ".review-avatar"
      );

      const stars = gsap.utils.toArray<HTMLElement>(
        ".review-stars"
      );

      const reviewTitles = gsap.utils.toArray<HTMLElement>(
        ".review-title"
      );

      const reviewContents = gsap.utils.toArray<HTMLElement>(
        ".review-content"
      );

      const reviewerNames = gsap.utils.toArray<HTMLElement>(
        ".reviewer-name"
      );

      const reviewerRoles = gsap.utils.toArray<HTMLElement>(
        ".reviewer-role"
      );

      const metrics = gsap.utils.toArray<HTMLElement>(
        ".review-metric"
      );

      // ========================================
      // REDUCED MOTION
      // ========================================

      if (
        window.matchMedia("(prefers-reduced-motion: reduce)")
          .matches
      ) {
        return;
      }

      const mm = gsap.matchMedia();

      // =====================================================
      // DESKTOP
      // =====================================================

      mm.add("(min-width: 768px)", () => {
        // ========================================
        // INITIAL STATES
        // ========================================

        gsap.set(eyebrow, {
          y: 25,
          opacity: 0,
        });

        gsap.set(heading, {
          y: 45,
          opacity: 0,
        });

        gsap.set(description, {
          y: 25,
          opacity: 0,
        });

        gsap.set(cards, {
          y: 80,
          opacity: 0,
        });

        gsap.set(avatars, {
          y: -30,
          scale: 0.85,
          opacity: 0,
        });

        gsap.set(stars, {
          y: 15,
          opacity: 0,
        });

        gsap.set(reviewTitles, {
          y: 20,
          opacity: 0,
        });

        gsap.set(reviewContents, {
          y: 20,
          opacity: 0,
        });

        gsap.set(reviewerNames, {
          y: 15,
          opacity: 0,
        });

        gsap.set(reviewerRoles, {
          y: 12,
          opacity: 0,
        });

        gsap.set(metrics, {
          y: 35,
          opacity: 0,
        });

        // ========================================
        // SCROLL-DRIVEN TIMELINE
        // ========================================

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 60%",
            scrub: 1.2,
          },
        });

        // ========================================
        // HEADER
        // ========================================

        tl.to(eyebrow, {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
        });

        tl.to(
          heading,
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.2"
        );

        tl.to(
          description,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        );

        // ========================================
        // REVIEW CARDS
        // ========================================

        tl.to(
          cards,
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.18,
            ease: "power3.out",
          },
          "-=0.1"
        );

        // ========================================
        // AVATARS
        // ========================================

        tl.to(
          avatars,
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.18,
            ease: "power2.out",
          },
          "-=0.9"
        );

        // ========================================
        // STARS
        // ========================================

        stars.forEach((starGroup, index) => {
          const starItems = starGroup.querySelectorAll("svg");

          tl.to(
            starGroup,
            {
              y: 0,
              opacity: 1,
              duration: 0.35,
              ease: "power2.out",
            },
            index === 0 ? "-=0.5" : "-=0.25"
          );

          tl.from(
            starItems,
            {
              scale: 0.6,
              opacity: 0,
              duration: 0.3,
              stagger: 0.035,
              ease: "back.out(1.7)",
            },
            "<"
          );
        });

        // ========================================
        // REVIEW TITLES
        // ========================================

        tl.to(
          reviewTitles,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        );

        // ========================================
        // REVIEW CONTENT
        // ========================================

        tl.to(
          reviewContents,
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        );

        // ========================================
        // REVIEWER NAME
        // ========================================

        tl.to(
          reviewerNames,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.45"
        );

        // ========================================
        // REVIEWER ROLE
        // ========================================

        tl.to(
          reviewerRoles,
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.3"
        );

        // ========================================
        // FOOTER METRICS
        // ========================================

        tl.to(
          metrics,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.1"
        );
      });

      // =====================================================
      // MOBILE
      // =====================================================

      mm.add("(max-width: 767px)", () => {
        // ========================================
        // MOBILE INITIAL STATES
        // ========================================

        // Each complete review item appears as one unit.
        // Avatar + card animate together.

        gsap.set(reviewItems, {
          y: 70,
          opacity: 0,
        });

        gsap.set(eyebrow, {
          y: 20,
          opacity: 0,
        });

        gsap.set(heading, {
          y: 35,
          opacity: 0,
        });

        gsap.set(description, {
          y: 20,
          opacity: 0,
        });

        gsap.set(metrics, {
          y: 30,
          opacity: 0,
        });

        // ========================================
        // MOBILE SCROLL TIMELINE
        // ========================================

        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 65%",
            scrub: 1.2,
          },
        });

        // ========================================
        // HEADER
        // ========================================

        mobileTl.to(eyebrow, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        });

        mobileTl.to(
          heading,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.15"
        );

        mobileTl.to(
          description,
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power3.out",
          },
          "-=0.2"
        );

        // ========================================
        // CARD 01
        // ========================================

        mobileTl.to(
          reviewItems[0],
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "+=0.05"
        );

        // ========================================
        // CARD 02
        // ========================================

        mobileTl.to(
          reviewItems[1],
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "+=0.15"
        );

        // ========================================
        // CARD 03
        // ========================================

        mobileTl.to(
          reviewItems[2],
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "+=0.15"
        );

        // ========================================
        // FOOTER METRICS
        // ========================================

        mobileTl.to(
          metrics,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          },
          "+=0.1"
        );
      });

      // =====================================================
      // CARD HOVER
      // =====================================================

      cards.forEach((card) => {
        const enter = () => {
          gsap.to(card, {
            y: -6,
            duration: 0.35,
            ease: "power2.out",
            boxShadow:
              "0 20px 45px rgba(45, 49, 50, 0.10)",
            overwrite: "auto",
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            boxShadow: "none",
            overwrite: "auto",
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
      });

      return () => mm.revert();
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20"
      id="trust"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* ========================================
            HEADER
        ======================================== */}

        <div className="reviews-header mb-16 max-w-3xl">
          <p className="reviews-eyebrow text-eyebrow mb-4">
            Reviews
          </p>

          <h2 className="reviews-heading text-heading mb-4 max-w-3xl">
            Trusted by teams that need one source of{" "}
            <span className="font-serif-italic text-[var(--secondary)]">
              truth
            </span>
          </h2>

          <p className="reviews-description text-body">
            Finally, everyone is looking at the same numbers.
          </p>
        </div>

        {/* ========================================
            REVIEW CARDS
        ======================================== */}

        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviewsData.map((item, idx) => (
            <div
              key={idx}
              className="review-item relative pt-16"
            >
              {/* ========================================
                  PROFILE IMAGE
              ======================================== */}

              <div
                className="
                  review-avatar
                  absolute
                  left-1/2
                  top-0
                  z-10
                  -translate-x-1/2
                "
              >
                <div
                  className="
                    rounded-full
                    border-2
                    border-[var(--secondary)]
                    bg-white
                    p-1
                    shadow-md
                  "
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="
                      h-24
                      w-24
                      rounded-full
                      object-cover
                    "
                  />
                </div>
              </div>

              {/* ========================================
                  CARD
              ======================================== */}

              <div
                className="
                  review-card
                  card
                  flex
                  h-full
                  flex-col
                  justify-between
                  p-8
                  pt-16
                  text-left
                  will-change-transform
                "
              >
                <div>
                  {/* STAR RATING */}

                  <div
                    className="
                      review-stars
                      mb-6
                      flex
                      justify-center
                      gap-1
                      text-[var(--secondary)]
                    "
                  >
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="
                          h-5
                          w-5
                          fill-current
                          will-change-transform
                        "
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* REVIEW TITLE */}

                  <h3 className="review-title text-subheading mb-4 text-[var(--accent)]">
                    {item.title}
                  </h3>

                  {/* REVIEW CONTENT */}

                  <p className="review-content text-body mb-8">
                    {item.content}
                  </p>
                </div>

                {/* REVIEWER */}

                <div>
                  <div className="reviewer-name text-third-heading text-[var(--accent)]">
                    {item.name}
                  </div>

                  <div className="reviewer-role text-small text-[var(--accent)]">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================
            FOOTER METRICS
        ======================================== */}

        <div
          className="
            grid
            grid-cols-3
            gap-3
            border-t
            border-[color-mix(in_srgb,#C6D0D9_30%,transparent)]
            pt-8
            text-center
            md:gap-8
          "
        >
          <div className="review-metric">
            <div className="text-metric text-[var(--accent)]">
              14,000+
            </div>

            <div className="text-small mt-1 text-[var(--accent)]">
              teams
            </div>
          </div>

          <div className="review-metric">
            <div className="text-metric text-[var(--accent)]">
              45M+
            </div>

            <div className="text-small mt-1 text-[var(--accent)]">
              data points analyzed
            </div>
          </div>

          <div className="review-metric">
            <div className="text-metric text-[var(--accent)]">
              99.9%
            </div>

            <div className="text-small mt-1 text-[var(--accent)]">
              uptime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
