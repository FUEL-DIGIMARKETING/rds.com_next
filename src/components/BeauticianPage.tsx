'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const BeauticianPage = () => {
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
          <motion.p
            className="text-5xl lg:text-7xl font-bold text-green-400 mb-6"
            animate={{ textShadow: ["0 0 8px rgba(72,187,120,0)", "0 0 12px rgba(72,187,120,0.4)", "0 0 8px rgba(72,187,120,0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Glow Your Career as <br />
            <span className="text-green-300 font-light">Spa & Salon Beautician Female / Male</span>
          </motion.p>
          <h1 className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Be a perfect Beautician Career in "River Salon Day Spa."
          </h1>

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
              We are looking forward to the beautician providing services to the customers and listening to their concerns and priorities. You will be knowledgeable to suggest hairstyles and makeup varieties. You should be the skill of learning new updates on the latest beauty trends and techniques. Show the Success in your role while explaining and delivering high-quality beauty and unique styling services to drive customer satisfaction, grow clientele, and boost sales.
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
                <h3 className="text-2xl text-[#8D7B68] font-bold mb-6">Responsibilities for Beautician</h3>
                <ul className="space-y-4 text-[#3E3636]/90">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Welcome customers upon arrival</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Apply hair products like a serum, cream, and clay to style hair curls, cuts, or colored hair</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Uses numerous makeup techniques</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Threads and styles eyebrows as requested and nail colors to fit the clients' requirements and unique style</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Nourishes manicures and pedicures</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Promotes a relaxing and positive salon environment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Assures compliance with the highest sanitation criteria</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Maintain updated client records based on the services provided</span>
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
                <h3 className="text-2xl text-[#8D7B68] font-bold mb-6">Qualifications for Beautician</h3>
                <ul className="space-y-4 text-[#3E3636]/90">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Degree in Beauty Therapy, Cosmetology, or suitable field is a plus</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>0-5 years of experience at Previous hands-on beauty and personal maintenance service</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Proper cosmetology license</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>In-depth learning of beauty products and technique</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Effective communication skills and well speaking skills</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Capable to stand for ample hours on peak time.</span>
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
            Ready to Create Beauty Magic?
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
            Manage our premium locations in Chennai, Trichy, Coimbatore, Vellore, and Tirupur
          </p>
        </div>
      </motion.section>
    </div>
  )
}

export default BeauticianPage