import MoroccanBathPageSEO from '@/components/MoroccanBathPageSEO'
import { Metadata } from 'next'
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
    "name": "Moroccan Bath",
    "item": "https://www.riverdayspa.com/best-moroccan-bath-massage-in-bangalore"  
  }]

}

// SEO tags taken directly from front1809/src/massage/moroccanbath.jsx Helmet component
export const metadata: Metadata = {
  title: 'Best Moroccan Bath Massage in Bangalore',
  description: 'Experience a luxurious Best Moroccan Bath Massage in Bangalore, combining deep cleansing and hydration with authentic techniques at River Day Spa.',
  keywords: 'Best Moroccan Bath in Bangalore, moroccan bath massage, hammam treatment, spa bangalore, deep cleansing',
  openGraph: {
    title: 'Best Moroccan Bath Massage in Bangalore',
    description: 'Experience a luxurious Best Moroccan Bath Massage in Bangalore, combining deep cleansing and hydration with authentic techniques.',
    images: [{ url: 'https://www.riverdayspa.com/images/best-moroccan-bath-massage-in-vellore.jpeg' }],
    url: 'https://www.riverdayspa.com/best-moroccan-bath-massage-in-bangalore',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Moroccan Bath Massage in Bangalore',
    description: 'Experience a luxurious Best Moroccan Bath Massage in Bangalore',
    images: ['https://www.riverdayspa.com/images/best-moroccan-bath-massage-in-vellore.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-moroccan-bath-massage-in-bangalore'
  }
}
export default function BestMoroccanBathBangalore() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <MoroccanBathPageSEO />
    </>
  )
}