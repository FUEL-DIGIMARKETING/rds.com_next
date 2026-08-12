import { Metadata } from 'next'
import SpaGiftCardPage from '@/components/SpaGiftCardPage'
const structuredData = {
   "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Spa Gift Cards",
      "item": "https://www.riverdayspa.com/spa-giftcard-details"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Spa Gift Cards | Best Massage Gift Cards',
  description: 'Buy Spa Gift Cards at Riverdayspa™. Choose the Best Massage Gift Cards and offer the best relaxation to your loveable person right now.',
  keywords: 'Best Massage Center in Chennai, Best Body Massage Spa Bangalore',
  openGraph: {
    title: 'Spa Gift Cards | Best Massage Gift Cards',
    description: 'Buy Spa Gift Cards at Riverdayspa™. Choose the Best Massage Gift Cards and offer the best relaxation to your loveable person right now.',
    url: 'https://www.riverdayspa.com/spa-giftcard-details',
    siteName: 'River Salon and Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/assets/singlepackage.jpg',
        width: 1200,
        height: 630,
        alt: 'Spa Gift Cards',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/spa-giftcard-details'
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
      <SpaGiftCardPage />
    </>
  )
}