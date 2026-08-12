'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomImage from './CustomImage'
import { coffeeScrubImageData } from '../data/coffeeScrubImageData'
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
    title: "Invigorates Skin",
    description: "In that regard, coffee scrubs revive by increasing blood flow and leave one refreshed and energized after every use. It considers the increased flow of blood, therefore revitalizing the skin to have that natural, glowing, healthy look, and is helpful to the elimination of toxins.",
    icon: "⚡",
    color: "from-green-400 to-orange-500"
  },
  {
    title: "Exfoliates Effectively",
    description: "The texture of coffee grounds makes them an excellent way to scrub away dead skin cells and roughen the skin to a smooth. It leaves your skin much brighter and even-toned. The additional exfoliation unclogs the pores and reduces the occurrences of breakouts to make the skin much clearer.",
    icon: "✨",
    color: "from-purple-400 to-pink-500"
  },
  {
    title: "Combats Cellulite",
    description: "Well, cellulite melts away slowly with the regular use of coffee scrubs as skin texture improves and the breakdown of fat stimulates it. The massage stimulates the production of collagen in the skin, firming it and toning it.",
    icon: "💪",
    color: "from-green-400 to-teal-500"
  },
  {
    title: "Fights Sun Damage",
    description: "Thus, coffee scrubs are charged with powerful antioxidants, a huge amount of caffeine, and vitamins, which are prone to fight off sun damage and clear discoloration like sunspots. Through the action of antioxidants, free radicals are neutralized, leaving your skin radiant and free of harm.",
    icon: "☀️",
    color: "from-orange-400 to-red-500"
  },
  {
    title: "Cleanses Deeply",
    description: "The exfoliating property of the coffee scrubs removes all the sweat, dirt, and impurities from the skin, leaving it clean, refreshed, and free of residues. The deep cleansing even works in unclogging pores and reducing the chance of acne and blemishes for clearer skin.",
    icon: "🧼",
    color: "from-blue-400 to-cyan-500"
  },
  {
    title: "Boost Mood",
    description: "Coffee aromas spread and stimulate the creation of endorphins, which raise the soul and fill your skincare regimen with an uplifting, mood-enhancing effect. The fresh smell fosters a sense of well-being, making each skincare session more enjoyable and restorative.",
    icon: "😊",
    color: "from-pink-400 to-rose-500"
  }
]

const whyChooseUs = [
  { icon: FaSpa, title: "Energizing Coffee Infusions" },
  { icon: FaLeaf, title: "Revitalizing Skin Refreshment" },
  { icon: FaUserTie, title: "Exfoliating Coffee Grounds" },
  { icon: FaHandsHelping, title: "Invigorating Circulation Boost" },
  { icon: FaSmile, title: "Aromatic Wake-Up Sensation" },
  { icon: FaHandHoldingHeart, title: "Refreshing Treatment" }
]

const faqs = [
  {
    question: "Is it possible for me to clean my face with coffee? Is it secure as well?",
    answer: "In general, provided the proper formula exists, a gentle massage follows, and irritation refrains and coffee scrubs are safely used on the face."
  },
  {
    question: "Can a coffee scrub remove scars?",
    answer: "As a result of coffee scrub will exfoliate your skin and improve tone."
  },
  {
    question: "Is a coffee scrub beneficial for pores?",
    answer: "Yes, coffee scrubs purify pores by washing away dead skin cells and impurities to achieve clearer and healthier skin."
  },
  {
    question: "How long does the effect of a coffee scrub last?",
    answer: "A coffee scrub's effects may last for several days. The regular scrubs are necessary for ongoing effects and skin texture smoothing."
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true }
}

export default function CoffeeScrubPage() {
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
          style={{ backgroundImage: `url('${coffeeScrubImageData.hero.src}')` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

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
            Coffee Body Scrub
          </motion.p>
          <motion.p
            className="text-xl md:text-3xl text-amber-100 font-light drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Massage Spa
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <motion.div className="text-center mb-16" {...fadeUp}>
          <h1 className="text-3xl md:text-5xl font-bold text-[#8D7B68] mb-6">
            Coffee Body Scrub Massage Spa: Reboot with a Coffee Massage
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Content Grid with Advanced 3D Effects */}
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
              Wake Up Your Senses: Energize and Renew with Every Coffee Scrub
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Refresh your senses with our refreshing coffee scrub, rich in perfume, elevating your spirits while exfoliating skin, and removing dead cells, and impurities. It leaves the skin feeling refreshed and silky, making it ideal for summertime use in the fight against sweat, grime, and sun tans. It will enhance blood circulation when used consistently to maintain healthy, radiant skin. With each cool scrape, experience the energizing power of coffee.
            </motion.p>

            <motion.p
              className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Smooth and Refreshing: Discover the Invigorating Benefits of Coffee-Infused Massage
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              At <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon & Day Spa</Link>, luxuriate coffee scrub massage treatments offer the ultimate relaxing experience. The energizing coffee grounds are combined with a combination of essential oils to nourish not only the skin but also cleanse and revitalize blood flow, resulting in rejuvenated and healthy-looking skin. The energy-boosting and fatigue-fighting coffee massage. The invigorating coffee massage refreshes the body and mind for luxurious relief from everyday stress.
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
                  src={coffeeScrubImageData.content.src}
                  alt={coffeeScrubImageData.content.alt}
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
                Best Coffee Scrub In Chennai - River Salon and Day Spa
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                A freshly brewed cup of coffee can give you energy and get you really invigorated during the morning hours providing so much more than just a shot in the arm. At one of the best spas, picture extending the revitalizing experience to your skincare routine with a coffee scrub. At River Day Spa, we have a few scrubs at hand, and among them is our energizing coffee scrub. This really does an excellent job when it comes to exfoliating skin and removing sun tans, revitalizing looks, especially before summer. The regular coffee scrubs at <Link href="/best-body-massage-center" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Best Massage Center</Link> will leave your skin smooth, clean, and gorgeous. Book your Appointment immediately and Visit our massage centers.
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
            className="text-2xl md:text-3xl font-bold text-[#8D7B68] mb-4"
            {...fadeUp}
          >
            Perk Up Your Skin: The Energizing Benefits of Coffee Scrubs
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
              className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-white mb-6 select-text"
              {...fadeUp}
            >
              Energize and Glow: Unleash the Power of Coffee for Your Skin
            </motion.h5>
            <motion.p
              className="text-white/90 text-lg leading-relaxed mb-8 max-w-4xl mx-auto text-center select-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our highly professional therapists and beauticians render world-class services that are truly incomparable here at <Link href="/spa-in-bangalore" className="text-green-400 font-semibold hover:text-green-300 transition-colors">River Day Spa in Bangalore</Link> and other locations at <span className="text-green-300 font-bold">Vellore, Tirupur, Chennai, Coimbatore, and Trichy.</span> We give you luxurious massages, scrubs, and body wraps for therapeutic needs just perfectly.Our professionals never fall behind and keep updating themselves to bring the latest fashion trends right to your doorstep. We're dedicated to helping you fall in love with your reflection and be your best self.
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