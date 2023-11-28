'use client'

import Image from 'next/image'
import user from '@/assets/user.png'
import { api } from '@/lib/api';
import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import { useSession } from 'next-auth/react'

export async function UserCard() {
  const session = useSession()
  const { data } = await api.get('/user/me', {
    headers: {
      Authorization: `Bearer ${session?.data?.token}`
    }
  })
  return (
    <div className=" grid grid-cols-[auto_1fr] w-80 pt-20 gap-x-3">
      <Image
        src={user}
        alt="user"
        width={64}
        height={64}
        className="row-span-2"
      />
      <span className="font-semibold text-xl text-gray-900 self-end">
        {session?.data?.user?.name}
      </span>
      <span className="text-gray-500 col-start-2 ">
        Total de ponto: <span className="font-bold text-gray-900">{data.points}</span>
      </span>
    </div>
  );
}
