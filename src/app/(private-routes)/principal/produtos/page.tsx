import { Search } from 'lucide-react'
import { getServerSession } from 'next-auth'

import { api } from '@/lib/api'
import { DialogProducts } from '@/components/dialog-products'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { UserCard } from '@/components/user-card'

interface Benefits {
  id: string
  name: string
  points: number,
}

export const metadata = {
  title: 'EcoTroca | Cadastro produtos'
}

export default async function Produtos() {
  const session = await getServerSession(nextAuthOptions)
  const { data: products } = await api.get('/products') as { data: Benefits[] }
  const { data: userProducts } = await api.get('/user/products', {
    headers: {
      Authorization: `Bearer ${session?.token}`
    }
  }) as { data: Benefits[] }
  
  return (
    <main className='px-56 pb-24'>
      <div className=" grid grid-cols-[auto_1fr] w-80 pt-20 gap-x-3">
        <UserCard />
      </div>
      <div className='flex justify-between p-10'>
        <div className='bg-white mt-16 w-[447px] rounded-2xl block py-px overflow-hidden'>
          <div className='flex flex-col pl-6 pt-4'>
            <span className='text-base font-semibold text-gray-500 pb-2'>Lista de produtos disponíveis</span>
            <span className='text-sm font-medium text-gray-300 pb-2'>Total de produtos disponíveis: <span className='text-sm text-gray-500'>{userProducts.length}</span></span>
          </div>
          <div className='h-96 overflow-y-scroll relative'>
          {userProducts.length ? (
              <table className='justify-between [&>*>tr]:border-y [&>*>tr]:border-y-gray-200 [&>*>:last-of-type]:border-none text-sm font-bold text-gray-500 w-full'>
                <thead>
                  <tr className='h-16 '>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Pontos</th>
                  </tr>
                </thead>
                <tbody>
                  {userProducts.map((product, i) => (
                    <tr key={product.id} className='[&>*]:text-center h-9 text-xs font-medium'>
                      <td>{++i}</td>
                      <td>{product.name}</td>
                      <td>{product.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ): (
              <span className='my-auto text-center block text-sm text-gray-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>Sem produtos no sistema</span>
            )}
          </div>
        </div>
        <div className='bg-white mt-16 w-[447px] rounded-2xl'>
          <div>
            <span className='w-full text-base font-semibold text-gray-500 p-4 block'>Produtos disponíveis</span>
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
                      <th>Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <tr key={product.id} className="text-center h-9">
                        <td>{product.points}</td>
                        <td>{product.name}</td>
                        <td className='mtext-green-400 flex items-center justify-center'>
                          <DialogProducts data={product} />
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
