"use client";
import {
  User,
  Lock,
  Mail,
  BookUser,
  Milestone,
  ArrowBigLeft,
} from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { LucideIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const metadata = { title: "login" };

export default function Entrar() {
  const [abrir, abrirPara] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <Link
          href="/"
          className="self-start ml-10 flex text-green-50 text-2xl items-center bg-green-700 rounded-full px-4 py-2"
        >
          <ArrowBigLeft size={30} className="" />
          VOLTAR
        </Link>
        {!abrir ? (
          <div className="flex w-full max-w-6xl rounded-3xl overflow-hidden h-[724px]">
            <div className="bg-white flex flex-col justify-center items-center p-4 gap-8 flex-1 py-10">
              <Image
                className="shrink-0"
                src={logo}
                alt="logo"
                width={140}
                height={140}
              />
              <h1 className="text-xl font-semibold text-green-700 ">
                BEM VINDO DE VOLTA!
              </h1>
              <div className="pb-2 flex items-center gap-4 border-b border-zinc-500">
                <Mail />
                <input
                  type="text"
                  placeholder="Email"
                  className="outline-none"
                />
              </div>
              <div className=" pb-2 flex items-center gap-4 border-b border-zinc-500">
                <Lock />
                <input
                  type="password"
                  placeholder="Senha"
                  className="outline-none"
                />
              </div>

              <button className="rounded-full px-5 py-2 text-white bg-green-700 w-80">
                ENTRAR
              </button>
            </div>
            <div className="flex flex-col bg-green-700 text-white justify-center items-center gap-5 flex-1">
              <h1 className="text-4xl font-semibold">Não tem uma conta?</h1>
              <span className="text-base ">
                crie uma agora clicando no botão abaixo!
              </span>
              <button
                className="rounded-full px-5 py-2 border border-white text-white"
                onClick={() => abrirPara(true)}
              >
                Cadastrar-se
              </button>
            </div>
          </div>
        ) : (
          <div className="flex w-full max-w-6xl rounded-3xl overflow-hidden h-[724px]">
            <div className="flex flex-col bg-green-700 text-white justify-center items-center gap-5 flex-1">
              <h1 className="text-4xl font-semibold">Já tem uma conta?</h1>
              <span className="text-base ">
                Entre agora clicando no botão abaixo!
              </span>
              <button
                className="rounded-full px-5 py-2 border border-white text-white"
                onClick={() => abrirPara(false)}
              >
                ENTRAR
              </button>
            </div>
            <div className="bg-white flex flex-col justify-center items-center p-4 gap-8 flex-1 py-10">
              <Image
                className="shrink-0"
                src={logo}
                alt="logo"
                width={140}
                height={140}
              />
              <h1 className="text-xl font-semibold text-green-700 ">
                CRIAR CONTA
              </h1>
              <div className="pb-2 flex items-center gap-4 border-b border-zinc-500">
                <User />
                <input
                  type="text"
                  placeholder="Nome"
                  className="outline-none"
                />
              </div>
              <div className=" pb-2 flex items-center gap-4 border-b border-zinc-500">
                <Mail />
                <input
                  type="email"
                  placeholder="email"
                  className="outline-none"
                />
              </div>
              <div className=" pb-2 flex items-center gap-4 border-b border-zinc-500">
                <Milestone />
                <input type="text" placeholder="cep" className="outline-none" />
              </div>
              <div className=" pb-2 flex items-center gap-4 border-b border-zinc-500">
                <BookUser />
                <input
                  type="text"
                  placeholder="endereço"
                  className="outline-none"
                />
              </div>
              <div className=" pb-2 flex items-center gap-4 border-b border-zinc-500">
                <Lock />
                <input
                  type="password"
                  placeholder="Senha"
                  className="outline-none"
                />
              </div>
              <div className=" pb-2 flex items-center gap-4 border-b border-zinc-500">
                <Lock />
                <input
                  type="password"
                  placeholder="Confirma Senha"
                  className="outline-none"
                />
              </div>

              <button className="rounded-full px-5 py-2 text-white bg-green-700 w-80">
                CADASTRAR-SE
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
