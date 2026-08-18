'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CustomImage from './CustomImage'
import { bodyWrapImageData } from '../data/bodyWrapImageData'
import { getBodyWrapServiceImage } from '../data/bodyWrapServiceImages'

const services = [
  {
    title: "Chocolate Wrap",
    description: "Chocolate wraps deliver incredible benefits for the skin. As a natural moisturizer, chocolate helps restore softness and hydration. Rich in cocoa, chocolate contains glycerides, which work wonders for anti-aging by reducing wrinkles and promoting a smoother complexion, while also imparting a delightful aroma that enhances relaxation during your treatment.",
    link: "/best-chocolate-body-wrap-massage-center"
  },
  {
    title: "Coffee Wrap",
    description: "If you're seeking an effective anti-cellulite treatment to achieve a more youthful appearance, the coffee wrap is perfect for you. Beyond its stimulating effects on the bloodstream, coffee is known to uplift your mood. A coffee wrap enhances blood circulation in the body, while the caffeic acid offers antimicrobial properties that help protect the dermal layer, promoting healthier skin overall.",
    link: "/best-coffee-wrap-massage-spa"
  },
  {
    title: "Mango Wrap",
    description: "Mango wraps are really beneficial to the skin because of the abundance of antioxidants. Mango pulp shields the skin from UV radiation when applied like a wrap. The treatment can soften wrinkles and dullness gathered over time, thereby imparting a brighter look to your skin. Gentle exfoliating caused due to the natural enzymes existing within mango also suits your skin's texture as well as shine.",
    link: "/best-mango-wrap-massage-center"
  },
  {
    title: "Papaya Wrap",
    description: "When you envelop yourself in the nourishing goodness of a papaya wrap, it assists your skin in receiving various riches of enriching enzymes that help boost its health and vital well-being. This treatment packed with essential minerals and vitamins, including Vitamin C and potassium, will penetrate into the dermal layer and offer freshness that's unparalleled. The papaya fruit helps your skin appear younger and more refreshed, providing a rejuvenating experience like no other.",
    link: "/best-papaya-wrap-massage-spa"
  },
  {
    title: "Raspberry Wrap",
    description: "Raspberries are an excellent food for heart health because of its potassium, which maintains the proper functioning of the heart. In addition, manganese in the raspberries also benefits in maintaining muscle health. One more thing that is going to make your skin glow with the raspberry wrap is said to gain a lighter and even tone.",
    link: "/raspberry-wrap-massage-center"
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true }
};

export default function BodyWrapCenterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${bodyWrapImageData.hero.src}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8D7B68]/30 via-[#8D7B68]/20 to-[#8D7B68]/30" />

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
            The Best Body Wrap Parlour in Chennai!
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <motion.div className="text-center mb-16" {...fadeUp}>
          <h1 className="text-3xl md:text-5xl font-bold text-[#8D7B68] mb-6">
            Best Body Wrap Massage Spa - Transform Your Skin
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
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Really, for you to be immersed with the natural goodness of nature's gifts, it lets you feel the positive vibes in you. <br /><br />

              Using certified wrap techniques at <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors"> River Salon and Day Spa, </Link> our therapeutic body wraps apply gentle compression and cleansing across your body, leaving you feeling cleaner, more supple, refreshed, energized, and well-toned. Besides the radiant-looking skin you will notice in the mirror, our body wraps also give you essential nutrients to make dirt disappear from your skin altogether.
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
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-l from-green-400 to-green-500 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
              <div className="relative z-10 bg-white rounded-3xl p-2 shadow-2xl">
                <CustomImage
                  src={bodyWrapImageData.content.src}
                  alt={bodyWrapImageData.content.alt}
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
              background: 'linear-gradient(145deg, #f0f9f4, #dcfce7)',
              boxShadow: '20px 20px 60px #c7d2cc, -20px -20px 60px #ffffff'
            }}
          >
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-3xl font-bold text-[#8D7B68] mb-6"
                {...fadeUp}
              >
                Best Body Wrap Massage Center in Chennai - River Salon and Day Spa
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Wraps give your skin the unbelievable shine and glow that you had been looking for a long time. For skincare walk into our <strong className="font-bold text-[#8D7B68]">Best spa in Chennai</strong> at a time that best suits you with a prior appointment. Pamper your senses and your skin in our care. When you learn about the various wraps used by therapists, it feels like they're made from ingredients straight from your kitchen or a home garden. The natural ingredients are really great for the skin and can really raise your mood. Skin gets to respond wonderfully to nature's touch, for deep cleansing and detoxification of the mind as well as of the body.
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
                  BOOK NOW
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Services Description Section */}
        <div className="text-center mb-16">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4"
            {...fadeUp}
          >
            Best Body Wrap Massage Service in Bangalore
          </motion.h3>
          <motion.p
            className="text-xl mt-2 font-semibold text-[#8D7B68]/80 mb-6"
            {...fadeUp}
          >
            Unwind and Rejuvenate: Experience the Transformative Power of Our Signature Body Wrap Massage
          </motion.p>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
          <div className="max-w-5xl mx-auto space-y-4">
            <motion.p
              className="text-[#3E3636]/90 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Body wraps are usually made of naturally occurring fruits or herbs. They have varied effects on people. When you gather the names of the kind of wraps used by therapists you feel as if they have been made of things right from your kitchen or handpicked from the kitchen garden. Natural things have such wonderful effects on the skin and the overall mood of people. The skin responds best to the natural touch of nature. The body not only cleanses but also detoxes the mind and the body completely.
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              As you enter the room for your therapy you come across herbal wraps which are made of herbs and natural fruits which provide vitamins and softness to the dermal layer of the skin. The wraps help the skin to release the stored toxins from the body and enhance the glow and health of the skin. Many healers claim that the ingredients of the wrap help in the process of weight loss. The natural ingredients used in Riverday spa is also a natural moisturizer that provides a natural glow to the skin.
            </motion.p>
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
                      src={getBodyWrapServiceImage(service.title)?.localPath || '/images/services/body-wrap/default-wrap.jpg'}
                      alt={getBodyWrapServiceImage(service.title)?.alt || service.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="text-xl font-bold text-[#8D7B68] mb-3 group-hover:text-green-600 transition-colors duration-300">
                      {service.title}
                    </p>
                    <p className="text-[#3E3636]/80 text-sm leading-relaxed mb-4 flex-1">
                      {service.description}
                    </p>
                    <motion.button
                      className="w-full py-2 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Know More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <motion.section
          className="relative rounded-3xl p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(141,123,104,0.1), rgba(169,144,126,0.1))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-[#3E3636]/90 text-lg leading-relaxed mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience the transformative power of our premium body wrap treatments. Book your appointment today and discover the difference our expert therapists can make for your skin's health and radiance.
          </motion.p>
          <Link href="tel:+919500029234 ">
            <motion.button
              className="px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg, #10b981, #059669)',
                boxShadow: '8px 8px 16px rgba(212,209,204,0.5), -8px -8px 16px rgba(255,255,255,0.5)'
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '12px 12px 24px rgba(212,209,204,0.6), -12px -12px 24px rgba(255,255,255,0.6)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Book an Appointment
            </motion.button>
          </Link>
        </motion.section>
      </div>
    </div>
  );
}