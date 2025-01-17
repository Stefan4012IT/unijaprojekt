import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GreetingPage from './pages/GreetingPage';
import Arhchitecture from './pages/Arhchitecture';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GreetingPage />} />
        <Route path="/arhchitecture" element={<Arhchitecture />} />
      </Routes>
    </Router>
  );
};

export default App;