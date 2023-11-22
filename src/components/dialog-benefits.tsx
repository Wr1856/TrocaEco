'use client'

import { Benefits } from "@/app/(private-routes)/principal/page";
import { api } from "@/lib/api";
import * as Dialog from "@radix-ui/react-dialog";
import { Leaf } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


interface DialogBenefitsProps {
  points: number
  benefit: Benefits
}

export function DialogBenefits({ points, benefit }: DialogBenefitsProps) {
  const session = useSession()
  const route = useRouter()
  
  async function pegarBeneficio () {
    await api.post('/benefits', { benefitId: benefit.id }, {
      headers: {
        Authorization: `Bearer ${session.data?.token}`
      },
    })
    alert('Beneficio resgatado')
    route.refresh()
  }
  return (
    <Dialog.Root>
      {points >= benefit.points ? (
        <Dialog.Trigger asChild>
          <button className=" flex items-center">
            Disponível
            <Leaf className="ml-4" />
          </button>
        </Dialog.Trigger>
      ) : (
        <span className="text-gray-300">Indisponível</span>
      )}
      <Dialog.Portal>
        <Dialog.Overlay className="w-full h-screen bg-black/70 fixed inset-0" />
        <Dialog.Content className="w-96 flex flex-col bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-3xl">
          <span className=" text-center font-semibold pb-4">
            Você deseja resgatar o beneficio {benefit.name}?
          </span>
          <button
            className="border border-green-700 bg-green-100 mb-1"
            onClick={pegarBeneficio}
          >
            Sim
          </button>
          <Dialog.Close className="border border-red-700 bg-red-100">
            Nao
          </Dialog.Close>
          <span className="text-center text-xs pt-4">
            beneficio resgatados nao tem retorno!
          </span>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
