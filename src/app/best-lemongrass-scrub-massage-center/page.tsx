import { Metadata } from 'next'
import LemongrassScrubPage from '@/components/LemongrassScrubPage'
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
      "name": "Lemongrass Body Scrub",
      "item": "https://www.riverdayspa.com/best-lemongrass-scrub-massage-center"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Best Lemongrass Scrub Massage Center- Discover Ayurvedic Bliss',
  description: 'Experience ultimate relaxation with the Best Lemongrass Scrub Massage Center, offering the best spa rejuvenation experience.',
  keywords: 'Lemongrass Scrub Massage In Chennai, Lemongrass Scrub Massage Center Bangalore, lemongrass body scrub, ayurvedic spa treatment',
  openGraph: {
    title: 'Best Lemongrass Scrub Massage Center- Discover Ayurvedic Bliss',
    description: 'Experience ultimate relaxation with the Best Lemongrass Scrub Massage Center, offering the best spa rejuvenation experience.',
    images: [
      {
        url: 'https://www.riverdayspa.com/asset/best-lemongrass-body-scrub-massage.jpg',
        width: 1200,
        height: 630,
        alt: 'Lemongrass Body Scrub Massage at River Salon and Day Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Lemongrass Scrub Massage Center- Discover Ayurvedic Bliss',
    description: 'Experience ultimate relaxation with the Best Lemongrass Scrub Massage Center, offering the best spa rejuvenation experience.',
    images: ['https://www.riverdayspa.com/asset/best-lemongrass-body-scrub-massage.jpg'],
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-lemongrass-scrub-massage-center'
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
      <LemongrassScrubPage />
    </>
  )
}