import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface Logo {
  name: string;
  styleClass: string;
}

const LOGOS: Logo[] = [
  {
    name: "Firevane",
    styleClass: "font-mono text-slate-700 tracking-wider",
  },
  {
    name: "Crestify",
    styleClass: "font-bold text-slate-900 tracking-tight",
  },
  {
    name: "Ironpulse",
    styleClass: "font-extrabold text-slate-900 tracking-tighter",
  },
  {
    name: "Aethermind",
    styleClass: "font-light text-slate-600 tracking-wide",
  },
  {
    name: "Embervault",
    styleClass: "font-bold text-slate-900",
  },
  {
    name: "Thetaworks",
    styleClass: "font-semibold text-slate-800",
  },
];

export const TrustSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      // ========================================
      // ELEMENTS
      // ========================================

      const heading = section.querySelector(".trust-heading");
      const leftHeading = section.querySelector(".trust-left-heading");

      const logoContainer = section.querySelector(
        ".trust-logo-container"
      );

      const desktopLogos = gsap.utils.toArray<HTMLElement>(
        ".desktop-logo"
      );

      const testimonialCard = section.querySelector(
        ".testimonial-card"
      );

      const testimonialQuote = section.querySelector(
        ".testimonial-quote"
      );

      const testimonialAvatar = section.querySelector(
        ".testimonial-avatar"
      );

      const testimonialName = section.querySelector(
        ".testimonial-name"
      );

      const testimonialRole = section.querySelector(
        ".testimonial-role"
      );

      // ========================================
      // INITIAL STATES
      // ========================================

      gsap.set(heading, {
        y: 55,
        opacity: 0,
      });

      gsap.set(leftHeading, {
        y: 30,
        opacity: 0,
      });

      gsap.set(logoContainer, {
        y: 25,
        opacity: 0,
      });

      gsap.set(desktopLogos, {
        y: 25,
        opacity: 0,
      });

      gsap.set(testimonialCard, {
        y: 70,
        opacity: 0,
        scale: 0.96,
      });

      gsap.set(testimonialQuote, {
        y: 25,
        opacity: 0,
      });

      gsap.set(testimonialAvatar, {
        y: 20,
        opacity: 0,
        scale: 0.85,
      });

      gsap.set(testimonialName, {
        y: 15,
        opacity: 0,
      });

      gsap.set(testimonialRole, {
        y: 12,
        opacity: 0,
      });

      // ========================================
      // MAIN SCROLL-DRIVEN TIMELINE
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
      // TOP HEADING
      // ========================================

      tl.to(heading, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      });

      // ========================================
      // LEFT HEADING
      // ========================================

      tl.to(
        leftHeading,
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
        },
        "-=0.35"
      );

      // ========================================
      // LOGO CONTAINER
      // ========================================

      tl.to(
        logoContainer,
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
        },
        "-=0.35"
      );

      // ========================================
      // DESKTOP LOGOS
      // ========================================

      tl.to(
        desktopLogos,
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.45"
      );

      // ========================================
      // TESTIMONIAL CARD
      // ========================================

      tl.to(
        testimonialCard,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.75"
      );

      // ========================================
      // TESTIMONIAL QUOTE
      // ========================================

      tl.to(
        testimonialQuote,
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.55"
      );

      // ========================================
      // TESTIMONIAL AVATAR
      // ========================================

      tl.to(
        testimonialAvatar,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.5)",
        },
        "-=0.4"
      );

      // ========================================
      // TESTIMONIAL NAME
      // ========================================

      tl.to(
        testimonialName,
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // ========================================
      // TESTIMONIAL ROLE
      // ========================================

      tl.to(
        testimonialRole,
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.25"
      );

      // ========================================
      // MOBILE / TABLET MARQUEE
      // ========================================

      const mm = gsap.matchMedia();

      mm.add("(max-width: 1023px)", () => {
        const track = section.querySelector(
          ".trust-logo-track"
        ) as HTMLElement | null;

        if (!track) return;

        /*
         * The entrance is controlled by the main
         * scroll timeline above.
         *
         * The horizontal movement itself remains
         * continuous so the marquee doesn't stop
         * when the user stops scrolling.
         */

        const marquee = gsap.to(track, {
          xPercent: -50,
          duration: 18,
          repeat: -1,
          ease: "none",
          force3D: true,
        });

        return () => {
          marquee.kill();

          gsap.set(track, {
            clearProps: "xPercent",
          });
        };
      });

      // ========================================
      // DESKTOP CLEANUP
      // ========================================

      mm.add("(min-width: 1024px)", () => {
        const track = section.querySelector(
          ".trust-logo-track"
        );

        if (!track) return;

        gsap.set(track, {
          clearProps: "xPercent",
        });
      });

      // ========================================
      // TESTIMONIAL HOVER
      // ========================================

      if (testimonialCard) {
        const enter = () => {
          gsap.to(testimonialCard, {
            y: -6,
            duration: 0.35,
            ease: "power2.out",
            boxShadow:
              "0 20px 50px rgba(45, 49, 50, 0.10)",
            overwrite: "auto",
          });
        };

        const leave = () => {
          gsap.to(testimonialCard, {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
            overwrite: "auto",
          });
        };

        testimonialCard.addEventListener(
          "mouseenter",
          enter
        );

        testimonialCard.addEventListener(
          "mouseleave",
          leave
        );

        return () => {
          testimonialCard.removeEventListener(
            "mouseenter",
            enter
          );

          testimonialCard.removeEventListener(
            "mouseleave",
            leave
          );
        };
      }
    },
    {
      scope: sectionRef,
    }
  );

  const marqueeLogos = [...LOGOS, ...LOGOS];

  return (
    <section
      ref={sectionRef}
      className="
        mx-auto
        w-full
        max-w-6xl
        bg-white
        px-4
        py-12
        text-slate-800
        sm:px-6
        lg:px-8
      "
    >
      {/* ========================================
          TOP BANNER / HEADING
      ======================================== */}

      <div className="mb-14 text-center lg:mb-16">
        <h2
          className="
            trust-heading
            mx-auto
            max-w-2xl
            text-2xl
            font-semibold
            leading-snug
            text-slate-800
            sm:text-3xl
            lg:text-4xl
          "
        >
          More than{" "}
          <span
            className="
              font-serif-italic
              text-[1.1em]
              font-normal
              text-[var(--secondary)]
            "
          >
            50k professionals
          </span>{" "}
          have trusted us to start their journey with{" "}
          <span
            className="
              font-serif-italic
              text-[1.1em]
              font-normal
              text-[var(--secondary)]
            "
          >
            Orbit.
          </span>
        </h2>
      </div>

      {/* ========================================
          MAIN GRID
      ======================================== */}

      <div
        className="
          grid
          grid-cols-1
          items-center
          gap-8
          lg:grid-cols-2
          lg:gap-12
        "
      >
        {/* ========================================
            LEFT SIDE
        ======================================== */}

        <div
          className="
            flex
            w-full
            flex-col
            items-center
            overflow-hidden
            text-center
            lg:items-start
            lg:border-r
            lg:border-slate-200
            lg:pr-8
            lg:text-left
          "
        >
          {/* LEFT HEADING */}

          <h3
            className="
              trust-left-heading
              mb-10
              text-xl
              font-bold
              text-slate-400
              sm:text-2xl
              lg:mb-5
              lg:text-sm
              lg:font-semibold
              lg:uppercase
              lg:tracking-wider
            "
          >
            Trusted by modern teams building with data
          </h3>

          {/* ========================================
              LOGOS CONTAINER
          ======================================== */}

          <div
            className="
              trust-logo-container
              relative
              w-full
              overflow-hidden
            "
          >
            {/* LEFT FOG */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                top-0
                z-10
                w-12
                bg-gradient-to-r
                from-white
                to-transparent
                sm:w-16
                lg:hidden
              "
              aria-hidden="true"
            />

            {/* RIGHT FOG */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                right-0
                top-0
                z-10
                w-12
                bg-gradient-to-l
                from-white
                to-transparent
                sm:w-16
                lg:hidden
              "
              aria-hidden="true"
            />

            {/* ========================================
                LOGO TRACK
            ======================================== */}

            <div className="w-full overflow-hidden">
              <div
                className="
                  trust-logo-track
                  flex
                  min-w-max
                  items-center
                  justify-start
                  gap-8
                  will-change-transform
                  sm:gap-12
                  lg:grid
                  lg:min-w-0
                  lg:grid-cols-3
                  lg:justify-items-center
                  lg:gap-6
                  lg:gap-y-10
                "
              >
                {/* ========================================
                    MOBILE / TABLET MARQUEE
                ======================================== */}

                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-8
                    pr-8
                    lg:hidden
                    sm:gap-12
                    sm:pr-12
                  "
                >
                  {marqueeLogos.map((logo, index) => (
                    <span
                      key={`marquee-${logo.name}-${index}`}
                      className={`
                        select-none
                        whitespace-nowrap
                        text-lg
                        sm:text-xl
                        ${logo.styleClass}
                      `}
                    >
                      {logo.name}
                    </span>
                  ))}
                </div>

                {/* ========================================
                    DESKTOP LOGOS
                ======================================== */}

                {LOGOS.map((logo) => (
                  <span
                    key={`desktop-${logo.name}`}
                    className={`
                      desktop-logo
                      hidden
                      whitespace-nowrap
                      text-lg
                      lg:inline-block
                      lg:text-lg
                      ${logo.styleClass}
                    `}
                  >
                    {logo.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================
            RIGHT SIDE
        ======================================== */}

        <div className="mx-auto w-full max-w-lg lg:max-w-none">
          <div
            className="
              testimonial-card
              flex
              flex-col
              justify-between
              rounded-2xl
              bg-[#EAE8F2]
              p-6
              shadow-sm
              sm:p-8
              md:p-10
              will-change-transform
            "
          >
            {/* ========================================
                QUOTE
            ======================================== */}

            <blockquote
              className="
                testimonial-quote
                mb-6
                text-base
                font-medium
                leading-relaxed
                text-slate-800
                sm:mb-8
                sm:text-lg
              "
            >
              “ We went from a weekly reporting scramble
              across six tools to a single view the whole
              leadership team trusts. Orbit surfaced a
              churn risk in our mid-market segment three
              weeks before it would have shown up in our
              board deck. “
            </blockquote>

            {/* ========================================
                TESTIMONIAL AUTHOR
            ======================================== */}

            <div className="flex items-center gap-3">
              {/* AVATAR */}

              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                alt="Kaite Nathan"
                className="
                  testimonial-avatar
                  h-12
                  w-12
                  rounded-full
                  object-cover
                  will-change-transform
                "
              />

              {/* AUTHOR DETAILS */}

              <div className="text-left">
                <div
                  className="
                    testimonial-name
                    text-sm
                    font-bold
                    text-[var(--accent)]
                    sm:text-base
                  "
                >
                  Kaite Nathan
                </div>

                <div
                  className="
                    testimonial-role
                    text-xs
                    font-medium
                    text-slate-600
                    sm:text-sm
                  "
                >
                  VP of Operations, Fieldstone Logistics
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;