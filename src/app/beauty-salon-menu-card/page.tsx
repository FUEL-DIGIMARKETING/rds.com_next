import { Metadata } from 'next'
import SalonMenuPage from '@/components/SalonMenuPage'
const structuredData = {
   "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Saloon Service",
      "item": "https://www.riverdayspa.com/best-hair-saloon-in-chennai"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Beauty Salon Menu Card",
      "item": "https://www.riverdayspa.com/beauty-salon-menu-card"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Beauty Salon Menu Card - Cuts, Colors & Confidence!',
  description: 'Discover our Beauty Salon Menu Card! From hair styling to skincare, makeup, and spa treatments—experience luxury and perfection at its best!',
  keywords: 'Beauty Parlor Menu Card, Salon Price Catalogue, Salon Menu Cards',
  openGraph: {
    title: 'Beauty Salon Menu Card - Cuts, Colors & Confidence!',
    description: 'Discover our Beauty Salon Menu Card! From hair styling to skincare, makeup, and spa treatments—experience luxury and perfection at its best!',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/beauty-salon-menu-card'
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
      <SalonMenuPage />
    </>
  )
}