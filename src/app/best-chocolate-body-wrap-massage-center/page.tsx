import { Metadata } from 'next';
import ChocolateBodyWrapPage from '@/components/ChocolateBodyWrapPage';
const structuredData = {
   "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Body Wrap massage",
      "item": "https://www.riverdayspa.com/best-body-wrap-massage-spa"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Chocolate Body Wrap Massage",
      "item": "https://www.riverdayspa.com/best-chocolate-body-wrap-massage-center"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Chocolate Body Wrap Massage | Reveal Your Inner Glow',
  description: 'Experience indulgence at Choco-Glow Retreat with our luxurious Best Chocolate Body Wrap Massage Center. Relax and rejuvenate today!"',
  keywords: 'Chocolate Body Wrap Massage in Chennai, Chocolate Body Wrap, Best Body Wrap Center',
  openGraph: {
    title: 'Chocolate Body Wrap Massage | Reveal Your Inner Glow',
    description: 'Indulge in our luxurious chocolate body wrap massage. Experience deep moisturization, antioxidant benefits, and ultimate relaxation at River Salon and Day Spa.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chocolate Body Wrap Massage | Reveal Your Inner Glow',
    description: 'Indulge in our luxurious chocolate body wrap massage. Experience deep moisturization, antioxidant benefits, and ultimate relaxation at River Salon and Day Spa.',
  },

};

export default function ChocolateBodyWrapMassageCenter() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ChocolateBodyWrapPage />
    </>
  )
}