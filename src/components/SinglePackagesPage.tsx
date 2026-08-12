'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'lucide-react'

const packages = [

  {
    id: "01",
    title: "River Special",
    price: "₹5620",
    duration: "Massage Time: 2 hrs",
    details: [
      "Head Massage",
      "Thai Massage",
      "Ayurvedic Massage with Fresh Juice"
    ],
    color: "from-green-400 to-blue-400",
    bgColor: "bg-pink-500",
    tier: "STARTER"
  },
  {
    id: "02",
    title: "River Retreat",
    price: "₹7999",
    duration: "Massage Time: 4 hrs",
    details: [
      "Foot Ritual",
      "Head Massage",
      "Thai Massage",
      "Ayurvedic Massage with Fresh Juice",
      "Facial Head Massage",
      "Foot Massage",
      "Body Scrub Body Massage",
      "Steam Jacuzzi with Fresh Juice"
    ],
    color: "from-blue-400 to-green-400",
    bgColor: "bg-orange-500",
    tier: "STANDARD"
  },
  {
    id: "03",
    title: "River Signature",
    price: "₹10999",
    duration: "Massage Time: 6 hours",
    details: ["Foot Ritual", "Facial", "Foot Reflexology", "Intensive Massage", "Steam Bath", "Cold Scrub & Warp Body Polish", "Thai Yoga Massage", "Jacuzzu Food"],
    color: "from-green-400 to-blue-400",
    bgColor: "bg-blue-500",
    tier: "PREMIUM"
  }
]

const BookingFormModal = ({ isOpen, onClose, selectedPackage }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    service: selectedPackage?.title || "",
    date: "",
    time: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: "" })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ success: false, message: "" })

    try {
      if (!formData.name || !formData.number) {
        throw new Error("Please fill in all required fields.")
      }

      const response = await fetch("https://api.riverdayspa.com/send-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          number: formData.number,
          service: formData.service || "General Service",
          packagePrice: selectedPackage?.price || 0,
          date: formData.date || "",
          time: formData.time || "",
          message: formData.message || "",
        }),
      })

      const contentType = response.headers.get("Content-Type")
      if (!contentType || !contentType.includes("application/json")) {
        const responseText = await response.text()
        console.error("Unexpected response from server:", responseText)
        throw new Error("Unexpected response from the server. Please contact support.")
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit booking")
      }

      setSubmitStatus({ success: true, message: data.message || "Booking submitted successfully!" })
      setFormData({
        name: "",
        email: "",
        number: "",
        service: selectedPackage?.title || "",
        date: "",
        time: "",
        message: "",
      })

      setTimeout(() => {
        onClose()
        setSubmitStatus({ success: false, message: "" })
      }, 3000)
    } catch (error: any) {
      console.error('Error submitting form:', error)
      let errorMessage = "Failed to submit booking. Please try again."

      if (error.message === 'Failed to fetch') {
        errorMessage = 'Network error. Please check your internet connection and try again.'
      } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
        errorMessage = 'Unable to connect to server. Please try again later.'
      } else if (error.message.includes('CORS')) {
        errorMessage = 'Connection blocked. Please contact support.'
      } else {
        errorMessage = error.message || errorMessage
      }

      setSubmitStatus({
        success: false,
        message: errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-70"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-[#8D7B68] to-[#6B5B4F]">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Book {selectedPackage?.title}
                  </h3>
                  <p className="text-white/90 font-medium mt-1">
                    {selectedPackage?.price}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              {submitStatus.message && (
                <div className={`mb-4 p-3 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#3E3636] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-[#3E3636] focus:ring-2 focus:ring-[#8D7B68] focus:border-transparent disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="number" className="block text-sm font-medium text-[#3E3636] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-[#3E3636] focus:ring-2 focus:ring-[#8D7B68] focus:border-transparent disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#3E3636] mb-1">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-[#3E3636] focus:ring-2 focus:ring-[#8D7B68] focus:border-transparent disabled:opacity-50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-[#3E3636] mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-[#3E3636] focus:ring-2 focus:ring-[#8D7B68] focus:border-transparent disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-[#3E3636] mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-[#3E3636] focus:ring-2 focus:ring-[#8D7B68] focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#3E3636] mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-[#3E3636] focus:ring-2 focus:ring-[#8D7B68] focus:border-transparent disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-[#8D7B68] to-[#6B5B4F] text-white font-semibold py-3 rounded-lg transition-all duration-300 ${isSubmitting
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:from-[#6B5B4F] hover:to-[#8D7B68]'
                    }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function SinglePackagesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)

  const handleOpenModal = (pkg: any) => {
    setSelectedPackage(pkg)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
    // Hide navbar when modal opens
    document.body.classList.add('modal-open')
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPackage(null)
    document.body.style.overflow = 'auto'
    // Show navbar when modal closes
    document.body.classList.remove('modal-open')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('images/special-spa-packages.webp')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-800/20 to-pink-900/30" />


        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Single Spa And Massage Service Packages
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-base lg:text-lg text-[#3E3636]/90 max-w-5xl mx-auto">
            We offer various special packages for our range of <Link href="/best-partial-massage-spa" className="text-green-600 font-semibold hover:text-green-400 transition-colors">Single Spa and massage services</Link>. Additionally, we offer customized packages at the branches that you prefer. Get in touch with our representatives to learn more about our seasonal offers.
          </p>
        </motion.div>

        {/* Packages Section */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Indulge in the Best Relaxation
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="group relative h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Card inspired by screenshot design */}
              <div
                className="relative h-full rounded-3xl p-8 transition-all duration-500 group-hover:shadow-2xl flex flex-col min-h-[600px]"
                style={{
                  background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
                  boxShadow: '5px 5px 15px rgba(0,0,0,0.3), -5px -5px 15px rgba(255,255,255,0.05)'
                }}
              >
                {/* Number Badge */}
                <div className="absolute top-6 left-6">
                  <span className="text-4xl font-bold text-white/20">{pkg.id}</span>
                </div>

                {/* Colored Tab */}
                <div className={`absolute top-6 right-6 w-20 h-8 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">{pkg.tier}</span>
                </div>

                {/* Content */}
                <div className="mt-16 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pkg.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <p className="text-xl font-bold text-green-400">
                      {pkg.price}
                    </p>
                    <p className="text-sm text-yellow-400 font-medium">
                      {pkg.duration}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 py-4 flex-grow">
                    {pkg.details.map((detail, i) => (
                      <div key={i} className="flex items-center text-gray-300 text-sm">
                        <svg
                          className="w-4 h-4 mr-2 text-green-500 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {detail}
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => handleOpenModal(pkg)}
                    className={`w-full mt-auto py-3 rounded-full text-white font-semibold transition-all duration-300 bg-gradient-to-r ${pkg.color} hover:shadow-lg hover:scale-105 cursor-pointer relative z-10`}
                    style={{ pointerEvents: 'auto' }}
                  >
                    BOOK NOW
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${pkg.color} pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <BookingFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedPackage={selectedPackage}
      />
    </div>
  )
}