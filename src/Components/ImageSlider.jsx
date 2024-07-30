import React, { useState, useEffect } from 'react';
import '../App.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}><ArrowBackIosIcon /></button>
      <div className="slider-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
            // width={"300px"}
          />
        ))}
      </div>
      <button className="next" onClick={nextSlide}><ArrowForwardIosIcon /></button>
    </div>
  );
};

export default ImageSlider;
