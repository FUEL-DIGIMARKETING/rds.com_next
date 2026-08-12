'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import CustomImage from './CustomImage'
import { bangaloreImages } from '@/data/bangaloreImages'
import {
  FaSpa,
  FaHands,
  FaLeaf,
  FaGem
} from 'react-icons/fa'
import AppLaunchBanner from './AppLaunchBanner'
const BangalorePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  const faqs = [
    { question: "How long does a massage usually take?", answer: "At River Day Spa, massage sessions typically last 60 to 90 minutes. The 90-minute Balinese therapy is especially popular for deep relaxation and therapeutic benefits. We offer multiple message services to relieve day-to-day stress." },
    { question: "What happens in spa services?", answer: "At River Day Spa, you experience therapeutic massages (deep tissue, Thai, Ayurvedic), body scrubs for exfoliation, body wraps for detoxification, Moroccan Bath treatments, foot reflexology, and salon services. The expert therapists at our center use aromatic oils to create a peaceful environment. It helps them to treat your pain and reduce your stress while revitalizing your entire being." },
    { question: "What is the most popular service in a message center?", answer: "At River Day Spa, the Balinese therapy is our most requested massage. The 90-minute treatment provides deep relaxation through the use of aromatic oils. Clients also frequently request deep tissue massage, Thai massage, and Ayurvedic massage to help them relieve stress and manage their pain." },
    { question: "Is it Normal to Release During a Massage?", answer: "The River Day Spa massage treatment enables people to experience stress release, body pain, and chronic pain through the massage treatment. Massage releases tension and stored energy. Deep breathing, muscle relaxation, and feeling sleepy are also common. Our professional therapists create a safe, judgment-free environment for your wellness journey." },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <>
      <div className="w-full overflow-x-hidden min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
        <AppLaunchBanner />  {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url('${bangaloreImages.hero.src}')` }}
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
              The Epitome of
            </motion.p>
            <motion.p
              className="text-xl md:text-3xl text-amber-100 font-light drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Elegance
            </motion.p>
          </motion.div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Introduction Section */}
          <motion.div className="text-center mb-16" {...fadeUp}>
            <h1 className="text-3xl md:text-5xl font-bold text-[#8D7B68] mb-6">
              Spa in Bangalore - Wellness that Works Wonders
            </h1>
            <motion.div
              className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <p className="text-[#3E3636]/90 text-lg leading-relaxed max-w-6xl mx-auto mb-4">
              Bangalore doesn't slow down for anyone. The traffic, the deadlines, the back-to-back meetings, it all piles up. And at some point, your body starts asking for a break in ways you can't ignore. <Link href="/" className="text-green-600 font-semibold hover:text-green-500 transition-colors">River Salon and Day Spa</Link> gets that. It's not trying to be a luxury resort or a hotel add-on. It's a genuinely good spa in the heart of the city, bringing together massage therapy, body treatments, skin care, and hair care under one calm, welcoming roof.
            </p>
            <p className="text-lg italic font-bold text-green-600 max-w-4xl mx-auto mb-2">
              Find Your Zen at the Best Massage in Bangalore
            </p>
            <p className="text-[#3E3636]/90 text-lg leading-relaxed max-w-6xl mx-auto mb-4">
              Just a short walk from the BDA Complex in Indira Nagar, River Day Spa has become the kind of place regulars quietly keep to themselves and then eventually tell every stressed-out friend about.
            </p>
            <p className="text-[#3E3636]/90 text-lg leading-relaxed max-w-6xl mx-auto mb-4">
              Walk in with a stiff back and tight shoulders, and you walk out wondering why you waited so long. The therapists here aren't going through the motions; they actually pay attention to. To where you're holding tension. To what your skin needs. To how long you've probably been running on empty.
            </p>
            <p className="text-[#3E3636]/90 text-lg leading-relaxed max-w-6xl mx-auto mb-4">
              No confusing menus. No pressure. Just tell them what's bothering you, and let them handle it. Book ahead to make a proper day of it, or drop by when the urge hits. Either works.
            </p>
            <p className="text-[#3E3636]/90 text-lg leading-relaxed max-w-6xl mx-auto mb-4">
              River Day Spa has been part of people's wellness routines since 2000, and there's a reason they keep coming back.
            </p>
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
              <motion.h2
                className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
                {...fadeUp}
              >
                Best Massage Centre in Bangalore: Expert Therapists, Real Results
              </motion.h2>
              <p className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-2">
              Honestly, most people wait too long before booking a massage. Work piles up, weekends disappear, and that shoulder pain you've been ignoring for three weeks quietly becomes four. Sound familiar?
            </p>
            <p className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-2">
              At River Salon and Day Spa in Indira Nagar, we've seen it a thousand times, and we're not judging. We're just here when you're finally ready.
            </p>
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
                    src={bangaloreImages.coupleMassage.src}
                    alt={bangaloreImages.coupleMassage.alt}
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* 2-Column Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Column 1 — When you enter + therapist para + separates para */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-lg italic font-bold text-green-600 mb-2">
                When you enter this place, what really happens?
              </p>
              <p className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-2">
                Your therapist doesn't hand you a laminated menu and walk away. They ask questions. They check in. <Link href="/swedish-massage-service-in-chennai" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Swedish massage</Link> for someone who needs to switch off completely. Deep tissue work for the neck that's been locked regular works and stress. Ayurvedic massage help for stress, anxiety, and heal the body heat with refreshing oil treatment. Body scrubs, skin care, the works, whatever your body is actually asking for, not just whatever sounds good on paper.
              </p>
              <p className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-2">
                That's what separates a good massage center from a great one. And in Bangalore, that difference matters.
              </p>
            </motion.div>

            {/* Column 2 — Who comes here + para + button */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-lg italic font-bold text-green-600 mb-2">
                Who comes here?
              </p>
              <p className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-2">
                IT professionals who sit for 10 hours straight. Couples who want an hour together that doesn't involve a screen. People who relaxation from day-to-day works and for the regular body care massage treatment. First-timers who aren't sure what they need yet. All of them leave feeling better with our professional therapy treatment. That part never changes.
              </p>
              {/* Stylish App/Web Booking Button */}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link href="/book-spa-service-appointment">
                  <motion.div
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-l from-green-400 via-emerald-500 to-green-600 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 opacity-70" />
                    <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white px-8 py-4 rounded-2xl font-bold text-center shadow-2xl border-2 border-white/20">
                      <div className="flex items-center justify-center gap-3">
                        <motion.span
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >📱</motion.span>
                        <div>
                          <div className="text-lg font-extrabold tracking-wide">River Day Spa, Indira Nagar</div>
                          <div className="text-sm font-medium opacity-90 mt-1">Walk in or book your slot in our APP or Web</div>
                        </div>
                      </div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: [-200, 400] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                      />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Second Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image First */}
            <motion.div
              className="relative w-full flex justify-center order-2 lg:order-1"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
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
                <div className="absolute inset-0 bg-gradient-to-l from-green-400 to-green-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                <div className="relative z-10 bg-white rounded-3xl p-2 shadow-2xl">
                  <CustomImage
                    src={bangaloreImages.luxurySpa.src}
                    alt={bangaloreImages.luxurySpa.alt}
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6 order-1 lg:order-2"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl lg:text-3xl font-bold text-[#8D7B68] mb-4"
                {...fadeUp}
              >
                Best Spa in Bangalore Where Real Relaxation Begins
              </motion.h3>
              <p className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-2">
                Some spa visits leave you feeling okay. This one leaves you feeling like yourself again.
              </p>
              <p className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-2">
                The moment you step into River Day Spa, something shifts. The lighting drops, the noise of Bangalore fades out, and the scent of warm oils does the rest. It's not accidental that every detail here is set up so your body has no choice but to let go.
              </p>
              <p className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-2">
                Our therapists take a few minutes before every session to understand what you're carrying that day, whether it's tension in your lower back, stress sitting in your shoulders, skin that's been neglected for too long, or clear understanding your health condition. Then they get to work. No rushing, no shortcuts. Signature massages that actually hold their effect long after you leave. 
              </p>
              <p className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-2">
                People come to the <a href="https://play.google.com/store/apps/details?id=com.riverdayspa.booking&pcampaignid=web_share" className="text-green-600 font-semibold hover:text-green-500 transition-colors">best spa in Bangalore</a> for one session and end up making it a monthly habit. That's not marketing, that's just what happens when something works.
              </p>
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
                  Our spa in Indiranagar offers body scrubs and wraps that cleanse, revitalize, and glow.
                </motion.p>
                <p className="text-[#3E3636]/90 text-base text-center leading-relaxed mb-4">
                Your skin takes a hit every single day from pollution, sweat, sunscreen, and stress. A regular shower handles the surface. A proper body scrub goes deeper.
              </p>
               <p className="text-[#3E3636]/90 text-base text-center leading-relaxed mb-4">
                At River Day Spa in Indiranagar, Bangalore, our body scrub and wraps are built around natural fruit-based ingredients that strip away dead skin, feed it the vitamins it's been missing, and leave you with a tone and texture you'll actually notice. Not "heavenly," just genuinely better skin.
              </p>
               <p className="text-[#3E3636]/90 text-base text-center leading-relaxed mb-4">
                The wraps go a step further. They lock in moisture, draw out impurities, and give your skin a reset that lasts for days. Pair it with one of our massage treatments, and the difference is hard to miss.
              </p>
               <p className="text-[#3E3636]/90 text-base text-center leading-relaxed mb-6">
                If your skin has been looking dull or feeling rough, this is where you start.
              </p>
                <Link href="tel:+919500029234">
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
          {/* Services Section */}
          <div className="text-center mb-16">
            <motion.h4
              className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Best Luxury Spa in Bangalore: Rejuvenating Body, Skin & Wellness Treatments at Indira Nagar
            </motion.h4>
            <motion.div
              className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-[#3E3636]/90 text-lg leading-relaxed max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              There are days when your body simply asks to be taken care of, and that is exactly what we do at River Day Spa. Tucked in the lively neighborhood of Indira Nagar, we have been Bangalore's trusted luxury spa for guests who value genuine rest over rushed routines. Our therapists take time to understand what your body needs before recommending any treatment. You will not find a fixed menu pushed at you here. Instead, every visit is shaped around you, your tension points, your skin concerns, and your pace. Guests come to us for our <a href="/best-body-massage-center" className="text-green-600 font-semibold hover:text-green-500 transition-colors">body spa</a> and skin wellness treatments, and they return because they feel the difference long after they leave. We are proud to serve clients across Indira Nagar and our other spa locations in Tamil Nadu.
            </motion.p>
          </div>
          <section className="mb-20">
            <div className="text-center mb-12"><motion.p className="text-2xl sm:text-3xl font-extrabold text-[#8D7B68] mb-4" {...fadeUp}>Frequently Asked Questions</motion.p></div>
            <div className="max-w-4xl mx-auto px-4">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:border-green-400 transition-all duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                    <button className="flex justify-between w-full text-left text-base sm:text-lg font-semibold text-[#8D7B68] hover:text-green-600 transition-colors" onClick={() => toggleAccordion(index)}><span>{faq.question}</span><span className="text-xl text-gray-400 hover:text-green-600 transition duration-300">{openIndex === index ? '-' : '+'}</span></button>
                    {openIndex === index && (<motion.p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }}>{faq.answer}</motion.p>)}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* Location Section */}
          <motion.section
            className="relative rounded-3xl p-12 mb-16"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(5,150,105,0.1))',
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
                <Link href="https://www.google.com/maps?ll=12.98138,77.636049&z=15&t=h&hl=en&gl=IN&mapclient=embed&cid=18180249599548450780">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    📍 Door No-477, 15th Cross St, Double Rd, Indiranagar, Bengaluru, Karnataka 560038
                  </p>
                </Link>
                <Link href="tel:+918904586507">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    📞 +91 8904586507
                  </p>
                </Link>
                <Link href="tel:080-49580709">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    📞 080-49580709
                  </p>
                </Link>
                <Link href="mailto:riverdayspa.bangalore@gmail.com">
                  <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                    ✉️ riverdayspa.bangalore@gmail.com
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
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7471.9636488974775!2d77.636049!3d12.98138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d272f44f67%3A0xfc4d38b00d05e7dc!2sRiver%20Day%20Spa!5e1!3m2!1sen!2sin!4v1742191663996!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  )
}
export default BangalorePage