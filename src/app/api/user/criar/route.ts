import { NextResponse, NextRequest, } from 'next/server'
import bcrypt from 'bcrypt'
import z from 'zod'

import { prisma } from '../../../../lib/prisma'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const parseBody = z.object({
    name: z.string().min(10),
    email: z.string().email({ message: 'Email invalido' }),
    address: z.string().min(10),
    phoneNumber: z.string().min(11).max(16),
    password: z.string().min(6)
  })

  try {
    const { name, email, address, password, phoneNumber } = parseBody.parse(data)
    const criptoPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        address,
        phoneNumber,
        password: criptoPassword,
        Points: {
          create: {
            amount: 0
          }
        }
      }
    })

    return NextResponse.json({
      id: user.id,
      name,
      email,
      address,
      phoneNumber
    })
  } catch (error) {
    return NextResponse.json({ error })
  }
}