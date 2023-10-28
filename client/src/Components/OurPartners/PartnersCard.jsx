import React from 'react'
import dukagjini from '../../assets/images/dukagjini.jpg'
import './partnerscard.css'
const PartnersCard = () => {
  return (
    <div className='partnerscard'>
        <div className='libraryphoto'>
            <img src={dukagjini} alt="dukagjini" />
        </div>
        <div className='library-context'>
            <h5>DUKAGJINI BOOKSTORE</h5>
            <p>more than 20,000 books</p>
            <button>VISIT BOOKSTORE</button>
        </div>
    </div>
  )
}

export default PartnersCard