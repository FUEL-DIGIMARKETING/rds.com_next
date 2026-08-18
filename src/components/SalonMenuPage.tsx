'use client'

import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from "next/image"

const sections = [
  {
    id: "hair-services",
    title: "Hair Cut",
    content: {
      Women: [
        { service: "Hair Trim", price: "(R) ₹200 & (M) ₹150" },
        { service: "Creative Hairstyle", price: "(R) ₹800 & (M) ₹650" },
        { service: "Change of Hairstyle", price: "(R) ₹1000 & (M) ₹850" },
        { service: "Fringe / Bangs", price: "(R) ₹150 & (M) ₹100" },
        { service: "Hair Wash & Blow Dry", price: "(R) ₹500 & (M) ₹400" },
        { service: "Kids Hair Cut", price: "(R) ₹250 & (M) ₹180" },
        { service: "Bride Makeup ", price: " ₹12,000 (Excludes from Total Package Price)" },

      ],
      Men: [
        { service: "Hair Cut", price: "(R) ₹200 & (M) ₹150" },
        { service: "Beard Shaving", price: "(R) ₹150 & (M) ₹110" },
        { service: "Beard Trim", price: "(R) ₹100 & (M) ₹70" },
        { service: "Change of Hairstyle", price: "(R) ₹275 & (M) ₹220" },
        { service: "Hair Wash & Blow Dry", price: "(R) ₹500 & (M) ₹400" },
        { service: "Kids Haircut", price: "(R) ₹150 & (M) ₹100" },
        { service: "Groom Makeup ", price: "₹12,000 (Excludes from Total Package Price) " },
      ],
    },
  },
  {
    id: "hair-treatment",
    title: "Hair Treatment",
    content: {
      Women: [
        { service: "Anti-Dandruff Treatment", price: "(R) ₹2200 & (M) ₹1900" },
        { service: "Post Colour Treatment", price: "(R) ₹2000 & (M) ₹1750" },
        { service: "Instant Repair Shot", price: "(R) ₹2000 & (M) ₹1750" },
      ],
      Men: [
        { service: "Anti-Dandruff Treatment", price: "(R) ₹1500 & (M) ₹1250" },
        { service: "Post Colour Treatment", price: "(R) ₹1000 & (M) ₹800" },
        { service: "Instant Repair Shot", price: "(R) ₹2000 & (M) ₹1500" },
      ],
    },
  },
  {
    id: "hair-colouring",
    title: "Hair Colouring",
    content: {
      Women: [
        { service: "Global (M) Innova", price: "(R) ₹1500 & (M) ₹1300" },
        { service: "Global (L) Innova", price: "(R) ₹2500 & (M) ₹2220" },
        { service: "Global Colour Plus Light (S)", price: "(R) ₹2500 & (M) ₹2150" },
        { service: "Global Colour Plus Light (M)", price: "(R) ₹3500 & (M) ₹2800" },
        { service: "Global Colour Plus Light (L)", price: "(R) ₹4500 & (M) ₹3950" },
        { service: "Global High Light", price: "(R) ₹4000 & (M) ₹3350" },
        { service: "Henna Colour", price: "(R) ₹700 & (M) ₹560" },
        { service: "Root Touch Up", price: "(R) ₹800 & (M) ₹640" },
        { service: "High Light per Foil", price: "(R) ₹900 & (M) ₹750" },
      ],
      Men: [
        { service: "Hair Colouring (S)", price: "(R) ₹800 & (M) ₹650" },
        { service: "Hair Colouring (M)", price: "(R) ₹850 & (M) ₹650" },
        { service: "Hair Colouring (L)", price: "(R) ₹900 & (M) ₹750" },
      ],
    },
  },
]

const services = [
  {
    category: "Threading (Men / Women)",
    items: [
      { service: "Eye Brows", price: "(R) ₹80 & (M) ₹50" },
      { service: "Upper Lip", price: "(R) ₹75 & (M) ₹55" },
      { service: "Chin", price: "(R) ₹75 & (M) ₹55" },
      { service: "Full Head", price: "(R) ₹150 & (M) ₹100" },
      { service: "Fore Head", price: "(R) ₹80 & (M) ₹50" },
    ],
  },
  {
    category: "Waxing (Men / Women)",
    items: [
      { service: "Upper Lips", price: "(R) ₹80 & (M) ₹50" },
      { service: "Chin", price: "(R) ₹100 & (M) ₹70" },
      { service: "Under Arms", price: "(R) ₹150 & (M) ₹100" },
      { service: "Face", price: "(R) ₹250 & (M) ₹200" },
      { service: "Half Hands", price: "(R) ₹550 & (M) ₹350" },
      { service: "Full Hands", price: "(R) ₹700 & (M) ₹500" },
      { service: "Half Legs", price: "(R) ₹800 & (M) ₹700" },
      { service: "Full Legs", price: "(R) ₹1000 & (M) ₹900" },
    ],
  },
  {
    category: "Pedicure & Manicure (Men / Women)",
    items: [
      { service: "French Pedicure", price: "(R) ₹600 & (M) ₹500" },
      { service: "French Manicure", price: "(R) ₹500 & (M) ₹400" },
      { service: "Spa Pedicure", price: "(R) ₹1000 & (M) ₹900" },
      { service: "Spa Manicure", price: "(R) ₹800 & (M) ₹700" },
    ],
  },
  {
    category: "Bleaching (Men / Women)",
    items: [
      { service: "Wine", price: "(R) ₹300 & (M) ₹225" },
      { service: "Pearl", price: "(R) ₹600 & (M) ₹490" },
      { service: "Gold", price: "(R) ₹750 & (M) ₹650" },
      { service: "River Signature", price: "(R) ₹900 & (M) ₹800" },
    ],
  },
  {
    category: "Mehandi (Men / Women)",
    items: [
      { service: "Bridal", price: "₹3000" },
      { service: "Arabic", price: "₹2500" },
      { service: "Full Hand", price: "₹1000" },
      { service: "Half Hand", price: "₹500" },
      { service: "Full Leg", price: "₹1000" },
      { service: "Half Leg", price: "₹500" },
    ],
  },
  {
    category: "Bridal Make Up (Men / Women)",
    items: [
      { service: "Diamond", price: "₹25,000" },
      { service: "Platinum", price: "₹18,300" },
      { service: "Gold", price: "₹12,500" },
      { service: "Silver", price: "₹9,600" },
    ],
  },
  {
    category: "Styling (Men / Women)",
    items: [
      { service: "Blow Dry /Curl /Straight", price: "(R) ₹500 & (M) ₹350" },
      { service: "Ironing", price: "(R) ₹1000 & (M) ₹800" },
      { service: "Curling With Tongs", price: "(R) ₹1000 & (M) ₹800" },
      { service: "Perming (S)", price: "(R) ₹1500 & (M) ₹1275" },
      { service: "Perming (M)", price: "(R) ₹2500 & (M) ₹2215" },
      { service: "Perming (L)", price: "(R) ₹3000 & (M) ₹2550" },
      { service: "Smoothing /Straightening (S)", price: "(R) ₹3500 & (M) ₹2950" },
      { service: "Smoothing /Straightening (M)", price: "(R) ₹4500 & (M) ₹3999" },
      { service: "Smoothing /Straightening (L)", price: "(R) ₹5500 & (M) ₹4675" },
      { service: "Hair Spa Men", price: "(R) ₹1000 & (M) ₹800" },
      { service: "Rebonding (S)", price: "(R) ₹3000 & (M) ₹2650" },
      { service: "Rebonding (M)", price: "(R) ₹4000 & (M) ₹3650" },
      { service: "Rebonding (L)", price: "(R) ₹5000 & (M) ₹4650" },
      { service: "Fringe (Smoothing)", price: "(R) ₹1000 & (M) ₹850" },
      { service: "Crown (Smoothing)", price: "(R) ₹2000 & (M) ₹2150" },
      { service: "Keratin Treatment (S)", price: "(R) ₹6000 & (M) ₹5555" },
      { service: "Keratin Treatment (M)", price: "(R) ₹8000 & (M) ₹7655" },
      { service: "Keratin Treatment (L)", price: "(R) ₹10000 & (M) ₹9655" },
      { service: "Hair Spa (S)", price: "(R) ₹1000 & (M) ₹800" },
      { service: "Hair Spa (M)", price: "(R) ₹2500 & (M) ₹2250" },
      { service: "Hair Spa (L)", price: "(R) ₹3500 & (M) ₹3250" },
    ],
  },
  {
    category: "Facial (Men / Women)",
    items: [
      { service: "Skin Glow (Aroma)", price: "(R) ₹1200 & (M) ₹1000" },
      { service: "Nature Glow (Lotus)", price: "(R) ₹1500 & (M) ₹1300" },
      { service: "Diamond", price: "(R) ₹2500 & (M) ₹2200" },
      { service: "Gold", price: "(R) ₹2500 & (M) ₹2200" },
      { service: "Whitening (Lotus)", price: "(R) ₹1500 & (M) ₹1250" },
      { service: "Pearl & Lighting", price: "(R) ₹2000 & (M) ₹1800" },
      { service: "Silver (Aroma)", price: "(R) ₹1500 & (M) ₹1250" },
      { service: "Bridal (Aroma)", price: "(R) ₹1500 & (M) ₹1300" },
      { service: "Mini Facial", price: "(R) ₹600 & (M) ₹490" },
      { service: "Herbal", price: "(R) ₹1000 & (M) ₹800" },
      { service: "Fruits", price: "(R) ₹1000 & (M) ₹800" },
      { service: "Wine", price: "(R) ₹1000 & (M) ₹800" },
      { service: "Chocolate", price: "(R) ₹1000 & (M) ₹800" },
      { service: "D-tan Face & Neck", price: "(R) ₹900 & (M) ₹790" },
      { service: "Clean Up", price: "(R) ₹700 & (M) ₹550" },
      { service: "Under Eye Treatment", price: "(R) ₹250 & (M) ₹150" },
    ],
  }
]

export default function SalonMenuPage() {
  return (
    <>
      <Head>
        <title>Beauty Salon Menu Card - Cuts, Colors & Confidence!</title>
        <meta name="description" content="Discover our Beauty Salon Menu Card! From hair styling to skincare, makeup, and spa treatments—experience luxury and perfection at its best!" />
        <meta property="og:title" content="Beauty Salon Menu Card - Cuts, Colors & Confidence!" />
        <meta name="keywords" content="Beauty Parlor Menu Card, Salon Price Catalogue, Salon Menu Cards" />
        <meta property="og:description" content="Discover our Beauty Salon Menu Card! From hair styling to skincare, makeup, and spa treatments—experience luxury and perfection at its best!" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0] relative overflow-hidden">
        {/* Animated Background Circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
            animate={{
              x: ['-10%', '10%', '-10%'],
              y: ['-10%', '20%', '-10%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{ top: '10%', left: '10%' }}
          />
          <motion.div
            className="absolute w-80 h-80 bg-gradient-to-r from-green-200/20 to-teal-200/20 rounded-full blur-3xl"
            animate={{
              x: ['10%', '-10%', '10%'],
              y: ['20%', '-10%', '20%'],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{ top: '60%', right: '10%' }}
          />
          <motion.div
            className="absolute w-72 h-72 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-3xl"
            animate={{
              x: ['-5%', '15%', '-5%'],
              y: ['10%', '30%', '10%'],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{ top: '40%', left: '70%' }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url('images/best-long-hair-cuts-for-women-in-coimbatore.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

          <motion.div
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Cuts, Colors & Confidence!
            </motion.h1>
          </motion.div>
        </section>

        {/* Pamphlet Design Section */}
        <div className="flex items-center justify-center py-20 px-4">
          <motion.div
            className="relative w-full max-w-5xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Pamphlet Container */}
            <div className="relative bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Decorative Header */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 overflow-hidden">
                <div className="absolute top-4 left-8 w-32 h-1 bg-gradient-to-r from-green-400 to-yellow-600 transform -rotate-12"></div>
                <div className="absolute top-6 left-12 w-24 h-0.5 bg-gradient-to-r from-green-400 to-yellow-600 transform -rotate-12"></div>
                <div className="absolute top-8 left-16 w-16 h-0.5 bg-gradient-to-r from-green-400 to-yellow-600 transform -rotate-12"></div>

                <div className="absolute top-8 right-12 flex space-x-1">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
                <div className="absolute top-12 right-16 flex space-x-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-0.5 h-0.5 bg-yellow-300 rounded-full"></div>
                  ))}
                </div>
              </div>

              {/* Header */}
              <div className="relative pt-12 pb-6 text-center">
                <p className="text-5xl font-script  text-white mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
                  Riverdayspa
                </p>
                <p className="text-xl font-bold bottom-10 text-white tracking-wider">
                  HAIR SALON
                </p>
              </div>

              {/* Menu Content */}
              <div className="px-12 pb-8 space-y-8">
                {/* Hair Services with Men/Women sections */}
                {sections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <p className="text-2xl font-script text-center text-gray-700 border-b border-gray-300 pb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
                      {section.title}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                      {/* Women Section */}
                      <div>
                        <p className="text-lg font-semibold text-pink-600 mb-3 text-center">Women</p>
                        <div className="space-y-2">
                          {section.content.Women.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex justify-between items-center py-1">
                              <span className="text-gray-700 font-medium text-sm">{item.service}</span>
                              <span className="text-gray-600 font-bold text-sm">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Vertical Divider */}
                      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 rounded-full transform -translate-x-1/2"></div>

                      {/* Men Section */}
                      <div>
                        <p className="text-lg font-semibold text-blue-600 mb-3 text-center">Men</p>
                        <div className="space-y-2">
                          {section.content.Men.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex justify-between items-center py-1">
                              <span className="text-gray-700 font-medium text-sm">{item.service}</span>
                              <span className="text-gray-600 font-bold text-sm">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Other Services */}
                {services.map((service, index) => (
                  <div key={index} className="space-y-4">
                    <p className="text-2xl font-script text-center text-gray-700 border-b border-gray-300 pb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
                      {service.category}
                    </p>
                    <div className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-center py-1">
                          <span className="text-gray-700 font-medium">{item.service}</span>
                          <span className="text-gray-600 font-bold">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Section */}
              <div className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 p-6 overflow-hidden">
                <div className="absolute bottom-4 left-8 w-32 h-1 bg-gradient-to-r from-green-400 to-yellow-600 transform rotate-12"></div>
                <div className="absolute bottom-6 left-12 w-24 h-0.5 bg-gradient-to-r from-green-400 to-yellow-600 transform rotate-12"></div>

                <div className="absolute bottom-8 left-4 w-8 h-8 bg-yellow-400/20 rounded-full"></div>
                <div className="absolute bottom-12 left-8 w-4 h-4 bg-yellow-300/30 rounded-full"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Image
                        src="/images/river-salon-and-day-spa.avif"
                        width={100}
                        height={100}
                        alt="River Day Spa"
                        className="h-16 w-auto"
                        priority
                      />
                    </div>
                    <div className="text-white">
                      <p className="text-sm">@RiverDaySpa</p>
                      <a href="https://www.riverdayspa.className=" text-sm>www.riverdayspa.com</a>
                    </div>
                  </div>
                  <div className="text-white text-right">
                    <p className="text-sm font-medium">Call now to book your appointment:</p>
                    <p className="text-lg font-bold">Tel: +91 82878 11111</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
        `}</style>
      </div>
    </>
  )
}