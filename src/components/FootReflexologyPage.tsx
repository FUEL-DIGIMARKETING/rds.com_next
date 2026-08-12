'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomImage from './CustomImage'
import { footReflexologyImageData } from '../data/footReflexologyImageData'
import { Hand, Leaf, Droplets, HeartPulse, Sparkles, Flower, Bed, Users, Building, Handshake, Smile, Heart } from 'lucide-react'
import { Phone } from "lucide-react";

const FootReflexologyPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const services = [
    {
      title: "Boost Circulation",
      description: "Foot Reflexology massage increases the flow of blood throughout the body by reviving the endings of nerves and pressure points on the feet. The increased blood flow improves the supply of oxygen and nutrients to tissues and increases the speed of toxin removal. An increase in the flow of blood improves the body's energy levels.",
      icon: HeartPulse
    },
    {
      title: "Reduce Stress",
      description: "By targeting calming responses through pressure points on your feet, Foot Reflexology massage naturally reduces stress. This massage reduces cortisol levels, relaxes the nervous system, and increases mental and physical relaxation. Regaining equilibrium and well-being is facilitated by the peaceful experience, which also lifts one's spirits.",
      icon: Sparkles
    },
    {
      title: "Mitigation of Pain",
      description: "Foot Reflexology massage mitigates pain by providing specialized pressure to specific targeted areas on the body. This massage reduces the discomfort, muscle tension, and joint pain. Foot Reflexology improves the overall well-being of your body.",
      icon: Hand
    },
    {
      title: "Enhance Mood",
      description: "Endorphins, which are the body's natural feel-good chemicals were targeted by Foot Reflexology massage to improve wellness. The massage decreases stress and lets you feel a more positive emotional state. Foot Reflexology massage achieves relaxation, and well-being, and enhances mental clarity.",
      icon: Flower
    },
    {
      title: "Improve Sleep",
      description: "By reducing mental stress and enhancing relaxation, Foot Reflexology massages increase the quality of sleep. In this massage, our nervous system will experience a reduced rate of tension and anxiety, which makes our body fall asleep easier. Consecutive sessions can improve sleep which may lead to relaxing nights.",
      icon: Bed
    },
    {
      title: "Support Detoxification",
      description: "To encourage the body detox process, Foot Reflexology massage uses detoxification by targeting specific points. Higher lymphatic flow removes pollutants, and improved blood circulation helps the body get rid of toxins.. Your body and mind are in better overall condition after this massage.",
      icon: Droplets
    }
  ]

  const whyChooseUs = [
    { icon: Smile, title: "Ultimate Relaxation" },
    { icon: Leaf, title: "Expert Touch" },
    { icon: Users, title: "Blissful Escape" },
    { icon: Sparkles, title: "Rejuvenating Care" },
    { icon: Building, title: "Peaceful Sanctuary" },
    { icon: Heart, title: "Revitalizing Journey" }
  ]

  const faqs = [
    {
      question: "Can foot massages be performed daily?",
      answer: "Sure, foot reflexology massage can be done daily, but it is recommended to consult with your doctor if you have any medical concerns."
    },
    {
      question: "Does foot reflexology help with certain health problems?",
      answer: "These massages reduce stress, anxiety, discomfort, and sleep disturbances. But, it should be used in combination with, not instead of, traditional medical therapies."
    },
    {
      question: "How should I prepare myself for a foot reflexology session?",
      answer: "You can wear a dress in which you can feel comfortable and be ready to take off your shoes and socks."
    },
    {
      question: "How long do foot reflexology sessions last?",
      answer: "The foot reflexology sessions can last up to 60 minutes, according to the individual's preferences and needs."
    }
  ]

  return (
    <main className="w-full overflow-x-hidden select-text bg-[#F8F5F0] pt-32">
      {/* Hero Section with Foot Animation */}
      <header className="relative w-full h-[500px] overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${footReflexologyImageData.hero.src}')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-green-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.p
            className="text-4xl sm:text-6xl font-bold text-white drop-shadow-2xl text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Foot Reflexology Massage
          </motion.p>
        </div>
      </header>

      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative bg-[#F8F5F0] text-[#3E3636] w-full">
        <div className="max-w-7xl mx-auto">
          {/* Title with Pressure Point Animation */}
          <div className="text-center mb-16">
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-[#8D7B68]/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.h1
                className="relative text-3xl lg:text-4xl font-bold text-[#8D7B68] mb-6 px-8 py-4"
                {...fadeUp}
              >
                Best Foot Reflexology Massage for Walk on Clouds
              </motion.h1>
            </motion.div>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Content Section with Pressure Point Effects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full mb-16">
            <motion.div
              className="text-center lg:text-left space-y-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {/* Pressure Point Card */}
              <motion.div
                className="relative p-6 rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(141, 123, 104, 0.15) 0%, rgba(34, 197, 94, 0.15) 100%)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(141, 123, 104, 0.3)'
                }}
                whileHover={{
                  scale: 1.02,
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(141, 123, 104, 0.2) 100%)'
                }}
                transition={{ duration: 0.4 }}
              >

                <motion.p
                  className="relative text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4"
                  {...fadeUp}
                >
                  Revitalize Your Sole: Experience Unmatched Comfort and Healing
                </motion.p>
                <motion.p
                  className="relative text-[#3E3636]/90 text-base text-justify leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  At <Link href="/best-body-massage-center" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon and Day Spa in Chennai</Link>, We have trained therapists who are ready to begin their magic work on your feet. To get the pampered feet, soak your feet in a warm bath, and sink into our specially designed reflexology chairs. You can feel the extreme relaxation, once our therapists skillfully massage your toes, feet, and ankles.
                </motion.p>
              </motion.div>

              {/* Reflexology Zone Card */}
              <motion.div
                className="relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#A9907E]/20 overflow-hidden"
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px rgba(141, 123, 104, 0.25)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-[#8D7B68]/5"
                  animate={{
                    background: [
                      'linear-gradient(90deg, rgba(34, 197, 94, 0.05) 0%, rgba(141, 123, 104, 0.05) 100%)',
                      'linear-gradient(270deg, rgba(34, 197, 94, 0.05) 0%, rgba(141, 123, 104, 0.05) 100%)',
                      'linear-gradient(90deg, rgba(34, 197, 94, 0.05) 0%, rgba(141, 123, 104, 0.05) 100%)'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.p
                  className="relative text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4"
                  {...fadeUp}
                >
                  From Toe to Heel: Unlock the Secrets of Expert Reflexology
                </motion.p>
                <motion.p
                  className="relative text-[#3E3636]/90 text-base text-justify leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Feel the ultimate relaxation and rejuvenation wash over you after a hectic day of standing. While experiencing the calming touch of our therapists let all your mind stress and physical pain go away.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Enhanced Image with Reflexology Points */}
            <motion.div
              className="relative w-full flex justify-center"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Reflexology Point Indicators */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-green-400/70 rounded-full border-2 border-white shadow-lg"
                    style={{
                      left: `${15 + (i % 4) * 20}%`,
                      top: `${20 + Math.floor(i / 4) * 40}%`,
                      zIndex: 20
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(34, 197, 94, 0.7)",
                        "0 0 0 10px rgba(34, 197, 94, 0)",
                        "0 0 0 0 rgba(34, 197, 94, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.25,
                    }}
                  />
                ))}

                <motion.div
                  className="absolute inset-0 bg-green-600 rounded-3xl transform rotate-3"
                  whileHover={{ rotate: 6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="bg-gray-200 rounded-3xl transform -rotate-3 relative z-10 overflow-hidden">
                  <CustomImage
                    src={footReflexologyImageData.content.src}
                    alt={footReflexologyImageData.content.alt}
                    width={600}
                    height={400}
                    className="rounded-3xl shadow-xl w-full h-auto lg:h-[400px] object-cover transform transition-transform duration-300 group-hover:scale-105 bg-gray-200"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Foot Reflexology Packages Section */}
          <section
            className="relative bg-gray-100 py-12 px-6 md:px-12 lg:px-20 text-center bg-fixed bg-center z-10 mb-16 rounded-2xl"
            style={{ backgroundImage: `url('${footReflexologyImageData.background.src}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
            <div className="relative max-w-3xl mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">
                Best Foot Massage Chennai - River Salon and Day Spa
              </h2>
              <p className="mb-6 text-base">
                The River Salon and Day Spa offers a variety of massages. But our Foot Reflexology Massage is particularly popular among all. The calming foot massages relax your feet, make you feel better, and help to regain energy. Applying pressure to specific parts of your feet, ears, and palms, helps in pain reduction and relief in stress. So, make an immediate appointment at <Link href="/best-foot-reflexology-massage" className="text-green-400 font-semibold hover:underline">Best Foot Reflexology Massage Center</Link>- River Salon and Day Spa.
              </p>
              <Link href="/book-spa-service-appointment">
                <motion.button
                  className="bg-green-700 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-green-600 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book now
                </motion.button>
              </Link>
            </div>
          </section>

          {/* Benefits Section with Foot Zone Mapping */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-xl md:text-3xl font-bold text-[#8D7B68] mb-6"
              {...fadeUp}
            >
              The Remarkable Benefits of Foot Reflexology Massage
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
          </div>

          <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-80 w-full">
                  <div className="relative h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#A9907E]/20 group-hover:shadow-3xl transition-all duration-500">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#8D7B68]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-green-500/20 to-transparent" />

                    <div className="p-6 space-y-4 h-full flex flex-col">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-[#8D7B68]/20 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                        {service.icon && React.createElement(service.icon, { className: 'text-[#8D7B68] w-8 h-8' })}
                      </div>

                      <span className="text-xl font-bold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300 text-center">
                        {service.title}
                      </span>

                      <p className="text-sm text-[#3E3636]/70 leading-relaxed text-center flex-1">
                        {service.description}
                      </p>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#8D7B68]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ))}
          </article>

          {/* Why Choose Us with Reflexology Theme */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-2xl lg:text-3xl font-extrabold text-[#8D7B68] mb-6"
              {...fadeUp}
            >
              Why Choose River Salon and Day Spa?
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-16">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center space-y-4 border-2 border-[#A9907E]/20 hover:border-green-400 group h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#E6D7C3] via-[#D2B48C] to-[#C19A6B] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  <item.icon className="text-green-600 w-8 h-8 relative z-10" />
                </div>
                <span className="text-lg font-semibold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="text-center mb-12">
            <motion.h3
              className="text-2xl sm:text-3xl font-extrabold text-[#8D7B68] mb-6"
              {...fadeUp}
            >
              Frequently Asked Questions
            </motion.h3>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#A9907E]/20 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="flex justify-between w-full text-left text-base sm:text-lg font-semibold text-[#8D7B68] hover:text-green-600 transition-colors duration-300"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-xl text-green-600 transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      +
                    </span>
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-[#3E3636]/80 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Foot Massage Theme */}
      <section
        className="relative w-full py-16 select-text bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url('${footReflexologyImageData.hero.src}')`
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        {/* Animated Reflexology Points */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-green-400/40 rounded-full"
            style={{
              left: `${10 + (i % 6) * 15}%`,
              top: `${20 + Math.floor(i / 6) * 60}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
              boxShadow: [
                "0 0 0 0 rgba(34, 197, 94, 0.4)",
                "0 0 0 15px rgba(34, 197, 94, 0)",
                "0 0 0 0 rgba(34, 197, 94, 0)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
          <motion.div
            className="flex flex-col items-center justify-center p-8 md:p-12 rounded-3xl select-text"
            style={{
              background: 'linear-gradient(135deg, rgba(178, 178, 178, 0.26) 0%, rgba(174, 174, 174, 0.25) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 25px 45px rgba(0, 0, 0, 0.2)'
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h4
              className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Foot Reflexology Massage for Ultimate Revitalize of Your Feet
            </motion.h4>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">
              With the ultimate foot reflexology experience at <strong>Best Foot Reflexology Massage Center</strong> - <Link href="/membership-policy-and-discounts" className="text-green-400 font-semibold hover:underline">River Salon and Day Spa</Link> energize your feet. Our trained therapists use some techniques to calm and relax, releasing stress and pain. Relish the pleasant environment and attentive treatment that enhances blood flow and elevates general well-being. Use our website to schedule a soothing session.
            </p>

            <motion.button
              className="bg-gradient-to-r from-green-600 to-green-400 text-white text-lg font-semibold py-4 px-12 rounded-full shadow-lg hover:from-green-500 hover:to-green-300 hover:shadow-green-400/50 transition-all duration-300 ease-in-out"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="tel:+919500029234">📞 Book Now</a>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default FootReflexologyPage