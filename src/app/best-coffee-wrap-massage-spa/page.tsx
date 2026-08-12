import { Metadata } from 'next'
import CoffeeWrapPage from '@/components/CoffeeWrapPage'
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
      "name": "Coffee Body Wrap Massage",
      "item": "https://www.riverdayspa.com/best-coffee-wrap-massage-spa"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Best Coffee Wrap Massage Spa | Revitalize with a Rejuvenating Brew',
  description: 'Experience ultimate relaxation and revitalization with our Best Coffee Wrap Massage Spa, combining exfoliation and hydration.',
  keywords: 'Coffee Wrap Massage Spa, Coffee Body Wrap, Best Coffee Wrap Massage in Coimbatore, Coffee Wrap Massage in Chennai, energizing spa treatment, skin exfoliation',
  openGraph: {
    title: 'Best Coffee Wrap Massage Spa | Revitalize with a Rejuvenating Brew',
    description: 'Experience ultimate relaxation and revitalization with our Best Coffee Wrap Massage Spa, combining exfoliation and hydration.',
    images: [
      {
        url: 'https://www.riverdayspa.com/asset/coffee-wrap-body-massage-in-bangalore.jpg',
        width: 1200,
        height: 630,
        alt: 'Coffee Body Wrap Massage at River Salon and Day Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Coffee Wrap Massage Spa | Revitalize with a Rejuvenating Brew',
    description: 'Experience ultimate relaxation and revitalization with our Best Coffee Wrap Massage Spa, combining exfoliation and hydration.',
    images: ['https://www.riverdayspa.com/asset/coffee-wrap-body-massage-in-bangalore.jpg'],
  }, alternates: {
    canonical: 'https://www.riverdayspa.com/best-coffee-wrap-massage-spa'
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
      <CoffeeWrapPage />
    </>
  )
}