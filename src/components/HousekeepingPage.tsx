'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const HousekeepingPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02 }
  }

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-[#8D7B68] to-[#6B5B4F] py-40 px-6 lg:px-20 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-gray-900/50 z-0" />
        <div className="relative z-10 py-40">
          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-green-400 mb-6"
            animate={{ textShadow: ["0 0 8px rgba(72,187,120,0)", "0 0 12px rgba(72,187,120,0.4)", "0 0 8px rgba(72,187,120,0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Glow Your Career as <br />
            <span className="text-green-300 font-light">Spa & Salon Housekeeping Male/ Female</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Make your profession as a Housekeeping in "River Salon Day Spa" earn your stability.
          </p>
        </div>
      </motion.section>

      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative bg-[#F8F5F0] text-[#3E3636] w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-[#8D7B68]/20">
            <motion.h2
              className="text-4xl font-bold text-center text-[#8D7B68] mb-10"
              {...fadeUp}
            >
              Job Overview
            </motion.h2>
            <motion.p
              className="text-lg text-[#3E3636]/90 mb-12 text-justify leading-relaxed"
              {...fadeUp}
            >
              We are looking for a professional Housekeeper who should manage the facilities with integrity and attention to detail. The goal is to provide a clean and orderly environment for our guests, which will be a necessary factor in maintaining and strengthening our reputation.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#8D7B68]/20"
                viewport={{ once: true }}
              >
                <h3 className="text-2xl text-[#8D7B68] font-bold mb-6">Responsibilities for Housekeeping</h3>
                <ul className="space-y-4 text-[#3E3636]/90">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Meet with clients to consult their expectations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Fulfill responsibilities based on the package each client chooses</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Furnish necessary housekeeping duties, including vacuuming, dusting, mopping, cleaning windows, and scouring bathrooms</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Perform as part of a team for larger homes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Respond to customer complaints or queries immediately and report any issues to the supervisor</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Check stocking levels of all consumables and replace when applicable</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Notify homeowner of any accidents or situations while rendering service</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#8D7B68]/20"
                viewport={{ once: true }}
              >
                <h3 className="text-2xl text-[#8D7B68] font-bold mb-6">Qualifications for Housekeeping</h3>
                <ul className="space-y-4 text-[#3E3636]/90">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>High school or Diploma or equivalent required</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>0-5 years of experience with residential housekeeping</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Exceptional verbal communication skills</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Advanced understanding of cleaning products, implements, and procedures</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Willingness to preserve the confidentiality</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Dedicated mode of transportation required</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 lg:px-20 text-center bg-gradient-to-r from-[#8D7B68]/10 to-[#6B5B4F]/10"
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.h4
            className="text-3xl font-bold text-[#8D7B68] mb-8"
            {...fadeUp}
          >
            Ready to Maintain Excellence?
          </motion.h4>
          <Link href="mailto:riverdayspa@gmail.com">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-600 to-green-500 text-white px-12 py-4 rounded-full text-xl font-semibold hover:shadow-lg transition-all duration-300 mb-6"
            >
              APPLY NOW
            </motion.button>
          </Link>
          <p className="mt-8 text-[#3E3636]/80 text-lg">
            Manage our premium locations in Chennai, Trichy, Bangalore ,Coimbatore, Vellore, and Tirupur
          </p>
        </div>
      </motion.section>
    </div>
  )
}

export default HousekeepingPage