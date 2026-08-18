'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomImage from './CustomImage'
import { seasaltScrubImageData } from '../data/seasaltScrubImageData'
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
    title: "Deep Exfoliation",
    description: "Sea Salt Scrubs are used to remove dead skin cells, which will reveal your smoother and healthier skin for that youthful glow. This would, over time, improve skin texture and softness.",
    icon: "🌊",
    color: "from-blue-400 to-cyan-500"
  },
  {
    title: "Improves Blood Circulation",
    description: "Massage with sea salt scrub helps in better blood circulation to the skin along with oxygenation and nutrition. Hence, good healthy cell regeneration and skin vitality are achieved; it reduces inflammation of the skin and relaxes the pulled muscles.",
    icon: "💓",
    color: "from-red-400 to-pink-500"
  },
  {
    title: "Detoxifies the Skin",
    description: "It has drawing properties-impurities and toxins are pulled out of the skin, leaving it purified, refreshed, and free of any impurities that might dull or cause breakouts, balancing oil production for a clearer complexion.",
    icon: "✨",
    color: "from-purple-400 to-violet-500"
  },
  {
    title: "Reverses Signs of Aging",
    description: "A repeated use of the sea salt scrub reduces fine lines and wrinkles, making the skin look firmer and more youthful with time as a result of increased collagen and the skin's elasticity.",
    icon: "⏰",
    color: "from-amber-400 to-orange-500"
  },
  {
    title: "Tan Removal",
    description: "The sea salt scrubs gently remove the accumulated tan and sun damage to get back one's natural skin tone and glow. In addition, it smoothens out and brightens up the skin texture.",
    icon: "☀️",
    color: "from-green-400 to-orange-500"
  },
  {
    title: "Aromatherapy Benefits",
    description: "Sea salt scrubs, when combined with aromatherapy essential oils, will indulge one's senses to their fullest extent to calm down the mind, soothe the senses, and regenerate skin for a general feeling of well-being and tranquillity.",
    icon: "🧘‍♀️",
    color: "from-green-400 to-teal-500"
  }
]

const whyChooseUs = [
  { icon: FaSpa, title: "Deep Exfoliation" },
  { icon: FaLeaf, title: "Revitalized Skin Texture" },
  { icon: FaUserTie, title: "Tan Removal" },
  { icon: FaHandsHelping, title: "Detoxification" },
  { icon: FaSmile, title: "Chemical-Free Organic Ingredients" },
  { icon: FaHandHoldingHeart, title: "Improved Skin Hydration" }
]

const faqs = [
  {
    question: "Is it safe to have a sea salt scrub massage daily?",
    answer: "Avoid daily massages of sea salt scrub; it's too abrasive. Allow the sessions only 2-3 according to your texture with expert guidance."
  },
  {
    question: "What does a sea salt scrub massage do for the skin?",
    answer: "Exfoliation of dead skin, improving flow of blood, detoxifying your skin with a sea salt scrub massage and let you feel even smoother and more revitalized."
  },
  {
    question: "Can I use sea salt scrub on my face every day?",
    answer: "It will make you feel irritated, if you apply sea salt scrub to your face on a daily basis. Depending on the texture of your skin, it is preferable to exfoliate one or two times each week."
  },
  {
    question: "Can sea salt help brighten the skin?",
    answer: "Sea salt acts to scrub away the dead skin to possibly reveal a brighter layer of skin underneath but in no way lightens the skin tone."
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true }
}

export default function SeaSaltScrubPage() {
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
          style={{ backgroundImage: `url('${seasaltScrubImageData.hero.src}')` }}

          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }} />


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
            Sea Salt Body Scrub
          </motion.p>
          <motion.p
            className="text-xl md:text-3xl text-white/90 font-light drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Ocean Bliss
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <motion.div className="text-center mb-16" {...fadeUp}>
          <h1 className="text-3xl md:text-5xl font-bold text-[#8D7B68] mb-6">
            Best Sea Salt Scrub Massage - Ocean Bliss
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
              Exfoliate & Rejuvenate: Let the Power of Sea Salt Renew Your Skin
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Can you imagine a kitchen without salt? While salt is a staple seasoning that makes our food palatable, sea salt is so beneficial aside from adding flavor to dishes. It is actually an ideal exfoliating agent that rejuvenates the skin and suppresses itchiness. Here at <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon and Day Spa</Link>, we use nothing but organic sea salts of fine quality with no hazardous chemicals to bring the natural sparkle into your skin. Our expertly trained massage therapists will work towards addressing all your therapeutic needs in a serene and tranquil environment of our spa.
            </motion.p>

            <motion.p
              className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Feel the Ocean's Embrace: Smooth, Glowing Skin Awaits
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              When exploring the market for salt scrubs, you'll find a variety of options, but sea salt stands out as the top choice for exfoliation and deep cleansing of the dermal layer. A sea salt scrub is particularly effective in removing the tan accumulated over time. So, when you use a sea salt scrub during the rainy season, you're actually working to eliminate the tan your skin picked up during the summer months.
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-l from-teal-400 to-blue-500 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
              <div className="relative z-10 bg-white rounded-3xl p-2 shadow-2xl">
                <CustomImage
                  src={seasaltScrubImageData.content.src}
                  alt={seasaltScrubImageData.content.alt}
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
                Sea Salt Scrub Massage in Chennai - River Salon and Day Spa
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Exfoliating the skin with sea salt is great, as it helps promote good blood circulation. But combined with body massage, the effect becomes even more dramatic. Sea salt scrubs are indeed very effective in fighting signs of aging by reducing wrinkles, thus giving the skin its much-needed glow of youth. With continued use, these scrubs purify the skin and get back its health. The rejuvenated skin therefore appears brighter and glows with freshness. For that brighter and glowing skin, step into the <Link href="/body-massage-in-chennai-egmore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Best Spa in Chennai</Link> or Book your Appointment Now
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
            Learn About the Incredible Benefits of a Sea Salt Scrub
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
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300"
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
          backgroundImage: "url('/images/best-thai-massage-in-chennai.jpeg')"
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
              className="text-xl md:text-2xl lg:text-3xl text-center font-extrabold text-white mb-6 select-text"
              {...fadeUp}
            >
              Dive Into Ultimate Skin Renewal with the Best Sea Salt Scrub Massage
            </motion.h5>
            <motion.p
              className="text-white/90 text-lg leading-relaxed mb-8 max-w-4xl mx-auto text-center select-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We have introduced the best sea salts across all our outlets, offering an <strong>unparalleled spa experience</strong> for our esteemed customers. Book an appointment at River Salon and Day Spa with our therapists of excellence at your convenience and enjoy every bit of luxury and rejuvenation that comes with the ultimate <Link href="/" className="text-green-400 font-semibold hover:text-green-300 transition-colors">Spa in Chennai</Link>. We'll make you youthful, fresh, and vibrant.
            </motion.p>
            <motion.p
              className="text-white/80 text-lg italic leading-relaxed mb-8 text-center select-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Take a deep breath, let loose, and allow yourself to be pampered in the most serene environment.We'll make sure that your body and mind receive the treatment of rejuvenation.
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