import React from 'react';
import './buttons.scss';

function SliderButtons({ sliderRef }) {
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  };
  return (
    <div className="slider-buttons">
      <button className="slider-btn left" onClick={scrollLeft} aria-label="Deslizar a la izquierda">&#8592;</button>
      <button className="slider-btn right" onClick={scrollRight} aria-label="Deslizar a la derecha">&#8594;</button>
    </div>
  );
}

export default SliderButtons;
