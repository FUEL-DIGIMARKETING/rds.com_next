import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'App Admin - River Day Spa',
  robots: { index: false, follow: false },
}

export default function AppAdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
