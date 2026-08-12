'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const FemaleMassageTherapistPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.03, transition: { duration: 0.3 } }
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
            <span className="text-green-300 font-light">Female Massage Therapist</span>
          </motion.h1>
          <p className="text-3xl text-gray-300 max-w-4xl mx-auto mb-8">
            "River Salon Day Spa."
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
              We are looking for a skillful Spa Therapist to provide professional and engaging wellness therapies and massage therapies to our clients. You will deliver a full range of therapies to fulfill various client needs and objectives.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#8D7B68]/20"
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-[#8D7B68] mb-6">Responsibilities</h3>
                <ul className="space-y-4 text-[#3E3636]/90">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1 text-lg">•</span>
                    <span>Assess clients tissue condition, joint quality, and muscle strength.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1 text-lg">•</span>
                    <span>Develop and present client therapy plans.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1 text-lg">•</span>
                    <span>Confer with clients regarding medical histories and concerns.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1 text-lg">•</span>
                    <span>Perform massage treatments for wellness and medical conditions.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1 text-lg">•</span>
                    <span>Maintain a clean and stocked therapy room.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1 text-lg">•</span>
                    <span>Consult with other healthcare professionals for treatment plans.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1 text-lg">•</span>
                    <span>Keep detailed treatment records.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1 text-lg">•</span>
                    <span>Attend meetings and training sessions.</span>
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
                <h3 className="text-2xl font-bold text-[#8D7B68] mb-6">Qualifications</h3>
                <ul className="space-y-4 text-[#3E3636]/90">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1 text-lg">•</span>
                    <span>High school diploma/GED required.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1 text-lg">•</span>
                    <span>0 - 5 years experience as a massage therapist.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1 text-lg">•</span>
                    <span>Knowledge of reflexology, Swedish, prenatal, and deep tissue massage.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1 text-lg">•</span>
                    <span>Exceptional communication and interpersonal skills.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1 text-lg">•</span>
                    <span>Proficient in English and computer skills.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1 text-lg">•</span>
                    <span>Ability to stand for extended periods.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1 text-lg">•</span>
                    <span>Maintain a professional appearance.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1 text-lg">•</span>
                    <span>Capability to perform massages on diverse clients.</span>
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
            Ready to Start Your Career Journey?
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
            Join our team across Chennai, Trichy, Coimbatore, Bangalore, Vellore, and Tirupur.
          </p>
        </div>
      </motion.section>
    </div>
  )
}

export default FemaleMassageTherapistPage