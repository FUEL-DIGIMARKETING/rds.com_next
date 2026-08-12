import HomePage from '@/components/HomePage'
import Link from 'next/link'
import { Metadata } from 'next'
import dbConnect from '@/lib/mongodb'
import Blog from '@/models/Blog'

// Get recent blogs for homepage
async function getRecentBlogs() {
  try {
    await dbConnect()
    const blogs = await Blog.find({ status: 'published' })
      .populate('authorId', 'username')
      .sort({ publishedAt: -1 })
      .limit(3)
      .lean()

    return JSON.parse(JSON.stringify(blogs))
  } catch (error) {
    return []
  }
}
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "River Salon and Day Spa",
  "image": "https://www.riverdayspa.com/images/river-salon-and-day-spa.avif",
  "@id": "https://www.riverdayspa.com/#localbusiness",
  "url": "https://www.riverdayspa.com",
  "telephone": "82878 11111",
  "priceRange": "2500 starts",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "New No.7A, Old No. 2/4, 1st Floor, Tamil Salai, Egmore",
    "addressLocality": "Chennai",
    "postalCode": "600008",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.0731418,
    "longitude": 80.2559886
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Wednesday",
      "Tuesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "22:00"
  },
  "sameAs": [
    "https://www.youtube.com/channel/UC3wVeYQk7uoA85Myg-p63vw",
    "https://instagram.com/river_salon_day_spa",
    "https://twitter.com/day_spa26918",
    "https://www.facebook.com/riverdayspachennai/"
  ]
}

export const metadata: Metadata = {
  title: 'Best Spa in Chennai - Enrich your Health with Our Services',
  description: 'Riverdayspa™ is one of the Best Spa in Chennai. We offer quality and professional massage therapy all over the bustling cities of Tamil Nadu and Bangalore.',
  keywords: 'River Day Spa, body massage Chennai, spa treatments, wellness center, couples massage, ayurvedic massage',

  openGraph: {
    title: 'River Day Spa - Best Body Massage & Wellness Center in Chennai',
    description: 'Riverdayspa™ is one of the Best Spa in Chennai. We offer quality and professional massage therapy all over the bustling cities of Tamil Nadu and Bangalore.',
    images: [{ url: '/images/river-salon-and-day-spa.avif' }],
    url: 'https://www.riverdayspa.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'River Day Spa - Best Body Massage & Wellness Center',
    description: 'Riverdayspa™ is one of the Best Spa in Chennai. We offer quality and professional massage therapy all over the bustling cities of Tamil Nadu and Bangalore.',
    images: ['/images/river-salon-and-day-spa.avif'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com'
  }
}

export default async function Home() {
  const recentBlogs = await getRecentBlogs()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <meta name="google-site-verification" content="qr_KRgwKd7Rvv7gnH1CyQL-j6aaRGow5_5DjNxx7lmQ" />
      <HomePage recentBlogs={recentBlogs} />
    </>
  )
}