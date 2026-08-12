'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Trophy, Target, Zap, ShieldAlert, Users, Activity, Building, Leaf, Handshake, Smile, Heart } from 'lucide-react'
import CustomImage from './CustomImage'
import { sportsMassageImageData } from '../data/sportsMassageImageData'
const SportsMassagePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  const services = [
    {
      title: "Enhanced Muscle Recovery",
      description: "For increasing quicker recovery and allowing athletes to have consistent training without stress sports massage helps to decrease muscle tightness and stiffness. This massage helps in accelerating the recovery process, by flushing out metabolic waste from your muscles.",
      icon: Activity,
    },
    {
      title: "Increased Flexibility",
      description: "By having regular sessions of sports massage, you can improve your muscle elasticity and flexibility of joints, decreasing the risk of injuries and improving overall athletic performance. These massages ensure smoother and more efficient muscle function, by breaking down adhesions and scar tissue.",
      icon: Zap,
    },
    {
      title: "Improved Circulation",
      description: "Sports massage improves your supply of oxygen and nutrients to muscles, by enhancing the flow of blood, which will give you faster repair and growth. This better flow of blood helps in removing metabolic waste from your body effectively, improves recovery, and reduces muscle stiffness.",
      icon: ShieldAlert,
    },
    {
      title: "Stress Reduction",
      description: "This sports massage helps reduce stress and anxiety levels, enhancing mental relaxation and improving focus, which is important for peak performance. The massage not only improves your overall well-being but also enhances your mood, which will boost your training period.",
      icon: Target,
    },
    {
      title: "Pain Relief",
      description: "In sports massage, targeted techniques lighten chronic pain and discomfort from overused muscles and provide you with long-term relief and good physical function. These massages enhance joint mobility and alignment of muscles, which will help in athletes' peak performance and prevent future injuries.",
      icon: Trophy,
    },
    {
      title: "Injury Prevention",
      description: "You can identify your potential issues before they become serious injuries, ensuring athletes stay in good condition by having regular sessions of sports massage. These massages help in maintaining overall body alignment and function and supporting to have a peak performance, by addressing muscle imbalance early.",
      icon: Users,
    },
  ]

  const whyChooseUs = [
    { icon: Trophy, title: "Enhanced Performance Recovery" },
    { icon: Target, title: "Targeted Muscle Relief" },
    { icon: Zap, title: "Optimized Athletic Function" },
    { icon: Building, title: "Dynamic Flexibility Boost" },
    { icon: Smile, title: "Accelerated Healing Techniques" },
    { icon: Handshake, title: "Precision Pain Management" },
  ]

  const faqs = [
    {
      question: "Does massage help sports injuries?",
      answer: "Sure, sports massage helps reduce pain, improve flexibility, and enhance the healing process of sports-related injuries.",
    },
    {
      question: "How effective is sports massage?",
      answer: "By preventing injuries early, improving recovery, reducing muscle tightness, and increasing performance, sports massage is highly effective.",
    },
    {
      question: "How long do sports massages last?",
      answer: "Normally, sports massage lasts 30 to 90 minutes, depending on the package you choose.",
    },
    {
      question: "Does sports massage increase blood flow?",
      answer: "Yes, sports massage helps to increase the blood flow, supply of oxygen, and nutrient delivery throughout the body and accelerate recovery.",
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
          src={sportsMassageImageData.hero.src}
          alt={sportsMassageImageData.hero.alt}
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
            Sports Massage
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
              Sports Massage Spa in Chennai - Boost Your Game
            </motion.h1>
            <motion.p
              className="text-lg text-[#3E3636]/80 mb-6 select-text"
              {...fadeUp}
            >
              Enhance Performance with Expert Sports Massage Therapy
            </motion.p>
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
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6 select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                In the art of sports and orthopedic massage, our trained therapist helps athletes recover from their injuries and chronic pain. Our tailored treatments give relief from old or new injuries from competition or practice. The massage will help you get rid of pain and muscular spasms from common issues like calf pain from jogging, running, and workouts with our customized therapies.
              </motion.p>

              <motion.p
                className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4 select-text"
                {...fadeUp}
              >
                Exposing the Moroccan Bath Relaxation
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                To maintain muscle and flexibility, sports people always follow a heavy exercise routine and a controlled diet. At River Salon and Day Spa, through improved flow of blood, our specialized sports massage is designed to improve the strength of your body and enhance overall well-being. The massage will help not only in the recovery of muscle but also in reducing stress and preventing future injuries.
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
                  src={sportsMassageImageData.content.src}
                  alt={sportsMassageImageData.content.alt}
                  width={600}
                  height={400}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sports Massage Packages Section */}
      <section className="relative bg-gray-100 py-12 px-6 md:px-12 lg:px-20 text-center bg-fixed bg-center z-10 mb-16 rounded-2xl overflow-hidden">
        <CustomImage
          src={sportsMassageImageData.background.src}
          alt={sportsMassageImageData.background.alt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl"></div>
        <div className="relative max-w-3xl mx-auto text-white">
          <h2 className="text-2xl font-bold mb-4">
            Best Sports Massage Center - River Salon and Day Spa
          </h2>
          <p className="mb-6 text-base">
            Sports therapists recommend regular, rigorous <Link href="/best-body-massage-center" className="text-green-400 hover:underline">Sports Massages</Link> to enhance speed and flexibility. Many athletes endorse these massages for increasing body strength and overall stamina, as they help to strengthen muscles and ligaments. Given the physical toll of sporting events, it is advisable to follow the advice of competent physiotherapists and unwind with a relaxing massage post-event. At River Day Spa, our trained therapists specialize in building muscle and ligament strength for major sporting events. Visit the Best Spa in Chennai or Book your Appointment for a transformative sports massage experience at our locations.
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

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-[#F8F5F0] to-[#EAE0D5] text-[#3E3636] w-full select-text">
        <div className="max-w-7xl mx-auto px-4 select-text">
          <div className="text-center mb-16">
            <motion.h3
              className="text-4xl lg:text-5xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              The Benefits Of Sports Massage: Unlock Peak Performance
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
          src={sportsMassageImageData.cta.src}
          alt={sportsMassageImageData.cta.alt}
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
              Accelerate Healing with Specialized Care at River Salon and Day Spa
            </motion.h4>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">
              With our specialized care and accelerated healing process, River Salon and Day Spa is the Best Spa in Chennai, Bangalore, Chennai, Trichy, Tirupur, Vellore and<Link href="/best-body-massage-center" className="text-green-400 hover:underline">Coimbatore .</Link> Our trained therapist uses calming techniques to heal injuries and decrease the time of recovery. Experience personalized treatments that improve muscle repair, lighten pain, promote faster recovery, and ensure you are always at your best.
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

export default SportsMassagePage