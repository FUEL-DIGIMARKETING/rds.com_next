'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import AppLaunchBanner from './AppLaunchBanner'
import CustomImage from './CustomImage'
import { trichyImages } from '@/data/trichyImages'
import {
  FaSpa,
  FaHands,
  FaLeaf,
  FaGem,
  FaChevronLeft,
  FaChevronRight,
  FaUser,
  FaCut,
  FaHandHoldingWater
} from 'react-icons/fa'

const services = [
  {
    title: "Massages",
    description: "Our massages relieve tension and help you overcome anxiety because they promote blood circulation, which is a healthy way to deal with strain. Massages produce collagen, which is an anti-aging treatment.",
    icon: FaSpa
  },
  {
    title: "Saloon",
    description: "We offer a blissful escape to enhance your natural beauty. From expert hair styling and rejuvenating facials to precision grooming, our skilled professionals provide personalized experiences that leave you feeling pampered and refreshed.",
    icon: FaCut
  },
  {
    title: "Body Scrubs",
    description: "We offer body scrubs made from organic salt or coffee from nature gifts that help treat and exfoliate the skin— before? Together with them, the aromatic oil hydrates the skin, giving it a remarkable sheen.",
    icon: FaLeaf
  },
  {
    title: "Body Wrap",
    description: "However, we may be unaware that a fruit Wrap made from natural fruit improves skin tone, detoxification, and exfoliation, as well as acting as an anti-ageing measure.",
    icon: FaHandHoldingWater
  }
]

const testimonials = [
  { id: 1, name: "Sai Pawan", feedback: "Riverday spa is a place to go with modern and aesthetic surroundings I got my solution to many problems which I was going through. I usually went to them for haircuts however I had serious issues regarding the quality of my hair. They helped me to get rid of the problem with a hair spa and suggested a balanced diet to enrich its upkeep. I regularly visit them for a hair massage which has enriched my hair growth. The stylists are knowledgeable and understanding" },
  { id: 2, name: "Himani Ramachandran", feedback: "I visited them a while ago when I wanted to go for a pedicure and nail art. We were supposed to go to a party and we wanted to do some basic cleanup for the purpose. The beauticians were understanding and they saw to it that we both could take the session together. The nail art portfolio with them is great and if anyone is looking for these services, I will recommend them to come to this place." },
  { id: 3, name: "Dhruv Shashidharan", feedback: "I have always enjoyed myself whenever I visited their outlet near my home. Their massages and facials are just great experiences. I chose an aromatic oil that suited my skin and a massage suitable for my age. They use organic products so you can rest assured about their quality." },
  { id: 4, name: "Nandini Sharma", feedback: "My bridal package was something I was actually worried about. However, all my thoughts were put to rest when I went to Riverday spa. My special day was so beautiful absolutely like a dream sequence. I have never been happier. I was admired for my looks by all members of my family specially my better half loved the way I looked. Their packages are good value for money." },
  { id: 5, name: "Sheetal Godhra", feedback: "I have two grandchildren and I like to color my hair and get my hair styled. I go for massages regularly. People can hardly guess my age. When I tell them I have grandchildren they are surprised. Riverday spa helped me to locate my style I have my favorite hairdresser and she attends me regularly. You will feel truly at home being with them." }
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true }
}

const faqs = [
    { question: "Which oil is best for body massage as per Ayurveda?", answer: "Sesame oil is best in Ayurveda for body massage, promoting warmth and healing. Coconut and herbal oils also work well. Experience an authentic Ayurvedic massage at River Salon and Day Spa." },
    { question: "What are the 4 types of massage?", answer: "The four key massage types are Swedish, deep tissue, Ayurvedic, and Thai. Each targets different wellness needs. Explore all these treatments expertly at River Day Spa." },
    { question: "What happens in a Bali massage?", answer: "A Bali massage combines gentle stretching, acupressure, and aromatherapy to deeply relax muscles and restore energy flow. Discover similarly rejuvenating exotic treatments at River Day Spa." },
    { question: "What is a female-to-male spa?", answer: "Female-to-male spas provide their massage services through trained female therapists who deliver proper treatment. The River Day Spa provides visitors with a wellness experience that combines comfort and respect." },
  ]

export default function TrichyPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <>
      <div className="w-full overflow-x-hidden min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
        <AppLaunchBanner /> {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url('${trichyImages.hero.src}')` }}
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
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl italic"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Luxury Spa
            </motion.p>
            <motion.p
              className="text-xl md:text-5xl text-amber-100 font-bold drop-shadow-lg italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Treats
            </motion.p>
          </motion.div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Content Grid with Tilt Effect */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.h1
                className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
                {...fadeUp}
              >
                Massage Spa in Trichy - Revive your Body, Refresh your Soul

              </motion.h1>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Your body and psyche suffer from the everyday stress of work and personal life. Rejuvenating yourself with regular spa treatments is beneficial. We are well-known for the cutting-edge Vedic to Modern therapy treatment for approaching your health. Select from an array of custom-made, in-house massages and therapies or go for classic massages such as Swedish, Thai, Ayurvedic, or deep tissue. Recharge your senses and your body at <Link href="/best-body-massage-center" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Best Body Massage Spa in Trichy</Link>.
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our clients are satisfied with the best packages for therapy and salon treatments. You may effectively manage a full day of meetings by keeping your body functioning normally with the help of spa therapies from River Salon and Day Spa. We are situated in the exclusive area of Thillai Nagar, Trichy, and you can schedule appointments in advance for massage and stylists at any time.
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
                    src={trichyImages.baliMassage.src}
                    alt={trichyImages.baliMassage.alt}
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
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
                <motion.p
                  className="text-3xl font-bold text-[#8D7B68] mb-6"
                  {...fadeUp}
                >
                  Always Something New at the Best Massage Centres in Trichy
                </motion.p>
                <motion.p
                  className="text-[#3E3636]/90 text-base leading-relaxed mb-8 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Everyone values health and attractiveness. Our aromatic massage in Trichy sets us apart and makes us wellness-friendly. We are a Unisex salon with services for the entire family. Visit our beautiful spa to get treatment for all your aches and pains.
                </motion.p>
                <Link href="https://wa.me/919500029234">
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
              <motion.h2
                className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
                {...fadeUp}
              >
                Experience Professional Spa in Trichy Near You
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                When you are engaged in a busy lifestyle, you will notice that your health and appearance worsen daily as a result of the neglect of an over-demanding schedule. You must now command yourself to take a break, revitalize yourself, and search for the new you. Finding the best moments to regain your energy from the worsen and supply the high-level energy. <Link href="/swedish-massage-service-in-chennai" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon & Day Spa</Link> is one of the most well-known destinations in Trichy for external stimulation and services to rejuvenate the senses.We are located in Trichy Hotel Sona which can be reached out for various massage therapies and beauty services.
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
                    src={trichyImages.saltScrub.src}
                    alt={trichyImages.saltScrub.alt}
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Services Section */}
          <div className="text-center mb-16">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Embark on a Journey to the Massage Centre In Trichy
            </motion.h3>
            <motion.div
              className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-[#3E3636]/90 text-lg leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              River Salon & Day Spa offers one of the best massages in Trichy. People look forward to visiting the Trichy Spa Centre. We offer a variety of services, including massages that address a variety of illnesses and stress-related disorders. Our therapist is compassionate and attentive to your concerns before recommending solutions or therapies.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
                      className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl mb-6 bg-gradient-to-r from-green-400 to-teal-500 shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{
                        boxShadow: 'inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px rgba(255,255,255,0.8)'
                      }}
                    >
                      <service.icon className="text-white text-2xl" />
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

          {/* Testimonials Section */}
          <div className="text-center mb-12">
            <motion.p
              className="text-3xl font-bold text-[#8D7B68] mb-6"
              {...fadeUp}
            >
              Thousands Of Happy Clients
            </motion.p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
          </div>

          <div className="relative flex items-center justify-center mb-16">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 z-10 p-3 rounded-full shadow-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg, #d9f0d8b9, #f0f4e366)',
                boxShadow: '8px 8px 16px #dff6e5ff, -8px -8px 16px #ffffff'
              }}
            >
              <FaChevronLeft className="w-6 h-6 text-[#8D7B68]" />
            </button>

            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-16 p-8 rounded-2xl text-center"
              style={{
                background: 'linear-gradient(145deg, #ffffffff, #e7f6eeff)',
                boxShadow: '15px 15px 30px #d1dcd4, -15px -15px 30px #ffffff'
              }}
            >
              <div
                className="w-16 h-16 mx-auto rounded-full mb-4 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(145deg, #10b981, #059669)'
                }}
              >
                <FaUser className="w-8 h-8 text-white" />
              </div>
              <p className="text-[#3E3636]/80 italic mb-4">"{testimonials[currentIndex].feedback}"</p>
              <p className="text-green-600 font-semibold">- {testimonials[currentIndex].name}</p>
            </motion.div>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 z-10 p-3 rounded-full shadow-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg, #d9f0d8b9, #f0f4e366)',
                boxShadow: '8px 8px 16px #dff6e5ff, -8px -8px 16px #ffffff'
              }}
            >
              <FaChevronRight className="w-6 h-6 text-[#8D7B68]" />
            </button>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl font-semibold text-[#8D7B68] mb-4">Address</p>
                <Link href="https://www.google.com/maps?ll=10.827088,78.683746&z=14&t=h&hl=en&gl=IN&mapclient=embed&cid=10503973917353032329">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    📍 No.75/E, Hotel Sona's First Floor, Salai Rd, Thillai Nagar, Tiruchirappalli, Tamil Nadu 620018
                  </p>
                </Link>
                <Link href="tel:+919500197780">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    📞 +91 9500197780
                  </p>
                </Link>
                <Link href="tel:0431-4972085">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    📞 0431-4972085
                  </p>
                </Link>
                <Link href="mailto:rdspatrichy2021@gmail.com">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    ✉️ rdspatrichy2021@gmail.com
                  </p>
                </Link>
              </motion.div>

              <motion.div
                className="rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <iframe
                  title="Google Map"
                  className="w-full h-[300px] rounded-2xl"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10031.703859272828!2d78.68374600000001!3d10.827088!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5f2f2c7a93b%3A0x91c59ca019cbba89!2sRIVER%20DAY%20SPA!5e1!3m2!1sen!2sin!4v1741693409455!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>
          </motion.section>
        </div>
        {/* Glassmorphism CTA Section */}
        <section
          className="relative w-full py-16 select-text bg-cover bg-center "
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
              <motion.p
                className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-white mb-6 select-text"
                {...fadeUp}
              >
                One-Stop Relaxation Destination Now Near You
              </motion.p>
              <motion.p
                className="text-white/90 text-lg leading-relaxed mb-8 max-w-4xl mx-auto text-center select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                River Salon and Day Spa is the best massage spa centre in Trichy. We are your new one-stop spa for sleep restoration and stress relief. We resolve your worries in due massage. A good massage is an excellent way to induce natural sleep and relax the nerves. A regular massage will keep you healthy and fit if you work in a stressful environment.Your worries destroy precedence and provide you with relaxation. Even though you can't alter the nature of your work, you can improve your fit by taking advantage of River Salon and Day Spa's massages and other services to help you get in health.
              </motion.p>
              <Link href="tel:+919500197780">
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
        {/* Location Section */}
      </div>
    </>
  )
}