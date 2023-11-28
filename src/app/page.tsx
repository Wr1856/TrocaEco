import Image from 'next/image'
import logo from "@/assets/logo.png"
import hero from "@/assets/hero.png"
import Link from 'next/link'
import { Github, Mail, Phone, } from 'lucide-react'
import { api } from '@/lib/api'

interface USER {
  id:string
  name:string
  points:{amount:number}
}

export const metadata = { title: "EcoTroca - Sustentabilidade na Prática" }

export default async function Home() {
  const users = await api.get<USER[]>('/user')
  return (
    <>
      <div>
        <div className="text-green-500 text-xs font-semibold py-2 flex h-8 pl-10 bg-green-50 pr-8" >
          <div className='flex'>
            <Phone size={16} />
            <span className='ml-1'>(71) 99179-7751 </span>
          </div>
          <div className='flex ml-4'>
            <Mail size={16} />
            <span className='ml-1'>Wesley.mr2000@gmail.com</span>
          </div>
          <div className='flex ml-auto'>
            <Github size={16} />
            <a href='https://github.com/Wr1856' target='_blank'>https://github.com/Wr1856</a>
          </div>
        </div>

        <div className="bg-white text-green-500 h-14 w-full flex items-center"  >
          <Image src={logo} alt='logo' width={40} height={40} className='ml-10' />
          <span className='text-lg ml-2'>EcoTroca</span>
          <div className='flex ml-auto space-x-20 uppercase  text-base pr-14'>
            <a href="#posicao">Posições</a>
            <a href="#instrucao">Instruções</a>
            <a href="#contato">Contato</a>
            <Link href="/entrar">Entrar</Link>
          </div>
        </div>
        <div className=' h-full w-full'>
          <div>
            <Image className='object-contain' src={hero} alt='hero' height={800} />
            <h1 className='text-[#80BB2A] text-7xl mt-10 ml-8'>Bem-Vindo</h1>
          </div>
          <div className="grid grid-cols-2 gap-x-32 pr-10" id='posicao'>
            <div className='text-[#80BB2A] text-base mt-20 ml-8 object-left'>

              <span className='font-semibold text-2xl block'>Descrição:</span><span className=' text-black mb-8 block'>
              Bem-vindo ao EcoTroca, o seu site dedicado à promoção da sustentabilidade e à recompensa das boas práticas ambientais.
              Aqui, acreditamos que cada pequena ação pode fazer a diferença no nosso planeta, e é por isso que criamos uma plataforma inovadora que
              incentiva o cadastro de produtos com selo verde por pontos em troca de prêmios básicos.</span>

              <span className='font-semibold text-2xl block'>Objetivos:</span><span className=' text-black mb-8 block '>
              Sustentabilidade na Prática: No EcoTroca, encorajamos os usuários a adotarem um estilo de vida mais sustentável,
              promovendo a compra de produtos sustentáveis.</span>


              <span className='font-semibold text-2xl block'>Troque por Pontos:</span><span className=' text-black mb-8 block'>
              Ao adquirir produto com o selo verde, basta procura-lo e cadastra-lo em nosso sistema para receber os pontos que logo poderão ser trocados por prêmios</span>


              <span className='font-semibold text-2xl block'>Prêmios Básicos:</span><span className=' text-black mb-8 block'>
              Oferecemos uma gama de prêmios básicos que atendem às necessidades diárias, como produtos de higiene pessoal, materiais de escritório e muito mais. Assim, você pode ser recompensado enquanto contribui para um mundo mais verde.</span>


              <span className='font-semibold text-2xl block'>Impacto Positivo:</span><span className=' text-black mb-8 block'>
              A ação sustentável que você realiza no EcoTroca contribui para a preservação do meio ambiente diminuindo os produtos testados em animais e etc. Juntos, podemos criar um impacto positivo no mundo.</span>

              
              <span className='font-semibold text-3xl text-justify flex'>Junte-se ao EcoTroca e faça parte dessa jornada emocionante em direção a um planeta mais sustentável. Troque seus pontos por prêmios básicos e seja parte da solução para um futuro mais verde!</span>
            </div>
            <div className='bg-[#7AB730] p-4 rounded-lg text-green-50'>
              <span className='text-center block text-7xl'>POSIÇÕES</span>
              <ul className='list-disc text-lg px-14 space-y-10 mt-20'>
                {users.data.map(user => (
                  <li key={user.id}>
                    <div className='flex justify-between'>
                      <span>{user.name}</span>
                      <span>{user.points.amount} - pontos</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-32 pr-10 mt-20 pb-20" id='instrucao' >
            <div className='pl-10 text-[#80BB2A] text-base' >
              TROCA DE PRODUTOS POR PONTOS:

              <span className='font-semibold'>1. Cadastro no EcoTroca:</span><span className='text-black'>
              - Crie uma conta no EcoTroca, clicando <Link href='/entrar'>AQUI!</Link>
              - Entre nela para acessar a pagina principal.</span>

              <span className='font-semibold'>2. Explorando a pagina principal:</span><span className='text-black'>
              - Navegue pelo pagina principal de produtos e benefícios disponíveis e utilizar pontos para troca.</span>

              <span className='font-semibold'>3. Escolha do Produto:</span><span className='text-black'>
              - Selecione o produtos que deseja cadastrar em troca de seus pontos.
              - Leia as informações sobre o produto e verifique a quantidade de pontos que receberá.</span>

              <span className='font-semibold'>4. Acúmulo de Pontos:</span><span className='text-black'>
              - Realize o cadastro de produtos que contenham o selo verde.
              - Acompanhe o saldo de pontos em seu perfil.</span>

              <span className='font-semibold'>5. Recebimento do Ponto:</span><span className='text-black'>
              - Após a confirmação, aguarde o envio do pontos para o seu perfil.</span>
            </div>
            <div className='pl-10 text-[#80BB2A] text-base' >
              TROCA DE PONTOS POR BENEFÍCIOS:

              <span className='font-semibold'>1. Acúmulo Contínuo de Pontos:</span><span className='text-black'>
              - Continue adquirindo produtos com selo verde e cadastrando eles no site para acumular mais pontos ao longo do tempo.</span>

              <span className='font-semibold'>2. Explorando Benefícios:</span><span className='text-black'>
              - Visite a seção de benefícios e descubra as opções disponíveis para resgate.</span>

              <span className='font-semibold'>3. Escolha do Benefício:</span><span className='text-black'>
              - Escolha o benefício que deseja resgatar.</span>

              <span className='font-semibold'>4. Confirmação do Resgate:</span><span className='text-black'>
              - Confirme o resgate do benefício, garantindo que você atende aos requisitos necessários.</span>

              <span className='font-semibold'>5. Aproveite os Benefícios:</span><span className='text-black'>
              - Desfrute dos benefícios resgatados, contribuindo para um estilo de vida mais sustentável e acessando oportunidades exclusivas na comunidade EcoTroca.</span>
            </div>
          </div>
        </div>

        <footer className="bg-green-500 p-20 pb-0 text-white mt-auto flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="">
            <Image src={logo} alt="logo" width={40} height={39} className="mb-5"/>
            <span className="text-lg font-semibold w-[407px] flex">
            EcoTroca - Sustentabilidade na Pratica
            Portal dedicado a promoção da sustentabilidade e a
            recompensa das boas praticas ambientais.
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col">
              <span className="text-white/70 ">Email:</span>
              <span>Wesley.mr2000@gmail.com</span>
            </div>
            <div>
              <span className="text-white/70 block">Telefone:</span>
              <span>(71) 99179-7751</span>
            </div>
            <div className=" flex flex-col">
              <span className="text-white/80">Portfólio:</span>
              <a href="https://github.com/Wr1856" target="_blank">https://github.com/Wr1856</a>
            </div>
          </div>
        </div>
        <div className="border-t border-dashed border-green-100 flex items-center justify-center py-6 text-sm mt-14">
          <span>© 2023 EcoTroca Inc. Todos direitos reservado.</span>
        </div>
      </footer>
      </div>
    </>
  )
}
