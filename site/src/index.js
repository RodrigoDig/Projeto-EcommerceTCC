import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from './routes';
import CadastroProduto from './Pages/CadastroProduto'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
    <CadastroProduto/>
  </React.StrictMode>
);

