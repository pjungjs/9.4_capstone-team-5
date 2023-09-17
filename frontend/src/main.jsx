import React from 'react';
import ReactDOM from 'react-dom/client';
import { StytchProvider } from '@stytch/react';
import { StytchHeadlessClient } from '@stytch/vanilla-js/headless';
import App from './App.jsx';
import './index.css';

const stytch = new StytchHeadlessClient(import.meta.env.VITE_AUTH_PUBLIC_TOKEN);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StytchProvider stytch={stytch}>
    <App />
  </StytchProvider>,
);
