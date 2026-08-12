import { Metadata } from 'next'
import CouplesPackagesPage from '@/components/CouplesPackagesPage'
const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Couple Spa & Massage Service Packages",
      "item": "https://www.riverdayspa.com/best-couples-spa-packages"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Best Couples Spa Packages - Get Relax with a Lovable Person',
  description: 'We provide the Best Couples Spa Packages. Choose the packages to get the best relaxation with our professional therapies. Book now at our locations.',
  keywords: 'Spas for Couples, Spa Packages for Couples, Best Couples Spa Packages, Couple Massage Packages',
  openGraph: {
    title: 'Best Couples Spa Packages - Get Relax with a Lovable Person',
    description: 'We provide the Best Couples Spa Packages. Choose the packages to get the best relaxation with our professional therapies. Book now at our locations.',
    images: [
      {
        url: 'https://www.riverdayspa.com/asset/best-couple-massage-packages-in-chennai.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Couples Spa Packages at River Salon and Day Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Couples Spa Packages - Get Relax with a Lovable Person',
    description: 'We provide the Best Couples Spa Packages. Choose the packages to get the best relaxation with our professional therapies. Book now at our locations.',
    images: ['https://www.riverdayspa.com/asset/best-couple-massage-packages-in-chennai.jpg'],
  }, alternates: {
    canonical: 'https://www.riverdayspa.com/best-couples-spa-packages'
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
      <CouplesPackagesPage />
    </>
  )
}