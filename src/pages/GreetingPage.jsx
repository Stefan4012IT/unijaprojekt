import React from 'react';
import { Link } from 'react-router-dom';
import Arhchitecture from './Arhchitecture';
import unijaprojekt_1 from '../assets/logoes/unijaprojekt_1.svg'
import unijaprojekt_2 from '../assets/logoes/unijaprojekt_2.svg'
import unijaprojekt_3 from '../assets/logoes/unijaprojekt_3.svg'
import unijaprojekt_4 from '../assets/logoes/unijaprojekt_4.svg'
import unijaprojekt_5 from '../assets/logoes/unijaprojekt_5.svg'
import arhitektura_1 from '../assets/logoes/arhitektura/arhitektura_1.svg'
import arhitektura_2 from '../assets/logoes/arhitektura/arhitektura_2.svg'
import arhitektura_3 from '../assets/logoes/arhitektura/arhitektura_3.svg'
import arhitektura_4 from '../assets/logoes/arhitektura/arhitektura_3.svg'
import arhitektura_5 from '../assets/logoes/arhitektura/arhitektura_3.svg'
import alternativa_1 from '../assets/logoes/alternativa/alternativa_1.svg'
import alternativa_2 from '../assets/logoes/alternativa/alternativa_2.svg'
import alternativa_3 from '../assets/logoes/alternativa/alternativa_3.svg'
import alhemija_1 from '../assets/logoes/alhemija/alhemija_1.svg'
import alhemija_2 from '../assets/logoes/alhemija/alhemija_2.svg'
import alhemija_3 from '../assets/logoes/alhemija/alhemija_3.svg'
import background_img from '../assets/img/grid-line-paper-background.jpg'

const GreetingPage = () => {
  return (
    <div className="greeting-page">
      {/* Gornji blok */}
      
      <div className="greeting-page__block_invisible">
      <Link to="/architecture">
        <div className="greeting-page__block greeting-page__block--top">
            {/* <img src={arhitektura_1} alt="arhitektura" /> */}
            {/* <img src={arhitektura_2} alt="arhitektura" /> */}
            {/* <img src={arhitektura_3} alt="arhitektura" /> */}
        </div>
        </Link>
      </div>
      

      {/* Donji blokovi */}
      <div className="greeting-page__bottom">
        <div className="greeting-page__block greeting-page__block--left">
          {/* <img src={alhemija_1} alt="alhemija" />
          <img src={alhemija_2} alt="alhemija" />
          <img src={alhemija_3} alt="alhemija" /> */}
        </div>
        <div className="greeting-page__block greeting-page__block--right">
          {/* <img src={alternativa_1} alt="alternativa" />
          <img src={alternativa_2} alt="alternativa" />
          <img src={alternativa_3} alt="alternativa" /> */}
        </div>
      </div>
      <div className="img_box">
        <img src={arhitektura_1} alt="arhitektura" className='img_arhitektura'/>
        <img src={arhitektura_2} alt="arhitektura_text" className='img_arhitektura_text'/>
        <img src={arhitektura_3} alt="arhitektura_circle" className='img_arhitektura_circle'/>
        <img src={alhemija_1} alt="alhemija" className='img_alhemija'/>
        <img src={alhemija_2} alt="alhemija" className='img_alhemija_text'/>
        <img src={alhemija_3} alt="alhemija" className='img_alhemija_circle'/>
        <img src={alternativa_1} alt="alternativa" className='img_alternativa'/>
        <img src={alternativa_2} alt="alternativa_text" className='img_alternativa_text'/>
        <img src={alternativa_3} alt="alternativa_circle" className='img_alternativa_circle'/>

        <img src={unijaprojekt_1} alt="unijaprojekt" className='img_unijaprojekt'/>
        <img src={unijaprojekt_2} alt="unijaprojekt_text" className='img_unijaprojekt_text'/>
        <img src={unijaprojekt_3} alt="unijaprojekt_circle" className='img_unijaprojekt_circle'/>
      </div>
      
      {/* Centralni krug */}
      <div className="greeting-page__circle">
        {/* <img src={unijaprojekt_1} alt="unijaprojekt_logo" /> */}
        {/* <img src={arhitektura_1} alt="arhitektura" className='img_arch'/>
        <img src={alhemija_1} alt="alhemija" className='img_alchemy'/>
        <img src={alternativa_1} alt="alternativa" className='img_alternative'/> */}
        {/* <img src={unijaprojekt_2} alt="unijaprojekt_logo" />
        <img src={unijaprojekt_3} alt="unijaprojekt_logo" /> */}
        {/* <img src={unijaprojekt_4} alt="unijaprojekt_logo" />
        <img src={unijaprojekt_5} alt="unijaprojekt_logo" /> */}
      </div>
    </div>
  );
};

export default GreetingPage;