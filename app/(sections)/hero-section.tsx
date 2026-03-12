'use client'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: 'var(--forest-dark)',
        clipPath: 'polygon(0 0, 100% 0, 100% 93%, 0 100%)',
        paddingTop: '8rem',   /* pt-32 */
        paddingBottom: '6rem', /* pb-24 */
      }}
      aria-label="Hero"
    >
      {/* Subtle dot-grid background texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(168,218,220,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0',
        }}
      />

      {/* Diagonal accent line — purely decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-0"
        style={{
          top: '15%',
          right: '44%',
          width: '1px',
          height: '60%',
          background:
            'linear-gradient(to bottom, transparent, rgba(168,218,220,0.18) 40%, rgba(168,218,220,0.08) 80%, transparent)',
          transform: 'rotate(12deg)',
        }}
      />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* ── Left: text content ── */}
          <div className="flex flex-col">
            {/* Eyebrow + divider */}
            <div data-animate>
              <p
                className="eyebrow"
                style={{ color: 'var(--teal)', opacity: 1 }}
              >
                Cybersecurity &amp; AI Security Advisory
              </p>
              <div className="divider" style={{ marginTop: '1rem' }} />
            </div>

            {/* H1 */}
            <h1
              data-animate
              className="font-display font-light leading-tight"
              style={{
                color: 'var(--cream)',
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                letterSpacing: '-0.01em',
                animationDelay: '0.1s',
              }}
            >
              Build a{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  color: 'var(--teal-glow)',
                }}
              >
                Better
              </em>{' '}
              Security Product.
            </h1>

            {/* Subheading */}
            <p
              data-animate
              className="mt-6 text-base leading-relaxed md:text-lg"
              style={{
                color: 'var(--cream)',
                opacity: 0.72,
                maxWidth: '44ch',
                animationDelay: '0.2s',
              }}
            >
              We translate decades of experience leading security at
              scale—in threat detection, IR, and secure engineering—into a
              clear roadmap for your startup. Build the trusted, resilient
              product that customers want to buy.
            </p>

            {/* CTAs */}
            <div
              data-animate
              className="mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: '0.3s' }}
            >
              <Link href="#services" className="btn-primary">
                Explore Our Services
              </Link>
              <Link href="#contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* ── Right: botanical image panel ── */}
          <div
            className="relative flex justify-center md:justify-end"
            aria-hidden
          >
            {/* Teal border-frame offset effect */}
            <div
              className="absolute"
              style={{
                top: '1rem',
                right: '-0.5rem',
                bottom: '-1rem',
                left: '1rem',
                border: '1.5px solid rgba(168,218,220,0.35)',
                borderRadius: '2px',
                zIndex: 0,
              }}
            />

            {/* Image */}
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: '2px',
                zIndex: 1,
                /* Slight rightward bleed for dynamism */
                transform: 'translateX(1.25rem)',
                boxShadow:
                  '0 24px 64px rgba(0,0,0,0.35), 0 4px 12px rgba(0,0,0,0.2)',
              }}
            >
              <Image
                src="/assets/img/mtn-laurel.jpg"
                alt="Mountain laurel botanical — brand mark of Latifolia Solutions"
                width={500}
                height={650}
                className="object-cover"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  maxHeight: '650px',
                  objectPosition: 'center top',
                }}
                priority
              />

              {/* Subtle dark-to-transparent vignette on left edge */}
              <div
                className="absolute inset-y-0 left-0 w-16 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to right, rgba(30,58,43,0.55), transparent)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
