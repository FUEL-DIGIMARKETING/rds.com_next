export interface Service {
  title: string
  description: string
  image: string
  link: string
  icon?: string
}

export interface GalleryItem {
  title: string
  description: string
  image: string
  alt: string
  link?: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Location {
  name: string
  address: string
  phone: string
  href: string
}

export interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  noIndex?: boolean
}