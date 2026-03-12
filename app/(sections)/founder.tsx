export function Founder() {
  return (
    <section id="founder" className="section-forest relative overflow-hidden py-24 md:py-32">

      {/* Subtle radial depth gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, var(--forest-mid) 0%, transparent 70%)',
          opacity: 0.25,
        }}
      />

      <div className="container" data-animate>
        <div className="mx-auto max-w-4xl text-center">

          {/* Decorative large opening quote mark */}
          <div
            className="pointer-events-none select-none font-display text-9xl font-light leading-none"
            style={{ color: 'var(--forest-mid)', lineHeight: 1, marginBottom: '-2rem' }}
            aria-hidden
          >
            &ldquo;
          </div>

          {/* Pull-quote */}
          <blockquote
            className="font-display text-2xl font-light italic leading-relaxed md:text-3xl lg:text-4xl"
            style={{ color: 'var(--cream)' }}
          >
            I&rsquo;ve seen firsthand what it takes to build and defend systems at the
            highest level. The lessons about building trust, ensuring resilience, and
            focusing on what truly matters are universal. My goal is to bring that
            clarity to your startup, helping you build the right product from day one.
          </blockquote>

          {/* Centered teal divider */}
          <div
            className="mx-auto mt-10"
            style={{
              width: '3rem',
              height: '1.5px',
              background: 'var(--teal)',
              opacity: 0.6,
            }}
          />

          {/* Attribution */}
          <p
            className="eyebrow mt-6"
            style={{ color: 'var(--teal-glow)', opacity: 1 }}
          >
            &mdash; The Founder
          </p>

        </div>
      </div>
    </section>
  )
}
