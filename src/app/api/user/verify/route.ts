import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma'

export async function GET (req: NextRequest, res: NextResponse) {
  const token = req.headers.get('authorization')
  if (token) {
    const [,accessToken] = token.split(' ')
    try {
      const payload = jwt.verify(accessToken, process.env.NEXTAUTH_SECRET!) as any
      const userExists = await prisma.user.findUnique({
        where: { id: payload.id },
        include: {
          points: {
            select: {
              amount: true
            }
          }
        }
      })
      if (userExists) {
        return NextResponse.json({ logged: true })
      }
      return NextResponse.json({ logged: false })
    } catch (error) {
      return NextResponse.json({ logged: false })
    }
  }
  return NextResponse.json({ error: 'Token not provided!' }, {
    status: 403
  })
}