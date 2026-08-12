import { Metadata } from 'next'
import ChocolateScrubPage from '@/components/ChocolateScrubPage'

export const metadata: Metadata = {
  title: 'Best Chocolate Body Scrub Massage Center | River Salon and Day Spa',
  description: 'Discover the best chocolate body scrub massage center for a luxurious retreat. Indulge in ultimate relaxation and rejuvenation today.',
  keywords: 'Chocolate Scrub Body Massage in Coimbatore, Chocolate Body Scrub in Bangalore, chocolate body scrub, luxury spa treatment, skin exfoliation',
  openGraph: {
    title: 'Best Chocolate Body Scrub Massage Center',
    description: 'Discover the best chocolate body scrub massage center for a luxurious retreat. Indulge in ultimate relaxation and rejuvenation today.',
    images: [
      {
        url: 'https://www.riverdayspa.com/asset/best-chocolate-body-scrub-massage-chennai.jpg',
        width: 1200,
        height: 630,
        alt: 'Chocolate Body Scrub Massage at River Salon and Day Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Chocolate Body Scrub Massage Center',
    description: 'Discover the best chocolate body scrub massage center for a luxurious retreat. Indulge in ultimate relaxation and rejuvenation today.',
    images: ['https://www.riverdayspa.com/asset/best-chocolate-body-scrub-massage-chennai.jpg'],
  },
}

export default function Page() {
  return <ChocolateScrubPage />
}