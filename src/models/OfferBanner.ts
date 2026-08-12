import mongoose from 'mongoose'

const offerBannerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  buttonText: { type: String, required: true, default: 'Book Now' },
  discountPercent: { type: Number, required: true, min: 0, max: 100 },
  imageUrl: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export default mongoose.models.OfferBanner || mongoose.model('OfferBanner', offerBannerSchema)
