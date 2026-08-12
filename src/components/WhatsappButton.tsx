'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000) // Show after 2 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = '919500029234'
    const message = encodeURIComponent('Hi! I would like to book a spa appointment at River Day Spa.')
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}&type=phone_number&app_absent=0`
    window.open(whatsappUrl, '_blank')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
          Chat with us on WhatsApp!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </button>

      {/* Floating animation circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-10 animation-delay-1000"></div>
      </div>
    </div>
  )
}

export default WhatsAppButton