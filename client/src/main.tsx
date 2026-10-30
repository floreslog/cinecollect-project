import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ColeccionProvider } from './context/ColeccionProvider';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ColeccionProvider>
        <App />
      </ColeccionProvider>
    </BrowserRouter>
  </StrictMode>,
);
