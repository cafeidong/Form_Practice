import React from 'react';
import ReactDOM from 'react-dom/client'; 
import MainPage from './app'; 

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
