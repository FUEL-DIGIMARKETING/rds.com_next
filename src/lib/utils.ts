import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export function generateMetaDescription(content: string, maxLength: number = 160): string {
  // Remove HTML tags and extra whitespace
  const cleanContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  return truncateText(cleanContent, maxLength)
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '')
  
  // Format as +91 XXXXX XXXXX for Indian numbers
  if (digits.length === 10) {
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`
  }
  
  if (digits.length === 12 && digits.startsWith('91')) {
    return `+${digits.slice(0, 2)} ${digits.slice(2, 7)} ${digits.slice(7)}`
  }
  
  return phone
}

export function generateStructuredData(type: 'LocalBusiness' | 'BlogPosting' | 'Service', data: any) {
  const baseStructure = {
    "@context": "https://schema.org",
    "@type": type,
  }

  switch (type) {
    case 'LocalBusiness':
      return {
        ...baseStructure,
        name: data.name || "River Salon and Day Spa",
        image: data.image || "https://www.riverdayspa.com/assets/river-salon-and-day-spa.webp",
        url: data.url || "https://www.riverdayspa.com",
        telephone: data.telephone || "82878 11111",
        address: {
          "@type": "PostalAddress",
          streetAddress: data.streetAddress || "New No.7A, Old No 2/4 1st Floor, Tamil Salai, Egmore",
          addressLocality: data.city || "Chennai",
          postalCode: data.postalCode || "600008",
          addressCountry: "IN"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: data.latitude || 13.07555715319413,
          longitude: data.longitude || 80.25775016931712
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "10:00",
          closes: "22:00"
        },
        priceRange: "₹₹",
        servesCuisine: "Spa Services"
      }

    case 'BlogPosting':
      return {
        ...baseStructure,
        headline: data.title,
        description: data.description,
        image: data.image,
        author: {
          "@type": "Organization",
          name: "River Day Spa"
        },
        publisher: {
          "@type": "Organization",
          name: "River Day Spa",
          logo: {
            "@type": "ImageObject",
            url: "https://www.riverdayspa.com/assets/river-salon-and-day-spa.webp"
          }
        },
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": data.url
        }
      }

    case 'Service':
      return {
        ...baseStructure,
        name: data.name,
        description: data.description,
        provider: {
          "@type": "LocalBusiness",
          name: "River Salon and Day Spa"
        },
        areaServed: data.areaServed || ["Chennai", "Bangalore", "Coimbatore", "Vellore", "Trichy", "Tirupur"],
        serviceType: data.serviceType || "Spa Services"
      }

    default:
      return baseStructure
  }
}

export function getCanonicalUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.riverdayspa.com'
  return `${baseUrl}${path}`
}