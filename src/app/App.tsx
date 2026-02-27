import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ChiSiamo } from './pages/ChiSiamo';
import { OperePubbliche } from './pages/OperePubbliche';
import { FacilityManagement } from './pages/FacilityManagement';
import { Innovazione } from './pages/Innovazione';
import { Contatti } from './pages/Contatti';

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
          <Route path="/opere-pubbliche" element={<OperePubbliche />} />
          <Route path="/facility-management" element={<FacilityManagement />} />
          <Route path="/innovazione" element={<Innovazione />} />
          <Route path="/contatti" element={<Contatti />} />
          {/* Reindirizza il route WP corrente se diverso dal path attuale */}
          {initialRoute && initialRoute !== '/' && (
            <Route path="*" element={<Navigate to={initialRoute} replace />} />
          )}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

