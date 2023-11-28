import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {
  const users = await prisma.user.findMany({

    orderBy:{
      points:{amount:"desc"}
    },
    select: {
      name: true,
      id:true,
      points: {
        select: {
          amount: true
        }
      }
    }
  })
  return NextResponse.json(users)
}