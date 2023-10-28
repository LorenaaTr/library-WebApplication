import React from 'react'
import './covercard.css'
import harry from '../../assets/images/harrypotterbookcover.jpg'
import { Link } from 'react-router-dom'

const CoverCard = () => {
  return (
    <div className='bookcovercard' style={{ backgroundImage: `url(${harry})` }}>
      <Link to='/login'><button>READ</button></Link>
    </div>
  )
}

export default CoverCard