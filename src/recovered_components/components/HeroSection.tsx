'use client'

import React from "react"
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#4a5568]">
      {/* Single Hero Image */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://www.riverdayspa.com/asset/best-massage-in-chennai.webp')",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Best Spa in Chennai
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-green-400 font-semibold drop-shadow-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            "Enrich your Health with Our Services"
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg">
              Explore Our Services
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection