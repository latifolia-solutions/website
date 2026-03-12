'use client'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="section-forest pt-12 pb-8">
      <div className="container">
        {/* Logo row */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/img/mtn-laurel.jpg"
            alt="Latifolia Solutions"
            width={28}
            height={28}
            className="rounded object-cover"
          />
          <span
            className="text-sm tracking-wide"
            style={{ color: 'var(--cream)', fontFamily: "'DM Sans', sans-serif" }}
          >
            Latifolia Solutions
          </span>
        </div>

        {/* Thin teal divider */}
        <div
          className="my-6 h-px w-full"
          style={{ backgroundColor: 'var(--teal)', opacity: 0.2 }}
          aria-hidden="true"
        />

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <p
            className="text-xs"
            style={{
              color: 'rgba(247, 240, 225, 0.6)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            &copy; {new Date().getFullYear()} Latifolia Solutions, LLC.
          </p>
          <Link
            href="https://www.linkedin.com/company/latifolia-solutions/"
            className="eyebrow transition-colors hover:opacity-100"
            style={{ color: 'rgba(247, 240, 225, 0.6)' }}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--teal)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(247, 240, 225, 0.6)'
            }}
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}
