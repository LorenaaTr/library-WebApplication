import React from 'react'
import dukagjini from '../../assets/images/dukagjini.jpg'
import './partnerscard.css'
import { Link } from 'react-router-dom';
const PartnersCard = (props) => {
  const { image, name } = props;

  return (
    <div className='partnerscard'>
        <div className='libraryphoto'>
            <img src={image} alt={`${name}`} />
        </div>
        <div className='library-context'>
            <h5>{name.toUpperCase()} BOOKSTORE</h5>
        </div>
    </div>
  )
}

export default PartnersCard