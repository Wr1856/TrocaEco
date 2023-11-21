import { NextResponse, NextRequest, } from 'next/server'
import bcrypt from 'bcrypt'
import z from 'zod'
import jwt from 'jsonwebtoken'

import { prisma } from '../../../../lib/prisma'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const parseBody = z.object({
    email: z.string().email({ message: 'Email invalido' }),
    password: z.string().min(6)
  })

  try {
    const { email, password } = parseBody.parse(data)
    
    const user = await prisma.user.findUnique({ where: { email }})
    if (user) {
      const isValid = await bcrypt.compare(password, user?.password!)
      if (isValid) {
        const token = await jwt.sign({
          id: user.id,
          name: user.name,
          email: user.email
        }, process.env.NEXTAUTH_SECRET!, {
          expiresIn: 60 * 60 * 24
        })
        return NextResponse.json({
          user: {
            id: user.id,
            name: user.name,
            email: user.email
          },
          token
        })
      }
    }

    throw new Error('Senha errada')
  } catch (error) {
    return NextResponse.json({ error })
  }
}