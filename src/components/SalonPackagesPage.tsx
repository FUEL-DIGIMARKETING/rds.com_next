'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const packages = [
  {
    title: "Groom Package",
    price: "₹7000",
    details: [
      "Hair spa",
      "Pedicure & Manicure",
      "Facial",
      "Bleach",
      "Shave & Haircut",
      "Groom Make up – 12000 (Excludes from Total Package Price)",
    ],
    color: "from-blue-400 to-green-400",
    tier: "STARTER"
  },
  {
    title: "Bridal Package",
    price: "₹8000",
    details: [
      "Hair Spa",
      "Golden Facial",
      "Pedicure, Manicure",
      "Hand Bleach, Neck + Back Bleach",
      "Hand & Leg Wax",
      "Threading",
      "Reception & Marriage in Mandappam – 15000 (Excludes from the Total Package Price)",
    ],
    color: "from-green-400 to-blue-400",
    tier: "PREMIUM"
  },
]

export default function SalonPackagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('images/best-long-hair-cuts-for-women-in-coimbatore.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Hair Salon Packages
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#8D7B68] mb-6">
            Glow Up, Show Up

          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#8D7B68] to-[#6B5B4F] mx-auto rounded-full" />
        </motion.div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="group relative h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Card inspired by screenshot design */}
              <div
                className="relative h-full rounded-3xl p-8 transition-all duration-500 group-hover:shadow-2xl flex flex-col min-h-[500px]"
                style={{
                  background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
                  boxShadow: '5px 5px 15px rgba(0,0,0,0.3), -5px -5px 15px rgba(255,255,255,0.05)'
                }}
              >
                {/* Number Badge */}
                <div className="absolute top-6 left-6">
                  <span className="text-4xl font-bold text-white/20">{String(index + 1).padStart(2, '0')}</span>
                </div>

                {/* Colored Tab */}
                <div className={`absolute top-6 right-6 w-20 h-8 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">{pkg.tier}</span>
                </div>

                {/* Content */}
                <div className="mt-16 flex flex-col flex-grow">
                  <p className="text-2xl font-bold text-white mb-2">
                    {pkg.title}
                  </p>

                  <div className="space-y-2 mb-4">
                    <p className="text-xl font-bold text-green-400">
                      {pkg.price}
                    </p>
                    <p className="text-sm text-yellow-400 font-medium">
                      / session
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 py-4 flex-grow">
                    {pkg.details.map((detail, i) => (
                      <div key={i} className="flex items-center text-gray-300 text-sm">
                        <svg
                          className="w-4 h-4 mr-2 text-green-500 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {detail}
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <Link href="/book-spa-service-appointment">
                    <button
                      className={`w-full mt-auto py-3 rounded-full text-white font-semibold transition-all duration-300 bg-gradient-to-r ${pkg.color} hover:shadow-lg hover:scale-105 cursor-pointer relative z-10`}
                      style={{ pointerEvents: 'auto' }}
                    >
                      ENQUIRY NOW
                    </button>
                  </Link>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${pkg.color} pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}