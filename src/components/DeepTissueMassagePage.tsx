'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Target, Leaf, Heart, Smile, Activity, Star } from 'lucide-react'
import CustomImage from './CustomImage'
import { deepTissueMassageImageData } from '../data/deepTissueMassageImageData'

const DeepTissueMassagePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  const services = [
    {
      title: "Improves Sleep Quality",
      description: "Deep tissue massage helps in having good sleep as it relieves one's tension and stress in the muscles, improves relaxation, and eventually sends one to a very deep and sound sleep. It contributes to better overall health, with higher energy levels and more leveled moods throughout one's day.",
      icon: "😴",
    },
    {
      title: "Reduces Stress and Anxiety",
      description: "This deep tissue massage slowly relaxes tension and anxiety, allowing the receiver to align mind and emotions through the release of residual tension held in the deepest areas of muscle tissue. This deep relaxation will also help you to improve the quality of your sleep.",
      icon: "🧘",
    },
    {
      title: "Speeds Recovery from Injuries",
      description: "Deep tissue massage helps in recovering from the injury stage of a problem by breaking down scar tissue, reducing inflammation, and promoting faster healing of injuries. It's enhancing the body's natural ability to repair itself to ensure quick return to normal activities.",
      icon: "⚡",
    },
    {
      title: "Enhances Flexibility",
      description: "Regular sessions improve flexibility in the joints and muscles, break up tight muscles and fascia, provide more range of motion, and reduce the potential for or further injuries to the body from workout routines. Improved flexibility also contributes to higher athletic performance and day-to-day functional motion.",
      icon: "🤸",
    },
    {
      title: "Boosts Circulation",
      description: "Deep strokes stimulate blood flow to deliver oxygen and nutrients to tissues more effectively, promoting healing and reducing inflammation, swelling, and muscle soreness. Good blood flow also helps wash out by-products of muscle work and wastes in general, thus providing better recovery of muscles and ease of renewed strength.",
      icon: "❤️",
    },
    {
      title: "Supports Posture Correction",
      description: "Deep tissue massage helps correct poor posture by addressing muscle imbalance and tension, relieving associated discomfort, and realigning the body toward overall structural balance and improved physical function. Proper alignment spares the muscles and joints from unnecessary stresses, improving comfort and efficiency during activities of daily living.",
      icon: "🏃",
    },
  ]

  const whyChooseUs = [
    { icon: Target, title: "Targeted Pain Relief" },
    { icon: Leaf, title: "Enhanced Muscle Recovery" },
    { icon: Heart, title: "Improved Blood Circulation" },
    { icon: Smile, title: "Stress Reduction" },
    { icon: Activity, title: "Increased Flexibility" },
    { icon: Star, title: "Holistic Wellness Approach" },
  ]

  const faqs = [
    {
      question: "How do you know if you need a deep tissue massage?",
      answer: "If you have chronic pain, muscle tension, or limited mobility, a deep tissue massage helps.",
    },
    {
      question: "Can I eat before a deep tissue massage?",
      answer: "Sure, you can have your light meal, before one to two hours of your session. so you can't feel uncomfortable while laying on your massage table.",
    },
    {
      question: "How long does a deep tissue massage last?",
      answer: "Generally, deep tissue massage lasts from 60 to 90 minutes, according to the package you pick.",
    },
    {
      question: "When should deep tissue massage be avoided?",
      answer: "Keep off deep tissue massage in the case of severe injuries, acute inflammation, or certain medical conditions like blood clotting and infections.",
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
          src={deepTissueMassageImageData.hero.src}
          alt={deepTissueMassageImageData.hero.alt}
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
            Deep Tissue Massage
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
              Best Deep Tissue Massage Center - Dive Deep into Bliss
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
                Experience Therapeutic Excellence with Every Session
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6 select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                When your body screams for help after prolonged pain and fatigue, this means it is crying out for relief from the amount of stress and discomfort it undergoes. Keeping these signs aside may be responsible for the Musculoskeletal disorders. <Link href="/best-body-massage-center" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Deep tissue massage at River Salon and Day Spa</Link> is just the kind of solution for issues like these, offering relief from the pain and tension during and long after the massage.
              </motion.p>

              <motion.p
                className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4 select-text"
                {...fadeUp}
              >
                Rejuvenate Your Body and Mind at Our Premier Facility
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                During this session, the therapist identifies various pain points in the client's body. Deep strokes and muscle kneading provide instant relief. Often, you feel painful knots that obstruct blood circulation. This massage technique aims to untangle these knots and improve blood flow, allowing the body to relax and become more flexible.
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
                  src={deepTissueMassageImageData.content.src}
                  alt={deepTissueMassageImageData.content.alt}
                  width={600}
                  height={400}
                />
              </motion.div>
            </motion.div>
          </div>

          <section className="relative bg-gray-100 py-12 px-6 md:px-12 lg:px-20 text-center bg-fixed bg-center z-10 mb-16 rounded-2xl overflow-hidden">
            <CustomImage
              src={deepTissueMassageImageData.background.src}
              alt={deepTissueMassageImageData.background.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl"></div>
            <div className="relative max-w-3xl mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">
                Best Deep Tissue Massage Center Chennai - River Salon and Day Spa
              </h2>
              <p className="mb-6 text-base">
                At River Day Spa, we assist our clients in identifying the painful areas of their body with our deep tissue massage to relieve them of their chronic muscular pain and have them relax naturally. Come to our <Link href="/body-massage-in-chennai-egmore" className="text-green-400 hover:underline">Best Spa in Chennai</Link> for the finest spa experience or Book your Appointment through our website. Let our skilled therapists pamper you with a pure deep tissue massage and experience bliss in expert care and rejuvenation.
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
              className="text-3xl lg:text-4xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >

              Unlock the Life-Changing Benefits of Deep Tissue Massage
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
      <section
        className="relative w-full py-16 select-text bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.riverdayspa.com/assets/massage/Best-deep-tissue-full-body-massage-spa-center-chennai.webp')"
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
              Experience Deep Relief: Unwind with Expert Techniques and Soothing Comfort
            </motion.h5>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">
              In <Link href="/spa-in-bangalore" className="text-green-400 font-semibold hover:underline">River Salon and Day Spa at Bangalore</Link>, in <strong>Coimbatore, Trichy, Tirupur, and Vellore, Tripur</strong>. we listen well and are sensitive to any physical issue that a person might be going through. The experienced masseurs tailor-make treatment programs after discussing and examining problem areas of your body. Our warm and welcoming staff ensures your comfort in every way possible so that you open up easily and even show confidence in expressing your needs. We design customized packages to take on and reduce chronic pain.
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

export default DeepTissueMassagePage