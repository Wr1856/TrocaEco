import Image from 'next/image'
import logo from "@/assets/logo.png"
import hero from "@/assets/hero.png"
import Link from 'next/link'

export const metadata = { title: "EcoTroca - Sustentabilidade na Prática"}

export default function Home() {
  return (
    <>
    <div className= "bg-green-800 text-white text-sm py-4 flex justify-between pl-10 pr-8" >
        <span>Wesley.mr2000@gmail.com <span className='ml-4'>(71)99179-7751</span></span>
        <span>https://github.com/Wr1856</span>
    </div>
    <div className= "bg-green-600 h-40 flex items-center" >
      <Image src={logo} alt='logo' width={140} height={140}/> 
      <span className='text-4xl text-white ml-8'>EcoTroca - Sustentabilidade na Prática</span>
      <div className='flex ml-auto space-x-20 uppercase text-white text-lg pr-14'>
        <a href="#">Inicio</a>
        <a href="#">Posição</a>
        <a href="#">Instruções</a>
        <a href="#">Contato</a>
        <Link href="/entrar">Entrar</Link>
      </div> 
    </div>
    <div className='bg-green-300 h-screen w-screen'>
      <Image className='object-contain' src={hero} alt='hero' height={800}  />
      <h1 className='text-[#80BB2A] text-8xl mt-10 ml-8'>Bem-Vindo</h1> 
      <span className='text-[#80BB2A] text-lg mt-20 ml-8 object-left'>
        <p>
         Descrição:
         Bem-vindo ao EcoTroca, o seu portal dedicado à promoção da sustentabilidade e à recompensa das boas práticas ambientais. Aqui, acreditamos que cada pequena ação pode fazer a diferença no nosso planeta, e é por isso que criamos uma plataforma inovadora que incentiva a troca de pontos por objetos sustentáveis em troca de prêmios básicos.<br></br>
        </p><p>
         Objetivos:
         Sustentabilidade na Prática: No EcoTroca, encorajamos os usuários a adotarem um estilo de vida mais sustentável, promovendo a reutilização, a reciclagem e a redução do consumo de recursos naturais.
        </p><p>
         Troque por Pontos: Ao realizar ações sustentáveis, como reciclar, economizar energia ou utilizar meios de transporte ecológicos, você acumula pontos que podem ser trocados por produtos sustentáveis.<br></br>
        </p><p>
         Prêmios Básicos: Oferecemos uma ampla gama de prêmios básicos que atendem às necessidades diárias, como produtos de higiene pessoal, alimentos orgânicos, materiais de escritório e muito mais. Assim, você pode ser recompensado enquanto contribui para um mundo mais verde.
         Comunidade Engajada: Faça parte de uma comunidade ativa de pessoas comprometidas com a sustentabilidade. Compartilhe dicas, histórias inspiradoras e ideias para promover um estilo de vida mais ecológico.<br></br>
        </p><p>
         Impacto Positivo: Cada ação sustentável que você realiza no EcoTroca contribui para a preservação do meio ambiente e a redução da pegada de carbono global. Juntos, podemos criar um impacto positivo no mundo.
         Junte-se ao EcoTroca e faça parte dessa jornada emocionante em direção a um planeta mais sustentável. Troque seus pontos por prêmios básicos e seja parte da solução para um futuro mais verde!<br></br>
        </p>
     </span>
     </div>
    </>
  )
}
