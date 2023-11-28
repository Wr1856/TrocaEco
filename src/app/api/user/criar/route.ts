import { NextResponse, NextRequest, } from 'next/server'
import bcrypt from 'bcrypt'
import z from 'zod'
import nodemailer from 'nodemailer'

import { prisma } from '../../../../lib/prisma'

export async function POST(req: NextRequest) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jeff.lubowitz@ethereal.email',
        pass: '9BW4uhhGWaqWDHd6Et'
    }
  })

  
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
        points: {
          create: {
            amount: 0
          }
        }
      }
    })
    const mailOptions = {
      from: 'jeff.lubowitz@ethereal.email', // sender address
      to: 'jeff.lubowitz@ethereal.email', // receiver (use array of string for a list)
      subject: 'Verificacao da conta', // Subject line
      html: `Click no link <a href="http://localhost:3000/api/user/validate?email=${email}">http://localhost:3000/api/user/validate?email=${email}</a>`
    };
    
    transporter.sendMail(mailOptions, (err, info) => {
      if(err)
        console.log(err)
      else
        console.log(info);
    });

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