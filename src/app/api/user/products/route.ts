import { NextResponse, NextRequest } from "next/server"
import jwt from 'jsonwebtoken'
import { prisma } from "@/lib/prisma"

export async function GET (req: NextRequest) {
  const token = req.headers.get('Authorization')
  if (token) {
    const [,accessToken] = token.split(' ')
    const user = jwt.verify(accessToken, process.env.NEXTAUTH_SECRET!) as any
    const userExists = await prisma.user.findUnique({ where: { id: user.id }})
    if (userExists) {
      const products = await prisma.userProduct.findMany({
        where: {
          ownerId: userExists.id
        },
        select: {
          product: true
        }
      })

      const newProducts = products.map(d => ({ ...d.product }))

      return NextResponse.json(newProducts)
    }
    throw new Error('Usuário invalido')
  }
  throw new Error('Token invalido')
}

export async function POST (req: NextRequest) {
  const data = await req.json()
  const token = req.headers.get('Authorization')
  if (token) {
    const [,accessToken] = token.split(' ')
    const user = jwt.verify(accessToken, process.env.NEXTAUTH_SECRET!) as any
    const userExists = await prisma.user.findUnique({ where: { id: user.id }})
    if (userExists) {
      const { product } = await prisma.userProduct.create({
        data: {
          ownerId: userExists.id,
          productId: data.productId
        },
        select: {
          product: true
        }
      })
      const pointsUser = await prisma.points.findUnique({ where: { ownerId: userExists.id }}) 
      const res = await prisma.points.update({
        where: { ownerId: userExists.id },
        data: {
          amount: product.points + pointsUser?.amount!
        }
      })

      return NextResponse.json(res)
    }
    throw new Error('Usuário invalido')
  }
  throw new Error('Token invalido')
}

export const revalidate = 60