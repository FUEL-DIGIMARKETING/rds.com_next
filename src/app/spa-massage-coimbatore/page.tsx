import { Metadata } from 'next';
import CoimbatorePage from '@/components/CoimbatorePage';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "River Salon and Day Spa - Coimbatore",
  "image": "/images/river-salon-and-day-spa.avif",
  "@id": "",
  "url": "https://www.riverdayspa.com/spa-massage-coimbatore",
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
    "latitude": 12.942801066682648,
    "longitude": 79.14443967726852
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "22:00"
  }
}
export const metadata: Metadata = {
  title: 'Spa Massage Coimbatore - Healing hands, peaceful mind',
  description: 'Discover at River Salon and Day Spa, the Spa Massage Coimbatore. Let our skilled therapists transport you to a world of relaxation. Book Now!',
  keywords: 'Best Body Massage Spa in Coimbatore, Massage Centre Coimbatore, Massage in Coimbatore, Spa in Coimbatore',
  openGraph: {
    title: 'Spa Massage Coimbatore - Healing hands, peaceful mind',
    description: 'Discover at River Salon and Day Spa, the Spa Massage Coimbatore. Let our skilled therapists transport you to a world of relaxation. Book Now!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spa Massage Coimbatore - Healing hands, peaceful mind',
    description: 'Discover at River Salon and Day Spa, the Spa Massage Coimbatore. Let our skilled therapists transport you to a world of relaxation. Book Now!',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/spa-massage-coimbatore'
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Coimbatore',
    'geo.position': '11.0168;76.9558',
    'ICBM': '11.0168, 76.9558',
  },
};

export default function SpaMassageCoimbatore() {
  return(
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CoimbatorePage />;
    </>
  ) 
}