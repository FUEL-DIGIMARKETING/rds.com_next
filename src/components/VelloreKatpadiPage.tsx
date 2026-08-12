'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import CustomImage from './CustomImage'
import { velloreKatpadiImages } from '@/data/velloreKatpadiImages'
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
import AppLaunchBanner from './AppLaunchBanner'


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

export default function VelloreKatpadiPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <>


      <div className="w-full overflow-x-hidden min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
        <AppLaunchBanner />  {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url('${velloreKatpadiImages.hero.src}')` }}
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
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-2xl italic"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Unlock The Power Of Relaxation
            </motion.p>
            <motion.p
              className="text-xl md:text-4xl text-amber-100 font-bold drop-shadow-lg italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              With Skilled Massage Therapy
            </motion.p>
          </motion.div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Introduction Section */}
          <motion.div className="text-center mb-16" {...fadeUp}>
            <h1 className="text-3xl md:text-5xl font-bold text-[#8D7B68] mb-6">
              Best Body Massage Spa in Katpadi - Serenity starts here
            </h1>
            <motion.div
              className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <p className="text-xl lg:text-2xl text-[#8D7B68] mb-4 italic">
              Indulge in Blissful Serenity at the Heart of Vellore
            </p>
            <p className="text-[#3E3636]/90 text-lg leading-relaxed max-w-4xl mx-auto">
              Welcome to this peaceful sanctuary nestled away in the centre of Vellore, where stress melts out under the sun like morning dew. Unveiling the extraordinary escape from <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Spa in Vellore</Link>, where serenity meets sophistication.
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
              <motion.h2
                className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
                {...fadeUp}
              >
                Massage Centre in Vellore Presenting the Relaxation
              </motion.h2>
              <motion.p
                className="text-base text-justify italic text-green-600 leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Unlocking the Gateway to Relaxation
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
              >
                The world outside fades away as you enter this haven of peace. The Best Spa in Vellore invites you to embark on a journey of rejuvenation, leaving the chaos behind. Allow the whispers of tranquillity to guide you through an experience unlike any other.
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                Welcome to a haven of tranquillity in the Vellore - where pampering meets poetry, and beauty intertwines with bliss. <Link href="/book-spa-service-appointment" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Our Spa and Salon in Vellore</Link> is a sanctuary for those seeking a break from the demands of everyday life. Step into a world where the aromatic symphony of essential oils greets you, and the gentle hum of relaxation envelops your senses.
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
                    src={velloreKatpadiImages.bodyMassage.src}
                    alt={velloreKatpadiImages.bodyMassage.alt}
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                    priority
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
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-l from-green-400 to-green-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                <div className="relative z-10 bg-white rounded-3xl p-2 shadow-2xl">
                  <CustomImage
                    src={velloreKatpadiImages.massageCentre.src}
                    alt={velloreKatpadiImages.massageCentre.alt}
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                    priority
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
                Discover the Essence of Serenity River Salon and Day Spa
              </motion.h3>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Massage in Vellore beckons you to embark on a journey of rejuvenation and renewal. From the moment you enter, the ambient lighting, soothing music, and fragrant aromas set the stage for a transformative experience. Let the world outside fade away as our skilled therapists transport you to a realm of serenity.
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                Indulge in a different treatment to relieve stress, soothe tired muscles, and improve overall well-being. From invigorating massages to luxurious facials that revive and illuminate, each service is a poem written to nourish both the body and the soul.
              </motion.p>
            </motion.div>
          </div>

          {/* Third Content Section */}
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
                Beauty Salon in Vellore: Where Elegance Meets Artistry
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Step into our Salon in Vellore, where beauty is not just a pursuit but an art form. Our expert stylists are craftsmen and women sculpting hair and enhancing features with precision and passion. Whether you crave a bold transformation or a subtle refinement, our salon is your canvas, and your beauty is your masterpiece.
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Experience the latest trends in hairstyling, personalized to suit your unique personality and lifestyle. Trendy cuts that reflect modern sophistication to vibrant colours that express your individuality. Our salon is a stage where your beauty takes the centre spotlight. </motion.p>
              <motion.h3
                className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4"
                {...fadeUp}
              >
                Holistic Harmony Station
              </motion.h3>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                At our <Link href="/massage-spa-in-vellore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Best Spa in Vellore</Link>, we believe in the holistic approach to beauty and wellness. Our services are not merely transactions; they are rituals of self-care that honour the mind, body, and spirit. Immerse yourself in the therapeutic powers of our spa treatments and emerge refreshed, renewed, and radiant.
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our salon offerings extend beyond hairstyling to encompass a range of beauty services that enhance your natural allure. From meticulous manicures and pedicures to expertly applied bridal makeup that highlights your features. Reach the Best Spa Centre in Katpadi.</motion.p>
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
                    src={velloreKatpadiImages.deepTissue.src}
                    alt={velloreKatpadiImages.deepTissue.alt}
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
                <motion.p
                  className="text-3xl font-bold text-[#8D7B68] mb-6"
                  {...fadeUp}
                >
                  Tailored Treatments for Every Skin
                </motion.p>
                <motion.p
                  className="text-[#3E3636]/90 text-base leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  We recognize that every guest is unique and that their needs also vary. Our Body Scurb Massage in Vellore offers a personalized approach to pampering your skin. Consult with our experienced therapists to create a bespoke experience for your skin glowing and anti-ageing treatment. We cater to your specific preferences and concerns.
                </motion.p>
                <Link href="https://wa.me/919840898481">
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
                  The Art of Pampering Now in Vellore
                </motion.p>
                <motion.p
                  className="text-[#3E3636]/90 text-base leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  We offer<Link href="/best-body-wrap-massage-spa" className="text-green-600 font-semibold hover:text-green-500 transition-colors"> Body Wrap Massage in Vellore </Link>  to engage all your senses in a harmonious symphony of nature treatment. We are using the fragrant aroma of essential oils with coffee, chocolate, mango, papaya, and raspberry. It will protect your anti-ageing and skin tone and make it soft and glow. Our goal is to ensure that every visit leaves you feeling pampered and profoundly restored.  </motion.p>
                <Link href="https://wa.me/919840898481">
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
          {/* Final Section */}
          <motion.section
            className="relative rounded-3xl p-12 text-center mb-16"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1))',
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
              Elevate Your Relaxation Now in Vellore's Spa Sanctuary
            </motion.h4>
            <motion.p
              className="text-[#3E3636]/90 text-lg leading-relaxed mb-8 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Whether you seek relaxation, rejuvenation, or a bold beauty transformation, we have the expertise and passion to bring your desires to life. Each treatment is a masterpiece, meticulously crafted to leave you deeply gratified. Whether you visit us for a spa retreat, a salon makeover, or a combination of both, you are in for an experience that transcends the ordinary. Let our skilled practitioners be your guides on a journey of self-discovery and renewal. Pampering is an art form, and our Vellore Spa and Salon allow you to see skilled hands work their magic to reduce stress and make your day with strokes of relaxation, beauty, and indulgence.
            </motion.p>
          </motion.section>

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
                <Link href="https://www.google.com/maps/place/River+Salon+and+Day+Spa/@12.969309,79.151198,25855m/data=!3m1!1e3!4m6!3m5!1s0x3bad474a97587f29:0xe0892d9d977f9fc5!8m2!3d12.9698782!4d79.1511985!16s%2Fg%2F11sn6pd86y?hl=en&entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    📍 Plot. No 109 Selvam Nagar, Thiruvallam road, near VIT College, katpadi, Vellore 632007.
                  </p>
                </Link>
                <Link href="tel:+919840898481">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    📞 +91 9840898481
                  </p>
                </Link>
                <Link href="tel:0416-2999867">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    ☎️ 0416-2999867
                  </p>
                </Link>
                <Link href="mailto:riverdayspavellore@gmail.com">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    ✉️ riverdayspavellore@gmail.com
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
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59778.474260868075!2d79.151198!3d12.969878000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad474a97587f29%3A0xe0892d9d977f9fc5!2sRiver%20Salon%20and%20Day%20Spa!5e1!3m2!1sen!2sin!4v1742195694204!5m2!1sen!2sin"
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