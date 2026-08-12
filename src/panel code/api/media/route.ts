import { NextRequest, NextResponse } from 'next/server'
import { readdir, stat } from 'fs/promises'
import { join } from 'path'
import { getAuthUser } from '@/lib/auth'

export async function GET(request: NextRequest) {
  // console.log('📚 GET media files request received')

  try {
    const user = await getAuthUser()
    // console.log('🔐 Auth user:', user ? 'Authenticated' : 'Not authenticated')

    if (!user) {
      // console.log('❌ Unauthorized access attempt')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const uploadsDir = join(process.cwd(), 'public', 'uploads', 'blogs')
    // console.log('📁 Scanning directory:', uploadsDir)

    const files: any[] = []

    const scanDirectory = async (dir: string, relativePath = '') => {
      try {
        const items = await readdir(dir)
        // console.log(`🔍 Found ${items.length} items in ${dir}`)

        for (const item of items) {
          const fullPath = join(dir, item)
          const stats = await stat(fullPath)

          if (stats.isDirectory()) {
            await scanDirectory(fullPath, join(relativePath, item))
          } else {
            // Generate clean URL path
            const cleanRelativePath = join(relativePath, item).replace(/\\/g, '/')
            const fileUrl = `/uploads/blogs/${cleanRelativePath}`

            files.push({
              _id: Buffer.from(fullPath).toString('base64'),
              filename: item,
              url: fileUrl,
              size: stats.size,
              type: getFileType(item),
              uploadedAt: stats.birthtime,
              altText: ''
            })
          }
        }
      } catch (error) {
        // console.log(`⚠️ Directory scan error for ${dir}:`, error.message)
      }
    }

    await scanDirectory(uploadsDir)

    // Sort by upload date (newest first)
    files.sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())

    // console.log(`✅ Found ${files.length} media files`)
    return NextResponse.json({ files })
  } catch (error) {
    console.error('❌ Media fetch error:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch media files',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      },
      { status: 500 }
    )
  }
}

function getFileType(filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase()

  switch (ext) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg'
    case 'png':
      return 'image/png'
    case 'gif':
      return 'image/gif'
    case 'webp':
      return 'image/webp'
    case 'avif':
      return 'image/avif'
    case 'svg':
      return 'image/svg+xml'
    case 'pdf':
      return 'application/pdf'
    case 'txt':
      return 'text/plain'
    case 'md':
      return 'text/markdown'
    default:
      return 'application/octet-stream'
  }
}