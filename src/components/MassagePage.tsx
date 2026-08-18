'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Waves, Hand, Flower, Sparkles, Dumbbell, User, Leaf, Zap, Circle, Users, Footprints, MapPin } from 'lucide-react'
import CustomImage from './CustomImage'
import { bodyMassageCenterMassageImageData } from '../data/bodyMassageCenterMassageImageData'
import { getBodyMassageServiceImage } from '../data/bodyMassageServiceImages'

const MassagePage = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  const services = [
    {
      title: "Moroccan Bath Massage",
      description: "A Moroccan Bath Massage in Bangalore is a traditional ritual featuring exfoliation, cleansing, and massage. Steam and natural ingredients help you in ultimate relaxation and keep you fresh, detoxified, and revitalized.",
      link: "/best-moroccan-bath-massage-in-bangalore",
      icon: Waves
    },
    {
      title: "Swedish Massage",
      description: "Swedish massage is just a very common method that includes long, flowing strokes, kneading, and circular motions to relax the muscles. It improves circulation and thus helps in relaxation to the fullest, benefiting general well-being with the help of Swedish massage.",
      link: "/swedish-massage-service-in-chennai",
      icon: Hand
    },
    {
      title: "Balinese Massage",
      description: "A Balinese massage is a treatment consisting of acupressure, aromatherapy, and stretching to gain balance in the flow of energy and to relax muscles and let one go.",
      link: "/best-balinese-massage-center",
      icon: Flower
    },
    {
      title: "Head to Toe Aroma Massage",
      description: "Our Head & Toe Aroma Massage rejuvenates and moisturizes weary feet and head muscles for complete relaxation. It will help reduce apprehension, irritability, and nervousness.",
      link: "/best-head-to-toe-aroma-massage-spa",
      icon: Sparkles
    },
    {
      title: "Deep Tissue Massage",
      description: "This ensures relief from chronic pains, reducing muscle tension to improve flexibility, and finally providing better healing along with relaxation.",
      link: "/best-deep-tissue-massage-center",
      icon: Dumbbell
    },
    {
      title: "Sense of Siam Massage",
      description: "Sense of Siam Massage combines the techniques of yoga and acupressure using pressure points and palm pressure for the alignment of internal energy in the body, its balance, and good health.",
      link: "/best-sense-of-siam-massage-center",
      icon: User
    },
    {
      title: "Detoxifying Massage",
      description: "One of the healing techniques is detoxifying massage, which stimulates lymphatic flow to rid the body of those toxic elements through some massage movements and applied pressure. Revitalize with the best detox massage.",
      link: "/best-detoxifying-massage-center",
      icon: Leaf
    },
    {
      title: "Sports Massage",
      description: "It is a specialized massage technique developed for the establishment of reduced muscle tension and improvement in performance with stroking and stretching, which, in nature, is sport-specific. It will help you recover easily from your injuries and have peak performance",
      link: "/sports-massage-spa-in-chennai",
      icon: Zap
    },
    {
      title: "Abhyanga Ayurvedic Massage",
      description: "Abhyanga is the ancient Ayurvedic massage treatment using warm herbal oils in rhythm with the body's energy, helping to bring in general well-being to the body. It will furnish a human with mental peace, nourishing tissues, and detoxification at cellular levels.",
      link: "/best-abhyanga-massage-center",
      icon: Circle
    },
    {
      title: "Synchronized Massage",
      description: "Synchronized massage is when the two therapists work in coordination with each other to execute strokes and techniques, maximizing the massage experience. This experience includes a very different massage with four hands that rejuvenates body and soul.",
      link: "/best-synchronized-massage-spa",
      icon: Users
    },
    {
      title: "Foot Reflexology Massage",
      description: "Foot reflexology massage is the concept whereby certain points in the feet are subjected to pressure. These correspond in a particular manner with the different organs and systems that make up the human body. Your feet and entire body will benefit from this as well.",
      link: "/best-foot-reflexology-massage",
      icon: Footprints
    },
    {
      title: "Thai Massage",
      description: "It is an indigenous therapy to Thailand, combining stretching, acupressure, and rhythmic movements done on a mat, often including yoga-like postures. River Day Spa represents the ultimate Thai massage.",
      link: "/best-thai-body-massage-center",
      icon: MapPin
    }
  ]

  return (
    <div className="w-full overflow-x-hidden select-text bg-[#F8F5F0] pt-32" style={{ userSelect: 'text', WebkitUserSelect: 'text', MozUserSelect: 'text' }}>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <CustomImage
          src={bodyMassageCenterMassageImageData.hero.src}
          alt={bodyMassageCenterMassageImageData.hero.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.p
            className="text-4xl sm:text-6xl font-bold text-white drop-shadow-2xl text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            itemProp="headline"
          >
            Elevate Your Energy
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative bg-[#F8F5F0] text-[#3E3636] w-full select-text">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full select-text mb-16">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left select-text space-y-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.h1
                className="text-2xl sm:text-3xl font-bold text-[#8D7B68] mb-6 select-text"
                {...fadeUp}
                itemProp="name"
              >
                Best Body Massage Spa - Treat Your Body and Soul to Our Curated Selection
              </motion.h1>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6 select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                itemProp="description"
              >
                Looking for a spot to blow off some steam, boost your energy, decrease anxiety, and even out your skin tone and texture? Right in your neighborhood, let us help you be restored from the daily grind through our convenient, customized, and affordable massage services.
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                Need to find time from that never-ending to-do list for a <Link href="/book-spa-service-appointment" className="text-green-600 font-semibold hover:text-green-500 transition-colors">spa treatment in Chennai?</Link> Skip the extra miles and let us bring the pampering to you.
              </motion.p>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              className="relative w-full flex justify-center"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gray-200 rounded-2xl">
                  <CustomImage
                    className="rounded-2xl shadow-2xl border-4 border-[#A9907E]/30 w-full bg-gray-200"
                    src={bodyMassageCenterMassageImageData.content.src}
                    alt={bodyMassageCenterMassageImageData.content.alt}
                    width={600}
                    height={400}
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#A9907E]/20 to-transparent pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="relative bg-cover bg-center bg-fixed rounded-3xl overflow-hidden mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CustomImage
              src={bodyMassageCenterMassageImageData.background.src}
              alt={bodyMassageCenterMassageImageData.background.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 py-16 px-8 text-center text-white">
              <motion.h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                {...fadeUp}
              >
                Best Body Massage Center - River Salon and Day Spa
              </motion.h2>
              <motion.p
                className="text-lg mb-8 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Massages can relieve your mental stress, manage your pain and just relax, our best massage therapy has been designed with this in mind. We have various massage treatments ranging from Moroccan Bath Massage to Couple Massage, in which our skilled therapist will let you feel relaxed.
              </motion.p>
              <motion.button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/book-spa-service-appointment">Book Now</Link>
              </motion.button>
            </div>
          </motion.div>

          {/* Services Introduction */}
          <div className="text-center mb-16">
            <motion.h3
              className="text-4xl lg:text-5xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Body Massage Therapy Service
            </motion.h3>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-6" />
            <motion.p
              className="text-2xl font-semibold text-[#8D7B68] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Explore Our Range of Body Massages that Pamper your Body and Soul
            </motion.p>
            <motion.p
              className="text-xl text-[#3E3636]/80 select-text font-medium max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              At <Link href="/body-massage-in-chennai-egmore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Day Spa in Chennai,</Link> our best massage services ensure you leave feeling completely rejuvenated. Our treatments promote faster healing from injuries, alleviate mental stress, improve lymphatic and blood circulation, and soothe tense muscles.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-[#F8F5F0] to-[#EAE0D5] text-[#3E3636] w-full select-text">
        <div className="max-w-7xl mx-auto px-4 select-text">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 select-text">
            {services.map((service, index) => (
              <Link key={index} href={service.link}>
                <motion.div
                  className="group cursor-pointer h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}

                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#A9907E]/20 h-full flex flex-col">
                    <div className="relative mb-6 overflow-hidden rounded-xl">
                      <CustomImage
                        src={getBodyMassageServiceImage(service.title)?.localPath || '/images/services/body-massage/default-massage.jpg'}
                        alt={getBodyMassageServiceImage(service.title)?.alt || service.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <p className="text-xl font-bold text-[#8D7B68] mb-3 group-hover:text-green-600 transition-colors duration-300" itemProp="name">
                        {service.title}
                      </p>
                      <p className="text-[#3E3636]/80 text-sm leading-relaxed mb-4 flex-1" itemProp="description">
                        {service.description}
                      </p>
                      <motion.button
                        className="w-full py-2 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Know more
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* More Info Button */}
          <motion.div
            className="flex justify-center mt-12"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/book-spa-service-appointment"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg"
            >
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MassagePage