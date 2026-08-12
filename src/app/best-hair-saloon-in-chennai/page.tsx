import { Metadata } from 'next'
import HairSalonPage from '@/components/HairSalonPage'
const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Saloon Service",
      "item": "https://www.riverdayspa.com/best-hair-saloon-in-chennai"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Best Hair Saloon in Chennai - Your Beauty, Our Passion.',
  description: 'Choose the Best Hair Saloon in Chennai to elevate Your Style and look. We aim to provide excellence in hairdressing and beauty services all over Chennai.',
  keywords: 'Top Parlour in Chennai, Luxury Salons in Chennai, Luxury Hair salons in Chennai',
  openGraph: {
    title: 'Best Hair Saloon in Chennai - Your Beauty, Our Passion.',
    description: 'Choose the Best Hair Saloon in Chennai to elevate Your Style and look. We aim to provide excellence in hairdressing and beauty services all over Chennai.',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-hair-saloon-in-chennai'
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
      <HairSalonPage />
    </>
  )
}