'use client'

import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"

export function LogoutButton() {
  const route = useRouter()

  async function logout () {
    await signOut({
      redirect: false
    })
    route.replace('/')
  }

  return (
    <button onClick={logout} className="flex item-center gap-2 text-zinc-500">
      Sair
      <LogOut />
    </button>
  );
}
