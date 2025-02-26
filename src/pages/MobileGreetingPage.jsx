import React from 'react';
import MobileGreetingHeader from '../components/MobileGreatingHeader';
import { Link } from 'react-router-dom';
import unijaprojekt_1 from '../assets/logoes/unijaprojekt_1.svg'
import unijaprojekt_2 from '../assets/logoes/unijaprojekt_2.svg'
import unijaprojekt_3 from '../assets/logoes/unijaprojekt_3.svg'
import arhitektura_1 from '../assets/logoes/arhitektura/arhitektura_1.svg'
import arhitektura_2 from '../assets/logoes/arhitektura/arhitektura_2.svg'
import arhitektura_3 from '../assets/logoes/arhitektura/arhitektura_3.svg'
import alternativa_1 from '../assets/logoes/alternativa/alternativa_1.svg'
import alternativa_2 from '../assets/logoes/alternativa/alternativa_2.svg'
import alternativa_3 from '../assets/logoes/alternativa/alternativa_3.svg'
import alhemija_1 from '../assets/logoes/alhemija/alhemija_1.svg'
import alhemija_2 from '../assets/logoes/alhemija/alhemija_2.svg'
import alhemija_3 from '../assets/logoes/alhemija/alhemija_3.svg'

const MobileGreetingPage = () => {
  return (
    <div className="mobile-greeting-page">
      {/* <MobileGreetingHeader /> */}
      <div className="mobile-greeting-content">
        <div className="mobile-box mobile-box-unijaprojekt">
            <img src={unijaprojekt_1} alt="unijaprojekt" className='img_unijaprojekt'/>
            <img src={unijaprojekt_2} alt="unijaprojekt_text" className='img_unijaprojekt_text'/>
            <img src={unijaprojekt_3} alt="unijaprojekt_circle" className='img_unijaprojekt_circle'/>
        </div>
        <Link to="/architecture" className="mobile-box mobile-box-architecture">
            <img src={arhitektura_1} alt="arhitektura" className='img_arhitektura'/>
            <img src={arhitektura_2} alt="arhitektura_text" className='img_arhitektura_text'/>
            <img src={arhitektura_3} alt="arhitektura_circle" className='img_arhitektura_circle'/>
        </Link>
        <div className="mobile-box mobile-box-alchemy">
            <img src={alhemija_1} alt="alhemija" className='img_alhemija'/>
            <img src={alhemija_2} alt="alhemija" className='img_alhemija_text'/>
            <img src={alhemija_3} alt="alhemija" className='img_alhemija_circle'/>
        </div>
        <div className="mobile-box mobile-box-alternative">
            <img src={alternativa_1} alt="alternativa" className='img_alternativa'/>
            <img src={alternativa_2} alt="alternativa_text" className='img_alternativa_text'/>
            <img src={alternativa_3} alt="alternativa_circle" className='img_alternativa_circle'/>
        </div>
      </div>
    </div>
  );
};

export default MobileGreetingPage;
