import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { params: string[] } }
) {
  try {
    const [year, month, filename] = params.params
    
    if (!year || !month || !filename) {
      return NextResponse.json({ error: 'Invalid path' }, { status: 400 })
    }

    // Directory where the actual files are stored
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'blogs', year, month)
    
    try {
      // First try to find the exact file without timestamp
      const directFilePath = path.join(uploadsDir, filename)
      
      if (fs.existsSync(directFilePath)) {
        // Redirect to the direct file path
        return NextResponse.redirect(new URL(`/uploads/blogs/${year}/${month}/${filename}`, request.url))
      }
      
      // If exact file doesn't exist, try to find files with timestamps
      const baseName = path.parse(filename).name
      const extension = path.extname(filename)
      const files = fs.readdirSync(uploadsDir)
      
      // Find a file that starts with the base name and has the same extension
      const matchingFile = files.find(file => {
        const fileBaseName = path.parse(file).name
        const fileExtension = path.extname(file)
        
        // Check if the file starts with the base name and has the same extension
        return fileBaseName.startsWith(baseName) && fileExtension === extension
      })
      
      if (matchingFile) {
        // Redirect to the actual file
        return NextResponse.redirect(new URL(`/uploads/blogs/${year}/${month}/${matchingFile}`, request.url))
      }
    } catch (error) {
      console.error('Error reading directory:', error)
    }
    
    // If no matching file found, return 404
    return NextResponse.json({ error: 'Image not found' }, { status: 404 })
    
  } catch (error) {
    console.error('Clean blog image API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}