export function About() {
  return (
    <section id="about" className="section-cream py-24 md:py-32">
      <div className="container">
        <div className="grid items-start gap-12 md:gap-16 lg:grid-cols-[55fr_45fr]">

          {/* Left column: About Us prose */}
          <div data-animate>
            <p className="eyebrow" style={{ color: 'var(--forest)' }}>About</p>
            <div className="divider" />
            <h2
              className="font-display text-4xl font-light leading-tight md:text-5xl"
              style={{ color: 'var(--forest-dark)' }}
            >
              Founded on a Simple Premise
            </h2>
            <p
              className="mt-6 text-base leading-relaxed md:text-lg"
              style={{ color: 'var(--text-body)' }}
            >
              Latifolia Solutions was founded on a simple premise: building a great security
              product requires a deep understanding of what discerning customers truly need.
              Our experience comes from leading security engineering and response for the
              world&rsquo;s most demanding environments. We partner with you to apply those
              hard-won lessons, aligning your product, strategy, and engineering with the
              principles of trust, resilience, and efficacy that win any market.
            </p>
          </div>

          {/* Right column: What to Expect info card */}
          <div
            data-animate
            className="rounded-xl p-8 md:p-10"
            style={{ background: 'var(--forest-dark)', color: 'var(--cream)' }}
          >
            <p
              className="eyebrow"
              style={{ color: 'var(--teal)', opacity: 1 }}
            >
              What to Expect
            </p>
            <div className="divider-cream mt-4" />
            <ul className="mt-2 space-y-6">
              {[
                'An expert\u2019s view on security market needs.',
                'Product roadmap guidance that aligns with customer value.',
                'Actionable engineering mentorship to build a trusted, market-ready product.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span
                    className="mt-0.5 shrink-0 text-lg font-light leading-none"
                    style={{ color: 'var(--teal)', fontFamily: "'Cormorant Garamond', serif" }}
                    aria-hidden
                  >
                    —
                  </span>
                  <span
                    className="text-base leading-relaxed"
                    style={{ color: 'var(--cream-dark)' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
