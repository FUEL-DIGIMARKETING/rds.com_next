'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Leaf, Sprout, Building, Users, Flame, Heart } from 'lucide-react'
import CustomImage from './CustomImage'
import { senseOfSiamMassageImageData } from '../data/senseOfSiamMassageImageData'

const SenseOfSiamMassagePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  const services = [
    {
      title: "Stress Reduction",
      description: "Sense of Siam massage is deep relaxation that soothes the mental tension and relieves one of stress. Soothing the mind and body aids in reducing anxiety, refines one's feeling of refreshment, and rejuvenates mentally. Experience a deep sense of calmness that improves on your general well-being and strength.",
      icon: "🧘",
    },
    {
      title: "Enhanced Flexibility",
      description: "Massaging methods improve elasticity of the muscles and mobility of joints. With regular sessions, one can realize improved flexibility in a way that daily activities are made easier and comfortable to do while avoiding accidents that may result from muscle stiffness.",
      icon: "🤸",
    },
    {
      title: "Pain Relief",
      description: "This massage is quite potent in the alleviation of chronic pain and muscle soreness. Soothe discomfort, reduce inflammation, and promote overall pain relief with heat therapy combined with massage using essential oils. Leave feeling long-term relieved with techniques that will get at the root of your problem areas.",
      icon: "💪",
    },
    {
      title: "Improved Circulation",
      description: "Massage manipulations and herbal oils increase blood flow, thus improving circulation all over the body. Improved circulation supports better delivery of oxygen and nutrients to tissues and promotes recovery with good general health.",
      icon: "❤️",
    },
    {
      title: "Detoxification",
      description: "Massage detoxifies the body naturally using herbal oils like Turmeric and Lemon. These herbs help wash out the toxins from the body, reduce inflammation, and depict a healthier skin appearance, which visibly gives the individual revitalized complexion and a feeling of internal purity.",
      icon: "🌿",
    },
    {
      title: "Enhanced Energy Levels",
      description: "This holistic Sense of Siam massage rebalances the energy of the whole body, restoring vitality. It rejuvenates one's feeling of refreshment and energy by cleansing imbalances and blockages of a physical and psychic nature in the entire energy system. It is a harmonious tincture between relaxation and invigoration that improves life every day.",
      icon: "⚡",
    },
  ]

  const whyChooseUs = [
    { icon: Leaf, title: "Traditional Techniques" },
    { icon: Sprout, title: "Holistic Herbal Oils" },
    { icon: Building, title: "Serene Environment" },
    { icon: Users, title: "Tailored Treatments" },
    { icon: Flame, title: "Innovative Heat Therapy" },
    { icon: Heart, title: "Personalized Care" },
  ]

  const faqs = [
    {
      question: "What is Sense of Siam massage?",
      answer: "Sense of Siam massage enforces traditional techniques with modern heat therapy and herbal oils for stress relief, increased flexibility, and improved well-being.",
    },
    {
      question: "How often should I get a Sense of Siam massage?",
      answer: "It can be taken often as once a week or once a month which will give you the most effective results. It also depends on your needs and goals.",
    },
    {
      question: "How long does a typical session last?",
      answer: "The average massage at Sense of Siam takes from 60 to 90 minutes, depending on individual needs and requirements. On request, there are possibilities for a longer session.",
    },
    {
      question: "What will happen on my first visit?",
      answer: "During your first visit, you will have a small consultation about your history of health and medical concerns. Afterwards, the therapist personalizes the session according to your need and preference.",
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
          src={senseOfSiamMassageImageData.hero.src}
          alt={senseOfSiamMassageImageData.hero.alt}
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
            Sense of Siam Massage
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
              Best Sense of Siam Massage Center: Sensational Escape at Sense of Siam
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
                Discover Your Ultimate Oasis of Calm
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6 select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Sense of Siam Massage at <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon and Day Spa</Link> brings in the harmonious blend of various massage techniques that were inspired by traditional practices from the Vedic era. It combines heat therapy for soothing painful knots and incorporates a range of herbal oils into the massage; this will bring in the elements of aromatherapy along with the classical methods.
              </motion.p>

              <motion.p
                className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4 select-text"
                {...fadeUp}
              >
                Indulge in Blissful, Deep Relaxation
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our adept therapists extract the power of essential oils to balance hydration and energy, hence offering just the right solution for soothing overworked nerves and muscles. Every session is customized to meet your individual requirements, making sure it works right down to the very depth. Experience this rejuvenating therapy at <Link href="/body-massage-in-chennai-egmore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Best Spa Service in Chennai.</Link>
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
                  src={senseOfSiamMassageImageData.content.src}
                  alt={senseOfSiamMassageImageData.content.alt}
                  width={600}
                  height={400}
                />
              </motion.div>
            </motion.div>
          </div>

          <section className="relative bg-gray-100 py-12 px-6 md:px-12 lg:px-20 text-center bg-fixed bg-center z-10 mb-16 rounded-2xl overflow-hidden">
            <CustomImage
              src={senseOfSiamMassageImageData.background.src}
              alt={senseOfSiamMassageImageData.background.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl"></div>
            <div className="relative max-w-3xl mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">
                Sense of Siam Massage Service - River Salon and Day Spa
              </h2>
              <p className="mb-6 text-base">
                Sense of Siam massage works wonders for fighting stress, anxiety, and tension in an overstretched life. Workaholic people generally have too much stress to handle, which comes out in the form of various ailments like colds, migraines, and headaches. The muscles in the neck will tighten themselves up with painful knots, and the nerves may be strung tight with anxiety all the time. Turmeric and Lemon have cleansing and anti-inflammatory properties to help with these problems. These herbs help in reducing skin inflammation and easing cramps and tension. At River Salon and Day Spa, our essential oils also incorporate the healing properties of these herbs in an effort to provide health concerns for our clients. So Book your Appointment immediately, to experience these healing properties of herbs.
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

              Unveil the Benefits of Sense of Siam Massage
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
            <motion.h3
              className="text-4xl lg:text-5xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Why Choose River Salon and Day Spa?
            </motion.h3>
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
      <section
        className="relative w-full py-16 select-text bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.riverdayspa.com/assets/massage/best-sense-of-siams-full-body-massage-spa-services-chennai-river-day-spa.webp')"
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
              Reclaim Your Zen: Unmatched Relaxation and Renewal Awaits
            </motion.h5>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">
              Bring serenity into your life at <strong>River Salon and Day Spa</strong> and we have various branches <strong>Bangalore, Coimbatore, Trichy, Vellore</strong> and <Link href="/massage-spa-in-tirupur" className="text-green-400 font-semibold hover:underline">Tirupur</Link>. Our professionals will treat you like royalty with luxurious, rejuvenating treatments for mind, body, and spirit. From massage therapies to soothe tight muscles to facials that will rejuvenate your skin, feel ultimate relaxation in an atmosphere of peace. Let yourself go in this retreat of serenity and beauty, specially tailored for you.
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

export default SenseOfSiamMassagePage