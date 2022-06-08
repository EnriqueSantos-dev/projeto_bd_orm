import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ContextUserProvider } from './contexts/Context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextUserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextUserProvider>
  </React.StrictMode>
);
