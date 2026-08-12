import { NextRequest, NextResponse } from 'next/server'
import { unlink } from 'fs/promises'
import { getAuthUser } from '@/lib/auth'

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // console.log('🗑️ DELETE media request received for ID:', params.id)
  
  try {
    const user = await getAuthUser()
    // console.log('🔐 Auth user:', user ? 'Authenticated' : 'Not authenticated')
    
    if (!user) {
      // console.log('❌ Unauthorized access attempt')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Decode the base64 encoded file path
    let filePath: string
    try {
      filePath = Buffer.from(params.id, 'base64').toString('utf-8')
      // console.log('📁 Decoded file path:', filePath)
    } catch (error) {
      // console.log('❌ Invalid file ID format:', params.id)
      return NextResponse.json({ error: 'Invalid file ID' }, { status: 400 })
    }

    // Security check: ensure the file is within the uploads directory
    const uploadsDir = process.cwd() + '\\public\\uploads'
    if (!filePath.startsWith(uploadsDir)) {
      // console.log('❌ Security violation: file outside uploads directory')
      return NextResponse.json({ error: 'Invalid file path' }, { status: 403 })
    }

    try {
      await unlink(filePath)
      // console.log('✅ File deleted successfully:', filePath)
      
      return NextResponse.json({ 
        message: 'File deleted successfully',
        path: filePath 
      })
    } catch (error) {
      console.error('❌ File deletion error:', error)
      
      if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
        return NextResponse.json({ error: 'File not found' }, { status: 404 })
      }
      
      return NextResponse.json({ 
        error: 'Failed to delete file',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      }, { status: 500 })
    }
    
  } catch (error) {
    console.error('❌ Media delete error:', error)
    return NextResponse.json({ 
      error: 'Failed to delete media file',
      details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
    }, { status: 500 })
  }
}