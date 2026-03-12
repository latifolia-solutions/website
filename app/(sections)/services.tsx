'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const services = [
  {
    image: '/assets/img/digital-mtn-laurel.jpg',
    alt: 'Resilient & Scalable Architecture',
    eyebrow: '01 — Architecture',
    heading: 'Resilient & Scalable Architecture',
    body: 'We help you design the defensible and reliable architecture that sophisticated customers demand. Applying principles proven at scale, we help you move beyond MVP and build for long-term trust.',
    imageLeft: true,
    textBg: 'var(--forest-dark)',
    textColor: 'var(--cream)',
  },
  {
    image: '/assets/img/cybersecurity-mtn-laurel.jpg',
    alt: 'Product & Market Strategy',
    eyebrow: '02 — Strategy',
    heading: 'Product & Market Strategy',
    body: 'Leverage our deep knowledge of threat detection, IR, and security monitoring to focus your roadmap. We help you build the features that solve real, urgent problems for your target customers.',
    imageLeft: false,
    textBg: 'var(--cream)',
    textColor: 'var(--charcoal)',
  },
  {
    image: '/assets/img/innovation-mtn-laurel.jpg',
    alt: 'GTM & Technical Messaging',
    eyebrow: '03 — GTM',
    heading: 'GTM & Technical Messaging',
    body: 'We help you craft the narrative and technical diligence that resonates with discerning buyers, from technical managers to CISOs. Learn to speak their language and accelerate your sales cycle.',
    imageLeft: true,
    textBg: 'var(--forest-dark)',
    textColor: 'var(--cream)',
  },
]

function useScrollAnimate(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])
}

function ServiceRow({ service }: { service: (typeof services)[0] }) {
  const textRef = useRef<HTMLDivElement>(null)
  useScrollAnimate(textRef as React.RefObject<HTMLElement>)

  const imagePanel = (
    <div
      className="relative overflow-hidden"
      style={{ flex: '0 0 45%', minHeight: '480px' }}
    >
      <Image
        src={service.image}
        alt={service.alt}
        fill
        className="object-cover"
        sizes="45vw"
      />
    </div>
  )

  const textPanel = (
    <div
      ref={textRef}
      data-animate
      className="flex flex-col justify-center"
      style={{
        flex: '0 0 55%',
        minHeight: '480px',
        backgroundColor: service.textBg,
        color: service.textColor,
        padding: 'clamp(2.5rem, 5vw, 4rem)',
      }}
    >
      <p
        className="eyebrow"
        style={{ color: service.textColor, opacity: 0.55 }}
      >
        {service.eyebrow}
      </p>
      <h3
        className="font-display mt-4"
        style={{
          fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
          fontWeight: 400,
          lineHeight: 1.15,
          color: service.textColor,
        }}
      >
        {service.heading}
      </h3>
      <div
        className="divider"
        style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}
      />
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '1rem',
          lineHeight: 1.75,
          color: service.textColor,
          opacity: 0.82,
          maxWidth: '34rem',
        }}
      >
        {service.body}
      </p>
    </div>
  )

  return (
    <div className="flex flex-col md:flex-row">
      {service.imageLeft ? (
        <>
          {imagePanel}
          {textPanel}
        </>
      ) : (
        <>
          {textPanel}
          {imagePanel}
        </>
      )}
    </div>
  )
}

export function Services() {
  return (
    <section id="services">
      {/* Section header */}
      <div className="section-cream py-16">
        <div className="container text-center">
          <p className="eyebrow" style={{ color: 'var(--forest)' }}>
            Our Advisory Framework
          </p>
          <h2
            className="font-display mt-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: 'var(--charcoal)',
              lineHeight: 1.1,
            }}
          >
            How We Work With You
          </h2>
          <div className="divider" style={{ margin: '1.5rem auto 0' }} />
        </div>
      </div>

      {/* Editorial rows — full width, no container */}
      {services.map((service) => (
        <ServiceRow key={service.eyebrow} service={service} />
      ))}
    </section>
  )
}
