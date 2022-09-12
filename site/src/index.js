import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from './routes';
import Rodape from './Components/Rodapé';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rodape />
  </React.StrictMode>
);

