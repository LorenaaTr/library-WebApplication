import React from 'react'
import './infiniteslider.css'
import { useEffect, useState } from 'react';

const InfiniteSlider = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Move to the next slide
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval duration (in milliseconds) as needed

    return () => {
      // Clear the interval to avoid memory leaks
      clearInterval(intervalId);
    };
  }, [currentIndex, images.length]);

  const goToPrevSlide = () => {
    // Move to the previous slide
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    // Move to the next slide
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='slider'></div>
  );
}

export default InfiniteSlider