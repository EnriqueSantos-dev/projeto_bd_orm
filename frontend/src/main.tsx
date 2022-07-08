import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import { ProviderUseContext } from './contexts/userContext/components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProviderUseContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProviderUseContext>
  </React.StrictMode>
);
