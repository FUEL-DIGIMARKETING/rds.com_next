import { Metadata } from 'next';
import VelloreKatpadiPage from '@/components/VelloreKatpadiPage';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "River Salon and Day Spa - Katpadi Vellore",
  "image": "https://www.riverdayspa.com/images/river-salon-and-day-spa.avif",
  "@id": "",
  "url": "https://www.riverdayspa.com/best-body-massage-spa-katpadi-vellore",
  "telephone": "+91 9840898481",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot. No 109, Tiruvalam Rd, near VIT college, Selvam Nagar",
    "addressLocality": "Katpadi, Vellore",
    "postalCode": "632007",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.982925652293874,
    "longitude": 79.14845141814817
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
    "opens": "09:30",
    "closes": "21:30"
  }
}

export const metadata: Metadata = {
  title: 'Best Body Massage Spa in Katpadi - Serenity starts here',
  description: 'Looking to get the Best Body massage spa in Katpadi? Riverdayspa™ is the Best Body massage spa in Katpadi. For More Details Visit us',
  keywords: 'Massage Spa in Katpadi, Massage Center in Vellore, Best Spa in Vellore, Body Massage Vellore',
  openGraph: {
    title: 'Best Body Massage Spa in Katpadi - Serenity starts here',
    description: 'Looking to get the Best Body massage spa in Katpadi? Riverdayspa™ is the Best Body massage spa in Katpadi. For More Details Visit us',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Body Massage Spa in Katpadi - Serenity starts here',
    description: 'Looking to get the Best Body massage spa in Katpadi? Riverdayspa™ is the Best Body massage spa in Katpadi. For More Details Visit us',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-body-massage-spa-katpadi-vellore'
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Vellore',
    'geo.position': '12.9165;79.1325',
    'ICBM': '12.9165, 79.1325',
  },
};

export default function BestBodyMassageSpaKatpadiVellore() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <VelloreKatpadiPage />
    </>
  );
}