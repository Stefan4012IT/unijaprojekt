import React, { useEffect, useRef, useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import unijaprojekt_1 from '../../assets/logoes/unijaprojekt_1.svg'
import unijaprojekt_2 from '../../assets/logoes/unijaprojekt_2.svg'
import unijaprojekt_3 from '../../assets/logoes/unijaprojekt_3.svg'

const DesktopHeader = () => {
    const headerRef = useRef(null);
    const { lang, availableLanguages } = useContext(LanguageContext);


    const currentLanguage = availableLanguages.find((language) => language.code === lang) || availableLanguages.find((language) => language.code === 'en');



    useEffect(() => {
      if (headerRef.current) {
        const visina = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--visina-headera', `${visina}px`);
      }
    }, []);

    const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };


  return (
    <header className="desktop-header container" id='home'
    ref={headerRef}>
            <div className="wrapper desktop-nav--content">
                <div className="language-box">
                  <span className='lang-text'>{currentLanguage ? currentLanguage.label : 'ENG'}</span>
                </div>
                <Link to="/" className="logo-box">
                  <img className='logoHeader' src={unijaprojekt_1} alt='logo unmaze' />
                  <img className='logoHeader' src={unijaprojekt_2} alt='logo unmaze' />
                  <img className='logoHeader' src={unijaprojekt_3} alt='logo unmaze' />
                </Link>

                <div className='nav-links'>
                <ScrollLink to="architecture" smooth={true} duration={500} offset={-70}>Arhitektura</ScrollLink>
                <ScrollLink to="about" smooth={true} duration={500} offset={-70}>O nama</ScrollLink>
                <ScrollLink to="about" smooth={true} duration={500} offset={-70}>Istraži</ScrollLink>
                <ScrollLink to="about" smooth={true} duration={500} offset={-70}>Tim</ScrollLink>
                <ScrollLink to="about" smooth={true} duration={500} offset={-70}>Kontakt</ScrollLink>
                </div>
            </div>
      
    </header>
  );
};

export default DesktopHeader;
