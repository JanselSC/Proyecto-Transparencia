import React, { useState } from 'react';
import './Carousel.css';

const Carousel3D = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="elegant-carousel">
      <div className="carousel-container" style={{ transform: `translateX(-${currentIndex * 420}px)` }}>
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={image} alt={`Slide ${index}`} />
            </div>
          );
        })}
      </div>
      <button className="prev-button" onClick={handlePrev}>
        <span>&#10094;</span>
      </button>
      <button className="next-button" onClick={handleNext}>
        <span>&#10095;</span>
      </button>
    </div>
  );
};

export default Carousel3D;
