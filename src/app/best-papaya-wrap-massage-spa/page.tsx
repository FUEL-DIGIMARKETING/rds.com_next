import { Metadata } from 'next'
import PapayaWrapPage from '@/components/PapayaWrapPage'
const structuredData = {
   "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Body Wrap massage",
      "item": "https://www.riverdayspa.com/best-body-wrap-massage-spa"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Papaya Wrap Massage",
      "item": "https://www.riverdayspa.com/best-papaya-wrap-massage-spa"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Best Papaya Wrap Massage Spa - A Tropical Escape for Rejuvenated Skin',
  description: 'Indulge in a luxurious Best Papaya Wrap Massage Spa, nourishing your skin with tropical bliss for ultimate hydration and glow.',
  keywords: 'Papaya Wrap Massage in Chennai, Papaya Wrap Massage Center Coimbatore, papaya body wrap, tropical spa treatment, skin rejuvenation',
  openGraph: {
    title: 'Best Papaya Wrap Massage Spa - A Tropical Escape for Rejuvenated Skin',
    description: 'Indulge in a luxurious Best Papaya Wrap Massage Spa, nourishing your skin with tropical bliss for ultimate hydration and glow.',
    images: [
      {
        url: 'https://www.riverdayspa.com/asset/best-papaya-wrap-massage-chennai.jpg',
        width: 1200,
        height: 630,
        alt: 'Papaya Wrap Massage at River Salon and Day Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Papaya Wrap Massage Spa - A Tropical Escape for Rejuvenated Skin',
    description: 'Indulge in a luxurious Best Papaya Wrap Massage Spa, nourishing your skin with tropical bliss for ultimate hydration and glow.',
    images: ['https://www.riverdayspa.com/asset/best-papaya-wrap-massage-chennai.jpg'],
  }, alternates: {
    canonical: 'https://www.riverdayspa.com/best-papaya-wrap-massage-spa'
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
      <PapayaWrapPage />
    </>
  )
}