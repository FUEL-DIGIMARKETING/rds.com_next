import type { Metadata } from 'next'
import BeauticianPage from '@/components/BeauticianPage'

export const metadata: Metadata = {
  title: 'Beautician Jobs Female/Male | Join Our Team Today!',
  description: 'We are Looking for professional Beautician Jobs Female/Male in Riverdayspa™. For More Details Visit our website',
  keywords: 'beautician jobs, spa beautician, beauty therapist jobs, River Day Spa jobs, Chennai beautician jobs',
  openGraph: {
    title: 'Beautician Jobs Female/Male | Join Our Team Today!',
    description: 'We are Looking for professional Beautician Jobs Female/Male in Riverdayspa™. For More Details Visit our website',
    url: 'https://www.riverdayspa.com/beautician-female-male-jobs',
    siteName: 'River Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/asset/beautician.jpg',
        width: 1200,
        height: 630,
        alt: 'Beautician Jobs at River Day Spa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beautician Jobs Female/Male | Join Our Team Today!',
    description: 'We are Looking for professional Beautician Jobs Female/Male in Riverdayspa™. For More Details Visit our website',
    images: ['https://www.riverdayspa.com/asset/beautician.jpg'],
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
    canonical: 'https://www.riverdayspa.com/beautician-female-male-jobs'
  }
}

export default function Page() {
  return <BeauticianPage />
}