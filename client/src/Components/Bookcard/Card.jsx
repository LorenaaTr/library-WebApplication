import React from 'react'
import './card.css'
import harry from '../../assets/images/harrypotterbookcover.jpg'
const Card = (prop) => {
  const {image, title, description} = prop;
  return (
    <div className='card'>
        <div className='photo'>
            <img src={image} alt={`${title}`} />
        </div>
        <div className='context' style={{ textAlign: 'left' }}>
            <h3 className='title'>{title}</h3>
            <p className='description'>{description}</p>
        </div>
    </div>
  )
}

export default Card;