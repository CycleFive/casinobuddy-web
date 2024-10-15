import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  if (!rootEl) throw new Error('Root element does not exist: #root');
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
