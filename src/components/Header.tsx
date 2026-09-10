'use client';

import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    { label: "Resources", href: "#resources" },
    { label: "Pricing", href: "#pricing" },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // 1. Unobtrusive Page Load Reveal
      if (!prefersReducedMotion) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: -8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          }
        );
      } else {
        gsap.set(headerRef.current, { opacity: 1, y: 0 });
      }

      // 2. Scroll Position Aware Transformation
      ScrollTrigger.create({
        start: "top+=20 top",
        onEnter: () => {
          gsap.to(headerRef.current, {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(12px)",
            borderBottomColor: "rgba(0, 0, 0, 0.06)",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.02)",
            duration: 0.25,
            ease: "power1.out",
          });

          gsap.to(navContainerRef.current, {
            height: "64px",
            duration: 0.25,
            ease: "power1.out",
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
            ease: "power1.out",
          });

          gsap.to(navContainerRef.current, {
            height: "76px",
            duration: 0.25,
            ease: "power1.out",
          });
        },
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="relative z-50 w-full border-b border-transparent bg-white transition-colors duration-200"
    >
      <nav
        ref={navContainerRef}
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 transition-[height] duration-200 ease-out"
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 no-underline opacity-100 transition-opacity duration-200 hover:opacity-90"
        >
          <img
            src="/orbit-logo.png"
            alt="Orbit"
            className="block h-9 w-9 object-contain"
          />

          <span className="text-[24px] font-semibold leading-none tracking-[-0.03em] text-[var(--primary)]">
            Orbit
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                header-link
                relative
                text-[16px]
                font-medium
                leading-none
                text-[var(--primary)]
                transition-all
                duration-200
                hover:opacity-100
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          type="button"
          className="
            primary-button
            hidden
            rounded-lg
            px-5
            py-2.5
            text-[16px]
            font-medium
            leading-none
            transition-all
            duration-200
            hover:brightness-105
            active:scale-[0.98]
            md:block
          "
        >
          Start Free
        </button>

        {/* Tablet / Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            block
            text-[16px]
            font-medium
            text-[var(--primary)]
            transition-opacity
            duration-200
            hover:opacity-75
            md:hidden
          "
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Tablet / Mobile Dropdown Panel */}
      <div
        className={`
          absolute
          left-0
          top-full
          z-50
          w-full
          overflow-hidden
          border-t
          border-black/5
          bg-white/98
          backdrop-blur-md
          transition-all
          duration-200
          ease-out
          md:hidden
          ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-6 py-5">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  header-link
                  border-b
                  border-black/5
                  py-4
                  text-[16px]
                  font-medium
                  text-[var(--primary)]
                  transition-colors
                  duration-150
                  hover:text-[var(--accent)]
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="
              primary-button
              mt-5
              w-full
              rounded-lg
              px-5
              py-3
              text-[16px]
              font-medium
              transition-all
              duration-200
              active:scale-[0.98]
            "
          >
            Start Free
          </button>
        </div>
      </div>
    </header>
  );
}