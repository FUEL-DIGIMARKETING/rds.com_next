'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Leaf, Heart, Users, Sparkles, Zap, Gift } from 'lucide-react'
import CustomImage from './CustomImage'
import { coupleMassageImageData } from '../data/coupleMassageImageData'

const CoupleMassagePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  const services = [
    { title: "Strengthened Connection", description: "A couple's massage improves emotional intimacy as the couple gets to be with each other, relax together, and hence strengthen the bond and improve understanding of each other. Going through this experience will strengthen the bond and improve understanding, hence creating a common well-being and connection of understanding.", icon: "💕" },
    { title: "Enhanced Relaxation", description: "A massage for both at the same time allows partners to be at ease to relax. And even with the calming environment and synchronized therapy will reduce the stress, and let you feel refreshed and rejuvenated.", icon: "🧘" },
    { title: "Improved Communication", description: "Such spending time in the spa setting is conducive to open conversation and strengthened communication. The peaceful environment allows for effective dialogue, allowing you to refocus on each other and discuss between the two without the different interruptions of everyday life.", icon: "💬" },
    { title: "Joint Stress Relief", description: "Couples massages reduce stress for both partners simultaneously. The tension is released, allowing one to relax and improve their mind and body by way of reducing anxiety.", icon: "😌" },
    { title: "Shared Wellness Experience", description: "A massage for couples will bring into a relationship the focus on health and wellness that will bind. It will give way to more opportunities to support each other in wellbeing and encourage both partners to maintain self-care and a healthy lifestyle.", icon: "🌿" },
    { title: "Quality Time Together", description: "A couples massage allows for quality time with your partner, uninterrupted by other factors. It will give you time to bond with each other as this special bonding moment will enhance your relationship by capitalizing on the therapeutic positive effects that come from the massage.", icon: "⏰" },
  ]

  const whyChooseUs = [
    { icon: Leaf, title: "Skilled Therapists" },
    { icon: Heart, title: "Top-Quality Products" },
    { icon: Users, title: "Elegant Setting" },
    { icon: Sparkles, title: "Personalized Treatments" },
    { icon: Zap, title: "Diverse Massage Options" },
    { icon: Gift, title: "Outstanding Service" },
  ]

  const faqs = [
    { question: "Is massage good for relationships?", answer: "Yes, massage enhances bonding, communication, and emotional contact between loved ones. It is a sharing of relaxation time that makes bonds stronger and helps to reduce stress together." },
    { question: "What to wear to couples massages?", answer: "Wear comfortable, loose-fitting clothes. Often you will be supplied with towels or gowns to wear for the duration of the massage." },
    { question: "How does a couple's massager work?", answer: "A couples massager can facilitate shared relaxation through focused vibrations, banishing tension, and allowing bonding to come naturally through its use." },
    { question: "How long is the couple's massage?", answer: "Generally, this couple massages will take from 60 to 90 minutes and also depends on the package you choose." },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full overflow-x-hidden select-text bg-[#F8F5F0] pt-32">
      <section className="relative w-full h-[500px] overflow-hidden">
        <CustomImage
          src={coupleMassageImageData.hero.src}
          alt={coupleMassageImageData.hero.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.p className="text-4xl sm:text-6xl font-bold text-white drop-shadow-2xl text-center px-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>Couple Massage</motion.p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative bg-[#F8F5F0] text-[#3E3636] w-full select-text">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 className="text-2xl lg:text-4xl font-extrabold text-[#8D7B68] mb-6 select-text" {...fadeUp}>Best Couple Massage Center - Rediscover Connection with Your Partner</motion.h1>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full select-text mb-16">
            <motion.div className="text-center lg:text-left select-text space-y-6" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
              <motion.p className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4 select-text" {...fadeUp}>Elevate Your Togetherness with Expertly Crafted Massages</motion.p>
              <motion.p className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6 select-text" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} viewport={{ once: true }}>
                It is prime in any relationship to find quality time. Ever tried a couple's massage? Here at <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon and Day Spa,</Link> we help you create a tranquil getaway for the two of you to unwind and relax in our soothing aromatic environment. Give yourself the perfect blend of relaxation and health advantages with a chance to bond better and rejuvenate your spirit. If your busy schedule leaves very little time for your loved one, take the opportunity to catch up while indulging in therapeutic massage treatments provided by our experienced therapists at <Link href="/spa-massage-coimbatore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Best Massage Center in Coimbatore.</Link>
              </motion.p>
              <motion.p className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4 select-text" {...fadeUp}>Share a Journey of Relaxation and Reconnection</motion.p>
              <motion.p className="text-[#3E3636]/90 text-base text-justify leading-relaxed select-text" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }} viewport={{ once: true }}>
                The <Link href="/riverdayspa-packages-couples" className="text-green-600 font-semibold hover:text-green-500 transition-colors">couples' massages</Link> are one of the finest ways to spend quality time with your lovable person when you seldom get to see one another. You can both share a calming experience with a comfortable and relaxing environment. You can enjoy and experience the relaxing and detoxifying session with your partner. In the relaxing environment, you will be sharing the same room while our two trained therapists cultivate your time together.
              </motion.p>
            </motion.div>
            <motion.div className="relative w-full flex justify-center" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }}>
              <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="absolute inset-0 bg-green-600 rounded-3xl transform rotate-3"></div>
                <CustomImage
                  className="relative z-10 rounded-3xl shadow-xl w-full h-auto lg:h-[400px] object-cover transform -rotate-3 transition-transform duration-300 hover:rotate-0"
                  src={coupleMassageImageData.content.src}
                  alt={coupleMassageImageData.content.alt}
                  width={600}
                  height={400}
                />
              </motion.div>
            </motion.div>
          </div>

          <section className="relative bg-gray-100 py-12 px-6 md:px-12 lg:px-20 text-center bg-fixed bg-center z-10 mb-16 rounded-2xl overflow-hidden">
            <CustomImage
              src={coupleMassageImageData.background.src}
              alt={coupleMassageImageData.background.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl"></div>
            <div className="relative max-w-3xl mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">Best Couple Massage Center Chennai - River Salon and Day Spa</h2>
              <p className="mb-6 text-base">While going out is much more common, trying a wellness program with your partner definitely adds a fresh twist to the usual activities. A massage for couples is a special way to spend time with your partner, our skilled therapists promote your wellness. Now pick up the Best Couple Massage Center to break difficulties in the day-to-day activities. Discover our top spa in Chennai to rejuvenate your relationships. It deepens your bond with each other by spending quality, focused time to enjoy a renewed oneness. So Book your Appointment immediately.</p>
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

              Top Benefits of Couples Massage Spa: Double the Relaxation
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
                <p className="text-lg font-semibold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300">
                  {item.title}
                </p>
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

      <section className="relative w-full py-16 select-text bg-cover bg-center" style={{ backgroundImage: "url('images/massages/best-body-massage-center-in-chennai.webp')" }}>
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col items-center justify-center p-8 md:p-12 rounded-3xl select-text" style={{ background: 'linear-gradient(135deg, rgba(178, 178, 178, 0.26) 0%, rgba(174, 174, 174, 0.25) 100%)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.3)', boxShadow: '0 25px 45px rgba(0, 0, 0, 0.2)' }}>
            <motion.h5 className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-[#8D7B68] mb-6 select-text" {...fadeUp}>Unwind Together: Experience Ultimate Relaxation and Bonding</motion.h5>
            <motion.div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} />
            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">A couple's massage is a way to relax the body and mind to the fullest extent with calming action on both levels. You can choose massage types to be the same or different, and the price will vary accordingly. You can even book a massage with your friend, mom, or sister and make it a nice bonding experience where you sit back and relax while catching up on the lost conversations. Visit our <Link href="/" className="text-green-400 font-semibold hover:underline">Spas</Link> - <strong>Chennai, Bangalore, Coimbatore, Trichy, Tirupur, and Vellore</strong> to treat your loved one with this very special bonding activity.</p>
            <motion.button className="bg-gradient-to-r from-green-600 to-green-400 text-white text-lg font-semibold py-4 px-12 rounded-full shadow-lg hover:from-green-500 hover:to-green-300 hover:shadow-green-400/50 transition-all duration-300 ease-in-out" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><a href="tel:+919500029234 ">📞 Book Now</a></motion.button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoupleMassagePage