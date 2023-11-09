import { User, Lock } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png"

export const metadata = { title: "login"}

export default function Entrar() {
    return (
        <div className="w-screen h-screen bg-gradient-to-t from-green-400 to-green-950  text-white">
            <Image src={logo} alt='logo' width={200} height={200} className="grid"/>

            <form className=" space-y-4 place-items-baseline grid ">
                <div className="p-3 rounded border border-white flex gap-4 ">
                <User/>
                <input placeholder="Usuario" className="bg-transparent placeholder-white" />
                </div> 
                <div className="p-3 rounded border border-white flex gap-4 ">
                <Lock/>
                <input placeholder="Senha" className="bg-transparent placeholder-white" type="password" />
                </div> 
                <button>ENTRAR</button>
            </form>


        </div>

    )
}