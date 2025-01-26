import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import useWindowSize from './hooks/useWindowSize';
import GreetingPage from './pages/GreetingPage';
import Arhchitecture from './pages/Arhchitecture';
import MobileGreetingPage from './pages/MobileGreetingPage';

const App = () => {
  const { width } = useWindowSize();
  return (
    <Router>
      <Routes>
        {width <= 768 ? <Route path="/" element={<MobileGreetingPage />} /> : <Route path="/" element={<GreetingPage />} />}
        {/* <Route path="/" element={<GreetingPage />} /> */}
        <Route path="/arhchitecture" element={<Arhchitecture />} />
      </Routes>
    </Router>
  );
};

export default App;