import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8F5F0] to-[#EAE0D5]">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-[#8D7B68] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#3E3636] mb-6">Page Not Found</h2>
        <p className="text-[#3E3636]/80 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#8D7B68] text-white px-6 py-3 rounded-lg hover:bg-[#6B5B4F] transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}