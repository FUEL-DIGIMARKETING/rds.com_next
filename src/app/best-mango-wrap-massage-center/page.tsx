import { Metadata } from 'next'
import MangoWrapPage from '@/components/MangoWrapPage'
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
      "name": "Mango Wrap Massage",
      "item": "https://www.riverdayspa.com/best-mango-wrap-massage-center"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Best Mango Wrap Massage Center – Indulge in Tropical Bliss',
  description: 'Experience ultimate relaxation at the best mango wrap massage center. Enjoy tropical bliss with hydrating, nourishing body treatments.',
  keywords: 'Mango Wraps Massage in Coimbatore, Best Mango Wrap Center Bangalore, mango body wrap, tropical spa treatment, skin nourishment',
  openGraph: {
    title: 'Best Mango Wrap Massage Center – Indulge in Tropical Bliss',
    description: 'Experience ultimate relaxation at the best mango wrap massage center. Enjoy tropical bliss with hydrating, nourishing body treatments.',
    images: [
      {
        url: 'https://www.riverdayspa.com/assets/best-mango-wrap-massage.webp',
        width: 1200,
        height: 630,
        alt: 'Mango Wrap Massage at River Salon and Day Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Mango Wrap Massage Center – Indulge in Tropical Bliss',
    description: 'Experience ultimate relaxation at the best mango wrap massage center. Enjoy tropical bliss with hydrating, nourishing body treatments.',
    images: ['https://www.riverdayspa.com/assets/best-mango-wrap-massage.webp'],
  }, alternates: {
    canonical: 'https://www.riverdayspa.com/best-mango-wrap-massage-center'
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
      <MangoWrapPage />
    </>
  )
}