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
            Build a Better Security Product.
          </h1>
          <p className="max-w-2xl text-pretty text-base text-body md:text-lg">
            We translate decades of experience leading security at scale—in threat detection, IR, and secure engineering—into a clear roadmap for your startup. Build the trusted, resilient product that customers want to buy.
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
              Latifolia Solutions was founded on a simple premise: building a great security product requires a deep understanding of what discerning customers truly need. Our experience comes from leading security engineering and response for the world's most demanding environments. We partner with you to apply those hard-won lessons, aligning your product, strategy, and engineering with the principles of trust, resilience, and efficacy that win any market.
            </p>
          </div>
          <div className="card p-6 md:p-8">
            <h3 className="text-xl font-semibold text-heading">What to Expect</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-body">
              <li>An expert's view on security market needs.</li>
              <li>Product roadmap guidance that aligns with customer value.</li>
              <li>Actionable engineering mentorship to build a trusted, market-ready product.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="founder" className="container py-12">
        <div className="card p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-heading">The Founder's Perspective</h2>
          <p className="mt-4 text-body">
            "I've seen firsthand what it takes to build and defend systems at the highest level. The lessons about building trust, ensuring resilience, and focusing on what truly matters are universal. My goal is to bring that clarity to your startup, helping you build the right product from day one."
          </p>
        </div>
      </section>

      <section id="services" className="container py-16 md:py-20">
        <h2 className="text-center text-2xl font-semibold text-heading">Our Advisory Framework</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="card p-6">
            <Image src="/assets/img/digital-mtn-laurel.jpg" alt="Resilient & Scalable Architecture" width={600} height={400} className="rounded mb-4" />
            <h3 className="text-lg font-semibold text-heading">Resilient & Scalable Architecture</h3>
            <p className="mt-2 text-body">We help you design the defensible and reliable architecture that sophisticated customers demand. Applying principles proven at scale, we help you move beyond MVP and build for long-term trust.</p>
          </article>
          <article className="card p-6">
            <Image src="/assets/img/cybersecurity-mtn-laurel.jpg" alt="Product & Market Strategy" width={600} height={400} className="rounded mb-4" />
            <h3 className="text-lg font-semibold text-heading">Product & Market Strategy</h3>
            <p className="mt-2 text-body">Leverage our deep knowledge of threat detection, IR, and security monitoring to focus your roadmap. We help you build the features that solve real, urgent problems for your target customers.</p>
          </article>
          <article className="card p-6">
            <Image src="/assets/img/innovation-mtn-laurel.jpg" alt="GTM & Technical Messaging" width={600} height={400} className="rounded mb-4" />
            <h3 className="text-lg font-semibold text-heading">GTM & Technical Messaging</h3>
            <p className="mt-2 text-body">We help you craft the narrative and technical diligence that resonates with discerning buyers, from technical managers to CISOs. Learn to speak their language and accelerate your sales cycle.</p>
          </article>
        </div>
      </section>

      <section id="expertise" className="container py-16 md:py-20">
        <h2 className="text-center text-2xl font-semibold text-heading">Our Expertise In Action</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-heading">Threat Detection & IR</h3>
            <p className="mt-2 text-body">Shaping products that fit seamlessly into modern security workflows.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-heading">Security Monitoring</h3>
            <p className="mt-2 text-body">Advising on the data and integrations that matter most to operations teams.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-heading">Security Engineering</h3>
            <p className="mt-2 text-body">Mentoring your team to build secure, scalable systems that earn customer trust.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-heading">Secure SDLC</h3>
            <p className="mt-2 text-body">Implementing practical, efficient processes that serve as a competitive advantage.</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="container py-16 md:py-20">
        <h2 className="text-center text-2xl font-semibold text-heading">Testimonials</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <figure className="card p-6">
            <blockquote className="text-body">"Latifolia's advice is grounded in a deep understanding of the challenges we face. They guide startups to build products that are not only innovative but also secure and operable at scale. Their involvement is a strong positive signal for us."</blockquote>
            <figcaption className="mt-4 text-sm text-heading">— Jessica M., CISO, Fortune 500 Financial Services</figcaption>
          </figure>
          <figure className="card p-6">
            <blockquote className="text-body">"We were struggling to move upmarket. Latifolia helped us understand the unwritten requirements of larger customers, from security features to compliance. Their guidance was instrumental in helping us close our first six-figure deal and unlock a new phase of growth."</blockquote>
            <figcaption className="mt-4 text-sm text-heading">— David C., CEO, Series B Security Platform</figcaption>
          </figure>
          <figure className="card p-6">
            <blockquote className="text-body">"The architectural review was a game-changer. We weren't just told what to fix, but why it mattered for building long-term customer trust. Latifolia saved us from making foundational mistakes that would have cost us dearly down the road."</blockquote>
            <figcaption className="mt-4 text-sm text-heading">— Anya S., Co-Founder & CTO, Cloud Security Startup</figcaption>
          </figure>
          <figure className="card p-6">
            <blockquote className="text-body">"My team needed to level-up our security practices without slowing down. Latifolia provided practical, no-nonsense mentorship that felt like it came from a seasoned member of our own team. We're now building a better, more secure product, faster than before."</blockquote>
            <figcaption className="mt-4 text-sm text-heading">— Ben C., VP of Engineering, B2B SaaS Platform</figcaption>
          </figure>
          <figure className="card p-6">
            <blockquote className="text-body">"In the early days, focus is everything. Latifolia helped us distill our vision into a core set of features that solved a critical problem exceptionally well. That clarity was key to securing our seed funding and landing our first ten customers."</blockquote>
            <figcaption className="mt-4 text-sm text-heading">— Maria F., Founder, Security Analytics Company</figcaption>
          </figure>
          <figure className="card p-6">
            <blockquote className="text-body">"I recommend Latifolia to my portfolio companies. They provide the seasoned, real-world perspective that first-time founders often lack. They don't just advise on tech; they advise on building a resilient business."</blockquote>
            <figcaption className="mt-4 text-sm text-heading">— Marcus T., Technical Advisor & Board Member</figcaption>
          </figure>
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

