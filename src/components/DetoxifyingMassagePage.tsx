'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Leaf, Droplets, Users, Sparkles, Heart, Shield } from 'lucide-react'
import CustomImage from './CustomImage'
import { detoxifyingMassageImageData } from '../data/detoxifyingMassageImageData'

const DetoxifyingMassagePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  const services = [
    {
      title: "Boosts Metabolism",
      description: "Detox massages will switch on metabolic processes that help in the breaking down of fat faster and increase your body's potential for burning more calories, hence supporting weight loss and wellness. In addition to this, they reduce water retention in the body, thus helping in toning and firming up the body.",
      icon: "💪",
    },
    {
      title: "Enhanced Lymphatic Drainage",
      description: "Detox massage gives you a clear path for toxin removal and waste products from your body by improving lymphatic flow and letting you get a clean and healthy internal system. The act of rebooting the person into a healthier version by reducing inflammation, supporting organs at their optimal function, and increasing vitality.",
      icon: "🌿",
    },
    {
      title: "Improves Skin Health",
      description: "Regular detox massages go a long way to making the skin look younger hence, glowing with exfoliating and hydrating. This involves the removal of dead cells, increases blood flow, and stimulates collagen production to make the skin elastic enough not to look old.",
      icon: "✨",
    },
    {
      title: "Increases Energy Levels",
      description: "Through toxin reduction and improvement in blood circulation, detox massages not only relieve one from feelings of lethargy and sluggishness but also give a person a feeling of being energized and refreshed. The increase in energy levels also enhances mental focus and clarity, making a more productive day than before.",
      icon: "⚡",
    },
    {
      title: "Supports Immune Function",
      description: "Detox massages help in improving the blood flow and lymphatic flow, strengthening the immune system, which aids you in fighting diseases more efficiently. Due to an increased immune system, the recovery from minor infections and injuries is also faster.",
      icon: "🛡️",
    },
    {
      title: "Reduces Stress and Anxiety",
      description: "The calming effects of detox massage help in reducing the amount of stress and anxiety in your body and enhance better balancing and calmness of mind. A clear mind can make wiser decisions and lead one to emotional well-being.",
      icon: "🧘",
    },
  ]

  const whyChooseUs = [
    { icon: Leaf, title: "Expertly Trained Therapists" },
    { icon: Droplets, title: "High-Quality Detox Products" },
    { icon: Users, title: "Elegant Relaxation Environment" },
    { icon: Sparkles, title: "Tailored Detox Solutions" },
    { icon: Heart, title: "Holistic Wellness Services" },
    { icon: Shield, title: "Unmatched Customer Care" },
  ]

  const faqs = [
    {
      question: "Is a detox massage worth it?",
      answer: "A detox massage will help you not only improve your circulation but also remove toxins, offer relaxation and revitalize your entire self.",
    },
    {
      question: "How does the body feel when detoxing?",
      answer: "One often feels lighter, more energized, and refreshed; however, the initial detoxing may leave one feeling tired or uneasy.",
    },
    {
      question: "Is it good to detox your body?",
      answer: "Detoxing can aid health only insofar as ridding it of toxins and improving metabolic functions if done sensibly and regularly.",
    },
    {
      question: "How often should you detox?",
      answer: "In general, detoxification every 4-6 weeks is good, but one should, in most instances, be guided by one's health needs and lifestyle.",
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
          src={detoxifyingMassageImageData.hero.src}
          alt={detoxifyingMassageImageData.hero.alt}
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
            Detoxifying Massage
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
              Best Detoxifying Massage Center - Detox Delight
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
                Refresh Your Body: Unmatched Detox Solutions for Total Renewal
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6 select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our trained therapist at <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon and Day Spa</Link> will give you a treat of detoxifying massage which enhances your natural cleansing process of your body. This massage helps in stimulating the lymphatic system, removal of waste materials and improving flow of blood. A well functioning body ensures that necessary nutrients reach all cells, even those in distant organs.
              </motion.p>

              <motion.p
                className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4 select-text"
                {...fadeUp}
              >
                Cleanse and Rejuvenate: Transformative Detox Massage Awaits
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                Best Detoxifying Massage promotes healthy wellbeing by reducing toxins associated with diseased or unhealthy skin, water retention, and lifestyle-related conditions like diabetes, hypertension, and obesity. It's an invigorating treatment process for a healthier life, with a proper balance of things that can enhance the body to regain its natural ability to stay healthy.
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
                  src={detoxifyingMassageImageData.content.src}
                  alt={detoxifyingMassageImageData.content.alt}
                  width={600}
                  height={400}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Detoxifying Massage Packages Section */}
          <section className="relative bg-gray-100 py-12 px-6 md:px-12 lg:px-20 text-center bg-fixed bg-center z-10 mb-16 rounded-2xl overflow-hidden">
            <CustomImage
              src={detoxifyingMassageImageData.background.src}
              alt={detoxifyingMassageImageData.background.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
            <div className="relative max-w-3xl mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">
                Best Detoxifying Massage - River Salon and Day Spa
              </h2>
              <p className="mb-6 text-base">
                Massage sessions, on a regular scale, fully detoxify the body and improve weight loss. <Link href="/best-body-massage-center" className="text-green-400 hover:underline">Massages</Link> do not only help in losing pounds but also in toning your body. Many health professionals will therefore advise that regular massages, coupled with exercise and a good diet, work best. A body that is toxified could feel heavy and lethargic; hence, a detoxifying massage makes clients feel lighter and refreshed. It clears mental fog to bring in new, positive thoughts. The detox massage cleanses the body of impurities and, therefore, ridding yourself of that toxic energy refuels your body all over again. If you are seeking for best detoxifying massage, the River Salon and Day Spa will be the best choice, So Book your Appointment immediately.
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
              className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >

              Top Benefits of Detoxifying Massage: Rejuvenate and Revitalize
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
                <span className="text-lg font-semibold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="text-center mb-12">
          <motion.h4
            className="text-xl sm:text-2xl font-extrabold text-[#8D7B68] mb-4"
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
      <section className="relative w-full py-16 select-text bg-cover bg-center overflow-hidden">
        <CustomImage
          src={detoxifyingMassageImageData.cta.src}
          alt={detoxifyingMassageImageData.cta.alt}
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
            <motion.h5
              className="text-xl md:text-2xl lg:text-4xl text-center font-extrabold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Total Purification: Enhance Your Wellness Journey
            </motion.h5>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">
              Experience a whole new detox at <strong>River Salon and Day Spa - Best Spa in Chennai</strong>, in <strong>Bangalore, Chennai, Coimbatore, Trichy, Tirupur</strong>, and <Link href="/best-body-massage-spa-katpadi-vellore" className="text-green-400 font-semibold hover:underline">Vellore</Link>. Our professionally done detoxifying massage therapy enriches your wellness journey by washing out the toxins from the body, improving blood circulation, and rejuvenating the body. Have a treatment tailored to make one feel renewed and well: refreshed, balanced, and ready to live a healthier life.
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
    </div>
  )
}

export default DetoxifyingMassagePage