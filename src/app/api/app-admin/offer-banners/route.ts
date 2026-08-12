import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'
import mongoose from 'mongoose'

const MOBILE_APP_MONGODB_URI = process.env.MOBILE_APP_MONGODB_URI!

const offerBannerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  buttonText: { type: String, required: true, default: 'Book Now' },
  discountPercent: { type: Number, required: true, min: 0, max: 100 },
  imageUrl: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

let mobileAppConnection: mongoose.Connection | null = null

async function getMobileAppConnection() {
  if (mobileAppConnection) return mobileAppConnection
  mobileAppConnection = await mongoose.createConnection(MOBILE_APP_MONGODB_URI).asPromise()
  return mobileAppConnection
}

export async function GET() {
  try {
    const conn = await getMobileAppConnection()
    const OfferBanner = conn.models.OfferBanner || conn.model('OfferBanner', offerBannerSchema)
    const banners = await OfferBanner.find().sort({ createdAt: -1 })

    // Transform _id to id for frontend compatibility
    const transformedBanners = banners.map(banner => ({
      id: banner._id.toString(),
      title: banner.title,
      buttonText: banner.buttonText,
      discountPercent: banner.discountPercent,
      imageUrl: banner.imageUrl,
      isActive: banner.isActive,
      createdAt: banner.createdAt
    }))

    return NextResponse.json({ banners: transformedBanners })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch banners' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const conn = await getMobileAppConnection()
    const OfferBanner = conn.models.OfferBanner || conn.model('OfferBanner', offerBannerSchema)

    const formData = await request.formData()
    const image = formData.get('image') as File
    const title = formData.get('title') as string
    const buttonText = formData.get('buttonText') as string
    const discountPercent = parseInt(formData.get('discountPercent') as string)

    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const filename = `banner-${Date.now()}-${image.name.replace(/\s+/g, '-')}`
    const filepath = path.join(process.cwd(), 'public', 'uploads', filename)
    await writeFile(filepath, buffer)

    const imageUrl = `/uploads/${filename}`

    const banner = await OfferBanner.create({
      title,
      buttonText,
      discountPercent,
      imageUrl,
    })

    return NextResponse.json({ success: true, banner })
  } catch (error) {
    console.error('Error creating banner:', error)
    return NextResponse.json({ success: false, message: 'Failed to create banner' }, { status: 500 })
  }
}
