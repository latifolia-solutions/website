'use client'

const trustSignals = [
  'Decades of enterprise security experience',
  'Trusted by security startups at every stage',
  'Focused, actionable advisory — not just strategy',
]

export function Contact() {
  return (
    <section id="contact" className="section-cream py-24 md:py-32">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left column: compelling text */}
          <div data-animate>
            <p className="eyebrow" style={{ color: 'var(--forest-mid)' }}>
              Work With Us
            </p>
            <div className="divider" />
            <h2
              className="font-display text-4xl font-light tracking-wide md:text-5xl"
              style={{ color: 'var(--forest-dark)' }}
            >
              Let&apos;s Build Something Great
            </h2>
            <p className="mt-6 text-base leading-relaxed" style={{ color: 'var(--text-body)' }}>
              Ready to elevate your cybersecurity product development? We work with a select group
              of security startups at any given time. Let&apos;s start a conversation.
            </p>

            {/* Trust signals */}
            <ul className="mt-10 space-y-4">
              {trustSignals.map((signal, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 shrink-0 text-sm font-medium"
                    style={{ color: 'var(--teal-deep)' }}
                    aria-hidden="true"
                  >
                    —
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                    {signal}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: form */}
          <div data-animate>
            <form
              action="https://formspree.io/f/myzgdrng"
              method="POST"
              className="flex flex-col gap-8"
            >
              {/* Email field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="eyebrow"
                  style={{ color: 'var(--forest)', opacity: 1 }}
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="border-b bg-transparent py-3 text-base outline-none transition-colors placeholder:opacity-40 focus:outline-none"
                  style={{
                    borderColor: 'var(--cream-dark)',
                    color: 'var(--text-primary)',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--teal-deep)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cream-dark)'
                  }}
                />
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="eyebrow"
                  style={{ color: 'var(--forest)', opacity: 1 }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="What are you building?"
                  className="min-h-36 resize-none border-b bg-transparent py-3 text-base outline-none transition-colors placeholder:opacity-40 focus:outline-none"
                  style={{
                    borderColor: 'var(--cream-dark)',
                    color: 'var(--text-primary)',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--teal-deep)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cream-dark)'
                  }}
                />
              </div>

              <button type="submit" className="btn-primary w-full text-center">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
