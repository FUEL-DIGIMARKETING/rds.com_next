import type { Metadata } from 'next'
import GalleryPage from '@/components/GalleryPage'

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Gallery",
    "item": "https://www.riverdayspa.in/gallery/"
  }, {
    "@type": "ListItem",
    "position": 2,
    "name": "About Us",
    "item": "https://www.riverdayspa.com/best-massage-spa-in-chennai/"
  }]
}
export const metadata: Metadata = {
  title: 'Gallery - Best Massage Centre | River Day Spa Luxury Facilities',
  description: 'View our luxury spa facilities, massage rooms, and wellness center photos across Chennai, Coimbatore, Bangalore, Vellore, Tirupur & Trichy locations.',
  keywords: 'best massage centre gallery, luxury spa photos, massage rooms, wellness center, spa facilities, River Day Spa locations, Chennai spa, Coimbatore spa, Bangalore spa',
  openGraph: {
    title: 'Gallery - Best Massage Centre | River Day Spa Luxury Facilities',
    description: 'View our luxury spa facilities, massage rooms, and wellness center photos across Chennai, Coimbatore, Bangalore, Vellore, Tirupur & Trichy locations.',
    url: 'https://www.riverdayspa.com/gallery-best-massage-centre',
    siteName: 'River Day Spa',
    images: [
      {
        url: '/images/best-spa-in-chennai-river-day-spa.webp',
        width: 1200,
        height: 630,
        alt: 'River Day Spa Gallery - Best Massage Centre Facilities',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery - Best Massage Centre | River Day Spa Luxury Facilities',
    description: 'View our luxury spa facilities, massage rooms, and wellness center photos across Chennai, Coimbatore, Bangalore, Vellore, Tirupur & Trichy locations.',
    images: ['/images/best-spa-in-chennai-river-day-spa.webp'],
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
    canonical: 'https://www.riverdayspa.com/gallery-best-massage-centre'
  }
}

export default function Page() {
  return(
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <GalleryPage />
    </>
  ) 
}