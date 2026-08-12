import Head from 'next/head'
import VelloreBypassPage from '../../components/VelloreBypassPage'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "River Salon and Day Spa - Bypass Vellore",
  "image": "https://www.riverdayspa.com/assets/river-salon-and-day-spa-oZpp3m3r.webp",
  "@id": "",
  "url": "https://www.riverdayspa.com/best-body-massage-spa-in-bypass-vellore",
  "telephone": "8056252525",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3, Bangalore High Way, next to Chennai Silks, Kagithapatarai",
    "addressLocality": "Vellore",
    "postalCode": "632012",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.942801066682648,
    "longitude": 79.14443967726852
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "09:30",
    "closes": "21:30"
  }
}

export const metadata = {
  title: 'Best Body Massage Spa in Bypass Vellore - Perfect Relaxation',
  description: 'Indulge in serenity at our Best Body Massage Spa in Bypass Vellore. Experience the professional massages tailored just for you.',
  keywords: 'Massage Spa in Bypass Vellore, Massage center in Vellore, Spa in Vellore',
  openGraph: {
    title: 'Best Body Massage Spa in Bypass Vellore - Perfect Relaxation',
    description: 'Indulge in serenity at our Best Body Massage Spa in Bypass Vellore. Experience the professional massages tailored just for you.',
    url: 'https://www.riverdayspa.com/best-body-massage-spa-in-bypass-vellore',
    siteName: 'River Salon and Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/assets/famous-saloons-in-chennai.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Body Massage Spa in Bypass Vellore',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-body-massage-spa-in-bypass-vellore'
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Vellore',
    'geo.position': '12.9165;79.1325',
    'ICBM': '12.9165, 79.1325',
  },
}

export default function Page() {
  return(
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <VelloreBypassPage />
    </>
  ) 
}