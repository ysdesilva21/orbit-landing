import React from "react";

const reviewsData = [
  {
    name: "Maya Chen",
    role: "VP Growth · Acme",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    title: "It's really convenient!",
    content:
      '"Orbit replaced the weekly reporting process we had built around spreadsheets and Slack. Our team can finally see what\'s happening without waiting for an analyst."',
  },
  {
    name: "Daniel Ross",
    role: "COO · Northstar",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    title: "It's super easy!",
    content:
      '"The biggest change wasn\'t another dashboard. It was having one reliable view of the business that everyone could actually trust."',
  },
  {
    name: "Sarah Kim",
    role: "VP Growth · Acme",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300",
    title: "It's really fast!",
    content:
      '"We went from spending hours reconciling metrics to having the answer in front of us."',
  },
];

export const Reviews: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mb-16 max-w-3xl">
          <p className="text-eyebrow mb-4">
            Reviews
          </p>

          <h2 className="text-heading mb-4 max-w-3xl">
            Trusted by teams that need one source of{" "}
            <span className="font-serif-italic text-[var(--secondary)]">
              truth
            </span>
          </h2>

          <p className="text-body">
            Finally, everyone is looking at the same numbers.
          </p>
        </div>

        {/* REVIEW CARDS */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviewsData.map((item, idx) => (
            <div
              key={idx}
              className="relative pt-16"
            >
              {/* PROFILE IMAGE */}
              <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
                <div
                  className="
                    rounded-full
                    border-2
                    border-[var(--secondary)]
                    bg-white
                    p-1
                    shadow-md
                  "
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="
                      h-24
                      w-24
                      rounded-full
                      object-cover
                    "
                  />
                </div>
              </div>

              {/* CARD */}
              <div
                className="
                  card
                  flex
                  h-full
                  flex-col
                  justify-between
                  p-8
                  pt-16
                  text-left
                "
              >
                <div>

                  {/* STAR RATING */}
                  <div className="mb-6 flex justify-center gap-1 text-[var(--secondary)]">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* REVIEW TITLE */}
                  <h3 className="text-subheading mb-4 text-[var(--accent)]">
                    {item.title}
                  </h3>

                  {/* REVIEW CONTENT */}
                  <p className="text-body mb-8">
                    {item.content}
                  </p>
                </div>

                {/* REVIEWER */}
                <div>
                  <div className="text-third-heading text-[var(--accent)]">
                    {item.name}
                  </div>

                  <div className="text-small text-[var(--accent)]">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER METRICS */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            border-t
            border-[color-mix(in_srgb,#C6D0D9_30%,transparent)]
            pt-8
            text-center
            md:grid-cols-3
          "
        >
          <div>
            <div className="text-metric text-[var(--accent)]">
              14,000+
            </div>

            <div className="text-small mt-1 text-[var(--accent)]">
              teams
            </div>
          </div>

          <div>
            <div className="text-metric text-[var(--accent)]">
              45M+
            </div>

            <div className="text-small mt-1 text-[var(--accent)]">
              data points analyzed
            </div>
          </div>

          <div>
            <div className="text-metric text-[var(--accent)]">
              99.9%
            </div>

            <div className="text-small mt-1 text-[var(--accent)]">
              uptime
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};