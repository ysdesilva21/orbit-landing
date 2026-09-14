import React, { useLayoutEffect, useRef, useState } from 'react';

import { Plus, Minus } from 'lucide-react';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: '01',
    question: 'What is Orbit?',
    answer:
      'Orbit brings revenue, acquisition, product usage, and customer data into one workspace so teams can work from a shared view of the business.',
  },
  {
    id: '02',
    question: 'Where does Orbit get my data?',
    answer:
      'Orbit connects to the tools your team already uses, including billing, CRM, product, and analytics systems.',
  },
  {
    id: '03',
    question: 'Do I need a data team to use Orbit?',
    answer:
      'No. Orbit is designed so business teams can explore metrics and answer questions without depending on analysts for every request.',
  },
  {
    id: '04',
    question: 'Can I create custom metrics?',
    answer:
      "Yes. Growth and Scale plans support custom metrics built around your company's definitions and data model.",
  },
  {
    id: '05',
    question: 'How long does setup take?',
    answer:
      'Most teams can connect their core data sources and start exploring their metrics quickly. More complex data environments may require additional configuration.',
  },
  {
    id: '06',
    question: 'Is my data secure?',
    answer:
      'Orbit uses security controls designed for business-critical data, including encryption and access controls.',
  },
  {
    id: '07',
    question: 'Can Orbit replace our existing dashboards?',
    answer:
      "Orbit can consolidate many of them, but you don't need to replace everything at once. Start with the metrics and workflows where fragmented reporting causes the most friction.",
  },
  {
    id: '08',
    question: 'Can I try Orbit before paying?',
    answer:
      'Yes. Start with the free trial and connect your first data sources before committing to a paid plan.',
  },
];

export const Questions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const leftContentRef = useRef<HTMLDivElement | null>(null);

  const eyebrowRef = useRef<HTMLParagraphElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const faqContainerRef = useRef<HTMLDivElement | null>(null);

  const faqItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  /*
  ========================================================
  SCROLL-DRIVEN SECTION ANIMATION
  ========================================================
  */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            eyebrowRef.current,
            headingRef.current,
            contactRef.current,
            ...faqItemsRef.current,
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
          }
        );

        return;
      }

      /*
      ========================================================
      RESPONSIVE ANIMATION
      ========================================================
      */

      const mm = gsap.matchMedia();

      /*
      ========================================================
      DESKTOP
      ========================================================
      */

      mm.add('(min-width: 768px)', () => {
        /*
        --------------------------------------------------------
        INITIAL STATES
        --------------------------------------------------------
        */

        gsap.set(eyebrowRef.current, {
          opacity: 0,
          y: 18,
        });

        gsap.set(headingRef.current, {
          opacity: 0,
          y: 30,
        });

        gsap.set(contactRef.current, {
          opacity: 0,
          y: 25,
        });

        gsap.set(faqItemsRef.current, {
          opacity: 0,
          y: 35,
        });

        /*
        --------------------------------------------------------
        MAIN DESKTOP TIMELINE
        --------------------------------------------------------
        */

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            end: 'bottom 58%',
            scrub: 1.1,
            invalidateOnRefresh: true,
          },
        });

        /*
        --------------------------------------------------------
        LEFT SIDE
        --------------------------------------------------------
        */

        tl.to(
          eyebrowRef.current,
          {
            opacity: 1,
            y: 0,
            ease: 'none',
          },
          0
        );

        tl.to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            ease: 'none',
          },
          0.08
        );

        /*
        --------------------------------------------------------
        FAQ ROWS
        --------------------------------------------------------
        */

        tl.to(
          faqItemsRef.current,
          {
            opacity: 1,
            y: 0,
            stagger: 0.055,
            ease: 'none',
          },
          0.05
        );

        /*
        --------------------------------------------------------
        CONTACT BLOCK
        --------------------------------------------------------
        */

        tl.to(
          contactRef.current,
          {
            opacity: 1,
            y: 0,
            ease: 'none',
          },
          0.25
        );

        /*
        --------------------------------------------------------
        SUBTLE DESKTOP DEPTH
        --------------------------------------------------------
        */

        tl.to(
          headingRef.current,
          {
            y: -8,
            ease: 'none',
          },
          0.55
        );

        tl.to(
          contactRef.current,
          {
            y: -12,
            ease: 'none',
          },
          0.55
        );

        tl.to(
          faqItemsRef.current,
          {
            y: -10,
            stagger: 0.025,
            ease: 'none',
          },
          0.55
        );
      });

      /*
      ========================================================
      MOBILE
      ========================================================
      */

      mm.add('(max-width: 767px)', () => {
        /*
        --------------------------------------------------------
        INITIAL STATES
        --------------------------------------------------------
        */

        gsap.set(eyebrowRef.current, {
          opacity: 0,
          y: 8,
        });

        gsap.set(headingRef.current, {
          opacity: 0,
          y: 14,
        });

        gsap.set(faqItemsRef.current, {
          opacity: 0,
          y: 18,
        });

        gsap.set(contactRef.current, {
          opacity: 0,
          y: 14,
        });

        /*
        --------------------------------------------------------
        MOBILE TIMELINE
        --------------------------------------------------------

        Short trigger range so the section resolves quickly.
        */

        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            end: 'top 55%',
            scrub: 0.4,
            invalidateOnRefresh: true,
          },
        });

        /*
        --------------------------------------------------------
        HEADER
        --------------------------------------------------------
        */

        mobileTl.to(
          eyebrowRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.22,
            ease: 'power2.out',
          },
          0
        );

        mobileTl.to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.32,
            ease: 'power2.out',
          },
          '-=0.12'
        );

        /*
        --------------------------------------------------------
        FAQ ROWS
        --------------------------------------------------------

        Each FAQ row enters as a complete unit.
        The stagger is intentionally tight because there are
        eight rows on mobile.
        */

        mobileTl.to(
          faqItemsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.24,
            stagger: 0.035,
            ease: 'power2.out',
          },
          '-=0.08'
        );

        /*
        --------------------------------------------------------
        CONTACT CTA
        --------------------------------------------------------
        */

        mobileTl.to(
          contactRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.28,
            ease: 'power2.out',
          },
          '-=0.12'
        );

        /*
        --------------------------------------------------------
        NO MOBILE PARALLAX
        --------------------------------------------------------

        The FAQ list is already vertically long on mobile.
        Additional movement would make the section feel slower.
        */
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /*
  ========================================================
  ACCORDION ANIMATION
  ========================================================
  */

  useLayoutEffect(() => {
    answerRefs.current.forEach((answer, index) => {
      if (!answer) return;

      const isOpen = openIndex === index;

      if (isOpen) {
        gsap.killTweensOf(answer);

        gsap.fromTo(
          answer,
          {
            height: 0,
            opacity: 0,
          },
          {
            height: 'auto',
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
            overwrite: true,
          }
        );
      } else {
        gsap.killTweensOf(answer);

        gsap.to(answer, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
          overwrite: true,
        });
      }
    });
  }, [openIndex]);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">

        {/* ==================================================
            LEFT CONTENT
        ================================================== */}

        <div
          ref={leftContentRef}
          className="flex flex-col justify-between lg:col-span-5"
        >
          <div>
            <p
              ref={eyebrowRef}
              className="text-eyebrow mb-4"
            >
              Questions
            </p>

            <h2
              ref={headingRef}
              className="text-heading max-w-lg"
            >
              <span className="font-serif-italic text-[var(--secondary)]">
                Before
              </span>{' '}
              you bring Orbit into the picture
            </h2>
          </div>

          {/* ================================================
              CONTACT CTA
          ================================================= */}

          <div
            ref={contactRef}
            className="mt-16 lg:mt-0"
          >
            <h3 className="text-subheading mb-2">
              Still have a question?
            </h3>

            <p className="text-body mb-6 max-w-sm">
              Don't worry. We're available if you need help understanding
              how Orbit fits into your workflow.
            </p>

            <button
              type="button"
              className="
                primary-button
                inline-flex
                items-center
                justify-center
                rounded-lg
                px-6
                py-3
                text-sm
                font-medium
              "
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* ==================================================
            FAQ ACCORDION
        ================================================== */}

        <div
          ref={faqContainerRef}
          className="space-y-3 lg:col-span-7"
        >
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                ref={(element) => {
                  faqItemsRef.current[index] = element;
                }}
                className={`
                  overflow-hidden
                  rounded-xl
                  border
                  transition-colors
                  duration-200
                  ${
                    isOpen
                      ? 'border-[color-mix(in_srgb,var(--secondary)_30%,transparent)] bg-[color-mix(in_srgb,var(--secondary)_10%,transparent)]'
                      : 'border-[color-mix(in_srgb,#C6D0D9_30%,transparent)] bg-white'
                  }
                `}
              >
                {/* ========================================
                    QUESTION
                ======================================== */}

                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-start
                    justify-between
                    gap-4
                    p-5
                    text-left
                    sm:p-6
                  "
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`
                        shrink-0
                        pt-0.5
                        text-small
                        transition-colors
                        duration-200
                        ${
                          isOpen
                            ? 'text-[var(--secondary)]'
                            : 'text-[var(--primary)]'
                        }
                      `}
                    >
                      {item.id}
                    </span>

                    <span
                      className={`
                        text-third-heading
                        transition-colors
                        duration-200
                        ${
                          isOpen
                            ? 'text-[var(--secondary)]'
                            : 'text-[var(--primary)]'
                        }
                      `}
                    >
                      {item.question}
                    </span>
                  </div>

                  {/* ======================================
                      PLUS / MINUS
                  ====================================== */}

                  <span
                    className={`
                      mt-0.5
                      shrink-0
                      transition-colors
                      duration-200
                      ${
                        isOpen
                          ? 'text-[var(--secondary)]'
                          : 'text-[var(--primary)]'
                      }
                    `}
                  >
                    {isOpen ? (
                      <Minus
                        className="h-4 w-4"
                        strokeWidth={1.75}
                      />
                    ) : (
                      <Plus
                        className="h-4 w-4"
                        strokeWidth={1.75}
                      />
                    )}
                  </span>
                </button>

                {/* ========================================
                    ANSWER
                ======================================== */}

                <div
                  ref={(element) => {
                    answerRefs.current[index] = element;
                  }}
                  className="h-0 overflow-hidden opacity-0"
                >
                  <div className="pb-6 pl-[4.25rem] pr-6">
                    <p className="text-body max-w-xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};