import React from 'react'
import './footer.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import instagram from '../../assets/icons/instagram.png'
import linkedin from '../../assets/icons/linkedin.png'
import twitter from '../../assets/icons/twitter.png'
const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth'
    });
  };

  return (
    <div className='footer'>
      <div className='firstpart'>
        <div className='legal'>
          <p>LEGAL</p>
          <Link to='/termsofuse'>TERMS OF USE</Link>
          <Link to='/privacypolicy'>PRIVACY POLICY</Link>
          <Link to='/cookiepolicy'>COOKIE POLICY</Link>
        </div>
        <div className='ourservices'>
          <p>OUR SERVICES</p>
          <Link to='/ourservices' className='read'>READ ONLINE</Link>
          <Link to='/ourservices'>LEARN ONLINE</Link>
        </div>
        <div className='joinus'>
          <p>JOIN US</p>
          <Link to='/register'>JOIN AS A READER</Link>
          <Link to='/register'>JOIN AS A PARTNER</Link>
        </div>
        <div className='follow'>
          <p>FOLLOW US</p>
          <div className='icons'>
            <img src={instagram} alt="instagram" />
            <img src={linkedin} alt="linkedin" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
      </div>
      <div className='secondpart'>
      <div className='copyright'>
        <Link to='/'><img src={logo} alt="logo" onClick={scrollToTop}/></Link>
        <p>Copyright © 2023 Shelf Share Society | Copyright © 2023 Shelf Share Partners , LLC. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer