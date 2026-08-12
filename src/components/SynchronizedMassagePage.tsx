'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, Leaf, Building, Handshake, Smile, Heart } from 'lucide-react'
import CustomImage from './CustomImage'
import { synchronizedMassageImageData } from '../data/synchronizedMassageImageData'

const SynchronizedMassagePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  const services = [
    {
      title: "Time Efficiency",
      description: "In this Synchronized massage, two trained therapists work with their hands simultaneously so you can get the full benefits of massage in this reduced pain and soreness and save your time. Because of this, the massage is suitable for busy people who are working hard.",
      icon: "⏰",
    },
    {
      title: "Enhanced Relaxation",
      description: "By having two therapists work together, Synchronized massage will take you to the next level of relaxation, providing you with perfectly balanced strokes that improve your mind relaxation. The balanced approach will give you an experience with deeper and uniform relaxation which will help in letting go of stress and tension.",
      icon: "🧘",
    },
    {
      title: "Balanced Treatment",
      description: "In these balanced treatments of Synchronized massage, your body will receive equal attention. The massage reduces muscle tension and lets you feel relaxed, harmonized, and refreshed because of the perfect balance between the two therapists.",
      icon: "⚖️",
    },
    {
      title: "Improved Circulation",
      description: "By applying perfectly balanced strokes simultaneously with two trained therapists, Synchronized massage improves the blood flow. This massage improves the blood flow, enhancing the supply of oxygen and delivery of nutrients more effectively than others, because of two therapists use their techniques in a perfectly balanced manner.",
      icon: "❤️",
    },
    {
      title: "Stress Reduction",
      description: "Because of two therapists who work in perfect harmony, Synchronized massage reduces the stress in your mind. This massage induces deep relaxation and reduces tension more effectively than other types of massages. The massage helps improve your mind and body through a dual approach and provides you a long-lasting relaxation.",
      icon: "😊",
    },
    {
      title: "Symmetrical Healing",
      description: "By providing balanced attention on both sides of your body, Synchronized massage ensures symmetrical healing, and relief in muscle and alignment, because of this four-hand massage technique. The coordinated performance of two therapists provides a restoring balance to your both body and mind.",
      icon: "♾️",
    },
  ]

  const whyChooseUs = [
    { icon: Smile, title: "Perfect Synchronization" },
    { icon: Leaf, title: "Dual Therapist Harmony" },
    { icon: Users, title: "Symmetrical Relaxation" },
    { icon: Building, title: "Coordinated Rhythms" },
    { icon: Handshake, title: "Balanced Bliss" },
    { icon: Heart, title: "Harmonized Healing" },
  ]

  const faqs = [
    {
      question: "What is Synchronized massage?",
      answer: "In Synchronized massage, there will be two trained therapists working together with perfectly balanced strokes which will give you better relaxation.",
    },
    {
      question: "What does synchronized movement mean?",
      answer: "Synchronized movement means that two therapists will handle this massage, while one will move upwards and the other will move downwards which will give you complete relaxation.",
    },
    {
      question: "How does synchronization work?",
      answer: "In Synchronized massage, give you a uniform pressure which will give you complete relaxation through simultaneous touch.",
    },
    {
      question: "How long does the synchronized massage take?",
      answer: "Gradually, synchronized massage will last 60 to 90 minutes, according to the package you pick.",
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full overflow-x-hidden select-text bg-[#F8F5F0] pt-32" style={{ userSelect: 'text', WebkitUserSelect: 'text', MozUserSelect: 'text' }}>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <CustomImage
          src={synchronizedMassageImageData.hero.src}
          alt={synchronizedMassageImageData.hero.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.p
            className="text-4xl sm:text-6xl font-bold text-white drop-shadow-2xl text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Synchronized Massage
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative bg-[#F8F5F0] text-[#3E3636] w-full select-text">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1
              className="text-2xl lg:text-4xl font-extrabold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Best Synchronized Massage Spa - Two Hands, One Blissful Experience
            </motion.h1>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full select-text mb-16">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left select-text space-y-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4 select-text"
                {...fadeUp}
              >
                Unparalleled Relaxation with Expert Synchronization
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6 select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Those seeking the benefits of a <Link href="/body-massage-in-chennai-egmore" className="font-semibold text-green-600 hover:text-green-500 transition">body massage center in Chennai</Link>. We serve IT professionals, entrepreneurs, and those looking for outstanding refreshments. In these Synchronized massages, your body can experience better relaxation with therapy treatment.
              </motion.p>

              <motion.p
                className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4 select-text"
                {...fadeUp}
              >
                Experience Ultimate Harmony with Our Skilled Therapists
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                At our <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition">Best Spa in Chennai</Link>, our trained therapists do their good work in perfect harmony, which will give you a very unique experience. With perfectly coordinated movements, you can experience that the entire massage session resembles a dance. In our two trained therapists, one will perform an upward stroke while the other performs downward strokes, which will give you complete relaxation.
              </motion.p>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              className="relative w-full flex justify-center"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-green-600 rounded-3xl transform rotate-3"></div>
                <CustomImage
                  className="relative z-10 rounded-3xl shadow-xl w-full h-auto lg:h-[400px] object-cover transform -rotate-3 transition-transform duration-300 hover:rotate-0"
                  src={synchronizedMassageImageData.content.src}
                  alt={synchronizedMassageImageData.content.alt}
                  width={600}
                  height={400}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Synchronized Massage Packages Section */}
      <section className="relative bg-gray-100 py-12 px-6 md:px-12 lg:px-20 text-center bg-fixed bg-center z-10 mb-16 rounded-2xl overflow-hidden">
        <CustomImage
          src={synchronizedMassageImageData.background.src}
          alt={synchronizedMassageImageData.background.alt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl"></div>
        <div className="relative max-w-3xl mx-auto text-white">
          <h2 className="text-2xl font-bold mb-4">
            Best Synchronized Massage - River Salon and Day Spa
          </h2>
          <p className="mb-6 text-base">
            With our four-hand massage therapy at River Salon and Day Spa, you can reduce the treatment time to half and experience your whole body's well-being. The unique massage relaxes your body on both the left and right sides simultaneously. With each therapist's calming techniques, you can feel the whole session was graceful. If you are a busy person and don't have any time for these massages, then Synchronized massage at River Day Spa will be a good solution. So Book Your Appointment Now.
          </p>
          <Link href="/book-spa-service-appointment">
            <motion.button
              className="bg-green-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-green-500 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book now
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#F8F5F0] text-[#3E3636] w-full select-text">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h3
              className="text-xl md:text-3xl font-bold text-[#8D7B68] mb-6"
              {...fadeUp}
            >
              Double the Benefits: Discover the Perks of Synchronized Massages
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-[#F8F5F0] to-[#EAE0D5]">
        <div className="text-center mb-12">
          <motion.h2
            className="text-2xl lg:text-3xl font-extrabold text-[#8D7B68] mb-4"
            {...fadeUp}
          >
            Why Choose River Salon and Day Spa?
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 px-6 max-w-7xl mx-auto">
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
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="text-center mb-12">
          <motion.h3
            className="text-2xl sm:text-3xl font-extrabold text-[#8D7B68] mb-4"
            {...fadeUp}
          >
            Frequently Asked Questions
          </motion.h3>
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:border-green-400 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  className="flex justify-between w-full text-left text-base sm:text-lg font-semibold text-[#8D7B68] hover:text-green-600 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{faq.question}</span>
                  <span className="text-xl text-gray-400 hover:text-green-600 transition duration-300">
                    {openIndex === index ? '-' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <motion.p
                    className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed"
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
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-16 select-text bg-cover bg-center overflow-hidden">
        <CustomImage
          src={synchronizedMassageImageData.cta.src}
          alt={synchronizedMassageImageData.cta.alt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
          <div
            className="flex flex-col items-center justify-center p-8 md:p-12 rounded-3xl select-text"
            style={{
              background: 'linear-gradient(135deg, rgba(178, 178, 178, 0.26) 0%, rgba(174, 174, 174, 0.25) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 25px 45px rgba(0, 0, 0, 0.2)'
            }}
          >
            <motion.h4
              className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Experience the Best Four Hand Massage
            </motion.h4>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">
              Experience unparalleled relaxation with the Best Four Hand Massage at <strong>River Salon and Day Spa</strong> in <strong>Bangalore, Chennai, Coimbatore, Vellore, Tirupur</strong> and <Link href="/massage-spa-in-trichy" className="text-green-400 font-semibold hover:underline">Trichy</Link>. Our two trained therapists will work together with perfectly balanced movement, which will promote your relaxation and rejuvenation. This four-hand massage technique ensures deep relaxation and effective relief. Feel refreshed and relaxed like never before.
            </p>

            <motion.button
              className="bg-gradient-to-r from-green-600 to-green-400 text-white text-lg font-semibold py-4 px-12 rounded-full shadow-lg hover:from-green-500 hover:to-green-300 hover:shadow-green-400/50 transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="tel:+919500029234">📞 Book Now</a>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SynchronizedMassagePage