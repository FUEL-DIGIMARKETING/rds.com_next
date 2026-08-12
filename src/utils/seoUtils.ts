// SEO utility functions for images

export const generateSEOImageAlt = (imagePath: string, locationCity: string): string => {
  // Extract filename without extension
  const filename = imagePath.split('/').pop()?.replace(/\.[^/.]+$/, '') || ''
  
  // Convert filename to readable text
  const readableText = filename
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  
  // Capitalize first letter of each word
  const capitalizedText = readableText
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  return `${capitalizedText} at ${locationCity} - River Day Spa`
}

export const generateImageSchema = (imageSrc: string, alt: string, locationCity: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": imageSrc,
    "name": alt,
    "description": alt,
    "contentUrl": imageSrc,
    "author": {
      "@type": "Organization",
      "name": "River Day Spa"
    },
    "copyrightHolder": {
      "@type": "Organization", 
      "name": "River Day Spa"
    },
    "locationCreated": {
      "@type": "Place",
      "name": locationCity
    }
  }
}

export const addImageMetaTags = (imageSrc: string, alt: string) => {
  // Add meta tags for better SEO
  const metaTags = [
    { property: 'og:image', content: imageSrc },
    { property: 'og:image:alt', content: alt },
    { name: 'twitter:image', content: imageSrc },
    { name: 'twitter:image:alt', content: alt }
  ]
  
  metaTags.forEach(tag => {
    const existingTag = document.querySelector(`meta[${Object.keys(tag)[0]}="${Object.values(tag)[0]}"]`)
    if (!existingTag) {
      const metaTag = document.createElement('meta')
      Object.entries(tag).forEach(([key, value]) => {
        metaTag.setAttribute(key, value)
      })
      document.head.appendChild(metaTag)
    }
  })
}