'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const MoroccanBathPage = () => {
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
      icon: "🧹"
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
      description: "Our Moroccan bath services contain a detoxifying aspect that aids in removing impurities from your skin and body. It's the perfect option for complete cleansing and renewal because detoxification helps to foster a feeling of balance and freshness.",
      icon: "🌊"
    }
  ]

  const whyChooseUs = [
    { icon: "👨💼", title: "Expertly Trained Staff" },
    { icon: "🎁", title: "Premium Products" },
    { icon: "🛏️", title: "Luxurious Ambiance" },
    { icon: "🤝", title: "Customized Experience" },
    { icon: "⚙️", title: "Comprehensive Services" },
    { icon: "😊", title: "Exceptional Customer Service" }
  ]

  const faqs = [
    {
      question: "How frequently must I get a Moroccan bath?",
      answer: "We advise taking a Moroccan bath every four to six weeks for best effects. Depending on your skin softness, stress, and relaxation, you may choose the sessions."
    },
    {
      question: "What is the duration of a Moroccan Bath session?",
      answer: "Our typical session lasts between 60 and 90 minutes, depending on the package you select. You can also book an appointment through our website."
    },
    {
      question: "What attire is appropriate for the procedure?",
      answer: "During the procedure, we offer you disposable underwear for your comfort and privacy."
    }
  ]

  return (
    <div className="w-full overflow-x-hidden select-text bg-[#F8F5F0] pt-32" style={{ userSelect: 'text', WebkitUserSelect: 'text', MozUserSelect: 'text' }}>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://www.riverdayspa.com/assets/best-moroccan-bath-massage-in-vellore.jpeg')",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.h1
            className="text-4xl sm:text-6xl font-bold text-white drop-shadow-2xl text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            itemProp="headline"
          >
            Moroccan Bath
          </motion.h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative bg-[#F8F5F0] text-[#3E3636] w-full select-text">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Best Moroccan Bath Massage in Bangalore: Nourish in Luxurious Relaxation
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full" />
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
              <motion.h3
                className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4 select-text"
                {...fadeUp}
              >
                Experience the Ultimate Moroccan Bath at River Salon and Day Spa
              </motion.h3>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6 select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                At <Link href="/best-body-massage-center" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon and Day Spa,</Link> experience the age-old practice of purifying and revitalizing yourself with our genuine <strong>Moroccan Bath Massage.</strong> The age-old Middle Eastern custom is brought to Bangalore by our skilled therapists, who will provide you with an incredibly life-changing experience.
              </motion.p>

              <motion.h3
                className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4 select-text"
                {...fadeUp}
              >
                Exposing the Moroccan Bath Relaxation
              </motion.h3>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                A mild steam session opens your pores and prepares your skin for our <strong>Moroccan Bath Center.</strong> Then, our trained therapists will exfoliate your whole body, eliminating pollutants and dead skin cells, using a unique black soap along with olive oil. Your skin will be smooth, radiant, and intensely hydrated during the treatment, which ends with a calming massage with nourishing Moroccan oil.
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
                <div className="absolute inset-0 bg-green-600 rounded-3xl transform rotate-3" />
                <div className="bg-gray-200 rounded-3xl transform -rotate-3 relative z-10">
                  <Image
                    className="rounded-3xl shadow-2xl w-full bg-gray-200 transform transition-transform duration-300 hover:rotate-0"
                    src="https://www.riverdayspa.com/assets/moroccan-bath-bangalore.jpeg"
                    alt="Moroccan bath Bangalore"
                    width={600}
                    height={400}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="relative bg-cover bg-center bg-fixed rounded-3xl overflow-hidden mb-16"
            style={{
              backgroundImage: "url('https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp')"
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 py-16 px-8 text-center text-white">
              <motion.h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                {...fadeUp}
              >
                Best Moroccan Bath Packages - River Salon and Day Spa
              </motion.h2>
              <motion.p
                className="text-lg mb-8 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our best-rated Moroccan bath services at River Salon and Day Spa will provide you with the utmost relaxation. With our luxurious packages designed to treat you from <Link href="https://www.riverdayspa.com/best-head-to-toe-aroma-massage-spa" className="text-green-400 hover:text-green-300 transition-colors">head to toe,</Link> revel in deep cleaning, exfoliation, and refreshment to lead your next day completely stress-free.
              </motion.p>
              <motion.button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="https://www.riverdayspa.com/book-spa-service-appointment">Book Now</Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-[#F8F5F0] to-[#EAE0D5] text-[#3E3636] w-full select-text">
        <div className="max-w-7xl mx-auto px-4 select-text">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              <span className="mr-3">🛁</span>
              Benefits of Moroccan Bath Services
            </motion.h2>
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

                      <h3 className="text-xl font-bold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300 text-center">
                        {service.title}
                      </h3>

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
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Why Choose River Salon and Day Spa?
            </motion.h2>
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
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-[#8D7B68] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-[#F8F5F0] to-[#EAE0D5] text-[#3E3636] w-full select-text">
        <div className="max-w-4xl mx-auto px-4 select-text">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full" />
          </div>

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
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#F8F5F0] text-[#3E3636] w-full select-text">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold text-[#8D7B68] mb-6"
            {...fadeUp}
          >
            Now Experience the Enchantment of a Moroccan Bath
          </motion.h2>
          <motion.p
            className="text-lg text-[#3E3636]/80 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Make an appointment for a Moroccan Bath at <strong>River Salon and Day Spa</strong> to start your journey toward renewal and relaxation. Visit us at <Link href="/spa-in-bangalore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Bangalore,</Link> <strong>Vellore, Chennai, Coimbatore, Trichy and Tirupur.</strong> to see the difference in care and quality.
          </motion.p>
          <motion.button
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="tel:+919500029234 ">📞 Book Now</Link>
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default MoroccanBathPage