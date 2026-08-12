import { Metadata } from 'next'
import DeepTissueMassagePage from '@/components/DeepTissueMassagePage'
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
    "name": "Deep Tissue Massage",
    "item": "https://www.riverdayspa.com/best-deep-tissue-massage-center"  
  }]
}
export const metadata: Metadata = {
  title: 'Best Deep Tissue Massage Center - Dive Deep into Bliss',
  description: 'Experience profound relaxation and relief with Best Deep Tissue Massage Center in a luxurious setting.',
  keywords: 'Best Deep Tissue Massage Center Chennai, Best Deep Tissue Massage Spa',
  openGraph: {
    title: 'Best Deep Tissue Massage Center - Dive Deep into Bliss',
    description: 'Experience profound relaxation and relief with Best Deep Tissue Massage Center in a luxurious setting.',
    url: 'https://www.riverdayspa.com/best-deep-tissue-massage-center',
    siteName: 'River Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/assets/massage/Best-deep-tissue-full-body-massage-spa-center-chennai.webp',
        width: 1200,
        height: 630,
        alt: 'Best Deep Tissue Massage Center',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Deep Tissue Massage Center - Dive Deep into Bliss',
    description: 'Experience profound relaxation and relief with Best Deep Tissue Massage Center in a luxurious setting.',
    images: ['https://www.riverdayspa.com/assets/massage/Best-deep-tissue-full-body-massage-spa-center-chennai.webp'],
  },
  robots: {
    index: true,
    follow: true,
  }, alternates: {
    canonical: 'https://www.riverdayspa.com/best-deep-tissue-massage-center'
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
      <DeepTissueMassagePage />
    </>
  )
}