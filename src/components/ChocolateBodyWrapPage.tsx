'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CustomImage from './CustomImage'
import { chocolateWrapImageData } from '../data/chocolateWrapImageData'
import {
  FaSmile,
  FaUserTie,
  FaHandsHelping,
  FaHandHoldingHeart,
  FaSpa,
  FaLeaf
} from 'react-icons/fa';

const services = [
  {
    title: "Luxurious Moisturization",
    description: "The richness of the cocoa element in the chocolate body deeply hydrates your skin; it turns fantastically soft and smooth, properly nourished. This indulging treatment will rejuvenate your skin with its natural glow, leaving it shining bright.",
    icon: "💧",
    color: "from-blue-400 to-cyan-500"
  },
  {
    title: "Antioxidant Power",
    description: "Chocolate has natural antioxidants which helps to fight with radicals and repair damage in skin. This will result in having a healthy and younger skin complexion. Chocolate helps to increase the levels of collagen which will keep your skin youthful.",
    icon: "🛡️",
    color: "from-purple-400 to-pink-500"
  },
  {
    title: "Mood Enhancement",
    description: " Chocolate's delectable aroma releases endorphins, bettering a person's mood and creating a wonderful relaxation and euphoric sensation. It is sensual pleasure that helps an individual release stress and feel deep inside their well-being.",
    icon: "🌱",
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "Stress Relief",
    description: "The nature of chocolate soothes your body; it lowers the stress level, increasing a sense of well-being in your body. It takes it to the next level, letting you loose and rejuvenates both your mind and body.",
    icon: "😊",
    color: "from-green-400 to-orange-500"
  },
  {
    title: "Improved Skin Elasticity",
    description: "With regular application, chocolate body wraps will further improve skin elasticity, wherein the fine lines are not that noticeable and the skin feels firmer. The various cocoa compounds in chocolate enhance collagen production, hence helping your skin to be younger and more resilient with a good complexion.",
    icon: "✨",
    color: "from-amber-400 to-orange-500"
  },
  {
    title: "Detoxification",
    description: "The chocolate wrap gently detoxifies the skin, drawing out impurities, which leaves it fresh and completely rejuvenated. This treatment furthers a great blood flow to the skin, since it gives an excellent healthy glow.",
    icon: "🌿",
    color: "from-teal-400 to-green-500"
  },
];

const whyChooseUs = [
  { icon: FaSpa, title: "Indulgent Chocolate Infusion" },
  { icon: FaLeaf, title: "Enhanced Skin Softness" },
  { icon: FaUserTie, title: "Mood-Boosting Aromatherapy" },
  { icon: FaHandsHelping, title: "Nourishing Antioxidants" },
  { icon: FaSmile, title: "Luxurious Moisture Boost" },
  { icon: FaHandHoldingHeart, title: "Stress Relief and Relaxation" }
];

const faqs = [
  {
    question: "How long does a usual body wrap treatment last?",
    answer: "A wrapping treatment generally takes about 45 to 60 minutes, which includes application and relaxation time.",
  },
  {
    question: "How frequently should you receive a body wrap?",
    answer: "You will see even better results if you do a body wrap every 1-2 weeks, depending on what your skin needs.",
  },
  {
    question: "Can a body wrap help tighten loose skin?",
    answer: "While body wraps can reduce the loose skin for some time, greater and longer-term efficacy is yielded with persistence and in conjunction with other treatments.",
  },
  {
    question: "Is it okay to leave a body wrapped overnight?",
    answer: "Generally speaking, a wrapping of the body shouldn't be left on all night; this may be modified according to your spa's policy for best safety and results.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true }
};

export default function ChocolateBodyWrapPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${chocolateWrapImageData.hero.src}')` }}
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
            Chocolate Body Wrap Massage
          </motion.p>
          <motion.p
            className="text-xl md:text-3xl text-amber-100 font-light drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Reveal Your Inner Glow
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <motion.div className="text-center mb-16" {...fadeUp}>
          <h1 className="text-3xl md:text-5xl font-bold text-[#8D7B68] mb-6">
            Best Chocolate Body Wrap Massage Center - Choco-Glow Retreat
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
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
              className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Luxuriate in Decadence: Wrap Yourself in Rich Chocolate Bliss
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Is there anything more decadent than just pure chocolate? Imagine being wrapped in just pure chocolate in the serenity of a facility. Does it not sound just like the perfect setting? Well, you can find this piece of heaven right here in Chennai. <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon and Day Spa </Link>  offers chocolate wraps of pure indulgence and luxury.
            </motion.p>

            <motion.p
              className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Indulge Your Senses: Discover the Ultimate Choco-Glow Experience
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              Chocolate is renowned for its therapeutic values, uplifting mood and heightening the senses. Our expert therapists work at amplifying your relaxation with their art of skill. The wraps also allow your skin to absorb the richness and nourishment provided by the chocolate; thus, this leaves your skin soft, moisturized, and glowing. Smell the aroma of pure chocolate luxury and indulge in an unparalleled pampering experience as you melt into a cocoon.
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
                  src={chocolateWrapImageData.content.src}
                  alt={chocolateWrapImageData.content.alt}
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
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
              <motion.h2
                className="text-3xl font-bold text-[#8D7B68] mb-6"
                {...fadeUp}
              >
                Chocolate Body Wrap Massage in Chennai - River Salon and Day Spa
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Chocolate is filled with natural antioxidants that will give a significant boost to the "happy chemicals" in the brain. We have designed thoughtful packages that include only the finest, pure chocolate wraps to relieve your tension and worry. We are confident that you will leave both happy and relieved after your session. If your skin seems dull and lifeless, that is generally a sign that routine stresses are taking their toll. Time to relax and overindulge. You need this rich chocolate wrap to pamper yourself. So <Link href="/book-spa-service-appointment" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Book your Appointment Now! </Link>
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
                  Book now
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Services Section with Neumorphism Cards */}
        <div className="text-center mb-16">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-[#8D7B68] mb-4"
            {...fadeUp}
          >
            Decadent Benefits: Discover the Luxurious Perks of a Chocolate Body Wrap
          </motion.h3>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
                    className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl mb-6 bg-gradient-to-r ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    style={{
                      boxShadow: 'inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px rgba(255,255,255,0.8)'
                    }}
                  >
                    {service.icon}
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

        {/* Why Choose Us Section */}
        <div className="text-center mb-12">
          <motion.p
            className="text-3xl lg:text-4xl font-bold text-[#8D7B68] mb-6"
            {...fadeUp}
          >
            Why Choose River Salon and Day Spa?
          </motion.p>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-16">
          {whyChooseUs.map((item, index) => (
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
                    background: 'linear-gradient(145deg, #10b981, #059669)',
                    boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.1), inset -3px -3px 6px rgba(255,255,255,0.8)'
                  }}
                >
                  <item.icon className="text-white text-2xl" />
                </div>
                <p className="text-sm font-semibold text-[#8D7B68] group-hover:text-green-600 transition-colors duration-300">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-12">
          <motion.h4
            className="text-3xl font-bold text-[#8D7B68] mb-6"
            {...fadeUp}
          >
            Frequently Asked Questions
          </motion.h4>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
        </div>

        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg, #ffffffff, #e7f6eeff)',
                boxShadow: '8px 8px 16px #d1dcd4, -8px -8px 16px #ffffff'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-semibold text-[#8D7B68]">{faq.question}</span>
                <span className="text-2xl text-green-600 transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-[#3E3636]/80 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
      {/* CTA Section */}
      <section
        className="relative w-full py-16 select-text bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/wraps/chocolate/body-spa-in-tirupur.webp')"
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
            <motion.h5
              className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-white mb-6 select-text"
              {...fadeUp}
            >
              Indulge in Pure Bliss: Experience the Ultimate Chocolate Body Wrap at Our Choco-Glow Retreat
            </motion.h5>
            <motion.p
              className="text-white/90 text-lg leading-relaxed mb-8 max-w-4xl mx-auto text-center select-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our spa center starts with mild exfoliation to freshen up one's skin, followed by a chocolate cream wrap to dip your skin in the richness of chocolate. Our experts at <Link
                href="/spa-in-bangalore"
                className="text-green-400 font-semibold hover:text-green-300 transition-colors"
              >
                River Salon and Day Spa in Bangalore,
              </Link><span className="text-green-300 font-bold"> Chennai, Coimbatore, Vellore, Trichy and Tirupur</span> never miss out on any single detail, pamper every part of your body, and rejuvenate you to profundity.This, in fact, rejuvenates your skin, thereby acting as therapy to soothe your soul.
            </motion.p>
            <Link href="tel:+919500029234">
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
    </div>
  );
}