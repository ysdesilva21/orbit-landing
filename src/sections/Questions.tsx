import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">

        {/* Left Content */}
        <div className="flex flex-col justify-between lg:col-span-5">

          <div>
            <p className="text-eyebrow mb-4">
              Questions
            </p>

            <h2 className="text-heading max-w-lg">
              <span className="font-serif-italic text-[var(--secondary)]">
                Before
              </span>{' '}
              you bring Orbit into the picture
            </h2>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 lg:mt-0">
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

        {/* FAQ Accordion */}
        <div className="space-y-3 lg:col-span-7">

          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className={`
                  overflow-hidden
                  rounded-xl
                  border
                  transition-colors
                  duration-200
                  ${
                    isOpen
                      ? `
                        border-[color-mix(in_srgb,var(--secondary)_30%,transparent)]
                        bg-[color-mix(in_srgb,var(--secondary)_10%,transparent)]
                      `
                      : `
                        border-[color-mix(in_srgb,#C6D0D9_30%,transparent)]
                        bg-[color-mix(in_srgb,var(--accent)_10%,transparent)]
                      `
                  }
                `}
              >

                {/* Question Button */}
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

                    {/* Number */}
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

                    {/* Question */}
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

                  {/* Icon */}
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

                {/* Answer */}
                {isOpen && (
                  <div className="pb-6 pl-[4.25rem] pr-6">
                    <p className="text-body max-w-xl">
                      {item.answer}
                    </p>
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};