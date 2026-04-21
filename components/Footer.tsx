import Image from 'next/image'
import {
  BsInstagram,
  BsLinkedin,
  BsGithub,
  BsEnvelopeFill,
  BsStarFill,
} from 'react-icons/bs'

const socialLinks = [
  { href: 'https://www.instagram.com/jaopedrodia017/?__pwa=1',         label: 'Instagram', icon: <BsInstagram /> },
  { href: 'https://www.linkedin.com/in/jo%C3%A3o-pedro-dias-andrade/', label: 'LinkedIn',  icon: <BsLinkedin /> },
  { href: 'https://github.com/joaopedro00017',                         label: 'GitHub',    icon: <BsGithub /> },
]

export default function Footer() {
  return (
    <footer className="py-10 px-[4%] shadow-[0_0_40px_10px_#1b1b1b] bg-[#1b1b1b]">
      <div className="max-w-[1280px] mx-auto">

        {/* Linha superior: logo + redes sociais */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-[30px] py-5 text-center md:text-left">
          <div>
            <Image
              src="/images/Logo_JP_Oficial_branca.png"
              alt="JP Logo"
              width={120}
              height={120}
              className="w-[120px] h-[120px] mx-auto md:mx-0"
            />
          </div>
          <div className="flex items-center justify-center gap-1">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <button className="w-[60px] h-[60px] rounded-full border-none bg-[#00ff7f] text-xl cursor-pointer mx-2.5 transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_#1b1b1b6f] flex items-center justify-center">
                  {icon}
                </button>
              </a>
            ))}
          </div>
        </div>

        {/* Linha inferior: email + crédito */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-[30px] py-5 border-t-2 border-[#00ff7f] text-center md:text-left">
          <p className="text-[#bebdb2] text-lg flex items-center justify-center md:justify-start gap-2">
            <BsEnvelopeFill />
            joaopedrodiasandrade8@gmail.com
          </p>
          <div className="py-5 md:py-0">
            <p className="text-[#bebdb2] text-lg flex items-center justify-center gap-2">
              Criado por <BsStarFill className="text-[#00ff7f]" /> João Pedro
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
