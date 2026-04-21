"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BsList,
  BsX,
  BsHouseDoorFill,
  BsFileEarmarkFill,
  BsChatDotsFill,
  BsInstagram,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

const navLinks = [
  { href: "/", label: "Home", icon: <BsHouseDoorFill /> },
  { href: "/projetos", label: "Projetos", icon: <BsFileEarmarkFill /> },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-[#00ff7f] ${
          scrolled
            ? "bg-[#eeeeee]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-[#eeeeee]"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[80px]">
          {/* ── Logo ─────────────────────────────── */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/Logo_JP_Oficial.png"
              alt="Logo JP"
              width={72}
              height={72}
              className="w-[72px] h-[72px] transition-transform duration-200 hover:scale-105 select-none pointer-events-none"
            />
          </Link>

          {/* ── Desktop Nav ──────────────────────── */}
          <nav className="hidden md:flex items-center gap-2">
            <ul className="flex list-none m-0 p-0 items-center gap-1">
              {navLinks.map(({ href, label, icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group relative flex items-center gap-2 px-4 py-2 text-[#2e2e2e] font-medium no-underline rounded-lg transition-colors duration-200 hover:text-[#0f4229] hover:bg-black/5"
                  >
                    <span className="text-[#00ff7f] text-sm">{icon}</span>
                    {label}
                    {/* underline animada verde */}
                    <span className="absolute bottom-0.5 left-4 h-[2px] w-0 bg-[#00ff7f] rounded-full transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Botão Contato */}
            <Link href="#formulario" className="ml-4">
              <button className="flex items-center gap-2 px-6 py-2.5 text-base font-semibold bg-[#00ff7f] text-[#1b1b1b] rounded-full border-none cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,127,0.5)] hover:bg-[#00e872]">
                <BsChatDotsFill className="text-sm" />
                Contato
              </button>
            </Link>
          </nav>

          {/* ── Hamburger ────────────────────────── */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-black/5 hover:bg-black/10 transition-colors duration-200 border-none cursor-pointer"
            aria-label="Abrir menu"
          >
            <BsList className="text-[#0f4229] text-2xl" />
          </button>
        </div>
      </header>

      {/* ── Overlay ──────────────────────────────── */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[888888] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Menu Mobile ──────────────────────────── */}
      <aside
        className={`fixed top-0 right-0 z-[999999] h-screen w-[78%] max-w-[320px] bg-[#1b1b1b] flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Topo do menu */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Image
            src="/images/Logo_JP_Oficial_branca.png"
            alt="Logo JP"
            width={52}
            height={52}
            className="w-[42px] h-[42px] select-none pointer-events-none"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center border-none cursor-pointer transition-colors duration-200"
            aria-label="Fechar menu"
          >
            <BsX className="text-white text-xl" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-4 py-6">
          <ul className="list-none m-0 p-0 flex flex-col gap-1">
            {[
              ...navLinks,
              {
                href: "#formulario",
                label: "Contato",
                icon: <BsChatDotsFill />,
              },
            ].map(({ href, label, icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-white/80 font-medium text-lg no-underline transition-all duration-200 hover:bg-[#00ff7f]/15 hover:text-[#00ff7f]"
                >
                  <span className="text-[#00ff7f]">{icon}</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Redes sociais no rodapé do menu */}
        <div className="px-6 py-6 border-t border-white/10">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
            Redes sociais
          </p>
          <div className="flex gap-3">
            {[
              {
                href: "https://www.instagram.com/jaopedrodia017/?__pwa=1",
                icon: <BsInstagram />,
              },
              {
                href: "https://www.linkedin.com/in/jo%C3%A3o-pedro-dias-andrade/",
                icon: <BsLinkedin />,
              },
              { href: "https://github.com/joaopedro00017", icon: <BsGithub /> },
            ].map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00ff7f] hover:text-[#1b1b1b] text-white flex items-center justify-center transition-all duration-200 text-base"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
