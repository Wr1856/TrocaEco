import { getServerSession } from "next-auth"
import { ReactNode } from "react"
import { nextAuthOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

interface PrivateLayoutProps {
  children?: ReactNode
}
export const metadata = { title: "Login | EcoTroca" };

export default async function PrivateLayout ({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions)
  
  if (session) {
    redirect('/principal')
  }

  return <>{children}</>
}