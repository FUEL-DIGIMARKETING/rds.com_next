'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import CustomImage from './CustomImage'
import { coimbatoreSalonImages } from '../data/coimbatoreSalonImages'
import AppLaunchBanner from './AppLaunchBanner'
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
}

export default function CoimbatoreSalonPage() {
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
      <AppLaunchBanner /> {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <CustomImage
            src={coimbatoreSalonImages.heroImage.src}
            alt={coimbatoreSalonImages.heroImage.alt}
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
            Salon in RS Puram, Coimbatore
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
            Beauty Salon in Coimbatore

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
              One of the easiest to locate walk-in hair salons, <Link href="https://www.riverdayspa.in/best-beauty-parlour-coimbatore/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Hair Studio</Link> is synonymous with top service and affordability. Our services include hair styling, bridal makeup & facial, nail art and hair treatment. If hair loss seems to bother you, we offer you customised solutions.Our team of experts look into the problem and suggest solutions accordingly.
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              One can attribute several reasons for hair fall. It can range from a simple vitamin deficiency or signifies a complex underlying health condition.Trauma such as an accident, severe illness or an accident- can cause hair loss. According to a renowned trichologist, a single strand of hair has a staged life cycle. This starts with the growth, rest phase and finally the shedding phase.  The good news is that we can fix all your hair problems. Give us your hair and take back a new you.
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
                  src={coimbatoreSalonImages.contentImages.famousSalon.src}
                  alt={coimbatoreSalonImages.contentImages.famousSalon.alt}
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
              <motion.h2
                className="text-3xl font-bold text-[#8D7B68] mb-6"
                {...fadeUp}
              >
                Affordable Hair Salon Near Me In RS Puram, Coimbatore
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Few of the walk-in haircut places with centres across Coimbatore and premium services. We offer you a fancy haircut or suggest you the right shade in tune with the season. Services like hair fall treatment, dandruff treatment and grey hair are dealt by our experts. Try the latest hairstyle or crop your hair for the summer season.
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Facial Services */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Search For The Best Facial Salon In Coimbatore On Your Google Map
            </motion.h3>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Look at your face in the mirror and you will be surprised to know stories behind the sagging eyes and wrinkles. Get a facial done at <strong>River Hair Studio</strong>, and you will walk out feeling rejuvenated. How many types of facial are there? Our range of facials include deep cleansing, gold facial, diamond facial, sensitive skin facial and facial for specific skin conditions. Our experienced skin care experts will test your skin and suggest a right facial for you.
            </motion.p>
          </motion.div>

          {/* Image */}
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
                  src={coimbatoreSalonImages.contentImages.bestSalon.src}
                  alt={coimbatoreSalonImages.contentImages.bestSalon.alt}
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Foot & Nail Spa Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
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
                  src={coimbatoreSalonImages.contentImages.bestBeautyParlour.src}
                  alt={coimbatoreSalonImages.contentImages.bestBeautyParlour.alt}
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h4
              className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Which Is The Best Foot & Nail Spa In RS Puram, Coimbatore?
            </motion.h4>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              We have to admit it is River Hair Studio by popular reviews. Our full pedicure service drives the stress away, while you enjoy a day of pampering. This service includes <Link href="/beauty-salon-packages" className="text-green-600 font-semibold hover:text-green-500 transition-colors">foot massage</Link>, exfoliation, a filing of nails, pushing cuticles away and finally the application of your favourite nail colour.Relax with a glass of juice, read a magazine or tune into your favourite music, while we look after your beauty needs.
            </motion.p>
          </motion.div>
        </div>

        {/* Location Section */}
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
      </div>
    </div>
  )
}