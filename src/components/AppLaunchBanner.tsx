'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import CustomImage from './CustomImage'
import Link from 'next/link'

export default function AppLaunchBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setIsVisible(false)}
          />

          {/* Banner Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsVisible(false)
              }
            }}
          >
            <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-2xl w-full border-4 md:border-8 border-white overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                  className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 md:p-2 shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Close banner"
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>

              {/* Banner Image */}
              <div className="relative w-full">
                <CustomImage
                  src="/images/rdswebbanner.jpeg"
                  alt="River Day Spa App Launch Offer"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* QR + Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-r from-green-50 to-blue-50">

                {/* Android: QR + Button */}
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="hidden sm:flex w-32 h-32 rounded-xl border-2 border-gray-200 bg-white p-1.5 shadow-md items-center justify-center">
                    <img
                      src="/images/RiverdayspaAndroidQR.png"
                      alt="Android QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.riverdayspa.booking&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-black hover:bg-gray-800 text-white px-4 py-3 md:px-6 md:py-4 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <span>Google Play</span>
                  </a>
                </div>

                {/* iOS: QR + Button */}
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="hidden sm:flex w-32 h-32 rounded-xl border-2 border-gray-200 bg-white p-1.5 shadow-md items-center justify-center">
                    <img
                      src="/images/Riverdayspa App IOSQR.png"
                      alt="iOS QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <a
                    href="https://apps.apple.com/in/app/river-salon-spa-booking/id6761760106"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 md:px-6 md:py-4 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.365 1.43c0 1.14-.465 2.22-1.24 3.02-.82.84-2.15 1.49-3.28 1.4-.14-1.08.42-2.24 1.2-3.04.8-.83 2.2-1.45 3.32-1.38zM20.94 17.22c-.46 1.06-1.02 2.03-1.73 2.97-.96 1.26-2.18 2.83-3.69 2.85-1.34.02-1.68-.87-3.5-.87-1.83 0-2.2.85-3.53.89-1.45.05-2.56-1.45-3.52-2.7-2.7-3.6-2.98-7.82-1.32-10.28.82-1.22 2.3-2 3.85-2.02 1.4-.02 2.73.94 3.5.94.76 0 2.37-1.16 3.99-.99.68.03 2.58.28 3.8 2.06-3.34 1.83-2.8 6.53.15 7.15z" />
                    </svg>
                    <span>App Store</span>
                  </a>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
