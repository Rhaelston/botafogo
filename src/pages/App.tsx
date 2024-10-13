import { Carousel } from "../components/Carrousel"
import image1 from "../assets/1app.png"
import image2 from "../assets/2app.png"
function App() {

  return (
    <>
      <div className="bg-gray-50 text-gray-900">
        {/* Navbar */}
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

        {/* Carrossel */}
        <section className="container mx-auto my-8">
          <Carousel />
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Texto e Imagem 1 */}
            <div>
              <h2 className="text-3xl font-bold text-purple-700">Ela é inteligente!</h2>
              <p className="mt-4 text-gray-600">
                Olha ela, olha ela estudando, que linda
              </p>
            </div>
            <div>
              <img
                src={image1}
                alt="Imagem 1"
                className="rounded-lg shadow-lg" />
            </div>

            {/* Texto e Imagem 2 */}
            <div>
              <h2 className="text-3xl font-bold text-purple-700">LINDA LINDA LINDA</h2>
              <p className="mt-4 text-gray-600">
                Nos meus olhos ela é arte!
              </p>
            </div>
            <div>
              <img
                src={image2}
                alt="Imagem 2"
                className="rounded-lg shadow-lg" />
            </div>
            
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-blue-600 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>
              <a href="https://www.instagram.com/ju_martins_23/" className="hover:underline">Olha a Beleza dessa mulher!</a> 
            </p>
          </div>
        </footer>
      </div>
    </>
  )}

export default App
