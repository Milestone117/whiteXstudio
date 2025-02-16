import { useState, useEffect } from 'react';
import './gallery.css';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    { src: gallery_1, title: "Project 1" },
    { src: gallery_2, title: "Project 2" },
    { src: gallery_3, title: "Project 3" },
    { src: gallery_4, title: "Project 4" }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Handle dot navigation click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='gallery'>
      <div className="carousel-container">
        {/* Carousel Track */}
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image.src} alt={image.title} />
              <div className="slide-content">
                <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Dots */}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Action Button */}
      <button className='btn dark-btn'>
        See more here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
}

export default Gallery;