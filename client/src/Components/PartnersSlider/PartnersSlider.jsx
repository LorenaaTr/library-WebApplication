import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './partnersslider.css';

import partner1Image from '../../assets/images/kombetare.jpg';
import partner2Image from '../../assets/images/Buzuku.jpg';
import partner3Image from '../../assets/images/ferizaj.jpg';
import partner4Image from '../../assets/images/hivzi.jpg';

const StaticPartnerSlider = () => {
  const partners = [
    { id: 1, name: 'Mana Bookstore', image: partner1Image },
    { id: 2, name: 'Buzuku Bookstore', image: partner2Image },
    { id: 3, name: 'Dukagjini Bookstore', image: partner3Image },
    { id: 4, name: 'Hivzi Bookstore', image: partner4Image },
  ];

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

  return (
    <div className='Slider'>
      <div className="partner-slider-container">
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div key={partner.id} className={`partner-slide ${index === 1 ? 'stand-out' : ''}`}>
              <img src={partner.image} alt={`Partner Logo ${index + 1}`} className='partners-img' />
              <p>{partner.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default StaticPartnerSlider;
