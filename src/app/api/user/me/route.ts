import { NextResponse, NextRequest } from "next/server"
import jwt from 'jsonwebtoken'
import { prisma } from "@/lib/prisma"

export async function GET (req: NextRequest) {
  const token = req.headers.get('Authorization')
  if (token) {
    const [,accessToken] = token.split(' ')
    const user = jwt.verify(accessToken, process.env.NEXTAUTH_SECRET!) as any
    const userExists = await prisma.user.findUnique({
      where: { id: user.id },
      include: {
        points: {
          select: {
            amount: true
          }
        }
      }
    })
    if (userExists) {
      return NextResponse.json({
        id: userExists.id,
        name: userExists.name,
        email: userExists.email,
        address: userExists.address,
        phoneNumber: userExists.phoneNumber,
        points: userExists.points?.amount
      })
    }
    throw new Error('Usuário invalido')
  }
  throw new Error('Token invalido')
}