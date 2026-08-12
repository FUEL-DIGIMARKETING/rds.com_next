import { Metadata } from 'next';
import ChocolateScrubPage from '@/components/ChocolateScrubPage';
const structuredData = {
   "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "body scrub massage",
      "item": "https://www.riverdayspa.com/best-body-scrub-massage-center"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Chocolate Body Scrub",
      "item": "https://www.riverdayspa.com/best-chocolate-body-scrub-massage-center"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Best Chocolate Body Scrub Massage Center',
  description: 'Discover the best chocolate body scrub massage center for a luxurious retreat. Indulge in ultimate relaxation and rejuvenation today.',
  keywords: 'Chocolate Scrub Body Massage in Coimbatore, Chocolate Body Scrub in Bangalore',
  openGraph: {
    title: 'Best Chocolate Body Scrub Massage Center ',
    description: 'Discover the best chocolate body scrub massage center for a luxurious retreat. Indulge in ultimate relaxation and rejuvenation today.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Chocolate Body Scrub Massage Center',
    description: 'Discover the best chocolate body scrub massage center for a luxurious retreat. Indulge in ultimate relaxation and rejuvenation today.',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/best-chocolate-body-scrub-massage-center'
  }
};

export default function ChocolateBodyScrubMassageCenter() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ChocolateScrubPage />
    </>
  )
}