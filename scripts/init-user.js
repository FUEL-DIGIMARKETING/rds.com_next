const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const MONGODB_URI = 'mongodb+srv://FDM_DB:Fueldigi%40db@fdm.yl5l65l.mongodb.net/riverdayspa?retryWrites=true&w=majority&appName=FDM'

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'editor'],
    default: 'admin',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

async function initUser() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')

    const User = mongoose.model('User', UserSchema)

    // Check if user exists
    const existingUser = await User.findOne({ username: 'riverspa' })
    if (existingUser) {
      console.log('User already exists')
      await mongoose.disconnect()
      return
    }

    // Hash password
    const hashedPassword = await bcrypt.hash('blog@riverspa', 12)

    // Create user
    const user = new User({
      username: 'riverspa',
      password: hashedPassword,
      role: 'admin'
    })

    await user.save()
    console.log('User created successfully!')
    console.log('Username: riverspa')
    console.log('Password: blog@riverspa')

    await mongoose.disconnect()
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

initUser()