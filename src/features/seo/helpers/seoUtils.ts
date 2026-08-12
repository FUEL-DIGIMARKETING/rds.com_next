import { siteConfig } from '@/config/siteConfig'

export interface SEOData {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  noIndex?: boolean
}

export function generateMetadata(seoData: SEOData) {
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: seoData.canonical || siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: seoData.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: seoData.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.title,
      description: seoData.description,
      images: [seoData.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: !seoData.noIndex,
      follow: !seoData.noIndex,
      googleBot: {
        index: !seoData.noIndex,
        follow: !seoData.noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: seoData.canonical,
    },
  }
}