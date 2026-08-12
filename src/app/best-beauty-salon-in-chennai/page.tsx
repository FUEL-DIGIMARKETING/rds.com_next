import Head from 'next/head'
import ChennaiSalonPage from '../../components/ChennaiSalonPage'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "River Salon and Day Spa - Salon Chennai",
  "image": "https://www.riverdayspa.com/asset/river-salon-and-day-spa-oZpp3m3r.webp",
  "@id": "",
  "url": "https://www.riverdayspa.com/best-beauty-salon-in-chennai",
  "telephone": "09840898462",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "New No.7A, Old No 2/4 1st Floor, Tamil Salai, Egmore",
    "addressLocality": "Chennai",
    "postalCode": "600008",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.075766166399779,
    "longitude": 80.25775016931712
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
  title: 'Best Beauty Salon in Chennai - Luxury Beauty, Exclusive You!',
  description: 'Choose the best beauty salon in Chennai for you. We offer the ultimate beauty experience for your skin and hair. For More Details Visit our website.',
  keywords: 'Best beauty parlour chennai, Best parlour in chennai, Chennai beauty salon, Chennai best hair salon',
  openGraph: {
    title: 'Best Beauty Salon in Chennai - Luxury Beauty, Exclusive You!',
    description: 'Choose the best beauty salon in Chennai for you. We offer the ultimate beauty experience for your skin and hair. For More Details Visit our website.',
    url: 'https://www.riverdayspa.com/best-beauty-salon-in-chennai',
    siteName: 'River Salon and Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/assets/hair-saloon-in-chennai.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Beauty Salon in Chennai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-beauty-salon-in-chennai'
  }
}

export default function Page() {
  return(
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ChennaiSalonPage />
    </>
  ) 
}