import Head from 'next/head'
import CoimbatoreSalonPage from '../../components/CoimbatoreSalonPage'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "River Salon and Day Spa - Salon Coimbatore",
  "image": "/images/river-salon-and-day-spa.avif",
  "@id": "",
  "url": "https://www.riverdayspa.com/salon-in-rspuram-coimbatore",
  "telephone": "7305033023",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No 166, Old No. 9/24, 1st Floor, Vagtune Building, Ramachandra Rd, R.S. Puram",
    "addressLocality": "Coimbatore",
    "postalCode": "641002",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.008590163568522,
    "longitude": 76.95449166136574
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
  title: 'Salon in RS Puram Coimbatore',
  description: 'Choose the River Salon and Day Spa for complete beauty care. Get the best salon experience like never before. Call now to the Salon in RS Puram Coimbatore.',
  keywords: 'Salon in RSPuram, Beauty Salon Coimbatore, Beauty Salons in Coimbatore, Best Parlour in Coimbatore',
  openGraph: {
    title: 'Salon in RS Puram Coimbatore',
    description: 'Choose the River Salon and Day Spa for complete beauty care. Get the best salon experience like never before. Call now to the Salon in RS Puram Coimbatore.',
    url: 'https://www.riverdayspa.com/salon-in-rspuram-coimbatore',
    siteName: 'River Salon and Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/assets/saloons-in-coimbatore.jpg',
        width: 1200,
        height: 630,
        alt: 'Salon in RS Puram Coimbatore',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Coimbatore',
    'geo.position': '11.0168;76.9558',
    'ICBM': '11.0168, 76.9558',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/salon-in-rspuram-coimbatore'
  }
}

export default function Page() {
  return(
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CoimbatoreSalonPage />
    </>
  ) 
}