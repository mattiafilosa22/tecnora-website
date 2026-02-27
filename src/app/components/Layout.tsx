import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/*
       * Skip Navigation Link – WCAG 2.1 (2.4.1 Bypass Blocks)
       * Visibile solo quando riceve focus da tastiera (stile in index.css).
       * Consente agli utenti di tastiera/screen reader di saltare la nav
       * e andare direttamente al contenuto principale.
       */}
      <a href="#main-content" className="skip-link">
        Salta al contenuto principale
      </a>
      <Header />
      {/*
       * id="main-content" + tabIndex={-1}: permette allo skip-link di spostare
       * il focus su <main> senza che appaia nel ciclo Tab normale.
       */}
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

