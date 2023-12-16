import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './bestsellers.css'; // Create a separate CSS file for styling

import book1 from '../../assets/images/harrypotterbookcover.jpg';
import book2 from '../../assets/images/bestseller2.jpg';
import book3 from '../../assets/images/bestseller3.jpg';
import book4 from '../../assets/images/bestseller4.jpg';

const BestSellers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const books = [book1, book2, book3, book4];

  // Ensure the first book is placed at the center
  const rearrangedBooks = [
    books[1], // Second book (centered)
    ...books.slice(2), // The rest of the books
    books[0], // First book
  ];

  return (
    <div className='bestsellers'>
      <h1>BESTSELLERS</h1>
      <div className="book-slider-container">
        <Slider {...settings}>
          {rearrangedBooks.map((book, index) => (
            <div
              key={index}
              className={`book-slide ${index === 1 ? 'stand-out' : ''}`}
            >
              <img src={book} alt={`Book Cover ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSellers;
