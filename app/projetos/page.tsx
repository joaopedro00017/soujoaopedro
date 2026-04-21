import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContatoForm from "@/components/ContatoForm";

export const metadata: Metadata = {
  title: "Projetos - João Pedro",
};

const projetos = [
  {
    img: "/images/projeto_ballon_dor.png",
    titulo: "Jogo Da Velha",
    descricao:
      "Jogo da Velha com a Temática da Bola de Ouro 2024 disputada por Rodri e Vini Jr.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/joaopedro00017/JogoDaVelha/",
    demo: "https://joaopedro00017.github.io/JogoDaVelha/",
  },
  {
    img: "/images/projeto_frase_biblica.png",
    titulo: "Frases Bíblicas",
    descricao: "Retorna uma Frase Bíblica Aleatória ao ser solicitada.",
    tecnologias: ["Java Spring", "MySql"],
    github: "https://github.com/joaopedro00017/frases_biblicas/",
    demo: null,
  },
  {
    img: "/images/projeto_senai.png",
    titulo: "Senai CTTI",
    descricao:
      "Projeto utilizado na disputa do hackathon do SenaiCTTI para a criação do site da instituição.",
    tecnologias: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/joaopedro00017/SenaiCTTIT/",
    demo: "https://joaopedro00017.github.io/SenaiCTTIT/",
  },
  {
    img: "/images/projeto_calculadora.png",
    titulo: "Calculadora",
    descricao: "Uma calculadora capaz de realizar operações básicas.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/joaopedro00017/calculadora/",
    demo: "https://joaopedro00017.github.io/calculadora/",
  },
  {
    img: "/images/projeto_to-do-list.png",
    titulo: "To-do-List",
    descricao:
      "Um gerenciador de tarefas simples e intuitivo desenvolvido com React.js. Crie, visualize, conclua e exclua tarefas de forma prática e eficiente!",
    tecnologias: ["React.js", "Tailwind", "Lucide"],
    github: "https://github.com/joaopedro00017/to-do-list/",
    demo: "https://to-do-list-indol-nine-68.vercel.app/",
  },
  {
    img: "/images/projeto_cadastro.png",
    titulo: "Cadastro de Usuários",
    descricao:
      "Sistema fullstack para cadastro e gerenciamento de usuários com React, Node.js, Prisma e MongoDB.",
    tecnologias: ["React.js", "Node.js", "Prisma + MongoDB"],
    github: "https://github.com/joaopedro00017/cadastro-usuario/",
    demo: null,
  },
];

export default function ProjetosPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Cabeçalho ─────────────────────────────────────── */}
        <div className="w-[90%] max-w-[1200px] mx-auto text-center py-5">
          <h1 className="text-[#333] text-3xl md:text-4xl font-bold mt-5">
            Meus <span className="text-[#00ff7f]">Projetos</span>
          </h1>

          {/*
            Mobile:  1 coluna
            Tablet:  2 colunas  (sm = 640px)
            Desktop: 3 colunas  (lg = 1024px)
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 mt-5">
            {projetos.map((proj, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1.5 text-center"
              >
                <Image
                  src={proj.img}
                  alt={proj.titulo}
                  width={400}
                  height={220}
                  className="w-full rounded-[10px] select-none pointer-events-none"
                />
                <h3 className="my-2.5 text-[#222] font-bold">{proj.titulo}</h3>
                <p className="text-sm text-[#555]">{proj.descricao}</p>

                {/* Tags de tecnologias */}
                <ul className="list-none p-0 flex flex-wrap justify-center mt-3">
                  {proj.tecnologias.map((tec) => (
                    <li
                      key={tec}
                      className="bg-[#00ff80b4] px-2.5 py-1 m-1 rounded-[5px] text-sm transition-all duration-200 hover:scale-105 hover:bg-[#00ff80] cursor-default"
                    >
                      {tec}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2.5 px-[15px] py-2.5 bg-[#007bff] text-white no-underline rounded-[5px] transition-all duration-300 hover:bg-[#0056b3] text-sm"
                  >
                    Ver código
                  </a>
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2.5 px-[15px] py-2.5 bg-[#007bff] text-white no-underline rounded-[5px] transition-all duration-300 hover:bg-[#0056b3] text-sm"
                    >
                      Ver demonstração
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Formulário ────────────────────────────────────── */}
        <ContatoForm redirectUrl="https://joaopedro00017.github.io/portifolio/html/tanks.html" />
      </main>
      <Footer />
    </>
  );
}
