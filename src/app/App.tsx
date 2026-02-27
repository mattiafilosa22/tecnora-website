import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ChiSiamo } from './pages/ChiSiamo';
import { GareAppalto } from './pages/GareAppalto';
import { OperePubbliche } from './pages/OperePubbliche';
import { FacilityManagement } from './pages/FacilityManagement';
import { Sicurezza } from './pages/Sicurezza';
import { Ambiente } from './pages/Ambiente';
import { Innovazione } from './pages/Innovazione';
import { Contatti } from './pages/Contatti';
import { GenericPage } from './pages/GenericPage';

// Leggi il basePath da WordPress (es. "/" o "/tecnora/") per sottocartelle WP
const basePath = window.wpData?.basePath ?? '/';

// In ambiente WordPress, inizializza la SPA sul route corretto della pagina WP
const initialRoute = window.wpData?.currentRoute;

export default function App() {
  return (
    <BrowserRouter basename={basePath}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/gare-appalto" element={<GareAppalto />} />
          <Route path="/opere-pubbliche" element={<OperePubbliche />} />
          <Route path="/facility-management" element={<FacilityManagement />} />
          <Route path="/sicurezza" element={<Sicurezza />} />
          <Route path="/ambiente" element={<Ambiente />} />
          <Route path="/innovazione" element={<Innovazione />} />
          <Route path="/contatti" element={<Contatti />} />
          {/* Pagine Generiche Generate da WordPress (Privacy Policy, Cookie, ecc.) */}
          <Route path="*" element={<GenericPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
