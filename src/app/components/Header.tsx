import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';
import logo from '../../assets/logo.jpeg';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: "Gare d'Appalto", path: '/gare-appalto' },
    { name: 'Opere Pubbliche', path: '/opere-pubbliche' },
    { name: 'Facility Management', path: '/facility-management' },
    { name: 'Sicurezza', path: '/sicurezza' },
    { name: 'Ambiente', path: '/ambiente' },
    { name: 'Innovazione', path: '/innovazione' },
    { name: 'Contatti', path: '/contatti' },
  ];

  // Chiudi il menu mobile e restituisci il focus al bottone (WCAG 2.1 — 2.4.3)
  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setTimeout(() => menuButtonRef.current?.focus(), 0);
  }, []);

  // Gestione tasto Esc e focus trap nel menu mobile (WCAG 2.1 — 2.1.2)
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
        return;
      }
      // Focus trap: mantieni il focus dentro il menu aperto
      if (e.key === 'Tab' && mobileNavRef.current) {
        const focusable = mobileNavRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last  = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Porta il focus al primo link del menu quando si apre
    const firstLink = mobileNavRef.current?.querySelector<HTMLElement>('a');
    firstLink?.focus();

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            aria-label="TECNORA – Torna alla homepage"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img 
                src={logo} 
                alt="Tecnora Logo" 
                className="h-12 w-auto" 
                style={{ height: '48px', width: 'auto', objectFit: 'contain', maxWidth: '250px' }} 
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-1"
            aria-label="Navigazione principale"
            role="navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="lg:hidden p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu di navigazione'}
          >
            {mobileMenuOpen
              ? <X size={24} aria-hidden="true" />
              : <Menu size={24} aria-hidden="true" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            ref={mobileNavRef}
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden pb-4"
            aria-label="Menu navigazione mobile"
            role="navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                className={`block px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                  location.pathname === item.path
                    ? 'bg-secondary/10 text-primary border-l-4 border-accent'
                    : 'hover:bg-muted'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
}
