'use client'

import { api } from "@/lib/api";
import * as Dialog from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Product {
  id: string
  name: string
  points: number,
}

interface DialogProductsProps {
  data: Product
}

export function DialogProducts({ data }: DialogProductsProps) {
  const session = useSession()
  const route = useRouter()
  async function createProduct () {
    await api.post('/user/products', {
      productId: data.id,
    }, {
      headers: {
        Authorization: `Bearer ${session.data?.token}`
      },
    })
    route.refresh()
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex items-center uppercase h-9 text-green-400 ">
          Cadastrar
          <Plus className="pl-2" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="w-full h-screen bg-black/70 fixed inset-0" />
        <Dialog.Content className="w-96 flex flex-col bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-3xl">
          <span className=" text-center font-semibold pb-4">
            Você deseja cadastra o {data.name}?
          </span>
          <input
            type="text"
            placeholder="Insira o numero da NF ex: 27849"
            className="bg-transparent border border-zinc-500 rounded w-full my-8 px-4 py-2"
          />
          <button
            className="border border-green-700 bg-green-100 mb-1"
            onClick={createProduct}
          >
            Sim
          </button>
          <Dialog.Close className="border border-red-700 bg-red-100">
            Nao
          </Dialog.Close>
          <span className="text-center text-xs pt-4">
            Ao cadastrar o produto os {data.points} pontos equivalente a ele sao
            adicionados a sua conta!
          </span>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
