import { Metadata } from 'next'
import SynchronizedMassagePage from '@/components/SynchronizedMassagePage'

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
    "name": "Synchronized Massage",
    "item": "https://www.riverdayspa.com/best-synchronized-massage-spa"  
  }]
}
export const metadata: Metadata = {
  title: 'Best Synchronized Massage Spa: Two Hands, One Blissful Experience',
  description: 'Experience perfect harmony with the Best Synchronized Massage Spa, where two therapists deliver unparalleled relaxation and rejuvenation.',
  keywords: 'Best Synchronized Massage, Synchronized Massage Center Chennai, Four Hand Massage, Dual Therapist Massage',
  openGraph: {
    title: 'Best Synchronized Massage Spa: Two Hands, One Blissful Experience',
    description: 'Experience perfect harmony with the Best Synchronized Massage Spa, where two therapists deliver unparalleled relaxation and rejuvenation.',
    url: 'https://www.riverdayspa.com/best-synchronized-massage-spa',
    siteName: 'River Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/assets/massage/best-Synchronized-full-body-massage-spa-center-chennai-river-day-spa.webp',
        width: 1200,
        height: 630,
        alt: 'Best Synchronized Massage Spa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Synchronized Massage Spa: Two Hands, One Blissful Experience',
    description: 'Experience perfect harmony with the Best Synchronized Massage Spa, where two therapists deliver unparalleled relaxation and rejuvenation.',
    images: ['https://www.riverdayspa.com/assets/massage/best-Synchronized-full-body-massage-spa-center-chennai-river-day-spa.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-synchronized-massage-spa'
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
      <SynchronizedMassagePage />
    </>
  )
}