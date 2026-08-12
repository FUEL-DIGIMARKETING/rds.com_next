'use client'

import React from 'react'
import Image from 'next/image'
import { getFallbackImage } from '@/utils/imageUtils'

interface SEOImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  onClick?: () => void
}

const SEOImage: React.FC<SEOImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  onClick
}) => {
  // Generate SEO-friendly filename from alt text
  const generateSEOFilename = (altText: string) => {
    return altText
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    // Create a temporary link with SEO-friendly filename
    const seoFilename = generateSEOFilename(alt)
    const link = document.createElement('a')
    link.href = src
    link.download = `${seoFilename}.jpg`
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    
    // Add structured data attributes for SEO
    link.setAttribute('data-image-alt', alt)
    link.setAttribute('data-image-src', src)
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    onClick?.()
  }

  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        quality={85}
        onClick={handleImageClick}
        onError={(e) => {
          const target = e.target as HTMLImageElement
          if (target.src !== getFallbackImage()) {
            target.src = getFallbackImage()
          }
        }}
        // SEO attributes
        itemProp="image"
        data-alt={alt}
        data-original-src={src}
      />
      
      {/* Hidden SEO metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "url": src,
            "name": alt,
            "description": alt,
            "contentUrl": src
          })
        }}
      />
    </div>
  )
}

export default SEOImage