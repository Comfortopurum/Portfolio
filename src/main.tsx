import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js';
script.crossOrigin = 'anonymous';
document.head.appendChild(script);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
