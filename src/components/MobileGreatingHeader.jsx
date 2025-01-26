import React from 'react';
import unijaprojekt_1 from '../assets/logoes/unijaprojekt_1.svg'
import unijaprojekt_2 from '../assets/logoes/unijaprojekt_2.svg'
import unijaprojekt_3 from '../assets/logoes/unijaprojekt_3.svg'

const MobileGreetingHeader = () => {
  return (
    <div className="mobile-greeting-header">
      <div className="logo-box">
        <img src={unijaprojekt_1} alt="unijaprojekt" className='img_unijaprojekt'/>
        <img src={unijaprojekt_2} alt="unijaprojekt_text" className='img_unijaprojekt_text'/>
        <img src={unijaprojekt_3} alt="unijaprojekt_circle" className='img_unijaprojekt_circle'/>
      </div>
      {/* <h2 className="mobile-greeting-header__subtitle">Unijaprojekt</h2> */}
    </div>
  );
};

export default MobileGreetingHeader;
