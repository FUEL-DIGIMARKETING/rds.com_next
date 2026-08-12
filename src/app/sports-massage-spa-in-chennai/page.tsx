import { Metadata } from 'next'
import SportsMassagePage from '@/components/SportsMassagePage'

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
    "name": "Sports Massage",
    "item": "https://www.riverdayspa.com/sports-massage-spa-in-chennai"  
  }]
}

export const metadata: Metadata = {
  title: 'Sports Massage Spa in Chennai: Recovery and Performance Enhancement',
  description: 'Professional sports massage therapy in Chennai for athletes and fitness enthusiasts. Improve performance, prevent injuries, and accelerate recovery.',
  keywords: 'Sports Massage Chennai, Athletic Massage, Recovery Massage, Performance Enhancement, Sports Therapy',
  openGraph: {
    title: 'Sports Massage Spa in Chennai: Recovery & Performance Enhancement',
    description: 'Professional sports massage therapy in Chennai for athletes and fitness enthusiasts. Improve performance, prevent injuries, and accelerate recovery.',
    url: 'https://www.riverdayspa.com/sports-massage-spa-in-chennai',
    siteName: 'River Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/assets/massage/best-sports-body-massage-spa-center-chennai-river-day-spa.webp',
        width: 1200,
        height: 630,
        alt: 'Sports Massage Spa in Chennai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Massage Spa in Chennai: Recovery & Performance Enhancement',
    description: 'Professional sports massage therapy in Chennai for athletes and fitness enthusiasts. Improve performance, prevent injuries, and accelerate recovery.',
    images: ['https://www.riverdayspa.com/assets/massage/best-sports-body-massage-spa-center-chennai-river-day-spa.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/sports-massage-spa-in-chennai'
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
      <SportsMassagePage />
    </>
  )
}