
import Countdown, { CountdownRenderProps } from 'react-countdown';

export const TimerFlor: React.FC = () => {
  // Defina a data de contagem regressiva para 12 de outubro de 2031, às 18:00
  const targetDate = new Date('2027-04-12T18:00:00');

  // Renderer para exibir o timer
  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      // Renderiza quando a contagem regressiva estiver completa
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-purple-300 text-blue-800 p-4">
          <h1 className="text-4xl font-bold mb-4">O tempo acabou!</h1>
        </div>
      );
    } else {
      // Renderiza o tempo restante
      return (
        <div className="min-h-screen bg-purple-300 text-blue-800">
            <nav className="bg-blue-600 p-4 text-white w-screen">
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
        <div className=' w-screen'>
        <h1 className="text-4xl font-bold mb-4 mx-auto text-center">Tempo até a sua flor desabrochar!</h1>
        <img src="https://i.pinimg.com/736x/cb/7c/c5/cb7cc507684a71616bb81cebc0971968.jpg" className='w-60 mx-auto'/>
          <div className="text-2xl md:text-3xl text-center">
            <div>{days} Dias</div>
            <div className='px-2'>{hours} Horas </div>
            <div className='px-2'>{minutes} Minutos</div>
            <div className='px-2'>{seconds}  Segundos </div>
            </div>
          </div>
          <footer className="bg-blue-600 text-white p-4 bottom-0 absolute w-screen">
          <div className="container mx-auto text-center">
            <p>
              <a href="https://www.instagram.com/ju_martins_23/" className="hover:underline">Olha a Beleza dessa mulher!</a> 
            </p>
          </div>
        </footer>
        </div>
      );
    }
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};
