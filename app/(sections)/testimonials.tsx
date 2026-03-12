'use client'

const testimonials = [
  {
    quote:
      "Latifolia's advice is grounded in a deep understanding of the challenges we face. They guide startups to build products that are not only innovative but also secure and operable at scale. Their involvement is a strong positive signal for us.",
    attribution: '— Jessica M., CISO, Fortune 500 Financial Services',
  },
  {
    quote:
      "We were struggling to move upmarket. Latifolia helped us understand the unwritten requirements of larger customers, from security features to compliance. Their guidance was instrumental in helping us close our first six-figure deal and unlock a new phase of growth.",
    attribution: '— David C., CEO, Series B Security Platform',
  },
  {
    quote:
      "The architectural review was a game-changer. We weren't just told what to fix, but why it mattered for building long-term customer trust. Latifolia saved us from making foundational mistakes that would have cost us dearly down the road.",
    attribution: '— Anya S., Co-Founder & CTO, Cloud Security Startup',
  },
  {
    quote:
      "My team needed to level-up our security practices without slowing down. Latifolia provided practical, no-nonsense mentorship that felt like it came from a seasoned member of our own team. We're now building a better, more secure product, faster than before.",
    attribution: '— Ben C., VP of Engineering, B2B SaaS Platform',
  },
  {
    quote:
      "In the early days, focus is everything. Latifolia helped us distill our vision into a core set of features that solved a critical problem exceptionally well. That clarity was key to securing our seed funding and landing our first ten customers.",
    attribution: '— Maria F., Founder, Security Analytics Company',
  },
  {
    quote:
      "I recommend Latifolia to my portfolio companies. They provide the seasoned, real-world perspective that first-time founders often lack. They don't just advise on tech; they advise on building a resilient business.",
    attribution: '— Marcus T., Technical Advisor & Board Member',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="section-forest py-24 md:py-32">
      <div className="container">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-center text-center" data-animate>
          <p className="eyebrow" style={{ color: 'var(--teal-glow)' }}>
            Client Voices
          </p>
          <h2
            className="font-display mt-4 text-4xl font-light tracking-wide md:text-5xl"
            style={{ color: 'var(--cream)' }}
          >
            What Our Clients Say
          </h2>
          <div className="divider mx-auto mt-6" />
        </div>

        {/* Testimonial grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              data-animate
              className="rounded-xl p-7 md:p-8"
              style={{ backgroundColor: 'rgba(61, 107, 82, 0.18)' }}
            >
              {/* Decorative opening quote mark */}
              <span
                aria-hidden="true"
                className="font-display block text-5xl leading-none"
                style={{ color: 'var(--teal)', marginBottom: '0.5rem' }}
              >
                &ldquo;
              </span>
              <blockquote
                className="font-display text-lg italic leading-relaxed md:text-xl"
                style={{ color: 'rgba(247, 240, 225, 0.9)' }}
              >
                {t.quote}
              </blockquote>
              <figcaption
                className="eyebrow mt-4"
                style={{ color: 'var(--teal-glow)', opacity: 1 }}
              >
                {t.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
