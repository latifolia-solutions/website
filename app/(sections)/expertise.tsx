'use client'
import { useEffect, useRef } from 'react'

const expertiseItems = [
  {
    number: '01',
    title: 'Threat Detection & IR',
    description:
      'Shaping products that fit seamlessly into modern security workflows.',
  },
  {
    number: '02',
    title: 'Security Monitoring',
    description:
      'Advising on the data and integrations that matter most to operations teams.',
  },
  {
    number: '03',
    title: 'Security Engineering',
    description:
      'Mentoring your team to build secure, scalable systems that earn customer trust.',
  },
  {
    number: '04',
    title: 'Secure SDLC',
    description:
      'Implementing practical, efficient processes that serve as a competitive advantage.',
  },
]

function useScrollAnimateAll(refs: React.RefObject<HTMLElement | null>[]) {
  useEffect(() => {
    const observers = refs.map((ref, i) => {
      const el = ref.current
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Stagger each item
            setTimeout(() => el.classList.add('is-visible'), i * 100)
            observer.unobserve(el)
          }
        },
        { threshold: 0.1 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

function ExpertiseRow({
  item,
  isLast,
  animateRef,
}: {
  item: (typeof expertiseItems)[0]
  isLast: boolean
  animateRef: React.RefObject<HTMLDivElement>
}) {
  return (
    <>
      <div
        ref={animateRef}
        data-animate
        className="group flex items-start gap-8 py-8 cursor-default"
        style={{ transition: 'padding-left 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLDivElement).style.paddingLeft = '1rem'
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLDivElement).style.paddingLeft = '0'
        }}
      >
        {/* Large display number */}
        <div
          className="font-display flex-shrink-0 select-none"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 3rem)',
            fontWeight: 300,
            color: 'var(--teal-deep)',
            lineHeight: 1,
            fontVariantNumeric: 'tabular-nums',
            minWidth: '4rem',
            paddingTop: '0.1em',
          }}
          aria-hidden
        >
          {item.number}
        </div>

        {/* Title + description */}
        <div style={{ flex: 1 }}>
          <h3
            className="font-display"
            style={{
              fontSize: '1.25rem',
              fontWeight: 500,
              color: 'var(--charcoal)',
              lineHeight: 1.2,
              transition: 'color 0.2s',
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              marginTop: '0.5rem',
              lineHeight: 1.65,
              maxWidth: '36rem',
            }}
          >
            {item.description}
          </p>
        </div>
      </div>

      {/* Thin rule between items */}
      {!isLast && (
        <div
          style={{
            height: '1px',
            backgroundColor: 'var(--cream-dark)',
            borderRadius: '1px',
          }}
        />
      )}
    </>
  )
}

export function Expertise() {
  const ref0 = useRef<HTMLDivElement>(null)
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const ref3 = useRef<HTMLDivElement>(null)
  const rowRefs = [ref0, ref1, ref2, ref3]
  useScrollAnimateAll(rowRefs as unknown as React.RefObject<HTMLElement | null>[])

  return (
    <section id="expertise" className="section-cream py-24">
      <div className="container">
        {/* Section header */}
        <div className="mb-12">
          <p className="eyebrow" style={{ color: 'var(--forest)' }}>
            Expertise
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
            Our Expertise In Action
          </h2>
          <div className="divider" style={{ marginTop: '1.5rem', marginBottom: 0 }} />
        </div>

        {/* Expertise rows */}
        <div>
          {expertiseItems.map((item, i) => (
            <ExpertiseRow
              key={item.number}
              item={item}
              isLast={i === expertiseItems.length - 1}
              animateRef={rowRefs[i] as React.RefObject<HTMLDivElement>}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
