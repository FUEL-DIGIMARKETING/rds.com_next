import { Metadata } from 'next'
import SeaSaltScrubPage from '@/components/SeaSaltScrubPage'
const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "body scrub massage",
      "item": "https://www.riverdayspa.com/best-body-scrub-massage-center"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Sea Salt Body Scrub",
      "item": "https://www.riverdayspa.com/best-sea-salt-scrub-massage"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Best Sea Salt Scrub Massage - Ocean Bliss Spa',
  description: 'Experience Ocean Bliss, the best sea salt scrub massage, for glowing skin and ultimate relaxation. Book now!',
  keywords: 'Sea Salt Scrub Massage Center, Sea Salt Scrub Massage Center Bangalore, sea salt body scrub, ocean spa treatment',
  openGraph: {
    title: 'Best Sea Salt Scrub Massage - Ocean Bliss Spa',
    description: 'Experience Ocean Bliss, the best sea salt scrub massage, for glowing skin and ultimate relaxation. Book now!',
    images: [
      {
        url: 'https://www.riverdayspa.com/asset/best-sea-salt-body-scrub-massage.jpg',
        width: 1200,
        height: 630,
        alt: 'Sea Salt Body Scrub Massage at River Salon and Day Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Sea Salt Scrub Massage - Ocean Bliss Spa',
    description: 'Experience Ocean Bliss, the best sea salt scrub massage, for glowing skin and ultimate relaxation. Book now!',
    images: ['https://www.riverdayspa.com/asset/best-sea-salt-body-scrub-massage.jpg'],
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-sea-salt-scrub-massage'
  }
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <SeaSaltScrubPage />
    </>
  )
}