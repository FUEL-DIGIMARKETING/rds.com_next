'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, Leaf, Building, Handshake, Smile, Heart } from 'lucide-react'
import CustomImage from './CustomImage'
import { thaiMassageImageData } from '../data/thaiMassageImageData'

const ThaiBodyMassagePage = () => {
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
      title: "Enhanced Flexibility",
      description: "Thai body massage uses unique stretching techniques that will be useful for improving joint mobility and elasticity of muscle. While taking this massage, our therapist will guide you with a series of mild, dynamic stretches that helps in loosing tight muscles.",
      icon: "🤸"
    },
    {
      title: "Deep Muscle Relief",
      description: "Using specific pressure and techniques, This massage gives you long-lasting comfort, and enhances the overall function of muscles and relaxation by increasing blood flow. You can experience a better sense of relief through consistent massages.",
      icon: "💪"
    },
    {
      title: "Improved Circulation",
      description: "By stimulating blood flow, Thai massage improves circulation, facilitating the delivery of oxygen and essential nutrients to tissues. This massage helps not only from physical exertion but also enhances the sense of relaxation and energy levels of your body.",
      icon: "💓"
    },
    {
      title: "Stress Reduction",
      description: "In Thai massage, the rhythmic movements and mild stretching help to reduce stress by relaxing the nervous system. This relaxing effect calms the mind and reduces anxiety. Then, it balances the flow of energy and enhances emotional stability and a sense of overall well-being.",
      icon: "😌"
    },
    {
      title: "Detoxification",
      description: "Thai body massage targets the lymphatic system of our body by stimulating the flow of lymphatic fluids, which helps in the removal of toxins. This enhanced detoxification process supports the immune system, improves overall health and recover from illnesses.",
      icon: "🌿"
    },
    {
      title: "Mental Clarity",
      description: "The holistic approach of Thai massage integrates physical, mental, and emotional healing, promoting overall well-being. It's help you get better mental clarity, increased focus, and a relaxed mindset, than before receiving massages.",
      icon: "🧠"
    }
  ]

  const whyChooseUs = [
    { icon: Building, title: "Authentic Techniques" },
    { icon: Leaf, title: "Healing Stretches" },
    { icon: Users, title: "Energizing Flow" },
    { icon: Handshake, title: "Holistic Wellness" },
    { icon: Smile, title: "Deep Tissue Relief" },
    { icon: Heart, title: "Mindful Movements" }
  ]

  const faqs = [
    {
      question: "What happens in Thai body Massage?",
      answer: "Our therapists use rhythmic stretching, acupressure, and mild movements to improve the flexibility of your body and promote relaxation."
    },
    {
      question: "What to wear for a Thai massage?",
      answer: "You can wear breathable clothes which do not give any uncomfortable feel while stretching and moving."
    },
    {
      question: "Is there any difference between massage and Thai massage?",
      answer: "Sure, Traditional massage focuses on muscle kneading and calming techniques, and Thai massage uses stretching, acupressure and yoga-like movements."
    },
    {
      question: "How long does Thai massage last?",
      answer: "Usually, it takes 60-90 minutes, but it may vary according to your choice of package."
    }
  ]

  return (
    <main className="w-full overflow-x-hidden select-text bg-[#F8F5F0] pt-32">
      <header className="relative w-full h-[500px] overflow-hidden">
        <CustomImage
          src={thaiMassageImageData.hero.src}
          alt={thaiMassageImageData.hero.alt}
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
            Thai Body Massage
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
              Best Thai Body Massage Center: Discover the Ultimate Thai Bliss
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
              <motion.p
                className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4"
                {...fadeUp}
              >
                Indulge in Genuine Relaxation and Rejuvenation
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                On the massage table, after the customer lies down they are relaxed by hearing calming music and a peaceful environment. Our therapists at <Link href="/best-body-massage-center" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon and Day Spa</Link> use rhythmic massage stretches on their muscles, relaxing deep tissues which reduces both stress and body pain. The therapist gently guides your body into different massage therapies, while nerves are stretched and the body gets exercise. The gentle kneading of muscles improves blood flow, regaining your energy on every nerve and cell.
              </motion.p>

              <motion.p
                className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4"
                {...fadeUp}
              >
                Experience the healing power of Thai body massage
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                The Thai body massage improves the energy levels of your body and makes it even more flexible. After the massage, you can enjoy your young appearance with shiner, and healthier skin. At River Salon and Day Spa, we offer personalized massages according to your needs. To rejuvenate your skin, visit the <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Best Spa in Chennai.</Link>
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
                    src={thaiMassageImageData.content.src}
                    alt={thaiMassageImageData.content.alt}
                    width={600}
                    height={400}
                    className="rounded-3xl shadow-xl w-full h-auto lg:h-[400px] object-cover transform transition-transform duration-300 hover:scale-105 bg-gray-200"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Thai Massage Packages Section */}
          <section className="relative bg-gray-100 py-12 px-6 md:px-12 lg:px-20 text-center bg-fixed bg-center z-10 mb-16 rounded-2xl overflow-hidden">
            <CustomImage
              src={thaiMassageImageData.background.src}
              alt={thaiMassageImageData.background.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
            <div className="relative max-w-3xl mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">
                Thai Massage Service - River Salon and Day Spa
              </h2>
              <p className="mb-6 text-base">
                You can experience the ancient art of Thai body massage at River Salon and Day Spa. Our trained therapist uses the best techniques to give deep tissue relief, calming stretches, and overall wellness. This unique technique relaxes your body and improves flexibility and overall balance of your body. This will give you a state of blissful relaxation. So book an appointment for a relaxing experience that makes you feel relaxed and refreshed.
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
              className="text-2xl md:text-4xl font-extrabold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              The Healing Power of Thai Body Massage: Unlock the Benefits
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
      <section className="relative w-full py-16 select-text bg-cover bg-center overflow-hidden">
        <CustomImage
          src={thaiMassageImageData.hero.src}
          alt={thaiMassageImageData.hero.alt}
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
              The Discomfort of Using Oil on Your Skin for Massage
            </motion.h4>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">
              Some individuals can have some discomfort while using oils for massages on the body. But at <strong>River Salon and Day Spa - Spa in Chennai,</strong> we have a perfect solution to give you better relaxation. We are involved in a unique Dry Body Massage that eliminates the usage of oil. Our trained therapist provides you with better relaxation and enhances your overall well-being via <Link href="/best-body-massage-center" className="text-green-400 font-semibold hover:underline">Thai Body Massage.</Link>
            </p>

            <motion.button
              className="bg-gradient-to-r from-green-600 to-green-400 text-white text-lg font-semibold py-4 px-12 rounded-full shadow-lg hover:from-green-500 hover:to-green-300 hover:shadow-green-400/50 transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="tel:+919500029234 ">📞 Book Now</a>
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ThaiBodyMassagePage