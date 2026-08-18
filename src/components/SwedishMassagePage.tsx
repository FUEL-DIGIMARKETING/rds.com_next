'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomImage from './CustomImage'
import { swedishMassageImageData } from '../data/swedishMassageImageData'
import { Building, Leaf, Users, Handshake, Smile, Heart, LeafIcon } from 'lucide-react'
import { Phone } from "lucide-react";
const SwedishMassagePage = () => {
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
      title: "Enhanced Circulation",
      description: "Swedish massage boosts body muscles and organs while eliminating toxins from your body, by performing rhythmic strokes which improve blood circulation. This massage technique improves the oxygen flow throughout the body and enhances the natural cleansing process.",
      icon: "💓"
    },
    {
      title: "Improved Flexibility",
      description: "Increased range of motion and flexibility can be obtained through regular Swedish massages, which is advantageous for people who play sports, work in computer professions, or have limited mobility. The nature of Swedish massage is that it is a mild massage, which is more effective in improving physical comfort by releasing tight muscles and boosting joint mobility.",
      icon: "🏋️"
    },
    {
      title: "Pain Relief",
      description: "Swedish massage was developed to reduce discomfort and tightness in muscles, joints, and the back of your body. Though it is a mild massage, it has powerful methods to release tension, increase blood flow, and provide excellent relief from different physical pains.",
      icon: "😊"
    },
    {
      title: "Improved Sleep",
      description: "Swedish massage gives you relaxation, improves the overall well-being of your health, and increases the quality of sleep. Its relaxing effects reduce stress hormones, relax muscles, and boost serotonin release all of which contribute to a peaceful state of mind for restful sleep. Learn energizing benefits that stretch beyond relaxation, promoting a more balanced, healthful way of life.",
      icon: "🛏️"
    },
    {
      title: "Stress Reduction",
      description: "Swedish massage lowers cortisol levels and stimulates the parasympathetic nervous system, it consequently reduces stress and encourages relaxation. This relaxing impact raises general mental health, elevates mood, and reduces anxiety. It's an excellent choice for managing stress naturally and promoting a more balanced lifestyle.",
      icon: "🧘"
    },
    {
      title: "Detoxification",
      description: "Swedish massage aids detoxification by improving circulation and lymphatic flow, which helps remove toxins from the body. Enhanced blood flow supports faster recovery, reduces inflammation, and promotes overall health, leading to a cleaner, more revitalized system.",
      icon: "♻️"
    }
  ]

  const whyChooseUs = [
    { icon: Building, title: "Luxurious Retreat" },
    { icon: Leaf, title: "Holistic Healing" },
    { icon: LeafIcon, title: "Skilled Artisans" },
    { icon: Handshake, title: "Tailored Treatments" },
    { icon: Smile, title: "Serene Atmosphere" },
    { icon: Heart, title: "Unforgettable Experience" }
  ]

  const faqs = [
    {
      question: "Why would people get a Swedish massage?",
      answer: "While having a Swedish massage, the muscle tension is released, and it makes you feel a positive person in you."
    },
    {
      question: "To whom is Swedish massage of greatest benefit?",
      answer: "Swedish massages would be the greatest beneficial for people, who are all looking to reduce stress and overall body relaxation."
    },
    {
      question: "Can I Choose the minutes for my massage session?",
      answer: "Swedish massage package you can pick services from 60 or 90 mins. Additionally, we have a membership card here, you can choose the minutes of massage according to the membership time period."
    },
    {
      question: "Does Swedish massage involve the use of oil?",
      answer: "Yes, oil is used to reduce skin friction and to promote fluid."
    }
  ]

  return (
    <main className="w-full overflow-x-hidden select-text bg-[#F8F5F0] pt-32">
      {/* Hero Section with Floating Elements */}
      <header className="relative w-full h-[500px] overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${swedishMassageImageData.hero.src}')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-green-400/20 rounded-full backdrop-blur-sm"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 bg-[#8D7B68]/30 rounded-full backdrop-blur-sm"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />

        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.p
            className="text-4xl sm:text-6xl font-bold text-white drop-shadow-2xl text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Swedish Massage
          </motion.p>
        </div>
      </header>

      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative bg-[#F8F5F0] text-[#3E3636] w-full">
        <div className="max-w-7xl mx-auto">
          {/* Animated Title Section */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-3xl lg:text-4xl font-bold text-[#8D7B68] mb-6"
              {...fadeUp}
            >
              Swedish Massage Service in Chennai - Dismount into the serenity for Wellness
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Content Section with Unique Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full mb-16">
            <motion.div
              className="text-center lg:text-left space-y-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {/* Unique Gradient Box */}
              <motion.div
                className="relative p-6 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(141, 123, 104, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(141, 123, 104, 0.2)'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.p
                  className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4"
                  {...fadeUp}
                >
                  Revitalize Your Senses with Our Luxury Swedish Massage Experience
                </motion.p>
                <motion.p
                  className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  At <strong>River Salon and Day Spa</strong>, we provide Swedish massages that revive the body, calm the mind, and restore a sense of calm. Discover our peaceful resort, where trained therapists create one-of-a-kind experiences using classic techniques from this valued past.
                </motion.p>
              </motion.div>

              {/* Floating Card Effect */}
              <motion.div
                className="relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#A9907E]/20"
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(141, 123, 104, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.p
                  className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4"
                  {...fadeUp}
                >
                  Exploring Absolute Swedish Massage Destination: Pure Bliss
                </motion.p>
                <motion.p
                  className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Swedish massage offers the best relaxation and energy, with peaceful and mild massages. Our <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Best Spa in Chennai</Link> gives you a relaxed massage which helps you to feel better than before. Our trained therapists provide massages with soft strokes in a relaxing atmosphere to improve your mind, body, and spirit.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Enhanced Image Section */}
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
                {/* Animated Background Elements */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-green-600 to-[#8D7B68] rounded-3xl opacity-20"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 bg-green-600 rounded-3xl transform rotate-3"
                  whileHover={{ rotate: 6 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="bg-gray-200 rounded-3xl transform -rotate-3 relative z-10 overflow-hidden">
                  <CustomImage
                    src={swedishMassageImageData.content.src}
                    alt={swedishMassageImageData.content.alt}
                    width={600}
                    height={400}
                    className="rounded-3xl shadow-xl w-full h-auto lg:h-[400px] object-cover transform transition-transform duration-300 group-hover:scale-105 bg-gray-200"
                    priority
                  />
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Swedish Massage Packages Section */}
          <section
            className="relative bg-gray-100 py-12 px-6 md:px-12 lg:px-20 text-center bg-fixed bg-center z-10 mb-16 rounded-2xl"
            style={{ backgroundImage: `url('${swedishMassageImageData.background.src}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
            <div className="relative max-w-3xl mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">
                Swedish Massage Center - River Salon and Day Spa
              </h2>
              <p className="mb-6 text-base">
                River Salon and Day Spa’s professionally trained therapists ensure that you are completely relaxed after your massage. Our serene set is perfect for invigorating the body and spirit. After visiting our reputed <Link href="/" className="text-green-400 font-semibold hover:underline"> spa in chennai</Link> ,you obtain the best experience and a profound sense of happiness and well-being. De-stress your body and soul by <strong>Booking an appointment</strong> at <strong>River Salon and Day Spa</strong> today!
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

          {/* Benefits Section with Enhanced Cards */}
          <div className="text-center mb-12">
            <motion.h3
              className="text-2xl md:text-3xl font-extrabold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Learn About the Stress-Reduction and Rejuvenating Properties of Swedish Massage
            </motion.h3>
            <motion.p
              className="text-base lg:text-lg text-[#3E3636]/80 max-w-4xl mx-auto mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/best-body-massage-center" className="text-green-600 font-semibold hover:underline">Swedish massage</Link> is well-known for its ability to provide deep relaxation and reduce both physical and emotional stress. It promotes relaxation, increases circulation, and reduces muscle soreness with long, peaceful strokes and varying pressures. This massage process promotes your actual health and makes you feel better both physically and mentally.
            </motion.p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
            <motion.h3
              className="text-2xl md:text-3xl font-extrabold text-[#8D7B68] mb-8"
              {...fadeUp}
            >
              Perks of Swedish Massage:
            </motion.h3>
          </div>

          {/* Enhanced Benefits Grid */}
          <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
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
                        <span className="text-[#8D7B68] text-2xl">{service.icon}</span>
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

          {/* Why Choose Us with Floating Animation */}
          <div className="text-center mb-12">
            <motion.p
              className="text-xl lg:text-2xl font-extrabold text-[#8D7B68] mb-6"
              {...fadeUp}
            >
              Why Choose River Salon and Day Spa?
            </motion.p>
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
            <motion.h4
              className="text-xl sm:text-2xl font-extrabold text-[#8D7B68] mb-6"
              {...fadeUp}
            >
              Frequently Asked Questions
            </motion.h4>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#A9907E]/20 hover:border-green-400 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="flex justify-between w-full text-left text-lg font-semibold text-[#8D7B68] hover:text-green-600 transition-colors duration-300"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-xl text-[#A9907E] hover:text-green-600 transition duration-300">
                      {openIndex === index ? '-' : '+'}
                    </span>
                  </button>
                  {openIndex === index && (
                    <motion.p
                      className="text-[#3E3636]/80 mt-4 text-base leading-relaxed"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section
        className="relative w-full py-16 select-text bg-cover bg-center"
        style={{
          backgroundImage: `url('${swedishMassageImageData.hero.src}')`
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-green-400/20 rounded-full backdrop-blur-sm"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-[#8D7B68]/30 rounded-full backdrop-blur-sm"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />

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
            <motion.h5
              className="text-xl md:text-2xl lg:text-3xl text-center font-extrabold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Nurture the ultimate Swedish massage experience
            </motion.h5>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">
              <strong>River Salon and Day Spa</strong> is the best choice for your body relaxation, so make an immediate appointment at our spas in <strong>Bangalore, Tirupur, Coimbatore, Vellore, Trichy,</strong> and <Link href="/best-body-massage-center" className="text-green-400 font-semibold hover:underline">Chennai.</Link> Our trained therapist will have an opportunity to make you feel relaxed with outstanding methods and calming oils. We prioritize your health to relax your body and mind in a peaceful place.
            </p>

            <motion.button
              className="bg-gradient-to-r from-green-600 to-green-400 text-white text-lg font-semibold py-4 px-12 rounded-full shadow-lg hover:from-green-500 hover:to-green-300 hover:shadow-green-400/50 transition-all duration-300 ease-in-out"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="tel:+919500029234">📞 BOOK YOUR SESSION TODAY</a>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default SwedishMassagePage