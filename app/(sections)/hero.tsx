'use client'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30" aria-hidden>
        <Image src="/assets/img/digital-mtn-laurel.jpg" alt="" fill className="object-cover" priority />
      </div>
    </section>
  )
}

