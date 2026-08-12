'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import AppLaunchBanner from './AppLaunchBanner'
import CustomImage from './CustomImage'
import { coimbatoreImages } from '@/data/coimbatoreImages'
import {
  FaSpa,
  FaHands,
  FaLeaf,
  FaGem,
  FaHotTub,
  FaDumbbell,
  FaBiking,
  FaHandHoldingHeart,
  FaHandHoldingMedical,
  FaYinYang,
  FaHeartbeat
} from 'react-icons/fa'
import {
  GiLotus,
  GiHairStrands,
  GiChocolateBar,
  GiFruitBowl,
  GiDiamondRing,
  GiMeditation,
  GiPaintBrush,
  GiScissors
} from 'react-icons/gi'

const wellnessServices = [
  {
    title: "Massages",
    icon: <GiLotus className="w-8 h-8 mb-4 text-green-400" />,
    content: "We assist you in regulating blood pressure and releasing hormones into the bloodstream that address a variety of illnesses, including anxiety, stress, and pain management."
  },
  {
    title: "Salon",
    icon: <GiHairStrands className="w-8 h-8 mb-4 text-green-400" />,
    content: "Various recommendations and counsel are offered by our professionals based on your preferences. Their training in modern fashion ensures that they will proceed with the greatest cosmetic treatments."
  },
  {
    title: "Body Scrubs",
    icon: <GiChocolateBar className="w-8 h-8 mb-4 text-green-400" />,
    content: "Natural organic body scrubs like chocolate, coffee, and salt will exfoliate skin health and increase the glow."
  },
  {
    title: "Body Wrap",
    icon: <GiFruitBowl className="w-8 h-8 mb-4 text-green-400" />,
    content: "The seasonal fruits we use to make our natural body wraps naturally exfoliate and moisturize the skin."
  }
]

const services = [
  {
    title: "Aspiring Bridal Look",
    icon: <GiDiamondRing className="w-8 h-8 mb-4 text-green-400" />,
    content: "We are excited to offer you a taste of the variety of services along with our bridal makeup packages and salon services. We take care of your hair, skin, manicure, pedicure, and makeup and assist you in selecting the outfit that best suits your special day's look.The stunning appearance you have always desired for this special evening."
  },
  {
    title: "Unwind and Revive",
    icon: <GiMeditation className="w-8 h-8 mb-4 text-green-400" />,
    content: "At River Group of Salon and Spa, the therapist's skilled hands tend to your relaxation, releasing tension from your body, promoting a state of good sleep, and balancing blood flow."
  },
  {
    title: "Beauty Blooms",
    icon: <GiPaintBrush className="w-8 h-8 mb-4 text-green-400" />,
    content: "We are renowned for its cutting-edge haircuts and styling that look like they belong in a style. Our best manicure catalogues that keep up with global trends. Many of our young clientele make a bold fashion statement and are more than happy with our services."
  },
  {
    title: "Enhance Your Hair Protection",
    icon: <GiScissors className="w-8 h-8 mb-4 text-green-400" />,
    content: "The rough feeling in the hair and scalp is highly unhealthy. We offer various hair services that unclog the scalp, promoting healthy growth and adding shine. Our Salon and Spa in Coimbatore include hair straightening, styling, haircuts, colouring, and many others to meet your needs."
  }
]
const faqs = [
    { question: "What does a body spa include?", answer: "After a massage, avoid alcohol, heavy meals, intense exercise, and hot showers. Rest well and stay hydrated. Book your next session at River Salon and Day Spa." },
    { question: "Which massage is best for relaxation with a partner?", answer: "A couple's massage is best for romantic settings. Relaxing side by side creates intimacy and connection with your partner. Book a romantic couples experience at River Salon and Day Spa today!" },
    { question: "What is a female-to-male body massage?", answer: "A female-to-male body massage is a treatment where a female therapist uses bodywork to help male clients release their physical muscle tension and mental stress. Experience it at River Salon and Day Spa." },
    { question: "What is a Couple massage in a spa?", answer: "A couple massage at River Day Spa lets you and your loved one relax together, enjoying simultaneous therapeutic treatments, body scrubs, facials, and creating a truly blissful shared wellness experience." },
  ]

const servicesList = [
  {
    title: "Get Into Heaven",
    description: "In a contemporary environment, River Salon and Day Spa in Coimbatore offers relaxation spaces to reduce body pains and refill your energy.",
    icon: FaHotTub
  },
  {
    title: "Make Time for One Another",
    description: "Our couples massage packages are ideal for spending refreshing time together. Rediscover your love with your partner. Choose our packages.",
    icon: FaHandHoldingHeart
  },
  {
    title: "Relax Your Sports Injuries",
    description: "Our methods will apply pressure points to your body to generate deep, internal relaxation, helping you regain muscle flexibility and improve blood circulation.",
    icon: FaDumbbell
  },
  {
    title: "Scrubbing With Fragranced",
    description: "With our fragrant exfoliating body scrub, which is tailored to your skin type, you can greatly purify your body and leave your skin feeling detoxified.",
    icon: FaLeaf
  },
  {
    title: "Skin Purification With Body Wraps",
    description: "To nourish your body and leave your senses refreshed at River Salon and Day Spa. We use the best body wrap ingredients, complemented by essential oils.",
    icon: FaYinYang
  },
  {
    title: "Global Massage Therapy",
    description: "Offering customers in Coimbatore a taste of international unisex massage services from Bali, Sweden, and Thailand is now available in your neighbourhood.",
    icon: FaHeartbeat
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true }
}

const ServiceCard = ({ service, index }: { service: any; index: number }) => (
  <motion.div
    className="group cursor-pointer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
  >
    <div className="h-full p-8 rounded-3xl transition-all duration-500 bg-gradient-to-br from-[#f8f5f0] to-[#e8e5e0] shadow-lg">
      <div className="text-center space-y-4">
        <div className="flex justify-center mb-4">{service.icon}</div>
        <p className="text-xl font-bold text-[#8D7B68] mb-4 group-hover:text-green-600 transition-colors duration-300">{service.title}</p>
        <p className="text-[#3E3636]/80 text-sm leading-relaxed">{service.content}</p>
      </div>
    </div>
  </motion.div>
)

const ServiceListCard = ({ service, index }: { service: any; index: number }) => (
  <motion.div
    className="group cursor-pointer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
  >
    <div className="h-full p-8 rounded-3xl transition-all duration-500 bg-gradient-to-br from-[#f8f5f0] to-[#e8e5e0] shadow-lg">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl mb-6 bg-gradient-to-r from-green-400 to-teal-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <service.icon className="text-white text-2xl" />
        </div>
        <p className="text-xl font-bold text-[#8D7B68] mb-4 group-hover:text-green-600 transition-colors duration-300">{service.title}</p>
        <p className="text-[#3E3636]/80 text-sm leading-relaxed">{service.description}</p>
      </div>
    </div>
  </motion.div>
)

export default function CoimbatorePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <>
      <div className="w-full overflow-x-hidden min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
        <AppLaunchBanner />{/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${coimbatoreImages.hero.src}')` }}
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <p className="text-6xl font-bold text-white mb-6 italic">
              Heaven of Refined
            </p>
            <p className="text-4xl text-amber-100 font-bold italic">
              Relaxation
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Introduction Section */}
          <motion.div className="text-center mb-16" {...fadeUp}>
            <h1 className="text-3xl md:text-5xl font-bold text-[#8D7B68] mb-6">
              Spa Massage Coimbatore - Healing hands, peaceful mind
            </h1>
            <motion.div
              className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <p className="text-[#3E3636]/90 text-lg leading-relaxed max-w-4xl mx-auto">
              River Saloon and Day Spa offers soothing music and a fragrant environment to unwind. Our treatments and beauty services provide peace and a sense of well-being.
            </p>
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
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                In Coimbatore, River Salon and Day Spa is a famous massage centers in RS Puram. Our therapists are highly skilled professionals with years of experience. The positive messages satisfy the client by removing negativity from their body and mind. So, we've captured everyone's attention with our wide array of appealing assistance. It is a lovely place for a holiday and weekend to relieve stress, and if you are in the city and looking to catch up with your routine beauty care, River Salon and Day Spa is the Best place to go. One of the most incredible places to get massage services in Coimbatore is River Salon and Day Spa, which you can find when searching for <Link href="/spa-massage-coimbatore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">"Massage in Coimbatore"</Link> on Google.
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
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-l from-green-400 to-emerald-500 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
                <div className="relative z-10 bg-white rounded-3xl p-2 shadow-2xl">
                  <CustomImage
                    src={coimbatoreImages.luxurySpa.src}
                    alt={coimbatoreImages.luxurySpa.alt}
                    width={1000}
                    height={665}
                    className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 637px"
                    quality={75}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Wellness Services Section */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Best Massage Centre in Coimbatore
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-[#3E3636]/90 text-base leading-relaxed max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The River Salon and Day Spa is a trustworthy establishment with an excellent track record for offering clients of all ages long-term pain relief and beauty treatments. With almost all the different massages and therapies available in Coimbatore, our skilled therapists will assist you in making an informed decision. Visit River Salon and Day Spa, our professional male therapists are here to offer the best massage treatment in a welcoming and elegant environment.Our unparalleled services present the best rest and renewal. Reach for the experienced hands therapy male-to-male spa in Coimbatore.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {wellnessServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* CTA Section */}
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
                <motion.h3
                  className="text-3xl font-bold text-[#8D7B68] mb-6"
                  {...fadeUp}
                >
                  Your Journey to Relaxation Starts At River Day Spa In Coimbatore
                </motion.h3>
                <motion.p
                  className="text-[#3E3636]/90 text-base leading-relaxed mb-8 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  One of Tamil Nadu's most picturesque cities, Coimbatore is well-known for its overgrown surroundings. The city serves as a popular vacation spot for residents all around the state. We invite you to experience our top-notch massage, salon, body wrap, and scrub at River Salon and Day Spa. We are located at RS Puram for your convenience. Our services include bride and groom makeup packages, membership, and gift cards for your loved one. You will experience some of the Spa in Coimbatore taking care of you at our Best luxury spa.It's a fantastic way to escape a hectic schedule.
                </motion.p>
                <Link href="tel:+919962877703">
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
                    📞 Book Now
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Second Content Section */}
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
                Breathe, Relax, Renew Your Sanctuary in RS Puram, Coimbatore
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                R S Puram is one of the elite areas in Coimbatore, with many tourist attractions nearby. So, plan your weekend for a body massage at River Salon Day Spa in RS Puram, Coimbatore. Here, you can find two outlets of our spa. It's a place to take a break and get your hair or skin care. Put your feet up at the spa and let the professionals care for your beauty needs.Our services and the tranquil atmosphere of our spa will entice you to return the next time you are in RS Puram.
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                Explore the excellent massage centre in Coimbatore for a beauty and wellness treatment with an expert team. We are recognized in Coimbatore for the various styles of massages that attract customers for multiple reasons. Our dedicated team is trained with traditional and modern techniques to provide the best services at <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Body Massage Spa in Coimbatore</Link>.
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
                  rotateY: -15,
                  rotateX: 10,
                  scale: 1.05
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-l from-green-400 to-green-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                <div className="relative z-10 bg-white rounded-3xl p-2 shadow-2xl">
                  <CustomImage
                    src={coimbatoreImages.coupleMassage.src}
                    alt={coimbatoreImages.coupleMassage.alt}
                    width={637}
                    height={425}
                    className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 637px"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* Male to Male Massage Section */}
          <motion.section
            className="relative rounded-3xl p-12 text-center mb-20"
            style={{
              background: 'linear-gradient(135deg, rgba(255,107,53,0.1), rgba(247,147,30,0.1))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h4
              className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-6"
              {...fadeUp}
            >
              Male to Male Massage Coimbatore: Soothing the Mind, Revitalizing the Body
            </motion.h4>
            <motion.p
              className="text-[#3E3636]/90 text-lg leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              River Salon and Day Spa Coimbatore provide stress-relieving treatments with affordable budget massage packages and salon services.
            </motion.p>
          </motion.section>

          {/* Services List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {servicesList.map((service, index) => (
              <ServiceListCard key={index} service={service} index={index} />
            ))}
          </div>

           <section className="mb-20">
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

          {/* Location Section */}
          <motion.section
            className="relative rounded-3xl p-12 mb-16"
            style={{
              background: 'linear-gradient(135deg, rgba(255,107,53,0.1), rgba(247,147,30,0.1))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-8 text-center"
              {...fadeUp}
            >
              We Are Located At
            </motion.p>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="hidden lg:block absolute inset-y-0 left-1/2 w-px bg-gray-200" />

              {/* Location 1 - R.S. Puram */}
              <motion.div
                className="space-y-6 rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <iframe
                  title="Google Map - R.S. Puram"
                  className="w-full h-[300px] rounded-2xl"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40102.531059952744!2d76.960757!3d11.006919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8594b5f5f7615%3A0xf39c3dd850ba6456!2sRiver%20Day%20Spa!5e1!3m2!1sen!2sin!4v1741690760433!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="space-y-4">
                  <p className="text-2xl font-semibold text-[#8D7B68] mb-4">R.S. Puram</p>
                  <Link href="https://www.google.com/maps/place/River+Day+Spa/@11.006919,76.960757,26044m/data=!3m1!1e3!4m6!3m5!1s0x3ba8594b5f5f7615:0xf39c3dd850ba6456!8m2!3d11.0069189!4d76.9607574!16s%2Fg%2F11j3xlpn41?hl=en&entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D">
                    <p className="flex items-start hover:text-green-600 gap-2 text-[#3E3636]/90 transition-colors cursor-pointer text-sm leading-relaxed">
                      📍 Veera Towers, 2nd Floor, Dr Krishnasamy Mudaliyar Road, Puthiyavan Nagar, Sukrawar Pettai, R.S. Puram, Coimbatore, Tamil Nadu 641001. Next to Brookefields Mall
                    </p>
                  </Link>
                  <Link href="tel:+919962877703">
                    <p className="flex items-center hover:text-green-600 gap-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                      📞 +91 9962877703
                    </p>
                  </Link>
                  <Link href="tel:0422 298 7703">
                    <p className="flex items-center hover:text-green-600 gap-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                      ☎️ 0422 298 7703
                    </p>
                  </Link>
                  <Link href="mailto:info@riverdayspa.com">
                    <p className="flex items-center hover:text-green-600 gap-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                      ✉️ info@riverdayspa.com
                    </p>
                  </Link>
                </div>
              </motion.div>

              {/* Location 2 */}
              <motion.div
                className="space-y-6 rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <iframe
                  title="Google Map - Downtown Branch"
                  className="w-full h-[300px] rounded-2xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5538.659863268276!2d76.95389628563021!3d11.00678439899745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45afccdb865e8ae5%3A0x2f7d4832c724f4a0!2sRiver%20Salon%20and%20Day%20Spa!5e0!3m2!1sen!2sin!4v1742905332751!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="space-y-4">
                  <p className="text-2xl font-semibold text-[#8D7B68] mb-4">RS Puram(Elite)</p>
                  <Link href="https://www.google.com/maps">
                    <p className="flex items-start hover:text-green-600 gap-2 text-[#3E3636]/90 transition-colors cursor-pointer text-sm leading-relaxed">
                      📍 No 166, Old No. 9/24, 1st Floor, Vagtune Building, Ramachandra Rd, R.S. Puram, Coimbatore 641002
                    </p>
                  </Link>
                  <Link href="tel:+917305033023">
                    <p className="flex items-center hover:text-green-600 gap-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                      📞 +91 7305033023
                    </p>
                  </Link>
                  <Link href="tel:0422 243 3023">
                    <p className="flex items-center hover:text-green-600 gap-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                      ☎️ 0422 243 3023
                    </p>
                  </Link>
                  <Link href="mailto:rdsrspuramnew@gmail.com">
                    <p className="flex items-center hover:text-green-600 gap-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                      ✉️ rdsrspuramnew@gmail.com
                    </p>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            className="relative rounded-3xl p-12 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255,107,53,0.1), rgba(247,147,30,0.1))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-6"
              {...fadeUp}
            >
              Immerse Yourself in Pure Tranquility
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-lg leading-relaxed mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              It's now incredibly easy to book a spa in Coimbatore. Simply click the "Book Now" button and take advantage of Salon and Spa services at R S Puram Massage Centres.
            </motion.p>
            <Link href="tel:+919500029234 ">
              <motion.button
                className="px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-lg transition-all duration-300"
                style={{
                  background: 'linear-gradient(145deg, #10b981, #059669)',
                  boxShadow: '8px 8px 16px rgba(212,209,204,0.5), -8px -8px 16px rgba(255,255,255,0.5)'
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '12px 12px 24px rgba(212,209,204,0.6), -12px -12px 24px rgba(255,255,255,0.6)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Book Now
              </motion.button>
            </Link>
          </motion.section>
        </div>
      </div>
    </>
  )
}