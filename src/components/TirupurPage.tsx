'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import CustomImage from './CustomImage'
import { tirupurImages } from '@/data/tirupurImages'
import {
  FaSpa,
  FaHands,
  FaLeaf,
  FaGem,
  FaCut,
  FaHandHoldingWater
} from 'react-icons/fa'
import AppLaunchBanner from './AppLaunchBanner'


const services = [
  {
    title: "Massages",
    description: "Our Massage Centre in Tirupur offers relief from a wide range of issues. Massages relieve tense muscles, control blood pressure, and improve blood flow throughout the body, all of which reduce anxiety in people's activities.",
    icon: FaSpa
  },
  {
    title: "Saloon",
    description: "Our spa centre is the place where you meet the sophistication of serenity. Elevate your beauty routine with our premier salon services, curated to pamper and enhance your natural radiance.Experience the ideal of relaxation and style as our expert team transforms your visit into a blissful escape.",
    icon: FaCut
  },
  {
    title: "Body Scrubs",
    description: "We grind the most abundant gifts from nature that occur naturally to give an exfoliating scrub, such as sugar, salt, ground coffee, lemongrass, etc. They are combined with aromatic organic oil to cleanse and hydrate the skin.",
    icon: FaLeaf
  },
  {
    title: "Body Wrap",
    description: "Mineral and fruit-pulp-based wraps are very beneficial to the body and skin. A body wrap detoxifies and naturally hydrates the body, which is helpful for anti-ageing.",
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
    { question: "What to do immediately after a massage?", answer: "Drink plenty of water, rest, and avoid strenuous activity immediately after a massage. Let your body absorb the full benefits. Plan your next session at River Salon and Day Spa." },
    { question: "Which type of spa massage is best?", answer: "Deep tissue massage is best for pain relief, Swedish for relaxation, and Ayurvedic for holistic wellness. Find your perfect treatment at River Salon and Day Spa." },
    { question: "What are the side effects of Ayurvedic massage?", answer: "Ayurvedic massage may cause temporary fatigue, skin sensitivity, or mild soreness. These effects fade quickly. Experience safe, professional Ayurvedic treatments with expert therapists at Tiruppur locations." },
    { question: "Can reflexology help diabetic neuropathy?", answer: "Reflexology may help reduce pain, improve circulation, and ease nerve discomfort in diabetic neuropathy. Consult your doctor first, then explore foot reflexology now in our Tiruppur locations." },
  ]

export default function TirupurPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <div className="w-full overflow-x-hidden min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
        <AppLaunchBanner />    {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url('${tirupurImages.hero.src}')` }}
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
              Your Oasis Of
            </motion.p>
            <motion.p
              className="text-xl md:text-5xl text-amber-100 font-bold drop-shadow-lg italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Calm Awaits
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
                Massage Spa in Tirupur - Detox. De-stress. Delight

              </motion.h1>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                As portrayed in the Vedas or ancient scriptures, our dedication to providing people with natural, age-old methods of service since the year 2000. Our <Link href="/best-body-massage-center" className="text-green-600 font-semibold hover:text-green-500 transition-colors">massage service</Link> offers solutions to long-standing issues with sore muscles and stretched nerves. We opened our first branch in Chennai, and from there, we expanded to several other major cities.
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our therapists are from top institutes, they offer guidance and will suggest the list of services you may personally select. You can come to us knowing that you will get the relaxation you seek and the solution presented for your consideration. We are located by the River Noyyal, where you can leave your worries behind and relax in our care.
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
                    src="/images/luxury-spa-in-tirupur.jpeg"
                    alt={tirupurImages.luxurySpa.alt}
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
                  Elevate Your Wellness with Our Massage for Men at Tirupur
                </motion.p>
                <motion.p
                  className="text-[#3E3636]/90 text-base leading-relaxed mb-8 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Give farewell to the aches and pains in your body that have been depressing you and keeping you from enjoying and living a regular life. Our treatments are created from ancient texts that provide you with pain alleviation naturally and without the use of chemicals. Utilize our offerings at the Spa in Tirupur.
                </motion.p>
                <Link href="tel:+919500029234">
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
                Revitalize Your Body and Mind - Male Massage Center in Tirupur
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Give in and utilize all the massage services you believe your body has been requesting when you take a break from your daily routine. You may have been neglecting to give your body what it needs for a while. With the help of our detoxification through our <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">massages and spa services</Link>, which aid in internal cleansing and healing, we not only provide much-needed relief to your soul but also work on the external aspects of your skin and hair. With the help of aromatic oils and deep tissue massage, we give your skin a wake-up call by helping it with the painful nerve ends that have been demanding professional attention and scrubbing. You will find a wide range of services at River Salon and Day Spa at Tirupur that will satisfy your needs for wellness and beauty. With the help of our massages, facial treatments, and hair spa, stay young and vibrant.
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
                    src={tirupurImages.bestMassage.src}
                    alt={tirupurImages.bestMassage.alt}
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
              className="text-2xl md:text-3xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Escape To A Haven Of Calm With Our Therapeutic Massages At Tirupur
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
              River Salon and Day Spa assist every client per their suggestion for the strain problem. Every one of our guests receives very kind treatment. We pay close attention to your discomfort and work with you to find a healing solution for your mind, body and soul.To satisfy the particular demands chosen, we tailor our care. As a result, the massage therapist's attention will be the trigger points on your body and attempt to create a massage that eases your discomfort. We offer multiple packages and types of massages, body scrubs, and wraps.
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

          {/* Final CTA Section */}
          <motion.section
            className="relative rounded-3xl p-12 text-center mb-16"
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
              className="text-xl md:text-2xl font-bold text-[#8D7B68] mb-6"
              {...fadeUp}
            >
              Step Into A World Of Relaxation With Our Professional Massage In Tirupur
            </motion.h4>
            <motion.p
              className="text-[#3E3636]/90 text-base leading-relaxed mb-8 max-w-4xl mx-auto text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Owing to their extensive experience in their respective fields, our team of trainers, therapists, beauticians, and healers has elevated us in the service sector by developing cutting-edge approaches to patient care. Spa in Tirupur, our spa therapists and beauticians are certified by reputable organizations. Every client receives the necessary treatments and assistance from our team that they desire.
            </motion.p>
          </motion.section>

          <section className="mb-20">
            <div className="text-center mb-12"><motion.h5 className="text-xl sm:text-2xl font-extrabold text-[#8D7B68] mb-4" {...fadeUp}>Frequently Asked Questions</motion.h5></div>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl font-semibold text-[#8D7B68] mb-4">Address</p>
                <Link href="https://www.google.com/maps?ll=11.113041,77.340027&z=14&t=h&hl=en&gl=IN&mapclient=embed&cid=8076626991966999214">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    📍 16/16A Lakshmi Nagar, 50 Feet Road, PN Rd, near Miller Stop, Tirupur, Tamil Nadu 641601
                  </p>
                </Link>
                <Link href="tel:+919500136424">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    📞 +91 9500136424
                  </p>
                </Link>
                <Link href="tel:+919884333797">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    ☎️ +91 9884333797
                  </p>
                </Link>
                <Link href="mailto:riverdayspatirupur@gmail.com">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    ✉️ riverdayspatirupur@gmail.com
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
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10022.00374466602!2d77.340027!3d11.113041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907f59b7a8dc3%3A0x7015f175178652ae!2sRiver%20Day%20Spa%20-%20Massage%20in%20Tirupur!5e1!3m2!1sen!2sin!4v1741691803365!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>
          </motion.section>
        </div>


      </div>
    </>
  )
}