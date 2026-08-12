'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomImage from './CustomImage'
import { bodyScrubImageData } from '../data/bodyScrubImageData'
import { getBodyScrubServiceImage } from '../data/bodyScrubServiceImages'

const scrubServices = [
  {
    title: "Chocolate Scrub",
    description: "It works medicinally and rejuvenates your mind and body. It not only uplifts your mood but also cleans the body, leaving the skin glowing beneath a layer of luxurious chocolate. Antioxidants in our chocolate scrub protect your skin from sun tan and UV rays, enhancing your natural glow.",
    link: "/best-chocolate-body-scrub-massage-center"
  },
  {
    title: "Coffee Scrub",
    description: "We use all-natural coffee in our scrubs for reducing inflammation and improving blood flow. We truly believe that our coffee scrubs rejuvenate skin, leaving it full of life and freshness. And the smell of coffee? That's an added indulgence within the self-care ritual.",
    link: "/coffee-scrub-massage-spa"
  },
  {
    title: "Fruit Scrub",
    description: "Choose a fruit scrub to exfoliate and brighten your skin. Let our scrubs hydrate essentially, while our moisturizers maintain softness and suppleness in your skin. Deep pore cleansing with our chemical-free formulas allows for a natural refreshing experience.",
    link: "/fruit-body-scrub-in-chennai"
  },
  {
    title: "Lemon Grass Scrub",
    description: "Our lemongrass scrub is very good for oily skin, as it reduces the acne and pimples, while refreshing the essence of lemongrass rejuvenates your skin. Unlike so many other scrubs, it does not leave the skin dry, but keeps it hydrated, fresh with a renewed glow and healthiness.",
    link: "/best-lemongrass-scrub-massage-center"
  },
  {
    title: "Sea Salt Scrub",
    description: "The sea salt scrub efficiently exfoliates skin, removing the dull, dead dermal layer that gives a darker hue to skin. Not only does this give a healthy shine, but firming of skin occurs with it, giving one a younger look in years and radiance. Suitable for oily skin, sea salt scrub works its magic in places on the feet, knuckles, elbows, and legs.",
    link: "/best-sea-salt-scrub-massage"
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true }
}

export default function BodyScrubCenterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${bodyScrubImageData.hero.src}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8D7B68]/30 via-[#8D7B68]/20 to-[#8D7B68]/30" />

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            The Best Body Scrub Parlour in Chennai!
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <motion.div className="text-center mb-16" {...fadeUp}>
          <h1 className="text-xl md:text-2xl font-bold text-[#8D7B68] mb-6">
            Best Body Scrub Massage Center - Uncover the Ultimate Experience at Our Luxury Spa
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-4">
                Exfoliation is often considered one of the best methods of cleaning the dermal layer of skin, removing dead cell layers, hence bringing out a new, soft layer beneath them. Our signature scrubbing technique at <Link href="/spa-massage-egmore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Day Spa in Chennai</Link> involves aromatic extracts and natural granules that remove dead skin, leaving it silky smooth.
              </p>
              <p className="text-[#3E3636]/90 text-base text-justify leading-relaxed">
                It nourishes with oils that will only slough off the dead cells but hydrate the skin right inside. Rejuvenating treatment that carries out skin with a soft finish to the touch, without leaving your skin refreshed, cleaned, and beautifully supple.
              </p>
            </div>
            <div className="md:w-1/2 flex flex-col items-center">
              <CustomImage
                src={bodyScrubImageData.content.src}
                alt={bodyScrubImageData.content.alt}
                width={500}
                height={300}
                className="rounded-3xl shadow-xl w-full h-auto lg:h-[400px] object-cover transform -rotate-0 transition-transform duration-300 hover:rotate-2"
              />
            </div>
          </div>
        </motion.div>

        {/* Package Section */}
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
              background: 'linear-gradient(145deg, #f0f0f0, #cacaca)',
              boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff'
            }}
          >
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-3xl font-bold text-[#8D7B68] mb-6"
                {...fadeUp}
              >
                Best Body Scrub Massage Spa - River Salon and Day Spa
              </motion.h2>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                At River Day Spa, our team of accomplished therapists and healers understands the growing need for nourishment and cleansing of the skin. We continue to ensure that at River Day Spa, we afford our clients expert <Link href="https://www.riverdayspa.com/best-body-massage-center" className="text-green-600 font-semibold hover:text-green-500 transition-colors">scrubs and massages</Link> that help fight the signs of aging, wrinkles, with incredible finesse. Welcome glowing, radiant skin and recapture your youthful glow that will leave you smiling from ear to ear.
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

        {/* Services Description */}
        <div className="text-center mb-16">
          <motion.h3 className="text-3xl font-bold text-[#8D7B68] mb-4" {...fadeUp}>
            Best Body Scrub Massage Service in Chennai
          </motion.h3>
          <motion.p className="text-2xl font-semibold text-[#8D7B68]/80 mb-6" {...fadeUp}>
            Reveal a Softer, Smoother You with Our Signature Body Scrub Services
          </motion.p>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-8" />
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-[#3E3636]/90 text-base leading-relaxed">
              Pamper yourself regularly by availing yourself of the expertise of licensed therapists at <strong className="text-[#8D7B68] font-bold">River Salon and Day Spa.</strong> Our scrubs are infused with natural moisturizers that will leave your skin silky smooth. Let our professional healers and beauticians work magic on the enhancement of your skin texture.
            </p>
            <p className="text-[#3E3636]/90 text-base leading-relaxed">
              Exfoliation opens your skin to being able to absorb more moisture, hence making it well-hydrated and radiant. Our focus is unblocking pores and rejuvenating your skin, hence making it vibrant and radiant. Exploring the <span className="text-[#8D7B68] font-bold">Body Scrubs</span> of River Day Spa at <span className="text-[#8D7B68] font-bold">Chennai, Vellore, Bangalore, Coimbatore, Tirupur, and</span> <Link href="/massage-spa-in-trichy" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Trichy</Link> will make you really fall in love with yourself.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {scrubServices.map((service, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#A9907E]/20">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <CustomImage
                    src={getBodyScrubServiceImage(service.title)?.localPath || '/images/services/body-scrub/default-scrub.jpg'}
                    alt={getBodyScrubServiceImage(service.title)?.alt || service.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-xl font-bold text-[#8D7B68] mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </p>
                <p className="text-[#3E3636]/80 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link href={service.link}>
                  <motion.button
                    className="w-full py-2 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
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
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-6"
            {...fadeUp}
          >
            Transform Your Skin Today
          </motion.h3>
          <motion.p
            className="text-[#3E3636]/90 text-lg leading-relaxed mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Book your body scrub treatment today and discover the difference our premium services can make. Our experienced therapists are ready to help you achieve the smooth, radiant skin you deserve.
          </motion.p>
          <Link href="/book-spa-service-appointment">
            <motion.button
              className="px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg, #10b981, #059669)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 12px 40px 0 rgba(16, 185, 129, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Treatment
            </motion.button>
          </Link>
        </motion.section>
      </div>
    </div>
  )
}