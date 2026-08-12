import { Metadata } from 'next'
import SinglePackagesPage from '@/components/SinglePackagesPage'
const structuredData = {
   "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Single Spa And Massage Service Packages",
      "item": "https://www.riverdayspa.com/best-spa-packages"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Best Spa Packages - Indulge with Best Relaxation',
  description: 'We offer the Best Spa Packages at our locations. To you with an array of single spa packages. Book your session now and get the best packages for the year.',
  keywords: 'Best Massage Center in Chennai, Best Body Massage Spa Bangalore, Single Spa Packages, Best Spa Packages',
  openGraph: {
    title: 'Best Spa Packages - Indulge with Best Relaxation',
    description: 'We offer the Best Spa Packages at our locations. To you with an array of single spa packages. Book your session now and get the best packages for the year.',
    images: [
      {
        url: 'https://www.riverdayspa.com/asset/best-packages-chennai-spa-massage-centre.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Spa Packages at River Salon and Day Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Spa Packages - Indulge with Best Relaxation',
    description: 'We offer the Best Spa Packages at our locations. To you with an array of single spa packages. Book your session now and get the best packages for the year.',
    images: ['https://www.riverdayspa.com/asset/best-packages-chennai-spa-massage-centre.jpg'],
  }, alternates: {
    canonical: 'https://www.riverdayspa.com/best-spa-packages'
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
      <SinglePackagesPage />
    </>
  )
}