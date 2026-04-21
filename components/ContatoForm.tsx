export default function ContatoForm({ redirectUrl }: { redirectUrl: string }) {
  const inputClass =
    'w-full bg-[#bebdb2] border-0 outline-none p-5 px-[15px] rounded-[15px] text-[#1b1b1b] text-lg placeholder-[#1b1b1b99] font-[inherit]'

  return (
    <section className="py-20 px-[8%] md:px-[4%]" id="formulario">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-[#1b1b1b] text-[30px] md:text-[38px] leading-[34px] md:leading-normal text-center font-bold">
          ENTRE EM<span className="text-[#00ff7f]"> CONTATO</span>
        </h2>

        <form
          action="https://formsubmit.co/joaopedrodiasandrade8@gmail.com"
          method="post"
          className="max-w-[500px] mx-auto flex flex-col gap-2.5 mt-[50px]"
        >
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome Completo"
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-Mail"
            required
            className={inputClass}
          />
          <input
            type="text"
            name="telefone"
            id="telefone"
            placeholder="Telefone"
            className={inputClass}
          />
          <textarea
            name="mensagem"
            id="mensagem"
            placeholder="Sua Mensagem"
            className={`${inputClass} resize-none max-h-[200px]`}
            rows={5}
          />
          <input type="hidden" name="_captcha" value="false" />
          {/* ⚠️ Atualize esta URL com o domínio do seu deploy */}
          <input type="hidden" name="_next" value={redirectUrl} />
          <div className="mt-5 text-center">
            <input
              type="submit"
              value="ENVIAR"
              className="w-[120px] bg-[#00ff7f] text-[#1b1b1b] font-bold cursor-pointer py-5 px-[15px] rounded-[15px] text-lg transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_#1b1b1b6f] font-[inherit]"
            />
          </div>
        </form>
      </div>
    </section>
  )
}
