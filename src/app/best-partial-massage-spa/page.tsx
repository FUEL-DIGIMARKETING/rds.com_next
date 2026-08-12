import { Metadata } from 'next'
import PartialMassagePage from '@/components/PartialMassagePage'
const structuredData = {
   "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Massage",
    "item": "https://www.riverdayspa.com/best-body-massage-center"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "Partial Massage",
    "item": "https://www.riverdayspa.com/best-partial-massage-spa"  
  }]
}
export const metadata: Metadata = {
  title: 'Best Partial Massage Spa - Unwind Like Never Before',
  description: 'Discover the best partial massage spa in Chennai. Unwind and relax like never before with our expert services.',
  keywords: 'Best Partial Massage Spa Chennai, Best Partial Massage Spa Coimbatore',
  openGraph: {
    title: 'Best Partial Massage Spa - Unwind Like Never Before',
    description: 'Discover the best partial massage spa in Chennai. Unwind and relax like never before with our expert services.',
    url: 'https://www.riverdayspa.com/best-partial-massage-spa',
    siteName: 'River Day Spa',
    images: [
      {
        url: '/images/best-luxury-spa-in-chennai.webp',
        width: 1200,
        height: 630,
        alt: 'Best Partial Massage Spa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Partial Massage Spa - Unwind Like Never Before',
    description: 'Discover the best partial massage spa in Chennai. Unwind and relax like never before with our expert services.',
    images: ['/images/best-luxury-spa-in-chennai.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-partial-massage-spa'
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
      <PartialMassagePage />
    </>
  )
}