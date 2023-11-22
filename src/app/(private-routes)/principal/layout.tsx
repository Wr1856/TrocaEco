import { ReactNode } from "react";
import { Phone, Github, Mail } from "lucide-react";
import Image from 'next/image'

import logo from '@/assets/logo.png'
import { LinkCustomizavel } from "@/components/link";
import { LogoutButton } from "@/components/logout-button";


interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="w-full h-screen flex flex-col">
      <header className="bg-white">
        <div className="text-green-500 text-xs font-semibold py-2 flex h-8 px-10 bg-green-50 pr-8">
          <div className="flex">
            <Phone size={16} />
            <span className="ml-1">(71) 99179-7751 </span>
          </div>
          <div className="flex ml-4">
            <Mail size={16} />
            <span className="ml-1">Wesley.mr2000@gmail.com</span>
          </div>
          <div className="flex ml-auto">
            <Github size={16} />
            <a href="https://github.com/Wr1856" target="_blank">https://github.com/Wr1856</a>
          </div>
        </div>
        <div className="w-full flex items-center justify-between py-2.5 px-10 border-y border-zinc-200">
          <a className="flex items-center" href="/">
            <Image src={logo} alt="logo" width={40} height={39} className=""/>
            <span className="text-lg text-green-500 font-bold">EcoTroca</span>
          </a>
          <div className="flex justify-center gap-8 text-zinc-500 font-medium text-base uppercase">
            <LinkCustomizavel  href="/principal">
              Inicio
            </LinkCustomizavel>
            <LinkCustomizavel href="/principal/produtos">
              Produtos
            </LinkCustomizavel>
            <LinkCustomizavel href="/principal/beneficios">
              Benefícios
            </LinkCustomizavel>
          </div>
          <LogoutButton />
        </div>
      </header>
      {children}
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
    </main>
  );
}
