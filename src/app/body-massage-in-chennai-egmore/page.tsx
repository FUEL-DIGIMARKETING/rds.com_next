import { Metadata } from 'next';
import ChennaiEgmorePage from '@/components/ChennaiEgmorePage';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "River Salon and Day Spa - Chennai",
  "image": "/images/river-salon-and-day-spa.avif",
  "@id": "",
  "url": "https://www.riverdayspa.com/body-massage-in-chennai-egmore",
  "telephone": "9840898462",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "New No.7A, Old No 2/4 1st Floor, Tamil Salai, Egmore",
    "addressLocality": "Chennai",
    "postalCode": "600008",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.07555715319413,
    "longitude": 80.25775016931712
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
  title: 'Body Massage in Chennai Egmore - Your Oasis of Calm',
  description: 'Choose the Body Massage in Chennai Egmore and experience ultimate relaxation and revitalization with our massages, combining relaxation to mind and soul.',
  keywords: 'Massage in Chennai Egmore, Body Massage Egmore, Best Spa in Chennai, Massage Centre Chennai',
  openGraph: {
    title: 'Body Massage in Chennai Egmore - Your Oasis of Calm',
    description: 'Choose the Body Massage in Chennai Egmore and experience ultimate relaxation and revitalization with our massages, combining relaxation to mind and soul.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Body Massage in Chennai Egmore - Your Oasis of Calm',
    description: 'Choose the Body Massage in Chennai Egmore and experience ultimate relaxation and revitalization with our massages, combining relaxation to mind and soul.',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/body-massage-in-chennai-egmore'
  }
};

export default function BodyMassageChennaiEgmore() {
  return(
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ChennaiEgmorePage />;
    </>
  ) 
}