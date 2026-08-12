import BlogSearch from '@/components/BlogSearch'

export const metadata = {
  title: 'Search Blog Posts - River Day Spa',
  description: 'Search and discover wellness tips, spa treatments, and beauty insights from River Day Spa blog.',
}

export default function BlogSearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32">
      <BlogSearch />
    </div>
  )
}