import Image from 'next/image'
import logo from "@/assets/logo.png"
import hero from "@/assets/hero.png"
import Link from 'next/link'

export const metadata = { title: "EcoTroca - Sustentabilidade na Prática" }

export default function Home() {
  return (
    <>
      <div className="bg-green-800 text-white text-sm py-4 flex justify-between pl-10 pr-8" >
        <span>Wesley.mr2000@gmail.com <span className='ml-4'>(71)99179-7751</span></span>
        <span>https://github.com/Wr1856</span>
      </div>
      <div className="bg-green-600 h-40 flex items-center" >
        <Image src={logo} alt='logo' width={140} height={140} />
        <span className='text-4xl text-white ml-8'>EcoTroca - Sustentabilidade na Prática</span>
        <div className='flex ml-auto space-x-20 uppercase text-white text-lg pr-14'>
          <a href="#">Inicio</a>
          <a href="#posicao">Posição</a>
          <a href="#instrucao">Instruções</a>
          <a href="#">Contato</a>
          <Link href="/entrar">Entrar</Link>
        </div>
      </div>
      <div className=' h-full w-full'>
        <div className='h-[calc(100vh_-_212px)]'>
          <Image className='object-contain' src={hero} alt='hero' height={800} />
          <h1 className='text-[#80BB2A] text-7xl mt-10 ml-8'>Bem-Vindo</h1>
        </div>
        <div className="grid grid-cols-2 gap-x-32 pr-10 h-screen" id='posicao'>
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
          <div className='bg-[#7AB730] p-4 rounded-lg text-green-100'>
            <span className='text-center block text-3xl'>POSIÇÕES</span>
            <ul className='list-disc text-3xl px-14 space-y-5 mt-20'>
              <li>
                <div className='flex justify-between'>
                  <span>joao</span>
                  <span>100 - pontos</span>
                </div>
              </li>
              <li>
                <div className='flex justify-between'>
                  <span>joao</span>
                  <span>100 - pontos</span>
                </div>
              </li>
              <li>
                <div className='flex justify-between'>
                  <span>joao</span>
                  <span>100 - pontos</span>
                </div>
              </li>
              <li>
                <div className='flex justify-between'>
                  <span>joao</span>
                  <span>100 - pontos</span>
                </div>
              </li>
              <li>
                <div className='flex justify-between'>
                  <span>joao</span>
                  <span>100 - pontos</span>
                </div>
              </li>
              <li>
                <div className='flex justify-between'>
                  <span>joao</span>
                  <span>100 - pontos</span>
                </div>
              </li>
              <li>
                <div className='flex justify-between'>
                  <span>joao</span>
                  <span>100 - pontos</span>
                </div>
              </li>
              <li>
                <div className='flex justify-between'>
                  <span>joao</span>
                  <span>100 - pontos</span>
                </div>
              </li>
              <li>
                <div className='flex justify-between'>
                  <span>joao</span>
                  <span>100 - pontos</span>
                </div>
              </li>
              <li>
                <div className='flex justify-between'>
                  <span>joao</span>
                  <span>100 - pontos</span>
                </div>
              </li>
            </ul>

          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-32 pr-10 mt-20 h-screen" id='instrucao' >
          <div className='pl-10 text-[#80BB2A] ' >
            TROCA DE PRODUTOS POR PONTOS:<br /><br />

            1. Cadastro no EcoTroca:<br />
            - Crie uma conta no EcoTroca, clicando AQUI!<br />
            - Entre nela para acessar o site por completo.<br /><br />

            2. Explorando o Catálogo:<br />
            - Navegue pelo catálogo de produtos com selo verde disponiveis que você pode cadastrar e receber seus pontos para troca.<br /><br />

            3. Escolha do Produto:<br />
            - Selecione o produtos que deseja cadastrar em troca de seus pontos.<br />
            - Leia as informações sobre o produto e verifique a quantidade de pontos que receberá.<br /><br />

            4. Acúmulo de Pontos:<br />
            - Realize o cadastro de produtos que contenham o selo verde.<br />
            - Acompanhe o saldo de pontos em seu perfil.<br /><br />


            5. Recebimento do Ponto:<br />
            - Após a confirmação, aguarde o envio do pontos para o seu perfil.<br />
          </div>
          <div className='pl-10 text-[#80BB2A] ' >
            TROCA DE PONTOS POR BENEFICIOS:<br /><br />

            1. Acúmulo Contínuo de Pontos:<br />
            - Continue adiquirindo produtos com selo verde e cadastrando eles no site para acumular mais pontos ao longo do tempo.<br /><br />

            2. Explorando Benefícios:<br />
            - Visite a seção de benefícios e descubra as opções disponíveis para resgate.<br /><br />

            3. Escolha do Benefício:<br />
            - Escolha o benefício que deseja resgatar. Pode ser descontos em estabelecimentos parceiros, acesso a eventos sustentáveis ou outras oportunidades exclusivas.<br /><br />

            4. Confirmação do Resgate:<br />
            - Confirme o resgate do benefício, garantindo que você atende aos requisitos necessários.<br /><br />

            5. Aproveite os Benefícios:<br />
            - Desfrute dos benefícios resgatados, contribuindo para um estilo de vida mais sustentável e acessando oportunidades exclusivas na comunidade EcoTroca.<br /><br />
          </div>
        </div>
      </div>

      <footer className='bg-[#1A884D] text-white p-10 rounded-t-lg flex justify-between items-center' >
        <div className='flex items-center '>
          <Image className='shrink-0' src={logo} alt='logo' width={140} height={140} />
          <div className='space-y-10 flex flex-col items-center m-6'>
          <span className='text-2xl'>EcoTroca - Sustentabilidade na Prática</span>
          <span className='text-base text-center'>portal dedicado à promoção da sustentabilidade e à<br/> recompensa das boas práticas ambientais.</span>
          <a className='font-medium text-xl' href='#'>INICIO</a>
        </div>

      </div>
        <div className='text-2xl'>
            Telefone:    (71)99179-7751<br/><br/>

            Email:          Wesley.mr2000@gmail.com<br/><br/>

            Portfólio:    https://github.com/Wr1856
        </div>
        
      </footer>
    </>
  )
}
