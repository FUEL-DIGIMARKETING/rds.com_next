'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

interface Location {
  id: string
  name: string
  address: string
  phone: string
  lat: number
  lng: number
}

const locations: Location[] = [
  {
    id: 'chennai-egmore',
    name: 'Chennai - Egmore',
    address: 'New No.7A, Old No. 2/4, 1st Floor, Tamil Salai, Egmore, Chennai 600008',
    phone: '+91 9840898462',
    lat: 13.0047,
    lng: 80.2708
  },
  {
    id: 'coimbatore-rs',
    name: 'Coimbatore - RS Puram',
    address: 'No 166, Old No. 9/24, 1st Floor, Vagtune Building, Ramachandra Rd, R.S. Puram, Coimbatore 641002',
    phone: '+91 7305033023',
    lat: 11.0089,
    lng: 76.9754
  },
  {
    id: 'coimbatore-veera',
    name: 'Coimbatore - Veera Towers',
    address: 'Veera Towers, 2nd Floor, Dr Krishnasamy Mudaliyar Road, R.S. Puram, Coimbatore 641001',
    phone: '+91 9962877703',
    lat: 11.0089,
    lng: 76.9754
  },
  {
    id: 'vellore-bypass',
    name: 'Vellore - Bypass',
    address: '3, Bangalore Highway, next to Chennai Silks, Kagithapatarai, Vellore 632012',
    phone: '+91 8056252525',
    lat: 12.9716,
    lng: 79.1409
  },
  {
    id: 'vellore-katpadi',
    name: 'Vellore - Katpadi',
    address: 'Plot. No 109 Selvam Nagar, Thiruvallam road, near VIT College, Katpadi, Vellore 632007',
    phone: '+91 9840898481',
    lat: 12.9689,
    lng: 79.1344
  },
  {
    id: 'vellore-tollgate',
    name: 'Vellore - Tollgate',
    address: '10/2, Valasa Street, Infantry Road, Vasanthapuram, Kosapet, Vellore 632001',
    phone: '+91 8754477123',
    lat: 12.9352,
    lng: 79.1288
  },
  {
    id: 'tiruppur',
    name: 'Tiruppur',
    address: '16/16A Lakshmi Nagar, 50 Feet Road, PN Rd, near Miller Stop, Tiruppur 641601',
    phone: '+91 9500136424',
    lat: 11.1085,
    lng: 77.3411
  },
  {
    id: 'tiruppur-rayapuram',
    name: 'Tiruppur - Rayapuram',
    address: 'No 16 & 17, Ranganathapuram, Rayapuram, Thottipalayam village, Tiruppur 641601',
    phone: '+91 8925012309',
    lat: 11.1085,
    lng: 77.3411
  },
  {
    id: 'trichy',
    name: 'Trichy',
    address: 'No.75/E, Hotel Sona\'s First Floor, Salai Rd, Thillai Nagar, Tiruchirappalli 620018',
    phone: '+91 9500197780',
    lat: 10.7905,
    lng: 78.7047
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    address: 'Door No. 477, 15th Cross St, Double Rd, Indiranagar, Bengaluru 560038',
    phone: '+91 8904586507',
    lat: 12.9716,
    lng: 77.6412
  }
]

export default function LocationContainer() {
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0])
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)
  const [mapKey, setMapKey] = useState(0)

  useEffect(() => {
    setSelectedLocation(locations[0])
  }, [])

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location)
    setMapKey(prev => prev + 1)
  }

  const generateMapEmbedUrl = (location: Location) => {
    const zoom = 15
    return `https://www.google.com/maps?q=${location.lat},${location.lng}&z=${zoom}&output=embed`
  }

  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-[#F8F5F0] to-[#EAE0D5] text-[#3E3636]">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl lg:text-4xl font-extrabold text-[#8D7B68] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Visit Our Spa Locations
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-green-600 mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <motion.p
          className="text-lg text-[#3E3636]/80 mt-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Find the nearest River Salon and Day Spa location to you across Tamil Nadu and Bangalore
        </motion.p>
      </motion.div>

      {/* Main Location Container */}
      <motion.div
        className="max-w-7
        xl mx-auto bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/50"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 h-full">
          {/* Left Sidebar - Branch List */}
          <motion.div
            className="lg:col-span-1 bg-gradient-to-b from-[#8D7B68]/10 to-[#A9907E]/10 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-200 overflow-y-auto max-h-[600px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#8D7B68] mb-6 flex items-center gap-2">
              <MapPin size={24} className="text-green-600" />
              Our Branches
            </h3>

            <div className="space-y-3">
              {locations.map((location) => (
                <motion.button
                  key={location.id}
                  onClick={() => handleLocationSelect(location)}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 group ${
                    selectedLocation.id === location.id
                      ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg scale-105'
                      : hoveredLocation === location.id
                      ? 'bg-green-100 text-[#3E3636] shadow-md'
                      : 'bg-white text-[#3E3636] hover:bg-green-50 shadow-sm'
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 p-2 rounded-full ${
                      selectedLocation.id === location.id
                        ? 'bg-white/20'
                        : 'bg-green-600/20'
                    }`}>
                      <MapPin size={16} className={
                        selectedLocation.id === location.id
                          ? 'text-white'
                          : 'text-green-600'
                      } />
                    </div>
                    <div className="flex-1">
                      <p className={`font-bold text-sm ${
                        selectedLocation.id === location.id
                          ? 'text-white'
                          : 'text-[#8D7B68]'
                      }`}>
                        {location.name}
                      </p>
                      <p className={`text-xs mt-1 line-clamp-2 ${
                        selectedLocation.id === location.id
                          ? 'text-green-100'
                          : 'text-gray-500'
                      }`}>
                        {location.phone}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Map and Details */}
          <motion.div
            className="lg:col-span-2 flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Map Container */}
            <div className="flex-1 relative bg-gray-100 min-h-[400px] lg:min-h-[600px]">
              {selectedLocation && (
                <iframe
                  key={`${selectedLocation.id}-${mapKey}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={generateMapEmbedUrl(selectedLocation)}
                  title={selectedLocation.name}
                />
              )}
            </div>

            {/* Location Details Card */}
            <motion.div
              className="bg-white border-t border-gray-200 p-6 lg:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              key={selectedLocation.id}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Location Info */}
                <div>
                  <h3 className="text-2xl font-bold text-[#8D7B68] mb-4">
                    {selectedLocation.name}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <MapPin size={20} className="text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-gray-600">Address</p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {selectedLocation.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Phone size={20} className="text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-gray-600">Phone</p>
                        <a
                          href={`tel:${selectedLocation.phone.replace(/\s/g, '')}`}
                          className="text-green-600 font-bold hover:text-green-700 transition-colors"
                        >
                          {selectedLocation.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-col gap-3">
                  <motion.a
                    href={`tel:${selectedLocation.phone.replace(/\s/g, '')}`}
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-bold py-3 px-6 rounded-xl hover:from-green-700 hover:to-green-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone size={18} />
                    Call Now
                  </motion.a>

                  <motion.a
                    href={`https://www.google.com/maps/search/${selectedLocation.lat},${selectedLocation.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MapPin size={18} />
                    Get Directions
                  </motion.a>

                  <motion.a
                    href="/book-spa-service-appointment"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Clock size={18} />
                    Book Appointment
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
