import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app/App';

import './styles/fonts.css';

const root = createRoot(document.getElementById('root') as Element);
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
