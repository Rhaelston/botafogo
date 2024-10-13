import { useState } from 'react';

import image1 from '../assets/1ca.png';  // Importando imagens locais
import image2 from '../assets/2ca.png';
import image3 from '../assets/3ca.png'

export const Carousel = () => {
  const images = [image1, image2, image3];  // Array com as imagens importadas
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Função para ir para a próxima imagem
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Função para ir para a imagem anterior
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Área do Carrossel */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentImageIndex]}  // Exibe a imagem atual do array
          alt={`Slide ${currentImageIndex + 1}`}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Botão de navegação anterior */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full focus:outline-none"
        onClick={handlePrev}
      >
        &#10094;
      </button>

      {/* Botão de navegação próximo */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full focus:outline-none"
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  );
};
