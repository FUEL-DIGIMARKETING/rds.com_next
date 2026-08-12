import { Metadata } from 'next'
import DetoxifyingMassagePage from '@/components/DetoxifyingMassagePage'

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
    "name": "Detoxifying Massage",
    "item": "https://www.riverdayspa.com/best-detoxifying-massage-center"  
  }]
}
export const metadata: Metadata = {
  title: 'Detox Delight: The Best Detoxifying Massage Center',
  description: 'Experience the Best Detoxifying Massage Center with our expert massages. Purify, rejuvenate, and revitalize at Chennai\'s top detox centre.',
  keywords: 'Best Detoxifying Massage Center, Best Detoxifying Massage in Chennai',
  openGraph: {
    title: 'Detox Delight: The Best Detoxifying Massage Center',
    description: 'Experience the Best Detoxifying Massage Center with our expert massages. Purify, rejuvenate, and revitalize at Chennai\'s top detox centre.',
    url: 'https://www.riverdayspa.com/best-detoxifying-massage-center',
    siteName: 'River Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/assets/massage/best-detoxifying-full-body-spa-massage-center-chennai.webp',
        width: 1200,
        height: 630,
        alt: 'Best Detoxifying Massage Center',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Detox Delight: The Best Detoxifying Massage Center',
    description: 'Experience the Best Detoxifying Massage Center with our expert massages. Purify, rejuvenate, and revitalize at Chennai\'s top detox centre.',
    images: ['https://www.riverdayspa.com/assets/massage/best-detoxifying-full-body-spa-massage-center-chennai.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-detoxifying-massage-center',
  },
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
      <DetoxifyingMassagePage />
    </>
  )
}