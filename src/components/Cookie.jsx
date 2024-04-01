import { useState, useEffect } from 'react';
import '../index.css'; 

const CookiesPolicyPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // Set delay in milliseconds (3 seconds)

    
    return () => clearTimeout(timer);
  }, []); 

  const handleClose = () => {
    setShowPopup(false);
   
    localStorage.setItem('cookiesAccepted', 'true');
  };

  const handleCloseWithoutAccepting = () => {
    setShowPopup(false);
   
    localStorage.setItem('cookiesAccepted', 'false');
  };

  
  if (!showPopup && localStorage.getItem('cookiesAccepted')) {
    return null;
  }

  return (
    <div className={`cookies-popup${showPopup ? ' show' : ''}`}>
      <button className="close-button" onClick={handleCloseWithoutAccepting}>×</button>
      <div className="cookies-content">
        <h3>Cookies Policy</h3>
        <p>Our cookie policy ensures a seamless browsing experience, utilizing cookies to enhance website functionality and personalize content tailored to your preferences.</p>
        <button onClick={handleClose}>Accept</button>
      </div>
    </div>
  );
};

export default CookiesPolicyPopup;
