import { NextRequest, NextResponse } from 'next/server'
import { readdir, stat } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'
import { getAuthUser } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const uploadsDir = join(process.cwd(), 'public', 'uploads', 'blogs')
    const results: any[] = []

    const scanDirectory = async (dir: string, relativePath = '') => {
      try {
        const items = await readdir(dir)
        
        for (const item of items) {
          const fullPath = join(dir, item)
          const stats = await stat(fullPath)
          
          if (stats.isDirectory()) {
            await scanDirectory(fullPath, join(relativePath, item))
          } else {
            const cleanRelativePath = join(relativePath, item).replace(/\\/g, '/')
            const fileUrl = `/uploads/blogs/${cleanRelativePath}`
            const publicPath = join(process.cwd(), 'public', 'uploads', 'blogs', cleanRelativePath)
            
            results.push({
              filename: item,
              url: fileUrl,
              fullPath: fullPath,
              publicPath: publicPath,
              exists: existsSync(publicPath),
              size: stats.size
            })
          }
        }
      } catch (error) {
        console.error('Directory scan error:', error)
      }
    }

    await scanDirectory(uploadsDir)

    return NextResponse.json({
      totalFiles: results.length,
      existingFiles: results.filter(f => f.exists).length,
      missingFiles: results.filter(f => !f.exists).length,
      files: results.slice(0, 10) // Show first 10 for debugging
    })
  } catch (error) {
    console.error('Test files error:', error)
    return NextResponse.json({ error: 'Test failed' }, { status: 500 })
  }
}