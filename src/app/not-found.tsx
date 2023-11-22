import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-zinc-900">
      <h1 className="font-bold text-9xl">404</h1>
      <h2 className="font-bold text-2xl">Pagina não encontrada</h2>
      <p className="w-96 my-6 text-gray-500 text-center">Não foi possível encontrar o a pagina solicitada ou algum outro erro ocorreu.</p>
      <Link className="text-center inline-block px-4 py-2 border-2 border-green-500 text-green-500 font-semibold" href="/principal">Retornar para pagina principal</Link>
    </div>
  );
}