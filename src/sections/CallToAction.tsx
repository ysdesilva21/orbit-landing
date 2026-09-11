import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      
      {/* Subtle Background Accents */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/4
          top-1/2
          h-80
          w-80
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#5C3E94]/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-1/4
          top-1/2
          h-80
          w-80
          translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#F25912]/8
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* CTA Card */}
        <div
          className="
            relative
            overflow-hidden
            main-card card
            p-8
            md:p-14
          "
        >

          {/* Subtle Grid */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-40
              [background-image:linear-gradient(to_right,#5C3E9410_1px,transparent_1px),linear-gradient(to_bottom,#5C3E9410_1px,transparent_1px)]
              [background-size:24px_24px]
            "
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">

            {/* Text */}
            <div className="max-w-2xl text-center lg:text-left">

              <div className="mb-5 inline-flex items-center gap-2">
                <Sparkles
                  className="h-3.5 w-3.5 text-[var(--accent)]"
                  strokeWidth={2}
                />

                <span className="text-eyebrow">
                  One source
                </span>
              </div>

              <h2 className="text-heading max-w-2xl">
                Stop piecing the business{' '}
                <span className="font-serif-italic text-[var(--accent)]">
                  together.
                </span>
              </h2>

              <p className="text-body mt-6 max-w-xl">
                Bring your revenue, customers, acquisition, and product data
                into one place — and turn it into decisions you can act on.
              </p>

            </div>

            {/* Actions */}
            <div className="flex w-full shrink-0 flex-col items-center gap-3 sm:w-auto sm:flex-row">

              <button
                type="button"
                className="
                  primary-button
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  px-6
                  py-3
                  text-sm
                  font-medium
                  shadow-sm
                  hover:-translate-y-0.5
                  hover:shadow-md
                  active:translate-y-0
                  sm:w-auto
                "
              >
                <span>Start Analyzing</span>

                <ArrowRight
                  className="h-4 w-4"
                  strokeWidth={2}
                />
              </button>

              <button
                type="button"
                className="
                  secondary-button
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  px-6
                  py-3
                  text-sm
                  font-medium
                  sm:w-auto
                "
              >
                View Problem
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};