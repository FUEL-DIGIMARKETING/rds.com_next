'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomImage from './CustomImage'
import { moroccanMassageImageData } from '../data/moroccanMassageImageData'
import { Phone } from "lucide-react";
import { Users, Gift, Bed, Handshake, Settings, Smile, SmileIcon } from 'lucide-react'

const MoroccanBathPageSEO = () => {
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
      title: "Deep Cleaning",
      description: "Our all-inclusive deep cleaning method efficiently gets rid of dead skin cells, clears clogged pores, and detoxifies the skin. This deep cleaning leaves your skin feeling clean and revitalized while reducing the prevention of breakouts, blackheads, and other skin pollutants.",
      icon: "🛁"
    },
    {
      title: "Enhanced Circulation",
      description: "Our treatment improves the general health of your skin by gently massaging your body to increase blood flow. Better circulation promotes a healthier and brighter complexion by supporting the movement of vital nutrients to your skin cells, also enhancing your natural glow.",
      icon: "💓"
    },
    {
      title: "Stress Relief",
      description: "Our skincare treatment's calming routine eases tension and encourages rest. This holistic experience improves your mind and body by relieving tension with a soothing massage, calm surroundings, and gentle touch.",
      icon: "🌙"
    },
    {
      title: "Improved Product Intake",
      description: "Following our procedure, your skin can absorb serums and other skincare products. Its enhanced absorption ensures that the healthy components in your skincare routine go deep into your skin, optimizing their effectiveness and offering the best possible hydration and nourishment.",
      icon: "💧"
    },
    {
      title: "Skin Improvement",
      description: "After receiving our treatment, your skin feels supple, vibrant, and smooth. The appearance of fine lines and wrinkles is lessened, leaving your skin looking youthful and refreshed, due to the promotion of cell turnover and collagen formation with the Best Moroccan Bath Massage Service.",
      icon: "☀️"
    },
    {
      title: "Detoxification",
      description: "Our Moroccan bath services contain a detoxifying aspect that aids in removing impurities from your skin and body. A better complexion and enhanced general health result from this treatment, which revitalizes and cleanses your skin. It's the perfect option for complete cleansing and renewal because detoxification helps to foster a feeling of balance and freshness.",
      icon: "🌊"
    }
  ]

  const whyChooseUs = [
    { icon: Users, title: "Expertly Trained Staff" },
    { icon: Gift, title: "Premium Products" },
    { icon: Bed, title: "Luxurious Ambiance" },
    { icon: Handshake, title: "Customized Experience" },
    { icon: Settings, title: "Comprehensive Services" },
    { icon: SmileIcon, title: "Exceptional Customer Service" }
  ]

  const faqs = [
    {
      question: "What is the duration of a Moroccan Bath session?",
      answer: "Our typical session lasts between 60 and 90 minutes, depending on the package you can select and book an appointment through our website."
    },
    {
      question: "Is Moroccan Bath appropriate for every kind of skin?",
      answer: "Sure, our therapists may modify the treatment to accommodate different skin types and levels of sensitivity. If you have any skin issues, before the treatment process inform the therapist."
    },
    {
      question: "How frequently must I get a Moroccan bath?",
      answer: "We advise taking a Moroccan bath every four to six weeks for best effects. According to your skin softness, stress, and relaxation, you may choose the sessions."
    },
    {
      question: "What attire is appropriate for the procedure?",
      answer: "During the procedure, we offer you disposable underwear for your comfort and privacy."
    },
    {
      question: "Can I use Moroccan Bath in addition to other spa treatments?",
      answer: "Obviously! Many clients opt to enhance their Moroccan Bath with additional treatments for an indulgent full day. After taking a Moroccan bath, you can consult with a therapist to choose which massage treatment is best for your skin."
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Moroccan Bath Massage",
    "provider": {
      "@type": "Spa",
      "name": "River Salon and Day Spa",
      "url": "https://www.riverdayspa.com",
      "telephone": "+919500029234 ",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressCountry": "IN"
      }
    },
    "description": "Authentic Moroccan bath massage with deep cleansing, exfoliation and relaxation"
  }

  return (
    <main className="w-full overflow-x-hidden select-text bg-[#F8F5F0] pt-32">
      <header className="relative w-full h-[500px] overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${moroccanMassageImageData.hero.src}')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.p
            className="text-4xl sm:text-6xl font-bold text-white drop-shadow-2xl text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Moroccan Bath
          </motion.p>
        </div>
      </header>

      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative bg-[#F8F5F0] text-[#3E3636] w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1
              className="text-3xl lg:text-4xl font-bold text-[#8D7B68] mb-6"
              {...fadeUp}
            >
              Best Moroccan Bath Massage in Bangalore: Nourish in Luxurious Relaxation
            </motion.h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full mb-16">
            <motion.div
              className="text-center lg:text-left space-y-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4"
                {...fadeUp}
              >
                Experience the Ultimate Moroccan Bath at River Salon and Day Spa
              </motion.span>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                At <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon and Day Spa,</Link> experience the age-old practice of purifying and revitalizing yourself with our genuine <strong>Moroccan Bath Massage.</strong> The age-old Middle Eastern custom is brought to Bangalore by our skilled therapists, who will provide you with an incredibly life-changing experience.
              </motion.p>

              <motion.p
                className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4"
                {...fadeUp}
              >
                Exposing the Moroccan Bath Relaxation 
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                A mild steam session opens your pores and prepares your skin for our <strong>Moroccan Bath Center.</strong> Then, our trained therapists will exfoliate your whole body, eliminating pollutants and dead skin cells, using a unique black soap along with olive oil. Your skin will be smooth, radiant, and intensely hydrated during the treatment, which ends with a calming massage with nourishing Moroccan oil.
              </motion.p>
            </motion.div>

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
                <div className="absolute inset-0 bg-green-600 rounded-3xl transform rotate-3" />
                <div className="bg-gray-200 rounded-3xl transform -rotate-3 relative z-10">
                  <CustomImage
                    src={moroccanMassageImageData.content.src}
                    alt={moroccanMassageImageData.content.alt}
                    width={600}
                    height={400}
                    className="rounded-3xl shadow-xl w-full h-auto lg:h-[400px] object-cover transform transition-transform duration-300 hover:scale-105 bg-gray-200"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Moroccan Bath Packages Section */}
          <section
            className="relative bg-gray-100 py-12 px-6 md:px-12 lg:px-20 text-center bg-fixed bg-center z-10 mb-16 rounded-2xl"
            style={{ backgroundImage: `url('${moroccanMassageImageData.background.src}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
            <div className="relative max-w-3xl mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">
                Best Moroccan Bath Packages - River Salon and Day Spa
              </h2>
              <p className="mb-6 text-base">
                Our best-rated Moroccan bath services at River Salon and Day Spa will provide you with the utmost relaxation. With our <Link href="/riverdayspa-packages-singles/" className="text-green-400 font-semibold hover:underline">luxurious packages </Link> designed to treat you from head to toe, revel in deep cleaning, exfoliation, and refreshment to lead your next day completely stress-free. Make an <strong>appointment right now </strong>to relax and rejuvenate in a calm setting.
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

          {/* Benefits Section */}
          <div className="text-center mb-12">
            <motion.h3
              className="text-2xl md:text-3xl font-extrabold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Benefits of Moroccan Bath Services
            </motion.h3>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
          </div>

          <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#A9907E]/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#8D7B68]/10 to-transparent rounded-tr-2xl" />
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <span className="text-xl font-bold text-[#8D7B68] mb-3 group-hover:text-green-600 transition-colors duration-300">{service.title}</span>
                <p className="text-[#3E3636]/80 text-sm leading-relaxed">{service.description}</p>
                <div className="absolute inset-0 bg-gradient-to-t from-[#8D7B68]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              </motion.div>
            ))}
          </article>

          {/* Why Choose Us Section */}
          <div className="text-center mb-12">
            <motion.p
              className="text-2xl lg:text-3xl font-extrabold text-[#8D7B68] mb-6"
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
                className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-4 border border-[#A9907E]/20 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#E6D7C3] via-[#D2B48C] to-[#C19A6B] rounded-full flex items-center justify-center shadow-lg mb-2 group-hover:scale-110 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  <item.icon className="text-green-600 w-8 h-8 relative z-10" />
                </div>
                <span className="text-sm font-semibold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="text-center mb-12">
            <motion.h4
              className="text-2xl sm:text-3xl font-extrabold text-[#8D7B68] mb-6"
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
                  className="relative bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#A9907E]/20 hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="flex justify-between w-full text-left text-base sm:text-lg font-semibold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-xl text-[#A9907E] group-hover:text-green-600 transition duration-300">
                      {openIndex === index ? '-' : '+'}
                    </span>
                  </button>
                  {openIndex === index && (
                    <motion.p
                      className="text-[#3E3636]/80 mt-4 text-sm sm:text-base leading-relaxed"
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

      {/* CTA Section */}
      <section
        className="relative w-full py-16 select-text bg-cover bg-center"
        style={{
          backgroundImage: `url('${moroccanMassageImageData.hero.src}')`
        }}
      >
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
            <motion.h5
              className="text-xl md:text-2xl lg:text-4xl text-center font-extrabold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Now Experience the Enchantment of a Moroccan Bath
            </motion.h5>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">
              Make an appointment for a Moroccan Bath at River Salon and Day Spa to start your journey toward renewal and relaxation. Visit us at <strong>Bangalore, Vellore, and Tirupur </strong>to see the difference in care and quality. Our skilled therapists are prepared to take you to a realm of delightful refreshments.
            </p>

            <motion.button
              className="bg-gradient-to-r from-green-600 to-green-400 text-white text-lg font-semibold py-4 px-12 rounded-full shadow-lg hover:from-green-500 hover:to-green-300 hover:shadow-green-400/50 transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="tel:+919500029234 "> 📞Book Now</a>
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MoroccanBathPageSEO