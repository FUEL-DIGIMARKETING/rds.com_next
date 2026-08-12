import { Metadata } from 'next'
import SalonPackagesPage from '@/components/SalonPackagesPage'
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
      "name": "Hair Salon Packages",
      "item": "https://www.riverdayspa.com/beauty-salon-packages"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Beauty Salon Packages - Glow Up, Show Up',
  description: 'The Beauty Salon Packages get glowing with our exclusive beauty packages, including facials, hair spas, manicures & more. Book now for a stunning makeover!',
  keywords: 'Best Unisex Hair Salon in Chennai',
  openGraph: {
    title: 'Beauty Salon Packages - Glow Up, Show Up',
    description: 'The Beauty Salon Packages get glowing with our exclusive beauty packages, including facials, hair spas, manicures & more. Book now for a stunning makeover!',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/beauty-salon-packages'
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
      <SalonPackagesPage />
    </>
  )
}