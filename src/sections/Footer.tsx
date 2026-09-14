import React, { useLayoutEffect, useRef } from 'react';
import {
  MessageCircle,
  Sparkles,
  Search,
  Code2,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../assets/logos/orbit-logo.png';

gsap.registerPlugin(ScrollTrigger);

const InstagramIcon = ({ size = 17 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
  </svg>
);

const XIcon = ({ size = 15 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.751 3h3.067l-6.7 7.625L22 21h-6.172l-4.833-6.293L5.464 21h-3.07l7.167-8.155L2 3h6.328l4.37 5.752zm-1.076 16.172h1.7L7.404 4.732H5.58z" />
  </svg>
);

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement | null>(null);

  const brandRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLDivElement | null>(null);
  const bottomBarRef = useRef<HTMLDivElement | null>(null);

  const linkColumnsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      /*
      ========================================================
      INITIAL STATES
      ========================================================
      */

      gsap.set(brandRef.current, {
        opacity: 0,
        y: 25,
      });

      gsap.set(linkColumnsRef.current, {
        opacity: 0,
        y: 25,
      });

      gsap.set(bottomBarRef.current, {
        opacity: 0,
        y: 15,
      });

      /*
      ========================================================
      SCROLL TRIGGER
      ========================================================

      Normal trigger animation.
      Not scrubbed.
      Not reversible.
      Plays when footer enters the viewport.
      ========================================================
      */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        defaults: {
          ease: 'power3.out',
        },
      });

      /*
      --------------------------------------------------------
      Brand
      --------------------------------------------------------
      */

      tl.to(brandRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.75,
      });

      /*
      --------------------------------------------------------
      Link columns
      --------------------------------------------------------
      */

      tl.to(
        linkColumnsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.07,
        },
        '-=0.5'
      );

      /*
      --------------------------------------------------------
      Bottom bar
      --------------------------------------------------------
      */

      tl.to(
        bottomBarRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
        },
        '-=0.35'
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="
        bg-linear-to-b
        from-[#EDE8F7]
        to-[#B29EF0]
        pt-16
        pb-12
        text-[#221C38]
      "
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ==================================================
            MAIN FOOTER
        ================================================== */}

        <div className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-12">

          {/* ==================================================
              BRAND COLUMN
          ================================================== */}

          <div
            ref={brandRef}
            className="space-y-6 md:col-span-5"
          >
            {/* Logo */}

            <a
              href="/"
              className="
                flex
                w-fit
                items-center
                gap-2.5
                no-underline
                transition-opacity
                duration-200
                hover:opacity-80
              "
              aria-label="Orbit home"
            >
              <img
                src={logo}
                alt="Orbit"
                className="block h-9 w-9 object-contain"
              />

              <span
                className="
                  text-[24px]
                  font-semibold
                  leading-none
                  tracking-[-0.03em]
                  text-[var(--primary)]
                "
              >
                Orbit
              </span>
            </a>

            {/* Brand Statement */}

            <h3 className="max-w-xs text-third-heading">
              Turn your business data into decisions.
            </h3>

            {/* ==================================================
                SOCIAL LINKS
            ================================================== */}

            <div className="flex items-center gap-3">

              {/* LinkedIn */}

              <a
                href="#"
                aria-label="Orbit on LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-[5px]
                  border
                  border-slate-200
                  bg-slate-100
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-md
                "
              >
                <span className="text-sm font-bold leading-none">
                  in
                </span>
              </a>

              {/* X */}

              <a
                href="#"
                aria-label="Orbit on X"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-[5px]
                  border
                  border-slate-200
                  bg-slate-100
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-md
                "
              >
                <XIcon />
              </a>

              {/* Instagram */}

              <a
                href="#"
                aria-label="Orbit on Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-[5px]
                  border
                  border-slate-200
                  bg-slate-100
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-md
                "
              >
                <InstagramIcon />
              </a>
            </div>

            {/* ==================================================
                AI TOOLS
            ================================================== */}

            <div className="space-y-3 pt-2">

              <p className="text-eyebrow">
                Ask about Orbit on
              </p>

              <div className="flex items-center gap-2">

                {/* ChatGPT */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-[5px]
                    border
                    border-slate-200
                    bg-slate-100
                    shadow-sm
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:shadow-md
                  "
                >
                  <MessageCircle
                    size={15}
                    strokeWidth={2}
                  />
                </div>

                {/* Claude */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-[5px]
                    border
                    border-slate-200
                    bg-slate-100
                    shadow-sm
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:shadow-md
                  "
                >
                  <Sparkles
                    size={15}
                    strokeWidth={2}
                  />
                </div>

                {/* Gemini */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-[5px]
                    border
                    border-slate-200
                    bg-slate-100
                    shadow-sm
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:shadow-md
                  "
                >
                  <span className="text-sm font-bold leading-none">
                    ✦
                  </span>
                </div>

                {/* Perplexity */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-[5px]
                    border
                    border-slate-200
                    bg-slate-100
                    shadow-sm
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:shadow-md
                  "
                >
                  <Search
                    size={15}
                    strokeWidth={2}
                  />
                </div>

                {/* Cursor */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-[5px]
                    border
                    border-slate-200
                    bg-slate-100
                    shadow-sm
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:shadow-md
                  "
                >
                  <Code2
                    size={15}
                    strokeWidth={2}
                  />
                </div>

              </div>
            </div>
          </div>

          {/* ==================================================
              LINK COLUMNS
          ================================================== */}

          <div
            ref={linksRef}
            className="
              grid
              grid-cols-2
              gap-8
              sm:grid-cols-4
              md:col-span-7
            "
          >
            {/* Product */}

            <div
              ref={(element) => {
                linkColumnsRef.current[0] = element;
              }}
            >
              <h4 className="mb-10 text-third-heading">
                Product
              </h4>

              <ul className="space-y-2.5 text-body">
                <li>
                  <a href="#" className="transition hover:text-black">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-black">
                    AI insights
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-black">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-black">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-black">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}

            <div
              ref={(element) => {
                linkColumnsRef.current[1] = element;
              }}
            >
              <h4 className="mb-10 text-third-heading">
                Company
              </h4>

              <ul className="space-y-2.5 text-body">
                <li>
                  <a href="#" className="transition hover:text-black">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-black">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-black">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-black">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}

            <div
              ref={(element) => {
                linkColumnsRef.current[2] = element;
              }}
            >
              <h4 className="mb-10 text-third-heading">
                Resources
              </h4>

              <ul className="space-y-2.5 text-body">
                <li>
                  <a href="#" className="transition hover:text-black">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-black">
                    API reference
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-black">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-black">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}

            <div
              ref={(element) => {
                linkColumnsRef.current[3] = element;
              }}
            >
              <h4 className="mb-10 text-third-heading">
                Legal
              </h4>

              <ul className="space-y-2.5 text-body">
                <li>
                  <a href="#" className="transition hover:text-black">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-black">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-black">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-black">
                    DPA
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==================================================
            BOTTOM BAR
        ================================================== */}

        <div
          ref={bottomBarRef}
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-slate-300
            pt-6
            text-small
            sm:flex-row
          "
        >
          <div>
            © 2026 Orbit Technologies, Inc.
          </div>

          <div>
            Built for teams who trust their numbers.
          </div>
        </div>
      </div>
    </footer>
  );
};