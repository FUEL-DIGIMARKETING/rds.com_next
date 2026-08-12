import { Metadata } from 'next'
import BodyScrubCenterPage from '@/components/BodyScrubCenterPage'
const structuredData = {
   "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "body scrub massage",
      "item": "https://www.riverdayspa.com/best-body-scrub-massage-center"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Best Body Scrub Massage Center - Ultimate Experience at Our Luxury Spa',
  description: 'Discover the ultimate best body scrub massage center at our luxury spa. Enjoy rejuvenating treatments for radiant, smooth skin. Book now!',
  keywords: 'Body Scrub Massage Service in Bangalore, Best Body Scrub Massage Coimbatore, body scrub massage center, luxury spa treatments',
  openGraph: {
    title: 'Best Body Scrub Massage Center | River Salon and Day Spa',
    description: 'Experience the best body scrub massage treatments at River Salon and Day Spa. Rejuvenate your skin with our premium scrub services.',
    images: [
      {
        url: 'https://www.riverdayspa.com/asset/body-scrub-massage-center-in-chennai.jpg',
        width: 1200,
        height: 630,
        alt: 'Body Scrub Massage Center at River Salon and Day Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Body Scrub Massage Center | River Salon and Day Spa',
    description: 'Experience the best body scrub massage treatments at River Salon and Day Spa. Rejuvenate your skin with our premium scrub services.',
    images: ['https://www.riverdayspa.com/asset/body-scrub-massage-center-in-chennai.jpg'],
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-body-scrub-massage-center'
  }
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BodyScrubCenterPage />
    </>
  )
}