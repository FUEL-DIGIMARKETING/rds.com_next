'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, Sparkles, Clock, Calendar, Mail } from 'lucide-react'
import { getServiceImage } from '../utils/serviceImageMatcher'

interface PopupFormProps {
  onClose: () => void
  onSubmit: (data: any) => void
  categories: any[]
  services: any[]
  onReappear?: () => void
  preSelectedProduct?: any
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.riverdayspa.com'
const apiUrl = (path: string) => `${API_BASE}${path}`

const BRANCHES = [
  { id: 'chennai-egmore',      name: 'Chennai - Egmore',        city: 'Chennai' },
  { id: 'coimbatore-rspuram',  name: 'Coimbatore - RS Puram',   city: 'Coimbatore' },
  { id: 'coimbatore-elite',    name: 'Coimbatore - Veera Towers', city: 'Coimbatore' },
  { id: 'vellore-bypass',      name: 'Vellore - Bypass',        city: 'Vellore' },
  { id: 'vellore-katpadi',     name: 'Vellore - Katpadi',       city: 'Vellore' },
  { id: 'vellore-tollgate',    name: 'Vellore - Tollgate',      city: 'Vellore' },
  { id: 'tiruppur',            name: 'Tiruppur',                city: 'Tiruppur' },
  { id: 'tiruppur-rayapuram',  name: 'Tiruppur - Rayapuram',    city: 'Tiruppur' },
  { id: 'trichy',              name: 'Trichy',                  city: 'Trichy' },
  { id: 'bangalore',           name: 'Bangalore',               city: 'Bangalore' },
]

const SERVICE_CATEGORIES = [
  'Body massage',
  'Body Scrub - 50 Minutes',
  'Body Wrap - 50 Minutes',
  'Partial Massage',
  'Couple Packages',
  'Membership Packages',
  'Single Packages',
  'Anniversary Gift Card',
  'Birthday Gift Card',
  'Congratulations Gift Card',
  'Festival Gift Card',
  'Surprise Gift Card'
]

export default function BookingPopupForm({ onClose, onSubmit, categories, services, onReappear, preSelectedProduct }: PopupFormProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: preSelectedProduct?.category || '',
    service: preSelectedProduct || null,
    duration: '',
    location: '',
    branch: '',
    date: '',
    time: '',
    email: '',
    paymentMode: '' // 'online' | 'cod'
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [selectedService, setSelectedService] = useState<any>(preSelectedProduct || null)
  const [reappearTimer, setReappearTimer] = useState<NodeJS.Timeout | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [filteredServices, setFilteredServices] = useState<any[]>(preSelectedProduct ? [preSelectedProduct] : [])
  const [savedCustomerId, setSavedCustomerId] = useState<string | null>(null)
  const [savedBookingId, setSavedBookingId] = useState<string | null>(null)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const [confirmedPaymentId, setConfirmedPaymentId] = useState<string | null>(null)
  // Offer & discount settings from backend
  const [showProductDiscount, setShowProductDiscount] = useState(true)
  const [activeOffer, setActiveOffer] = useState<{ id: string; name: string; discountPercent: number; enabledBranches: string[] } | null>(null)
  const [appliedOffer, setAppliedOffer] = useState(false)

  useEffect(() => {
    fetch(apiUrl('/api/app/offers'))
      .then(r => r.json())
      .then(data => {
        setShowProductDiscount(data.showProductDiscount ?? true)
        const current = (data.offers || []).find((o: any) => o.isCurrentlyActive) || null
        setActiveOffer(current ? { ...current, enabledBranches: current.enabledBranches || [] } : null)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (preSelectedProduct && formData.category) {
      const filtered = services.filter(s => {
        return s.category === formData.category || s.name.includes(formData.category)
      })
      setFilteredServices(filtered)
    }
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  // For Body massage: 1=Name/Phone, 2=Category, 3=Duration, 4=Service, 5=Location, 6=Summary
  // For others:       1=Name/Phone, 2=Category, 3=Service, 4=Location, 5=Summary
  const isBodyMassage = formData.category === 'Body massage'

  const getDurationStep = () => 3
  const getServiceStep = () => isBodyMassage ? 4 : 3
  const getLocationStep = () => isBodyMassage ? 5 : 4
  const getSummaryStep = () => isBodyMassage ? 6 : 5
  const getTotalSteps = () => isBodyMassage ? 6 : 5

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required'
      else if (!/^[a-zA-Z\s]+$/.test(formData.name)) newErrors.name = 'Name can only contain letters'
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
      else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Phone must be 10 digits'
    }
    if (currentStep === 2 && !formData.category) newErrors.category = 'Please select a category'
    if (currentStep === getDurationStep() && isBodyMassage && !formData.duration) newErrors.duration = 'Please select a duration'
    if (currentStep === getServiceStep() && !selectedService) newErrors.service = 'Please select a service'
    if (currentStep === getLocationStep()) {
      if (!formData.location) newErrors.location = 'Location is required'
      if (!formData.branch) newErrors.branch = 'Branch is required'
      if (!formData.date) newErrors.date = 'Date is required'
      if (!formData.time) newErrors.time = 'Time is required'
    }
    if (currentStep === getSummaryStep()) {
      if (!formData.email.trim()) newErrors.email = 'Email is required'
      else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email'
      if (!formData.paymentMode) newErrors.paymentMode = 'Please select a payment mode'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Calculates the correct base price respecting global showProductDiscount setting
  const getEffectivePrice = (service: any) => {
    if (!service) return 0
    if (showProductDiscount && service.discountPrice && service.discountPrice < service.price) {
      return service.discountPrice
    }
    return service.price
  }

  // Calculates final total including active offer and GST
  const getPricingBreakdown = (service: any) => {
    const basePrice = getEffectivePrice(service)
    const productDiscount = showProductDiscount && service?.discountPrice < service?.price
      ? service.price - service.discountPrice : 0
    const offerDiscount = appliedOffer && activeOffer
      ? Math.round(basePrice * (activeOffer.discountPercent / 100)) : 0
    const afterDiscounts = basePrice - offerDiscount
    const gst = Math.round(afterDiscounts * 0.18)
    const total = afterDiscounts + gst
    return { originalPrice: service?.price || 0, basePrice, productDiscount, offerDiscount, gst, total }
  }

  const getOfferPreviewBreakdown = (service: any) => {
    const basePrice = getEffectivePrice(service)
    const offerDiscount = activeOffer
      ? Math.round(basePrice * (activeOffer.discountPercent / 100))
      : 0
    const previewPrice = basePrice - offerDiscount
    return { basePrice, offerDiscount, previewPrice }
  }

  const saveToWebBooking = async (paymentMode = 'pending') => {
    try {
      const { total: finalPrice } = getPricingBreakdown(selectedService)
      const res = await fetch(apiUrl('/api/webbooking/save'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          category: formData.category,
          duration: formData.duration || null,
          service: selectedService ? {
            id: selectedService.id,
            name: selectedService.name,
            price: finalPrice,
            originalPrice: selectedService.price,
            discountPercent: selectedService.discountPercent || null
          } : null,
          branch: formData.branch || null,
          location: formData.location || null,
          date: formData.date || null,
          time: formData.time || null,
          email: formData.email || null,
          paymentMode,
          existingBookingId: savedBookingId
        })
      })
      const data = await res.json()
      if (data.success) {
        setSavedCustomerId(data.customerId)
        setSavedBookingId(data.bookingId)
      }
    } catch (err) {
      console.error('Background save error:', err)
    }
  }

  const updatePaymentStatus = async (paymentId: string) => {
    try {
      await fetch(apiUrl('/api/webbooking/update-payment'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: formData.phone,
          bookingId: savedBookingId,
          paymentStatus: 'paid',
          paymentId
        })
      })
    } catch (err) {
      console.error('Payment status update error:', err)
    }
  }

  const handleNext = () => {
    if (validateStep(step)) {
      // When leaving location step — if offer was applied but new branch is ineligible, clear it
      if (step === getLocationStep() && appliedOffer && activeOffer && formData.branch) {
        const eligible = (activeOffer.enabledBranches || []).includes(formData.branch)
        if (!eligible) setAppliedOffer(false)
      }
      // When leaving service step - save to DB in background
      if (step === getServiceStep()) {
        saveToWebBooking('pending')
      }
      setStep(step + 1)
    }
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleCategorySelect = (category: string) => {
    setFormData(prev => ({ ...prev, category, duration: '', service: null }))
    setSelectedService(null)
    if (category !== 'Body massage') {
      const filtered = services.filter(s => {
        const sc = (s.category || '').toLowerCase()
        const cc = category.toLowerCase()
        return sc === cc || sc.includes(cc) || cc.includes(sc)
      })
      setFilteredServices(filtered)
    } else {
      setFilteredServices([])
    }
  }

  const handleDurationSelect = (duration: string) => {
    setFormData(prev => ({ ...prev, duration, service: null }))
    setSelectedService(null)
    // Find body massage category and filter by subCategory matching duration
    const bodyMassageCat = categories.find(c => c.name === 'Body massage')
    if (bodyMassageCat?.subCategories) {
      const sub = bodyMassageCat.subCategories.find((s: any) => s.name === duration)
      setFilteredServices(sub?.products || [])
    } else {
      // fallback: filter from all services by duration tag
      const filtered = services.filter(s => s.duration === (duration === '60 Minutes' ? '60 mins' : '90 mins'))
      setFilteredServices(filtered)
    }
  }

  const handleServiceSelect = (service: any) => {
    setSelectedService(service)
    setFormData(prev => ({ ...prev, service }))
  }

  const handleCOD = async () => {
    if (!validateStep(getSummaryStep())) return
    setIsProcessing(true)
    await saveToWebBooking('cod')
    if (reappearTimer) clearTimeout(reappearTimer)
    setIsProcessing(false)
    setBookingConfirmed(true)
  }

  const handlePayNow = async () => {
    if (!selectedService) return
    if (!validateStep(getSummaryStep())) return
    setIsProcessing(true)

    // Load Razorpay script FIRST before any async API calls
    if (!(window as any).Razorpay) {
      try {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script')
          script.src = 'https://checkout.razorpay.com/v1/checkout.js'
          script.onload = () => resolve()
          script.onerror = () => reject(new Error('Failed to load Razorpay script'))
          document.head.appendChild(script)
        })
      } catch {
        alert('Failed to load payment gateway. Please check your connection and try again.')
        setIsProcessing(false)
        return
      }
    }

    try {
      const { total: finalPrice } = getPricingBreakdown(selectedService)

      const bookingResponse = await fetch(apiUrl('/api/bookings'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: {
            fullName: formData.name,
            mobile: formData.phone,
            email: formData.email,
            address: formData.location,
            location: formData.location,
            notes: `Branch: ${formData.branch}, Date: ${formData.date}, Time: ${formData.time}`
          },
          services: [{ id: selectedService.id, name: selectedService.name, price: finalPrice, quantity: 1 }],
          amount: finalPrice,
          status: 'pending'
        })
      })
      const bookingData = await bookingResponse.json()
      if (!bookingData.success) {
        alert('Failed to create booking. Please try again.')
        setIsProcessing(false)
        return
      }
      const bookingId = bookingData.bookingId

      await saveToWebBooking('online')

      const paymentResponse = await fetch(apiUrl('/api/payments/create'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: finalPrice,
          purpose: 'Spa Booking',
          buyer_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          booking_id: bookingId
        })
      })
      const paymentData = await paymentResponse.json()

      if (!paymentData.success) {
        alert(`Failed to initiate payment: ${paymentData.message || 'Unknown error'}`)
        setIsProcessing(false)
        return
      }

      const options = {
        key: paymentData.key_id,
        amount: paymentData.amount,       // paise from backend
        currency: paymentData.currency,
        name: 'River Salon And Day Spa',
        description: selectedService.name,
        order_id: paymentData.order_id,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: { color: '#16a34a' },
        handler: async (response: any) => {
          try {
            const verifyRes = await fetch(apiUrl('/api/payments/verify'), {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              })
            })
            const verifyData = await verifyRes.json()
            if (verifyData.success) {
              await updatePaymentStatus(response.razorpay_payment_id)
              if (reappearTimer) clearTimeout(reappearTimer)
              setConfirmedPaymentId(response.razorpay_payment_id)
              setBookingConfirmed(true)
              setIsProcessing(false)
            } else {
              alert('Payment verification failed. Please contact support.')
              setIsProcessing(false)
            }
          } catch (err) {
            console.error('Verify error:', err)
            alert('Payment verification failed. Please contact support.')
            setIsProcessing(false)
          }
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false)
          }
        }
      }

      const rzp = new (window as any).Razorpay(options)
      rzp.on('payment.failed', (response: any) => {
        console.error('Razorpay payment failed:', response.error)
        alert(`Payment failed: ${response.error?.description || 'Please try again.'}`)
        setIsProcessing(false)
      })
      rzp.open()
    } catch (error: any) {
      console.error('Payment error:', error)
      alert(`Error processing payment: ${error?.message || 'Please try again.'}`)
      setIsProcessing(false)
    }
  }

  const handleCloseWithReappear = () => {
    if (reappearTimer) {
      clearTimeout(reappearTimer)
    }

    const timer = setTimeout(() => {
      if (onReappear) {
        onReappear()
      }
    }, 30000)

    setReappearTimer(timer)
    onClose()
  }

  useEffect(() => {
    return () => {
      if (reappearTimer) {
        clearTimeout(reappearTimer)
      }
    }
  }, [reappearTimer])

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  return (
    <AnimatePresence>
      {bookingConfirmed ? (
        <motion.div
          key="confirmation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span className="text-4xl">✅</span>
            </motion.div>
            <h2 className="text-2xl font-bold text-[#3E3636] mb-2">Booking Confirmed!</h2>
            <p className="text-gray-500 text-sm mb-6">Thank you, {formData.name}. Your booking has been received.</p>
            <div className="bg-green-50 rounded-xl p-4 text-left space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Service</span>
                <span className="font-semibold text-[#3E3636]">{selectedService?.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Branch</span>
                <span className="font-semibold text-[#3E3636]">{BRANCHES.find(b => b.id === formData.branch)?.name || formData.branch}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Date</span>
                <span className="font-semibold text-[#3E3636]">{formData.date}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Time</span>
                <span className="font-semibold text-[#3E3636]">{formData.time}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Payment</span>
                <span className="font-semibold text-green-600">
                  {formData.paymentMode === 'cod' ? '💵 Cash on Delivery' : '💳 Online Paid'}
                </span>
              </div>
              {confirmedPaymentId && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Payment ID</span>
                  <span className="font-semibold text-[#3E3636] text-xs">{confirmedPaymentId}</span>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-400 mb-6">A confirmation has been sent to {formData.email}</p>
            <button
              onClick={() => { onClose() }}
              className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all"
            >
              Done
            </button>
          </motion.div>
        </motion.div>
      ) : (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 pt-16 sm:pt-4"
        onClick={handleCloseWithReappear}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-2xl max-h-[80vh] sm:max-h-[85vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseWithReappear}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Close"
            title="Close (will reappear in 30 seconds)"
          >
            <X size={18} className="sm:w-5 sm:h-5" />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 sm:p-6 text-white">
            <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
              <Sparkles size={20} className="sm:w-6 sm:h-6" />
              <h2 className="text-lg sm:text-2xl font-bold">Exclusive Spa Offer</h2>
            </div>
            <p className="text-xs sm:text-base text-green-100">Complete your details to avail special discounts</p>
          </div>

          {/* Progress Bar */}
          <div className="px-4 sm:px-6 pt-3 sm:pt-6">
            <div className="flex justify-between mb-2 gap-1">
              {Array.from({ length: getTotalSteps() }).map((_, i) => (
                <div
                  key={i + 1}
                  className={`h-1 sm:h-2 flex-1 rounded-full transition-all duration-300 ${
                    i + 1 <= step ? 'bg-green-600' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-600 text-right">Step {step} of {getTotalSteps()}</p>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <AnimatePresence mode="wait">
              {/* Step 1: Name & Phone */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#8D7B68] mb-2">
                      What's your name? 👋
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 focus:outline-none transition-all text-sm sm:text-base text-black ${
                        errors.name
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-gray-200 focus:border-green-600'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#8D7B68] mb-2">
                      Your phone number 📱
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 focus:outline-none transition-all text-sm sm:text-base text-black ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-gray-200 focus:border-green-600'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                              {activeOffer && (
  <div className="bg-green-50 border-l-4 border-green-600 p-3 sm:p-4 rounded text-xs sm:text-sm">
    <p className="text-green-800">
      <span className="font-bold">
        ✨ {activeOffer.name}:
      </span>{" "}
      Get{" "}
      <span className="font-bold text-green-600">
        {activeOffer.discountPercent}% OFF
      </span>{" "}
      on your booking!
    </p>
  </div>
)}
                </motion.div>
              )} 

              {/* Step 2: Category Selection */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#8D7B68] mb-3">
                      Select a category 🌟
                    </label>
                    <div className="grid grid-cols-1 gap-3 sm:gap-4 max-h-80 overflow-y-auto">
                      {SERVICE_CATEGORIES.map(category => (
                        <motion.button
                          key={category}
                          onClick={() => handleCategorySelect(category)}
                          className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all text-left text-xs sm:text-sm font-semibold ${
                            formData.category === category
                              ? 'border-green-600 bg-green-50 text-green-700'
                              : 'border-gray-200 hover:border-green-400 text-[#3E3636]'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {category}
                        </motion.button>
                      ))}
                    </div>
                    {errors.category && <p className="text-red-500 text-xs mt-2">{errors.category}</p>}
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-3 sm:p-4 rounded text-xs sm:text-sm">
                    <p className="text-yellow-800">
                      <span className="font-bold">🎯 Limited Time:</span> Complete your booking now to lock in the special offer!
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Duration (Body Massage only) */}
              {step === 3 && isBodyMassage && (
                <motion.div key="step3-duration" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <label className="block text-xs sm:text-sm font-semibold text-[#8D7B68] mb-3">Select duration ⏱️</label>
                  <div className="grid grid-cols-1 gap-3">
                    {['60 Minutes', '90 Minutes'].map(dur => (
                      <motion.button
                        key={dur}
                        onClick={() => handleDurationSelect(dur)}
                        className={`p-3 sm:p-4 rounded-xl border-2 transition-all text-left text-sm font-semibold ${
                          formData.duration === dur ? 'border-green-600 bg-green-50 text-green-700' : 'border-gray-200 hover:border-green-400 text-[#3E3636]'
                        }`}
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      >
                        {dur}
                      </motion.button>
                    ))}
                  </div>
                  {errors.duration && <p className="text-red-500 text-xs mt-2">{errors.duration}</p>}
                </motion.div>
              )}

              {/* Step 3 (non-body) or Step 4 (body massage): Service Selection */}
              {step === getServiceStep() && (
                <motion.div key="step-service" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <label className="block text-xs sm:text-sm font-semibold text-[#8D7B68] mb-3">Select your service 🌟</label>
                  {activeOffer && (
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 mb-2">
                      <p className="text-xs font-bold text-amber-800">{activeOffer.name} — {activeOffer.discountPercent}% OFF</p>
                      <p className="text-[11px] text-amber-700 mt-1">Price preview below reflects the current active offer.</p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 gap-3 max-h-80 overflow-y-auto">
                    {filteredServices.length === 0 ? (
                      <div className="text-center py-4">
                        <p className="text-gray-500 text-sm">No services found.</p>
                        <p className="text-gray-400 text-xs mt-1">Category: {formData.category} | Total services: {services.length}</p>
                      </div>
                    ) : filteredServices.map(service => {
                      const preview = getOfferPreviewBreakdown(service)
                      const hasProductDiscount = showProductDiscount && service.discountPrice && service.discountPrice < service.price
                      const shouldShowOfferPrice = !!activeOffer
                      const displayOriginalPrice = service.price
                      const displayPrice = shouldShowOfferPrice ? preview.previewPrice : (hasProductDiscount ? service.discountPrice : service.price)

                      return (
                        <motion.button
                          key={service.id}
                          onClick={() => handleServiceSelect(service)}
                          className={`p-3 sm:p-4 rounded-xl border-2 transition-all text-left text-xs sm:text-sm ${
                            selectedService?.id === service.id ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-green-400'
                          }`}
                          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-start gap-2 sm:gap-3">
                            <img src={getServiceImage(service.name)} alt={service.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover" />
                            <div className="flex-1">
                              <p className="font-semibold text-[#3E3636]">{service.name}</p>
                              {service.duration && <p className="text-xs text-gray-600">{service.duration}</p>}
                              <div className="flex items-center gap-2 mt-1 flex-wrap">
                                {shouldShowOfferPrice ? (
                                  <>
                                    <span className="text-gray-400 line-through text-xs">&#8377;{displayOriginalPrice}</span>
                                    <span className="text-green-600 font-bold">&#8377;{displayPrice}</span>
                                  </>
                                ) : hasProductDiscount ? (
                                  <>
                                    <span className="text-gray-400 line-through text-xs">&#8377;{service.price}</span>
                                    <span className="text-green-600 font-bold">&#8377;{service.discountPrice}</span>
                                  </>
                                ) : (
                                  <span className="text-green-600 font-bold">&#8377;{service.price}</span>
                                )}
                                {hasProductDiscount && service.discountPercent && (
                                  <span className="bg-red-100 text-red-600 text-xs px-1.5 py-0.5 rounded-full font-semibold">{service.discountPercent}% OFF</span>
                                )}
                                {activeOffer && (
                                  <span className="bg-amber-100 text-amber-700 text-[10px] px-1.5 py-0.5 rounded-full font-semibold">{activeOffer.discountPercent}% OFF</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.button>
                      )
                    })}
                  </div>
                  {errors.service && <p className="text-red-500 text-xs mt-2">{errors.service}</p>}
                </motion.div>
              )}

              {/* Step 5 (or 4): Location, Branch, Date & Time */}
              {step === getLocationStep() && (
                <motion.div
                  key={`step${getLocationStep()}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#8D7B68] mb-2">
                      Select your location 📍
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => {
                        handleInputChange('location', e.target.value)
                        handleInputChange('branch', '') // reset branch when location changes
                      }}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 focus:outline-none transition-all text-sm sm:text-base text-black ${
                        errors.location ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-green-600'
                      }`}
                    >
                      <option value="">Choose a location</option>
                      {['Chennai', 'Bangalore', 'Coimbatore', 'Vellore', 'Tiruppur', 'Trichy'].map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                    {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                  </div>

                  {/* Branch selection with offer applicable/not applicable indicators */}
                  {formData.location && (
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-[#8D7B68] mb-2">
                        Select your branch 🏢
                      </label>
                      {activeOffer && (
                        <div className="mb-3 flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                          <span className="text-amber-600 text-xs">ℹ️</span>
                          <p className="text-xs text-amber-800">
                            <span className="font-semibold">{activeOffer.name} {activeOffer.discountPercent}% OFF</span> — only available at highlighted branches
                          </p>
                        </div>
                      )}
                      <div className="space-y-2">
                        {BRANCHES.filter(b => b.city === formData.location).map(branch => {
                          const offerApplicable = activeOffer
                            ? (activeOffer.enabledBranches || []).includes(branch.id)
                            : true
                          const isSelected = formData.branch === branch.id
                          const isBlocked = false // allow selection always, just show status

                          return (
                            <button
                              key={branch.id}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, branch: branch.id }))
                                if (errors.branch) setErrors(prev => ({ ...prev, branch: '' }))
                              }}
                              className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                                isSelected
                                  ? 'border-green-600 bg-green-50'
                                  : 'border-gray-200 hover:border-green-400 bg-white'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className={`text-sm font-semibold ${
                                    isSelected ? 'text-green-700' : 'text-[#3E3636]'
                                  }`}>{branch.name}</p>
                                  {activeOffer && (
                                    offerApplicable ? (
                                      <p className="text-xs text-green-600 font-medium mt-0.5 flex items-center gap-1">
                                        ✅ {activeOffer.name} {activeOffer.discountPercent}% applicable
                                      </p>
                                    ) : (
                                      <p className="text-xs text-red-500 font-medium mt-0.5 flex items-center gap-1">
                                        ❌ Offer not applicable at this branch
                                      </p>
                                    )
                                  )}
                                </div>
                                {isSelected && (
                                  <span className="text-green-600 text-lg">✓</span>
                                )}
                              </div>
                            </button>
                          )
                        })}
                      </div>
                      {errors.branch && <p className="text-red-500 text-xs mt-1">{errors.branch}</p>}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#8D7B68] mb-2">
                      Select date 📅
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      min={getTodayDate()}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 focus:outline-none transition-all text-sm sm:text-base text-black ${
                        errors.date
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-gray-200 focus:border-green-600'
                      }`}
                    />
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#8D7B68] mb-2">
                      Select time ⏰
                    </label>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 focus:outline-none transition-all text-sm sm:text-base text-black ${
                        errors.time
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-gray-200 focus:border-green-600'
                      }`}
                    />
                    {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-3 sm:p-4 rounded text-xs sm:text-sm">
                    <p className="text-blue-800">
                      <span className="font-bold">💡 Tip:</span> All our branches have ample parking and comfortable facilities!
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Step 6 (or 5): Order Summary with Email */}
              {step === getSummaryStep() && selectedService && (
                <motion.div
                  key={`step${getSummaryStep()}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 sm:p-6 rounded-xl border-2 border-green-200">
                    <h3 className="text-sm sm:text-lg font-bold text-[#3E3636] mb-4">📋 Order Summary</h3>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                        <span className="text-xs sm:text-sm text-gray-700">Name:</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#3E3636]">{formData.name}</span>
                      </div>
                      
                      <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                        <span className="text-xs sm:text-sm text-gray-700">Phone:</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#3E3636]">{formData.phone}</span>
                      </div>
                      
                      <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                        <span className="text-xs sm:text-sm text-gray-700">Location:</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#3E3636]">{formData.location}</span>
                      </div>
                      
                      <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                        <span className="text-xs sm:text-sm text-gray-700">Branch:</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#3E3636]">{BRANCHES.find(b => b.id === formData.branch)?.name || formData.branch}</span>
                      </div>

                      <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                        <span className="text-xs sm:text-sm text-gray-700">Date:</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#3E3636]">{formData.date}</span>
                      </div>

                      <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                        <span className="text-xs sm:text-sm text-gray-700">Time:</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#3E3636]">{formData.time}</span>
                      </div>
                      
                      <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                        <span className="text-xs sm:text-sm text-gray-700">Category:</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#3E3636]">{formData.category}</span>
                      </div>
                      
                      <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                        <span className="text-xs sm:text-sm text-gray-700">Service:</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#3E3636]">{selectedService.name}</span>
                      </div>

                      {formData.duration && (
                        <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                          <span className="text-xs sm:text-sm text-gray-700">Duration:</span>
                          <span className="text-xs sm:text-sm font-semibold text-[#3E3636]">{formData.duration}</span>
                        </div>
                      )}

                      {(() => {
                        const { originalPrice, basePrice, productDiscount, offerDiscount, gst, total } = getPricingBreakdown(selectedService)
                        return (
                          <>
                            {/* Active offer toggle */}
                            {activeOffer && (() => {
                              const selectedBranchObj = BRANCHES.find(b => b.id === formData.branch)
                              const branchEligible = selectedBranchObj
                                ? (activeOffer.enabledBranches || []).includes(selectedBranchObj.id)
                                : true
                              return (
                                <div className={`flex items-center justify-between p-3 rounded-xl border-2 mb-2 ${
                                  appliedOffer ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-gray-50'
                                }`}>
                                  <div>
                                    <p className="text-xs font-bold text-green-700">&#127775; {activeOffer.name} &mdash; {activeOffer.discountPercent}% OFF</p>
                                    {!branchEligible ? (
                                      <p className="text-xs text-red-500 font-medium mt-0.5">❌ Not applicable at {selectedBranchObj?.name || 'this branch'}</p>
                                    ) : (
                                      <p className="text-xs text-gray-500">Active now! Tap to apply</p>
                                    )}
                                  </div>
                                  <button
                                    type="button"
                                    disabled={!branchEligible}
                                    onClick={() => setAppliedOffer(v => !v)}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                      !branchEligible ? 'opacity-40 cursor-not-allowed bg-gray-300' :
                                      appliedOffer ? 'bg-green-600' : 'bg-gray-300'
                                    }`}
                                  >
                                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                      appliedOffer && branchEligible ? 'translate-x-6' : 'translate-x-1'
                                    }`} />
                                  </button>
                                </div>
                              )
                            })()}

                            <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                              <span className="text-xs sm:text-sm text-gray-700">Service Price:</span>
                              <div className="text-right">
                                {showProductDiscount && productDiscount > 0 ? (
                                  <>
                                    <span className="text-gray-400 line-through text-xs mr-2">&#8377;{originalPrice}</span>
                                    <span className="text-sm font-semibold text-[#3E3636]">&#8377;{basePrice}</span>
                                  </>
                                ) : (
                                  <span className="text-sm font-semibold text-[#3E3636]">&#8377;{originalPrice}</span>
                                )}
                              </div>
                            </div>
                            {offerDiscount > 0 && (
                              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                                <span className="text-xs sm:text-sm text-green-700 font-semibold">{activeOffer?.name} ({activeOffer?.discountPercent}%):</span>
                                <span className="text-xs sm:text-sm font-semibold text-green-600">&minus; &#8377;{offerDiscount}</span>
                              </div>
                            )}
                            <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                              <span className="text-xs sm:text-sm text-gray-700">GST (18%):</span>
                              <span className="text-xs sm:text-sm font-semibold text-orange-600">+ &#8377;{gst}</span>
                            </div>
                            <div className="flex justify-between items-center pt-2 bg-white p-3 rounded-lg">
                              <span className="text-sm sm:text-base font-bold text-[#3E3636]">Total Payable:</span>
                              <span className="text-lg sm:text-xl font-bold text-green-600">&#8377;{total}</span>
                            </div>
                          </>
                        )
                      })()}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#8D7B68] mb-2">
                      Email for confirmation 📧
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email address"
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 focus:outline-none transition-all text-sm sm:text-base text-black ${
                        errors.email ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-green-600'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Payment Mode Selection */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#8D7B68] mb-2">Select Payment Mode 💳</label>
                    <div className="grid grid-cols-2 gap-3">
                      <motion.button
                        onClick={() => handleInputChange('paymentMode', 'online')}
                        className={`p-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                          formData.paymentMode === 'online' ? 'border-green-600 bg-green-50 text-green-700' : 'border-gray-200 hover:border-green-400 text-[#3E3636]'
                        }`}
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      >
                        💳 Online Payment
                      </motion.button>
                      <motion.button
                        onClick={() => handleInputChange('paymentMode', 'cod')}
                        className={`p-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                          formData.paymentMode === 'cod' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-blue-400 text-[#3E3636]'
                        }`}
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      >
                        💵 Cash on Delivery
                      </motion.button>
                    </div>
                    {errors.paymentMode && <p className="text-red-500 text-xs mt-1">{errors.paymentMode}</p>}
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-3 sm:p-4 rounded text-xs sm:text-sm">
                    <p className="text-blue-800">
                      <span className="font-bold">✅ Confirm Details:</span> We'll send booking confirmation to your email.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-3 sm:p-6 bg-gray-50 flex gap-2 sm:gap-3">
            {step > 1 && (
              <button
                onClick={handlePrevious}
                disabled={isProcessing}
                className="flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-all text-xs sm:text-base disabled:opacity-50"
              >
                Back
              </button>
            )}
            {step === getSummaryStep() ? (
              <>
                {formData.paymentMode === 'cod' && (
                  <button
                    onClick={handleCOD}
                    disabled={!formData.email || !formData.paymentMode || isProcessing}
                    className={`flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-white transition-all text-xs sm:text-base ${
                      !formData.email || !formData.paymentMode || isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {isProcessing ? 'Confirming...' : '💵 Confirm COD Booking'}
                  </button>
                )}
                {formData.paymentMode === 'online' && (
                  <button
                    onClick={handlePayNow}
                    disabled={!formData.email || !formData.paymentMode || isProcessing}
                    className={`flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-white transition-all text-xs sm:text-base ${
                      !formData.email || !formData.paymentMode || isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600'
                    }`}
                  >
                    {isProcessing ? 'Processing...' : '💳 Pay Now'}
                  </button>
                )}
                {!formData.paymentMode && (
                  <button disabled className="flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-white bg-gray-400 cursor-not-allowed text-xs sm:text-base">
                    Select Payment Mode
                  </button>
                )}
              </>
            ) : (
              <button
                onClick={handleNext}
                disabled={(() => {
                  if (step === 2 && !formData.category) return true
                  if (step === getDurationStep() && isBodyMassage && !formData.duration) return true
                  if (step === getServiceStep() && !selectedService) return true
                  if (step === getLocationStep() && (!formData.location || !formData.branch || !formData.date || !formData.time)) return true
                  return isProcessing
                })()}
                className={`flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-base ${
                  (() => {
                    if (step === 2 && !formData.category) return true
                    if (step === getDurationStep() && isBodyMassage && !formData.duration) return true
                    if (step === getServiceStep() && !selectedService) return true
                    if (step === getLocationStep() && (!formData.location || !formData.branch || !formData.date || !formData.time)) return true
                    return isProcessing
                  })() ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600'
                }`}
              >
                {isProcessing ? 'Processing...' : step === getServiceStep() ? '🔍 Finding branches near you...' : 'Next'}
                {!isProcessing && <ChevronRight size={16} className="sm:w-5 sm:h-5" />}
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  )
}
