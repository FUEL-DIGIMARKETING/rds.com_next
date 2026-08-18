'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import CustomImage from './CustomImage'
import { velloreBypassImages } from '@/data/velloreBypassImages'
import AppLaunchBanner from './AppLaunchBanner'


const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
}
const testimonials = [
  { id: 1, name: "Sai Pawan", feedback: "Riverday spa is a place to go with modern and aesthetic surroundings I got my solution to many problems which I was going through. I usually went to them for haircuts however I had serious issues regarding the quality of my hair. They helped me to get rid of the problem with a hair spa and suggested a balanced diet to enrich its upkeep. I regularly visit them for a hair massage which has enriched my hair growth. The stylists are knowledgeable and understanding" },
  { id: 2, name: "Himani Ramachandran", feedback: "I visited them a while ago when I wanted to go for a pedicure and nail art. We were supposed to go to a party and we wanted to do some basic cleanup for the purpose. The beauticians were understanding and they saw to it that we both could take the session together. The nail art portfolio with them is great and if anyone is looking for these services, I will recommend them to come to this place." },
  { id: 3, name: "Dhruv Shashidharan", feedback: "I have always enjoyed myself whenever I visited their outlet near my home. Their massages and facials are just great experiences. I chose an aromatic oil that suited my skin and a massage suitable for my age. They use organic products so you can rest assured about their quality." },
  { id: 4, name: "Nandini Sharma", feedback: "My bridal package was something I was actually worried about. However, all my thoughts were put to rest when I went to Riverday spa. My special day was so beautiful absolutely like a dream sequence. I have never been happier. I was admired for my looks by all members of my family specially my better half loved the way I looked. Their packages are good value for money." },
  { id: 5, name: "Sheetal Godhra", feedback: "I have two grandchildren and I like to color my hair and get my hair styled. I go for massages regularly. People can hardly guess my age. When I tell them I have grandchildren they are surprised. Riverday spa helped me to locate my style I have my favorite hairdresser and she attends me regularly. You will feel truly at home being with them." }
]
const faqs = [
    { question: "Are there Ayurvedic spas in Vellore?", answer: "The Ayurvedic spas in Vellore maintain a standard system that evaluates their traditional to modern treatment methods. River Salon and Day Spa is located in Vellore and offers Ayurvedic massages, and allows one to escape into the dream of unwinding and experiencing true health for the soul and the body." },
    { question: "What is the first rule of massage?", answer: "The main aim of massage therapy is do no harm, ensuring customer safety over comfort to build trust over more than 10 years. Experience this care firsthand at our location in Vellore - Infantry Road, Chennai to Bangalore highway, next to Chennai Skills, and Katpadi." },
    { question: "Which Vellore spas offer massages?", answer: "Vellore has several quality spas that provide therapeutic massage services. River Salon and Day Spa stands out with its professional therapists who deliver high-end treatments at its various Vellore locations." },
    { question: "Is a Moroccan bath good for you?", answer: "A Moroccan bath deeply cleanses skin, removes dead cells, improves circulation, and leaves you glowing an authentic, rejuvenating treatment awaiting you at River Day Spa." },
  ]
export default function VelloreBypassPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
}
  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">

      <AppLaunchBanner /> {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${velloreBypassImages.hero.src}')` }}
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
            Gentle Hands
          </motion.p>
          <motion.p
            className="text-xl md:text-3xl text-white/90 font-bold drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Powerful Relaxation Magic
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
              className="text-3xl lg:text-4xl font-bold text-[#8D7B68] mb-4"
              {...fadeUp}
            >
              Best Body Massage Spa in Bypass Vellore - Perfect Relaxation
            </motion.h1>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Where relaxation meets rejuvenation, our oasis of tranquillity provides a blissful escape from the hustle of everyday life. River Salon and Day Spa are now at Vellore Bypass Near Chennai Silks. Explore the array of spa treatments to recreate your energy.

              We are providing professional massage services to our customers to get relief and relaxation with more than 13+ years in various cities. Our trained professionals handle all kinds of massage to heal your body from pain and enhance refreshment. Book an appointment in a <Link href="tel:+918939033456" className="text-green-600 font-semibold hover:text-green-500 transition-colors">Massage Centre in Vellore Bypass</Link>.
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
                  src={velloreBypassImages.coupleMassage.src}
                  alt={velloreBypassImages.coupleMassage.alt}
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto lg:h-[400px] object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Body Massage in Vellore Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4"
            {...fadeUp}
          >
            Body Massage in Vellore – Relax, Refresh, Rejuvenate & Renew
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-[#3E3636]/90 text-lg leading-relaxed max-w-6xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Find the professional body massage center in Vellore? Then, it is the right spot. Our massage center is easily accessible on NH-48 Road, near Chennai Silks, Vellore (Sathuvachari). It is an ideal spot for both Vellore residents and highway riders for deep refreshment.
          </motion.p>
          <motion.p
            className="text-[#3E3636]/90 text-lg leading-relaxed max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            River Salon and Day Spa offers professional and modern massage treatments, such as Moroccan Bath, Swedish Massage, Deep Tissue Massage, Ayurvedic Massage, Thai Body Massage, and more. Our experts' massage therapy helps to relieve body pain, reduce daily stress, restore energy, and offer a calming atmosphere. Because they are certified professionals, they performed highly qualified techniques, which support feeling lighter, refreshed, and renewed.
          </motion.p>
        </div>

        {/* Massage Benefits Section */}
        <motion.section
          className="relative mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            className="relative rounded-3xl p-8 md:p-12"
            style={{
              background: 'linear-gradient(145deg, #f0f0f0, #d2eadcff)',
              boxShadow: '20px 20px 60px #ddf9e1bb, -20px -20px 60px #ffffff'
            }}
          >
            <div className="max-w-6xl mx-auto">
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                The body massage in Vellore is an elegant, peaceful, and hygienic massage therapy center. It is suitable for:
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {[
                  'Muscle Stiffness',
                  'Travel Fatigue',
                  'Work-related Stress',
                  'General Stress',
                  'Chronic Back Pain',
                  'Sports Injuries',
                  'Long-standing Muscular Knots',
                  'Body Imbalance',
                  'Poor Blood Circulation',
                  'Body Tiredness'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full group-hover:bg-green-600 transition-colors" />
                      <span className="text-[#3E3636]/90 text-sm font-medium group-hover:text-green-600 transition-colors">{benefit}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                For Vellore people, we specially built our massage center. Here, you can experience a real body massage close to their city, as well as long-distance travelers on the highway. Contact the body massage treatment now in Vellore.
              </motion.p>

              <motion.p
                className="text-green-600 font-semibold text-base text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
              >
                Vellore's reliable massage center offers experienced services for care and professional spa treatment. Book your appointment right now!
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
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
                  src={velloreBypassImages.massageCenter.src}
                  alt={velloreBypassImages.massageCenter.alt}
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
              Journey to Serenity: Find Inner Peace and Pampering at Vellore's Best Spa Haven
            </motion.h3>
            <motion.p
              className="text-[#3E3636]/90 text-base text-justify leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              You'll be enveloped in an atmosphere of serenity and tranquillity when you step through our doors. Soft lighting, soothing music, calming aromas, and a welcoming atmosphere set the stage for your pampering journey. Our luxurious treatments, massages, and more are designed to melt away tension, rejuvenate your skin, and restore your inner balance in the near location of the massage center in Ambur . Pampering yourself isn't selfish; it's an act of self-love and self-care. It's about investing in your health and happiness in a massage center in Arcot. So, whether you're treating yourself to a solo spa day or sharing a couples' retreat with a loved one, we invite you to indulge in the pampering you deserve. Let us help you rediscover your inner peace, revitalize your senses, and pamper your way to a healthier, happier you. Visit our <Link href="/spa-giftcard-details" className="text-green-600 font-semibold hover:text-green-500 transition-colors"> Spa Centre in Vellore</Link> and experience the art of pampering like never before.
            </motion.p>
          </motion.div>
        </div>

        {/* Final Message */}
        <div className="text-center mb-16">
          <motion.p
            className="text-[#3E3636]/90 text-lg leading-relaxed max-w-4xl mx-auto italic text-green-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Visit us today and discover the art of relaxation, the science of wellness, and the magic of rejuvenation. Escape daily, and let us care for you at our Massage Centre in Vellore.
          </motion.p>
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
              <motion.h4
                className="text-3xl font-bold text-[#8D7B68] mb-6"
                {...fadeUp}
              >
                Why Choose Us?
              </motion.h4>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                At Vellore Spa Center, we prioritize your satisfaction. Our commitment to quality, customer-centric approach, and attention to detail set us apart. Reach and experience the epitome of peace and renewal.
              </motion.p>
              <motion.p
                className="text-2xl font-bold text-[#8D7B68] mb-4"
                {...fadeUp}
              >
                Revel in Tranquility
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base leading-relaxed mb-8 italic text-green-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Experience Massage Therapies Wellness at Our Vellore Spa Oasis
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Spa Centre in Vellore is your gateway to a world of pampering and self-indulgence. Pampering yourself is not just a luxury; it's essential to maintaining overall well-being. In today's fast-paced world, it's easy to forget to take care of yourself, but we remind you that self-care is necessary, not a luxury.
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our expert therapists are skilled in various massage techniques, from traditional Swedish and Deep Tissue Massages to aromatherapy and hot stone massages. Whether you're seeking relaxation or relief from tension, our Massage Center Ranipet is tailored to your needs.
              </motion.p>
              <motion.p
                className="text-[#3E3636]/90 text-base text-justify leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Pampering at our spas in near me goes beyond physical relaxation; it's a holistic experience that enables your body, mind, and spirit. Our expert therapists and wellness professionals are dedicated to creating an environment where you can escape the pressures of daily life and concentrate solely on yourself.
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
        
         <section className="mb-20">
            <div className="text-center mb-12"><motion.h5 className="text-xl sm:text-2xl font-extrabold text-[#8D7B68] mb-4" {...fadeUp}>Frequently Asked Questions</motion.h5></div>
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
              <p className="text-2xl font-semibold text-[#8D7B68] mb-4">Vellore Bypass Spa</p>
              <Link href="https://www.google.com/maps/place/River+Group+of+Salon+and+Day+Spa/@12.933934,79.144783,12930m/data=!3m1!1e3!4m6!3m5!1s0x3bad3947a25d7fcd:0x25e329ef1124d831!8m2!3d12.9339339!4d79.1447827!16s%2Fg%2F11l24gx6sx?hl=en&entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D">
                <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                  📍 3, Bangalore High Way, next to Chennai Silks, Kagithapatarai, Chennai, Vellore, Tamil Nadu 632012
                </p>
              </Link>
              <Link href="tel:+918056252525">
                <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                  📞 +91 8056252525
                </p>
              </Link>
              <Link href="tel:+918939033456">
                <p className="flex items-center hover:text-green-600 gap-2 mt-2 text-[#3E3636]/90 transition-colors cursor-pointer">
                  ☎️ +91 8939033456
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
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29893.54981797434!2d79.144783!3d12.933934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad3947a25d7fcd%3A0x25e329ef1124d831!2sRiver%20Group%20of%20Salon%20and%20Day%20Spa!5e1!3m2!1sen!2sin!4v1742022788282!5m2!1sen!2sin"
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