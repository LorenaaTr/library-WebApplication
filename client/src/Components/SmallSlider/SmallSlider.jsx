import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'; 
import book1 from '../../assets/images/harrypotterbookcover.jpg';
import book2 from '../../assets/images/bestseller2.jpg';
import book3 from '../../assets/images/bestseller3.jpg';
import book4 from '../../assets/images/bestseller4.jpg';

const SmallSlider = () => {
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

  
  const rearrangedBooks = [
    books[1], 
    ...books.slice(2), 
    books[0], 
  ];

  return (
    <div className='Slider'>
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

export default SmallSlider;
