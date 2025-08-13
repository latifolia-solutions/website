import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      <nav className="sticky top-0 z-50 bg-primary text-contrast">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Image src="/assets/img/mtn-laurel.jpg" alt="Latifolia Solutions" width={40} height={40} className="rounded object-cover ring-2" />
            <span className="text-sm font-semibold tracking-wide">Latifolia Solutions</span>
          </div>
          <ul className="flex items-center gap-6 text-sm">
            <li><a href="#about" className="opacity-90 hover:opacity-100">About</a></li>
            <li><a href="#services" className="opacity-90 hover:opacity-100">Services</a></li>
            <li><a href="#contact" className="opacity-90 hover:opacity-100">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="relative bg-secondary">
        <div className="container flex flex-col items-center gap-6 py-16 text-center md:py-20">
          <Image src="/assets/img/mtn-laurel.jpg" alt="Latifolia Solutions" width={120} height={120} className="rounded-full object-cover border-4" style={{ borderColor: 'var(--highlight-color)' }} />
          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-heading md:text-5xl">
            Build standout security products—faster, safer.
          </h1>
          <p className="max-w-2xl text-pretty text-base text-body md:text-lg">
            We partner with founders and product leaders to design, build, and launch compelling cybersecurity products.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a href="#services" className="btn-primary rounded-md px-5 py-3 text-sm font-medium shadow">Explore Our Services</a>
          </div>
        </div>
      </header>

      <section id="about" className="container py-16 md:py-20">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="card p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-heading">About Us</h2>
            <p className="mt-4 text-body">
              At Latifolia Solutions, we specialize in guiding security startups and established companies through product strategy and development. Our expertise spans cybersecurity product portfolios, innovative service offerings, and cutting-edge security research.
            </p>
          </div>
          <div className="card p-6 md:p-8">
            <h3 className="text-xl font-semibold text-heading">What to Expect</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-body">
              <li>Hands-on partnership from discovery to launch</li>
              <li>Security-first product design and technical diligence</li>
              <li>Investor-ready roadmaps and launch narratives</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="container py-16 md:py-20">
        <h2 className="text-center text-2xl font-semibold text-heading">Our Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="card p-6">
            <Image src="/assets/img/digital-mtn-laurel.jpg" alt="Technical Design Solutions" width={600} height={400} className="rounded mb-4" />
            <h3 className="text-lg font-semibold text-heading">Technical Design</h3>
            <p className="mt-2 text-body">Architecture reviews, system designs, and reference implementations that balance speed with security.</p>
          </article>
          <article className="card p-6">
            <Image src="/assets/img/cybersecurity-mtn-laurel.jpg" alt="Comprehensive Cybersecurity Solutions" width={600} height={400} className="rounded mb-4" />
            <h3 className="text-lg font-semibold text-heading">Cybersecurity Solutions</h3>
            <p className="mt-2 text-body">Threat models, secure SDLC, privacy and compliance readiness, and enterprise-grade hardening.</p>
          </article>
          <article className="card p-6">
            <Image src="/assets/img/innovation-mtn-laurel.jpg" alt="Strategic Innovation Advisory Services" width={600} height={400} className="rounded mb-4" />
            <h3 className="text-lg font-semibold text-heading">Innovation Advisory</h3>
            <p className="mt-2 text-body">Product-market fit validation, AI/ML risk and safety guidance, and roadmap development.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="container py-16 md:py-20">
        <div className="card p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-heading">Contact Us</h2>
          <p className="mt-2 text-body">Ready to elevate your cybersecurity product development? Let's start a conversation.</p>
          <form className="mt-6 grid gap-4" action="https://formspree.io/f/myzgdrng" method="POST">
            <label className="text-sm text-heading" htmlFor="email">Your email</label>
            <input id="email" name="email" type="email" required className="rounded-md border border-gray-300 bg-white px-3 py-2 text-body placeholder-slate-400 outline-none focus:ring-2" placeholder="you@company.com" />
            <label className="text-sm text-heading" htmlFor="message">Message</label>
            <textarea id="message" name="message" required className="min-h-32 rounded-md border border-gray-300 bg-white px-3 py-2 text-body placeholder-slate-400 outline-none focus:ring-2" placeholder="What are you building?"></textarea>
            <button type="submit" className="mt-2 inline-flex w-fit items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="bg-primary py-8 text-contrast">
        <div className="container flex items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} Latifolia Solutions, LLC. All rights reserved.</p>
          <Link href="https://www.linkedin.com/company/latifolia-solutions/" className="opacity-90 hover:opacity-100" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
        </div>
      </footer>
    </main>
  )
}

