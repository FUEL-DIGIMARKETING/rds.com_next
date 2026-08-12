import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

export interface AuthUser {
  userId: string
  username: string
  role: string
}

export async function getAuthUser(): Promise<AuthUser | null> {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('auth-token')?.value

    if (!token) {
      return null
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as AuthUser
    return decoded
  } catch (error) {
    return null
  }
}

export function verifyToken(token: string): AuthUser | null {
  try {
    console.log('Verifying token:', token.substring(0, 20) + '...')
    console.log('JWT_SECRET exists:', !!process.env.JWT_SECRET)
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as AuthUser
    console.log('Token verified successfully:', decoded)
    return decoded
  } catch (error) {
    console.error('Token verification failed:', error)
    return null
  }
}