import type { Metadata } from 'next'
import HousekeepingPage from '@/components/HousekeepingPage'

export const metadata: Metadata = {
  title: 'Housekeeping Jobs Male/Female | Join Our Team Today!',
  description: 'We are Looking for professional Housekeeping Jobs Male/Female in Riverdayspa™. For More Details Visit our website',
  keywords: 'housekeeping jobs, spa housekeeping, cleaning jobs, River Day Spa jobs, Chennai housekeeping jobs',
  openGraph: {
    title: 'Housekeeping Jobs Male/Female | Join Our Team Today!',
    description: 'We are Looking for professional Housekeeping Jobs Male/Female in Riverdayspa™. For More Details Visit our website',
    url: 'https://www.riverdayspa.com/housekeeping-male-female-jobs',
    siteName: 'River Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/asset/housekeeping.jpg',
        width: 1200,
        height: 630,
        alt: 'Housekeeping Jobs at River Day Spa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Housekeeping Jobs Male/Female | Join Our Team Today!',
    description: 'We are Looking for professional Housekeeping Jobs Male/Female in Riverdayspa™. For More Details Visit our website',
    images: ['https://www.riverdayspa.com/asset/housekeeping.jpg'],
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
    canonical: 'https://www.riverdayspa.com/housekeeping-male-female-jobs'
  }
}

export default function Page() {
  return <HousekeepingPage />
}