import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'assets/font/fonts.module.css';
import { GlobalStyles } from 'styled/Global';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
        <App />
    </BrowserRouter>
  </React.StrictMode>
);

