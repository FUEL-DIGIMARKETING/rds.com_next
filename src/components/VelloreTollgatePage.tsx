'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import CustomImage from './CustomImage'
import { velloreTollgateImages } from '@/data/velloreTollgateImages'
import {
  FaSpa,
  FaHands,
  FaLeaf,
  FaGem,
  FaChevronLeft,
  FaChevronRight,
  FaUser
} from 'react-icons/fa'
import AppLaunchBanner from './AppLaunchBanner'


const services = [
  { icon: FaSpa, title: "Expert Therapists", description: "Our team of highly trained therapists and stylists ensures top-notch services." },
  { icon: FaHands, title: "Personalized Approach", description: "Tailored treatments to address your unique needs and preferences." },
  { icon: FaLeaf, title: "Tranquil Atmosphere", description: "Enter a tranquil setting created for the utmost relaxation." },
  { icon: FaGem, title: "Premium Products", description: "We use high-quality, nourishing products to enhance your experience." },
  { icon: FaGem, title: "Client-Centric Focus", description: "Our top goal is to make sure you're satisfied, and we work hard to do so." }
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
  transition: { duration: 0.6 },
  viewport: { once: true }
}

export default function VelloreTollgatePage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
      <AppLaunchBanner />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${velloreTollgateImages.hero.src}')` }}
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
            Easing Stress with
          </motion.p>
          <motion.p
            className="text-xl md:text-3xl text-white/90 font-bold drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Skilled Hands
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* First Content Section */}
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
              Massage Spa in Vellore - Relaxation at its deepest level
            </motion.h1>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Relaxation at its deepest level </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              Pamper in a spa journey like no other. Our <Link href="/riverdayspa-packages-couples" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Massage Centre in Vellore</Link> combines a luxurious ambience with expert therapies to provide a haven for your well-being.As our qualified therapists perform their magic, let the stress fade.
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              At <strong>River Salon and Day Spa</strong>, we believe in providing an unparalleled experience that combines relaxation, rejuvenation, and personalized care. Explore our range of services designed to enhance your well-being.
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
                  src={velloreTollgateImages.spaServices.src}
                  alt={velloreTollgateImages.spaServices.alt}
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
                Spa in Vellore Serenity In The City
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Escape to our urban retreat, offering a peaceful haven amidst the vibrancy of Vellore. Our spa's serene atmosphere sets the stage for a truly immersive experience, allowing you to connect with your inner self.
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

        {/* Massage Bliss Section */}
        <div className="text-center mb-16">
          <motion.p
            className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4"
            {...fadeUp}
          >
            Massage Bliss: Tailored Therapies for Your Ultimate Relaxation
          </motion.p>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
          <motion.p
            className="text-[#3E3636]/90 text-lg leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Embark on a journey of tranquillity with our expertly crafted massage services. Our skilled therapists specialize in different techniques, including Swedish, Deep Tissue, Aromatherapy, and Ayurvedic massages. Indulge in the soothing touch of our therapists as they release tension, promote circulation, and leave you feeling utterly relaxed.Whether you seek relief from everyday stress or want to address specific muscle concerns, our massages will help effectively.From soothing massages to invigorating facials, our spa caters to your every desire. Let the essence of our spa therapies revitalize your senses.
          </motion.p>
        </div>

        {/* Beauty Salon Section */}
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
                  src={velloreTollgateImages.bodyScrub.src}
                  alt={velloreTollgateImages.bodyScrub.alt}
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
            <motion.h3
              className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Beauty Salon in Vellore for Your Excellence Look
            </motion.h3>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Step into our salon and let our experienced stylists transform your look. From trendy haircuts and expert colour treatments to rejuvenating facials, we offer a comprehensive range of Salon services.Our team stays up-to-date on the latest trends and techniques to ensure you leave feeling confident and refreshed.
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              Pamper yourself with a manicure or pedicure, and let our skilled professionals enhance your natural beauty. Whether you seek a stylish makeover through salon services, Vellore's spas have it all.Immerse yourself in the peaceful ambience and let the skilled hands of beauticians enchant you to a realm of tranquillity and rejuvenation.
            </motion.p>
          </motion.div>
        </div>

        {/* Body Scrub Section */}
        <div className="text-center mb-16">
          <motion.h4
            className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4"
            {...fadeUp}
          >
            Body Scrub Massages Revitalize Your Skin
          </motion.h4>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
          <motion.p
            className="text-[#3E3636]/90 text-lg leading-relaxed max-w-4xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The <Link href="/best-body-scrub-massage-center" className="text-green-600 font-semibold hover:text-green-500 transition-colors">body scrub massage services in Vellore</Link> stand out for your rejuvenating experience. It involves exfoliating the skin, removing dead cells and impurities, and leaving your skin radiant and smooth.The process begins with a gentle massage using a specially formulated scrub that suits your skin type. It enhances blood circulation and promotes cell revival, unveiling a youthful glow.
          </motion.p>
          <motion.p
            className="text-[#3E3636]/90 text-lg leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            At the <span className="font-semibold text-[#8D7B68]">body scrub massage in Vellore,</span> our skilled therapists understand the art of combining pressure and precision. The scrubs often incorporate natural ingredients like sea salt, sugar, coffee, etc, each offering unique benefits. Whether you prefer a calming scrub or a refreshing citrus blend, the Spa in Vellore caters to diverse preferences.
          </motion.p>
        </div>

        {/* Body Wrap CTA Section */}
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
              <motion.h5
                className="text-3xl font-bold text-[#8D7B68] mb-6"
                {...fadeUp}
              >
                Body Wrap Massages With A Symphony of Relaxation and Rejuvenation
              </motion.h5>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Embark on a journey of profound relaxation with body wrap massage in Vellore. Its indulgent treatment involves enveloping your body with therapeutic ingredients, promoting detoxification and nourishment. The process begins with a gentle exfoliation to prepare the skin to absorb the beneficial elements in the wrap. The wraps vary in ingredients, ranging from hydrating papaya, sugar, coffee, mango, and raspberry wrap. As your body absorbs the goodness of these natural elements, you'll experience a sense of deep relaxation. Body wrap massage services in Vellore often include a soothing massage, amplifying the overall rejuvenating experience.
              </motion.p>
              <Link href="tel:+918754477123">
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

        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <motion.p
            className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4"
            {...fadeUp}
          >
            Why Choose River Salon and Day Spa?
          </motion.p>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
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
                  background: 'linear-gradient(145deg, #d9f0d8b9, #f0f4e366)',
                  boxShadow: '10px 10px 20px #dff6e5ff, -10px -10px 20px #ffffff'
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

        {/* Final Message */}
        <div className="text-center mb-16">
          <motion.p
            className="text-3xl md:text-4xl font-bold text-green-600 mb-4"
            {...fadeUp}
          >
            Your Path to Relaxation Starts Here
          </motion.p>
          <motion.p
            className="text-[#3E3636]/90 text-lg leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Indulge in self-care and elevate your well-being at River Salon and Day Spa. Book your appointment today and embark on a journey of relaxation, rejuvenation, and personalized care. Your path to serenity awaits.
          </motion.p>
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
              <Link href="https://www.google.com/maps/place/River+Day+Spa/@12.911213,79.131267,3233m/data=!3m1!1e3!4m6!3m5!1s0x3bad38dfee4081e7:0xb707247572cb97f9!8m2!3d12.9112134!4d79.1312671!16s%2Fg%2F11b6pp6bmr?hl=en&entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D">
                <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                  📍 10/2, Valasa Street, Infantry Road, Opposite Corporation Office, Vasanthapuram, Kosapet Vellore, Tamil Nadu 632001
                </p>
              </Link>
              <Link href="tel:+918754477123">
                <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                  📞 +91 8754477123
                </p>
              </Link>
              <Link href="tel:0416-4902201">
                <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                  ☎️ 0416-4902201
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
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7474.0674736730125!2d79.131267!3d12.911213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38dfee4081e7%3A0xb707247572cb97f9!2sRiver%20Day%20Spa!5e1!3m2!1sen!2sin!4v1742889738658!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </motion.section>
      </div>


    </div>
  )
}