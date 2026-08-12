'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { PlusCircle, Edit } from 'lucide-react'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/images/book-spa-appointment.jpg"
          alt="Spa Background"
          fill
          className="object-cover"
          priority
        />
        
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8"
          >
            Admin Dashboard
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-12"
          >
            Manage your spa content and blog posts
          </motion.p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <PlusCircle className="w-6 h-6" />
              Create Blog
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Edit className="w-6 h-6" />
              Update Blog
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  )
}