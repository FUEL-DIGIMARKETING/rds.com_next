'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const MassagePage = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  const services = [
    {
      title: "Moroccan Bath Massage",
      description: "A Moroccan Bath Massage in Bangalore is a traditional ritual featuring exfoliation, cleansing, and massage. Steam and natural ingredients help you in ultimate relaxation and keep you fresh, detoxified, and revitalized.",
      image: "https://www.riverdayspa.com/assets/best-moroccan-bath-massage-in-vellore.jpeg",
      link: "/best-moroccan-bath-massage-in-bangalore",
      icon: "🛁"
    },
    {
      title: "Swedish Massage",
      description: "Swedish massage is just a very common method that includes long, flowing strokes, kneading, and circular motions to relax the muscles. It improves circulation and thus helps in relaxation to the fullest, benefiting general well-being with the help of Swedish massage.",
      image: "https://www.riverdayspa.com/assets/massage/best-ayurvedic-thai-full-body-massage-spa-center-chennai-river-day-spa.webp",
      link: "/swedish-massage-service-in-chennai",
      icon: "🤲"
    },
    {
      title: "Balinese Massage",
      description: "A Balinese massage is a treatment consisting of acupressure, aromatherapy, and stretching to gain balance in the flow of energy and to relax muscles and let one go.",
      image: "https://www.riverdayspa.com/assets/massage/best-balinese-full-body-massage-spa-center-chennai.webp",
      link: "/best-balinese-massage-center",
      icon: "🌺"
    },
    {
      title: "Head to Toe Aroma Massage",
      description: "Our Head & Toe Aroma Massage rejuvenates and moisturizes weary feet and head muscles for complete relaxation. It will help reduce apprehension, irritability, and nervousness.",
      image: "https://www.riverdayspa.com/assets/massage/best-head-to-toe-aroma-massage-spa-center-chennai-river-day-spa.webp",
      link: "/best-head-to-toe-aroma-massage-spa",
      icon: "🌸"
    },
    {
      title: "Deep Tissue Massage",
      description: "This ensures relief from chronic pains, reducing muscle tension to improve flexibility, and finally providing better healing along with relaxation.",
      image: "https://www.riverdayspa.com/assets/massage/Best-deep-tissue-full-body-massage-spa-center-chennai.webp",
      link: "/best-deep-tissue-massage-center",
      icon: "💪"
    },
    {
      title: "Sense of Siam Massage",
      description: "Sense of Siam Massage combines the techniques of yoga and acupressure using pressure points and palm pressure for the alignment of internal energy in the body, its balance, and good health.",
      image: "https://www.riverdayspa.com/assets/massage/best-sense-of-siams-full-body-massage-spa-services-chennai-river-day-spa.webp",
      link: "/best-sense-of-siam-massage-center",
      icon: "🧘"
    },
    {
      title: "Detoxifying Massage",
      description: "One of the healing techniques is detoxifying massage, which stimulates lymphatic flow to rid the body of those toxic elements through some massage movements and applied pressure. Revitalize with the best detox massage.",
      image: "https://www.riverdayspa.com/assets/massage/best-detoxifying-full-body-spa-massage-center-chennai.webp",
      link: "/best-detoxifying-massage-center",
      icon: "🌿"
    },
    {
      title: "Sports Massage",
      description: "It is a specialized massage technique developed for the establishment of reduced muscle tension and improvement in performance with stroking and stretching, which, in nature, is sport-specific. It will help you recover easily from your injuries and have peak performance",
      image: "https://www.riverdayspa.com/assets/massage/best-sports-body-massage-spa-center-chennai-river-day-spa.webp",
      link: "/sports-massage-spa-in-chennai",
      icon: "🏃"
    },
    {
      title: "Abhyanga Ayurvedic Massage",
      description: "Abhyanga is the ancient Ayurvedic massage treatment using warm herbal oils in rhythm with the body's energy, helping to bring in general well-being to the body. It will furnish a human with mental peace, nourishing tissues, and detoxification at cellular levels.",
      image: "https://www.riverdayspa.com/assets/massage/best-ayurvedic-abhyanga-full-body-massage-spa-center-chennai-river-day-spa.webp",
      link: "/best-abhyanga-massage-center",
      icon: "🕉️"
    },
    {
      title: "Synchronized Massage",
      description: "Synchronized massage is when the two therapists work in coordination with each other to execute strokes and techniques, maximizing the massage experience. This experience includes a very different massage with four hands that rejuvenates body and soul.",
      image: "https://www.riverdayspa.com/assets/massage/best-Synchronized-full-body-massage-spa-center-chennai-river-day-spa.webp",
      link: "/best-synchronized-massage-spa",
      icon: "👥"
    },
    {
      title: "Foot Reflexology Massage",
      description: "Foot reflexology massage is the concept whereby certain points in the feet are subjected to pressure. These correspond in a particular manner with the different organs and systems that make up the human body. Your feet and entire body will benefit from this as well.",
      image: "https://www.riverdayspa.com/assets/massage/best-foot-Reflexology-full-body-massage-spa-center-chennai-river-day-spa.webp",
      link: "/best-foot-reflexology-massage",
      icon: "🦶"
    },
    {
      title: "Thai Massage",
      description: "It is an indigenous therapy to Thailand, combining stretching, acupressure, and rhythmic movements done on a mat, often including yoga-like postures. River Day Spa represents the ultimate Thai massage.",
      image: "https://www.riverdayspa.com/assets/massage/relaxation-techniques-for-sleep-using-massage-therapy.webp",
      link: "/best-thai-body-massage-center",
      icon: "🇹🇭"
    }
  ]

  return (
    <div className="w-full overflow-x-hidden select-text bg-[#F8F5F0] pt-32" style={{ userSelect: 'text', WebkitUserSelect: 'text', MozUserSelect: 'text' }}>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://www.riverdayspa.com/assets/best-body-massage-center-in-chennai.webp')",
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
            Elevate Your Energy
          </motion.h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative bg-[#F8F5F0] text-[#3E3636] w-full select-text" itemScope itemType="https://schema.org/Service">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full select-text mb-16">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left select-text space-y-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-[#8D7B68] mb-6 select-text"
                {...fadeUp}
                itemProp="name"
              >
                Best Body Massage Spa - Treat Your Body and Soul to Our Curated Selection
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6 select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                itemProp="description"
              >
                Looking for a spot to blow off some steam, boost your energy, decrease anxiety, and even out your skin tone and texture? Right in your neighborhood, let us help you be restored from the daily grind through our convenient, customized, and affordable massage services.
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                Need to find time from that never-ending to-do list for a <Link href="/book-spa-service-appointment" className="text-green-600 font-semibold hover:text-green-500 transition-colors">spa treatment in Chennai?</Link> Skip the extra miles and let us bring the pampering to you.
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
                <div className="bg-gray-200 rounded-2xl">
                  <Image
                    className="rounded-2xl shadow-2xl border-4 border-[#A9907E]/30 w-full bg-gray-200"
                    src="https://www.riverdayspa.com/asset/top-spa-in-bangalore.webp"
                    alt="Top spa in Bangalore"
                    width={600}
                    height={400}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#A9907E]/20 to-transparent pointer-events-none" />
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
                Best Body Massage Center - River Salon and Day Spa
              </motion.h2>
              <motion.p
                className="text-lg mb-8 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Massages can relieve your mental stress, manage your pain and just relax, our best massage therapy has been designed with this in mind. We have various massage treatments ranging from Moroccan Bath Massage to Couple Massage, in which our skilled therapist will let you feel relaxed.
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

          {/* Services Introduction */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              <span className="mr-3">💆</span>
              Body Massage Therapy Service
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-6" />
            <motion.h3
              className="text-2xl font-semibold text-[#8D7B68] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Explore Our Range of Body Massages that Pamper your Body and Soul
            </motion.h3>
            <motion.p
              className="text-xl text-[#3E3636]/80 select-text font-medium max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              At <Link href="https://www.riverdayspa.com/body-massage-in-chennai-egmore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Day Spa in Chennai,</Link> our best massage services ensure you leave feeling completely rejuvenated. Our treatments promote faster healing from injuries, alleviate mental stress, improve lymphatic and blood circulation, and soothe tense muscles.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-[#F8F5F0] to-[#EAE0D5] text-[#3E3636] w-full select-text">
        <div className="max-w-7xl mx-auto px-4 select-text">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 select-text">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="relative h-96 w-full">
                  <div className="relative h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#A9907E]/20 group-hover:shadow-3xl transition-all duration-500">
                    {/* Decorative Corner Elements */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#8D7B68]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-green-500/20 to-transparent" />

                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30 z-10" />
                      <Image
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        src={service.image}
                        alt={service.title}
                        width={300}
                        height={200}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />

                      {/* Floating Icon */}
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-[#8D7B68] text-xl">{service.icon}</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-1 bg-gradient-to-r from-green-500 to-[#8D7B68] rounded-full" />
                        <div className="w-2 h-2 bg-[#A9907E] rounded-full" />
                      </div>

                      <h3
                        className="text-lg font-bold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300 leading-tight"
                        itemProp="name"
                      >
                        {service.title}
                      </h3>

                      <p
                        className="text-sm text-[#3E3636]/70 leading-relaxed line-clamp-3"
                        itemProp="description"
                      >
                        {service.description}
                      </p>

                      {/* Action Button */}
                      <div className="pt-2">
                        <Link
                          href={service.link}
                          className="inline-flex items-center text-xs font-semibold text-green-600 group-hover:text-[#8D7B68] transition-colors duration-300"
                        >
                          <span>More Info</span>
                          <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8D7B68]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Info Button */}
          <motion.div
            className="flex justify-center mt-12"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/book-spa-service-appointment"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg"
            >
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MassagePage