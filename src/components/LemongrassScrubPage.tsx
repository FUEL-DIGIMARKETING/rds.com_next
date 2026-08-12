'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomImage from './CustomImage'
import { lemongrassScrubImageData } from '../data/lemongrassScrubImageData'
import {
  FaHandHoldingWater,
  FaShieldAlt,
  FaSeedling,
  FaSmileBeam,
  FaSpa,
  FaLeaf,
  FaSmile,
  FaUserTie,
  FaHandsHelping,
  FaHandHoldingHeart
} from 'react-icons/fa'

const services = [
  {
    title: "Alleviates Muscle Tension",
    description: "It circulates blood-pressure throughout the body leading towards less muscular and joint sore; also feeling relaxed and smooth in order to eliminate stress from one of a stressful day. Its refreshing property rejuvenates and energizes the body, thus refreshing it.",
    icon: "🌿",
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "Enhances Skin Clarity",
    description: "It detoxifies the scrub, impurities, and dead skin cells, giving way to clearer, brighter skin tones. It also minimizes blemishes and dullness and provides cell renewal for a much healthier and youthful look in the skin.",
    icon: "✨",
    color: "from-green-400 to-orange-500"
  },
  {
    title: "Boosts Radiance",
    description: "Using regularly, lemongrass scrub revives your skin, enhancing its natural glow and radiance, leaving you with a fine, polished finish, rejuvenated to the look and feel. It aids in evening the tone and leaves one with an ever-brighter, more youthful complexion.",
    icon: "🌟",
    color: "from-amber-400 to-yellow-500"
  },
  {
    title: "Reduces Stress and Anxiety",
    description: "This fragrance is extremely calming, anti-stress and stress-reducing smell; with a kind of peace aura just like in a spa environment and uplifting. It gives the beneficial properties of its aroma in which it calms your mind, balances your emotions.",
    icon: "🧘",
    color: "from-purple-400 to-pink-500"
  },
  {
    title: "Improves Skin Texture",
    description: "It has a soft exfoliating action to get rid of the roughness and smooth out any uneven bumps. This would also help in reducing rough patches from the face and result in younger-looking skin. Moreover, it enhances the skin's ability to absorb moistening treatment, which further improves health.",
    icon: "🌱",
    color: "from-green-400 to-teal-500"
  },
  {
    title: "Provides Deep Hydration",
    description: "Give a massage with our nourishing scrub that makes the skin well-hydrated to have a soft and supple feel to it. That excess moisture keeps the elasticity of the skin and prevents dryness. Enriched formula provides long-lasting hydration, leaving your skin rejuvenated and balanced all day.",
    icon: "💧",
    color: "from-blue-400 to-cyan-500"
  }
]

const whyChooseUs = [
  { icon: FaSpa, title: "Therapeutic Lemongrass" },
  { icon: FaLeaf, title: "Targeted Pain Relief" },
  { icon: FaUserTie, title: "Enhanced Circulation" },
  { icon: FaHandsHelping, title: "Indulgent Spa Experience" },
  { icon: FaSmile, title: "Personalized Treatment" },
  { icon: FaHandHoldingHeart, title: "Expert Care" }
]

const faqs = [
  {
    question: "How should you use lemongrass body scrub?",
    answer: "Massage onto dampened skin in circular motions, then rinse off thoroughly for refreshed, smooth skin."
  },
  {
    question: "Is lemongrass effective against infections?",
    answer: "Yes, lemongrass has antimicrobial properties that can help combat certain infections naturally."
  },
  {
    question: "Can lemon scrub lighten the skin?",
    answer: "Thus, lemon scrub exfoliates and brightens the skin; however, it needs regular use to get the result. One has to protect oneself from the sun by applying sunscreen."
  },
  {
    question: "When and how should you use lemongrass?",
    answer: "Massage lemongrass scrub into the skin 1-2 times a week, best in the shower, for an effective exfoliation and refreshing of the skin."
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true }
}

export default function LemongrassScrubPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${lemongrassScrubImageData.hero.src}')` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }} />

        {/* Floating Glow Particles Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: '0 0 10px rgba(255,255,255,0.5)'
              }}
              animate={{
                y: [-30, 30, -30],
                x: [-20, 20, -20],
                scale: [0.5, 1.5, 0.5],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Lemongrass Body Scrub
          </motion.p>
          <motion.p
            className="text-xl md:text-3xl text-white/90 font-light drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Lemongrass Bliss
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <motion.div className="text-center mb-16" {...fadeUp}>
          <h1 className="text-3xl md:text-5xl font-bold text-[#8D7B68] mb-6">
            Best Lemongrass Scrub Massage Center - Lemongrass Bliss
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Rejuvenate Your Skin and Soul with Lemongrass Serenity
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Lemongrass scrub makes you beautiful and relaxed as well. Lemongrass oil is used to calm down irritability, anxiety, and even sleeplessness. Due to its deeply therapeutic effects, it is excellent for those who want to seek peace and relief. If you or someone you know experiences these symptoms, do yourself a favor and try our scrub at <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon and Day Spa</Link>. We will pamper your senses and soul with skillful methods and techniques.
            </motion.p>

            <motion.p
              className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Experience the Freshness of Nature with Every Scrub
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              The oil extracted from the lemongrass plant is anti-inflammatory and improves blood circulation. Hence, a good massage with this oil relieves one of aches and joint pains. So, if some of the modern lifestyle-related problems haunt you like neck pain, shoulder aches, or lower back pain a good lemongrass body scrub can turn out to be your best buddy. These are specifically aimed at addressing these issues but are designed to provide the much-needed relief from the stresses of everyday life. Come and visit our <Link href="/body-massage-in-chennai-egmore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Best Massage Center in Chennai</Link> today to experience the much-needed relief.
            </motion.p>
          </motion.div>

          {/* 3D Tilt Image */}
          <motion.div
            className="relative w-full flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{
                rotateY: 15,
                rotateX: 10,
                scale: 1.05
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-l from-green-400 to-green-500 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
              <div className="relative z-10 bg-white rounded-3xl p-2 shadow-2xl">
                <CustomImage
                  src={lemongrassScrubImageData.content.src}
                  alt={lemongrassScrubImageData.content.alt}
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Neumorphism Package Section */}
        <motion.section
          className="relative mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            className="relative rounded-3xl p-12 text-center"
            style={{
              background: 'linear-gradient(145deg, #f0f0f0, #d2eadcff)',
              boxShadow: '20px 20px 60px #ddf9e1bb, -20px -20px 60px #ffffff'
            }}
          >
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-3xl font-bold text-[#8D7B68] mb-6"
                {...fadeUp}
              >
                Lemongrass Scrub Massage In Chennai - River Salon and Day Spa
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Feeling the pulse of modern life? Then we have Lemongrass Scrub Packages, tailor-made for your individual needs. Rest assured that our team will assess your specific concerns and treat accordingly. Just lie back while we scrub your skin with richness in the aroma of lemongrass, detoxifying by purification of the skin and letting in a fine bloom. Then step into our various spa locations or Book your Appointment to revitalize and energize your mind and soul.
              </motion.p>
              <Link href="/book-spa-service-appointment">
                <motion.button
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg"
                  style={{
                    background: 'linear-gradient(145deg, #10b981, #059669)',
                    boxShadow: '8px 8px 16px #d4d4d4, -8px -8px 16px #ffffff'
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '12px 12px 24px #d4d4d4, -12px -12px 24px #ffffff'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <div className="text-center mb-16">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-[#8D7B68] mb-4"
            {...fadeUp}
          >
            Revitalize and Rejuvenate: The Benefits of Lemongrass Scrub
          </motion.h3>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                rotateY: 5,
                rotateX: 5
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="h-full p-8 rounded-3xl transition-all duration-500"
                style={{
                  background: 'linear-gradient(145deg, #ffffff2e, #eaeaea19)',
                  boxShadow: '15px 15px 30px #d1dcd4, -15px -15px 30px #ffffff'
                }}
              >
                <div className="text-center space-y-4">
                  <div
                    className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl mb-6 bg-gradient-to-r ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    style={{
                      boxShadow: 'inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px rgba(255,255,255,0.8)'
                    }}
                  >
                    {service.icon}
                  </div>
                  <p className="text-xl font-bold text-[#8D7B68] mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </p>
                  <p className="text-[#3E3636]/80 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-12">
          <motion.p
            className="text-3xl lg:text-4xl font-bold text-[#8D7B68] mb-6"
            {...fadeUp}
          >
            Why Choose River Salon and Day Spa?
          </motion.p>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-16">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              className="group h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div
                className="p-6 rounded-2xl text-center space-y-4 transition-all duration-300 h-full flex flex-col items-center justify-center"
                style={{
                  background: 'linear-gradient(145deg, #d9f0d8b9, #f0f4e366)',
                  boxShadow: '10px 10px 20px #dff6e5ff, -10px -10px 20px #ffffff'
                }}
              >
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-lg mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: 'linear-gradient(145deg, #10b981, #059669)',
                    boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.1), inset -3px -3px 6px rgba(255,255,255,0.8)'
                  }}
                >
                  <item.icon className="text-white text-2xl" />
                </div>
                <p className="text-sm font-semibold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300 text-center">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-12">
          <motion.h4
            className="text-3xl font-bold text-[#8D7B68] mb-6"
            {...fadeUp}
          >
            Frequently Asked Questions
          </motion.h4>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
        </div>

        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg, #ffffffff, #e7f6eeff)',
                boxShadow: '8px 8px 16px #d1dcd4, -8px -8px 16px #ffffff'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-semibold text-[#8D7B68]">{faq.question}</span>
                <span className="text-2xl text-green-600 transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-[#3E3636]/80 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
      {/* CTA Section */}
      <section
        className="relative w-full py-16 select-text bg-cover bg-center"
        style={{
          backgroundImage: "url('images/best-thai-massage-in-chennai.jpeg')"
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
              className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-white mb-6 select-text"
              {...fadeUp}
            >
              Experience Pure Relaxation: Revitalize Your Senses at Lemongrass Bliss
            </motion.h5>
            <motion.p
              className="text-white/90 text-lg leading-relaxed mb-8 max-w-4xl mx-auto text-center select-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Revive your soul with the Lemongrass Bliss, an absolute escapade to rejuvenate body and mind. Featuring soothing lemongrass along with skillful massage techniques, it literally rejuvenates body and mind.Lightly scrubbing the skin,  Our <span className="text-green-300 font-bold">Lemongrass Scrub Massage</span> at <span className="text-green-300 font-bold">Chennai, Coimbatore, Bangalore Trichy, Tripur and</span> <Link href="/best-body-massage-spa-in-bypass-vellore" className="text-green-400 font-semibold hover:text-green-300 transition-colors">Vellore</Link> which will let your skin soft and glowing while easing tension and refreshing one from deep within.
            </motion.p>
             <Link href="tel:+919500029234">
              <motion.button
                className="px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-lg transition-all duration-300"
                style={{
                  background: 'linear-gradient(145deg, #10b981, #059669)',
                  boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)'
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 15px 40px rgba(16, 185, 129, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Book Now
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}