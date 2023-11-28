'use client '

import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { StateBenefit } from "@/components/state-benefit"
import { api } from "@/lib/api"
import { getServerSession } from "next-auth"
import { useEffect } from "react"

interface BenefitsType {
  id: string
  name: string
  points: number,
}

export default async function Benefits() {
  const session = await getServerSession(nextAuthOptions)
  const { data: benefits } = await api.get<BenefitsType[]>('/user/benefits', {
    headers: {
      Authorization: `Bearer ${session?.token}`
    }
  })
  return (
    <div className="w-full max-w-5xl mx-auto">
      <table className="w-full bg-white rounded mt-10 overflow-hidden">
        <thead className="bg-zinc-200">
          <tr className="[&>th]:py-4 [&>*>td]:px-4">
            <th>#</th>
            <th>Nome</th>
            <th>Custo</th>
            <th>Status</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody className="text-sm [&>tr:hover]:bg-zinc-100 [&>tr]:transition-colors [&>*>td]:py-4 [&>*>td]:px-4 [&>*]:border-b [&>*]:border-b-zinc-300 [&>:last-of-type]:border-none">
         {benefits.map((benefit, i) => (
          <tr key={benefit.id + benefit.points}>
            <td>{++i}</td>
            <td>
              {benefit.name}
            </td>
            <td>{benefit.points} pontos</td>
            <td>
              <StateBenefit type="waiting" />
            </td>
            <td>NZ17234848BR - correios</td>
          </tr>
         ))}
        </tbody>
      </table>
    </div>
  );
}
