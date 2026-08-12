import { Metadata } from 'next'
import SenseOfSiamMassagePage from '@/components/SenseOfSiamMassagePage'
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
    "name": "Sense of Siam Massage",
    "item": "https://www.riverdayspa.com/best-sense-of-siam-massage-center"  
  }]
}
export const metadata: Metadata = {
  title: 'Best Sense of Siam Massage Center: A Incredible Haven',
  description: 'Discover ultimate relaxation at Best Sense of Siam Massage Center with rejuvenating massage treatments.',
  keywords: 'Best Sense of Siam Massage Center Chennai, Best Sense of Siam Massage',
  openGraph: {
    title: 'Best Sense of Siam Massage Center: A Incredible Haven',
    description: 'Discover ultimate relaxation at Best Sense of Siam Massage Center with rejuvenating massage treatments.',
    url: 'https://www.riverdayspa.com/best-sense-of-siam-massage-center',
    siteName: 'River Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/assets/massage/best-sense-of-siams-full-body-massage-spa-services-chennai-river-day-spa.webp',
        width: 1200,
        height: 630,
        alt: 'Best Sense of Siam Massage Center',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Sense of Siam Massage Center: A Incredible Haven',
    description: 'Discover ultimate relaxation at Best Sense of Siam Massage Center with rejuvenating massage treatments.',
    images: ['https://www.riverdayspa.com/assets/massage/best-sense-of-siams-full-body-massage-spa-services-chennai-river-day-spa.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-sense-of-siam-massage-center'
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
      <SenseOfSiamMassagePage />
    </>
  )
}