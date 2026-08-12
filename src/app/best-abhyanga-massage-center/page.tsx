import { Metadata } from 'next'
import AbhyangaMassagePage from '@/components/AbhyangaMassagePage'
const structuredData = {
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Massage",
    "item": "https://www.riverdayspa.com/best-body-massage-center"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "Abhyanga Massage",
    "item": "https://www.riverdayspa.com/best-abhyanga-massage-center"  
  }]
}
export const metadata: Metadata = {
  title: 'Best Abhyanga Massage Center Offers Ultimate Renewal',
  description: 'Discover profound rejuvenation with Best Abhyanga Massage Center. Enhance well-being and relaxation at our premier center.',
  keywords: 'Best Abhyanga Massage Center Chennai, Best Abhyanga Massage Spa Chennai',
  openGraph: {
    title: 'Best Abhyanga Massage Center Offers Ultimate Renewal',
    description: 'Discover profound rejuvenation with Best Abhyanga Massage Center. Enhance well-being and relaxation at our premier center.',
    url: 'https://www.riverdayspa.com/best-abhyanga-massage-center',
    siteName: 'River Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/assets/massage/best-ayurvedic-abhyanga-full-body-massage-spa-center-chennai-river-day-spa.webp',
        width: 1200,
        height: 630,
        alt: 'Best Abhyanga Massage Center',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Abhyanga Massage Center Offers Ultimate Renewal',
    description: 'Discover profound rejuvenation with Best Abhyanga Massage Center. Enhance well-being and relaxation at our premier center.',
    images: ['https://www.riverdayspa.com/assets/massage/best-ayurvedic-abhyanga-full-body-massage-spa-center-chennai-river-day-spa.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-abhyanga-massage-center'
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
      <AbhyangaMassagePage />
    </>
  )
}