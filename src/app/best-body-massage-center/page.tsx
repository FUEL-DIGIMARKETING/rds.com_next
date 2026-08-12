import MassagePage from '@/components/MassagePage'
import { Metadata } from 'next'

// SEO data from front1809/src/spalocation/Egmore.jsx
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
    "name": "About Us",
    "item": "https://www.riverdayspa.com/best-massage-spa-in-chennai/"  
  }]
}

// SEO metadata from front1809 Helmet component
export const metadata: Metadata = {
  title: 'Best Body Massage Center: Treat Your Body and  Soul',
  description: 'Discover the best body massage center with our curated selection of treatments, designed to rejuvenate and balance your body and soul.',
  keywords: 'Best Body Massage Center, Best Massage Center in Chennai ',
  openGraph: {
    title: 'Best Body Massage Center: Treat Your Body and  Soul',
    description: 'Discover the best body massage center with our curated selection of treatments, designed to rejuvenate and balance your body and soul.',
    images: [{ url: 'https://www.riverdayspa.com/assets/chennai-body-massage-centre.jpg' }],
    url: 'https://www.riverdayspa.com/best-body-massage-center',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Body Massage Center: Treat Your Body and  Soul',
    description: 'Discover the best body massage center with our curated selection of treatments, designed to rejuvenate and balance your body and soul.',
    images: ['https://www.riverdayspa.com/assets/chennai-body-massage-centre.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-body-massage-center'
  }
}

export default function BestBodyMassageCenter() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <MassagePage />
    </>
  )
}