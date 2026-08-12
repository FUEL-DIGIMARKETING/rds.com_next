'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomImage from './CustomImage'
import { balineseMassageImageData } from '../data/balineseMassageImageData'
import { Building, Leaf, Users, Handshake, Smile, Heart } from 'lucide-react'

const BalineseMassagePage = () => {
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
      title: "Soothes Aches and Tension",
      description: "Relief from muscle tension and discomfort through Balinese massage. The treatments involve gentle stretches and calming oils. The Massage will give you complete relaxation from both physical pain and mental stress, which keeps you feeling refreshed",
      icon: "🙌"
    },
    {
      title: "Promotes Relaxation",
      description: "With gentle, rhythmic strokes and techniques, Balinese massage targets specific spots that give you complete relaxation. Physical tension and mental stress will be eliminated while doing these massages. It allows you to feel at ease and lowers the total amount of tension in your body.",
      icon: "🧘"
    },
    {
      title: "Enhances Flexibility",
      description: "It involves gentle stretches offering to unwind tight muscles and joints. These approaches improve general flexibility, reduce stiffness, and increase range of motion, all of which contribute to better physical comfort and well-being.",
      icon: "🕊️"
    },
    {
      title: "Boosts Circulation",
      description: "Balinese massage involves some rhythmic movements and exact pressure. It boosts the flow of blood throughout your body, enhancing oxygen delivery, nutrition to organs, blood flow to the result, and general relaxation.",
      icon: "💗"
    },
    {
      title: "Balances Energy",
      description: "Restore your balance with Balinese massage services. It promotes an intense feeling of well-being and inner peace while also improving general equilibrium by removing impediments and promoting energy flow.",
      icon: "☯️"
    },
    {
      title: "Supports Well-being",
      description: "By using calming techniques, Balinese massage evolves overall well-being, quiets the mind, and alleviates tension. Each massage session promotes a balance of wellness and makes you feel refreshed.",
      icon: "🌿"
    }
  ]

  const whyChooseUs = [
    { icon: Users, title: "Staff Expertise in Relaxation" },
    { icon: Building, title: "Luxurious Ambiance" },
    { icon: Leaf, title: "Quality Products" },
    { icon: Handshake, title: "Exceptional Service" },
    { icon: Smile, title: "Holistic Approach" },
    { icon: Heart, title: "Tailored Treatments" }
  ]

  const faqs = [
    {
      question: "What is special about Balinese Massage?",
      answer: "Balinese Massage is generally suitable for everyone. But if you have any medical concerns or conditions consult with your doctor before the massage session.Mild stretching, acupressure, and aromatherapy which promote relaxation, and release muscle tension are special about Balinese massage."
    },
    {
      question: "Is Balinese massage suitable for everyone?",
      answer: "Balinese Massage is generally suitable for everyone. But if you have any medical concerns or conditions consult with your doctor before the massage session."
    },
    {
      question: "How often should I get a Balinese massage?",
      answer: "Getting a Balinese massage once a month is ideal for relaxation and muscle tension relief, but personally according to your choice"
    },
    {
      question: "Does Balinese Massage include a head?",
      answer: "Yes, To relax the scalp and overall well-being, Balinese massage involves the head with gentle methods."
    }
  ]

  return (
    <main className="w-full overflow-x-hidden select-text bg-[#F8F5F0] pt-32">
      {/* Hero Section with Particle Effects */}
      <header className="relative w-full h-[500px] overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${balineseMassageImageData.hero.src}')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Floating Particles */}
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
            Balinese Massage
          </motion.p>
        </div>
      </header>

      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative bg-[#F8F5F0] text-[#3E3636] w-full">
        <div className="max-w-7xl mx-auto">
          {/* Animated Title with Morphing Background */}
          <div className="text-center mb-16">
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-[#8D7B68]/20 rounded-3xl blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.h1
                className="relative text-3xl lg:text-4xl font-bold text-[#8D7B68] mb-6 px-8 py-4"
                {...fadeUp}
              >
                Best Balinese Massage Center - From Stress to Bliss
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

          {/* Content Section with Liquid Morphing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full mb-16">
            <motion.div
              className="text-center lg:text-left space-y-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {/* Liquid Morphing Card 1 */}
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
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent rounded-3xl"
                  animate={{
                    background: [
                      'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, transparent 100%)',
                      'linear-gradient(225deg, rgba(141, 123, 104, 0.1) 0%, transparent 100%)',
                      'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, transparent 100%)'
                    ]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.p
                  className="relative text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4"
                  {...fadeUp}
                >
                  Indulge in Ancient Healing Traditions
                </motion.p>
                <motion.p
                  className="relative text-[#3E3636]/90 text-base text-justify leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  At River Salon and Day Spa, the <Link href="/best-body-massage-center" className="text-green-600 font-semibold hover:text-green-500 transition-colors">best spa in Chennai</Link>, you may experience the healing effects of Balinese massage. Our expert therapists integrate centuries-old practices with modern calming-down approaches to provide an amazing experience. The aromatic essential oils and relaxing music will take you to the tropical Paradise of Bali.
                </motion.p>
              </motion.div>

              {/* Pulsating Card 2 */}
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
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.p
                  className="relative text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4"
                  {...fadeUp}
                >
                  Exploring the Best Balinese Massage
                </motion.p>
                <motion.p
                  className="relative text-[#3E3636]/90 text-base text-justify leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Bali, Indonesia, is the place where the Traditional Balinese massage progressed which incorporates the <Link href="/best-ayurvedic-massage-spa" className="text-green-600 font-semibold hover:underline">Ayurvedic,</Link> Chinese, and Indonesian practices. Our professional therapists in Chennai will bring you to this island oasis using expert relaxation techniques. Balinese foot massages relieve the mind and body while targeting stress zones to promote self-healing.Visit Chennai's top spa for unrivaled Balinese massage services.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Enhanced Image with Orbital Elements */}
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
                {/* Orbital Elements */}
                <motion.div
                  className="absolute -inset-8 border-2 border-green-400/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -inset-12 border border-[#8D7B68]/20 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                  className="absolute inset-0 bg-green-600 rounded-3xl transform rotate-3"
                  whileHover={{ rotate: 6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="bg-gray-200 rounded-3xl transform -rotate-3 relative z-10 overflow-hidden">
                  <CustomImage
                    src={balineseMassageImageData.content.src}
                    alt={balineseMassageImageData.content.alt}
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

          {/* Balinese Massage Packages Section */}
          <section
            className="relative bg-gray-100 py-12 px-6 md:px-12 lg:px-20 text-center bg-fixed bg-center z-10 mb-16 rounded-2xl"
            style={{ backgroundImage: `url('${balineseMassageImageData.background.src}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
            <div className="relative max-w-3xl mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">
                Best Balinese Massage Packages - River Salon and Day Spa
              </h2>
              <p className="mb-6 text-base">
                Get relaxed muscle tension,<Link href="/best-body-massage-center" className="text-green-400 font-semibold hover:underline"> Balinese massage at River Salon and Day Spa </Link> will be an excellent spa treatment that uses different types of hand techniques and mild stretching. This stimulates oxygen flow, flexibility, and relaxation, ultimately relieving back pain. Another important method is a percussion instrument which uses rhythmic beating to stimulate the skin's surface. The therapeutic use of essential oils greatly enhances the experience, promoting peaceful post-session relaxation.
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

          {/* Benefits Section with Hexagonal Grid */}
          <div className="text-center mb-12">
            <motion.h3
              className="text-xl md:text-3xl font-bold text-[#8D7B68] mb-6"
              {...fadeUp}
            >
              Unlock Your Wellness Potential: Benefits of Balinese Massage
            </motion.h3>
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

          {/* Why Choose Us with Spinning Elements */}
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

      {/* CTA Section with Ripple Effect */}
      <section
        className="relative w-full py-16 select-text bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url('${balineseMassageImageData.hero.src}')`
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        {/* Ripple Effects */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-green-400/30 rounded-full"
          style={{ x: '-50%', y: '-50%' }}
          animate={{
            scale: [1, 2, 3],
            opacity: [0.6, 0.3, 0],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-[#8D7B68]/30 rounded-full"
          style={{ x: '-50%', y: '-50%' }}
          animate={{
            scale: [1, 2.5, 4],
            opacity: [0.4, 0.2, 0],
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
            <motion.h4
              className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Experiencing the relaxing Balinese Massage
            </motion.h4>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">
              To enjoy the relaxing experience of Balinese massage, make an immediate appointment at <strong>River Salon and Day Spa</strong> <span className="text-white font-bold">Vellore, Trichy, Chennai, Coimbatore,</span> and <Link href="/massage-spa-in-tirupur" className="text-green-400 font-semibold hover:underline">Tirupur.</Link> Our professional therapist will take you to the relaxation state through their calming techniques and aromatic oils. Our quiet environment will give you pure relaxation and bliss.
            </p>

            <motion.button
              className="bg-gradient-to-r from-green-600 to-green-400 text-white text-lg font-semibold py-4 px-12 rounded-full shadow-lg hover:from-green-500 hover:to-green-300 hover:shadow-green-400/50 transition-all duration-300 ease-in-out"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="tel:+919500029234 ">📞 Book Now</a>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default BalineseMassagePage