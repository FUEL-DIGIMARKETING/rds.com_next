import { Metadata } from 'next'
import CoupleMassagePage from '@/components/CoupleMassagePage'

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
    "name": "Couple Massage",
    "item": "https://www.riverdayspa.com/best-couple-massage-center"  
  }]
}
export const metadata: Metadata = {
  title: 'Best Couple Massage Center | Rediscover Connection with Your Partner',
  description: 'Rekindle your bond with a relaxing Best Couple Massage Center that offers the best services for a shared rejuvenating experience.',
  keywords: 'Couple Massage in Coimbatore, Couple Massage Spa Chennai, Couple Massage Spa Bangalore',
  openGraph: {
    title: 'Best Couple Massage Center | Rediscover Connection with Your Partner',
    description: 'Rekindle your bond with a relaxing Best Couple Massage Center that offers the best services for a shared rejuvenating experience.',
    url: 'https://www.riverdayspa.com/best-couple-massage-center',
    siteName: 'River Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/assets/best-couple-massage-chennai-river-day-spa.webp',
        width: 1200,
        height: 630,
        alt: 'Best Couple Massage Center',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Couple Massage Center | Rediscover Connection with Your Partner',
    description: 'Rekindle your bond with a relaxing Best Couple Massage Center that offers the best services for a shared rejuvenating experience.',
    images: ['https://www.riverdayspa.com/assets/best-couple-massage-chennai-river-day-spa.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-couple-massage-center'
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
      <CoupleMassagePage />
    </>
  )
}