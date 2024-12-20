import React, { useState, useEffect } from "react";
import "./imagecarousel.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";

const ImageCarousel = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? "active" : "hidden"}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Full screen" />
          </div>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
