'use client'

import React from 'react'
import { motion } from 'framer-motion'
import CustomImage from './CustomImage'
import Link from 'next/link'
import { Sparkles, Flower2 } from 'lucide-react'
import { aboutImageData } from '../data/aboutImageData'

const AboutPage = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  return (
    <div className="w-full overflow-x-hidden select-text bg-[#F8F5F0]" style={{ userSelect: 'text', WebkitUserSelect: 'text', MozUserSelect: 'text' }}>
      {/* Hero Section */}
      <header className="relative w-full h-[700px] overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${aboutImageData.heroImage.src}')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex pt-40 items-center justify-center h-full">
          <motion.p
            className="text-4xl sm:text-6xl font-bold text-white drop-shadow-2xl text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            itemProp="headline"
          >
            About Us
          </motion.p>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative bg-[#F8F5F0] text-[#3E3636] w-full select-text">
        {/* Section Title */}
        <div className="text-center mb-16 select-text relative z-30">
          <motion.h1
            className="text-2xl lg:text-4xl font-extrabold text-[#8D7B68] mb-6 select-text relative z-40"
            {...fadeUp}
            itemProp="name"
          >
            Best Massage Spa in Chennai With Luxury Atmosphere
          </motion.h1>
          <div className="w-20 h-1 bg-green-600 mx-auto rounded-full relative z-40" />
        </div>

        {/* Flex Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full select-text">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left select-text space-y-8"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-[#8D7B68] mb-6 select-text"
                {...fadeUp}
              >
                Massage Spa In Chennai Offers Relaxation and Rejuvenation!
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-8 relative select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                itemProp="description"
              >
                We are proud to say, that we offer unmatched <Link href="/best-body-massage-center" className="text-green-600 font-semibold hover:text-green-500 transition-colors">"Massage Services"</Link> to our priceless clientele. Our best massage spa in Chennai treats every one of our customers with a high level of attention, and we aim to provide personalized spa treatments in our massage center to meet all your requirements and demands.
              </motion.p>
            </div>

            <div>
              <motion.h3
                className="text-xl font-bold text-[#8D7B68] mb-4 select-text"
                {...fadeUp}
              >
                Best Massage Center gives Harmony of Body and Soul
              </motion.h3>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6 select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our <strong className="text-[#8D7B68]">Best Spa in Chennai</strong> has been aesthetically designed to enchant you into a sanctuary of relaxation and rejuvenation the moment you enter the threshold. We trust that the atmosphere plays a significant role in your spa experience, and our facilities, products, amenities, and equipment are cutting-edge. Our premises are pristinely clean and maintained with the absolute care.
              </motion.p>
            </div>

            <div>
              <motion.h4
                className="text-xl font-bold text-[#8D7B68] mb-4 select-text"
                {...fadeUp}
              >
                Beyond indulgence: our therapists create renewal.
              </motion.h4>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
              >
                Our therapists are friendly and passionate about their work. They involve them in the fashion-forward and continuously keep updated with the latest trends in the fashion industry, and they do more than our best to meet the expectations of our clients and strive to make them experience the <strong className="text-[#8D7B68]">ultimate spa experience.</strong>
              </motion.p>
            </div>
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
                <CustomImage
                  src={aboutImageData.mainImage.src}
                  alt={aboutImageData.mainImage.alt}
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-xl w-full h-auto lg:h-[400px] object-cover transform transition-transform duration-300 hover:scale-105 bg-gray-200"
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#A9907E]/20 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.blockquote
            className="text-center text-[#8D7B68] font-bold text-lg lg:text-xl italic bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#A9907E]/30 shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#A9907E]/10 to-[#8D7B68]/10" />
            <div className="relative z-10">
              <span className="text-green-600 text-4xl">"</span>
              RIVER DAY SPA IS THE PERFECT PLACE TO ESCAPE FROM YOUR BUSY AND STRESSFUL LIFESTYLES!
              COME, EXPERIENCE THE REAL-LIFE SITUATIONS OF SAVING LIFE
              <span className="text-green-600 text-4xl">"</span>
            </div>
          </motion.blockquote>
        </motion.div>
      </section>

      {/* Services Gallery Section */}
      <section className="py-16 bg-gradient-to-br from-[#F8F5F0] to-[#EAE0D5] text-[#3E3636] w-full select-text">
        <div className="max-w-7xl mx-auto px-4 select-text">
          <div className="text-center mb-16">
            <motion.p
              className="text-4xl lg:text-5xl font-bold text-[#8D7B68] mb-6 select-text flex items-center justify-center"
              {...fadeUp}
            >
              <Sparkles className="mr-3 text-green-600" size={48} />
              Our Services
            </motion.p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-6" />
            <motion.p
              className="text-xl text-[#3E3636]/80 select-text font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive Wellness Services for Your Complete Rejuvenation
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 select-text">
            {aboutImageData.galleryItems.map((item, index) => (
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

                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30 z-10" />
                      <CustomImage
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        src={item.image}
                        alt={item.alt}
                        width={300}
                        height={200}
                        loading="lazy"
                      />

                      <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Flower2 className="text-[#8D7B68]" size={20} />
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-1 bg-gradient-to-r from-green-500 to-[#8D7B68] rounded-full" />
                        <div className="w-2 h-2 bg-[#A9907E] rounded-full" />
                      </div>

                      <p className="text-lg font-bold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300 leading-tight">
                        {item.title}
                      </p>

                      <p className="text-sm text-[#3E3636]/70 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>

                      <div className="pt-2">
                        <div className="inline-flex items-center text-xs font-semibold text-green-600 group-hover:text-[#8D7B68] transition-colors duration-300">
                          <span>Explore</span>
                          <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#8D7B68]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center mt-12"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/best-body-massage-center"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg"
            >
              More Info
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative w-full py-16 select-text bg-cover bg-center "
        style={{
          backgroundImage: `url('${aboutImageData.ctaImage.src}')`
        }}
      >
        <div className="absolute inset-0 bg-black/80 " />

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
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Ready to Relax?
            </motion.p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">
              Book your appointment today and experience the ultimate spa indulgence. Discover why we're Chennai's most trusted spa destination for relaxation and rejuvenation.
            </p>

            <motion.button
              className="bg-gradient-to-r from-green-600 to-green-400 text-white text-lg font-semibold py-4 px-12 rounded-full shadow-lg hover:from-green-500 hover:to-green-300 hover:shadow-green-400/50 transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/book-spa-service-appointment">Book Now</a>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage