import cego from '../assets/1.png'
import faminto from '../assets/2.png'
import enfermo from '../assets/3.png'
import luz from '../assets/4.png'

export const Sobre = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-600 p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
           <a href="/" className="text-2xl font-bold">Julia</a>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-blue-200">Início</a></li>
              <li><a href="/sobre" className="hover:text-blue-200">Sobre</a></li>
              <li><a href="/contato" className="hover:text-blue-200">Contato</a></li>
              <li><a href="/flor" className="hover:text-blue-200">Flor</a></li>
            </ul>
          </div>
        </nav>
      {/* Título */}
      <section className="container mx-auto text-center py-8">
        <h1 className="text-4xl font-bold text-purple-700">Quem é Julia?</h1>
      </section>

      {/* Conteúdo */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Para o cego */}
        <div className="flex flex-col items-center">
          <span className="text-6xl">🙈</span>
          <h2 className="text-2xl font-semibold text-blue-700 mt-4">Para o cego, a Luz</h2>
          <img
            src={cego}
            alt="Imagem representando luz"
            className="rounded-lg shadow-lg mt-4"
          />
        </div>

        {/* Para o faminto */}
        <div className="flex flex-col items-center">
          <span className="text-6xl">🍞</span>
          <h2 className="text-2xl font-semibold text-blue-700 mt-4">Para o faminto, o Pão</h2>
          <img
            src={faminto}
            alt="Imagem de pão"
            className="rounded-lg shadow-lg mt-4"
          />
        </div>

        {/* Para o enfermo */}
        <div className="flex flex-col items-center">
          <span className="text-6xl">🤒</span>
          <h2 className="text-2xl font-semibold text-blue-700 mt-4">Para o enfermo, a Cura</h2>
          <img
            src={enfermo}
            alt="Imagem de cura"
            className="rounded-lg shadow-lg mt-4"
          />
        </div>

        {/* Para o navegador perdido */}
        <div className="flex flex-col items-center">
          <span className="text-6xl">⭐</span>
          <h2 className="text-2xl font-semibold text-blue-700 mt-4">Para o navegador perdido, A Estrela Solitária</h2>
          <img
            src={luz}
            alt="Imagem de estrela solitária"
            className="rounded-lg shadow-lg mt-4"
          />
        </div>
      </section>
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
