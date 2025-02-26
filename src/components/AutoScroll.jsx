import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';

const AutoScroll = ({ sections, offset = 30 }) => {
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      setLastScrollY(currentScrollY);

      let currentSectionIndex = -1;

      // Pronalazimo trenutnu sekciju
      sections.forEach((id, index) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= -offset && rect.top <= offset) {
            currentSectionIndex = index;
          }
        }
      });

      // Ako je nađen trenutni indeks, pomeramo skrol
      if (currentSectionIndex !== -1) {
        if (scrollDirection === 'down' && currentSectionIndex < sections.length - 1) {
          scroller.scrollTo(sections[currentSectionIndex + 1], {
            duration: 1400,
            smooth: 'easeInOutQuart',
            offset: -70,
          });
        } else if (scrollDirection === 'up' && currentSectionIndex > 0) {
          scroller.scrollTo(sections[currentSectionIndex - 1], {
            duration: 1400,
            smooth: 'easeInOutQuart',
            offset: -70,
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, sections]);

  return null; // Ne renderuje ništa, samo sluša scroll
};

export default AutoScroll;
