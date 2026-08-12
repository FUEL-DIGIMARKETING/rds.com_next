import FootReflexologyPage from '@/components/FootReflexologyPage'
import { Metadata } from 'next'

// SEO data from front1809/src/massage/Foot_reflexology.jsx
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
    "name": "Foot Reflexology Massage",
    "item": "https://www.riverdayspa.com/best-foot-reflexology-massage"  
  }]
}

// SEO metadata from front1809 Helmet component
export const metadata: Metadata = {
  title: 'Best Foot Reflexology Massage for Total Relaxation',
  description: 'Experience unparalleled relaxation with our best foot reflexology massage, designed to rejuvenate your mind and body through expert pressure point therapy.',
  keywords: 'Best Foot Massage Chennai, Foot Massage in Chennai, foot reflexology, pressure point therapy, foot spa',
  openGraph: {
    title: 'Best Foot Reflexology Massage for Total Relaxation',
    description: 'Experience unparalleled relaxation with our best foot reflexology massage, designed to rejuvenate your mind and body.',
    images: [{ url: 'https://www.riverdayspa.com/images/foot-reflexology-in-coimbatore.jpg' }],
    url: 'https://www.riverdayspa.com/best-foot-reflexology-massage',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Foot Reflexology Massage for Total Relaxation',
    description: 'Experience professional foot reflexology therapy for ultimate relaxation and wellness.',
    images: ['https://www.riverdayspa.com/images/foot-reflexology-in-coimbatore.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-foot-reflexology-massage'
  }
}

export default function BestFootReflexologyMassage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <FootReflexologyPage />
    </>
  )
}