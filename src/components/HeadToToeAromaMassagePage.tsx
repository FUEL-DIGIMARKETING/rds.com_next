'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Flower, Moon, Smile, Heart, Sparkles, Zap, Leaf, Users, Shield, Star, Gift } from 'lucide-react'
import CustomImage from './CustomImage'
import { headToToeAromaMassageImageData } from '../data/headToToeAromaMassageImageData'
const HeadToToeAromaMassagePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  const services = [
    {
      title: "Comprehensive Relaxation",
      description: "Head-to-toe aroma massage provides complete relaxation for the elimination of tension, head to toe. It is holistic in nature and creates deep calmness, serenity, and well-being all over the body. Via every muscle group, it enhances clarity of mind and emotional balance. The therapeutic blend of essential oils nourishes the senses into a harmonious experience.",
      icon: Flower,
    },
    {
      title: "Enhanced Sleep Quality",
      description: "The massage of the aroma relaxes the body and reduces the tension caused by the human sleep pattern. The calming scents and techniques helps for more effective sleep. This type of therapy reduces insomnia and ensures deeper and relaxed sleep.",
      icon: Moon,
    },
    {
      title: "Alleviates Stress and Anxiety",
      description: "The total stress in your body has been reduced through the calming techniques of aromatherapy. Calming techniques combined with well-blended essential oils, can reduce your mental stress and enhance emotional balance and refresh your mood. It will help to enhance your mood and refresh your emotional self.",
      icon: Smile,
    },
    {
      title: "Boosts Circulation and Detoxification",
      description: "Massages better the blood and lymphatic circulation, which is needed for good flow and detoxification. Massage detoxifies your body from toxins, reduces swellings, and gives better health. Improved blood circulation enables people to feel an increase in energy and also accelerates recovery after great physical efforts.",
      icon: Heart,
    },
    {
      title: "Improves Skin Health",
      description: "Massages performed using essential oils feed, hydrate, and improve the skin's texture. As a result of this treatment, dry skin will lessen, which in turn makes one have nice glowing, healthy skin. They further improve elasticity, fade away fine lines, and bring back youthful rejuvenated skin.",
      icon: Sparkles,
    },
    {
      title: "Relieves Muscle Tension and Pain",
      description: "This massage, working from the head to the toe, will not leave any tight muscle behind, thus eliminating tension and pain. It would regain flexibility and restore the functionality of muscles back for better physical comfort. It helps in overall mobility and also prevents future injuries by working on muscular issues.",
      icon: Zap,
    },
  ]

  const whyChooseUs = [
    { icon: Leaf, title: "Complete Rejuvenation" },
    { icon: Moon, title: "Relaxing Sleep Induction" },
    { icon: Flower, title: "Personalized Aromatherapy Blends" },
    { icon: Sparkles, title: "Scented Serenity" },
    { icon: Star, title: "Ancient Healing Techniques" },
    { icon: Gift, title: "Holistic Wellness Approach" },
  ]

  const faqs = [
    {
      question: "What is the best position for a head massage?",
      answer: "You can sit or lie comfortably; the back is supported, so that you are relaxed and in an accessible position for the scalp.",
    },
    {
      question: "How effective are head massages?",
      answer: "Head massage techniques are effective in reducing tension, stress, and increasing blood flow to the brain, promoting relaxation.",
    },
    {
      question: "How safe is head massage?",
      answer: "Head massages are safe for everyone except those with severe injuries on your scalp.",
    },
    {
      question: "Is a head massage good for sleep?",
      answer: "Yes, head massage can provide a better sleep by reducing stress and tension, which will enable one to fall asleep more easily and restfully.",
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
          src={headToToeAromaMassageImageData.hero.src}
          alt={headToToeAromaMassageImageData.hero.alt}
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
            Head to Toe Aroma Massage
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
              Best Head to Toe Aroma Massage Spa - Revitalize Your Entire Body
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
                Indulge in Renewal Massage from Head to Toe
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6 select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                While our experts work their magic and give you <Link href="/best-body-massage-center" className="text-green-600 font-semibold hover:text-green-500 transition-colors">excellent massage therapy</Link> in the spa, we literally bring you back to ancient practices devised for their soothing effect. We know how this technique will not just relieve pulsating nerves and aches of tired muscles but also works magically on the senses. Our aromatherapy, done with time-honored Vedic techniques, rejuvenates mind and body with enchanting fragrances that enhance relaxation to carry your mind and soul to a state of blissful tranquility.
              </motion.p>

              <motion.p
                className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4 select-text"
                {...fadeUp}
              >
                Experience Ultimate Relaxation with Every Scented Touch
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                From the finest massage at <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon and Day Spa</Link> to recharging one from head to toe, making one feel young again, the efficacy of aromatherapy has been established right from insomnia, anxiety, depression, and stress-related problems. It helps to re-establish natural sleep cycles and relieves all that pressure from a fast life. Experience it for yourself here at the <Link href="/body-massage-in-chennai-egmore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Best Spa in Chennai.</Link>
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
                  src={headToToeAromaMassageImageData.content.src}
                  alt={headToToeAromaMassageImageData.content.alt}
                  width={600}
                  height={400}
                />
              </motion.div>
            </motion.div>
          </div>

          <section className="relative bg-gray-100 py-12 px-6 md:px-12 lg:px-20 text-center bg-fixed bg-center z-10 mb-16 rounded-2xl overflow-hidden">
            <CustomImage
              src={headToToeAromaMassageImageData.background.src}
              alt={headToToeAromaMassageImageData.background.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl"></div>
            <div className="relative max-w-3xl mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">
                Head to Toe Aroma Massage Center - River Salon and Day Spa
              </h2>
              <p className="mb-6 text-base">
                <Link href="/best-couple-massage-center" className="text-green-400 hover:underline">Couple this head-to-toe aroma massage</Link> with a visit to the River Salon and Day Spa to bring your body, mind, and senses into pure relaxation. The therapists are skillful, with expertise taught in this ancient art of massage using only the finest pure essential oils to rejuvenate the body and quieten the mind, reducing stress and thereby regenerating deep restorative sleep. So you can Visit or Book your Appointment today.
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
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >

              Discover the Top Benefits of Head-to-Toe Aroma Massage: Total Bliss
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
                        {service.icon && React.createElement(service.icon, { className: 'text-[#8D7B68] w-8 h-8' })}
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
      <section className="relative w-full py-16 select-text bg-cover bg-center overflow-hidden">
        <CustomImage
          src={headToToeAromaMassageImageData.hero.src}
          alt={headToToeAromaMassageImageData.hero.alt}
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
            <motion.h4
              className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Indulge in Spa Bliss with Expert Aromatherapy Techniques
            </motion.h4>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">
              Now imagine losing yourself in an aromatic, refreshing, and revitalizing massage. Essential oils from our trained therapist refresh the mind and body, dissolve away stress, and improve overall well-being. At <strong>River Salon and Day Spa</strong> in <strong>Chennai, Bangalore, Coimbatore, Trichy, Tirupur</strong> and <Link href="/best-body-massage-spa-katpadi-vellore" className="text-green-400 font-semibold hover:underline">Vellore</Link> will let you feel refreshed. So discover your path to total relaxation at our luxurious spa.
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

export default HeadToToeAromaMassagePage