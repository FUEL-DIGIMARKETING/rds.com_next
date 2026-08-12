'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import CustomImage from './CustomImage'
import { coffeeWrapImageData } from '../data/coffeeWrapImageData'
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
    title: "Antioxidant Boost",
    description: "These coffee wraps happen to be highly rich in antioxidants that have some capabilities of neutralizing free radicals, hence protecting your skin from environmental damage. This protective effect further leads to healthy skin, a youthful look, and contributes to a radiant appearance due to the reduction of age signs.",
    icon: "🛡️",
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "Accelerated Blood Circulation",
    description: "This is essentially the result of coffee's caffeine, which also enhances your blood flow and perhaps the delivery of nutrients to your skin. A boost of this type not only will improve the health and glow of the skin but can even help you with cell repair and rejuvenation.",
    icon: "💓",
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "Skin Firming",
    description: "Treatments such as wrapping regular coffee tighten the skin and firm it to decrease the appearance of cellulite, making the body look more toned and smooth. The caffeine boost skin suppleness, providing the illusion of more young, contoured skin.",
    icon: "✨",
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "Stress Relief",
    description: "Its soothing smell ministers to the individual to be in a tranquil environment by lowering stress and promoting relaxation of both mind and body. More than an assuaging of the fevered mind, sensual pleasures work to ease mental tension and restore total well-being, leaving you refreshed and rebalanced in your thoughts.",
    icon: "😊",
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "Deep Hydration",
    description: "Wraps of coffee have strong moisturizing effects, which keep the skin soft and supple, hence fighting off dryness by giving good hydrating action. This deep hydration rebuilds your skin's natural barrier for a smoother feel and a more radiant, healthy glow.",
    icon: "💧",
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "Brightening Effect",
    description: "Organic acids, that happen to be found in the coffee, should gently exfoliate on the surface of the skin without causing irritation, lifting dead cells, and discoloration and creating an appearance of bright, more even glow.",
    icon: "🌿",
    color: "from-green-400 to-emerald-500"
  }
]

const whyChooseUs = [
  { icon: FaSpa, title: "Revitalizing Coffee Infusion" },
  { icon: FaLeaf, title: "Silky Skin Texture" },
  { icon: FaUserTie, title: "Energizing Aromatherapy" },
  { icon: FaHandsHelping, title: "Antioxidant Rich Benefits" },
  { icon: FaSmile, title: "Deep Hydration" },
  { icon: FaHandHoldingHeart, title: "Invigorating Stress Relief" }
]

const faqs = [
  {
    question: "What advantages may a body wrap made of coffee offer?",
    answer: "A coffee body wrap will stimulate circulation, provide antioxidants, hydrate the skin, firm it up, cause less visible cellulite, and calm you out."
  },
  {
    question: "Is a coffee pack beneficial for the skin?",
    answer: "For that, yes, a coffee pack exfoliates, hydrates, and also gives you those antioxidants that help to improve the texture of your skin, reduce dryness, and give an overall glow."
  },
  {
    question: "Can coffee help improve loose skin?",
    answer: "Coffee stimulates collagen production, which can help tighten and firm loose skin, making it look smoother and more toned."
  },
  {
    question: "Does coffee assist with reducing pigmentation?",
    answer: "Coffee's antioxidants and exfoliating properties can help even skin tone, reducing pigmentation and revealing a brighter, more balanced complexion."
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true }
}

export default function CoffeeWrapPage() {
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
          style={{ backgroundImage: `url('${coffeeWrapImageData.hero.src}')` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Floating Coffee Bean Particles Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-amber-600 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: '0 0 15px rgba(245,158,11,0.6)'
              }}
              animate={{
                y: [-40, 40, -40],
                x: [-30, 30, -30],
                scale: [0.5, 1.8, 0.5],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3
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
            Coffee Body Wrap Massage
          </motion.p>
          <motion.p
            className="text-xl md:text-3xl text-amber-100 font-light drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Coffee Bliss for Your Body & Soul!
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <motion.div className="text-center mb-16" {...fadeUp}>
          <h1 className="text-3xl md:text-5xl font-bold text-[#8D7B68] mb-6">
            Best Coffee Wrap Massage Spa - Revitalize with a Brew
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Content Grid with Tilt Effect */}
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
              Awaken Your Senses: Unwind with Our Revitalizing Coffee Massage
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              "Coffee break" is going to take on a completely new meaning. Ready for a real coffee break? Come and indulge in the perfect retreat from the daily grind with our <strong className="text-[#8D7B68] font-bold">Coffee Wrap Massage,</strong> a sure pick-me-up for your senses, invigorating your skin with the healing properties of coffee to fight sun and pollution damage and let inner beauty shine through.
            </motion.p>

            <motion.p
              className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Sip on Serenity: Indulge in Our Coffee Infused Body Wrap
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              With great experience, at <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon and Day Spa</Link> our team of professionals in the beauty business comes forth. We offer a number of different coffee therapies designed for heightening your senses. From the rich scents of coffee taking you to faraway places, enjoy the premium coffee wraps, soothing your body and refreshing your spirit.
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
                  src={coffeeWrapImageData.content.src}
                  alt={coffeeWrapImageData.content.alt}
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
                Best Coffee Wrap Massage In Chennai - River Salon and Day Spa
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                It is excellent for skin care and packed full of antioxidants; hence, this is the ideal wrapping for weary and dull skin. Its intoxicating aroma soothes your disturbed mind by provoking feelings of serenity in your brain. If you visit our <Link href="/spa-massage-coimbatore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Best Massage Center in Coimbatore</Link>, you will be in a state of serenity that is accentuated by an atmosphere of relaxation wherein the efficient staff will give you gentle massages to rejuvenate yourself.
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                We envelop you with pampering, aromatic creams after your treatment, allowing your skin to absorb the essential nutrients. This is an exceptional experience, just a visit away-come and treat yourself to pure bliss at our nearest location.
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

        {/* Services Section with Neumorphism Cards */}
        <div className="text-center mb-16">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4"
            {...fadeUp}
          >
            Perk Up Your Skin: Top Benefits of a Coffee Wrap Massage
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
          <motion.h4
            className="text-3xl lg:text-4xl font-bold text-[#8D7B68] mb-6"
            {...fadeUp}
          >
            Why Choose River Salon and Day Spa?
          </motion.h4>
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
                    background: 'linear-gradient(145deg, #10b981, #059669)'
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
          backgroundImage: "url('https://www.riverdayspa.com/asset/best-thai-massage-in-chennai.jpeg')"
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
              Awaken Your Glow: Experience the Ultimate Coffee Wrap Massage
            </motion.h5>
            <motion.p
              className="text-white/90 text-lg leading-relaxed mb-8 max-w-4xl mx-auto text-center select-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              There are a few known facts about coffee wraps; they are said to help reduce cellulite in the body, giving you that leaner appearance. For transforming you into that true princess River Salon and Day Spa at Vellore, <strong className="text-green-300 font-bold">Chennai, Bangalore, Trichy, and</strong> <Link href="/massage-spa-in-tirupur" className="text-green-400 font-semibold hover:text-green-300 transition-colors">Tirupur</Link> is the best choice. A royal treat in customized coffee wraps to cater to all that you need.Our experts would study the sensitivity of your skin and with their mix of green coffee and cream, get for you the perfect blend. It is a rich, antioxidant treatment that cleans and moisturizes the skin, tightens pores, and removes dead cells, giving you a return to glow in the right way. So come along, indulge yourself the way you never did before.
            </motion.p>
            <Link href="tel:+919500029234 ">
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