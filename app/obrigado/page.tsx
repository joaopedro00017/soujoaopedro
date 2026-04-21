import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Obrigado - João Pedro',
}

export default function ObrigadoPage() {
  return (
    <main
      className="
        m-0 p-0
        bg-gradient-to-br from-[#e0e0e0] to-[#eeeeee]
        min-h-screen
        flex flex-col items-center justify-center
        text-black text-center
        font-[Segoe_UI,Tahoma,Geneva,Verdana,sans-serif]
      "
    >
      <h1 className="text-5xl font-bold mb-5">Obrigado por contatar!</h1>
      <Link
        href="/"
        className="
          inline-block px-6 py-3 text-base
          bg-[#00ff7f] text-black
          rounded-[8px] no-underline
          transition-all duration-300
          hover:bg-[#30e78b]
        "
      >
        voltar
      </Link>
    </main>
  )
}
