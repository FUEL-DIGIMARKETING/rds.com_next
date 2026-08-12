import { Metadata } from 'next'
import FruitScrubPage from '@/components/FruitScrubPage'
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
      "name": "Fruit Body Scrub",
      "item": "https://www.riverdayspa.com/fruit-body-scrub-in-chennai"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Fruit Body Scrub in Chennai',
  description: 'Discover the fruit body scrub in Chennai. Rejuvenate your skin and glow naturally with our customized treatments.',
  keywords: 'Fruit Scrub Massage Center in Coimbatore, Best Fruit Scrub Massage in Bangalore, fruit body scrub, natural skin treatment',
  openGraph: {
    title: 'Fruit Body Scrub in Chennai',
    description: 'Discover the fruit body scrub in Chennai. Rejuvenate your skin and glow naturally with our customized treatments.',
    images: [
      {
        url: 'https://www.riverdayspa.com/asset/best-fruit-body-scrub-massage.jpeg',
        width: 1200,
        height: 630,
        alt: 'Fruit Body Scrub Massage at River Salon and Day Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fruit Body Scrub in Chennai | River Salon and Day Spa',
    description: 'Discover the fruit body scrub in Chennai. Rejuvenate your skin and glow naturally with our customized treatments.',
    images: ['https://www.riverdayspa.com/asset/best-fruit-body-scrub-massage.jpeg'],
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/fruit-body-scrub-in-chennai'
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
      <FruitScrubPage />
    </>
  )
}