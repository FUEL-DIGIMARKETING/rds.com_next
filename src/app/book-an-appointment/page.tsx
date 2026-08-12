import { Metadata } from 'next'
import BookingPage from '@/components/BookingPage'

export const metadata: Metadata = {
  title: 'Contact us - Luxury Spa in Chennai',
  description: 'Get in touch with Luxury Spa in Chennai for relaxing massages & excellent wellness therapies. Call or visit us for bookings & inquiries.',
  keywords: 'Chennai Body Massage Centre',
  openGraph: {
    title: 'Contact us - Luxury Spa in Chennai',
    description: 'Get in touch with Luxury Spa in Chennai for relaxing massages & excellent wellness therapies. Call or visit us for bookings & inquiries.',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/book-spa-service-appointment'
  }
}

export default function Page() {
  return <BookingPage />
}