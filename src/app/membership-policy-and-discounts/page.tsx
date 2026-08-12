import { Metadata } from 'next'
import MembershipPage from '@/components/MembershipPage'
const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Membership policy and discounts",
      "item": "https://www.riverdayspa.com/membership-policy-and-discounts"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Membership Cards | Best Body massage spa in Chennai',
  description: 'Enrol in your Membership at the Best Body massage spa in Chennai, River Salon and Day Spa. Enjoy your spa experience in all over locations.',
  keywords: 'Membership Cards, Best Body massage spa in Chennai',
  openGraph: {
    title: 'Membership Cards | Best Body massage spa in Chennai',
    description: 'Enrol in your Membership at the Best Body massage spa in Chennai, River Salon and Day Spa. Enjoy your spa experience in all over locations.',
    url: 'https://www.riverdayspa.com/membership-policy-and-discounts',
    siteName: 'River Salon and Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/assets/singlepackage.jpg',
        width: 1200,
        height: 630,
        alt: 'Membership Cards',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/membership-policy-and-discounts'
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
      <MembershipPage />
    </>
  )
}