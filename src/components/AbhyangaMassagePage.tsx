'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Leaf, Users, Sparkles, Star, Gift } from 'lucide-react'
import CustomImage from './CustomImage'
import { abhyangaMassageImageData } from '../data/abhyangaMassageImageData'

const AbhyangaMassagePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  const services = [
    {
      title: "Enhanced Circulation",
      description: "Abhyanga massage promotes blood circulation and, therefore, improves blood flow to different parts of the body. This improved circulation can ensure the delivery of nutrients to various tissues and organs, ensuring vitality and quick recovery after physical exercise or injury.",
      icon: "💓",
    },
    {
      title: "Deep Relaxation",
      description: "The massage can induce deep relaxation and reduce the stress and anxiety of a patient. The combination of rhythmic strokes with ayurvedic oils works in a calming action on the nervous system, thus relaxing the mind and muscles and improving mental health.",
      icon: "🧘",
    },
    {
      title: "Skin Rejuvenation",
      description: "Abhyanga massage helps to have glowing skin with essential oils that nourish your skin. It gently smoothes the skin, removing wrinkles, scars, and hyperpigmentation, and gives elasticity back, making one feel softer skin.",
      icon: "✨",
    },
    {
      title: "Detoxification",
      description: "Your entire body is detoxified by the massage since it speeds up the lymphatic system's removal of toxins. Massage and essential oils improve body detoxification processes, and it stimulates detoxification naturally.",
      icon: "🌿",
    },
    {
      title: "Improved Joint Mobility",
      description: "The massage conducted on joints, improves flexibility by fighting stiffness and increasing the range of motion. Warm oils combined with gentle stretches help loosen muscle tension and support healthier, more flexible joints.",
      icon: "🤸",
    },
    {
      title: "Enhanced Energy Flow",
      description: "The holistic practice will restore and rebalance your energy flow so that the necessary energy, or prana, moves in balance within your body. A rejuvenation of this kind brings a gain in vitality and clarity of mind and refreshes the feeling of well-being.",
      icon: "⚡",
    },
  ]

  const whyChooseUs = [
    { icon: Heart, title: "Deep Relaxation" },
    { icon: Leaf, title: "Skin Rejuvenation" },
    { icon: Users, title: "Detoxification" },
    { icon: Sparkles, title: "Personalized Care" },
    { icon: Star, title: "Quality Products" },
    { icon: Gift, title: "Luxurious Ambiance" },
  ]

  const faqs = [
    {
      question: "What to do after an Abhyanga massage?",
      answer: "It's now important to rest as much as possible over the coming couple of hours. Do not do any heavy exercise or work; just take plenty of fluids to rehydrate and detoxify your systems.",
    },
    {
      question: "Who should not do abhyanga massage?",
      answer: "Abhyanga should be avoided in any case of pregnancy, skin infection, or grave ailments. If you have any doubts, consult with your doctor or any health professionals.",
    },
    {
      question: "Which oil is best for abhyanga?",
      answer: "Sesame oil is the best for abhyanga massage, but you can choose oils according to your skin needs.",
    },
    {
      question: "Is Abhyanga done in the morning or evening?",
      answer: "Abhyanga, in the traditional sense, is the morning ritual practiced to energize the body for the whole day ahead.",
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full overflow-x-hidden select-text bg-[#F8F5F0] pt-32">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <CustomImage
          src={abhyangaMassageImageData.hero.src}
          alt={abhyangaMassageImageData.hero.alt}
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
            Abhyanga Massage
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
              Best Abhyanga Massage Center - Experience Ultimate Renewal
            </motion.h1>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full select-text mb-16">
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
                Rediscover Serenity with Authentic Abhyanga Healing
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6 select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Pamper yourself with the classic Ayurvedic ritual that is an Abhyanga massage at our <Link href="/best-body-massage-center" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Best Body Massage Center in Chennai.</Link> Avail yourself of deep benefits from age-old Ayurvedic methods that aid in recovery in an absolutely natural way. Oil is a key component of this practice. When combined with expert massage strokes, it enhances overall health and wellness. Generous amounts of Ayurvedic oils are applied to your body, and the therapist's smooth and gentle movements ensure the oil penetrates deeply.
              </motion.p>

              <motion.p
                className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4 select-text"
                {...fadeUp}
              >
                Indulge in the Art of Traditional Abhyanga Therapy
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                This Abhyanga massage will not only help in improving health but will also leave your skin smooth, thus reducing wrinkles, scars, and hyperpigmentation. Nourishing oils and strokes of therapy rejuvenate the body from the inside out. You will feel relieved of the stress once it is done, having your heartbeat restored to its normal rhythm.
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
                <div className="absolute inset-0 bg-green-600 rounded-3xl transform rotate-3"></div>
                <CustomImage
                  className="relative z-10 rounded-3xl shadow-xl w-full h-auto lg:h-[400px] object-cover transform -rotate-3 transition-transform duration-300 hover:rotate-0"
                  src={abhyangaMassageImageData.content.src}
                  alt={abhyangaMassageImageData.content.alt}
                  width={600}
                  height={400}
                />
              </motion.div>
            </motion.div>
          </div>

          <section className="relative bg-gray-100 py-12 px-6 md:px-12 lg:px-20 text-center bg-fixed bg-center z-10 mb-2 rounded-2xl overflow-hidden">
            <CustomImage
              src={abhyangaMassageImageData.background.src}
              alt={abhyangaMassageImageData.background.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl"></div>
            <div className="relative max-w-3xl mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">
                Best Abhyanga Massage Spa - River Salon and Day Spa
              </h2>
              <p className="mb-6 text-base">
                Abhyanga massage differs from all the other massages because it has an absolutely holistic approach, generally comprising a series of sessions. Abhyanga massage makes your body potent in self-healing but does not work on the symptoms. Rather, it goes to the root cause of the chronic condition. Rejuvenation of the body's energy and ensuring its proper flow so that your body works harmoniously and rhythmically—these are what Abhyanga massage will do. <Link href="/best-ayurvedic-massage-spa" className="text-green-400 hover:underline">Ayurvedic masters</Link> recommend regular Abhyanga massage as a factor in well-being while one is in health and clarity of mental faculties. Then, Book your Appointment now at River Day Spa, With this ancient practice included in your routine, it will help balance and focus your body and mind.
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-[#F8F5F0] to-[#EAE0D5] text-[#3E3636] w-full select-text">
        <div className="max-w-7xl mx-auto px-4 select-text">
          <div className="text-center mb-16">
            <motion.h3
              className="text-4xl lg:text-5xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >

              Top Benefits of Abhyanga Massage: Revitalize Your Wellness
            </motion.h3>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 select-text">
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

                      <p className="text-xl font-bold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300 text-center">
                        {service.title}
                      </p>

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
      <section className="py-16 bg-[#F8F5F0] text-[#3E3636] w-full select-text">
        <div className="max-w-7xl mx-auto px-4 select-text">
          <div className="text-center mb-16">
            <motion.p
              className="text-4xl lg:text-5xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Why Choose River Salon and Day Spa?
            </motion.p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center space-y-4 border-2 border-[#A9907E]/20 hover:border-green-400 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-[#D2B48C] rounded-full flex items-center justify-center shadow-md">
                  <item.icon className="text-green-600 w-8 h-8" />
                </div>
                <p className="text-lg font-semibold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="text-center mb-12">
          <motion.h4
            className="text-2xl sm:text-3xl font-extrabold text-[#8D7B68] mb-4"
            {...fadeUp}
          >
            Frequently Asked Questions
          </motion.h4>
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
      <section
        className="relative w-full py-16 select-text bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.riverdayspa.com/assets/massage/best-ayurvedic-abhyanga-full-body-massage-spa-center-chennai-river-day-spa.webp')"
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
              className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Revitalize Your Body and Mind with Expert Care
            </motion.h5>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">
              Have a life-changing Abhyanga massage at our <Link href="/massage-spa-in-trichy" className="text-green-400 font-semibold hover:underline">Spa in Trichy</Link> <strong>and Bangalore, Coimbatore, Trichy, Tripur, Vellore</strong>. Our skilled massage therapists combine the best oils with traditional and modern Indian massage techniques to revitalize your body and mind. Each massage session will make you feel the in-depth relaxation of your body. You can experience a better flow of blood, glowing skin, and relaxation. Feel the perfect combination of skill and care to come out refreshed and revitalized.
            </p>
            <motion.button
              className="bg-gradient-to-r from-green-600 to-green-400 text-white text-lg font-semibold py-4 px-12 rounded-full shadow-lg hover:from-green-500 hover:to-green-300 hover:shadow-green-400/50 transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
               <a href="tel:+919500029234">Book Now</a>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AbhyangaMassagePage