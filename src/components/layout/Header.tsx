import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logo from "../../assets/logos/orbit-logo.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const navContainerRef = useRef<HTMLElement>(null);

  const navLinks = [
    { label: "Product", href: "#product" },
    { label: "Solutions", href: "#solutions" },
    { label: "Trust", href: "#trust" },
    { label: "Pricing", href: "#pricing" },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      /* ----------------------------------------
         Initial Header Animation
         ---------------------------------------- */

      if (!prefersReducedMotion) {
        gsap.fromTo(
          headerRef.current,
          {
            opacity: 0,
            y: -8,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          }
        );
      }

      /* ----------------------------------------
         Scroll Header
         ---------------------------------------- */

      ScrollTrigger.create({
        start: "top+=20 top",

        onEnter: () => {
          gsap.to(headerRef.current, {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",

            backgroundColor: "rgba(255, 255, 255, 0.94)",
            backdropFilter: "blur(14px)",

            borderBottomColor: "rgba(230, 225, 236, 0.9)",

            boxShadow: "0 4px 16px rgba(33, 24, 50, 0.04)",

            duration: 0.25,
            ease: "power2.out",
          });

          gsap.to(navContainerRef.current, {
            height: "64px",

            duration: 0.25,
            ease: "power2.out",
          });
        },

        onLeaveBack: () => {
          gsap.to(headerRef.current, {
            position: "relative",

            backgroundColor: "rgba(255, 255, 255, 1)",
            backdropFilter: "blur(0px)",

            borderBottomColor: "transparent",

            boxShadow: "none",

            duration: 0.25,
            ease: "power2.out",
          });

          gsap.to(navContainerRef.current, {
            height: "76px",

            duration: 0.25,
            ease: "power2.out",
          });
        },
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-transparent
        bg-white
      "
    >
      <nav
        ref={navContainerRef}
        className="
          mx-auto
          flex
          h-[76px]
          max-w-7xl
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ========================================
            Logo
            ======================================== */}

        <a
          href="/"
          aria-label="Orbit home"
          className="
            flex
            items-center
            gap-2.5
            no-underline
            transition-opacity
            duration-200
            hover:opacity-80
          "
        >
          <img
            src={logo}
            alt="Orbit"
            className="
              block
              h-8
              w-8
              object-contain
              sm:h-9
              sm:w-9
            "
          />

          <span
            className="
              text-[23px]
              font-semibold
              leading-none
              tracking-[-0.04em]
              text-[var(--primary)]
            "
          >
            Orbit
          </span>
        </a>

        {/* ========================================
            Desktop Navigation
            ======================================== */}

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="header-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ========================================
            Desktop CTA
            ======================================== */}

        <button
          type="button"
          className="
            primary-button
            hidden
            rounded-lg
            px-4
            py-2
            text-[15px]
            font-medium
            active:scale-95
            md:inline-flex
          "
        >
          Start Free
        </button>

        {/* ========================================
            Mobile Menu Toggle
            ======================================== */}

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="
            inline-flex
            items-center
            justify-center
            text-sm
            font-medium
            leading-none
            text-[var(--primary)]
            transition-opacity
            duration-200
            hover:opacity-60
            md:hidden
          "
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* ========================================
          Mobile / Tablet Menu
          ======================================== */}

      <div
        className={`
          absolute
          left-0
          top-full
          z-50
          w-full
          overflow-hidden
          border-t
          border-[var(--border)]
          bg-white/95
          backdrop-blur-md
          transition-all
          duration-200
          ease-out
          md:hidden
          ${
            menuOpen
              ? "pointer-events-auto max-h-[500px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            py-5
            sm:px-6
          "
        >
          {/* ----------------------------------------
              Navigation Links
              ---------------------------------------- */}

          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  py-3
                  text-[15px]
                  font-medium
                  text-[var(--primary)]
                  no-underline
                  transition-opacity
                  duration-200
                  hover:opacity-60
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ----------------------------------------
              Mobile CTA
              ---------------------------------------- */}

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="
              primary-button
              mt-5
              w-full
              rounded-lg
              px-4
              py-2
              text-[15px]
              font-medium
              active:scale-95
            "
          >
            Start Free
          </button>
        </div>
      </div>
    </header>
  );
}
