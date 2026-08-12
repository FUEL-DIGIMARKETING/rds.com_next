'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { handleImageError, getFallbackImage } from '@/utils/imageUtils'

interface ImageWithFallbackProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  fallbackSrc?: string
  onError?: () => void
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  fallbackSrc,
  onError
}) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      const newSrc = fallbackSrc || getFallbackImage()
      setImgSrc(newSrc)
      onError?.()
    }
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      loading="lazy"
      quality={85}
    />
  )
}

export default ImageWithFallback