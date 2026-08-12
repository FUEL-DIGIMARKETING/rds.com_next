import BalineseMassagePage from '@/components/BalineseMassagePage'
import { Metadata } from 'next'

// SEO data from front1809/src/massage/Balines_massage.jsx
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
    "name": "Balinese Massage",
    "item": "https://www.riverdayspa.com/best-balinese-massage-center"  
  }]
}

// SEO metadata from front1809 Helmet component
export const metadata: Metadata = {
  title: 'Best Balinese Massage Center: Tranquil Bliss',
  description: 'Experience unparalleled relaxation and stress relief at our Best Balinese Massage Center. Traditional healing techniques for ultimate wellness.',
  keywords: 'Best Balinese Massage, Best Balinese Massage Service, balinese massage center, traditional massage, spa therapy',
  openGraph: {
    title: 'Best Balinese Massage Center: Tranquil Bliss',
    description: 'Experience unparalleled relaxation and stress relief at our Best Balinese Massage Center.',
    images: [{ url: 'https://www.riverdayspa.com/images/balinese-massage-bangalore.jpg' }],
    url: 'https://www.riverdayspa.com/best-balinese-massage-center',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Balinese Massage Center: Tranquil Bliss',
    description: 'Experience traditional Balinese massage therapy for ultimate relaxation.',
    images: ['https://www.riverdayspa.com/images/balinese-massage-bangalore.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-balinese-massage-center'
  }
}

export default function BestBalineseMassageCenter() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BalineseMassagePage />
    </>
  )
}