'use client'

import Image from 'next/image'
import { useState } from 'react'

interface CustomImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  loading?: 'lazy' | 'eager'
  unoptimized?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
  style?: React.CSSProperties
  itemProp?: string
  fetchPriority?: 'high' | 'low' | 'auto'
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading = 'lazy',
  unoptimized = false,
  fill = false,
  sizes,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError,
  style,
  itemProp,
  fetchPriority,
  ...props
}) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Handle image load
  const handleLoad = () => {
    setImageLoaded(true)
    if (onLoad) onLoad()
  }

  // Handle image error
  const handleError = () => {
    setImageError(true)
    if (onError) onError()
  }

  // For local images, we want to serve them directly without Next.js optimization
  // to get clean URLs like /images/about/image.jpg instead of /_next/image?url=...
  const isLocalImage = src.startsWith('/images/')
  
  // Fix loading prop conflict: if priority is true, don't set loading
  const imageLoading = priority ? undefined : loading
  
  if (isLocalImage && !unoptimized) {
    // For local images, use unoptimized to get clean URLs
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        loading={imageLoading}
        unoptimized={true} // This ensures clean URLs for local images
        fill={fill}
        sizes={sizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={handleLoad}
        onError={handleError}
        style={style}
        itemProp={itemProp}
        fetchPriority={fetchPriority}
        {...props}
      />
    )
  }

  // For external images or when explicitly requesting optimization
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={imageLoading}
      unoptimized={unoptimized}
      fill={fill}
      sizes={sizes}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      onLoad={handleLoad}
      onError={handleError}
      style={style}
      itemProp={itemProp}
      fetchPriority={fetchPriority}
      {...props}
    />
  )
}

export default CustomImage