'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { FaCut, FaSprayCan, FaSpa, FaLeaf, FaPaintBrush, FaHandSparkles, FaPalette, FaFeather, FaTint } from 'react-icons/fa'
import { MdContentCut } from 'react-icons/md'
import CustomImage from './CustomImage'
import { tirupurSalonImages } from '../data/tirupurSalonImages'
import AppLaunchBanner from './AppLaunchBanner'
const services = [
  { title: "Haircuts and Styling", description: "Our hairstylists are experts in their field, whether you're looking for a stylish haircut, layered cut or a complete makeover.", icon: FaCut },
  { title: "Skincare Services", description: "We provide customised solutions for radiant skin, ranging from anti-ageing treatments to moisturising facials.", icon: FaSpa },
  { title: "Spa Services", description: "Unwind with our speciality massages and de-stressing, revitalising treatments.", icon: FaLeaf },
  { title: "Hair Treatments", description: "With our nourishing hair spas and keratin treatments, bid adieu to lifeless, drab hair.", icon: FaSprayCan },
  {
    title: "Makeup Services",
    description: (
      <>
        Our <a href="/beauty-salon-packages" className="text-green-600 font-semibold hover:text-green-500 transition-colors">makeup experts</a> may give you a spectacular makeover or a more laid-back style.
      </>
    ),
    icon: FaPaintBrush
  },


  { title: "Nail art and extensions", description: "Our skilled nail technicians can help you add an extra unique flair to your nails.", icon: FaHandSparkles },
  { title: "Hair Colouring", description: "Our stylists are skilled at achieving the ideal appearance, whether it's highlights or colouring.", icon: FaPalette },
  { title: "Waxing and Threading", description: "Riverdayspa offers delicate and accurate hair waxing treatments so you may get smooth, perfect skin.", icon: FaFeather }
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
}

export default function TirupurSalonPage() {
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
      <AppLaunchBanner />  {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <CustomImage
            src={tirupurSalonImages.heroImage.src}
            alt={tirupurSalonImages.heroImage.alt}
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
            Salon Tirupur
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional Beauty Salon
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
            Beauty Parlour in Tirupur: Our Premium Services as You Need

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
              Welcome to <Link href="https://www.riverdayspa.in/best-salon-in-tirupur-destination-for-style-and-elegance/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon and Day Spa</Link>, Tirupur's best place for rest, renewal, and an artistic makeover. We are here to turn your beauty dreams into reality, whether looking for a trendy haircut, a wonderful salon day, or specialised bridal treatments.River Salon and Day Spa, skill and beauty meet, and each customer receives unmatched care and attention.
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              With years of expertise offering high-end grooming and beauty services, we have established ourselves as a reliable brand in Tirupur. Our team of exceptionally talented experts aims to create the finest version of you.Enter our calm, chic space and leave with an air of assurance.
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
                  src={tirupurSalonImages.contentImages.famousSalon.src}
                  alt={tirupurSalonImages.contentImages.famousSalon.alt}
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
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4"
            {...fadeUp}
          >
            Tirupur Beauty Parlour: Explore the Craft of Expert Luxurious Treatment
          </motion.h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
          <motion.p
            className="text-[#3E3636]/90 text-lg leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why pick River Salon and Day Spa as your preferred Tirupur salon? Our services combine craftsmanship and contemporary methods, with your comfort and happiness as our top priorities.
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
                className="p-6 rounded-2xl text-center space-y-4 transition-all duration-300 h-full"
                style={{
                  background: 'linear-gradient(145deg, #ffffff2e, #eaeaea19)',
                  boxShadow: '15px 15px 30px #d1dcd4, -15px -15px 30px #ffffff'
                }}
              >
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-lg mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: 'linear-gradient(145deg, #10b981, #059669)',
                    boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.1), inset -3px -3px 6px rgba(255,255,255,0.8)'
                  }}
                >
                  <service.icon className="text-white text-2xl" />
                </div>
                <p className="text-sm font-semibold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </p>
                <p className="text-[#3E3636]/90 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="text-[#3E3636]/90 text-lg leading-relaxed max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We at River Salon and Day Spa utilise premium, skin-friendly, and safe products. Our goal is to make each visit unforgettable and leave you feeling rejuvenated and self-assured.    </motion.p>
        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4"
            {...fadeUp}
          >
            River Salon and Day Spa: Why Choose it?
          </motion.h3>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
          <motion.p
            className="text-[#3E3636]/90 text-lg leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Because we're reinventing the salon experience! You will notice the change the moment you enter.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            "Professional Therapists and Hairdressers",
            "High-quality products",
            "Custom Packages for all treatments",
            "Ambience of Relaxation"
          ].map((feature, index) => (
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
                  className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: 'linear-gradient(145deg, #10b981, #059669)',
                    boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.1), inset -3px -3px 6px rgba(255,255,255,0.8)'
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300">
                  {feature}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Men's Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h4
              className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Hair Style Cutting for Men: Trendy Hairstyle Personalised for You
            </motion.h4>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Are you trying to find the <Link href="/best-hair-saloon-in-chennai" className="text-green-600 font-semibold hover:text-green-500 transition-colors">best spot in Tirupur to get a haircut?</Link> You don't need to search any further! River Salon and Day Spa are experts in Men's haircuts and stylish.Our skilled stylists are educated to recognise your preferences and provide looks that accentuate your face shape and personality.
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              We provide exclusive groom makeover packages to guarantee that you look your best on your special day. We give a complete grooming service suited to your needs, from trendy haircuts and beard care to skincare procedures.
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              We provide the following services to men:
            </motion.p>
            <ul className="list-disc list-inside text-[#3E3636]/90 text-base text-justify leading-relaxed mb-4">
              <li>Both traditional and contemporary haircuts</li>
              <li>Shaping and style of beards</li>
              <li>Deep-cleaning facials to give skin a glow</li>
              <li>Our hair and scalp treatments combat dandruff and hair loss.</li>
              <li>Packages for exclusive wedding grooming</li>
            </ul>
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
              <div className="absolute inset-0 bg-gradient-to-l from-green-400 to-emerald-500 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
              <div className="relative z-10 bg-white rounded-3xl p-2 shadow-2xl">
                <CustomImage
                  src={tirupurSalonImages.contentImages.hairSalonLadies.src}
                  alt={tirupurSalonImages.contentImages.hairSalonLadies.alt}
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.p
          className="text-[#3E3636]/90 text-lg leading-relaxed max-w-4xl mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At River Salon and Day Spa, inner well-being is the first step toward authentic beauty. It's about feeling secure, at ease, and rejuvenated, not simply about looking nice. Our salon professionals will help you look your best, from trendy haircuts to grooming treatments. Additionally, our expert men massage spa Tirupur provides the ideal haven for body and mind respite when it's time to relax. </motion.p>

        <motion.p
          className="text-[#3E3636]/90 text-lg leading-relaxed max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Whether you're here for a revitalizing spa therapy or a new appearance, our goal is to provide you with an exclusive self-care experience, from the inside out.  </motion.p>
        {/* Women's Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-6">
          {/* Image */}
          <motion.div
            className="relative w-full flex justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
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
              <div className="absolute inset-0 bg-gradient-to-l from-green-400 to-emerald-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="relative z-10 bg-white rounded-3xl p-2 shadow-2xl">
                <CustomImage
                  src={tirupurSalonImages.contentImages.beautyParlour.src}
                  alt={tirupurSalonImages.contentImages.beautyParlour.alt}
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h5
              className="text-xl lg:text-2xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Best Hair Salon in Tirupur for Ladies: Your Go-To Source for Flawless Beauty and Bridal
            </motion.h5>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              At River Salon and Day Spa, we help women feel attractive, something unique that deserves every woman. We provide various services to meet your specific beauty demands, so choose the best women's hair salon in Tirupur.
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our wedding makeovers, in which we turn women into gorgeous queens for their special day, are the salon's speciality. From classic to modern styles, our bridal experts provide a customised experience that accentuates your inherent beauty.
            </motion.p>
            <motion.p
          className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          Included in our bridal packages are:
        </motion.p>
        <ul className="list-disc list-inside text-[#3E3636]/90 text-base text-justify leading-relaxed mb-10 ">
          <li>Trials for hair and makeup</li>
          <li>Wedding hairstyle and makeup</li>
          <li>Draping sarees and accessorising</li>
          <li>Skincare and haircare procedures before marriage</li>
        </ul>
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
                Check Us Out Now!
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                River Salon and Day Spa believe everyone should feel and look their best while walking out after the salon services. Whether it's a bridal makeover, a luxurious salon day, or an ordinary haircut, our committed staff is here to make it happen.
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                Make an appointment with us right now to find out; why we are Tirupur's most popular beauty salon. Let us give you the affection and attention you so rightly deserve!
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
              <p className="text-2xl font-bold text-[#8D7B68] mb-4">Rayapuram</p>
              <Link href="https://www.google.com/maps?ll=11.10197,77.332459&z=13&t=h&hl=en&gl=IN&mapclient=embed&cid=12373747791245092511">              <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                📍 No 16&17, Ranganathapuram, Rayapuram, Thottipalayam village, Tirupur-641601
              </p>
              </Link>

              <div className="space-y-2">
                <a href="tel:+918925012309" className="block text-green-600 hover:text-green-500 font-semibold transition-colors">
                  📞 +91 8925012309
                </a>
                <a href="mailto:riverdaysparayapuram@gmail.com" className="block text-green-600 hover:text-green-500 font-semibold transition-colors">
                  ✉️ riverdaysparayapuram@gmail.com
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
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30097.738961000185!2d77.332459!3d11.10197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907abbed08c91%3A0xabb8620ea570269f!2sRiver%20Salon%20and%20Day%20Spa!5e1!3m2!1sen!2sin!4v1742191155395!5m2!1sen!2sin"
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
      </div>
    </div>
  )
}