import { getServerSession } from "next-auth"
import { ReactNode } from "react"
import { nextAuthOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { cookies } from 'next/headers'
import { api } from "@/lib/api"

interface PrivateLayoutProps {
  children?: ReactNode
}

export default async function PrivateLayout ({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions)
  const res = await api.get('/user/verify', {
    headers: {
      Authorization: `Beare ${session?.token}`
    }
  })

  if (!session || !res.data.logged) {
    const cookieStore = cookies()
    cookieStore
      .getAll()
      .forEach(c => cookieStore.delete(c.name))
    redirect('/')
  }

  return <>{children}</>
}