import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Update Required – RiverDay Spa App',
  description: 'Please update your RiverDay Spa app to continue booking.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.riverdayspa.booking'
const APP_STORE_URL = 'https://apps.apple.com/app/id6761760106'

export default function UpdatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#f0fdf4] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-green-100">

          {/* Top green banner */}
          <div className="bg-gradient-to-r from-green-700 to-green-500 px-8 py-8 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">Update Required</h1>
            <p className="text-green-100 text-sm">A newer version of the app is available</p>
          </div>

          {/* Body */}
          <div className="px-8 py-8">

            {/* Logo + brand */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md border border-green-100 flex-shrink-0">
                <img
                  src="https://www.riverdayspa.com/images/favicon.avif"
                  alt="RiverDay Spa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base leading-tight">RiverDay Spa</p>
                <p className="text-xs text-gray-400">Book. Relax. Rejuvenate.</p>
              </div>
            </div>

            {/* Highlight message */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 text-center">
              <p className="text-amber-800 text-sm font-medium leading-relaxed">
                🚀 We&apos;ve launched exciting new features including <strong>exclusive offers</strong>,{' '}
                <strong>smart pricing</strong>, and a <strong>faster booking experience</strong>.
              </p>
            </div>

            <p className="text-gray-500 text-sm text-center mb-6 leading-relaxed">
              To continue booking your spa services, please update to the latest version of the RiverDay Spa app.
            </p>

            {/* What's new list */}
            <div className="space-y-3 mb-8">
              {[
                { icon: '🎁', text: 'Exclusive time-based offers & discounts' },
                { icon: '💳', text: 'Faster & secure Razorpay payments' },
                { icon: '📍', text: 'Improved branch selection experience' },
                { icon: '🔔', text: 'Real-time booking notifications' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-green-50 rounded-xl px-4 py-3">
                  <span className="text-lg">{item.icon}</span>
                  <p className="text-sm text-gray-700 font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Store buttons */}
            <div className="space-y-3">

              {/* Google Play */}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-gray-900 hover:bg-gray-800 active:scale-95 transition-all duration-200 text-white rounded-2xl px-6 py-4 shadow-lg"
              >
                {/* Google Play SVG icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7 flex-shrink-0" fill="white">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256-256L47 0zm425.6 225.6l-58.9-34-67.7 67.7 67.7 67.7 59.1-34c16.8-9.8 16.8-34.9-.2-44.4v-23zm-220.1 25.5L47 512l280.8-161.2-75.3-75.3z"/>
                </svg>
                <div className="text-left">
                  <p className="text-xs text-gray-300 leading-none mb-0.5">GET IT ON</p>
                  <p className="text-base font-bold leading-none">Google Play</p>
                </div>
              </a>

              {/* App Store */}
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-gray-900 hover:bg-gray-800 active:scale-95 transition-all duration-200 text-white rounded-2xl px-6 py-4 shadow-lg"
              >
                {/* Apple SVG icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 814 1000" className="w-7 h-7 flex-shrink-0" fill="white">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.6-49 192.5-49 30.8 0 108.2 2.6 168.6 71.9zm-174.5-89.3c-27.5-32.5-64.7-58.1-116.9-58.1-8.3 0-16.6.6-24.9 1.9 1.3-8.3 1.9-16.6 1.9-24.9 0-71.9-41.5-138.6-100.3-173.5-35.8-21.4-76-32.5-117.5-32.5-3.2 0-6.4.6-9.6.6 1.3-8.3 1.9-16.6 1.9-24.9C249.7 62.2 188.1 0 112.5 0 50.3 0 0 50.3 0 112.5c0 62.2 50.3 112.5 112.5 112.5 8.3 0 16.6-.6 24.9-1.9-1.3 8.3-1.9 16.6-1.9 24.9 0 71.9 41.5 138.6 100.3 173.5 35.8 21.4 76 32.5 117.5 32.5 3.2 0 6.4-.6 9.6-.6-1.3 8.3-1.9 16.6-1.9 24.9 0 62.2 50.3 112.5 112.5 112.5 62.2 0 112.5-50.3 112.5-112.5 0-8.3-.6-16.6-1.9-24.9 8.3 1.3 16.6 1.9 24.9 1.9 62.2 0 112.5-50.3 112.5-112.5 0-35.8-16.6-67.7-42.8-89.3z"/>
                </svg>
                <div className="text-left">
                  <p className="text-xs text-gray-300 leading-none mb-0.5">DOWNLOAD ON THE</p>
                  <p className="text-base font-bold leading-none">App Store</p>
                </div>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span>4.8★ Rated</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>10K+ Users</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} River Salon And Day Spa · All rights reserved
        </p>
      </div>
    </div>
  )
}
