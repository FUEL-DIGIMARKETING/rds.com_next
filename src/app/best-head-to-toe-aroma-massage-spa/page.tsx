import { Metadata } from 'next'
import HeadToToeAromaMassagePage from '@/components/HeadToToeAromaMassagePage'
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
    "name": "Head to Toe Aroma Massage",
    "item": "https://www.riverdayspa.com/best-head-to-toe-aroma-massage-spa"  
  }]
}

export const metadata: Metadata = {
  title: 'Best Head-to-Toe Aroma Massage Spa',
  description: 'Revitalize your body and senses with our Best Head-to-Toe Aroma Massage Spa, offering deep relaxation and total rejuvenation.',
  keywords: 'Best Head to Toe Aroma Massage in Chennai, Best Head Massage Spa in Chennai',
  openGraph: {
    title: 'Best Head-to-Toe Aroma Massage Spa',
    description: 'Revitalize your body and senses with our Best Head-to-Toe Aroma Massage Spa, offering deep relaxation and total rejuvenation.',
    url: 'https://www.riverdayspa.com/best-head-to-toe-aroma-massage-spa',
    siteName: 'River Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/assets/massage/best-head-to-toe-aroma-massage-spa-center-chennai-river-day-spa.webp',
        width: 1200,
        height: 630,
        alt: 'Best Head-to-Toe Aroma Massage Spa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Head-to-Toe Aroma Massage Spa',
    description: 'Revitalize your body and senses with our Best Head-to-Toe Aroma Massage Spa, offering deep relaxation and total rejuvenation.',
    images: ['https://www.riverdayspa.com/assets/massage/best-head-to-toe-aroma-massage-spa-center-chennai-river-day-spa.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-head-to-toe-aroma-massage-spa'
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
      <HeadToToeAromaMassagePage />
    </>
  )
}