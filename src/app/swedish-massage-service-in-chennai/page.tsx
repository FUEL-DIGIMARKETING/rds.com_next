import SwedishMassagePage from '@/components/SwedishMassagePage'
import { Metadata } from 'next'

// SEO data from front1809/src/massage/swedish_massage.jsx
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
    "name": "Swedish Massage",
    "item": "https://www.riverdayspa.com/swedish-massage-service-in-chennai"  
  }]
}

// SEO metadata from front1809 Helmet component
export const metadata: Metadata = {
  title: 'Swedish Massage Service in Chennai',
  description: 'Experience the soothing benefits of Swedish Massage Service in Chennai. Let our skilled therapists melt away your stress with professional massage techniques.',
  keywords: 'Swedish Massage in Chennai, Swedish Massage Center, Best Swedish Massage, massage therapy Chennai, relaxation massage',
  openGraph: {
    title: 'Swedish Massage Service in Chennai',
    description: 'Experience the soothing benefits of Swedish Massage Service in Chennai. Let our skilled therapists melt away your stress.',
    images: [{ url: 'https://www.riverdayspa.com/images/swedish-massage-in-coimbatore.jpg' }],
    url: 'https://www.riverdayspa.com/swedish-massage-service-in-chennai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swedish Massage Service in Chennai',
    description: 'Experience professional Swedish massage therapy in Chennai for ultimate relaxation.',
    images: ['https://www.riverdayspa.com/images/swedish-massage-in-coimbatore.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/swedish-massage-service-in-chennai'
  }
}

export default function SwedishMassageChennai() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <SwedishMassagePage />
    </>
  )
}