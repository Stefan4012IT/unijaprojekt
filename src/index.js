import React from 'react';
import ReactDOM from 'react-dom/client'; // Obrati pažnju na '/client'
import './styles/main.scss'; // Glavni Sass fajl
import './i18n';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
