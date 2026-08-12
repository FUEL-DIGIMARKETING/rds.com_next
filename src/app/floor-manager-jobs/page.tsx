import type { Metadata } from 'next'
import FloorManagerPage from '@/components/FloorManagerPage'

export const metadata: Metadata = {
  title: 'Floor Manager Jobs | Join Our Team Today!',
  description: 'We are Looking for an Experienced Floor Manager Job in Riverdayspa™. For More Details visit our website',
  keywords: 'floor manager jobs, spa manager jobs, salon manager career, River Day Spa jobs, Chennai manager jobs',
  openGraph: {
    title: 'Floor Manager Jobs | Join Our Team Today!',
    description: 'We are Looking for an Experienced Floor Manager Job in Riverdayspa™. For More Details visit our website',
    url: 'https://www.riverdayspa.com/floor-manager-jobs',
    siteName: 'River Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/asset/floor.jpg',
        width: 1200,
        height: 630,
        alt: 'Floor Manager Jobs at River Day Spa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Floor Manager Jobs | Join Our Team Today!',
    description: 'We are Looking for an Experienced Floor Manager Job in Riverdayspa™. For More Details visit our website',
    images: ['https://www.riverdayspa.com/asset/floor.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/floor-manager-jobs'
  }
}

export default function Page() {
  return <FloorManagerPage />
}