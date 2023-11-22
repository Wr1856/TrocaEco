import { Search, Leaf, X } from 'lucide-react'
import { DialogBenefits } from '@/components/dialog-benefits'
import { UserCard } from '@/components/user-card'
import { api } from '@/lib/api'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'

interface Benefits {
  id: string
  name: string
  points: number,
}

export const metadata = {
  title: 'EcoTroca | Area do Usuário'
}

export default async function Inicio() {
  const session = await getServerSession(nextAuthOptions)
  const { data } = await api.get('/user/me', {
    headers: {
      Authorization: `Bearer ${session?.token}`
    }
  })
  const { data: benefits } = await api.get('/benefits') as { data: Benefits[] }
  const { data: products } = await api.get('/user/products', {
    headers: {
      Authorization: `Bearer ${session?.token}`
    }
  }) as { data: Benefits[] }
  return (
    <main className='px-56 pb-24'>
      <UserCard />
      <div className='flex justify-between p-10'>
        <div className='bg-white mt-16 w-[447px] rounded-2xl block py-px overflow-hidden'>
          <div className='flex flex-col pl-6 pt-4'>
            <span className='text-base font-semibold text-gray-500 pb-2'>Histórico de cadastramento</span>
            <span className='text-sm font-medium text-gray-300 pb-2'>Total de produtos <span className='text-gray-500 font-medium'>{products.length}</span> voce tem <span className='text-gray-500 font-medium'>{data.points}</span> de pontos</span>
          </div>
          <div className='h-96 overflow-y-scroll relative'>
            {products.length ? (
              <table className='justify-between [&>*>tr]:border-y [&>*>tr]:border-y-gray-200 [&>*>:last-of-type]:border-none text-sm font-bold text-gray-500 w-full'>
                <thead>
                  <tr className='h-16 '>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Pontos</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, i) => (
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
        <div className='bg-white mt-16 w-[447px]'>
          <div>
            <span className='w-full text-base font-semibold text-gray-500 p-4 block'>Resgate de benefício</span>
            <form className="flex items-center gap-4 px-4">
              <input
                type="text"
                name="procurar"
                className="bg-transparent border-b border-b-black outline-none w-full"
                placeholder="Digite o nome do beneficio..."
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
                    {benefits.map(benefit => (
                      <tr key={benefit.id} className="text-center h-9">
                        <td>{benefit.points}</td>
                        <td>{benefit.name}</td>
                        <td className='text-green-400 flex items-center justify-center'>
                          <DialogBenefits points={data.points} benefitPoint={benefit.points} />
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
