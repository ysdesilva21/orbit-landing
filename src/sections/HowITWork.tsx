import React from "react";

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <span className="text-eyebrow">How It Works</span>

          <h2 className="text-heading max-w-4xl">
            From scattered data to a{" "}
            <span className="font-serif-italic text-[var(--secondary)]">
              clear decision
            </span>
            , in three steps.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pt-4">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[29px] left-0 right-0 h-px bg-[color-mix(in_srgb,var(--primary)_12%,transparent)]">
            {/* Active Segment */}
            <div className="w-1/3 h-full bg-[var(--accent)]" />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 relative z-10">
            {/* Step 01 */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[var(--accent)] flex items-center justify-center text-small text-[var(--accent)] shadow-sm">
                  01
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-small text-[var(--accent)]">
                  Connect
                </span>

                <h3 className="text-subheading">
                  Link your sources in minutes.
                </h3>

                <p className="text-body">
                  Revenue in your billing tool. Usage in your product
                  database. Pipeline in the CRM. Nobody has the full picture,
                  so every answer starts with a Slack thread.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[color-mix(in_srgb,var(--accent)_5%,transparent)] border border-[color-mix(in_srgb,var(--primary)_15%,transparent)] flex items-center justify-center text-small text-[var(--primary)]">
                  02
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-small text-[var(--accent)]">
                  Understand
                </span>

                <h3 className="text-subheading">
                  AI surfaces what matters.
                </h3>

                <p className="text-body">
                  Orbit continuously analyzes the combined data and highlights
                  the trends, risks, and opportunities worth your attention
                  today.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[color-mix(in_srgb,var(--accent)_5%,transparent)] border border-[color-mix(in_srgb,var(--primary)_15%,transparent)] flex items-center justify-center text-small text-[var(--primary)]">
                  03
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-small text-[var(--secondary)]">
                  Act
                </span>

                <h3 className="text-subheading">
                  Move from insight to decision.
                </h3>

                <p className="text-body">
                  Share a finding, assign an owner, or trigger an alert to your
                  team, directly from the insight, with the supporting data
                  attached.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;