import ThaiBodyMassagePage from '@/components/ThaiBodyMassagePage'
import { Metadata } from 'next'

// SEO tags taken directly from front1809/src/massage/Thai_Body_Massage.jsx Helmet component
export const metadata: Metadata = {
  title: 'Best Thai Body Massage Center: Thai Bliss for Wellness',
  description: 'Experience the Best Thai body massage center with expert techniques that rejuvenate and relax, offering unparalleled bliss and relief..',
  keywords: 'Thai Massage in Chennai, Best Thai Massage in Chennai',
  openGraph: {
    title: 'Best Thai Body Massage Center: Thai Bliss for Wellness',
    description: 'Experience the Best Thai body massage center with expert techniques that rejuvenate and relax, offering unparalleled bliss and relief..',
    images: [{ url: 'https://www.riverdayspa.com/images/best-thai-massage-in-chennai.jpeg' }],
    url: 'https://www.riverdayspa.com/best-thai-body-massage-center',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Thai Body Massage Center: Thai Bliss for Wellness',
    description: 'Experience the Best Thai body massage center with expert techniques that rejuvenate and relax',
    images: ['https://www.riverdayspa.com/images/best-thai-massage-in-chennai.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-thai-body-massage-center'
  }
}

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
    "name": "Thai Body Massage",
    "item": "https://www.riverdayspa.com/best-thai-body-massage-center"  
  }]
}

export default function BestThaiBodyMassageCenter() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ThaiBodyMassagePage />
    </>
  )
}