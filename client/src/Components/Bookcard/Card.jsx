import React from 'react'
import './card.css'
import harry from '../../assets/images/harrypotterbookcover.jpg'
const Card = (prop) => {
  const {image, title, description} = prop;
  return (
    <div className='card'>
        <div className='photo'>
            <img src={harry} alt="harry" />
        </div>
        <div className='context'>
            <h3 className='title'>ACTION</h3>
            <p className='description'>Lorem ipsum dolor haaaaaaaaa hahahahahahahahah hahaha ahahah , sit amet consectetur adipisicing elit. Fugiat, veritatis!</p>
        </div>
    </div>
  )
}

export default Card;