/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize bundle splitting and reduce unused code
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimize for production
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            // Separate vendor chunks
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
            // Separate common chunks
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.riverdayspa.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'riverdayspa.com',
        port: '',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'riverdayspa.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'riverdayspa.vercel.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/uploads/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 637],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/admin-login/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive, nosnippet, noimageindex, nocache',
          },
        ],
      },
      {
        source: '/admin-dashboard/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive, nosnippet, noimageindex, nocache',
          },
        ],
      },
      {
        source: '/uploads/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Expires',
            value: new Date(Date.now() + 31536000 * 1000).toUTCString(),
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Expires',
            value: new Date(Date.now() + 31536000 * 1000).toUTCString(),
          },
        ],
      },
      {
        source: '/(.*)\\.(jpg|jpeg|png|gif|webp|avif|svg|ico)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Expires',
            value: new Date(Date.now() + 31536000 * 1000).toUTCString(),
          },
        ],
      },
      {
        source: '/(.*)\\.(woff|woff2|ttf|eot)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/about-our-spa',
        destination: '/best-massage-spa-in-chennai',
        permanent: true,
      },
      {
        source: '/riverdayspa-packages-couples',
        destination: '/best-couples-spa-packages',
        permanent: true,
      },
      {
        source: '/riverdayspa-packages-singles',
        destination: '/best-spa-packages',
        permanent: true,
      },
      {
        source: '/hairsalon',
        destination: '/best-hair-saloon-in-chennai',
        permanent: true,
      },
      {
        source: '/hairsalon/packages',
        destination: '/beauty-salon-packages',
        permanent: true,
      },
      {
        source: '/hairsalon/hairsalon-menu',
        destination: '/beauty-salon-menu-card',
        permanent: true,
      },
      {
        source: '/river-day-spa-salon-careers',
        destination: '/spa-career',
        permanent: true,
      },
      {
        source: '/female-massage-therapist-jobs-riverdayspa',
        destination: '/female-massage-therapist-jobs',
        permanent: true,
      },
      {
        source: '/floor-manager-jobs-riverdayspa',
        destination: '/floor-manager-jobs',
        permanent: true,
      },
      {
        source: '/receptionist-male-female-jobs-riverdayspa',
        destination: '/receptionist-male-female-jobs',
        permanent: true,
      },
      {
        source: '/beautician-female-male-jobs-riverdayspa',
        destination: '/beautician-female-male-jobs',
        permanent: true,
      },
      {
        source: '/housekeeping-male-female-jobs-riverdayspa',
        destination: '/housekeeping-male-female-jobs',
        permanent: true,
      },
      {
        source: '/hair-dresser-male-jobs-riverdayspa',
        destination: '/hair-dresser-male-jobs',
        permanent: true,
      },
      {
        source: '/spa-massage-egmore',
        destination: '/body-massage-in-chennai-egmore',
        permanent: true,
      },
      {
        source: '/spa-massage-porur',
        destination: '/',
        permanent: true,
      },
      {
        source: '/spa-massage-vellore',
        destination: '/massage-spa-in-vellore',
        permanent: true,
      },
      {
        source: '/best-body-massage-spa-in-bypass-vellore-river-day-spa-contact-us',
        destination: '/best-body-massage-spa-in-bypass-vellore',
        permanent: true,
      },
      {
        source: '/spa-massage-trichy',
        destination: '/massage-spa-in-trichy',
        permanent: true,
      },
      {
        source: '/spa-massage-tirupur',
        destination: '/massage-spa-in-tirupur',
        permanent: true,
      },
      {
        source: '/spa-massage-bangalore',
        destination: '/spa-in-bangalore',
        permanent: true,
      },
      {
        source: '/hairsalon/egmore',
        destination: '/best-beauty-salon-in-chennai',
        permanent: true,
      },
      {
        source: '/hairsalon/rspuram',
        destination: '/salon-in-rspuram-coimbatore',
        permanent: true,
      },
      {
        source: '/hairsalon/book-spa-service-appointment',
        destination: '/book-spa-service-appointment',
        permanent: true,
      },
      {
        source: '/chennai-massages',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-bodywrap-services/raspberry-wraps',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-bodywrap-services/papaya-wrap',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-bodywrap-services/mango-wrap',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-bodywrap-services/coffee-wrap',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-bodywrap-services/chocolate-wrap',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-bodywrap-services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-bodyscrub-treatments/sea-salt-scrub',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-bodyscrub-treatments/lemongrass-scrub',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-bodyscrub-treatments/fruit-scrub',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-bodyscrub-treatments/coffee-scrub',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-bodyscrub-treatments/chocolate-scrub',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-bodyscrub-treatments',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-massages/partial',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ayurvedic-massage',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-massages/abhyanga',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-massages/head-toe-aroma',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-massages/deep-tissue',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-massages/detoxifying',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-massages/sports',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-massages/synchronized',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-massages/thai',
        destination: '/',
        permanent: true,
      },
      {
        source: '/balinese',
        destination: '/',
        permanent: true,
      },
      {
        source: '/best-swedish-massage',
        destination: '/',
        permanent: true,
      },
      {
        source: '/best-moroccan-bath-massage-bangalore-vellore-tirupur-riverdayspa',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-massages/swedish',
        destination: '/',
        permanent: true,
      },
      {
        source: '/couples',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chennai-massages/foot-reflexology',
        destination: '/',
        permanent: true,
      },
      {
        source: '/spa-deals',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hairsalon/alwarpet',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      // Force serve uploaded files in development
      {
        source: '/uploads/:path*',
        destination: '/api/serve-upload/:path*',
      },
      // Redirect specific API paths to external backend, but keep blog API local
      {
        source: '/api/categories',
        destination: 'https://api.riverdayspa.com/api/categories',
      },
      {
        source: '/api/bookings/:path*',
        destination: 'https://api.riverdayspa.com/api/bookings/:path*',
      },
      {
        source: '/api/payments/:path*',
        destination: 'https://api.riverdayspa.com/api/payments/:path*',
      },
      {
        source: '/api/send',
        destination: 'https://api.riverdayspa.com/send',
      },
      {
        source: '/api/send-mail',
        destination: 'https://api.riverdayspa.com/send-mail',
      },
      {
        source: '/api/send-details',
        destination: 'https://api.riverdayspa.com/send-details',
      },
      {
        source: '/api/send-email',
        destination: 'https://api.riverdayspa.com/send-email',
      },
      {
        source: '/api/send-booking',
        destination: 'https://api.riverdayspa.com/send-booking',
      },
      // Keep blog, auth, admin, contact, media, and upload APIs local
      // These will be handled by Next.js API routes
      // Note: /api/upload should NOT be rewritten to backend
    ]
  },
  // Optimize production builds
  ...(process.env.NODE_ENV === 'production' && {
    compiler: {
      removeConsole: {
        exclude: ['error'],
      },
    },
  }),
}

module.exports = nextConfig