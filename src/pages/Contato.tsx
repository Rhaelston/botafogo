import fotodela from "../assets/Design sem nome (1).png"

export const Contato = () => {
  return (
    <div className="bg-purple-700 min-h-screen py-8">
        <nav className="bg-blue-600 p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">Julia</a>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-blue-200">Início</a></li>
              <li><a href="/sobre" className="hover:text-blue-200">Sobre</a></li>
              <li><a href="/contato" className="hover:text-blue-200">Contato</a></li>
            </ul>
          </div>
        </nav>
      {/* Título */}
      <section className="container mx-auto text-center py-8">
        <h1 className="text-4xl font-bold text-purple-700">Contato</h1>
        <p className="mt-4 text-lg text-white">
          Achou ruim alguma coisa que essa mulher <span className="text-5xl">👇 fez?
            <div className="mt-8">
          <img
            src={fotodela}
            alt="Imagem da mulher"
            className="mx-auto rounded-full shadow-lg"
          />
        </div></span>Reclama aqui pra você ver uma parada <span className="text-5xl">😡</span>
        </p>
      </section>

      {/* SAC - WhatsApp e Instagram */}
      <section className="container mx-auto text-center py-8">
        {/* Link para WhatsApp */}
        <div className="mt-8">
          <a
            href="https://wa.me/5561982153123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:underline"
          >
            SAC: +55 (61) 98215-3123 (WhatsApp)
          </a>
        </div>

        {/* Link para Instagram */}
        <div className="mt-8">
          <a
            href="https://www.instagram.com/rhaelston"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:underline"
          >
            Instagram: @rhaelston
          </a>
        </div>

        {/* Imagem de "mulher" (substitua a URL da imagem depois) */}
        
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>
              <a href="https://www.instagram.com/ju_martins_23/" className="hover:underline">Olha a Beleza dessa mulher!</a> 
            </p>
          </div>
        </footer>
    </div>
  );
};