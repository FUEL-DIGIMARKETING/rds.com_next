'use client'

import { useRouter } from 'next/navigation'
import { AuthUser } from '@/lib/auth'

interface AppAdminDashboardProps {
  user: AuthUser
}

export default function AppAdminDashboard({ user }: AppAdminDashboardProps) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6 animate-pulse">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mobile App Admin
          </h2>
          <p className="text-xl text-gray-600">Manage your mobile app content and settings</p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">App Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <button
              onClick={() => router.push('/app-admin/offer-banners')}
              className="group relative overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 text-white p-6 rounded-2xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              <div className="relative z-10 flex items-center">
                <div className="p-3 bg-white/20 rounded-xl mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg mb-1">Offer Banners</h3>
                  <p className="text-orange-100 text-sm">Manage special offers</p>
                </div>
              </div>
            </button>

            <button
              className="group relative overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-2xl opacity-50 cursor-not-allowed"
              disabled
            >
              <div className="relative z-10 flex items-center">
                <div className="p-3 bg-white/20 rounded-xl mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg mb-1">Push Notifications</h3>
                  <p className="text-blue-100 text-sm">Coming soon</p>
                </div>
              </div>
            </button>

            <button
              className="group relative overflow-hidden bg-gradient-to-br from-green-500 to-teal-600 text-white p-6 rounded-2xl opacity-50 cursor-not-allowed"
              disabled
            >
              <div className="relative z-10 flex items-center">
                <div className="p-3 bg-white/20 rounded-xl mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg mb-1">App Analytics</h3>
                  <p className="text-green-100 text-sm">Coming soon</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => router.push('/admin-dashboard')}
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mx-auto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Main Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}
