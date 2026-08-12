import { Metadata } from 'next'
import RaspberryWrapPage from '@/components/RaspberryWrapPage'
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
      "name": "Raspberry Wrap Massage",
      "item": "https://www.riverdayspa.com/raspberry-wrap-massage-center"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Raspberry Wrap Massage Center - Indulge in Sweet Relaxation',
  description: 'Discover blissful relaxation at our Raspberry Wrap Massage Center, where natural ingredients rejuvenate your skin and uplift your spirit.',
  keywords: 'Raspberry Wrap Massage Bangalore, Raspberry Wrap Massage Coimbatore, raspberry body wrap, antioxidant spa treatment, skin detox',
  openGraph: {
    title: 'Raspberry Wrap Massage Center - Indulge in Sweet Relaxation',
    description: 'Discover blissful relaxation at our Raspberry Wrap Massage Center, where natural ingredients rejuvenate your skin and uplift your spirit.',
    images: [
      {
        url: 'https://www.riverdayspa.com/asset/best-raspberry-massage-centre-in-chennai.webp',
        width: 1200,
        height: 630,
        alt: 'Raspberry Wrap Massage at River Salon and Day Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raspberry Wrap Massage Center - Indulge in Sweet Relaxation',
    description: 'Discover blissful relaxation at our Raspberry Wrap Massage Center, where natural ingredients rejuvenate your skin and uplift your spirit.',
    images: ['https://www.riverdayspa.com/asset/best-raspberry-massage-centre-in-chennai.webp'],
  }, alternates: {
    canonical: 'https://www.riverdayspa.com/raspberry-wrap-massage-center'
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
      <RaspberryWrapPage />
    </>
  )
}