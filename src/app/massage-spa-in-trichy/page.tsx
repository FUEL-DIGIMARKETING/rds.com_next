import { Metadata } from 'next';
import TrichyPage from '@/components/TrichyPage';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "River Salon and Day Spa - Trichy",
  "image": "/images/river-salon-and-day-spa.avif",
  "@id": "",
  "url": "https://www.riverdayspa.com/massage-spa-in-trichy",
  "telephone": "9500197780",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No.75/E, Hotel Sona's Ground Floor, Salai Rd, Thillai Nagar",
    "addressLocality": "Trichy",
    "postalCode": "620018",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.829153410898732,
    "longitude": 78.68383183068289
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
    "closes": "21:00"
  }
}
export const metadata: Metadata = {
  title: 'Massage Spa in Trichy - Revive your Body, Refresh your Soul',
  description: 'Are you looking for a massage spa in Trichy? We offer professional massage services with expert hands to get the best relaxation. Book an appointment Now!',
  keywords: 'Spa in Trichy, Massage Center in Trichy, Massage center Trichy, Best Spa in Trichy',
  openGraph: {
    title: 'Massage Spa in Trichy - Revive your Body, Refresh your Soul',
    description: 'Are you looking for a massage spa in Trichy? We offer professional massage services with expert hands to get the best relaxation. Book an appointment Now!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Massage Spa in Trichy - Revive your Body, Refresh your Soul',
    description: 'Are you looking for a massage spa in Trichy? We offer professional massage services with expert hands to get the best relaxation. Book an appointment Now!',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/massage-spa-in-trichy'
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Trichy',
    'geo.position': '10.7905;78.7047',
    'ICBM': '10.7905, 78.7047',
  },
};

export default function MassageSpaInTrichy() {
  return(
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TrichyPage />;
    </>
  ) 
}