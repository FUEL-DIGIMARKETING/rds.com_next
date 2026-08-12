import { Metadata } from 'next'
import BookSpaServicePage from '@/components/BookSpaServicePage'

export const metadata: Metadata = {
  title: 'Book Spa Service Appointment - River Day Spa | Premium Wellness Services',
  description: 'Book your spa service appointment at River Day Spa. Choose from our wide range of premium massage, body treatments, and wellness services. Experience luxury and relaxation.',
  keywords: 'book spa appointment, spa services, massage booking, wellness treatments, River Day Spa, spa packages',
  openGraph: {
    title: 'Book Spa Service Appointment - River Day Spa',
    description: 'Book your spa service appointment at River Day Spa. Choose from our wide range of premium massage, body treatments, and wellness services.',
    images: [
      {
        url: '/images/book-spa-appointment.jpg',
        width: 1200,
        height: 630,
        alt: 'Book Spa Service Appointment at River Day Spa',
      },
    ],
    url: 'https://www.riverdayspa.com/book-spa-service-appointment',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Spa Service Appointment - River Day Spa',
    description: 'Book your spa service appointment at River Day Spa. Choose from our wide range of premium massage, body treatments, and wellness services.',
    images: ['/images/book-spa-appointment.jpg'],
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/book-spa-service-appointment'
  }
}

export default function Page() {
  return <BookSpaServicePage />
}