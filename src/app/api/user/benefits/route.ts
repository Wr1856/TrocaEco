import { NextRequest, NextResponse } from "next/server"
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
      const benefits = await prisma.userBenefits.findMany({
        where: {
          ownerId: userExists.id,
        },
        select: {
          id: true,
          benefit: true
        }
      })
      return NextResponse.json(benefits.map(b => ({...b.benefit, id: b.id })))
    }
    throw new Error('Usuário invalido')
  }
  throw new Error('Token invalido')
}