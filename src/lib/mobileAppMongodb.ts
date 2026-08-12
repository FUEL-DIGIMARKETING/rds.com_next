import mongoose from 'mongoose'

const MOBILE_APP_MONGODB_URI = process.env.MOBILE_APP_MONGODB_URI!

if (!MOBILE_APP_MONGODB_URI) {
  throw new Error('Please define the MOBILE_APP_MONGODB_URI environment variable')
}

let cached = global.mobileAppMongoose

if (!cached) {
  cached = global.mobileAppMongoose = { conn: null, promise: null }
}

async function mobileAppDbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 30000,
      connectTimeoutMS: 30000,
    }

    cached.promise = mongoose.createConnection(MOBILE_APP_MONGODB_URI, opts).asPromise().then((connection) => {
      console.log('Mobile App MongoDB connected successfully')
      return connection
    }).catch((error) => {
      console.error('Mobile App MongoDB connection error:', error)
      cached.promise = null
      throw error
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    console.error('Mobile App Database connection failed:', e)
    throw e
  }

  return cached.conn
}

export default mobileAppDbConnect
