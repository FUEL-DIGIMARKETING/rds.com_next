import { Metadata } from 'next'
import AyurvedicMassagePage from '@/components/AyurvedicMassagePage'
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
    "name": "Ayurvedic Massage",
    "item": "https://www.riverdayspa.com/best-ayurvedic-massage-spa"  
  }]
}
export const metadata: Metadata = {
  title: 'Best Ayurvedic Massage Spa - Discover Ayurvedic Bliss',
  description: 'Experience rejuvenation with our Best Ayurvedic Massage Spa. Indulge in authentic Ayurvedic treatments for ultimate relaxation.',
  keywords: 'Ayurvedic Massage Service in Chennai, Best Ayurvedic Massage in Coimbatore',
  openGraph: {
    title: 'Best Ayurvedic Massage Spa - Discover Ayurvedic Bliss',
    description: 'Experience rejuvenation with our Best Ayurvedic Massage Spa. Indulge in authentic Ayurvedic treatments for ultimate relaxation.',
    url: 'https://www.riverdayspa.com/best-ayurvedic-massage-spa',
    siteName: 'River Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/assets/massage/best-ayurvedic-thai-full-body-massage-spa-center-chennai-river-day-spa.webp',
        width: 1200,
        height: 630,
        alt: 'Best Ayurvedic Massage Spa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Ayurvedic Massage Spa - Discover Ayurvedic Bliss',
    description: 'Experience rejuvenation with our Best Ayurvedic Massage Spa. Indulge in authentic Ayurvedic treatments for ultimate relaxation.',
    images: ['https://www.riverdayspa.com/assets/massage/best-ayurvedic-thai-full-body-massage-spa-center-chennai-river-day-spa.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-ayurvedic-massage-spa'
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
      <AyurvedicMassagePage />
    </>
  )
}