import React, { useState } from 'react';
import './Carousel.css';

const Carousel3D = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <div className="elegant-carousel">
      <div
        className="carousel-container"
        style={{
          transform: `translateX(-${currentIndex * 420}px)`, // No permitir desplazamiento más allá de la última imagen
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button
        className="prev-button"
        onClick={handlePrev}
        disabled={currentIndex === 5} // Desactivar el botón "prev" cuando estamos en la primera imagen
      >
        <span>&#10094;</span>
      </button>
      <button
        className="next-button"
        onClick={handleNext}
        disabled={currentIndex === images.length - 1} // Desactivar el botón "next" cuando estamos en la última imagen
      >
        <span>&#10095;</span>
      </button>
    </div>
  );
};

export default Carousel3D;
