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
    answer: 'Orbit brings revenue, acquisition, product usage, and customer data into one workspace so teams can work from a shared view of the business.'
  },
  {
    id: '01',
    question: 'Where does Orbit get my data?',
    answer: 'Orbit connects to the tools your team already uses, including billing, CRM, product, and analytics systems.'
  },
  {
    id: '01',
    question: 'Do I need a data team to use Orbit?',
    answer: 'No. Orbit is designed so business teams can explore metrics and answer questions without depending on analysts for every request.'
  },
  {
    id: '01',
    question: 'Can I create custom metrics?',
    answer: "Yes. Growth and Scale plans support custom metrics built around your company's definitions and data model."
  },
  {
    id: '01',
    question: 'How long does setup take?',
    answer: 'Most teams can connect their core data sources and start exploring their metrics quickly. More complex data environments may require additional configuration.'
  },
  {
    id: '01',
    question: 'Is my data secure?',
    answer: 'Orbit uses security controls designed for business-critical data, including encryption and access controls.'
  },
  {
    id: '01',
    question: 'Can Orbit replace our existing dashboards?',
    answer: "Orbit can consolidate many of them, but you don't need to replace everything at once. Start with the metrics and workflows where fragmented reporting causes the most friction."
  },
  {
    id: '01',
    question: 'Can I try Orbit before paying?',
    answer: 'Yes. Start with the free trial and connect your first data sources before committing to a paid plan.'
  }
];

export const Questions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white text-[#221C38]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Sidebar Content */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-[#6E55A0] mb-2">
              QUESTIONS
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              <span className="italic font-serif font-normal text-[#6E55A0]">Before</span> you bring Orbit into the picture
            </h2>
          </div>

          <div className="mt-16 lg:mt-0">
            <h3 className="text-2xl font-bold mb-2">Still have a question?</h3>
            <p className="text-slate-600 text-sm mb-6">
              Don't worry we're free for consultation
            </p>
            <button className="px-6 py-3 bg-[#63458A] hover:bg-[#523774] text-white rounded-xl text-sm font-medium transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Accordion List */}
        <div className="lg:col-span-7 space-y-3">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#F6F5F9] rounded-2xl border border-slate-100/80 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-start gap-4 justify-between"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-bold text-slate-800 pt-0.5">
                      {item.id}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#221C38]">
                      {item.question}
                    </span>
                  </div>
                  <span className="text-slate-800 shrink-0 mt-0.5">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pl-12 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.answer}
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