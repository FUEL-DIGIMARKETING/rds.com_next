'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'

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

export default function LocationMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(locations[0])
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)

  const generateMapEmbedUrl = (location: Location) => {
    const zoom = 15
    return `https://www.google.com/maps?q=${location.lat},${location.lng}&z=${zoom}&output=embed`
  }

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 items-stretch">
      {/* Map Container */}
      <motion.div
        className="lg:w-2/3 w-full relative bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-gray-200"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {selectedLocation && (
          <iframe
            key={selectedLocation.id}
            width="100%"
            height="500"
            style={{ border: 0, borderRadius: '24px' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={generateMapEmbedUrl(selectedLocation)}
            title={selectedLocation.name}
          />
        )}
      </motion.div>

      {/* Details Panel */}
      <motion.div
        className="lg:w-1/3 w-full flex flex-col"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Location Details */}
        {selectedLocation && (
          <motion.div
            key={selectedLocation.id}
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/50 flex-1 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-green-600 rounded-full p-2 mt-1">
                <MapPin size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#8D7B68] mb-1">
                  {selectedLocation.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedLocation.address}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-green-50 rounded-xl p-3 mb-6">
              <Phone size={18} className="text-green-600 flex-shrink-0" />
              <a
                href={`tel:${selectedLocation.phone.replace(/\s/g, '')}`}
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                {selectedLocation.phone}
              </a>
            </div>

            {/* Location List */}
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#8D7B68] mb-3">All Locations</p>
              <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                {locations.map((loc) => (
                  <motion.button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    onMouseEnter={() => setHoveredLocation(loc.id)}
                    onMouseLeave={() => setHoveredLocation(null)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 text-sm ${
                      selectedLocation.id === loc.id
                        ? 'bg-green-600 text-white shadow-md'
                        : hoveredLocation === loc.id
                        ? 'bg-green-100 text-gray-800'
                        : 'bg-gray-100 text-gray-700 hover:bg-green-50'
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    <div className="font-medium">{loc.name}</div>
                    <div className={`text-xs mt-1 ${
                      selectedLocation.id === loc.id ? 'text-green-100' : 'text-gray-500'
                    }`}>
                      {loc.phone}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
