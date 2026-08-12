'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import CustomImage from './CustomImage'
import AppLaunchBanner from './AppLaunchBanner'
import { chennaiEgmoreImages } from '@/data/chennaiEgmoreImages'
import {
  FaSpa,
  FaHands,
  FaLeaf,
  FaGem,
  FaChevronLeft,
  FaChevronRight,
  FaUser
} from 'react-icons/fa'

const services = [
  { icon: FaSpa, title: "Spa & Wellness" },
  { icon: FaHands, title: "Therapeutic Massage" },
  { icon: FaLeaf, title: "Organic Treatments" },
  { icon: FaGem, title: "Luxury Beauty Care" }
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
    { question: "How much do you need for a 60-minute massage?", answer: "River Day Spa offers flexible massage packages tailored to your needs. Contact their friendly front desk team directly to get the best session duration and pricing details." },
    { question: "How do I ask for a message service in a spa?", answer: "Simply inform the front desk or therapist before your session begins. River Day Spa staff warmly customize treatments to suit your personal health and wellness needs." },
    { question: "What is the best time of day for a massage?", answer: "The best time for a massage depends on your goal. If your goal is to have increased energy and flexibility, the morning is the best time. If your goal is daily stress relief and better sleep quality, the best time is in the evenings." },
    { question: "What should you avoid after a massage?", answer: "Avoid strenuous activity, alcohol, and heavy meals after a massage. The most effective time for receiving a massage treatment occurs between 10 a.m. and 11 a.m. For expert aftercare advice, visit River Salon and Day Spa." },
  ]

export default function ChennaiEgmorePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <div className="w-full overflow-x-hidden min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
        <AppLaunchBanner />  {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url('/images/locations/chennai-body-massage-centre.webp')` }}
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
              Beat Your Pain With
            </motion.p>
            <motion.p
              className="text-xl md:text-3xl text-amber-100 font-light drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Qualified Hands
            </motion.p>
          </motion.div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Introduction Section */}
          <motion.div className="text-center mb-16" {...fadeUp}>
            <h1 className="text-3xl md:text-5xl font-bold text-[#8D7B68] mb-6">
              Body Massage in Chennai Egmore - Your Oasis of Calm
            </h1>
            <motion.div
              className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
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
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our services exceed the expectations of a customer in each service we provide. We become the melting pot for every kind of Ayurvedic treatment and massage. The massage therapists and healers at the spa and salon have adequate years of expertise in giving completely different massages to people visiting us.
              </motion.p>

              <motion.h2
                className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
                {...fadeUp}
              >
                Get the Supported Massage Treatment at Massage Centre in Chennai
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                Start with ayurvedic oils and other unique massages offered in River Salon and Day Spa. We tend to free your body from quiet pain and ailments or relieve stress accumulated by work, anxiety, or muscular pain. Egmore is full of trade and transport sector, with offices in the urban centre of Chennai. In the busy, hustling, and active town, you need the best relaxation to move forward in daily activities. River Salon and Day Spa is the <Link href="/best-body-massage-center" className="text-green-600 font-semibold hover:text-green-500 transition-colors">best body massage chennai</Link>.
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
                    src={chennaiEgmoreImages.headMassage.src}
                    alt={chennaiEgmoreImages.headMassage.alt}
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Second Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image First */}
            <motion.div
              className="relative w-full flex justify-center order-2 lg:order-1"
              initial={{ opacity: 0, x: -60 }}
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
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-l from-green-400 to-emerald-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                <div className="relative z-10 bg-white rounded-3xl p-2 shadow-2xl">
                  <CustomImage
                    src={chennaiEgmoreImages.coupleSpa.src}
                    alt={chennaiEgmoreImages.coupleSpa.alt}
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6 order-1 lg:order-2"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
                {...fadeUp}
              >
                Couples Wellness Retreat: Immerse in the Ultimate Massage Harmony
              </motion.h3>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                We strive to improve your experience through the services provided by our experts, offering our customers a pleasant environment in which they recognize that our services are pleasing to their senses. Our client service and individual attention to each customer are unparalleled. Leave your worries away and allow our team of experts to focus on your massage relaxation.
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our place could be a haven of relaxation within the tranquillity of our Best spa at Egmore. As the healer kneads your muscles and the nerves receive the necessary pull, your muscles relax, and the stress appears to leave your body. Sometimes, we cannot spend time with our partners because of our constant work and busy schedules. You can choose our couples massage services and spend time with your partner.It is the best spot for getting relaxation with your loved one. Here, you will share an identical space with your partner, and two therapists will provide massage services to the couple.
              </motion.p>
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
                <motion.h3
                  className="text-3xl font-bold text-[#8D7B68] mb-6"
                  {...fadeUp}
                >
                  Your Pathway to Pampering Your Skin, Now in Chennai
                </motion.h3>
                <motion.p
                  className="text-[#3E3636]/90 text-base leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Our Spa Massage and treatments allow your skin to exfoliate and shine with health. You, too, will be surprised at how soft your skin feels after the treatment. We use organic merchandise unique to our spa in the Body Scrub and Body Wrap treatments to supply the required vitamins to the skin that refill and nourish the skin back to life, and the skin is deeply hydrated with the massage and different treatments. Step into Our Best Spa at Egmore for your preferred body scrub and body wrap treatment at River Salon and Day Spa.
                </motion.p>
                <motion.p
                  className="text-[#3E3636]/90 text-base leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  As the therapist manipulates your body with her fingers, you can feel the magic happen. You are finding those hurting nerves that cause you to have a sleep, or that limit your range of motion. Your body's feel-free and flexibility are redefined with our assistance. You'll receive fresh benefits from each service, making you return to us repeatedly.
                </motion.p>
                <Link href="tel:+919840898462">
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
                    📞 Book An Appointment
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Services Section */}
          <div className="text-center mb-16">
            <motion.h4
              className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Experience Your Best Beauty Care Treatment at Our Top Beauty Salon In Egmore
            </motion.h4>
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
              Our top professionals in the field have trained beauticians. You can receive services from our hair salon and spa that will significantly improve your appearance and confidence. The range of products we utilize is optimal and naturally organic. With our styling and care, you can become the best version of yourself.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div
                  className="p-6 rounded-2xl text-center space-y-4 transition-all duration-300"
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
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <p className="text-sm font-semibold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </p>
                </div>
              </motion.div>
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
              background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(5,150,105,0.1))',
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

                <Link href="https://www.google.com/maps/place/River+Group+Of+Salon+And+Spa/@13.074742,80.257836,1615m/data=!3m1!1e3!4m6!3m5!1s0x3a52660c5c545527:0xe95070688b879bb2!8m2!3d13.0747422!4d80.2578355!16s%2Fg%2F12q4yqbz_?hl=en&entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    📍 New No.7A, Old No 2/4 1st Floor, Tamil Salai, Egmore, Chennai, Tamil Nadu 600008
                  </p>
                </Link>
                <Link href="tel:+919840898462">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    📞 +91 9840898462
                  </p>
                </Link>
                <Link href="tel:044-45558556">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    ☎️ 044-45558556
                  </p>
                </Link>
                <Link href="mailto:riverdayspa@gmail.com">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    ✉️ riverdayspa@gmail.com
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3854233101483!2d80.2578355!3d13.0747422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52660c5c545527%3A0xe95070688b879bb2!2sRiver%20Group%20Of%20Salon%20And%20Spa!5e0!3m2!1sen!2sin!4v1742897570580!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>
          </motion.section>

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
              <h3 className="text-green-600 font-semibold">- {testimonials[currentIndex].name}</h3>
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
        </div>
      </div>
    </>
  )
}