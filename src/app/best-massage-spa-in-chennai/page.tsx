import AboutPage from '@/components/AboutPage'
import { Metadata } from 'next'

const structuredData = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "About Us",
      "item": "https://www.riverdayspa.com/best-massage-spa-in-chennai/"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "Home",
      "item": "https://www.riverdayspa.com/"
    }]
  }

export const metadata: Metadata = {
  title: 'Best Massage Spa in Chennai - Riverdayspa™ - Book Now!',
  description: 'Discover relaxation at the best Massage spa in Chennai. Indulge in tranquillity and rejuvenate your senses. Book your slot now! ',
  keywords: 'best massage spa Chennai, luxury spa, wellness center, ayurvedic spa, massage therapy Chennai, River Day Spa, spa treatments',
  openGraph: {
    title: 'Best Massage Spa in Chennai - Riverdayspa™ - Book Now!',
    description: 'Discover relaxation at the best Massage spa in Chennai. Indulge in tranquillity and rejuvenate your senses. Book your slot now! ',
    images: [{ url: 'https://www.riverdayspa.com/asset/best-luxury-spa-chennai-river-day-spa.webp' }],
    url: 'https://www.riverdayspa.com/best-massage-spa-in-chennai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Massage Spa in Chennai - Riverdayspa™ - Book Now!',
    description: 'Discover relaxation at the best Massage spa in Chennai. Indulge in tranquillity and rejuvenate your senses. Book your slot now!',
    images: ['https://www.riverdayspa.com/asset/best-luxury-spa-chennai-river-day-spa.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-massage-spa-in-chennai'
  }
}

export default function BestMassageSpaChennai() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <AboutPage />
    </>
  )
}