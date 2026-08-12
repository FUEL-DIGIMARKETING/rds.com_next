'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Leaf, Heart, Zap, Sparkles, Users, Shield } from 'lucide-react'
import CustomImage from './CustomImage'
import { ayurvedicMassageImageData } from '../data/ayurvedicMassageImageData'

const AyurvedicMassagePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  const services = [
    { title: "Enhanced Detoxification", description: "Ayurvedic massage naturally heightens your detoxification process by getting rid of the toxins in your system and reinvigorating good health. Massage improves lymphatic circulation, which aids detoxification within the body naturally and helps one to regain his energy.", icon: "🌿" },
    { title: "Improved Circulation", description: "This deep tissue massage slowly relaxes tension and anxiety, allowing the receiver to align mind and emotions through the release of residual tension held in the deepest areas of muscle tissue. This deep relaxation will also help you to improve the quality of your sleep.", icon: "💓" },
    { title: "Speedy Recovery", description: "Deep tissue massage helps in recovering from the injury stage of a problem by breaking down scar tissue, reducing inflammation, and promoting faster healing of injuries.It's enhancing the body's natural ability to repair itself to ensure quick return to normal activities.", icon: "⚡" },
    { title: "Radiant Skin", description: "The regular Ayurvedic massage also nourishes rich oils into the skin, developing its texture and tone. It slows down aging processes, shrinking wrinkles and fine lines, which leaves your skin looking young and glowing.", icon: "✨" },
    { title: "Stress Relief", description: "Because of mild strokes and oils, Ayurvedic massage is deeply relaxing and stress relieving which can calm the mind, and anxiety, better mental clarity, and set emotional well-being.", icon: "🧘" },
    { title: "Pain Management", description: "Targeted massage techniques for soothing chronic pain and discomfort. Focusing on your troubled areas, the Ayurvedic massage relieves muscle tension and stiffness in joints, improving mobility, and giving substantive relief for several different types of pain.", icon: "💪" },
  ]

  const whyChooseUs = [
    { icon: Leaf, title: "Skilled Ayurvedic Practitioners" },
    { icon: Heart, title: "High-Quality Medicinal Oils" },
    { icon: Users, title: "Serene Spa Environment" },
    { icon: Sparkles, title: "Personalized Treatment Plans" },
    { icon: Zap, title: "Holistic Wellness Approach" },
    { icon: Shield, title: "Dedicated Client Care" },
  ]

  const faqs = [
    { question: "What are the effects we have after an Ayurvedic massage?", answer: "The Ayurvedic massage is going to enhance blood circulation within the body, relax it, and detoxify it naturally." },
    { question: "Is ayurvedic massage?", answer: "Massages are done all over the body from arms and legs to your back, and neck—for good therapeutic benefit." },
    { question: "What to wear during Ayurvedic massage?", answer: "You can wear loose clothes which will give you the feeling of comfort, even though you will be provided with a towel or garment to wear during the session." },
    { question: "What is the frequency of Ayurvedic massage?", answer: "You can have Ayurvedic massage regularly, once a week, or as advised by your therapist for good results." },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full overflow-x-hidden select-text bg-[#F8F5F0] pt-32">
      <section className="relative w-full h-[500px] overflow-hidden">
        <CustomImage
          src={ayurvedicMassageImageData.hero.src}
          alt={ayurvedicMassageImageData.hero.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.p className="text-4xl sm:text-6xl font-bold text-white drop-shadow-2xl text-center px-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>Ayurvedic Massage</motion.p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative bg-[#F8F5F0] text-[#3E3636] w-full select-text">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 className="text-2xl lg:text-4xl font-extrabold text-[#8D7B68] mb-6 select-text" {...fadeUp}>Best Ayurvedic Massage Spa - Discover the Ayurvedic Bliss</motion.h1>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full select-text mb-16">
            <motion.div className="text-center lg:text-left select-text space-y-6" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
              <motion.p className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4 select-text" {...fadeUp}>Indulge in Timeless Healing with Ayurvedic Massage</motion.p>
              <motion.p className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6 select-text" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} viewport={{ once: true }}>
                Ayurveda is an ancient therapeutic system that ancient Indians used for over 5,000 years. This concept is rooted in early civilization. The word <strong>"Ayur"</strong> means life, and the word <strong>"Veda,"</strong> which means science, is combined to form the phrase <strong>"Ayurveda."</strong> The development of spiritual well-being, health, creative growth, and pleasure is facilitated by this all-encompassing approach in addition to physical health. For a relaxing Ayurvedic massage experience, step into the <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon and Day Spa.</Link>
              </motion.p>
              <motion.p className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4 select-text" {...fadeUp}>Rejuvenate Your Senses with Authentic Ayurvedic Therapies</motion.p>
              <motion.p className="text-[#3E3636]/90 text-base text-justify leading-relaxed select-text" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }} viewport={{ once: true }}>
                In Ayurvedic massage, skillful strokes will be done to calm and balance the doshas regarding to the client's need. The best-medicated oils will be used in massage to enhance the therapeutic value with the guidance of Ayurvedic doctors. The therapists will work to let you feel relaxed. The holistic approach will not only reduce stress but will also increase the health and well-being of the body and soul.
              </motion.p>
            </motion.div>
            <motion.div className="relative w-full flex justify-center" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }}>
              <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="absolute inset-0 bg-green-600 rounded-3xl transform rotate-3"></div>
                <CustomImage
                  className="relative z-10 rounded-3xl shadow-xl w-full h-auto lg:h-[400px] object-cover transform -rotate-3 transition-transform duration-300 hover:rotate-0"
                  src={ayurvedicMassageImageData.content.src}
                  alt={ayurvedicMassageImageData.content.alt}
                  width={600}
                  height={400}
                />
              </motion.div>
            </motion.div>
          </div>

          <section className="relative bg-gray-100 py-12 px-6 md:px-12 lg:px-20 text-center bg-fixed bg-center z-10 mb-16 rounded-2xl overflow-hidden">
            <CustomImage
              src={ayurvedicMassageImageData.background.src}
              alt={ayurvedicMassageImageData.background.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl"></div>
            <div className="relative max-w-3xl mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">Best Ayurvedic Massage Service in Chennai - River Salon and Day Spa</h2>
              <p className="mb-6 text-base">Our Ayurvedic spa services at <Link href="/body-massage-in-chennai-egmore" className="text-green-400 hover:underline">River Salon and Day Spa</Link> involve tapping, kneading, and squeezing, which have been incorporated into traditional massage strokes. With sufficient pressure applied by our skilled therapists, marmas located at joints, tendons, veins, and many more places within the body are stimulated. It helps to dissipate the tension in the particular area where there is pain or dissipate it throughout the whole body. Experience ultimate Ayurveda within our <Link href="/best-body-massage-center" className="text-green-400 hover:underline">luxurious Spas.</Link> Then, Book your Appointment Now.</p>
              <Link href="/book-spa-service-appointment"><motion.button className="bg-green-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-green-500 transition" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Book now</motion.button></Link>
            </div>
          </section>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#F8F5F0] to-[#EAE0D5] text-[#3E3636] w-full select-text">
        <div className="max-w-7xl mx-auto px-4 select-text">
          <div className="text-center mb-16">
            <motion.h3
              className="text-4xl lg:text-5xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Top Benefits of Ayurvedic Massage: Unlock the Secrets
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
                <h3 className="text-lg font-semibold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F5F0]">
        <div className="text-center mb-12"><motion.h4 className="text-2xl sm:text-3xl font-extrabold text-[#8D7B68] mb-4" {...fadeUp}>Frequently Asked Questions</motion.h4></div>
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:border-green-400 transition-all duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <button className="flex justify-between w-full text-left text-base sm:text-lg font-semibold text-[#8D7B68] hover:text-green-600 transition-colors" onClick={() => toggleAccordion(index)}><span>{faq.question}</span><span className="text-xl text-gray-400 hover:text-green-600 transition duration-300">{openIndex === index ? '-' : '+'}</span></button>
                {openIndex === index && (<motion.p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }}>{faq.answer}</motion.p>)}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 select-text bg-cover bg-center" style={{ backgroundImage: "url('https://www.riverdayspa.com/assets/massage/best-ayurvedic-thai-full-body-massage-spa-center-chennai-river-day-spa.webp')" }}>
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col items-center justify-center p-8 md:p-12 rounded-3xl select-text" style={{ background: 'linear-gradient(135deg, rgba(178, 178, 178, 0.26) 0%, rgba(174, 174, 174, 0.25) 100%)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.3)', boxShadow: '0 25px 45px rgba(0, 0, 0, 0.2)' }}>
            <motion.h5 className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-[#8D7B68] mb-6 select-text" {...fadeUp}>Experience Timeless Wellness with Expert Ayurvedic Treatments</motion.h5>
            <motion.div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} />
            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">Our treatments at <strong>River Salon and Day Spa in Chennai, Coimbatore, Trichy, Tirupur, and Vellore</strong> <Link href="/spa-in-bangalore" className="text-green-400 font-semibold hover:underline">Bangalore.</Link> promote physical detoxification, boost immunity, and enhance overall well-being. You will feel a radiant glow, become more beautiful, and see an arresting of early aging signs. Our Ayurvedic massages rejuvenate not just your body but also recharge your mind, thus giving you an integral path toward perfect health and rejuvenation.</p>
            <motion.button className="bg-gradient-to-r from-green-600 to-green-400 text-white text-lg font-semibold py-4 px-12 rounded-full shadow-lg hover:from-green-500 hover:to-green-300 hover:shadow-green-400/50 transition-all duration-300 ease-in-out" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}> <a href="tel:+919500029234">Book Now</a></motion.button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AyurvedicMassagePage