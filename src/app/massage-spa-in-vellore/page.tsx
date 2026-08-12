import Head from 'next/head'
import VelloreTollgatePage from '../../components/VelloreTollgatePage'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "River Salon and Day Spa - Tollgate Vellore",
  "image": "https://www.riverdayspa.com/assets/river-salon-and-day-spa-oZpp3m3r.webp",
  "@id": "",
  "url": "https://www.riverdayspa.com/massage-spa-in-vellore",
  "telephone": "6381568923",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10/2, Valasa Street, Infantry Road Opposite Vellore Corporation Office",
    "addressLocality": "Vellore",
    "postalCode": "632001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.913179018039354,
    "longitude": 79.131267
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "10:00",
    "closes": "22:00"
  }
}

export const metadata = {
  title: 'Massage Spa in Vellore - Relaxation at its deepest level',
  description: 'Are you looking to get a massage spa in Vellore? Get the best spa experience like never before. For More Details Visit us',
  keywords: 'Massage Spa in Vellore, Massage centres in Vellore, Body massage in vellore, Spa in vellore',
  openGraph: {
    title: 'Massage Spa in Vellore - Relaxation at its deepest level',
    description: 'Are you looking to get a massage spa in Vellore? Get the best spa experience like never before. For More Details Visit us',
    url: 'https://www.riverdayspa.com/massage-spa-in-vellore',
    siteName: 'River Salon and Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/assets/best-chennai-oil-massage.jpg',
        width: 1200,
        height: 630,
        alt: 'Massage Spa in Vellore',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/massage-spa-in-vellore'
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Vellore',
    'geo.position': '12.9165;79.1325',
    'ICBM': '12.9165, 79.1325',
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <VelloreTollgatePage />
    </>
  )
}
