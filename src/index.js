import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';  // Importa BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* No es necesario el basename si se va a usar de manera local */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Si deseas empezar a medir el rendimiento de tu app, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o envíalos a un endpoint de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
