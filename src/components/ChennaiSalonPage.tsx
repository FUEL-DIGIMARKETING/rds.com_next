'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { FaSpa, FaHands, FaLeaf } from 'react-icons/fa'
import CustomImage from './CustomImage'
import { chennaiSalonImages } from '../data/chennaiSalonImages'
import AppLaunchBanner from './AppLaunchBanner'
const services = [
  {
    title: "My Nail Art My Passion",
    description: "A professional salon will possess a beautician who knows all about nail art. Nail art is a growing passion between adults and young children.Nail art basically keep the hygiene of your nails at its best. People in and around you look at your nails when it is artistically done. Our services at Riverday spa in Egmore include polish change, paraffin wax, gel polish and nail art. We beautify your nails to display it to the world.",
    icon: FaSpa
  },
  {
    title: "Bridal Makeup for Your Special Day",
    description: "Riverday spa walk you through the tradition of dressing up as a bride. We start by giving your skin and hair the glow which it has been looking for.  We dress you up from head to toe to look yourour premier salon services, best on your special day. As you walk into the venue you steal the show with your looks and your charm. We offer you packages to suit your budget.Our beauticians are trained by the best in the industry to lace you with the charm and beauty for all occasions. ",
    icon: FaHands
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
}

export default function ChennaiSalonPage() {
  useEffect(() => {
    // Floating particles animation
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: linear-gradient(45deg, #10b981, #059669);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        animation: float 6s linear infinite;
        left: ${Math.random() * 100}vw;
        animation-delay: ${Math.random() * 6}s;
      `
      document.body.appendChild(particle)

      setTimeout(() => {
        particle.remove()
      }, 6000)
    }

    const particleInterval = setInterval(createParticle, 300)

    // Add CSS for particle animation
    const style = document.createElement('style')
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
      }
    `
    document.head.appendChild(style)

    return () => {
      clearInterval(particleInterval)
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
      <AppLaunchBanner />{/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <CustomImage
            src={chennaiSalonImages.heroImage.src}
            alt={chennaiSalonImages.heroImage.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Salon Chennai
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Egmore
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4"
            {...fadeUp}
          >
            Best Beauty Salon in Chennai - Luxury Beauty, Exclusive You!

          </motion.h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full" />
        </div>

        {/* First Content Section */}
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
              Our place is like an oasis that is calm and quiet. As you enter our place you can feel the serene surroundings calming down your nerves and the exotic setting of our interiors will hold your attention. The aroma of the scented candles and the oil will soothe your senses and the attention given to you by our team will make you feel special.
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              Hair is an important part of appearance. We all know a well-kept hair enhances the persona of an individual. It gives the appearance a new meaning.The world judges you by the way you look. A well-groomed appearance is something people look for while employing anyone. As people appraise a person head to toe an unkept hair definitely spoils a person's impression. At <Link href="https://www.riverdayspa.in/best-beauty-salon-in-chennai/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River salon and day spa in egmore</Link>, we not only help you to take care of your hair we also help you with the latest style which will suit your face cut and personality.
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
                  src={chennaiSalonImages.contentImages.hairCutSalon.src}
                  alt={chennaiSalonImages.contentImages.hairCutSalon.alt}
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Center Text */}
        <div className="text-center mb-16">
          <motion.p
            className="text-[#3E3636]/90 text-lg leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <strong>River salon and day spa</strong> Stylist at Egmore has a competent team of Stylist and beauticians who help you with nail art, facials, and make-up for any occasion. We offer different kinds of packages for different special and social occasions.You just need to call us and come to us and the rest will be taken care of by our team of professionals who master the art of recreating beauty and style.
          </motion.p>
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
              <motion.h2
                className="text-3xl font-bold text-[#8D7B68] mb-6"
                {...fadeUp}
              >
                Best Hair Saloon in Chennai
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Fix your appointment with our beauticians for the latest hairdo or a hair spa treatment. Do you love Nail art? We have some of the best people who can showcase to you some of the best nail artwork from which you can make your pick.If you have been bustling around the city, relentlessly come and relax at our spa make yourself look fresh and young with our care.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                className="p-8 rounded-2xl text-center space-y-4 transition-all duration-300 h-full"
                style={{
                  background: 'linear-gradient(145deg, #ffffff2e, #eaeaea19)',
                  boxShadow: '15px 15px 30px #d1dcd4, -15px -15px 30px #ffffff'
                }}
              >
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: 'linear-gradient(145deg, #10b981, #059669)',
                    boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.1), inset -3px -3px 6px rgba(255,255,255,0.8)'
                  }}
                >
                  <service.icon className="text-white text-2xl" />
                </div>
                <p className="text-xl font-semibold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300 mb-4">
                  {service.title}
                </p>
                <p className="text-[#3E3636]/90 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location Section */}
        <motion.section
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.p
              className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              We Are Located At
            </motion.p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Address Card */}
            <motion.div
              className="p-8 rounded-2xl text-center space-y-4"
              style={{
                background: 'linear-gradient(135deg, rgba(255,107,53,0.1), rgba(247,147,30,0.1))',
                boxShadow: '15px 15px 30px #d4d1cc, -15px -15px 30px #ffffff'
              }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl font-bold text-[#8D7B68] mb-4">Egmore</p>
              <Link href="https://www.google.com/maps?ll=13.074742,80.257836&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=16812061003293891506">
                <p className="hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                  📍 New No.7A, Old No 2/4 1st Floor, Tamil Salai, Egmore, Chennai, Tamil Nadu 600008
                </p>
              </Link>
              <div className="space-y-2">
                <a href="tel:+919840898462" className="block text-green-600 hover:text-green-500 font-semibold transition-colors">
                  📞 +91 9840898462
                </a>
                <a href="tel:044-45558556" className="block text-green-600 hover:text-green-500 font-semibold transition-colors">
                  📞 044-45558556
                </a>
                <a href="mailto:riverdayspa@gmail.com" className="block text-green-600 hover:text-green-500 font-semibold transition-colors">
                  ✉️ riverdayspa@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3854233101483!2d80.2578355!3d13.0747422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52660c5c545527%3A0xe95070688b879bb2!2sRiver%20Group%20Of%20Salon%20And%20Spa!5e0!3m2!1sen!2sin!4v1742897570580!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        </motion.section>
      </div >
    </div >
  )
}