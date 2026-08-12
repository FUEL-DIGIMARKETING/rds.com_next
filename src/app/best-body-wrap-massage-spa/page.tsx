import { Metadata } from 'next';
import BodyWrapCenterPage from '@/components/BodyWrapCenterPage';
const structuredData = {
   "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Body Wrap massage",
      "item": "https://www.riverdayspa.com/best-body-wrap-massage-spa"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Best Body Wrap Massage Spa - Transform Your Skin Today',
  description: 'Experience the ultimate rejuvenation at our best body wrap massage spa, where luxurious treatments transform your skin and boost wellness.',
  keywords: 'Best Body Wrap Massage Center in Chennai, Best Body Wrap Massage Service in Bangalore',
  openGraph: {
    title: 'Best Body Wrap Massage Spa - Transform Your Skin Today',
    description: 'Experience the ultimate rejuvenation at our best body wrap massage spa, where luxurious treatments transform your skin and boost wellness.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Body Wrap Massage Spa - Transform Your Skin Today',
    description: 'Experience the ultimate rejuvenation at our best body wrap massage spa, where luxurious treatments transform your skin and boost wellness.',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-body-wrap-massage-spa'
  }
};

export default function BodyWrapMassageCenter() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BodyWrapCenterPage />
    </>
  )
}