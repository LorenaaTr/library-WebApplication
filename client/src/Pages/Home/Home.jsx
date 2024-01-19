import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Card from '../../Components/Bookcard/Card.jsx'
import OurPartners from '../../Components/OurPartners/OurPartners'
import BestSellers from '../../Components/Bestsellers/BestSellers'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Fiction from '../../assets/images/fiction.jpg';
import NonFiction from '../../assets/images/nonfiction.jpg';
import Poetry from '../../assets/images/poetry.jpg';
import Travel from '../../assets/images/travel.jpg';
import Cook from '../../assets/images/cook.jpg';
import Classics from '../../assets/images/classic.jpg';
import Children from '../../assets/images/children.jpg';
import TrueCrime from '../../assets/images/truecrime.jpg';


const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='home'>
      <div className='homewrapper'>
          <div className='moto'>
              <p className='lateststories' >LATEST  STORIES</p>
              <p><Link to='/joinasereader'>Register</Link> for full access to read stories from Shelf Share.</p>
              <span className='redline'></span>
          </div>
          <div className='cards-wrapper'>
            <div className='cards'>
              <Card
              image={Fiction}
              title='FICTION'
              description='
              Fiction books weave dreams into reality, inviting readers to explore worlds
              beyond imagination.'
              />
              <Card
              image={NonFiction}
              title='NON FICTION'
              description='Nonfiction books unravel the threads of reality, 
              guiding readers through the fascinating tapestry of facts and knowledge.'
              />
              <Card
              image={Poetry}
              title='POETRY'
              description='Poetry books paint emotions with words,
              inviting readers to dance with the rhythm of language and savor the beauty of expressive verses.'
              />
              
              <Card
              image={Travel}
              title='TRAVEL'
              description='Travel guides serve as compasses to uncharted territories
              , offering readers a roadmap to discovery and the promise of unforgettable adventures in far-flung destinations.'
              />
            </div>
            <div className='cards-reverse'>
            <Card
              image={Cook}
              title='COOK'
              description='
              Cookbooks transform kitchens into culinary adventures
              , enticing readers to explore the art of flavors and the joy of creating delicious masterpieces.'
              />
              <Card
              image={Children}
              title='CHILDREN'
              description='Children books open enchanted portals to whimsical realms,
               where imagination takes flight and young minds embark on delightful journeys of wonder.'
              />

              <Card
              image={TrueCrime}
              title='TRUE CRIME'
              description='True crime books delve into the shadows of reality,
               gripping readers with the suspenseful narratives of actual events that challenge perception and captivate the curious mind'
              />
              <Card
              image={Classics}
              title='CLASSICS'
              description='Classics anchor readers in the timelessness of literary excellence,
               where the echoes of profound ideas and enduring stories resonate through the corridors of human experience.'
              />
            </div>
          </div>
          <div className='cmore'>
            <Link to='/ourBooks' className='seemore'>SEE MORE</Link>
            <span className='redline2'></span>
          </div>
          <OurPartners/>
          <BestSellers/>
          <div className='ourServices'>
            <h1 className='servicesHeader'>OUR SERVICES</h1>
              <div className='readonline'>
                <div className='circle'>
                  1
                </div>
                <h3>PROFIT ONLINE</h3>
                <p>IF YOU ARE A BIG OR SMALL LIBRARY BUSSINESS START UP WITH OUR PLATFORM</p>
              </div>
              <div className='learnonline'>
                <div className='circle'>
                  2
                </div>
                <h3>BUY ONLINE</h3>
                <p>BUY ONLINE FROM EVERY LIBRARY AT ONCE</p>
              </div>
          </div>
          <div className='signup'>
            <div className='overlayedcontext'>
              <p className='first'>THE BEST OF SHELF SHARE DELIVERED TO YOU</p>
              <p className='second'>SIGN UP FOR MORE INSPIRING BOOKS</p>
              <Link to='/joinasereader'><button className='signupbutton'>SIGN UP</button></Link>
            </div>
          </div>
          </div>
        <Footer/>
    </div>
    </>
  )
}

export default Home