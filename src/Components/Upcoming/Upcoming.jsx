/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './Upcoming.scss'

const Upcoming = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const autoSlider = setInterval(nextSlide, 3500);
    return () => clearInterval(autoSlider);
  }, []);


  return (

    <div className="main-carousel" id="home">
      <div className="carousel">
        <div className="items">
          {images && images.map((src, index) => (
            <div
              className={`img_card carousel-image ${index === currentIndex ? 'current' : ''}`}
              key={index}
            >
              <img src={src} alt="" className="" />
              <div className="img_text">
                <h3 className="slidet_text" key={`navimage${index + 1}`}>{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="buttons">
        <i className="fa fa-chevron-left fa-3x" id="prevBtn" onClick={prevSlide}></i>
        <i className="fa fa-chevron-right fa-3x" id="nextBtn" onClick={nextSlide}></i>
      </div>
    </div>
  );
};



export default Upcoming;


