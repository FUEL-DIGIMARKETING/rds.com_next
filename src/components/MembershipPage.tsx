'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

const packages = [
  {
    title: "SILVER",
    price: "₹12000",
    duration: "Massage Time: 6hrs",
    details: [
      "Any treatment at any branch",
      "Avail treatment in weekdays only",
      "One sitting should not be less than 1 hour.",
      "Includes steam",
      "Validity: 3 months (Single Person)",
      "Terms and conditions apply",
    ],
    color: "from-blue-400 to-green-400",
    tier: "BASIC"
  },
  {
    title: "GOLD",
    price: "₹30000",
    duration: "Massage Time: 15hrs",
    details: [
      "Any treatment at any branch",
      "Avail treatment in weekdays only",
      "One sitting should not be less than 1 hour.",
      "Includes steam",
      "Validity: 5 months (Single Person)",
      "Terms and conditions apply",
    ],
    color: "from-green-400 to-blue-400",
    tier: "POPULAR"
  },
  {
    title: "DIAMOND",
    price: "₹65000",
    duration: "Massage Time: 35hrs",
    details: [
      "Any treatment at any branch",
      "Avail treatment in weekdays only",
      "One sitting should not be less than 1 hour.",
      "Includes steam",
      "Validity: 7 months (Single Person)",
      "Terms and conditions apply",
    ],
    color: "from-blue-400 to-green-400",
    tier: "PREMIUM"
  },
  {
    title: "PLATINUM",
    price: "₹100000",
    duration: "Massage Time: 50hrs",
    details: [
      "Any treatment at any branch",
      "Avail treatment weekdays & weekends",
      "One sitting should not be less than 1 hour.",
      "Includes steam & Jacuzzi",
      "Validity: 12 months (Two Persons)",
      "Terms and conditions apply",
    ],
    color: "from-green-400 to-blue-400",
    tier: "ELITE"
  },
]

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: any;
}

const BookingFormModal = ({ isOpen, onClose, selectedPackage }: BookingFormModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    service: selectedPackage?.title || "",
    date: "",
    time: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors }

    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required'
        } else if (value.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters'
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          newErrors.name = 'Name can only contain letters and spaces'
        } else {
          delete newErrors.name
        }
        break
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = 'Please enter a valid email address'
        } else {
          delete newErrors.email
        }
        break
      case 'number':
        if (!value.trim()) {
          newErrors.number = 'Phone number is required'
        } else if (!/^[0-9]{10}$/.test(value.replace(/\D/g, ''))) {
          newErrors.number = 'Phone number must be exactly 10 digits'
        } else {
          delete newErrors.number
        }
        break
    }

    setErrors(newErrors)
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target

    // Restrict phone number to 10 digits
    if (name === 'number') {
      const numericValue = value.replace(/\D/g, '')
      if (numericValue.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: numericValue }))
        validateField(name, numericValue)
      }
      return
    }

    setFormData(prev => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ success: false, message: "" })

    try {
      // Validate all fields
      const newErrors: Record<string, string> = {}

      if (!formData.name.trim()) newErrors.name = 'Name is required'
      if (!formData.number.trim()) newErrors.number = 'Phone number is required'
      if (!/^[0-9]{10}$/.test(formData.number)) newErrors.number = 'Phone number must be exactly 10 digits'
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address'
      if (!formData.date) newErrors.date = 'Date is required'
      if (!formData.time) newErrors.time = 'Time is required'

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        throw new Error("Please fix the errors above.")
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
          service: formData.service || selectedPackage?.title || "General Service",
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
            className="absolute inset-0 bg-black bg-opacity-70"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-[#8D7B68] to-[#6B5B4F]">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xl font-bold text-white">
                    Book {selectedPackage?.title}
                  </p>
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

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6">
              {submitStatus.message && (
                <div className={`mb-4 p-3 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#3E3636] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2 bg-white border rounded-lg text-[#3E3636] focus:ring-2 focus:border-transparent disabled:opacity-50 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#8D7B68]'
                      }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="number" className="block text-sm font-medium text-[#3E3636] mb-1">
                    Phone Number * (10 digits)
                  </label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    maxLength={10}
                    placeholder="Enter 10-digit phone number"
                    className={`w-full px-4 py-2 bg-white border rounded-lg text-[#3E3636] focus:ring-2 focus:border-transparent disabled:opacity-50 ${errors.number ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#8D7B68]'
                      }`}
                  />
                  {errors.number && <p className="text-red-500 text-xs mt-1">{errors.number}</p>}
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
                    placeholder="Enter valid email address"
                    className={`w-full px-4 py-2 bg-white border rounded-lg text-[#3E3636] focus:ring-2 focus:border-transparent disabled:opacity-50 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#8D7B68]'
                      }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-[#3E3636] mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-2 bg-white border rounded-lg text-[#3E3636] focus:ring-2 focus:border-transparent disabled:opacity-50 ${errors.date ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#8D7B68]'
                        }`}
                    />
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-[#3E3636] mb-1">
                      Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-4 py-2 bg-white border rounded-lg text-[#3E3636] focus:ring-2 focus:border-transparent disabled:opacity-50 ${errors.time ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#8D7B68]'
                        }`}
                    />
                    {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
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

export default function MembershipPage() {
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
    document.body.style.overflow = 'auto'
    // Show navbar when modal closes
    document.body.classList.remove('modal-open')
  }

  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('images/best-packages-chennai-spa-massage-centre.jpg')`
          }}
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
            Rejuvenate and Energise
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At the Most Exclusive Massage Centre in Town!
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#8D7B68] mb-6">
            Best Body massage spa in Chennai

          </h1>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          /> <p className="text-[#3E3636]/80 text-lg leading-relaxed max-w-4xl mx-auto">
            At river day spa & avail member exclusive special packages & deals
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl lg:text-3xl font-bold text-[#8D7B68]">
              At river day spa & avail member exclusive special packages & deals
            </p>
            <p className="text-[#3E3636]/90 text-base text-justify leading-relaxed">
              Ensure your health and well being by purchasing a membership at our Spa in Chennai.
            </p>
            <p className="text-[#3E3636]/90 text-base text-justify leading-relaxed">
              Massages offer more than stress relief. A River Day Spa membership ensures you with easy and cheap access to massages, facials, body treatments, hair care and skin care at any of our eight locations in the country. You can also get your favorite spa products for use at home at a discounted price.
            </p>
            <p className="text-[#3E3636]/90 text-base text-justify leading-relaxed">
              River Day Spa members are given priority when it comes to scheduling appointments. Enjoy less stress, improved health, radiant skin, shiny hair and feel energetic at your own schedule.
            </p>
            <div className="flex justify-start">
              <a
                href="/book-spa-service-appointment"
                className="bg-[#8D7B68] text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-[#6B5B4F] transition duration-200"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-[#8D7B68] rounded-3xl transform rotate-3"></div>
            <img

              src="/images/best-spa-in-coimbatore-river-day.webp"
              alt="Best Spa in Coimbatore"
              width={600}
              height={400}
              className="relative z-10 rounded-3xl shadow-xl w-full h-auto lg:h-[400px] object-cover transform -rotate-3 transition-transform duration-300 hover:rotate-0"
            />
          </motion.div>
        </div>

        {/* Membership Packages */}
        <motion.section
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Animated Background Circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute w-96 h-96 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-3xl"
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
              className="absolute w-80 h-80 bg-gradient-to-r from-green-300/30 to-teal-300/30 rounded-full blur-3xl"
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
              className="absolute w-72 h-72 bg-gradient-to-r from-pink-300/30 to-orange-300/30 rounded-full blur-3xl"
              animate={{
                x: ['-5%', '15%', '-5%'],
                y: ['10%', '30%', '10%'],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{ top: '20%', left: '60%' }}
            />
          </div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8D7B68] mb-4">
              Premium Membership Packages
            </h2>
            <motion.div
              className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            /> </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
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
                  className="relative h-full rounded-3xl p-8 transition-all duration-500 group-hover:shadow-2xl flex flex-col min-h-[500px]"
                  style={{
                    background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
                    boxShadow: '5px 5px 15px rgba(0,0,0,0.3), -5px -5px 15px rgba(255,255,255,0.05)'
                  }}
                >
                  {/* Number Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="text-4xl font-bold text-white/20">{String(index + 1).padStart(2, '0')}</span>
                  </div>

                  {/* Colored Tab */}
                  <div className={`absolute top-6 right-6 w-20 h-8 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{pkg.tier}</span>
                  </div>

                  {/* Content */}
                  <div className="mt-16 flex flex-col flex-grow">
                    <p className="text-2xl font-bold text-white mb-2">
                      {pkg.title}
                    </p>

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
                      BOOK NOW →
                    </button>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${pkg.color} pointer-events-none`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      <BookingFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedPackage={selectedPackage}
      />
    </div>
  )
}