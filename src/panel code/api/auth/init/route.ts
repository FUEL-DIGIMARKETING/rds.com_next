import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import User from '@/models/User'

export async function POST() {
  try {
    await dbConnect()

    // Check if user already exists
    const existingUser = await User.findOne({ username: 'riverspa' })
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 200 }
      )
    }

    // Create default admin user
    const user = new User({
      username: 'riverspa',
      password: 'blog@riverspa',
      role: 'admin'
    })

    await user.save()

    return NextResponse.json(
      { message: 'Default admin user created successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Init user error:', error)
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    )
  }
}