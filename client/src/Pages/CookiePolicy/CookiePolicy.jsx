import React from 'react'
import './cookiepolicy.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const CookiePolicy = () => {
    return (
        <>
        <Navbar/>
        <header>
      <h1>COOKIES POLICY</h1>
      
    </header>
        <div className="main-content">
      <p>
        This privacy policy describes the processing of information provided or collected on the sites and applications where this privacy policy is posted, whether on our digital properties or on applications we make available on third-party sites or platforms.
      </p>
     <p>
     Cookies are a common tool used online to learn about and respond to user website activities. They are stored on your device's web browser by the websites you visit. Most websites, web applications and mobile applications use cookies to improve your user experience and deliver relevant ads to you.

Whenever you visit a website, the website sends a cookie to the device you're using to access the website. Your device automatically stores the cookie in a file that's located within your web browser.

When you revisit a site, the website will respond in a more personalized way, remembering your preferences, providing faster page load times and so forth.
     </p>
    </div>
          <Footer/>
          </>
      )
    }
    
    
  export default CookiePolicy