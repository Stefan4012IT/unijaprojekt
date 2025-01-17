import React from 'react';
import ReactDOM from 'react-dom/client'; // Obrati pažnju na '/client'
import './styles/main.scss'; // Glavni Sass fajl
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
