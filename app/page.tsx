import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContatoForm from "@/components/ContatoForm";
import {
  BsInstagram,
  BsLinkedin,
  BsGithub,
  BsCodeSlash,
  BsDatabase,
} from "react-icons/bs";
import { SiPhp, SiSpring, SiDotnet, SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

/* ── Dados ──────────────────────────────────────────────────────── */

const especialidades = [
  {
    icon: <BsCodeSlash className="text-[78px] text-black" />,
    titulo: (
      <>
        <span className="text-[#00ff7f]">HTML</span> /{" "}
        <span className="text-[#00ff7f]">CSS</span> /{" "}
        <span className="text-[#00ff7f]">JS</span>
        <br />+ <span className="text-[#00ff7f]">Angular</span> &amp;{" "}
        <span className="text-[#00ff7f]">React.js</span>
      </>
    ),
    descricao:
      "Experiência em HTML e CSS para criar interfaces responsivas, domínio em JavaScript para funcionalidades dinâmicas e uso de Angular e React.js para desenvolver aplicações escaláveis e modernas com foco em qualidade e usabilidade.",
  },
  {
    icon: <SiPhp className="text-[78px]" />,
    titulo: "PHP",
    descricao:
      "Experiência em PHP para desenvolver aplicações web dinâmicas, focando em eficiência, escalabilidade e integração com bancos de dados, sempre seguindo boas práticas de desenvolvimento.",
  },
  {
    icon: <BsDatabase className="text-[78px] text-black" />,
    titulo: "SQL",
    descricao:
      "Domínio em SQL para gerenciar e otimizar bancos de dados, criando consultas eficientes, estruturadas e focadas na integridade e performance dos dados.",
  },
  {
    icon: <FaJava className="text-[78px]" />,
    titulo: (
      <>
        Java &amp; <span className="text-[#00ff7f]">Spring</span>
      </>
    ),
    descricao:
      "Conhecimento em Java com Spring Boot para construir APIs RESTful robustas e escaláveis, aplicando boas práticas de arquitetura e desenvolvimento back-end.",
  },
  {
    icon: <SiTypescript className="text-[78px]" />,
    titulo: "TypeScript",
    descricao:
      "Experiência com TypeScript para desenvolver aplicações mais seguras e manuteníveis, explorando recursos como tipagem estática, interfaces e generics.",
  },
  {
    icon: <TbBrandCSharp className="text-[78px] text-[#512BD4]" />,
    titulo: "C Sharp",
    descricao:
      "Domínio em C# para desenvolver aplicações versáteis e eficientes, utilizando conceitos de orientação a objetos e boas práticas para garantir performance e qualidade no código.",
  },
];

const projetosDestaque = [
  {
    img: "/images/projeto_ballon_dor.png",
    titulo: "Jogo Da Velha",
    descricao:
      "Jogo da Velha com a Temática da Bola de Ouro 2024 disputada por Rodri e Vini Jr.",
  },
  {
    img: "/images/projeto_frase_biblica.png",
    titulo: "Frases Bíblicas",
    descricao: "Retorna uma Frase Bíblica Aleatória ao ser solicitada.",
  },
  {
    img: "/images/projeto_to-do-list.png",
    titulo: "To-do-List",
    descricao:
      "Gerenciador de tarefas com React.js. Crie, visualize, conclua e exclua tarefas de forma prática!",
  },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/jaopedrodia017/?__pwa=1",
    icon: <BsInstagram />,
  },
  {
    href: "https://www.linkedin.com/in/jo%C3%A3o-pedro-dias-andrade/",
    icon: <BsLinkedin />,
  },
  { href: "https://github.com/joaopedro00017", icon: <BsGithub /> },
];

/* ── Componente ─────────────────────────────────────────────────── */

export default function Home() {
  // Função para calcular a idade
  // Adicione ": string" após o nome do parâmetro
  const calcularIdade = (dataNascimento: string): number => {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  };

  const minhaIdade = calcularIdade("2009-05-15");

  return (
    <>
      <Header />
      <main>
        {/* ── Topo ──────────────────────────────────────────────── */}
        <section className="py-10 px-[4%] md:px-[4%]">
          <div className="max-w-[1280px] mx-auto">
            {/*
              Mobile:  coluna invertida (foto em cima, texto embaixo), gap menor, texto centralizado
              Desktop: linha, gap 90px, texto alinhado à esquerda
            */}
            <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-center md:gap-[90px]">
              {/* Texto */}
              <div className="w-full md:max-w-lg text-center md:text-left">
                <h3 className="text-[#22625f] text-[30px] md:text-xl leading-10">
                  Olá! Me chamo
                </h3>
                <h1 className="text-[#2e2e2e] text-[60px] md:text-[42px] font-bold leading-tight">
                  João Pedro
                </h1>
                <p className="text-[#2e2e2e] text-[22px] md:text-base my-8 md:my-10">
                  Sou desenvolvedor Full-Stack apaixonado por criar soluções
                  inovadoras que conectam tecnologia e experiência do usuário.
                  Com experiência em Java, Spring, HTML, CSS, JavaScript,
                  TypeScript, C#, PHP, Angular e Next.js, tenho habilidades para
                  construir aplicações robustas, tanto no front-end quanto no
                  back-end. Minha prioridade é desenvolver códigos limpos,
                  funcionais e escaláveis, sempre alinhados às melhores práticas
                  de mercado.
                </p>
                <Link href="#formulario">
                  <button className="px-10 py-2.5 text-lg font-semibold bg-white text-[#2e2e2e] rounded-[30px] cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-[0_0_8px_#1b1b1b] border-none">
                    Entre em Contato
                  </button>
                </Link>
              </div>

              {/* Foto */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/JPFOTO01.png"
                  alt="João Pedro"
                  width={450}
                  height={450}
                  className="w-[260px] h-[260px] md:w-[450px] md:h-[450px] rounded-full bg-[#1b1b1b11] animate-flutuar"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Especialidades ────────────────────────────────────── */}
        <section className="py-10 px-[8%] md:px-[4%]">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-[#1b1b1b] text-[30px] md:text-[38px] leading-[34px] md:leading-normal text-center font-bold">
              MINHAS <span className="text-[#00ff7f]">ESPECIALIDADES.</span>
            </h2>

            {/* Linha 1 — empilha em mobile, 3 colunas no desktop */}
            <div className="flex flex-col md:flex-row gap-0 md:gap-[60px]">
              {especialidades.slice(0, 3).map((esp, i) => (
                <div
                  key={i}
                  className="text-[#1b1b1b] p-10 rounded-[25px] mt-[45px] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_#1b1b1b6f]"
                >
                  {esp.icon}
                  <h3 className="text-[26px] my-[15px] font-bold">
                    {esp.titulo}
                  </h3>
                  <p>{esp.descricao}</p>
                </div>
              ))}
            </div>

            {/* Linha 2 */}
            <div className="flex flex-col md:flex-row gap-0 md:gap-[60px]">
              {especialidades.slice(3).map((esp, i) => (
                <div
                  key={i}
                  className="text-[#1b1b1b] p-10 rounded-[25px] mt-[45px] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_#1b1b1b6f]"
                >
                  {esp.icon}
                  <h3 className="text-[26px] my-[15px] font-bold">
                    {esp.titulo}
                  </h3>
                  <p>{esp.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sobre ─────────────────────────────────────────────── */}
        <section className="py-10 px-[8%] md:px-[4%]">
          <div className="max-w-[1280px] mx-auto">
            {/*
              Mobile:  coluna, imagem circular com bg teal
              Desktop: linha, imagem com rounded-[25%]
            */}
            <div className="flex flex-col md:flex-row items-center gap-[60px]">
              {/* Imagem */}
              <div className="flex-shrink-0 w-full md:w-auto">
                <Image
                  src="/images/laptop-svgrepo-com.svg"
                  alt="Laptop"
                  width={600}
                  height={600}
                  className="
                    w-full h-auto md:w-[600px] md:h-[600px]
                    rounded-full bg-[#22625f]
                    md:rounded-[25%] md:bg-transparent
                  "
                />
              </div>

              {/* Texto */}
              <div className="text-[#1b1b1b]">
                <h2 className="text-[30px] leading-[55px] md:text-[40px] md:leading-[50px] mb-[30px] font-bold text-center md:text-left">
                  UM POUCO{" "}
                  <span className="block text-[#00ff7f] text-[50px] md:text-[70px]">
                    SOBRE MIM.
                  </span>
                </h2>
                <p className="my-5 text-[22px] md:text-base text-left">
                  Sou um jovem programador de {minhaIdade} anos, residente em
                  Belo Horizonte, com formação em Assistente de Programação Web
                  pelo curso de aprendizagem do Senai. Durante o curso,
                  desenvolvi habilidades fundamentais, incluindo HTML, CSS,
                  JavaScript, PHP e SQL, que me permitiram criar aplicações web
                  funcionais e bem estruturadas.
                </p>
                <p className="my-5 text-[22px] md:text-base text-left">
                  Além disso, expandi meu conhecimento de forma independente,
                  aprendendo ferramentas como Java, Spring, C#, Angular e
                  Next.js, ampliando minha capacidade de desenvolver aplicações
                  robustas e escaláveis.
                </p>

                {/* Redes sociais */}
                <div className="flex justify-center md:justify-start mt-4">
                  {socialLinks.map(({ href, icon }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-[60px] h-[60px] rounded-full border-none bg-[#00ff7f] text-xl cursor-pointer mx-2.5 transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_#1b1b1b6f] flex items-center justify-center">
                        {icon}
                      </button>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Projetos em Destaque ──────────────────────────────── */}
        <section className="py-20 px-[8%] md:px-[4%] shadow-[0_0_40px_10px_#1b1b1b10] bg-[#1b1b1b0e]">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-[#1b1b1b] text-[30px] md:text-[38px] leading-[34px] md:leading-normal text-center font-bold">
              PROJETOS EM <span className="text-[#00ff7f]">DESTAQUE</span>
            </h2>

            {/* Empilha em mobile, linha no desktop */}
            <div className="flex flex-col md:flex-row justify-around items-center mt-[60px] gap-[60px] md:gap-6">
              {projetosDestaque.map((proj, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1.5 text-center w-full max-w-[360px] md:max-w-sm"
                >
                  <Image
                    src={proj.img}
                    alt={proj.titulo}
                    width={400}
                    height={200}
                    className="w-full rounded-[10px]"
                  />
                  <h3 className="my-2.5 text-[#222] font-bold">
                    {proj.titulo}
                  </h3>
                  <p className="text-sm text-[#555]">{proj.descricao}</p>
                  <Link
                    href="/projetos"
                    className="inline-block mt-2.5 px-[15px] py-2.5 bg-[#007bff] text-white no-underline rounded-[5px] transition-all duration-300 hover:bg-[#0056b3]"
                  >
                    Ver Projetos
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Formulário ────────────────────────────────────────── */}
        <ContatoForm redirectUrl="https://joaopedro00017.github.io/portifolio/html/tanks.html" />
      </main>
      <Footer />
    </>
  );
}
