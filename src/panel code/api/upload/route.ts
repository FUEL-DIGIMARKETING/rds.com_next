import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import { join } from 'path'
import { getAuthUser } from '@/lib/auth'
import sharp from 'sharp'

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Generate clean filename
    const originalName = file.name.replace(/\.[^/.]+$/, '').toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-')
    const extension = file.name.split('.').pop()?.toLowerCase()

    let processedBuffer = buffer
    let finalExtension = extension

    // Process image if it's an image file
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension || '')) {
      try {
        // @ts-ignore - Sharp type compatibility issue
        processedBuffer = await sharp(buffer)
          .webp({ quality: 85 })
          .toBuffer()
        finalExtension = 'webp'
      } catch (error) {
        console.error('Image processing failed:', error)
      }
    }

    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const filename = `${originalName}.${finalExtension}`



    // LOCAL STORAGE: Save to VPS filesystem
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'blogs', year.toString(), month)

    try {
      await mkdir(uploadDir, { recursive: true })
      console.log('✅ Directory created/verified:', uploadDir)
    } catch (error) {
      console.error('❌ Directory creation failed:', error)
      return NextResponse.json({
        error: 'Failed to create upload directory',
        details: (error as Error).message,
        path: uploadDir
      }, { status: 500 })
    }

    // Generate unique filename
    let actualFilename = filename
    let filepath = join(uploadDir, actualFilename)
    let counter = 1

    // Check if file exists and generate unique name if needed
    while (existsSync(filepath)) {
      actualFilename = `${originalName}-${counter}.${finalExtension}`
      filepath = join(uploadDir, actualFilename)
      counter++
    }

    try {
      await writeFile(filepath, processedBuffer)
      console.log('✅ File saved to:', filepath)

      // Verify file was written
      if (!existsSync(filepath)) {
        throw new Error('File verification failed - file does not exist after write')
      }

      console.log('✅ File verified exists:', filepath)
    } catch (writeError) {
      console.error('❌ File write failed:', writeError)
      return NextResponse.json({
        error: 'Failed to save file',
        details: (writeError as Error).message
      }, { status: 500 })
    }

    // Always return clean URL - never include server paths
    const publicUrl = `/uploads/blogs/${year}/${month}/${actualFilename}`
    console.log('📁 Public URL:', publicUrl)

    return NextResponse.json({
      url: publicUrl,
      filename: actualFilename,
      size: processedBuffer.length,
      type: `image/${finalExtension}`
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    )
  }
}

