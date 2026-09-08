import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Logo {
  name: string;
  styleClass: string;
}

const LOGOS: Logo[] = [
  { name: 'Firevane', styleClass: 'font-mono text-slate-700 tracking-wider' },
  { name: 'Crestify', styleClass: 'font-bold text-slate-900 tracking-tight' },
  { name: 'Ironpulse', styleClass: 'font-extrabold text-slate-900 tracking-tighter' },
  { name: 'Aethermind', styleClass: 'font-light text-slate-600 tracking-wide' },
  { name: 'Embervault', styleClass: 'font-bold text-slate-900' },
  { name: 'Thetaworks', styleClass: 'font-semibold text-slate-800' },
];

export const TrustSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leftHeadingRef = useRef<HTMLHeadingElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const logoTrackRef = useRef<HTMLDivElement>(null);
  const testimonialCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Check accessibility setting
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Keep everything static and fully visible
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Top Heading Scroll Reveal
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // 2. Left Column Reveal (Heading + Logo Area Stagger)
      const leftElements = [leftHeadingRef.current, logoContainerRef.current].filter(Boolean);
      if (leftElements.length > 0) {
        gsap.fromTo(
          leftElements,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leftHeadingRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // 2. Right Testimonial Card Reveal
      if (testimonialCardRef.current) {
        gsap.fromTo(
          testimonialCardRef.current,
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: testimonialCardRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // 3, 4, 5, 8. Responsive Logo Animation handling (gsap.matchMedia)
      const mm = gsap.matchMedia();

      // Tablet + Mobile (<1024px) -> Infinite marquee loop
      mm.add('(max-width: 1023px)', () => {
        const track = logoTrackRef.current;
        if (!track) return;

        // Animate xPercent from 0 to -50% (assuming content is duplicated once, so -50% is 1 full loop width)
        const marqueeTween = gsap.to(track, {
          xPercent: -50,
          repeat: -1,
          duration: 18,
          ease: 'none',
          force3D: true,
        });

        return () => {
          marqueeTween.kill();
          gsap.set(track, { clearProps: 'xPercent' });
        };
      });

      // Desktop (>=1024px) -> Keep existing grid layout (no marquee tween)
      mm.add('(min-width: 1024px)', () => {
        if (logoTrackRef.current) {
          gsap.set(logoTrackRef.current, { clearProps: 'xPercent' });
        }
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  // Duplicate logos once for seamless looping marquee on mobile/tablet
  const marqueeLogos = [...LOGOS, ...LOGOS];

  return (
    <section ref={sectionRef} className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-slate-800">
      {/* Top Banner / Heading */}
      <div className="text-center mb-14 lg:mb-16">
        <h2
          ref={headingRef}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-800 leading-snug max-w-2xl mx-auto"
        >
          More than{' '}
          <span className="font-serif-italic font-normal text-purple-800 text-[1.1em]">
            50k professionals
          </span>{' '}
          have trusted us to start their journey with{' '}
          <span className="font-serif-italic font-normal text-purple-800 text-[1.1em]">
            Orbit.
          </span>
        </h2>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side: Logos & Heading */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pr-8 lg:border-r lg:border-slate-200 w-full overflow-hidden">
          <h3
            ref={leftHeadingRef}
            className="text-xl sm:text-2xl font-bold text-slate-800 mb-10 lg:mb-10 lg:text-slate-400 lg:text-sm lg:font-semibold lg:uppercase lg:tracking-wider"
          >
            Trusted by modern teams building with data
          </h3>

          {/* Logos Container */}
          <div ref={logoContainerRef} className="w-full relative overflow-hidden">
            {/* White Fog Edge Gradients (Mobile & Tablet Only) */}
            <div
              className="lg:hidden absolute top-0 bottom-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="lg:hidden absolute top-0 bottom-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
              aria-hidden="true"
            />

            {/* Logo Track */}
            <div className="w-full overflow-hidden">
              <div
                ref={logoTrackRef}
                className="flex lg:grid lg:grid-cols-3 items-center justify-start lg:justify-items-center gap-8 sm:gap-12 lg:gap-6 lg:gap-y-10 min-w-max lg:min-w-0 will-change-transform"
              >
                {/* Mobile/Tablet duplicated render for seamless loop */}
                <div className="flex lg:hidden items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12">
                  {marqueeLogos.map((logo, index) => (
                    <span
                      key={`marquee-${logo.name}-${index}`}
                      className={`text-lg sm:text-xl whitespace-nowrap select-none ${logo.styleClass}`}
                    >
                      {logo.name}
                    </span>
                  ))}
                </div>

                {/* Desktop layout render */}
                <React.Fragment>
                  {LOGOS.map((logo) => (
                    <span
                      key={`desktop-${logo.name}`}
                      className={`hidden lg:inline-block text-lg sm:text-xl lg:text-lg whitespace-nowrap ${logo.styleClass}`}
                    >
                      {logo.name}
                    </span>
                  ))}
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Testimonial Card */}
        <div ref={testimonialCardRef} className="w-full max-w-lg mx-auto lg:max-w-none">
          <div className="bg-[#EAE8F2] rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm flex flex-col justify-between">
            <blockquote className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed mb-6 sm:mb-8">
              “ We went from a weekly reporting scramble across six tools to a single view the whole leadership team trusts. Orbit surfaced a churn risk in our mid-market segment three weeks before it would have shown up in our board deck. “
            </blockquote>

            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                alt="Kaite Nathan"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-bold text-slate-900 text-sm sm:text-base">
                  Kaite Nathan
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">
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