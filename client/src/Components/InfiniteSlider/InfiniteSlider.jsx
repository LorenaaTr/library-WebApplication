import React from 'react'
import './infiniteslider.css'
import { useEffect, useState } from 'react';

const InfiniteSlider = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => {
      
      clearInterval(intervalId);
    };
  }, [currentIndex, images.length]);

  const goToPrevSlide = () => {
    
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='slider'></div>
  );
}

export default InfiniteSlider