import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from './routes';
import Home from './Pages/User/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

