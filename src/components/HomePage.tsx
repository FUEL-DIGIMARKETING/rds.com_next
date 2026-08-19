'use client'

import React, { useEffect, useState } from "react"
import Link from 'next/link'
import CustomImage from './CustomImage'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Hand, Leaf, Flower2, Droplets, HeartPulse, Sparkles, Flower, ChevronLeft, ChevronRight } from "lucide-react"
import BlogSection from './BlogSection'
import HeroSection from './HeroSection'
import { smoothScrollToTop, optimizeScrollPerformance } from '@/utils/scrollUtils'
import { homeImageData } from '../data/homeImageData'
import AppLaunchBanner from './AppLaunchBanner'
import LocationContainer from './LocationContainer'

// Smooth fade-up animation variants
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true }
}

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true }
}

interface HomePageProps {
  recentBlogs?: any[]
}

const HomePage = ({ recentBlogs = [] }: HomePageProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMore, setShowMore] = useState<boolean[]>([])
  const [carouselIndex, setCarouselIndex] = useState(0)
  const { cardData } = homeImageData

  const carouselImages = [
    '/images/rdswebbanner.jpeg',
    '/images/best-spa-coimbatore.png'
  ]

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const toggleMore = (index: number) => {
    setShowMore((prev) => {
      const newShowMore = [...prev]
      newShowMore[index] = !newShowMore[index]
      return newShowMore
    })
  }

  const scrollToTop = () => {
    smoothScrollToTop()
  }

  useEffect(() => {
    optimizeScrollPerformance()
  }, [])

  const galleryItems = homeImageData.galleryItems

  const reviews = [
    {
      id: 1,
      name: "Rani Khapuri",
      review: "It should feel peaceful and comfortable, which means it must look and smell good. We've all said it when we've walked into a great spa: \"That smells lovely!\"",
    },
    {
      id: 2,
      name: "AK AK",
      review: "I took Aroma Massage, it is very good ..I took steam bath, it is really nice... very friendly, and communication also very good....I recommended to my friends also",
    },
    {
      id: 3,
      name: "Vasuki Moka",
      review: "The therapists are very good at what they do the place is clean. The spa experience was very very satisfactory. However the same side needs some more attention.",
    },
  ]

  const treatments = [
    {
      name: "Deep Tissue Massage",
      icon: <Hand />,
      description: "It relieves chronic muscle tension and enhances flexibility with deep, concentrated stress treatment.",
      image: "/images/deep-tissue-massage.webp"
    },
    {
      name: "Body Wrap Treatments",
      icon: <Leaf />,
      description: "Nourish your skin and detoxify your body with soft, refreshing body wraps.",
      image: "/images/best-massage-centres.webp"
    },
    {
      name: "Combining Body Massage & Spa Therapy",
      icon: <HeartPulse />,
      description: "Here, you can experience complete peace with an ideal blend of massage and spa renewal.",
      image: "/images/best-body-massage.webp"
    },
    {
      name: "Body Scrub Treatment",
      icon: <Droplets />,
      description: "Our gentle exfoliation refreshes your skin for a smooth, bright, and youthful glow.",
      image: "/images/body-scrub-massage.webp"
    },
    {
      name: "Detoxifying Massage",
      icon: <Sparkles />,
      description: "It flushes out toxins, boosts circulation, and restores your body’s natural balance.",
      image: "/images/best-massage-spa.webp"
    },
    {
      name: "Ayurvedic Body Massage",
      icon: <Flower />,
      description: "It helps to achieve inner peace via ancient Ayurvedic oils and healing touch therapy.",
      image: "/images/best-ayurvedic-massage.webp"
    },
  ]

  const [selectedTreatment, setSelectedTreatment] = useState(0)
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  }

  return (
    <div className="w-full overflow-x-hidden select-text bg-[#F8F5F0] smooth-scroll" style={{ userSelect: 'text', WebkitUserSelect: 'text', MozUserSelect: 'text' }}>
      <AppLaunchBanner />
      <HeroSection />

      {/* Main Content Section with Black Overlay */}
      <section
        className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative w-full select-text bg-gradient-to-br from-[#F8F5F0] to-[#EAE0D5]"
      >


        {/* Section Title */}
        <div className="text-center mb-16 select-text">
          <motion.h1
            className="text-2xl lg:text-4xl font-extrabold text-[#8D7B68] mb-6 select-text"
            {...fadeUp}
          >
            Best Spa in Chennai Offers Gateway to Blissful Escape
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />

        </div>

        {/* Flex Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full select-text">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left select-text"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-2xl sm:text-3xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              River Salon Day Spa
            </motion.p>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-8 select-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              River Day Spa has been in the spa and beauty treatment business since 2000. Our expertise provides professional Body massages to our customers. <span className="text-[#3E3636] font-bold">River Salon and Day Spa</span> staff are experts and professionals who qualify as professionally trained beauticians and healers. Our experienced group offers excellent services to our customers with exclusive massages, healing, refreshments, and professional Salon services to enhance your health and beauty. It's time to boost your beauty and wellness with a qualified hand masseuse at our <Link href="/body-massage-in-chennai-egmore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Spa in Chennai.</Link> Select from our special spa packages!
            </motion.p>
          </motion.div>

          {/* Right Content - Carousel and Button */}
          <motion.div
            className="relative w-full flex flex-col justify-center items-center gap-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-black w-full max-w-lg"
            >
              <div className="relative h-70 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={carouselIndex}
                    src={carouselImages[carouselIndex]}
                    alt="App Promotion"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                  onClick={() => setCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setCarouselIndex((prev) => (prev + 1) % carouselImages.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCarouselIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === carouselIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                        }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

           {/* App Download Buttons */}
<motion.div
  className="flex flex-col sm:flex-row gap-4 w-full max-w-lg"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Google Play */}
  <motion.a
    href="https://play.google.com/store/apps/details?id=com.riverdayspa.booking&pcampaignid=web_share"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex-1 bg-black hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
  >
    <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
    <span>Google Play</span>
  </motion.a>

  {/* App Store */}
  <motion.a
    href="https://apps.apple.com/in/app/river-salon-spa-booking/id6761760106"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
  >
    {/* Apple Icon */}
    <svg
      className="w-6 h-6 md:w-7 md:h-7"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16.365 1.43c0 1.14-.465 2.22-1.24 3.02-.82.84-2.15 1.49-3.28 1.4-.14-1.08.42-2.24 1.2-3.04.8-.83 2.2-1.45 3.32-1.38zM20.94 17.22c-.46 1.06-1.02 2.03-1.73 2.97-.96 1.26-2.18 2.83-3.69 2.85-1.34.02-1.68-.87-3.5-.87-1.83 0-2.2.85-3.53.89-1.45.05-2.56-1.45-3.52-2.7-2.7-3.6-2.98-7.82-1.32-10.28.82-1.22 2.3-2 3.85-2.02 1.4-.02 2.73.94 3.5.94.76 0 2.37-1.16 3.99-.99.68.03 2.58.28 3.8 2.06-3.34 1.83-2.8 6.53.15 7.15z" />
    </svg>
    <span>App Store</span>
  </motion.a>
</motion.div>
          </motion.div>
        </div>
      </section>
      {/* Moroccan Bath Section */}
      <section className="py-16 px-4 md:px-8 lg:px-[100px] mt-20 relative overflow-hidden w-full select-text z-30">
        <div
          className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/30 relative overflow-hidden p-8 md:p-12"
          style={{
            boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1), 0 -25px 45px rgba(0, 0, 0, 0.05), 25px 0 45px rgba(0, 0, 0, 0.05), -25px 0 45px rgba(0, 0, 0, 0.05)'
          }}
        >
          <div className="text-center mb-12">
            <motion.p
              className="text-3xl lg:text-4xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              Introducing Moroccan Bath In India
            </motion.p>
            <motion.div
              className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Left Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-gray-200 rounded-3xl">
                  <CustomImage
                    className="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4 border-[#A9907E]/50 bg-gray-200"
                    src={homeImageData.moroccanBath.src}
                    alt={homeImageData.moroccanBath.alt}
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#3E3636]/20 to-transparent" />
              </div>
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left select-text">
              <motion.p
                className="text-2xl lg:text-3xl font-extrabold text-[#8D7B68] mb-6 select-text"
                {...fadeUp}
              >
                Moroccan Bath
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-justify text-base leading-relaxed select-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Have you ever known about the bath of Morocco? The <Link href="/best-moroccan-bath-massage-in-bangalore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">traditional Moroccan Bath</Link> supplies the best refreshment and renew for your body. Get the experiences in River Salon and Day Spa. <br /><br />
                The most classic Moroccan Bath was followed in the Turkish and Roman cultures. It is a unique experience and knows the Moroccan Hammam bath. First, it displayed the way of "Bathhouse" by the Roman Empire to build and establish public hygiene.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Treatments Section */}
      <section className="py-16 bg-gradient-to-br from-[#F8F5F0] to-[#EAE0D5] text-[#3E3636] w-full select-text" >
        <div className="max-w-7xl mx-auto px-4 select-text">
          <div className="text-center mb-16">
            <motion.p
              className="text-4xl lg:text-5xl font-bold text-[#8D7B68] mb-8 select-text flex items-center justify-center"
              {...fadeUp}
              itemProp="name"
            >
              <Leaf className="mr-3 text-green-600" size={48} />
              Spa Treatments
            </motion.p>
            <motion.div
              className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-xl text-[#3E3636]/80 select-text font-medium "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              itemProp="description"
            >
              Peaceful Rejuvenation Oasis At Our Best Spa In Chennai
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left - Treatment List */}
            <div className="lg:col-span-2 space-y-3">
              {treatments.map((treatment, index) => (
                <button
                  key={index}
                  className={`w-full p-5 rounded-2xl transition-all duration-500 border-2 text-left group relative overflow-hidden ${selectedTreatment === index
                    ? 'bg-gradient-to-r from-green-600 to-green-500 border-green-600 shadow-2xl transform scale-105'
                    : 'bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-green-50 hover:border-green-400 hover:shadow-lg'
                    }`}
                  onClick={() => setSelectedTreatment(index)}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div
                      className={`text-3xl transition-all duration-300 ${selectedTreatment === index ? 'text-white' : 'text-green-600 group-hover:text-green-700'
                        }`}
                    >
                      {treatment.icon}
                    </div>
                    <div className="flex-1">
                      <p className={`text-lg font-bold transition-all duration-300 ${selectedTreatment === index ? 'text-white' : 'text-[#3E3636] group-hover:text-green-700'
                        }`}>
                        {treatment.name}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right - Treatment Image */}
            <div className="lg:col-span-3">
              <div className="relative select-text" key={selectedTreatment}>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-2">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="bg-gray-200 rounded-2xl">
                      <CustomImage
                        src={treatments[selectedTreatment].image}
                        alt={treatments[selectedTreatment].name}
                        width={600}
                        height={450}
                        className="w-full h-[450px] object-cover bg-gray-200"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 720px"
                        unoptimized={false}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <p className="text-3xl font-bold mb-4 select-text" itemProp="name">
                        {treatments[selectedTreatment].name}
                      </p>
                      <p className="text-gray-200 text-lg leading-relaxed select-text mb-6" itemProp="description">
                        {treatments[selectedTreatment].description}
                      </p>
                      <Link href="/book-spa-service-appointment/">
                        <button className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-500 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                          Book This Treatment
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#F8F5F0] text-[#3E3636] w-full select-text" >
        <div className="flex flex-col items-center text-center mb-12 select-text">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-[#8D7B68] mb-6 select-text"
            {...fadeUp}
            itemProp="name"
          >
            Meet Where the Wellness Wonder in Our Best Body Massage Spa in Chennai
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 select-text">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent bg-gradient-to-r from-[#A9907E] to-[#8D7B68] p-[2px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}

            >
              <div className="relative overflow-hidden rounded-3xl bg-white p-1">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-200 rounded-3xl"
                >
                  <CustomImage
                    src={card.img}
                    alt={card.alt}
                    width={400}
                    height={320}
                    className="w-full h-80 object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105 bg-gray-200"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-[#3E3636]/70 backdrop-blur-md flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-3xl">
                  <p className="text-lg font-semibold text-white" itemProp="name">{card.title}</p>
                  <p className="text-xs text-gray-200 mt-2" itemProp="description">{card.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Couple Massage Section */}
      <section className="relative py-8 bg-[#EAE0D5] text-[#3E3636] w-full select-text" >
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-96 h-96 bg-[#A9907E]/20 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-8 lg:px-16 relative z-10 select-text">
          <motion.div
            className="bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-2xl lg:w-1/2 border border-white/30 select-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
              itemProp="name"
            >
              Nourish Your Soul: Embrace the Art of Relaxation with Couples Massage
            </motion.h3>
            <motion.div
              className="w-20 h-1 bg-green-600 rounded-full mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />

            <p className="text-[#3E3636]/90 text-base text-justify leading-relaxed mt-4 select-text" itemProp="description">
              River Salon and Day Spa provides a unique experience of spending time with your partner or friend while getting a massage. We have an exclusive <Link href="/best-couple-massage-center" className="text-green-600 hover:text-green-500 transition-colors">couple massage in Chennai,</Link> offering time to catch the <strong>best package for Couples.</strong> It can also be a time to catch up or bond with one's family while receiving a massage, including discounts.
            </p>

            <p className="text-[#3E3636]/90 text-base text-justify leading-relaxed mt-4 select-text">
              One primary source of stress these days is work-related stress. Visit Our Best Body Massage Spa in Chennai whenever you feel like taking a break from your daily schedule to unwind.
            </p>

            <Link href="/best-couples-spa-packages">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg border border-green-600 transition-all duration-300"
              >
                Book an Appointment
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            className="relative lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-200 rounded-3xl"
            >
              <CustomImage
                className="rounded-3xl shadow-lg w-full lg:w-[100%] lg:h-[580px] object-cover transition-transform duration-300 hover:scale-105 bg-gray-200"
                src={homeImageData.coupleImage.src}
                alt={homeImageData.coupleImage.alt}
                width={600}
                height={580}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-16 px-4 sm:px-8 lg:px-16 bg-[#F8F5F0] w-full select-text" >
        <motion.div
          className="text-center mb-12 select-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h4
            className="text-xl sm:text-3xl font-extrabold text-[#8D7B68] tracking-tight mb-6 select-text"
            {...fadeUp}
            itemProp="name"
          >
            Our Luxury Spa Facilities - Photo Gallery
          </motion.h4>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="my-8"
        >
          {galleryItems.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                className="relative group overflow-hidden rounded-xl shadow-lg bg-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.id * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}

              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-200 rounded-xl h-full"
                  >
                    <CustomImage
                      src={item.image}
                      alt={item.alt}
                      width={400}
                      height={256}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 bg-gray-200"
                      loading="lazy"
                      itemProp="contentUrl"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-50 transition-opacity duration-300" />
                </div>

                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-[#3E3636] mb-2" itemProp="name">{item.title}</p>
                </div>

                <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col justify-center items-center text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 rounded-xl">
                  <p className="text-xl font-bold mb-3 animate-fadeInUp">{item.title}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-[#EAE0D5] text-[#3E3636] w-full select-text">
        <motion.div
          className="text-center mb-12 select-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h5
            className="text-xl lg:text-3xl font-extrabold text-[#8D7B68] relative inline-block select-text mb-6"
            {...fadeUp}
            itemProp="name"
          >
            Your Oasis of Serenity in the City
          </motion.h5>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full mt-2"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-center bg-white/50 backdrop-blur-lg rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="lg:w-1/2 w-full text-[#3E3636]/90 p-6 sm:p-8 lg:p-10 select-text">
            <p className="mb-6 text-base text-justify leading-relaxed select-text" itemProp="description">
              River Salon and Day Spa uses widely recognized and highly praised products at our spa locations. Right in the middle of Chennai, our signature speciality massage therapies provide a peaceful retreat using natural and well-known spa products.
            </p>

            <div className="mb-8">
              <p className="lg:text-lg font-semibold text-[#8D7B68] mb-4 select-text">Locations</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: "Chennai" },
                  { name: "Bangalore" },
                  { name: "Coimbatore RS Puram" },
                  { name: "RS Puram Elite" },
                  { name: "Vellore" },
                  { name: "Katpadi" },
                  { name: "Vellore Bypass" },
                  { name: "Tirupur" },
                  { name: "Tirupur Rayapuram" },
                  { name: "Trichy" },
                ].map(({ name }, index) => (
                  <p key={index} className="text-sm text-green-600 text-nowrap hover:text-green-500 transition duration-300 font-medium cursor-pointer select-text">
                    {name}
                  </p>
                ))}
              </div>
            </div>

            <p className="text-base text-justify leading-relaxed select-text">
              Every one of our locations has plenty of room and parking facilities. When clients come for a massage or any other salon or body scrub service, we guarantee the utmost professional treatment.
            </p>
          </div>

          <motion.div
            className="lg:w-1/2 w-full flex justify-center relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-200 rounded-3xl"
            >
              <CustomImage
                className="rounded-3xl shadow-md w-full h-[350px] lg:w-[100%] object-cover transform hover:scale-102 transition-transform duration-300 bg-gray-200"
                src={homeImageData.locationImage.src}
                alt={homeImageData.locationImage.alt}
                width={600}
                height={350}
                itemProp="image"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#3E3636]/30 via-transparent to-transparent rounded-3xl" />
          </motion.div>
        </motion.div>
      </section>

      {/* Location Container Section with Map */}
        
      {/* Reviews Section */}
      <section
        className="relative w-full py-16 bg-cover bg-center"
        style={{
          backgroundImage: `url('${homeImageData.reviewsBackground.src}')`
        }}

      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative py-12 px-4 sm:px-8 lg:px-16 text-center z-10">
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-12 text-white"
            {...fadeUp}
            itemProp="name"
          >
            Client Spa Experiences
          </motion.p>
          <motion.div
            className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-12"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />

          <div className="max-w-3xl mx-auto">
            <motion.div
              key={currentReview}
              className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}

            >
              <p className="text-lg italic mb-6 text-[#3E3636] leading-relaxed" >
                "{reviews[currentReview].review}"
              </p>
              <div className="flex items-center justify-center gap-3"  >
                <div className="w-12 h-12 bg-[#8D7B68] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {reviews[currentReview].name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-[#8D7B68] text-lg" >{reviews[currentReview].name}</p>
              </div>
              <div style={{ display: 'none' }}>
                <span itemProp="name">River Salon and Day Spa</span>
                <span itemProp="url">https://riverdayspa.com</span>
              </div>
            </motion.div>

            <div className="flex justify-center mt-6 gap-2">
              {reviews.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentReview ? 'bg-white' : 'bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Location and Services Section */}
      <section className="relative w-full h-full bg-cover bg-center py-16 lg:px-48 sm:bg-contain md:bg-cover bg-gradient-to-br from-[#F8F5F0] via-[#F8F5F0] to-[#F8F5F0] text-[#3E3636]">
        <div className="flex flex-col items-center justify-center mt-8 px-4 sm:px-8 lg:px-28 space-y-6">
          <h6 className="text-xl sm:text-2xl lg:text-3xl text-center font-bold text-[#8D7B68] my-5 relative inline-block">
            Embrace the Essence of Tranquility at Our Massage Centers
            <span className="block h-1 w-16 bg-green-500 mx-auto mt-2 rounded-full"></span>
          </h6>

          <p className="text-[#3E3636] text-base sm:text-base md:text-base text-justify leading-relaxed">
            We have established numerous branches in and around Tamil Nadu cities to serve our clientele better. Multiple locations in your area are home to one of our spas. Both local trains and public transport can easily reach the locations where we are situated. Our spas are in Bangalore, Coimbatore, Chennai, Vellore, Trichy, and Tirupur are our branches. Our presence in additional states grows as more people become aware of our services.
          </p>

          <p className="text-[#3E3636] text-base sm:text-base md:text-base text-justify leading-relaxed">
            To provide our services to more clients, we are expanding our branches into major cities. We operate a multi-spa centre in one location, so you choose the nearest spot to you, <span className="italic">Chennai, Vellore, Bangalore, Trichy, Tirupur, and Coimbatore</span>. <Link href="/book-spa-service-appointment" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Body Massage Centre: book your slot</Link> and refresh your body, mind and soul. Finding our outlets will be easy because we are situated in desirable areas.
          </p>

          <p className="text-[#3E3636] text-base sm:text-base md:text-base text-justify leading-relaxed">
            River Salon and Day Spa offer clients a great experience in body massage and other beauty services at our locations. Our spa and salon services rejuvenate the energy and the surface of the skin and the hair. Our clients have relished our massage services, which help change wrinkles and aging on the skin.
          </p>

          <p className="text-[#3E3636] text-base sm:text-base md:text-base text-justify leading-relaxed">
            Our <Link href="/spa-massage-coimbatore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Best Body Massage Spa in Coimbatore</Link>. Locals in the area are aware of it for its services. In Coimbatore, we're well-known for our body scrubs, massages, and wraps services in R.S Puram. Our spots cover Gandhipuram, Periyanaickenpalayam, Avinashi Road, Thudiyalur, Gobichettipalayam, and Goundampalayam. As a spa, we strive to ensure our clients' overall well-being.
          </p>

          <p className="text-[#3E3636] text-base sm:text-base md:text-base text-justify leading-relaxed">
            To unleash the power within you and your family and friends, contact us to arrange a wonderful spa treatment day at the most excellent centres <span className="font-bold italic">in Chennai, Coimbatore, Bangalore, Vellore, Tirupur, and Trichy.</span>
          </p>
        </div>
      </section>

      {/* Personal Sanctuary Section */}
      <section
        className="relative w-full py-16 select-text bg-cover bg-center"
        style={{
          backgroundImage: `url('${homeImageData.ctaBackground.src}')`
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
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-[#8D7B68] mb-6 select-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Your Personal Sanctuary Treatments Now in River Salon and Day Spa
            </motion.p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8">
              We provide a variety of massages to our clients that are distinctive and help them achieve various wellness. These include <Link href="/best-deep-tissue-massage-center" className="text-green-400 font-semibold hover:text-green-300 transition-colors">deep tissue therapy</Link>, <Link href="/best-thai-body-massage-center" className="text-green-400 font-semibold hover:text-green-300 transition-colors">Thai massage</Link>, <Link href="/best-foot-reflexology-massage" className="text-green-400 font-semibold hover:text-green-300 transition-colors">foot reflexology</Link>, <Link href="/best-ayurvedic-massage-spa" className="text-green-400 font-semibold hover:text-green-300 transition-colors">ayurvedic</Link> and many other massages that help our clients heal from a wide range of pains. The overall well-being of our clients is our goal as therapists at Riverday Spa. Our treatments have made our clients feel younger and more elegant while relieving pain. We are a therapeutic facility that also monitors current beauty and fashion trends.
            </p>

            <motion.button
              className="bg-gradient-to-r from-green-600 to-green-400 text-white text-lg font-semibold py-4 px-12 rounded-full shadow-lg hover:from-green-500 hover:to-green-300 hover:shadow-green-400/50 transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
               <a href="tel:+919500029234">Book Now</a>
            </motion.button>
          </div>
        </div>
      </section>

      <BlogSection blogs={recentBlogs} />
    </div>
  )
}

export default HomePage