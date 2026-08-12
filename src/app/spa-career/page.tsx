import { Metadata } from 'next'
import Head from 'next/head'
import SpaCareerPage from '@/components/SpaCareerPage'
const structuredData = {
   "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "spa career",
      "item": "https://www.riverdayspa.com/spa-career"
    }
  ]
}
export const metadata: Metadata = {
  title: 'Exciting Spa Career Opportunities | Join Our Team Today!',
  description: 'Turn your passion for wellness into a rewarding spa career! Master massage, skincare & relaxation techniques to help others feel their best every day.',
  keywords: 'Best Massage Center in Chennai, Best Body Massage Spa Bangalore, spa career, massage therapist jobs, beautician jobs, spa jobs',
  openGraph: {
    title: 'Exciting Spa Career Opportunities | Join Our Team Today!',
    description: 'Turn your passion for wellness into a rewarding spa career! Master massage, skincare & relaxation techniques to help others feel their best every day.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.riverdayspa.com/spa-career'
  }
}

export default function Page() {
  return (
    <>
      <Head>
        <title>Exciting Spa Career Opportunities | Join Our Team Today!</title>
        <meta name="description" content="Turn your passion for wellness into a rewarding spa career! Master massage, skincare & relaxation techniques to help others feel their best every day." />
        <meta name="keywords" content="Best Massage Center in Chennai, Best Body Massage Spa Bangalore, spa career, massage therapist jobs, beautician jobs, spa jobs" />
        <meta property="og:title" content="Exciting Spa Career Opportunities | Join Our Team Today!" />
        <meta property="og:description" content="Turn your passion for wellness into a rewarding spa career! Master massage, skincare & relaxation techniques to help others feel their best every day." />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <SpaCareerPage />
    </>
  )
}