import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from './routes';
import Cadastro from './Pages/Admin/CadastroProduto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cadastro />
  </React.StrictMode>
);

