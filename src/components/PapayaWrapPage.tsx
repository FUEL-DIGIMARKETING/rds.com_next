'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import CustomImage from './CustomImage'
import { papayaWrapImageData } from '../data/papayaWrapImageData'
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
    title: "Deep Skin Exfoliation",
    description: "It has mild enzymes that softly apply for dead skin stripping to leave skin perfectly smoothened, and softer with natural glow-not processed chemicals. Natural exfoliation from this process helps to eliminate blocked pores and further curbs the incidences of breakout. Thus, the skin would get a clearer and fresh look.",
    icon: "🌟",
    color: "from-orange-400 to-red-500"
  },
  {
    title: "Intense Hydration",
    description: "This wrap intensely hydrates the skin, and absorbs it into the essential nutrients, so you feel your body is hydrated, soft, and fresh. Intensive hydration not only provides advantages for the appearance of your skin but also enhances resistance, making the skin bright and healthier.",
    icon: "💧",
    color: "from-blue-400 to-cyan-500"
  },
  {
    title: "Natural Detoxification",
    description: "The antioxidants in papaya clean the toxins from the skin, therefore purifying and giving the face a brighter, healthier complexion with an improved texture. Such detoxification can even help combat the risk of inflammation caused by most irritants, thus aiding comfort and rejuvenation of the skin.",
    icon: "🌿",
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "Anti-Aging Properties",
    description: "Being a fruit that's power-packed with Vitamin C and antioxidants, papaya is known to reduce wrinkles and fine lines because it adds to that smooth radiance that lets everybody know you're young and full of life. The nourishing quality stimulates collagen, which further helps the skin look more youthful in terms of firmness and elasticity.",
    icon: "✨",
    color: "from-purple-400 to-pink-500"
  },
  {
    title: "Enhanced Skin Elasticity",
    description: "Papaya develops more collagen in your skin, so your skin becomes tighter and firmer, toned and looking younger. At the higher levels of this protein, its structure gives your skin a fuller plump appearance that presents you to look more radiant with a younger look than that which sags or hangs, or has age-related sag.",
    icon: "🎯",
    color: "from-amber-400 to-orange-500"
  },
  {
    title: "Improved Skin Tone",
    description: "In terms of content, the natural enzymes that can be found in papaya lighten the skin and give it an appeal with reduced dark spots and skin tones for a brighter complexion. Effects such as those of soft lightening help reveal a more uniform texture and healthy luminescence for overall beauty.",
    icon: "🌞",
    color: "from-green-400 to-orange-500"
  }
]

const whyChooseUs = [
  { icon: FaSpa, title: "Revitalizing Skin Rejuvenation" },
  { icon: FaLeaf, title: "Gentle Exfoliation for a Smooth Glow" },
  { icon: FaUserTie, title: "Deep Hydration and Nourishment" },
  { icon: FaHandsHelping, title: "Rich in Vitamins and Antioxidants" },
  { icon: FaSmile, title: "Natural Detoxification and Purification" },
  { icon: FaHandHoldingHeart, title: "Skin Firming and Radiance Boost" }
]

const faqs = [
  {
    question: "How does a papaya wrap massage work?",
    answer: "A papaya wrap is a massage using natural enzymes to exfoliate, hydrate, and nourish your skin for that soft and smooth youthful glow."
  },
  {
    question: "What should I expect during a papaya wrap massage?",
    answer: "Get ready to feel marvelously relaxed as the gentle application of the papaya wrap is soon followed by a refreshing massage that adds to the overall effect of the treatment."
  },
  {
    question: "Is the papaya wrap suitable for all skin types?",
    answer: "Yes. The papaya wrap is gentle and safe for most skin types, even the sensitive ones, to give a healthy glow to the skin."
  },
  {
    question: "How long does a papaya wrap massage session last?",
    answer: "A session in a traditional papaya wrap massage lasts 60 to 90 minutes, incorporating the application, relaxing time, and soothing massage."
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true }
}

export default function PapayaWrapPage() {
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
          style={{ backgroundImage: `url('${papayaWrapImageData.hero.src}')` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

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
            Papaya Wrap Massage
          </motion.p>
          <motion.p
            className="text-xl md:text-3xl text-orange-100 font-light drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Unwrap the Glow with Ultimate Relaxation!
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <motion.div className="text-center mb-16" {...fadeUp}>
          <h1 className="text-3xl md:text-5xl font-bold text-[#8D7B68] mb-6">
            Best Papaya Wrap Massage Spa - A Tropical Escape for Your Skin
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
              Rejuvenate Your Skin with the Nourishing Benefits of Papaya
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
              {...fadeUp}
            >
              At <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Spa in Chennai,</Link> we ensure you've customized massages, body wraps, and scrubs for your body and your dear ones as per your skin's requirements. These natural therapies provide long-lasting results; your body and mind will love them. We at <span className="text-[#8D7B68] font-bold">River Day Spa</span> make use of the best products to provide you with the most exceptional service. We feel happy to give you nature's best and your satisfaction is the biggest reward.
            </motion.p>

            <motion.p
              className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Experience Deep Hydration and Radiance with Our Luxurious Papaya Wrap Treatment
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
              {...fadeUp}
            >
              Papaya body wrap service here in Chennai has been carefully prepared to give your skin not only a new look but also the texture you need. All the excess toxins and fluids are drained out from your body, and you feel soft and fresh. This fruit is full of Vitamin C, enzymes, and potassium, which revitalize and soften the skin. Papain in papaya helps dissolve the impurities in the skin so that you feel fresh and young.
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
                  src={papayaWrapImageData.content.src}
                  alt={papayaWrapImageData.content.alt}
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Package Section */}
        <motion.section
          className="relative mb-20"
          {...fadeUp}
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
                Best Papaya Wrap in Bangalore - River Salon and Day Spa
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed mb-8"
                {...fadeUp}
              >
                Be pampered with the best papaya wrap at <Link href="/best-body-massage-center" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon and Day Spa.</Link> This great treatment uses the natural power of the papaya enzyme for exfoliation hydration and nourishment of the skin. It detoxifies, firms, and lets your skin radiate and glow with a newfound softness. Done for each session to improve well-being above all else, every visit forms an excellent escape from the daily stresses of life, so Book your Appointment Now!
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
            Unlock the glories of radiant skin with a papaya wrap
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
              Discover the Secret to Radiant Skin with Our Revitalizing Papaya Treatments
            </motion.h5>
            <motion.p
              className="text-white/90 text-lg leading-relaxed mb-8 max-w-4xl mx-auto text-center select-text"
              {...fadeUp}
            >
              Let the natural beauty of the skin glow out with refreshing papaya wrap treatments at <Link href="/spa-in-bangalore" className="text-green-400 font-semibold hover:text-green-300 transition-colors">Best Massage Center in Bangalore,</Link> <strong className="text-green-300 font-bold">Trichy, Coimbatore, Chennai, Tirupur and Vellore.</strong> In them, nutrient-rich papaya enzymes exfoliate and hydrate your skin so you end up feeling refreshed, glowing, and rejuvenated.Get yourself to one of our spas today where this unique tropical get-away will improve that complexion at the same time as looking to relax and rejuvenate.
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