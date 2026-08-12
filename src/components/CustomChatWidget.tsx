'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const CustomChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const openTawkChat = () => {
    if (typeof window !== 'undefined' && (window as any).Tawk_API) {
      (window as any).Tawk_API.maximize()
    }
    setIsOpen(false)
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to know more about your spa services.')
    window.open(`https://api.whatsapp.com/send/?phone=919500029234&text=${message}&type=phone_number&app_absent=0`, '_blank')
    setIsOpen(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-24 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl border border-green-200 overflow-hidden"
            style={{ width: '280px', height: '240px' }}
          >
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-3 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">River Day Spa</h3>
                    <p className="text-xs text-green-100">We're here to help!</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full">
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="p-2 h-32 overflow-y-auto bg-gray-50">
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start space-x-2"
                >
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">R</div>
                  <div className="bg-white p-2 rounded-lg shadow-sm max-w-xs">
                    <p className="text-xs text-gray-800">Hello! 👋 Welcome to River Day Spa. How can we help you today?</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start space-x-2"
                >
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">R</div>
                  <div className="bg-white p-2 rounded-lg shadow-sm max-w-xs">
                    <p className="text-xs text-gray-800">• Book appointments 📅<br/>• Service inquiries 💆♀️<br/>• Location details 📍</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="p-2 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={openTawkChat}
                  className="bg-gradient-to-r from-green-600 to-green-500 text-white py-2 px-2 rounded-lg text-xs font-medium hover:from-green-500 hover:to-green-600 transition-all duration-300 flex items-center justify-center space-x-1"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>Chat Bot</span>
                </button>
                <button
                  onClick={openWhatsApp}
                  className="bg-gradient-to-r from-green-600 to-green-500 text-white py-2 px-2 rounded-lg text-xs font-medium hover:from-green-500 hover:to-green-600 transition-all duration-300 flex items-center justify-center space-x-1"
                >
                  <FaWhatsapp className="w-3 h-3" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-gradient-to-r from-green-600 to-green-500 text-white p-4 rounded-full shadow-2xl hover:from-green-500 hover:to-green-600 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}>1</motion.div>
        <motion.div className="absolute inset-0 bg-green-400 rounded-full" animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
      </motion.button>
    </div>
  )
}

export default CustomChatWidget