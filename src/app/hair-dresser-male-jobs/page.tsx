import type { Metadata } from 'next'
import HairDresserPage from '@/components/HairDresserPage'

export const metadata: Metadata = {
  title: 'Hair Dresser Male Jobs | Join Our Team Today!',
  description: 'We are Looking for professional Hair Dresser Male Jobs in Riverdayspa™. For More Details Visit our website',
  keywords: 'hair dresser jobs, salon hair stylist, barber jobs, River Day Spa jobs, Chennai hair dresser jobs',
  openGraph: {
    title: 'Hair Dresser Male Jobs | Join Our Team Today!',
    description: 'We are Looking for professional Hair Dresser Male Jobs in Riverdayspa™. For More Details Visit our website',
    url: 'https://www.riverdayspa.com/hair-dresser-male-jobs',
    siteName: 'River Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/asset/hairdresser.jpg',
        width: 1200,
        height: 630,
        alt: 'Hair Dresser Jobs at River Day Spa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Dresser Male Jobs | Join Our Team Today!',
    description: 'We are Looking for professional Hair Dresser Male Jobs in Riverdayspa™. For More Details Visit our website',
    images: ['https://www.riverdayspa.com/asset/hairdresser.jpg'],
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
    canonical: 'https://www.riverdayspa.com/hair-dresser-male-jobs'
  }
}

export default function Page() {
  return <HairDresserPage />
}