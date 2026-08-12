import type { Metadata } from 'next'
import FemaleMassageTherapistPage from '@/components/FemaleMassageTherapistPage'

export const metadata: Metadata = {
  title: 'Female Massage Therapist Jobs | Join Our Team Today!',
  description: 'We are Looking for the professional Female Massage Therapist Job in Riverdayspa™. For More Details Visit our website',
  keywords: 'female massage therapist jobs, spa jobs, massage therapist career, River Day Spa jobs, Chennai massage jobs',
  openGraph: {
    title: 'Female Massage Therapist Jobs | Join Our Team Today!',
    description: 'We are Looking for the professional Female Massage Therapist Job in Riverdayspa™. For More Details Visit our website',
    url: 'https://www.riverdayspa.com/female-massage-therapist-jobs',
    siteName: 'River Day Spa',
    images: [
      {
        url: 'https://www.riverdayspa.com/asset/female.jpg',
        width: 1200,
        height: 630,
        alt: 'Female Massage Therapist Jobs at River Day Spa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Female Massage Therapist Jobs | Join Our Team Today!',
    description: 'We are Looking for the professional Female Massage Therapist Job in Riverdayspa™. For More Details Visit our website',
    images: ['https://www.riverdayspa.com/asset/female.jpg'],
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
    canonical: 'https://www.riverdayspa.com/female-massage-therapist-jobs'
  }
}

export default function Page() {
  return <FemaleMassageTherapistPage />
}