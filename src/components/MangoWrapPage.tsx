'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import CustomImage from './CustomImage'
import { mangoWrapImageData } from '../data/mangoWrapImageData'
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
    title: "Radiant Skin",
    description: "At the same time, it will leave a silky-soft, supple texture and all that is smooth to the touch. The natural fruit enzymes gently exfoliate and remove dead skin cells. It tends to leave clearer and brighter skin.",
    icon: "✨",
    color: "from-green-400 to-orange-500"
  },
  {
    title: "Gentle Exfoliation",
    description: "The mixture of mango, milk, and sugar is very organic since it exfoliates and peels off dead skin alongside other impurities to reveal a glowing fresh young skin. It nourishes and moisturizes to slough off dead skins so your skin feels silky smooth rejuvenated.",
    icon: "🌟",
    color: "from-orange-400 to-red-500"
  },
  {
    title: "Anti-Aging Benefits",
    description: "Rich in antioxidants, mangoes help to defend the body against free radicals that cause wrinkles and shallowness, leaving the skin looking young, firm, and adequately lifted. Such antioxidants also stimulate collagen production. Due to all this, the skin acquires that natural and youthful glow.",
    icon: "🛡️",
    color: "from-amber-400 to-yellow-500"
  },
  {
    title: "Deep Hydration",
    description: "At the same time, it will leave a silky-soft, supple texture and all that is smooth to the touch. The natural fruit enzymes gently exfoliate and remove dead skin cells. It tends to leave clearer and brighter skin.",
    icon: "💧",
    color: "from-blue-400 to-cyan-500"
  },
  {
    title: "Skin Brightening",
    description: "The nutrients in mangoes also lighten up blotchy complexions as well as blemishes for that flawless radiant glow. To add, the fruit is a natural source of vitamin C, which would prevent melanin.",
    icon: "🌞",
    color: "from-yellow-500 to-orange-600"
  },
  {
    title: "Stress Relief",
    description: "By providing balanced attention on both sides of your body, Synchronized massage ensures symmetrical healing, and relief in muscle and alignment, because of this four-hand massage technique. The coordinated performance of two therapists provides a restoring balance to your both body and mind.",
    icon: "😊",
    color: "from-green-400 to-emerald-500"
  }
]

const whyChooseUs = [
  { icon: FaSpa, title: "Tropical Mango Nourishment" },
  { icon: FaLeaf, title: "Glowing, Revitalized Skin" },
  { icon: FaUserTie, title: "Soothing Aromatherapy Bliss" },
  { icon: FaHandsHelping, title: "Vitamin-Packed Skin Rejuvenation" },
  { icon: FaSmile, title: "Deep Moisturization and Hydration" },
  { icon: FaHandHoldingHeart, title: "Restorative Relaxation and Stress Relief" }
]

const faqs = [
  {
    question: "What makes a mango wrap massage unique?",
    answer: "It combines tropical extracts of mangoes with hydration and exfoliation, and the result is rejuvenated and refreshed radiant skin."
  },
  {
    question: "Can a mango wrap massage help with dry skin?",
    answer: "Yes, for dry skin. The rich nutrients and wonderful states of nourishment in the mango deeply moisturize, restoring hydration and softness."
  },
  {
    question: "How long does a mango wrap massage take?",
    answer: "Usually, for a mango wrap, it's 60 to 90 minutes long with exfoliation, then the wrap, and then full-body massage."
  },
  {
    question: "Is a mango wrap massage suitable for sensitive skin?",
    answer: "Yes, those mango ingredients are softening, nourishing and hydrating, so the treatment would really fit most sensitive skins."
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true }
}

export default function MangoWrapPage() {
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
          style={{ backgroundImage: `url('${mangoWrapImageData.hero.src}')` }}
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
            Mango Wrap Massage
          </motion.p>
          <motion.p
            className="text-xl md:text-3xl text-orange-100 font-light drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Definitely Leaves You wanting More.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <motion.div className="text-center mb-16" {...fadeUp}>
          <h1 className="text-3xl md:text-5xl font-bold text-[#8D7B68] mb-6">
            Best Mango Wrap Massage Center - Indulge in Tropical Bliss
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
              Nourish Your Skin with the Sweet Essence of Mangoes
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
              {...fadeUp}
            >
              The king of fruits was described: mango is mainly for its taste and flavor but also for its beauty benefits. If bliss were to really indulge in this magical fruit, one would surely experience sheer goodness. The properties that make mangoes special do wonders for dull, lifeless skin, making it soft and supple, radiant, and healthy-looking.
            </motion.p>

            <motion.p
              className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              A Luxurious Escape to Refresh, Rejuvenate, and Glow
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
              {...fadeUp}
            >
              At the <Link href="/body-massage-in-chennai-egmore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Day Spa in Chennai,</Link> we have the treatments known as Mango Wrap Treatment that truly bring a regime of full skin renewal with the good natural healing properties of mangoes. In the healing process, fading of blemishes and patches is deeply hydrating and nourishing for your skin, so much so that you leave feeling refreshed, rejuvenated, and more radiant inside out.
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
                  src={mangoWrapImageData.content.src}
                  alt={mangoWrapImageData.content.alt}
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
                Best Mango Wrap In Chennai - River Salon and Day Spa
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed mb-8"
                {...fadeUp}
              >
                All the remedies are within the embracing arms of nature, and what <Link href="/massage-spa-in-vellore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Spa in Vellore</Link> has done is its best to bring pure goodness from nature to its dearest clients. Always considering your value in crafting every treatment on our menu, bringing you the best because you are worth nothing less, Mango Wrap leaves your skin glowing, supple, and turning heads. Rich scrubs are created by mixing mango, milk, and sugar, which gently exfoliate and get rid of impurities and dead skin cells. It would, no doubt leave the treated leaving with a refreshing feel yearning for more.
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
            className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4"
            {...fadeUp}
          >
            Unwrap the Benefits: Discover the Glow-Boosting Power of a Mango Wrap
          </motion.h3>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />  </div>

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
          />  </div>

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
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />  </div>

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
              Rejuvenate Your Senses with Luxurious Mango-Infused Spa Treatments
            </motion.h5>
            <motion.p
              className="text-white/90 text-lg leading-relaxed mb-8 max-w-4xl mx-auto text-center select-text"
              {...fadeUp}
            >
              A revitalizing massage with mango wraps will provide you with the utmost relaxation. Blended with tropical mango extracts, exfoliate your body and hydrate your skin to leave it feeling soft and radiant. Experience soothing warmth as the wrap at <Link href="/massage-spa-in-trichy" className="text-green-400 font-semibold hover:text-green-300 transition-colors">Spa in Trichy</Link> Which Works in tandem with a gentle massage to restore balance, refresh your senses, and nourish your body.
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