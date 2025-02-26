import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = () => {
  const { width } = useWindowSize();
  return width <= 768 ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
