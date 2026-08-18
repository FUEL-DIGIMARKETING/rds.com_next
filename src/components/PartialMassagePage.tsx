'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Target, Leaf, Users, Smile, Zap, Activity } from 'lucide-react'
import CustomImage from './CustomImage'
import { partialMassageImageData } from '../data/partialMassageImageData'

const PartialMassagePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  const services = [
    { title: "Targeted Relief", description: "Partial massage, as the term suggests, is focused on problem areas: back, neck, head, or shoulders. This kind of therapy helps to alleviate pains or tension confined in a small area of the body. The more concentrated treatment ensures relief where it is most needed, increasing comfort and accelerating recovery.", icon: "🎯" },
    { title: "Improved Circulation", description: "Partial massage of local muscles improves blood flow to the treated areas. Since this is where there is more blood flow, there is an increased delivery of oxygen and other nutrients necessary for healing. Recovery with less inflammation is therefore accelerated. It improves the flexibility of the muscle, reduces general muscle tension, and thus promotes healing.", icon: "💓" },
    { title: "Stress Reduction", description: "Even very short sessions can dramatically reduce tension, making you feel far more relaxed and centered, simply by targeting tight, aching, or overworked areas and soothing them. This focused relief relieves physical discomfort but soothes the mind as well, setting the stage for enhanced overall well-being and peace of mind.", icon: "😌" },
    { title: "Increased Flexibility", description: "Regular partial massage helps to relieve tautness in parts of the muscles, hence improving flexibility and increasing the range of motion. It proves critically important for people leading a sedentary life because massage helps fight some effects that are caused by activity loss, normal stiffness or improved comfort, and generally good mobility.", icon: "🤸" },
    { title: "Enhanced Focus", description: "Partial massage can also increase mental clarity and concentration since the physical relaxation experienced by the body from targeted treatment alleviates stress and mental fatigue. Attention is also improved, along with emotional balance and increased sharpness of the mind.", icon: "🧠" },
    { title: "Quick and Convenient", description: "Such massages are of shorter duration, hence convenient for the very busy, to gain substantive relief and relaxation in less time. It is in this efficiency that partial massages work best in quick stress relief and focused treatment, and they will fit within even the tightest of schedules.", icon: "⏰" },
  ]

  const massageOptions = [
    { title: "Head Massage (30 Min)", price: "Rs 1000" },
    { title: "Back Massage (30 Min)", price: "Rs 1000" },
    { title: "Foot Massage (30 Min)", price: "Rs 1200" },
    { title: "Mughaleepam (30 Min)", price: "Rs 1000" },
    { title: "Head, Shoulder, Neck (45 Min)", price: "Rs 1800" },
    { title: "Back, Shoulder, Neck (45 Min)", price: "Rs 1800" },
  ]

  const whyChooseUs = [
    { icon: Target, title: "Targeted Relief" },
    { icon: Leaf, title: "Focused Tension Release" },
    { icon: Users, title: "Customized Pressure Levels" },
    { icon: Smile, title: "Quick Stress Reduction" },
    { icon: Zap, title: "Specific Area Focus" },
    { icon: Activity, title: "Enhanced Flexibility" },
  ]

  const faqs = [
    { question: "What is a partial massage?", answer: "A partial massage is focused on some part of the body, like the back or neck, which may be holding tension and resulting in pain." },
    { question: "How long does a partial massage session typically last?", answer: "Partial massage sessions can be 30-45 minutes in length, focusing on a client's problem areas to provide fast and effective relief." },
    { question: "What should I expect during a partial massage?", answer: "Such techniques are thus expected to be applied in specified areas with feedback on pressure and comfort to ensure effective, customized treatment." },
    { question: "Who can benefit from a partial massage?", answer: "Any person suffering from pain, tension, or stress located in individual parts of the body: office workers, athletes, people with chronic problems." },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full overflow-x-hidden select-text bg-[#F8F5F0] pt-32">
      <section className="relative w-full h-[500px] overflow-hidden">
        <CustomImage
          src={partialMassageImageData.hero.src}
          alt={partialMassageImageData.hero.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div className="text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            <p className="text-4xl sm:text-6xl font-bold text-white drop-shadow-2xl px-4">Partial Massage</p>
            <p className="mt-4 text-xl text-white">Get Relief in Aches</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative bg-[#F8F5F0] text-[#3E3636] w-full select-text">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 className="text-2xl lg:text-4xl font-extrabold text-[#8D7B68] mb-6 select-text" {...fadeUp}>Best Partial Massage Spa - Unwind Like Never Before</motion.h1>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full select-text mb-16">
            <motion.div className="text-center lg:text-left select-text space-y-6" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
              <motion.p className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4 select-text" {...fadeUp}>Tailored to Your Needs</motion.p>
              <motion.p className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6 select-text" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} viewport={{ once: true }}>
                <strong>Personalized Partial Massage Therapy for Deep Relaxation</strong> Our partial body massage therapy focuses on special areas of tension so that individual treatment can be tailored to address the pain and offer relaxation to the customer. Whether it is a sore back, tight neck, or knotted shoulders, our highly <Link href="/best-body-massage-center" className="text-green-600 font-semibold hover:text-green-500 transition-colors">trained therapists</Link> will employ specialized techniques to help alleviate your stress, relax your body, and set you well again.
              </motion.p>
              <motion.p className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4 select-text" {...fadeUp}>Experience the Art of Relaxation</motion.p>
              <motion.p className="text-[#3E3636]/90 text-base text-justify leading-relaxed select-text" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }} viewport={{ once: true }}>
                <strong>Chennai's Leading Destination for Partial Massage</strong> Our <strong>River Salon and Day Spa</strong> centers specialize in the subtle art of <Link href="/riverdayspa-packages-singles" className="text-green-600 font-semibold hover:text-green-500 transition-colors">partial massage,</Link> wherein special emphasis is given to those areas in need. With our highly skilled therapists and an ambiance created to induce serenity, this rejuvenating experience ensures to melt away the stress and tension off you, thereby making our spot the city's premier destination for targeting relaxation and wellness.
              </motion.p>
            </motion.div>
            <motion.div className="relative w-full flex justify-center" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }}>
              <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="absolute inset-0 bg-green-600 rounded-3xl transform rotate-3"></div>
                <CustomImage
                  className="relative z-10 rounded-3xl shadow-xl w-full h-auto lg:h-[400px] object-cover transform -rotate-3 transition-transform duration-300 hover:rotate-0"
                  src={partialMassageImageData.content.src}
                  alt={partialMassageImageData.content.alt}
                  width={600}
                  height={400}
                />
              </motion.div>
            </motion.div>
          </div>

          <section className="relative bg-gray-100 py-12 px-6 md:px-12 lg:px-20 text-center bg-fixed bg-center z-10 mb-16 rounded-2xl overflow-hidden">
            <CustomImage
              src={partialMassageImageData.background.src}
              alt={partialMassageImageData.background.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl"></div>
            <div className="relative max-w-3xl mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">Best Partial Massage Center - River Salon and Day Spa</h2>
              <p className="mb-6 text-base">Focused relaxation expertly tailored to your personal needs, River Salon and Day Spa proudly offers the <Link href="/" className="text-green-400 font-semibold hover:underline">Best Partial Massages in Chennai.</Link> Our therapists are professional in targeting specific areas, offering relief that soothes and rejuvenates your body and mind. Sanction serenity in luxurious surroundings where every detail brings you to a new level, from individualized attention to the delivery of the ambiance. Each experience is crafted to leave you feeling whole again from your session: re-energized, at peace, and ready to take on the world to make your highest. Get the experience of partial massage -relaxed through Booking your Appointment Now.</p>
              <p className="text-lg font-bold text-white mb-6">Explore Our Specialized Massage Options to Find Your Perfect Wellness</p>
              <div className="grid md:grid-cols-2 mb-8 gap-6">
                {massageOptions.map((option, index) => (
                  <Link href="/book-spa-service-appointment" key={index}>
                    <div className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold text-lg p-5 rounded-xl shadow-lg hover:scale-105 transition transform duration-300 flex items-center justify-center">
                      {option.title} - {option.price}
                    </div>
                  </Link>
                ))}
              </div>
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

              Unlock the Benefits: Why Partial Massage is Your Key to Targeted Relief
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

      <section className="relative w-full py-16 select-text bg-cover bg-center" style={{ backgroundImage: "url('/images/best-luxury-spa-in-chennai.webp')" }}>
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col items-center justify-center p-8 md:p-12 rounded-3xl select-text" style={{ background: 'linear-gradient(135deg, rgba(178, 178, 178, 0.26) 0%, rgba(174, 174, 174, 0.25) 100%)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.3)', boxShadow: '0 25px 45px rgba(0, 0, 0, 0.2)' }}>
            <motion.h5 className="text-xl md:text-2xl lg:text-3xl text-center font-extrabold text-[#8D7B68] mb-6 select-text" {...fadeUp}>Ultimate in Targeted Relaxation at River Salon and Day Spa</motion.h5>
            <motion.div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} />
            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">Take some time out for complete relaxation of the body and relief from pain in our <Link href="/best-body-massage-center" className="text-green-400 font-semibold hover:underline">Best Massage Centers.</Link> We promote follow-up sessions with the same therapist for continuity of care and best results since the therapist knows your needs better and can help you recover completely. Our professional approach ensures that each session follows up on the previous one so you'll further improve your well-being and speed up healing.</p>
            <motion.button className="bg-gradient-to-r from-green-600 to-green-400 text-white text-lg font-semibold py-4 px-12 rounded-full shadow-lg hover:from-green-500 hover:to-green-300 hover:shadow-green-400/50 transition-all duration-300 ease-in-out" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}> <a href="tel:+919500029234">📞 Book Now</a></motion.button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PartialMassagePage