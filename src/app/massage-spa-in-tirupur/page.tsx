import { Metadata } from 'next';
import TirupurPage from '@/components/TirupurPage';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "River Salon and Day Spa - Tirupur",
  "image": "/images/river-salon-and-day-spa.avif",
  "@id": "",
  "url": "https://www.riverdayspa.com/massage-spa-in-tirupur",
  "telephone": "9500136424",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "16/16A Lakshmi Nagar, 50 Feet Road, PN Rd, near Miller Stop",
    "addressLocality": "Tirupur",
    "postalCode": "641601",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.11630804346195,
    "longitude": 77.3402404929588
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Friday",
      "Sunday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "21:30"
  }, {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Tuesday",
      "Wednesday",
      "Thursday"
    ],
    "opens": "09:00",
    "closes": "21:30"
  }]
}

export const metadata: Metadata = {
  title: 'Massage Spa in Tirupur - Detox. De-stress. Delight',
  description: 'Are you looking for a massage spa in Tirupur? Start to pamper yourself with our exclusive massage services with expert hands. For More Details Visit us.',
  keywords: 'Massage in Tirupur, Massage centre in Tirupur, Tirupur massage centres, Body massage in tirupur, Best Spa in Tirupur',
  openGraph: {
    title: 'Massage Spa in Tirupur - Detox. De-stress. Delight',
    description: 'Are you looking for a massage spa in Tirupur? Start to pamper yourself with our exclusive massage services with expert hands. For More Details Visit us.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Massage Spa in Tirupur - Detox. De-stress. Delight',
    description: 'Are you looking for a massage spa in Tirupur? Start to pamper yourself with our exclusive massage services with expert hands. For More Details Visit us.',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/massage-spa-in-tirupur'
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Tirupur',
    'geo.position': '11.1085;77.3411',
    'ICBM': '11.1085, 77.3411',
  },
};

export default function MassageSpaInTirupur() {
  return(
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TirupurPage />;
    </>
  ) 
}