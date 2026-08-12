import { NextResponse } from 'next/server'
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
    const banners = await OfferBanner.find({ isActive: true }).sort({ createdAt: -1 })
    return NextResponse.json({ banners })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch active banners' }, { status: 500 })
  }
}
