import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Opere Pubbliche', path: '/opere-pubbliche' },
    { name: 'Facility Management', path: '/facility-management' },
  ];

  const services = [
    { name: 'Gare d\'Appalto', path: '/gare-appalto' },
    { name: 'Sicurezza sul Lavoro', path: '/sicurezza' },
    { name: 'Ambiente e Sostenibilità', path: '/ambiente' },
    { name: 'Innovazione', path: '/innovazione' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">TECNORA</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Ingegneria di eccellenza per la Pubblica Amministrazione.
              Competenza tecnica, trasparenza e innovazione al servizio
              del valore pubblico.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Link rapidi">
            <h3 className="text-lg font-semibold mb-4 text-white">Link Rapidi</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1 focus-visible:ring-offset-primary rounded-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Servizi offerti">
            <h3 className="text-lg font-semibold mb-4 text-white">Servizi</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-sm text-gray-300 hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1 focus-visible:ring-offset-primary rounded-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h3 className="text-lg font-semibold mb-4 text-white">Contatti</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" aria-hidden="true" />
                <span>Via Francesco Caracciolo n. 10<br />80122 Napoli</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} aria-hidden="true" />
                <a
                  href="mailto:contact@tecnora.it"
                  className="hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary rounded-sm"
                  aria-label="Invia email a contact@tecnora.it"
                >
                  contact@tecnora.it
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} aria-hidden="true" />
                <a
                  href="mailto:tecnora@pec.it"
                  className="hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary rounded-sm"
                  aria-label="PEC: tecnora@pec.it"
                >
                  <span className="text-xs text-gray-400 mr-1">PEC</span>tecnora@pec.it
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              <span className="font-medium">Tecnora S.r.l.</span> | P.IVA / C.F.: 10920591210 | REA NA - 1141646
            </p>
            <p className="mt-2 md:mt-0">
              <small>© {new Date().getFullYear()} Tutti i diritti riservati</small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
