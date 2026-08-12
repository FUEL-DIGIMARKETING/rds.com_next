'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import path from 'path'
import ImageWithFallback from './ImageWithFallback'
import CustomImage from './CustomImage'
import { handleImageError, getFallbackImage } from '@/utils/imageUtils'
import galleryData from '@/data/galleryData'

// Function to generate alt tag from image path
const generateAltFromImageName = (imagePath: string): string => {
  const fileName = imagePath.split('/').pop() || ''
  const nameWithoutExtension = fileName.replace(/\.(jpeg|jpg|png|webp)$/i, '')
  return nameWithoutExtension
}

// Old external gallery data - now replaced with local images
// const oldGalleryData = [
//   {
//     city: "Chennai",
//     images: [
//       "https://www.riverdayspa.com/assets/chennai/ayurvedic-massage-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/best-body-scrub-massage-in-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/best-body-spa-in-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/best-couple-spa-in-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/best-foot-massage-center- chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/best-oil-massage-in-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/best-Spa-in-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/best-thai-spa-in-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/body-massage-centre-in-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/body-scrub- massage-in-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/body-spa-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/body-spa-in-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/chennai-body- massage-centre.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/chennai-massage-centre.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/chennai-spa-centre.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/chennai-spa-massage-centre.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/couple-massage-spa-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/couple-spa-in-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/deep-tissue-massage-in-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/head-massage-center-in-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/kerala-ayurvedic-massage-in-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/massage-centre-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/massage-centre-egmore.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/massage-centre-in-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/couple-massage-spa-in-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/spa-in-chennai-egmore.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/swedish-massage-chennai.jpeg",
//       "https://www.riverdayspa.com/assets/chennai/thai-spa-in-chennai.jpeg",
//     ],
//   },
//   {
//     city: "Coimbatore - RS Puram, Elite",
//     images: [
//       "https://www.riverdayspa.com/asset/coimbatore/beauty-parlor-in-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/best-balinese-massage-in-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/best-beauty-parlour-in-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/best-body-massage-in-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/best-couple-spa-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/best-hair-salon-in-coimbatore-for-ladies.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/best-massage-center-in-coimbatore-river-day-spa2.jpg",
//       "https://www.riverdayspa.com/asset/coimbatore/best-massage-centre-in-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/best-parlour-in-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/best-spa-in-coimbatore-river-day-spa7.jpg",
//       "https://www.riverdayspa.com/asset/coimbatore/best-spas-in-coimbatore-river-day-spa7.jpg",
//       "https://www.riverdayspa.com/asset/coimbatore/body-massage-coimbatore-river-day-spa4.jpg",
//       "https://www.riverdayspa.com/asset/coimbatore/body-massage-in-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/coimbatore-spa-river-day-spa-2.webp",
//       "https://www.riverdayspa.com/asset/coimbatore/couple-massage-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/couple-massage-in-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/couple-massage-spa-in-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/couple-spa-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/couple-spas-in-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/hair-salon-in-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/massage-in-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/parlour-in-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/salon-in-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/spa-center-in-coimbatore-river-day-spa2.jpg",
//       "https://www.riverdayspa.com/asset/coimbatore/spas-in-coimbatore.jpeg",
//       "https://www.riverdayspa.com/asset/coimbatore/best-rs-puram-couple-spa-coimbatore.webp",
//       "https://www.riverdayspa.com/asset/coimbatore/couple-spa-coimbatore.webp",
//       "https://www.riverdayspa.com/asset/coimbatore/rs-puram-couple-massage-coimbatore.jpg",
//       "https://www.riverdayspa.com/asset/coimbatore/rs-puram-couple-spa-coimbatore.webp",
//       "https://www.riverdayspa.com/asset/coimbatore/rs-puram-couple-spa-in-coimbatore.jpg",
//     ],
//   },
//   {
//     city: "Coimbatore - RS Puram",
//     images: [
//       "https://www.riverdayspa.com/asset/coimbatore-rspuram/bali-massage-coimbatore.webp",
//       "https://www.riverdayspa.com/asset/coimbatore/massage-center-in-coimbatore-river-day-spa2.jpg",
//       "https://www.riverdayspa.com/asset/coimbatore/massage-in-coimbatore-river-day-spa5.jpg",
//       "https://www.riverdayspa.com/asset/coimbatore-rspuram/best-bali-massage-coimbatore.jpg",
//       "https://www.riverdayspa.com/asset/coimbatore-rspuram/best-coimbatore-massage-spa.webp",
//       "https://www.riverdayspa.com/asset/coimbatore-rspuram/best-massage-center-in-coimbatore-rs-puram.jpg",
//       "https://www.riverdayspa.com/asset/coimbatore-rspuram/best-massage-coimbatore.webp",
//       "https://www.riverdayspa.com/asset/coimbatore-rspuram/best-spa-in-coimbatore-female-to-male.webp",
//       "https://www.riverdayspa.com/asset/coimbatore-rspuram/best-spa-in-rs-puram.webp",
//       "https://www.riverdayspa.com/asset/coimbatore-rspuram/best-spas-in-coimbatore-river-day-spa7.jpg",
//       "https://www.riverdayspa.com/asset/coimbatore-rspuram/body-massage-coimbatore-in-rs-puram.jpg",
//       "https://www.riverdayspa.com/asset/coimbatore-rspuram/coimbatore-best-massage-spa.jpg",
//       "https://www.riverdayspa.com/asset/coimbatore-rspuram/massage-spa-in-rs-puram.jpg",
//       "https://www.riverdayspa.com/asset/coimbatore-rspuram/rs-puram-coimbatore-massage-spa.webp",
//       "https://www.riverdayspa.com/asset/coimbatore-rspuram/spa-center-in-coimbatore-rs-puram.jpg",
//       "https://www.riverdayspa.com/asset/coimbatore-rspuram/spa-in-coimbatore-female-to-male.jpg",
//       "https://www.riverdayspa.com/asset/coimbatore-rspuram/spa-in-rs-puram.webp",
//     ],
//   },
//   {
//     city: "Bangalore",
//     images: [
//       "https://www.riverdayspa.com/asset/spas-in-indiranagar.jpeg",
//       "https://www.riverdayspa.com/asset/best-spa-in-indiranagar.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/abhyanga-massage-in-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/bangalore-best-couples-massage.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/best-abhyanga-massage-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/best-balinese-massage-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/best-balinese-massage-in-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/best-bangalore-couples-massage.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/best-bangalore-massage-centre.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/best-body-massage-bangalore-indiranagar.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/best-body-massage-indiranagar.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/best-couple-massage-in-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/best-couple-massage-spa-in-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/best-couple-spa-in-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/best-luxury-spa-in-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/best-massage-spa-in-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/best-massage-spa-packages-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/best-spa-in-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/best-spas-in-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/best-sports-massage-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/body-massage-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/body-massage-in-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/body-spa-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/couple-massage-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/couple-massage-centre-in-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/couple-massage-spa-in-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/couple-spa-in-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/couple-spa-packages-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/massage-spa-centre-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/massage-spa-in-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/spa-in-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/spa-services-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/swedish-massage-in-bangalore.jpeg",
//       "https://www.riverdayspa.com/asset/bangalore/top-spa-in-bangalore.jpeg",
//     ],
//   },
//   {
//     city: "Vellore-Tollgate",
//     images: [
//       "https://www.riverdayspa.com/assets/vellore/best-body-massage-in-vellore-min.jpg",
//       "https://www.riverdayspa.com/assets/vellore/best-massage-center-in-vellore-min.jpg",
//       "https://www.riverdayspa.com/assets/vellore/best-massage-centre-in-vellore-min.jpg",
//       "https://www.riverdayspa.com/assets/vellore/best-massage-in-vellore-min.jpg",
//       "https://www.riverdayspa.com/assets/vellore/best-massage-spa-centre-in-vellore-min.jpg",
//       "https://www.riverdayspa.com/assets/vellore/best-massage-spa-in-vellore-min.jpeg",
//       "https://www.riverdayspa.com/assets/vellore/best-massage-spa-vellore-min.jpeg",
//       "https://www.riverdayspa.com/assets/vellore/body-massage-in-vellore-min.jpg",
//       "https://www.riverdayspa.com/assets/vellore/massage-center-in-vellore-min.jpg",
//       "https://www.riverdayspa.com/assets/vellore/massage-centre-vellore-min.jpg",
//       "https://www.riverdayspa.com/assets/vellore/massage-in-vellore-min.jpg",
//       "https://www.riverdayspa.com/assets/vellore/vellore-best-body-massage-centre-min.jpeg",
//       "https://www.riverdayspa.com/assets/vellore/spa-massage-in-vellore-min.jpeg",
//     ],
//   },
//   {
//     city: "Vellore-Katpadi",
//     images: [
//       "https://www.riverdayspa.com/assets/katpadi/ayurvedic-massage-in-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/best-couple-massage-centre-katpadi.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/best-couple-massage-in-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/best-couple-massage-spa-in-katpadi.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/best-couple-massage-spa-in-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/best-couple-massage-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/best-couple-spa-in-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/best-kerala-ayurvedic-massage-in-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/best-oil-massage-in-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/best-spa-massage-in-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/best-thai-massage-in-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/best-vellore-massage-centre-katpadi.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/best-vellore-spa-centre.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/best-vellore-body-massage-spa.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/body-massage-centre-in-katpadi.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/body-massage-spa-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/couple-massage-centre-katpadi.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/couple-massage-in-katpadi.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/couple-massage-in-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/couple-massage-spa-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/couple-massage-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/couple-spa-in-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/kerala-ayurvedic-massage-in-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/oil-massage-in-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/spa-massage-in-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/thai-massage-in-vellore.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/vellore-body-massage-spa.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/vellore-massage-centre-in-katpadi.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/vellore-massage-centre-katpadi.jpeg",
//       "https://www.riverdayspa.com/assets/katpadi/vellore-spa-centre.jpeg",
//     ],
//   },
//   {
//     city: "Vellore-Bypass",
//     images: [
//       "https://www.riverdayspa.com/asset/vellore-bypass/ayurveda-body-massage-centre-vellore.jpg",
//       "https://www.riverdayspa.com/asset/vellore-bypass/ayurvedic-massage-in-vellore.jpg",
//       "https://www.riverdayspa.com/asset/vellore-bypass/best-ayurveda-body-massage-centre-vellore.jpg",
//       "https://www.riverdayspa.com/asset/vellore-bypass/best-ayurvedic-massage-in-vellore.jpg",


//       "https://www.riverdayspa.com/asset/vellore-bypass/best-luxury-spa-in-vellore.png",
//       "https://www.riverdayspa.com/asset/vellore-bypass/best-massage-at-vellore.jpg",
//       "https://www.riverdayspa.com/asset/vellore-bypass/best-massage-center-in-vellore.png",

//       "https://www.riverdayspa.com/asset/vellore-bypass/best-massage-spa-in-vellore.jpg",
//       "https://www.riverdayspa.com/asset/vellore-bypass/best-massage-spa-vellore.jpg",
//       "https://www.riverdayspa.com/asset/vellore-bypass/best-spa-vellore.jpg",
//       "https://www.riverdayspa.com/asset/vellore-bypass/best-swedish-massage-in-vellore.jpg",
//       "https://www.riverdayspa.com/asset/vellore-bypass/best-thai-massage-spa-in-vellore.png",
//       "https://www.riverdayspa.com/asset/vellore-bypass/best-vellore-massage-spa.png",
//       "https://www.riverdayspa.com/asset/vellore-bypass/best-vellore-massage-spa-center.png",
//       "https://www.riverdayspa.com/asset/vellore-bypass/best-vellore-massage-spa-centre-in-bypass.jpg",
//       "https://www.riverdayspa.com/asset/vellore-bypass/couple-massage-in-vellore.png",
//       "https://www.riverdayspa.com/asset/vellore-bypass/couple-massage-spa-centre-in-Vellore.png",
//       "https://www.riverdayspa.com/asset/vellore-bypass/couple-spa-vellore.jpg",
//       "https://www.riverdayspa.com/asset/vellore-bypass/foot-massage-in-vellore.jpg",
//       "https://www.riverdayspa.com/asset/vellore-bypass/luxury-spa-in-vellore.png",
//       "https://www.riverdayspa.com/asset/vellore-bypass/massage-at-vellore.jpg",
//       "https://www.riverdayspa.com/asset/vellore-bypass/massage-center-in-vellore.png",
//       "https://www.riverdayspa.com/asset/vellore-bypass/moroccan-bath-massage-spa-in-vellore.png",
//       "https://www.riverdayspa.com/asset/vellore-bypass/moroccan-bath-massage-vellore.jpg",
//       "https://www.riverdayspa.com/asset/vellore-bypass/moroccan-massage-spa-vellore.png",
//       "https://www.riverdayspa.com/asset/vellore-bypass/swedish-massage-in-vellore.jpg",
//       "https://www.riverdayspa.com/asset/vellore-bypass/thai-massage-spa-in-vellore.jpg",
//       "https://www.riverdayspa.com/asset/vellore-bypass/top-spa-in-vellore.jpg",
//       "https://www.riverdayspa.com/asset/vellore-bypass/vellore-massage-spa-centre.png",
//     ],
//   },
//   {
//     city: "Tirupur",
//     images: [
//       "https://www.riverdayspa.com/asset/Tirupur/bali-spa-in-tirupur.jpeg",
//       "https://www.riverdayspa.com/asset/Tirupur/best-couple-massage-in-Tirupur.jpeg",
//       "https://www.riverdayspa.com/asset/Tirupur/best-couple-massage-spa-in-Tirupur.jpeg",
//       "https://www.riverdayspa.com/asset/Tirupur/best-luxury-spa-in-tirupur.jpeg",
//       "https://www.riverdayspa.com/asset/Tirupur/couple-massage-centre-in-Tirupur.jpeg",
//       "https://www.riverdayspa.com/asset/Tirupur/couple-massage-in-Tirupur.jpeg",
//       "https://www.riverdayspa.com/asset/Tirupur/couple-spa-in-Tirupur.jpeg",
//       "https://www.riverdayspa.com/asset/Tirupur/female-to-male-spa-in-tirupur.jpeg",
//       "https://www.riverdayspa.com/asset/Tirupur/luxury-spa-in-tirupur.jpeg",
//       "https://www.riverdayspa.com/asset/Tirupur/massage-centre-in-Tirupur.jpeg",
//       "https://www.riverdayspa.com/asset/Tirupur/best-massage-spa-in-tirupur.jpeg",
//     ],
//   },
//   {
//     city: "Trichy",
//     images: [
//       "https://www.riverdayspa.com/asset/trichy/ayurveda-massage-in-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/ayurveda-massage-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/best-ayurveda-massage-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/best-body-massage-spa-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/best-body-spa-in-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/best-deep-tissue-massage-in-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/best-female-to-male-spa-in-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/best-foot-reflexology-in-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/best-massage-center-in-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/best-spa-center-in-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/body-spa-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/deep-tissue-massage-in-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/female-to-male-spa-in-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/foot-reflexology-in-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/massage-center-in-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/massage-center-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/spa-center-in-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/spa-center-trichy.jpeg",
//       "https://www.riverdayspa.com/asset/trichy/trichy-spa-centre.jpeg",
//     ],
//   },
//   {
//     city: "Trichy-Rayapuram",
//     images: [
//       "/images/best-beauty-parlour.JPG",
//       "/images/best-balinese-massage.JPG",
//       "/images/best-hair-salon.JPG",
//       "/images/best-hair-cut-style-for-men.JPG",
//       "/images/body-massage-center.JPG",
//       "/images/best-men's-salon.JPG",
//       "/images/best-thai-massage.JPG",
//       "/images/couple-massage-centre.JPG",
//       "/images/massage-centre.JPG",
//       "/images/hair-style-cutting -for-men.JPG",
//       "/images/kerala-massage -centre.JPG",
//     ],
//   },
// ] // End of old external gallery data - now using local images from galleryData import

interface LocationCarouselProps {
  location: {
    city: string
    images: string[]
  }
  index: number
}

const LocationCarousel: React.FC<LocationCarouselProps> = ({ location, index }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`carousel-${index}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [index])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % location.images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [location.images.length])

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  const handleImageClick = (image: string, position: number) => {
    if (position === 0) {
      setSelectedImage(image)
      document.body.classList.add('modal-open')
    } else {
      setCurrentSlide(location.images.indexOf(image))
    }
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.classList.remove('modal-open')
  }

  return (
    <>
      {/* Location Title with Animation */}
      <div className="text-center mb-8 relative">
        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Large Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[120px] md:text-[180px] lg:text-[220px] font-black text-white/5 select-none leading-none">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Main Title */}
          <motion.p
            className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-black text-[#8D7B68] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {location.city}
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>

      {/* Curved 3D Property Carousel Section */}
      <section id={`carousel-${index}`} data-animate className="py-6 px-4 relative overflow-hidden">

        <div className={`max-w-7xl mx-auto relative z-10 transform transition-all duration-1000 ${isVisible[`carousel-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {/* Curved Carousel Container */}
          <div className="relative h-[400px] flex items-center justify-center perspective-1000">
            {/* Curved Cards Layout */}
            <div className="relative w-full h-full flex items-center justify-center">
              {location.images.map((image, imgIndex) => {
                const position = (imgIndex - currentSlide + location.images.length) % location.images.length;

                // Calculate curved positioning
                let translateX = 0;
                let translateY = 0;
                let translateZ = 0;
                let rotateY = 0;
                let scale = 1;
                let opacity = 1;
                let zIndex = 1;

                if (position === 0) {
                  // Center card
                  translateX = 0;
                  translateY = 0;
                  translateZ = 0;
                  rotateY = 0;
                  scale = 1.1;
                  opacity = 1;
                  zIndex = 10;
                } else if (position === 1) {
                  // Right card
                  translateX = 280;
                  translateY = 40;
                  translateZ = -120;
                  rotateY = -30;
                  scale = 0.85;
                  opacity = 0.8;
                  zIndex = 5;
                } else if (position === location.images.length - 1) {
                  // Left card
                  translateX = -280;
                  translateY = 40;
                  translateZ = -120;
                  rotateY = 30;
                  scale = 0.85;
                  opacity = 0.8;
                  zIndex = 5;
                } else if (position === 2) {
                  // Far right card
                  translateX = 480;
                  translateY = 80;
                  translateZ = -240;
                  rotateY = -40;
                  scale = 0.7;
                  opacity = 0.6;
                  zIndex = 2;
                } else if (position === location.images.length - 2) {
                  // Far left card
                  translateX = -480;
                  translateY = 80;
                  translateZ = -240;
                  rotateY = 40;
                  scale = 0.7;
                  opacity = 0.6;
                  zIndex = 2;
                } else {
                  // Hidden cards
                  translateX = 0;
                  translateY = 0;
                  translateZ = -400;
                  rotateY = 0;
                  scale = 0.5;
                  opacity = 0;
                  zIndex = 1;
                }

                return (
                  <div
                    key={imgIndex}
                    className="absolute w-72 h-80 transition-all duration-700 ease-out cursor-pointer transform-gpu"
                    style={{
                      transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      opacity,
                      zIndex
                    }}
                    onClick={() => handleImageClick(image, position)}
                  >
                    <div className="w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden relative group hover:shadow-3xl transition-all duration-500">
                      {/* Property Image */}
                      <CustomImage
                        src={image}
                        alt={generateAltFromImageName(image)}
                        width={300}
                        height={320}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        priority={position === 0}
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        {/* Category Badge */}
                        <span className="inline-block px-2 py-1 bg-green-600 text-white text-xs font-bold rounded-full mb-2 uppercase tracking-wide">
                          Spa Gallery
                        </span>

                        {/* Title */}
                        <p className="font-bold mb-1 text-lg leading-tight">
                          {location.city}
                        </p>

                        {/* Location */}
                        <div className="flex items-center text-sm opacity-90">
                          <span>River Day Spa</span>
                        </div>

                        {/* Image count (only for center card) */}
                        {position === 0 && (
                          <div className="flex items-center justify-between pt-2 mt-2 border-t border-white/20">
                            <span className="text-base font-bold">{location.images.length} Photos</span>
                            <span className="text-xs bg-white/20 px-2 py-1 rounded">Gallery</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Premium Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {location.images.map((_, imgIndex) => (
              <button
                key={imgIndex}
                onClick={() => goToSlide(imgIndex)}
                className={`transition-all duration-300 rounded-full ${imgIndex === currentSlide
                  ? 'w-8 h-3 bg-[#8D7B68] shadow-lg'
                  : 'w-3 h-3 bg-[#8D7B68]/50 hover:bg-[#8D7B68]/70'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-[9999]"
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
          }}
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10 bg-black/20 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={closeModal}
          >
            ×
          </button>
          <div
            className="w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <CustomImage
              src={selectedImage}
              alt={generateAltFromImageName(selectedImage)}
              width={1920}
              height={1080}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}

const GalleryPage = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  return (
    <main className="w-full overflow-x-hidden select-text bg-[#F8F5F0] pt-32">
      {/* Hero Section */}
      <header className="relative w-full h-[600px] overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('images/best-spa-in-chennai-river-day-spa.webp')",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-4xl sm:text-6xl font-bold text-white drop-shadow-2xl mb-4">
              River Day Spa Gallery
            </p>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our luxury spa facilities across multiple locations
            </p>
          </motion.div>
        </div>
      </header>

      {/* Gallery Sections */}
      <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16 relative bg-[#F8F5F0] text-[#3E3636] w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <motion.h1
              className="text-3xl lg:text-4xl font-bold text-[#8D7B68] mb-6"
              {...fadeUp}
            >
              Best Massage Centre for Ultimate Relaxation & Rejuvenation
            </motion.h1>
            <motion.p
              className="text-[#3E3636]/90 text-lg max-w-3xl mx-auto"
              {...fadeUp}
            >
              Discover the luxury and tranquility of River Day Spa across our multiple locations.
              Each facility is designed to provide you with the ultimate relaxation experience.
            </motion.p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mt-6" />
          </div>

          {/* Location Carousels */}
          <div className="space-y-8">
            {galleryData.map((location, index) => (
              <LocationCarousel
                key={location.city}
                location={location}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative w-full py-16 select-text bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/best-spa-in-chennai-river-day-spa.webp')"
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
          <div
            className="flex flex-col items-center justify-center p-8 md:p-12 rounded-3xl select-text"
            style={{
              background: 'linear-gradient(135deg, rgba(178, 178, 178, 0.26) 0%, rgba(174, 174, 174, 0.25) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 25px 45px rgba(0, 0, 0, 0.2)'
            }}
          >
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Experience Spa Luxury at Any Location
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">
              Visit any of our premium spa locations and indulge in world-class treatments.
              Each facility offers the same high standards of luxury, cleanliness, and professional service
              that River Day Spa is known for.
            </p>

            <motion.button
              className="bg-gradient-to-r from-green-600 to-green-400 text-white text-lg font-semibold py-4 px-12 rounded-full shadow-lg hover:from-green-500 hover:to-green-300 hover:shadow-green-400/50 transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="tel:+919500029234 ">📞 Book Your Visit</a>
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default GalleryPage