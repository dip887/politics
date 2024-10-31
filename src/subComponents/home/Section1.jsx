import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Carousel = () => {
  const images = [
    '/h1.jpg',
    '/h2.jpeg',
    '/h3.jpeg',
    '/h1.jpg',
    '/h2.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className=" w-[80%] mx-auto mt-4">
      {/* Image Container */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-64 md:h-96 object-cover transition duration-500"
        />
      </div>

      <div className='mt-8 flex justify-evenly'>

      {/* Left Arrow */}
      <IconButton
        className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-white shadow-lg"
        onClick={goToPrevious}
        style={{ zIndex: 10 }} // Ensure arrows are on top
      >
        <ArrowBackIos className="text-gray-600" />
      </IconButton>

      {/* Indicators */}
      <div className=" transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
      
      {/* Right Arrow */}
      <IconButton
        className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-white shadow-lg"
        onClick={goToNext}
        style={{ zIndex: 10 }} // Ensure arrows are on top
      >
        <ArrowForwardIos className="text-gray-600" />
      </IconButton>

      </div>

    </div>
  );
};

export default Carousel;
