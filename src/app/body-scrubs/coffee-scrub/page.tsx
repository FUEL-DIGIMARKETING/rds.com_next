import { Metadata } from 'next'
import CoffeeScrubPage from '@/components/CoffeeScrubPage'

export const metadata: Metadata = {
  title: 'Revitalize Coffee Scrub Massage Spa | Premier Spa Experience',
  description: 'Discover the ultimate coffee scrub massage spa. Energize and refresh with our revitalizing coffee-infused treatments for glowing skin.',
  keywords: 'Best Coffee Scrub Massage in Coimbatore, Coffee Scrub Massage in Chennai, coffee body scrub, energizing spa treatment, skin exfoliation',
  openGraph: {
    title: 'Revitalize Coffee Scrub Massage Spa | Premier Spa Experience',
    description: 'Discover the ultimate coffee scrub massage spa. Energize and refresh with our revitalizing coffee-infused treatments for glowing skin.',
    images: [
      {
        url: 'https://www.riverdayspa.com/asset/best-coffee-body-scrub-massage-bangalore.jpg',
        width: 1200,
        height: 630,
        alt: 'Coffee Body Scrub Massage at River Salon and Day Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revitalize Coffee Scrub Massage Spa | Premier Spa Experience',
    description: 'Discover the ultimate coffee scrub massage spa. Energize and refresh with our revitalizing coffee-infused treatments for glowing skin.',
    images: ['https://www.riverdayspa.com/asset/best-coffee-body-scrub-massage-bangalore.jpg'],
  },
}

export default function Page() {
  return <CoffeeScrubPage />
}