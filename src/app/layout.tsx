import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/WhatsappButton'
import CustomChatWidget from '@/components/CustomChatWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.riverdayspa.com'),
  title: 'Best Spa in Chennai - River Day Spa',
  description: 'Riverdayspa™ is one of the Best Spa in Chennai. We offer quality and professional massage therapy all over the bustling cities of Tamil Nadu and Bangalore.',
  keywords: 'spa Chennai, massage Chennai, best spa, River Day Spa, relaxation, wellness',
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.ico?v=2', sizes: '16x16', type: 'image/x-icon' }
    ],
    apple: [
      { url: '/images/favicon.avif', sizes: '180x180', type: 'image/avif' }
    ]
  },
  openGraph: {
    title: 'Best Spa in Chennai - River Day Spa',
    description: 'Riverdayspa™ is one of the Best Spa in Chennai. We offer quality and professional massage therapy all over the bustling cities of Tamil Nadu and Bangalore.',
    url: 'https://www.riverdayspa.com',
    siteName: 'River Day Spa',
    images: [
      {
        url: '/favicon.ico?v=2',
        width: 512,
        height: 512,
        alt: 'River Day Spa Logo',
      },
      {
        url: '/images/best-massage-in-chennai.webp',
        width: 1200,
        height: 630,
        alt: 'Best Spa in Chennai - River Day Spa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Spa in Chennai - River Day Spa',
    description: 'Riverdayspa™ is one of the Best Spa in Chennai. We offer quality and professional massage therapy all over the bustling cities of Tamil Nadu and Bangalore.',
    images: ['https://www.riverdayspa.com/images/favicon.avif'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Chennai',
    'geo.position': '13.0827;80.2707',
    'ICBM': '13.0827, 80.2707',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon and Logo Setup */}
        <link rel="icon" href="/favicon.ico?v=2" sizes="16x16" />
        <link rel="icon" href="/images/favicon.avif" sizes="32x32" type="image/avif" />
        <link rel="apple-touch-icon" href="/images/favicon.avif" sizes="180x180" />
        <link rel="shortcut icon" href="/images/favicon.avif" />
        <link rel="manifest" href="/manifest.json" />

        {/* Additional Logo Meta Tags for Google */}
        <meta property="og:logo" content="https://www.riverdayspa.com/images/favicon.avif" />
        <meta name="msapplication-TileImage" content="/images/favicon.avif" />
        <meta name="msapplication-TileColor" content="#1a365d" />

        <meta name="theme-color" content="#1a365d" />
        <meta name="author" content="River Day Spa" />




        {/* Preload critical hero image for LCP */}
        <link rel="preload" href="/images/hero1.png" as="image" fetchPriority="high" />

        {/* Resource hints for external domains */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//embed.tawk.to" />
        <link rel="dns-prefetch" href="//checkout.razorpay.com" />
        <link rel="preconnect" href="https://static.cloudflareinsights.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://cdn.razorpay.com" />

        {/* Google Analytics - Static for Search Console Verification */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-807EKRMBCD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-807EKRMBCD');
            `
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K57GJH2G');`
          }}
        />


      </head>
      <body className={`${inter.className} smooth-scroll`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K57GJH2G"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K57GJH2G');
            `
          }}
        />

        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <CustomChatWidget />
        <WhatsAppButton />

        {/* Optimized GTM - Load after user interaction or 3 seconds */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Delay GTM loading to improve initial page performance
              function loadGTM() {
                if (window.gtagLoaded) return;
                window.gtagLoaded = true;
                
                const script = document.createElement('script');
                script.async = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-807EKRMBCD';
                script.onload = function() {
                  gtag('js', new Date());
                  gtag('config', 'G-807EKRMBCD', { send_page_view: false });
                  gtag('event', 'page_view', { send_to: 'G-807EKRMBCD' });
                };
                document.head.appendChild(script);
              }
              
              // Load GTM on user interaction or after 3 seconds
              const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
              const loadGTMOnce = () => {
                loadGTM();
                events.forEach(event => document.removeEventListener(event, loadGTMOnce));
              };
              
              events.forEach(event => document.addEventListener(event, loadGTMOnce, { passive: true }));
              setTimeout(loadGTM, 3000);
            `
          }}
        />

        {/* Load reCAPTCHA only when forms are visible */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.loadRecaptcha = function() {
                if (window.recaptchaLoaded) return;
                window.recaptchaLoaded = true;
                const script = document.createElement('script');
                script.src = 'https://www.google.com/recaptcha/api.js?render=6LeTZIkpAAAAAEQhlK6VGgoARfwYkTfgBLQFavvV';
                script.async = true;
                document.head.appendChild(script);
              };
            `
          }}
        />

        {/* Defer Tawk.to Chat */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                setTimeout(function() {
                  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                  (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/61f154c3b9e4e21181bc02ac/1fqbb67ja';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
                  })();
                }, 1000);
              });
            `
          }}
        />
      </body>
    </html>
  )
}