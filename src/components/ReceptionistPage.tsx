'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ReceptionistPage = () => {
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
            <span className="text-green-300 font-light">Spa & Salon Receptionist</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Be a call and get the opportunity to call as a professional Receptionist in "River Salon Day Spa"
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
              We are looking for a Salon and Spa Receptionist to act in the major role to contact the customers. Receptionist roles include welcoming customers, responding to clients' inquiries about services via phone, email, or in person, and processing transactions. To be successful in this role, able to manage clients with elegance, even during peak time.
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
                <h3 className="text-2xl text-[#8D7B68] font-bold mb-6">Responsibilities for Receptionist</h3>
                <ul className="space-y-4 text-[#3E3636]/90">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Warmly welcome clients, walk them to the proper beauty station and inform assigned beauticians.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Book and ensure appointments via phone and email</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Process transactions and issue receipts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Offer beverages and chat with customers who are in the waiting area</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Welcome clients answer questions regarding services, and schedule appointments based on availability</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Inform clients about the latest services and discounts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Cross-sell services and products (e.g., through informative brochures and gift cards)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Revamp client records with contact and billing details, appointments and services offered</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Handle our call center and Maintain a clean reception area</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Ordering business cards, brochures, and stationery as required</span>
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
                <h3 className="text-2xl text-[#8D7B68] font-bold mb-6">Professional Requirements</h3>
                <ul className="space-y-4 text-[#3E3636]/90">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>High School diploma or any Degree</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>0-5 years of work experience as a Salon Receptionist, Front desk office, or similar role</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Hands-on knowledge with office equipment, like printers and POS systems</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Acquaintance with processing transactions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Exceptional communication abilities (verbal, phone, and email) with a client service attitude</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Stable organization and record-keeping skillfulness</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>A capability to remain calm beneath stressful circumstances</span>
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
            Ready to Be Our Front Desk Star?
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

export default ReceptionistPage