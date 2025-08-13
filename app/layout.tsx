import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://latifolia.solutions'),
  title: {
    default: 'Latifolia Solutions – Cybersecurity & AI Security Product Consulting',
    template: '%s | Latifolia Solutions'
  },
  description: 'Expert consulting for cybersecurity and AI security startups: product strategy, architecture, threat modeling, and GTM for security products.',
  applicationName: 'Latifolia Solutions',
  authors: [{ name: 'Latifolia Solutions, LLC' }],
  keywords: [
    'cybersecurity product development',
    'AI security',
    'product strategy',
    'threat modeling',
    'secure software architecture',
    'security startup consulting'
  ],
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/assets/img/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/img/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/img/favicon.ico', rel: 'icon' },
    ],
    apple: '/assets/img/apple-touch-icon.png'
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Latifolia Solutions',
    title: 'Cybersecurity Product Development Consulting | Latifolia Solutions',
    description: 'We help early-stage security and AI security startups design, build, and launch great products.',
    images: ['/assets/img/digital-mtn-laurel.jpg'],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Latifolia Solutions – Cybersecurity & AI Security Product Consulting',
    description: 'Product strategy, architecture, and GTM for security startups.',
    images: ['/assets/img/digital-mtn-laurel.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1
    }
  }
}

export const viewport: Viewport = {
  themeColor: '#2b4f3d'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Latifolia Solutions',
              url: 'https://latifolia.solutions/',
              logo: 'https://latifolia.solutions/assets/img/android-chrome-512x512.png',
              sameAs: [
                'https://www.linkedin.com/company/latifolia-solutions/'
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Latifolia Solutions',
              url: 'https://latifolia.solutions/',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://latifolia.solutions/?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  )
}

