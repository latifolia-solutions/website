'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-sm' : ''
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(30, 58, 43, 0.95)' : 'transparent' }}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Latifolia Solutions home">
          <div
            className="relative flex-shrink-0 rounded-full overflow-hidden"
            style={{
              width: 32,
              height: 32,
              boxShadow: '0 0 0 2px var(--teal)',
            }}
          >
            <Image
              src="/assets/img/mtn-laurel.jpg"
              alt="Latifolia Solutions"
              width={32}
              height={32}
              className="object-cover w-full h-full"
            />
          </div>
          <span
            className="text-sm tracking-wide font-medium select-none"
            style={{ color: 'var(--cream)', fontFamily: "'DM Sans', sans-serif" }}
          >
            Latifolia Solutions
          </span>
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-8" role="list">
          {(['About', 'Services', 'Contact'] as const).map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase()}`}
                className="eyebrow transition-colors duration-200"
                style={{
                  color: 'var(--cream)',
                  opacity: 0.75,
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--teal)'
                  ;(e.currentTarget as HTMLAnchorElement).style.opacity = '1'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--cream)'
                  ;(e.currentTarget as HTMLAnchorElement).style.opacity = '0.75'
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
