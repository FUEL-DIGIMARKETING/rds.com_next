import Head from 'next/head'
import TirupurSalonPage from '../../components/TirupurSalonPage'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "River Salon and Day Spa - Salon Tirupur",
  "image": "/images/river-salon-and-day-spa.avif",
  "@id": "",
  "url": "https://www.riverdayspa.com/beauty-parlour-in-tirupur-our-premium-services-as-you-need",
  "telephone": "8925012309",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No, 16&17, Ranganathapuram, Rayapuram, Thottipalayam",
    "addressLocality": "Tirupur",
    "postalCode": "641601",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.108539433579429,
    "longitude": 77.33005574087966
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "10:00",
    "closes": "21:30"
  }
}
export const metadata = {
  title: 'Beauty Parlour in Tirupur: Our Premium Services as You Need',
  description: 'Discover premium beauty services at the best beauty parlour in Tirupur. From haircuts to bridal makeovers, Riverdayspa ensure you look and feel your best!',
  keywords: 'Beauty Parlour in Tirupur: Our Premium Services as You Need',
  openGraph: {
    title: 'Beauty Parlour in Tirupur: Our Premium Services as You Need',
    description: 'Discover premium beauty services at the best beauty parlour in Tirupur. From haircuts to bridal makeovers, Riverdayspa ensure you look and feel your best!',
    url: 'https://www.riverdayspa.com/beauty-parlour-in-tirupur-our-premium-services-as-you-need',
    siteName: 'River Salon and Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/assets/best-luxury-spa-tirupur.jpg',
        width: 1200,
        height: 630,
        alt: 'Beauty Parlour in Tirupur',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/beauty-parlour-in-tirupur-our-premium-services-as-you-need'
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Tirupur',
    'geo.position': '11.1085;77.3411',
    'ICBM': '11.1085, 77.3411',
  },
}

export default function Page() {
  return(
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TirupurSalonPage />
    </>
  )
}