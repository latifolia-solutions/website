'use client'
import { useEffect } from 'react'

export function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])

  return <>{children}</>
}
