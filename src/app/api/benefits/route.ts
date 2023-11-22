import { NextResponse, NextRequest } from "next/server"
import jwt from 'jsonwebtoken'
import { prisma } from "@/lib/prisma"

export async function GET () {
  const benefits = await prisma.benefit.findMany()
  return NextResponse.json(benefits)
}

export async function POST (req: NextRequest) {
  const token = req.headers.get('Authorization')
  const { benefitId } = await req.json()
  if (token) {
    const [,accessToken] = token.split(' ')
    const user = jwt.verify(accessToken, process.env.NEXTAUTH_SECRET!) as any
    const userExists = await prisma.user.findUnique({ where: { id: user.id } })
    if (userExists) {
      const benefit = await prisma.benefit.findUniqueOrThrow({ where: { id: benefitId } })
      const data = await prisma.userBenefits.create({
        data: {
          benefitId,
          ownerId: userExists.id
        }
      })
      await prisma.points.update({
        where: {
          ownerId: userExists.id
        },
        data: {
          amount: {
            decrement: benefit.points
          }
        }
      })
      return NextResponse.json(data)
    }
    throw new Error('Usuário invalido')
  }
  throw new Error('Token invalido')
}