import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";


export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const query = searchParams.get('email')
  const user = await prisma.user.findUniqueOrThrow({ where: { email: query! } })
  if (user) {
  const response = await prisma.user.update({
      where: { email: user.email },
      data: {
        virified:true
      }
    })
    return NextResponse.json(response)
  }
}