import Image from 'next/image'
import user from '@/assets/user.png'

export default function Inicio() {
  return (
    <main className='px-56'>
      <div className=" grid grid-cols-[auto_1fr] w-80 pt-20 gap-x-3">
        <Image src={user} alt='user' width={64} height={64} className='row-span-2' />
        <span className="font-semibold text-xl text-gray-900 self-end">Fulano de tal do Bueiro</span>
        <span className="text-gray-500 col-start-2 ">Total de ponto: <span className="font-bold text-gray-900">893</span></span>
      </div>
      <div className='flex justify-between'>
        <div className='bg-white mt-16 h-96 w-[447px] rounded-2xl'>
          <div className='flex flex-col pl-6 pt-4'>
            <span className='text-base font-semibold text-gray-500 pb-2'>Histórico de cadastramento</span>
            <span className='text-sm font-medium text-gray-300 pb-2'>Total de produtos <span className='text-gray-500 font-medium'>198</span> voce tem <span className='text-gray-500 font-medium'>893</span> de pontos</span>
          </div>
          <table className=' justify-between [&>*>tr]:border-y [&>*>tr]:border-y-gray-200 text-sm font-bold text-gray-500 w-full'>
            <thead>
              <tr className='h-16 '>
                <th>#</th>
                <th>Nome</th>
                <th>Pontos</th>
              </tr>
            </thead>
            <tbody>
            <tr className='[&>*]:text-center h-9 text-xs font-medium'>
                <td>1</td>
                <td>joaao</td>
                <td>5000</td>
              </tr>
              <tr className='[&>*]:text-center h-9 text-xs font-medium'>
                <td>1</td>
                <td>joaao</td>
                <td>5000</td>
              </tr>
              <tr className='[&>*]:text-center h-9 text-xs font-medium'>
                <td>1</td>
                <td>joaao</td>
                <td>5000</td>
              </tr>
              <tr className='[&>*]:text-center h-9 text-xs font-medium'>
                <td>1</td>
                <td>joaao</td>
                <td>5000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='bg-white mt-16'>
          <div>
            <span>Resgate de benefício</span>
          </div>
        </div>
      </div>
    </main>
  )
}