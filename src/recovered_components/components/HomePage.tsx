'use client'

import React, { useEffect, useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Slider from 'react-slick'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Hand, Leaf, Droplets, HeartPulse, Sparkles, Flower } from "lucide-react"
import BlogSection from './sections/BlogSection'
import HeroSection from './HeroSection'

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

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMore, setShowMore] = useState<boolean[]>([])

  const cardData = [
    {
      img: "https://www.riverdayspa.com/asset/spa-in-bangalore.webp",
      alt: "spa-in-bangalore",
      title: "Dedicated & Quality Therapists",
      text: "Our group consists of healers skilled in massage therapy and spa treatments. Our healers are understanding and amiable. Every customer has specific needs, and we adapt our services to meet the proper treatment for their needs.",
    },
    {
      img: "https://www.riverdayspa.com/asset/body-spa-trichy.webp",
      alt: "body-spa-trichy",
      title: "Pamper Yourself, Exceptional Service Awaits For You",
      text: 'We provide "Customer Service" that is unbeatable. Every client is unique, and they all arrive with different expectations; we provide our services in a cherished way.',
    },
    {
      img: "https://www.riverdayspa.com/asset/body-massage-in-coimbatore.jpg",
      alt: "body-massage-in-coimbatore",
      title: "Aesthetic",
      text: "Our spa has a unique design that appeals to the senses. The way it's constructed encourages total sensory relaxation. In addition to using aromatic oils to promote relaxation.",
    },
  ]

  const toggleMore = (index: number) => {
    setShowMore((prev) => {
      const newShowMore = [...prev]
      newShowMore[index] = !newShowMore[index]
      return newShowMore
    })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const galleryItems = [
    {
      id: 1,
      image: "https://www.riverdayspa.com/asset/coimbatore-images.webp",
      title: "Coimbatore",
    },
    {
      id: 2,
      image: "https://www.riverdayspa.com/asset/body-scrub-massage-in-chennai.jpeg",
      title: "Chennai",
    },
    {
      id: 3,
      image: "https://www.riverdayspa.com/asset/bangalore.jpeg",
      title: "Bangalore",
    },
    {
      id: 4,
      image: "https://www.riverdayspa.com/asset/massage-centres-in-tirupur.jpg",
      title: "Tirupur",
    },
    {
      id: 5,
      image: "https://www.riverdayspa.com/asset/spa-interior-vellore.webp",
      title: "Trichy",
    },
    {
      id: 6,
      image: "https://www.riverdayspa.com/asset/vellore-image.webp",
      title: "Vellore",
    },
  ]

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
      description: "Targets deeper layers of muscle and connective tissue to relieve chronic pain and tension.",
      image: "https://www.riverdayspa.com/asset/deep-tissue-massage.webp"
    },
    {
      name: "Body Wrap Treatments",
      icon: <Leaf />,
      description: "Nourishing body wraps that detoxify, hydrate, and rejuvenate your skin naturally.",
      image: "https://www.riverdayspa.com/asset/body-wrap-treatment.webp"
    },
    {
      name: "Combining Body Massage & Spa Therapy",
      icon: <HeartPulse />,
      description: "Complete wellness experience combining therapeutic massage with spa treatments.",
      image: "https://www.riverdayspa.com/asset/spa-therapy-combination.webp"
    },
    {
      name: "Body Scrub Treatment",
      icon: <Droplets />,
      description: "Exfoliating treatments that remove dead skin cells and reveal smooth, glowing skin.",
      image: "https://www.riverdayspa.com/asset/body-scrub-massage-in-chennai.jpeg"
    },
    {
      name: "Detoxifying Massage",
      icon: <Sparkles />,
      description: "Specialized massage techniques that help eliminate toxins and boost circulation.",
      image: "https://www.riverdayspa.com/asset/detox-massage.webp"
    },
    {
      name: "Ayurvedic Body Massage",
      icon: <Flower />,
      description: "Traditional Ayurvedic healing massage using natural oils and ancient techniques.",
      image: "https://www.riverdayspa.com/asset/ayurvedic-massage.webp"
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
    <div className="w-full overflow-x-hidden select-text bg-[#F8F5F0]" style={{ userSelect: 'text', WebkitUserSelect: 'text', MozUserSelect: 'text' }}>
      <HeroSection />

      {/* Main Content Section */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative bg-[#F8F5F0] text-[#3E3636] w-full select-text">
        {/* Section Title */}
        <div className="text-center mb-16 select-text relative z-30">
          <motion.h1
            className="text-2xl lg:text-4xl font-extrabold text-[#8D7B68] mb-6 select-text relative z-40"
            {...fadeUp}
          >
            Best Spa in Chennai Offers Gateway to Blissful Escape
          </motion.h1>
          <div className="w-20 h-1 bg-green-600 mx-auto rounded-full relative z-40" />
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
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
            >
              River Salon Day Spa
            </motion.h2>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-8 relative select-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              River Day Spa has been in the spa and beauty treatment business since 2000. Our expertise provides professional Body massages to our customers. <span className="text-[#3E3636] font-bold">River Salon and Day Spa</span> staff are experts and professionals who qualify as professionally trained beauticians and healers. Our experienced group offers excellent services to our customers with exclusive massages, healing, refreshments, and professional Salon services to enhance your health and beauty. It's time to boost your beauty and wellness with a qualified hand masseuse at our <Link href="/body-massage-in-chennai-egmore" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Spa in Chennai.</Link> Select from our special spa packages!
            </motion.p>
          </motion.div>

          {/* Right Content - Video */}
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
              <video
                className="rounded-2xl shadow-2xl border-4 border-[#A9907E]/30 w-full max-w-lg"
                src="https://www.riverdayspa.com/assets/best-spa-services-youtube-video-BDEfZlEP.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#A9907E]/20 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>

        {/* Moroccan Bath Section */}
        <section className="py-16 px-4 md:px-8 mt-20 bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 relative overflow-hidden w-full select-text z-30">
          <div className="text-center mb-12 relative z-40">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-[#8D7B68] mb-6 select-text relative z-50"
              {...fadeUp}
            >
              Introducing Moroccan Bath In India
            </motion.h2>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-8 relative z-50" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 w-full">
            {/* Left Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-gray-200 rounded-3xl">
                  <Image
                    className="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4 border-[#A9907E]/50 bg-gray-200"
                    src="https://www.riverdayspa.com/asset/moroccan-bath-in-bangalore.webp"
                    alt="moroccan-bath-in-bangalore"
                    width={400}
                    height={300}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#3E3636]/20 to-transparent" />
              </div>
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left select-text">
              <motion.h3
                className="text-2xl lg:text-3xl font-extrabold text-[#8D7B68] mb-6 select-text"
                {...fadeUp}
              >
                Moroccan Bath
              </motion.h3>
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
        </section>
      </section>

      {/* Spa Treatments Section */}
      <section className="py-16 bg-gradient-to-br from-[#F8F5F0] to-[#EAE0D5] text-[#3E3636] w-full select-text" itemScope itemType="https://schema.org/Service">
        <div className="max-w-7xl mx-auto px-4 select-text">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
              itemProp="name"
            >
              <span className="mr-3">🌿</span>
              Spa Treatments
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-6" />
            <motion.p
              className="text-xl text-[#3E3636]/80 select-text font-medium"
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
                      <h3 className={`text-lg font-bold transition-all duration-300 ${selectedTreatment === index ? 'text-white' : 'text-[#3E3636] group-hover:text-green-700'
                        }`}>
                        {treatment.name}
                      </h3>
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
                      <Image
                        src={treatments[selectedTreatment].image}
                        alt={treatments[selectedTreatment].name}
                        width={600}
                        height={450}
                        className="w-full h-[450px] object-cover bg-gray-200"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-3xl font-bold mb-4 select-text" itemProp="name">
                        {treatments[selectedTreatment].name}
                      </h3>
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
      <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#F8F5F0] text-[#3E3636] w-full select-text" itemScope itemType="https://schema.org/Service">
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
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white p-1">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-200 rounded-3xl"
                >
                  <Image
                    src={card.img}
                    alt={card.alt}
                    width={400}
                    height={320}
                    className="w-full h-80 object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105 bg-gray-200"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </motion.div>

                <div className="absolute inset-0 bg-[#3E3636]/70 backdrop-blur-md flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-3xl">
                  <h2 className="text-lg font-semibold text-white" itemProp="name">{card.title}</h2>
                  <p className="text-xs text-gray-200 mt-2" itemProp="description">{card.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Couple Massage Section */}
      <section className="relative py-8 bg-[#EAE0D5] text-[#3E3636] w-full select-text" itemScope itemType="https://schema.org/Service">
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
            <motion.h2
              className="text-3xl font-bold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
              itemProp="name"
            >
              Nourish Your Soul: Embrace the Art of Relaxation with Couples Massage
            </motion.h2>
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
                whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(34,197,94,0.4)" }}
                whileTap={{ scale: 0.95 }}
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
              <Image
                className="rounded-3xl shadow-lg w-full lg:w-[100%] lg:h-[580px] object-cover transition-transform duration-300 hover:scale-105 bg-gray-200"
                src="https://www.riverdayspa.com/asset/couple-massage-in-coimbatore.jpg"
                alt="couple-massage-in-coimbatore"
                width={600}
                height={580}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-16 px-4 sm:px-8 lg:px-16 bg-[#F8F5F0] w-full select-text" itemScope itemType="https://schema.org/ImageGallery">
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
                itemScope
                itemType="https://schema.org/ImageObject"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-200 rounded-xl h-full"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={256}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 bg-gray-200"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      itemProp="contentUrl"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-50 transition-opacity duration-300" />
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-[#3E3636] mb-2" itemProp="name">{item.title}</h3>
                </div>

                <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col justify-center items-center text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 animate-fadeInUp">{item.title}</h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#EAE0D5] text-[#3E3636] w-full select-text" itemScope itemType="https://schema.org/Place">
        <motion.div
          className="text-center mb-14 select-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-xl lg:text-3xl font-extrabold text-[#8D7B68] relative inline-block select-text mb-6"
            {...fadeUp}
            itemProp="name"
          >
            Your Oasis of Serenity in the City
          </motion.h2>
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
          <div className="lg:w-1/2 w-full text-[#3E3636]/90 p-6 sm:p-8 lg:p-12 select-text">
            <p className="mb-6 text-base text-justify leading-relaxed select-text" itemProp="description">
              River Salon and Day Spa uses widely recognized and highly praised products at our spa locations. Right in the middle of Chennai, our signature speciality massage therapies provide a peaceful retreat using natural and well-known spa products.
            </p>

            <div className="mb-8">
              <h3 className="lg:text-lg font-semibold text-[#8D7B68] mb-4 select-text">Locations</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
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
                  <Link href="/book-spa-service-appointment" key={index}>
                    <p className="text-sm text-green-600 text-nowrap hover:text-green-500 transition duration-300 font-medium cursor-pointer select-text">
                      {name}
                    </p>
                  </Link>
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
              <Image
                className="rounded-3xl shadow-md w-full h-[400px] lg:w-[100%] object-cover transform hover:scale-105 transition-transform duration-500 bg-gray-200"
                src="https://www.riverdayspa.com/asset/spa-center-in-vellore.webp"
                alt="River Salon Day Spa"
                width={600}
                height={400}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                itemProp="image"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#3E3636]/30 via-transparent to-transparent rounded-3xl" />
          </motion.div>
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section
        className="relative w-full py-16 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://www.riverdayspa.com/asset/massage-in-trichy.webp')"
        }}
        itemScope
        itemType="https://schema.org/Review"
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative py-12 px-4 sm:px-8 lg:px-16 text-center z-10">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-12 text-white"
            {...fadeUp}
            itemProp="name"
          >
            Client Spa Experiences
          </motion.h2>
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
              itemScope
              itemType="https://schema.org/Review"
            >
              <p className="text-lg italic mb-6 text-[#3E3636] leading-relaxed" itemProp="reviewBody">
                "{reviews[currentReview].review}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-[#8D7B68] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {reviews[currentReview].name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-[#8D7B68] text-lg" itemProp="author">{reviews[currentReview].name}</p>
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

      {/* Final Content Sections */}
      <section className="relative w-full bg-[#F8F5F0] text-[#3E3636] py-16 select-text" itemScope itemType="https://schema.org/Article">
        <div className="flex flex-col items-center justify-center mt-8 px-4 sm:px-8 lg:px-28 space-y-6 select-text">
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl text-center font-bold mb-6 relative inline-block text-[#8D7B68] select-text"
            {...fadeUp}
            itemProp="headline"
          >
            Embrace the Essence of Tranquility at Our Massage Centers
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />

          <div itemProp="articleBody">
            <p className="text-[#3E3636]/90 text-base sm:text-base md:text-base text-justify leading-relaxed select-text">
              We have established numerous branches in and around Tamil Nadu cities to serve our clientele better. Multiple locations in your area are home to one of our spas. Both local trains and public transport can easily reach the locations where we are situated. Our spas are in Bangalore, Coimbatore, Chennai, Vellore, Trichy, and Tirupur are our branches. Our presence in additional states grows as more people become aware of our services.
            </p>

            <p className="text-[#3E3636]/90 text-base sm:text-base md:text-base text-justify leading-relaxed select-text">
              To provide our services to more clients, we are expanding our branches into major cities. We operate a multi-spa centre in one location, so you choose the nearest spot to you, Chennai, Vellore, Bangalore, Trichy, Tirupur, and Coimbatore. <Link href="/book-spa-service-appointment" className="text-green-600 hover:text-green-500 transition-colors">Body Massage Centre: book your slot</Link> and refresh your body, mind and soul. Finding our outlets will be easy because we are situated in desirable areas.
            </p>

            <p className="text-[#3E3636]/90 text-base sm:text-base md:text-base text-justify leading-relaxed select-text">
              River Salon and Day Spa offer clients a great experience in body massage and other beauty services at our locations. Our spa and salon services rejuvenate the energy and the surface of the skin and the hair. Our clients have relished our massage services, which help change wrinkles and aging on the skin.
            </p>

            <p className="text-[#3E3636]/90 text-base sm:text-base md:text-base text-justify leading-relaxed select-text">
              Our Best Body Massage Spa in Coimbatore. Locals in the area are aware of it for its services. In Coimbatore, we're well-known for our body scrubs, massages, and wraps services in R.S Puram. Our spots cover Gandhipuram, Periyanaickenpalayam, Avinashi Road, Thudiyalur, Gobichettipalayam, and Goundampalayam. As a spa, we strive to ensure our clients' overall well-being.
            </p>

            <p className="text-[#3E3636]/90 text-base sm:text-base md:text-base text-justify leading-relaxed select-text">
              To unleash the power within you and your family and friends, contact us to arrange a wonderful spa treatment day at the most excellent centres in Chennai, Coimbatore, Bangalore, Vellore, Tirupur, and Trichy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative w-full py-16 select-text bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.riverdayspa.com/asset/spa-center-in-vellore.webp')"
        }}
        itemScope
        itemType="https://schema.org/Service"
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
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-[#8D7B68] mb-6 select-text"
              {...fadeUp}
              itemProp="name"
            >
              Your Personal Sanctuary Treatments Now in River Salon and Day Spa
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <p className="text-[#FFFFFF] text-base md:text-lg text-center leading-relaxed select-text max-w-4xl mb-8" itemProp="description">
              We provide a variety of massages to our clients that are distinctive and help them achieve various wellness. These include <Link href="/best-deep-tissue-massage-center" className="text-green-600 hover:text-green-500 transition-colors font-semibold">deep tissue therapy</Link>, <Link href="/best-thai-body-massage-center" className="text-green-600 hover:text-green-500 transition-colors font-semibold">Thai massage</Link>, <Link href="/best-foot-reflexology-massage" className="text-green-600 hover:text-green-500 transition-colors font-semibold">foot reflexology</Link>, <Link href="/best-ayurvedic-massage-spa" className="text-green-600 hover:text-green-500 transition-colors font-semibold">ayurvedic</Link> and many other massages that help our clients heal from a wide range of pains. The overall well-being of our clients is our goal as therapists at Riverday Spa. Our treatments have made our clients feel younger and more elegant while relieving pain. We are a therapeutic facility that also monitors current beauty and fashion trends.
            </p>

            <motion.button
              className="bg-gradient-to-r from-green-600 to-green-400 text-white text-lg font-semibold py-4 px-12 rounded-full shadow-lg hover:from-green-500 hover:to-green-300 hover:shadow-green-400/50 transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="tel:+91 9500029234 ">Book Now</a>
            </motion.button>
          </div>
        </div>
      </section>

      <BlogSection />
    </div>
  )
}

export default HomePage