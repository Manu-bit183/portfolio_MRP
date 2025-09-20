import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';  // Importeer de Tailwind CSS
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);