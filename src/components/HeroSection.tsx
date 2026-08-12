'use client'

import React, { useEffect, useState } from "react"
import { motion } from 'framer-motion'
import Link from 'next/link';
import CustomImage from './CustomImage'


const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(800)
  const [isSmallHeight, setIsSmallHeight] = useState(false)
  const [isVerySmallHeight, setIsVerySmallHeight] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
      setIsSmallHeight(window.innerHeight < 860)
      setIsVerySmallHeight(window.innerHeight < 810)
    }

    setWindowHeight(window.innerHeight)
    setIsSmallHeight(window.innerHeight < 860)
    setIsVerySmallHeight(window.innerHeight < 810)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Calculate scroll progress for smooth transitions
  const scrollProgress = Math.min(scrollY / windowHeight, 1)
  const showSecondImage = scrollProgress > 0.1
  const showText = scrollProgress > 0.15

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* First Image */}
      <CustomImage
        src="/images/best-spa-in-chennai.webp"
        alt="best-spa-in-chennai"
        fill
        className={`object-cover transition-opacity duration-700 ${showSecondImage ? 'opacity-0' : 'opacity-100'}`}
        priority
        fetchPriority="high"
      />

      {/* Second Image */}
      <CustomImage
        src="/images/best-massage-in-chennai.webp"
        alt="best-massage-in-chennai"
        fill
        loading="lazy"
        className={`object-cover transition-opacity duration-700 ${showSecondImage ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Black overlay only for second image */}
      <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${showSecondImage ? 'opacity-70' : 'opacity-0'}`} />

      {/* Text overlay for first image */}
      <div className={`absolute inset-0 z-20 transition-opacity duration-700 ${showSecondImage ? 'opacity-0' : 'opacity-100'}`}>
        {/* Desktop Layout */}
        <div className="hidden md:flex pt-12 h-full">
          {/* Text Content - Left */}
          <div className="flex-1 flex items-center justify-center px-16 lg:px-24 xl:px-32 pt-32">
            <div className="text-left">
              <motion.p
                className="text-xl lg:text-3xl xl:text-3xl mb-6 lg:mb-8 font-light italic tracking-wide bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
                style={{ fontFamily: 'Lora, serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Luxury • Relaxation • Rejuvenation
              </motion.p>

              <motion.p
                className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Experience Pure Bliss and Rejuvenation at
              </motion.p>

              <motion.p
                className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-6 lg:mb-8 italic font-serif bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-clip-text text-transparent relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="inline-block animate-pulse">
                  <span className="animate-shine bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-clip-text text-transparent relative">
                    <span className="typing-animation">River Salon & Day Spa</span>
                  </span>
                </span>
              </motion.p>

              <motion.p
                className="text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed max-w-lg lg:max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Escape the everyday rush and step into a sanctuary of relaxation, beauty, and holistic wellness. Our expert therapists ensure every touch refreshes your mind, body, and soul.
              </motion.p>
            </div>
          </div>

          {/* Image Section - Right */}
          <div className="flex-1 flex items-end justify-center">
            <div className="w-[50vw] h-[50vh] lg:w-[45vw] lg:h-[70vh] xl:w-[42vw] xl:h-[80vh] 2xl:w-[40vw] 2xl:h-[85vh] relative">
              <CustomImage
                src="/images/hero1.png"
                alt="spa-in-chennai"
                fill
                className="object-cover"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </div>


        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col h-full">
          {/* Text Section - Top Half */}
          <div className={`flex-1 flex items-center justify-center px-6 ${isSmallHeight ? 'pt-40' : 'pt-48'}`}>
            <div className="text-center max-w-full">
              {!isVerySmallHeight && (
                <motion.p
                  className="text-[13px] max-h-[860px]:text-[10px] font-light mb-3 max-h-[860px]:mb-1 italic tracking-wide bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
                  style={{ fontFamily: 'Lora, serif' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  Luxury • Relaxation • Rejuvenation
                </motion.p>

              )}


              <motion.p
                className=" animate-shine text-[28px] max-h-[860px]:text-[22px] font-semibold mb-1 max-h-[860px]:mb-1 italic font-serif bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-clip-text text-transparent leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span >River Salon & Day Spa</span>
              </motion.p>

              <motion.p
                className="text-[14px] max-h-[860px]:text-[12px] text-white/90 leading-relaxed mb-1 max-h-[860px]:mb-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Escape the everyday rush and step into a sanctuary of relaxation, beauty, and holistic wellness. Our expert therapists ensure every touch refreshes your mind, body, and soul.
              </motion.p>
            </div>
          </div>

          {/* Image Section - Bottom Half */}
          <div className="flex-1 flex items-end justify-center">
            <div className={`${isVerySmallHeight ? 'w-[255px] h-[310px]' : isSmallHeight ? 'w-[330px] h-[400px]' : 'w-[500px] h-[600px]'} relative`}>
              <CustomImage
                src="/images/hero1.png"
                alt="spa-Therapist"
                fill
                className="object-cover"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text overlay for second image */}
      <div className={`absolute inset-0 z-20 flex items-center justify-center px-6 transition-opacity duration-700 ${showText ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center max-w-5xl">
          <motion.p
            className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight transition-all duration-700 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              textShadow: '0 4px 30px rgba(0,0,0,0.8), 0 0 60px rgba(255,255,255,0.1)'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Best Spa in Chennai
          </motion.p>

          <motion.p
            className={`text-xl md:text-3xl lg:text-4xl text-emerald-300 font-light mb-12 leading-relaxed transition-all duration-700 delay-200 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              textShadow: '0 2px 20px rgba(0,0,0,0.8)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Offers Gateway to Blissful Escape
          </motion.p>

          <motion.div
            className={`transition-all duration-700 delay-400 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/book-spa-service-appointment" passHref>
              <button className="group relative px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-xl rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 transform hover:scale-102">
                <span className="relative z-10">Explore Our Packages</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection