import React from 'react'
import './libPartners.css';
import dukagjini from '../../assets/images/dukagjini.jpg'
import Buzuku from '../../assets/images/Buzuku.jpg'
import Hivzi from '../../assets/images/hivzi.jpg'
import Kombetare from '../../assets/images/kombetare.jpg'
import Gjakove from '../../assets/images/Gjakove.jpg'
import Ferizaj from '../../assets/images/ferizaj.jpg'
import { Link } from 'react-router-dom';

const LibPartners  = () => {
    const libraries = [
        {
          name: 'DUKAGJINI LIBRARY',
          imageUrl: dukagjini,
        },
        {
          name: 'BUZUKU LIBRARY',
          imageUrl: Buzuku,
        },
        {
          name: 'HIVZI SYLEJMANI LIBRARY',
          imageUrl: Hivzi,
        },
        {
          name: 'NATIONAL LIBRARY OF KOSOVO',
          imageUrl: Kombetare,
        },
        {
          name: 'Gjakova Town Library',
          imageUrl: Gjakove,
        },
        {
          name: 'Ferizaj Town Library',
          imageUrl: Ferizaj,
        },
      ];
  return (
    <div className='partners-container'>
            <div>
            {libraries.map((library, index) => (
            <div key={index} className="library-partner">
                <img src={library.imageUrl} alt={library.name} className="library-image" />
                <div className="library-details">
                <h3 className="library-name">{library.name}</h3>
                <button className="have-a-look-button">HAVE A LOOK</button>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default LibPartners