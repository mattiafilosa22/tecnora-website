import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './app/App.tsx';
import './styles/index.css';
import './types/wpData'; // Carica la dichiarazione globale window.wpData

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);