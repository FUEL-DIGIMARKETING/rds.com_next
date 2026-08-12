import type { Metadata } from 'next'
import ReceptionistPage from '@/components/ReceptionistPage'

export const metadata: Metadata = {
  title: 'Receptionist Jobs Male/Female | Join Our Team Today!',
  description: 'We are Looking for professional Receptionist Jobs Male/Female in Riverdayspa™. For More Details Visit our website',
  keywords: 'receptionist jobs, spa receptionist, front desk jobs, River Day Spa jobs, Chennai receptionist jobs',
  openGraph: {
    title: 'Receptionist Jobs Male/Female | Join Our Team Today!',
    description: 'We are Looking for professional Receptionist Jobs Male/Female in Riverdayspa™. For More Details Visit our website',
    url: 'https://www.riverdayspa.com/receptionist-male-female-jobs',
    siteName: 'River Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/asset/receptionist.jpg',
        width: 1200,
        height: 630,
        alt: 'Receptionist Jobs at River Day Spa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Receptionist Jobs Male/Female | Join Our Team Today!',
    description: 'We are Looking for professional Receptionist Jobs Male/Female in Riverdayspa™. For More Details Visit our website',
    images: ['https://www.riverdayspa.com/asset/receptionist.jpg'],
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
    canonical: 'https://www.riverdayspa.com/receptionist-male-female-jobs'
  }
}

export default function Page() {
  return <ReceptionistPage />
}