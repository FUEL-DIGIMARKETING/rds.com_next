'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function BookingPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    spaService: false,
    salonService: false,
    selectedSpaService: "",
    selectedSalonService: "",
    date: "",
    spaLocation: "",
    salonLocation: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: "" })

  const spaServices = [
    "Swedish Massage", "Moroccan Bath", "Balinese Massage", "Thai Body Massage",
    "Ayurvedic Massage", "Deep tissue Massage", "Foot Reflexology Massage",
    "Detoxifying Massage", "Couple Massage", "Abhyanga Massage",
    "Head Toe Aroma Massage", "Sports Massage", "Sense of Siam Massage",
    "Synchronized Massage", "Partial Massage", "Body Scrub Massage",
    "Chocolate Scrub", "Coffee Scrub", "Fruit Scrub", "Lemongrass Scrub",
    "Sea Salt Scrub", "Body Wrap Massage", "Chocolate Wrap", "Coffee Wrap",
    "Mango Wrap", "Papaya Wrap", "Raspberry Wrap",
  ]

  const salonServices = [
    "Bridal Makeup", "Bleaching", "Facial", "Waxing", "Threading",
    "Manicure", "Pedicure", "Hair Treatment", "Hair colouring",
    "Hair Dressing", "Hair Cuts", "Mehandi", "Nail Art",
  ]

  const spaLocations = [
    "Chennai-Egmore", "Coimbatore", "Vellore-Tollgate", "Vellore-Katpadi", "Vellore-Bypass",
    "Tiruppur", "Trichy", "Bangalore",
  ]

  const salonLocations = [
    "Chennai-Egmore", "Coimbatore", "Trippur - Rayapuram",
  ]

  const validateField = (name: string, value: string | boolean) => {
    const newErrors = { ...errors }
    
    switch (name) {
      case 'name':
        if (!value || (typeof value === 'string' && !value.trim())) {
          newErrors.name = 'Name is required'
        } else if (typeof value === 'string' && value.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters'
        } else if (typeof value === 'string' && !/^[a-zA-Z\s]+$/.test(value)) {
          newErrors.name = 'Name can only contain letters and spaces'
        } else {
          delete newErrors.name
        }
        break
      case 'phone':
        if (!value || (typeof value === 'string' && !value.trim())) {
          newErrors.phone = 'Phone number is required'
        } else if (typeof value === 'string' && !/^[0-9]{10}$/.test(value.replace(/\D/g, ''))) {
          newErrors.phone = 'Phone number must be exactly 10 digits'
        } else {
          delete newErrors.phone
        }
        break
      case 'email':
        if (!value || (typeof value === 'string' && !value.trim())) {
          newErrors.email = 'Email is required'
        } else if (typeof value === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = 'Please enter a valid email address'
        } else {
          delete newErrors.email
        }
        break
      case 'date':
        if (!value) {
          newErrors.date = 'Date is required'
        } else {
          delete newErrors.date
        }
        break
    }
    
    setErrors(newErrors)
  }

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    
    // Restrict phone number to 10 digits
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '')
      if (numericValue.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: numericValue }))
        validateField(name, numericValue)
      }
      return
    }
    
    const fieldValue = type === "checkbox" ? checked : value
    setFormData(prev => ({ ...prev, [name]: fieldValue }))
    validateField(name, fieldValue)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ success: false, message: "" })

    // Validate all fields
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.date) newErrors.date = 'Date is required'
    
    if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be exactly 10 digits'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address'
    if (!/^[a-zA-Z\s]+$/.test(formData.name)) newErrors.name = 'Name can only contain letters and spaces'
    
    if (!formData.spaService && !formData.salonService) {
      newErrors.services = 'Please select at least one service (Spa or Salon)'
    }
    
    if (formData.spaService && !formData.selectedSpaService) {
      newErrors.selectedSpaService = 'Please select a spa treatment'
    }
    
    if (formData.spaService && !formData.spaLocation) {
      newErrors.spaLocation = 'Please select a spa location'
    }
    
    if (formData.salonService && !formData.selectedSalonService) {
      newErrors.selectedSalonService = 'Please select a salon service'
    }
    
    if (formData.salonService && !formData.salonLocation) {
      newErrors.salonLocation = 'Please select a salon location'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setSubmitStatus({ success: false, message: 'Please fix the errors above.' })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("https://api.riverdayspa.com/send-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ success: true, message: data.message || "Booking submitted successfully!" })
        setFormData({
          name: "", phone: "", email: "", spaService: false, salonService: false,
          selectedSpaService: "", selectedSalonService: "", date: "",
          spaLocation: "", salonLocation: "", message: "",
        })
        setErrors({})
      } else {
        throw new Error(data.message || "Failed to submit booking")
      }
    } catch (error: any) {
      setSubmitStatus({
        success: false,
        message: error.message === 'Failed to fetch'
          ? 'Network error. Please check your connection and try again.'
          : error.message || "Failed to submit booking. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0] relative overflow-hidden">
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

      {/* Back Button */}
      <div className="relative top-65 left-58 md:top-56 md:left-56 z-50">
        <motion.button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 border border-white/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-[#8D7B68]" />
          <span className="text-sm md:text-base text-[#8D7B68] font-medium hidden sm:inline">Back</span>
        </motion.button>
      </div>

      <div className="flex items-center justify-center min-h-screen py-48 ">
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 space-y-6 border border-white/40 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-[#8D7B68]">Book Your Session</h1>
            <p className="text-[#3E3636]/70">Experience luxury and relaxation</p>
          </div>

          {/* Status Message */}
          {submitStatus.message && (
            <div className={`p-3 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {submitStatus.message}
            </div>
          )}
          
          {/* Service Selection Error */}
          {errors.services && (
            <div className="p-3 rounded-lg bg-red-100 text-red-800">
              {errors.services}
            </div>
          )}

          {/* Personal Info Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#3E3636] mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                className={`w-full px-4 py-3 rounded-lg bg-white/80 border focus:ring-2 focus:ring-[#8D7B68]/20 transition-all text-gray-800 disabled:opacity-50 ${
                  errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#8D7B68]'
                }`}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                disabled={isSubmitting}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3E3636] mb-2">Phone Number * (10 digits)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                maxLength={10}
                className={`w-full px-4 py-3 rounded-lg bg-white/80 border focus:ring-2 focus:ring-[#8D7B68]/20 transition-all text-gray-800 disabled:opacity-50 ${
                  errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#8D7B68]'
                }`}
                onChange={handleChange}
                placeholder="Enter 10-digit phone number"
                required
                disabled={isSubmitting}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3E3636] mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                className={`w-full px-4 py-3 rounded-lg bg-white/80 border focus:ring-2 focus:ring-[#8D7B68]/20 transition-all text-gray-800 disabled:opacity-50 ${
                  errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#8D7B68]'
                }`}
                onChange={handleChange}
                placeholder="Enter valid email address"
                required
                disabled={isSubmitting}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3E3636] mb-2">Appointment Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                min={new Date().toISOString().split('T')[0]}
                className={`w-full px-4 py-3 rounded-lg bg-white/80 border focus:ring-2 focus:ring-[#8D7B68]/20 transition-all text-gray-800 disabled:opacity-50 ${
                  errors.date ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#8D7B68]'
                }`}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
            </div>
          </div>

          {/* Service Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#8D7B68]">Select Services</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex items-center p-4 bg-white/50 rounded-xl border border-gray-200 hover:border-[#8D7B68]/50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  name="spaService"
                  checked={formData.spaService}
                  onChange={handleChange}
                  className="h-5 w-5 text-[#8D7B68] border-gray-300 rounded focus:ring-[#8D7B68]"
                  disabled={isSubmitting}
                />
                <span className="ml-3 text-[#3E3636]">🧖♀️ Spa Service</span>
              </label>

              <label className="flex items-center p-4 bg-white/50 rounded-xl border border-gray-200 hover:border-[#8D7B68]/50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  name="salonService"
                  checked={formData.salonService}
                  onChange={handleChange}
                  className="h-5 w-5 text-[#8D7B68] border-gray-300 rounded focus:ring-[#8D7B68]"
                  disabled={isSubmitting}
                />
                <span className="ml-3 text-[#3E3636]">💇♀️ Salon Service</span>
              </label>
            </div>
          </div>

          {/* Dynamic Service Sections */}
          {formData.spaService && (
            <div className="space-y-4 bg-white/30 p-6 rounded-xl border border-white/50">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#3E3636] mb-2">Spa Treatment *</label>
                  <select
                    name="selectedSpaService"
                    value={formData.selectedSpaService}
                    className={`w-full px-4 py-3 rounded-lg bg-white/90 border focus:ring-2 focus:ring-[#8D7B68]/20 transition-all text-gray-800 disabled:opacity-50 ${
                      errors.selectedSpaService ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#8D7B68]'
                    }`}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="" className="text-gray-800">Select Treatment</option>
                    {spaServices.map((service) => (
                      <option key={service} value={service} className="text-gray-800">{service}</option>
                    ))}
                  </select>
                  {errors.selectedSpaService && <p className="text-red-500 text-xs mt-1">{errors.selectedSpaService}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3E3636] mb-2">Spa Location *</label>
                  <select
                    name="spaLocation"
                    value={formData.spaLocation}
                    className={`w-full px-4 py-3 rounded-lg bg-white/90 border focus:ring-2 focus:ring-[#8D7B68]/20 transition-all text-gray-800 disabled:opacity-50 ${
                      errors.spaLocation ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#8D7B68]'
                    }`}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="" className="text-gray-800">Select Location</option>
                    {spaLocations.map((location) => (
                      <option key={location} value={location} className="text-gray-800">{location}</option>
                    ))}
                  </select>
                  {errors.spaLocation && <p className="text-red-500 text-xs mt-1">{errors.spaLocation}</p>}
                </div>
              </div>
            </div>
          )}

          {formData.salonService && (
            <div className="space-y-4 bg-white/30 p-6 rounded-xl border border-white/50">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#3E3636] mb-2">Salon Service *</label>
                  <select
                    name="selectedSalonService"
                    value={formData.selectedSalonService}
                    className={`w-full px-4 py-3 rounded-lg bg-white/90 border focus:ring-2 focus:ring-[#8D7B68]/20 transition-all text-gray-800 disabled:opacity-50 ${
                      errors.selectedSalonService ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#8D7B68]'
                    }`}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="" className="text-gray-800">Select Service</option>
                    {salonServices.map((service) => (
                      <option key={service} value={service} className="text-gray-800">{service}</option>
                    ))}
                  </select>
                  {errors.selectedSalonService && <p className="text-red-500 text-xs mt-1">{errors.selectedSalonService}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3E3636] mb-2">Salon Location *</label>
                  <select
                    name="salonLocation"
                    value={formData.salonLocation}
                    className={`w-full px-4 py-3 rounded-lg bg-white/90 border focus:ring-2 focus:ring-[#8D7B68]/20 transition-all text-gray-800 disabled:opacity-50 ${
                      errors.salonLocation ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#8D7B68]'
                    }`}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="" className="text-gray-800">Select Location</option>
                    {salonLocations.map((location) => (
                      <option key={location} value={location} className="text-gray-800">{location}</option>
                    ))}
                  </select>
                  {errors.salonLocation && <p className="text-red-500 text-xs mt-1">{errors.salonLocation}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-[#3E3636] mb-2">Additional Notes</label>
            <textarea
              name="message"
              value={formData.message}
              className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-200 focus:border-[#8D7B68] focus:ring-2 focus:ring-[#8D7B68]/20 transition-all h-32 text-gray-800"
              onChange={handleChange}
              placeholder="Any special requests or notes..."
              disabled={isSubmitting}
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className={`w-full py-4 bg-gradient-to-r from-[#8D7B68] to-[#6B5B4F] text-white font-semibold rounded-lg transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'
              }`}
          >
            {isSubmitting ? 'Submitting...' : 'Book Now'}
          </motion.button>
        </motion.form>
      </div>
    </div>
  )
}