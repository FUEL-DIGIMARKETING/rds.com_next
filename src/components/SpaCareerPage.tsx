'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CustomImage from './CustomImage'
import { careerImages } from '../data/careerImages'

const jobOpenings = [
  {
    id: 1,
    title: 'Female Massage Therapist',
    image: careerImages.jobImages.femaleMassageTherapist,
    description: 'Join our team of professional massage therapists and help clients achieve wellness and relaxation.',
    requirements: ['Massage therapy certification', 'Professional training', 'Good communication skills'],
    location: 'All Locations',
    link: '/female-massage-therapist-jobs'
  },
  {
    id: 2,
    title: 'Floor Manager',
    image: careerImages.jobImages.floorManager,
    description: 'Lead our spa operations and ensure exceptional customer service across all departments.',
    requirements: ['Management experience', 'Leadership skills', 'Spa industry knowledge'],
    location: 'All Locations',
    link: '/floor-manager-jobs'
  },
  {
    id: 3,
    title: 'Receptionist',
    image: careerImages.jobImages.receptionist,
    description: 'Front desk operations, appointment scheduling, and customer service.',
    requirements: ['Communication skills', 'Computer literacy', 'Customer service experience'],
    location: 'All Locations',
    link: '/receptionist-male-female-jobs'
  },
  {
    id: 4,
    title: 'Beautician Female/Male',
    image: careerImages.jobImages.beautician,
    description: 'Looking for skilled beauticians to provide professional beauty services including facials, hair treatments, and skincare.',
    requirements: ['Beauty certification', '2+ years experience', 'Customer service skills'],
    location: 'All Locations',
    link: '/beautician-female-male-jobs'
  },
  {
    id: 5,
    title: 'Housekeeping Male/Female',
    image: careerImages.jobImages.housekeeping,
    description: 'Maintain cleanliness and hygiene standards throughout the spa facilities.',
    requirements: ['Attention to detail', 'Reliability', 'Previous housekeeping experience'],
    location: 'All Locations',
    link: '/housekeeping-male-female-jobs'
  },
  {
    id: 6,
    title: 'Hair Dresser Male',
    image: careerImages.jobImages.hairDresser,
    description: 'Professional hair stylists for cutting, coloring, and styling services.',
    requirements: ['Hair styling certification', 'Creative skills', 'Latest trend knowledge'],
    location: 'All Locations',
    link: '/hair-dresser-male-jobs'
  },
]

export default function SpaCareerPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-18">
        <CustomImage
          src={careerImages.heroImage.src}
          alt={careerImages.heroImage.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
              River Salon Day Spa
            </span>
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your Sanctuary for Renewal and Career Growth
          </motion.p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8D7B68] mb-6 text-center">
            Expose your Career in<br />
            <span className="text-[#6B5B4F] font-light">River Salon & Day Spa</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#8D7B68] to-[#6B5B4F] mx-auto rounded-full mb-8" />

          <motion.div
            className="bg-gradient-to-r from-[#8D7B68]/10 to-[#6B5B4F]/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-[#8D7B68]/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              boxShadow: 'inset 8px 8px 16px rgba(141, 123, 104, 0.1), inset -8px -8px 16px rgba(255, 255, 255, 0.8)'
            }}
          >
            <p className="text-[#3E3636]/90 text-lg text-justify leading-relaxed mb-6">
              River Day Spa is one of the exceptional and first-rate salons and spas in India. They are well experienced and knowledgeable in therapy for more than years. <span className="text-[#8D7B68] font-bold">River Salon and Day Spa</span> contain the following massage, therapy and beauty care. They provide the best care in massage and therapy in the traditional way. Massage like Swedish massage, Ayurvedic massage and so on. And also they provide body wraps, body scrubs. They used well techniques and tools for the therapy and their services are worldwide. River Day Spa and Salon service center placed in <strong>Chennai, Trichy, Coimbatore, Bangalore, Vellore, and Tirupur.</strong>
            </p>
            <p className="text-[#3E3636]/90 text-lg text-justify leading-relaxed">
              River Day Salon and Spa offering various job offers based on the different fields. Here, you can place your resume find your profession and explore your career. We provide the best career offer for therapy and Beautician.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-[#8D7B68] mb-6 text-center">CAREER OPTIONS</h3>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[#3E3636]/80 text-lg leading-relaxed max-w-4xl mx-auto">
              "River Salon and Day Spa" most delicate Salon and Spa service in India. We do not only provide Salon and Spa services, we are placing the Job offer who are well-versed in the professional of the therapist, Floor manager, Receptionist, Beautician, Housekeeping, and Hair Dresser.
            </p>
          </motion.div>

          {/* Job Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            viewport={{ once: true }}
          >
            {jobOpenings.map((job) => (
              <motion.div
                key={job.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 border border-[#8D7B68]/20"
                style={{
                  boxShadow: 'inset 8px 8px 16px rgba(141, 123, 104, 0.1), inset -8px -8px 16px rgba(255, 255, 255, 0.8), 0 20px 40px rgba(141, 123, 104, 0.15)'
                }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <CustomImage
                    src={job.image.src}
                    alt={job.image.alt}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#8D7B68] mb-3">{job.title}</h3>


                  <div className="mb-4">
                    <span className="text-sm font-medium text-[#6B5B4F]">📍 {job.location}</span>
                  </div>

                  {job.link ? (
                    <Link href={job.link}>
                      <button className="w-full bg-gradient-to-r from-[#8D7B68] to-[#6B5B4F] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        Apply Now
                      </button>
                    </Link>
                  ) : (
                    <a href="mailto:riverdayspa@gmail.com">
                      <button className="w-full bg-gradient-to-r from-[#8D7B68] to-[#6B5B4F] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        Apply Now
                      </button>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-[#3E3636]/80 text-lg leading-relaxed max-w-3xl mx-auto mt-8">
              Just as friendly as we care about our employees' health and happiness with 100%. Joining us, you're willing to work and should 100% care for the clients' satisfaction.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="bg-gradient-to-r from-[#8D7B68]/10 to-[#6B5B4F]/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-[#8D7B68]/20"
            style={{
              boxShadow: 'inset 8px 8px 16px rgba(141, 123, 104, 0.1), inset -8px -8px 16px rgba(255, 255, 255, 0.8)'
            }}
          >
            <h2 className="text-3xl font-bold text-[#8D7B68] mb-8">
              Build Your Future with Us
            </h2>
            <p className="mb-8 text-lg text-[#3E3636]/80">
              Join River Day Spa across Chennai, Trichy, Bangalore, Coimbatore, Vellore, and Tirupur. Your career journey starts here.
            </p>
            <a
              href="mailto:riverdayspa@gmail.com"
              className="bg-gradient-to-r from-[#8D7B68] to-[#6B5B4F] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-300 inline-block transform hover:scale-105 mb-4"
            >
              Submit Your Application
            </a>
            <p className="text-[#3E3636]/80 text-lg">Place your CV and make progress in your Career.</p>
          </div>
        </div>
      </motion.section>


    </div>
  )
}