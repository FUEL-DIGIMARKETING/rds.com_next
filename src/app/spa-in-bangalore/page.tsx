import { Metadata } from 'next';
import BangalorePage from '@/components/BangalorePage';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "RiverDaySpa",
  "image": "https://www.riverdayspa.com/images/river-salon-and-day-spa.avif",
  "@id": "https://www.riverdayspa.com/",
  "url": "https://www.riverdayspa.com/spa-in-bangalore",
  "telephone": "+918904586507",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "15th Cross Road",
    "addressLocality": "Bengaluru",
    "postalCode": "560038",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9800243,
    "longitude": 77.6356073
  }  
}
export const metadata: Metadata = {
  title: 'Best Luxury Spa in Bangalore for Stress Relief and Relax',
  description: 'Discover the best spa in Bangalore for ultimate relaxation. Enjoy luxurious massages and soothing treatments tailored to revitalize your body and mind.',
  keywords: 'Spa in Bangalore, Body Massage Spa Bangalore, Bangalore Massage Centre, Best Spa in Bangalore',
  openGraph: {
    title: 'Spa in Bangalore - Wellness that works wonders',
    description: 'Discover unparalleled relaxation and unwind in a blissful Spa in Bangalore. Get our soothing treatments with expert hands and relieve your tension. Book now!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spa in Bangalore - Wellness that works wonders',
    description: 'Discover unparalleled relaxation and unwind in a blissful Spa in Bangalore. Get our soothing treatments with expert hands and relieve your tension. Book now!',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/spa-in-bangalore'
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bengaluru',
    'geo.position': '12.9800243;77.6356073',
    'ICBM': '12.9800243, 77.6356073',
  },
};

export default function SpaInBangalore() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BangalorePage />;
    </>
  )
}