import React, { useState } from 'react';
import { IoMdExpand } from 'react-icons/io';
import './ouroffices.css';

const OurOffices = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    const mapIframe = document.querySelector('iframe');

    if (
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    } else {
      if (mapIframe.requestFullscreen) {
        mapIframe.requestFullscreen();
      } else if (mapIframe.mozRequestFullScreen) {
        mapIframe.mozRequestFullScreen();
      } else if (mapIframe.webkitRequestFullscreen) {
        mapIframe.webkitRequestFullscreen();
      } else if (mapIframe.msRequestFullscreen) {
        mapIframe.msRequestFullscreen();
      }
      setIsFullScreen(true);
    }
  };

  return (
    <div className="map">
        <p>You can find our offices for further negotiations.</p>
      <button onClick={toggleFullScreen} className="fullscreen-button ">
        {isFullScreen ? <IoMdExpand /> : <IoMdExpand />}
      </button>
      <iframe
        title="Google Map"
        width="70%"
        height="400"
        frameBorder="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5868.96664500013!2d21.14835549414191!3d42.651112225674716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ef28561b303%3A0x8160d09749bd81fe!2sDardani%2C%20Pristina!5e0!3m2!1sen!2s!4v1699230652213!5m2!1sen!2s&t=k"
        allowFullScreen
        style={{ border: '0', margin: '20px 230px' }}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default OurOffices;
