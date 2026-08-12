/**
 * Utility functions for handling blog images
 */

/**
 * Removes timestamp from blog image URLs and fixes corrupted paths
 * Example: /uploads/blogs/2025/11/image-1762233635146.webp -> /uploads/blogs/2025/11/image.webp
 */
export function cleanBlogImageUrl(url: string): string {
  if (!url) return url
  
  // Fix corrupted URLs with full server paths
  if (url.includes('/home/riverdayspanext/htdocs/www.riverdayspa.com/public/uploads/blogs/')) {
    const match = url.match(/\/uploads\/blogs\/(\d{4})\/(\d{2})\/(.+)$/)
    if (match) {
      const [, year, month, filename] = match
      return `/uploads/blogs/${year}/${month}/${filename}`
    }
  }
  
  // Check if it's a blog image URL
  if (url.includes('/uploads/blogs/')) {
    // Remove timestamp pattern (dash followed by numbers before file extension)
    return url.replace(/-\d+(\.[^.]+)$/, '$1')
  }
  
  return url
}

/**
 * Converts blog image URLs to clean direct URLs (no API endpoint needed)
 */
export function getBlogImageUrl(url: string): string {
  if (!url) return url
  
  // Fix corrupted URLs with full server paths
  if (url.includes('/home/riverdayspanext/htdocs/www.riverdayspa.com/public/uploads/blogs/')) {
    const match = url.match(/\/uploads\/blogs\/(\d{4})\/(\d{2})\/(.+)$/)
    if (match) {
      const [, year, month, filename] = match
      return `/uploads/blogs/${year}/${month}/${filename}`
    }
  }
  
  // Return clean URL directly (no API endpoint)
  return cleanBlogImageUrl(url)
}

/**
 * Processes blog content to replace image URLs with clean versions
 */
export function cleanBlogContent(content: string): string {
  if (!content) return content
  
  // Replace corrupted URLs with full server paths
  content = content.replace(
    /src="[^"]*\/home\/riverdayspanext\/htdocs\/www\.riverdayspa\.com\/public(\/uploads\/blogs\/[^"]+)"/g,
    'src="$1"'
  )
  
  // Replace all image URLs in the content with clean direct URLs
  return content.replace(
    /src="([^"]*\/uploads\/blogs\/[^"]+)"/g,
    (match, url) => {
      const cleanUrl = getBlogImageUrl(url)
      return `src="${cleanUrl}"`
    }
  )
}