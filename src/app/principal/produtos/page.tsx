'use client'

import Image from 'next/image'
import user from '@/assets/user.png'
import { Search, Plus } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

export default function Produtos() {
  const [points, setPoints] = useState(1400)
  
  return (
    <main className='px-56 pb-24'>
      <div className=" grid grid-cols-[auto_1fr] w-80 pt-20 gap-x-3">
        <Image src={user} alt='user' width={64} height={64} className='row-span-2' />
        <span className="font-semibold text-xl text-gray-900 self-end">Fulano de tal do Bueiro</span>
        <span className="text-gray-500 col-start-2 ">Total de ponto: <span className="font-bold text-gray-900">{points}</span></span>
      </div>
      <div className='flex justify-between p-10'>
        <div className='bg-white mt-16 w-[447px] rounded-2xl block py-px overflow-hidden'>
          <div className='flex flex-col pl-6 pt-4'>
            <span className='text-base font-semibold text-gray-500 pb-2'>Lista de produtos disponíveis</span>
            <span className='text-sm font-medium text-gray-300 pb-2'>Total de produtos disponíveis: <span className='text-sm text-gray-500'>999</span></span>
          </div>
          <div className='h-96 overflow-y-scroll'>
            <table className='justify-between [&>*>tr]:border-y [&>*>tr]:border-y-gray-200 [&>*>:last-of-type]:border-none text-sm font-bold text-gray-500 w-full'>
              <thead>
                <tr className='h-16 '>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Pontos</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 15 }).map((_, i) => (
                  <tr key={i} className='[&>*]:text-center h-9 text-xs font-medium'>
                    <td>{++i}</td>
                    <td>joaao</td>
                    <td>5000</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='bg-white mt-16 w-[447px] rounded-2xl'>
          <div>
            <span className='w-full text-base font-semibold text-gray-500 p-4 block'>Produtos disponiveis</span>
            <form className="flex items-center gap-4 px-4">
              <input
                type="text"
                name="procurar"
                className="bg-transparent border-b border-b-black outline-none w-full"
                placeholder="Digite o nome do produto..."
              />
              <button type="submit">
                <Search />
              </button>
            </form>
            <div className='h-96 overflow-y-scroll'>
              <table className='[&>*>tr]:border-y [&>*>tr]:border-y-gray-200 [&>*>:last-of-type]:border-none [&>*>tr]:text-xs text-gray-500 w-full'>
                  <thead>
                    <tr className='h-16'>
                      <th>Pontos</th>
                      <th>Nome</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 15 }).map((_, i) => (
                      <tr className="text-center h-9">
                        <td>{100 * i}</td>
                        <Td qtd={i}/>
                        <td className='mtext-green-400 flex items-center justify-center'>
                          <Dialog.Root>
                            {points >= (100 * i) ? (
                              <Dialog.Trigger asChild>
                                <button className="flex items-center uppercase h-9 text-green-400 ">
                                  Cadastrar
                                  <Plus className='pl-2'/>
                                </button>
                              </Dialog.Trigger>
                            ) : (
                              <span className='text-gray-300'>Indisponível</span>
                            )}
                            <Dialog.Portal>
                              <Dialog.Overlay className="w-full h-screen bg-black/70 fixed inset-0" />
                              <Dialog.Content className="w-96 flex flex-col bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-3xl">
                                <span className=' text-center font-semibold pb-4'>Você deseja cadastra o {`produto ${i}`}?</span>
                                <input type="text" placeholder="Insira o numero da NF ex: 27849" className="bg-transparent border border-zinc-500 rounded w-full my-8 px-4 py-2" />
                                <button className='border border-green-700 bg-green-100 mb-1' onClick={() => {
                                  setPoints(points + (100 * i))
                                }}>Sim</button>
                                <Dialog.Close className="border border-red-700 bg-red-100">
                                  Nao
                                </Dialog.Close>
                                <span className='text-center text-xs pt-4'>Ao cadastrar o produto os {100 * i} pontos equivalente a ele sao adicionados a sua conta!</span>
                              </Dialog.Content>
                            </Dialog.Portal>
                          </Dialog.Root>
                        </td>
                      </tr>
                    ))}
                  </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

interface TdProps {
  qtd: number
}

function Td ({ qtd }: TdProps) {
  return <td>{`Produto ${++qtd}`}</td>
}