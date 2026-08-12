'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const FloorManagerPage = () => {
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
        <div className="relative z-10 py-40 ">
          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-green-400 mb-6"
            animate={{ textShadow: ["0 0 8px rgba(72,187,120,0)", "0 0 12px rgba(72,187,120,0.4)", "0 0 8px rgba(72,187,120,0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Glow Your Career as <br />
            <span className="text-green-300 font-light">Spa & Salon Floor Manager</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            "River Salon Day Spa" makes the dignity of your life when you find the profession of Floor manager.
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
              We are looking for a Beauty Salon and Spa Floor Manager, responsible for our salon's everyday processes. Floor Manager duties include managing staff, scheduling shifts, broadcasting our services, and maintaining updated records of costs and payments. Eventually, you'll aid boost client pleasure and grow our revenues.
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
                <h3 className="text-2xl text-[#8D7B68] font-bold mb-6">Responsibilities for Floor Manager</h3>
                <ul className="space-y-4 text-[#3E3636]/90">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Manage daily salon operations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Hire and train as beauticians as pre-need</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Schedule employees shifts timing, regarding peak times and seasonality</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Order beauty products, like creams and essential oils and fill inventory</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Arrange for routine care services for all equipment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Assure all beauty treatments meet high-quality benchmarks</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Maintain staff documents, including salaries and working plans</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Promote our services, products, and discounts on social media</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Receive payments from clients and follow all transactions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▹</span>
                    <span>Maintain updated records of costs and revenues (eg., daily, monthly, and quarterly)</span>
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
                    <span>BSc in Business Administration or any other relevant specialization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>0-5 years of work experience as a Beauty Salon Floor Manager or similar role</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Additional certificate in Beauty Therapy or Cosmetology is a plus</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Good knowledge of beauty therapies and products (e.g., for skincare)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Fundamental bookkeeping knowledge</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Exceptional organizational skills and Computer Skills</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Excellent English Speaking and Writing Skills and marketing Skills</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg">▸</span>
                    <span>Ability to manage customers requests and objections with grace</span>
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
            Ready to Lead Our Team?
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

export default FloorManagerPage