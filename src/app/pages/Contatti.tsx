import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Shield, Award, Leaf } from 'lucide-react';


export function Contatti() {
  const f = window.wpData?.fields ?? {};

  // ── Certificazioni: testi da ACF, icone fisse ──────────────────────────────
  const certifications = [
    { icon: Shield, title: f.cert1_title ?? 'D.Lgs. 81/2008',      description: f.cert1_desc ?? 'Sicurezza nei luoghi di lavoro e coordinamento cantieri' },
    { icon: Award,  title: f.cert2_title ?? 'ISO 9001, 14001, 45001', description: f.cert2_desc ?? 'Quality, Environmental e Safety Management Systems' },
    { icon: Leaf,   title: f.cert3_title ?? 'ISO 50001 e CAM',       description: f.cert3_desc ?? 'Energy Management e Criteri Ambientali Minimi' },
  ];

  // ── Info contatto da ACF ───────────────────────────────────────────────────
  const address = f.contact_address ?? 'Via Francesco Caracciolo n. 10 - 80122 Napoli';
  const phone   = f.contact_phone   ?? '';
  const email   = f.contact_email   ?? 'contact@tecnora.it';
  const piva    = f.contact_piva    ?? '10920591210';

  const contactInfo = [
    { icon: MapPin, title: 'Sede Legale', content: address },
    { icon: Phone,  title: 'Telefono',    content: phone },
    { icon: Mail,   title: 'Email',       content: email },
  ];

  // ── Testi sezioni da ACF ───────────────────────────────────────────────────
  const heroTitle        = f.cont_hero_title        ?? 'Contatti & Compliance';
  const heroSubtitle     = f.cont_hero_subtitle     ?? 'Certificazioni, normative e informazioni di contatto';
  const sectionTitle     = f.cont_section_title     ?? 'Richiedi una Consulenza';
  const sectionSubtitle  = f.cont_section_subtitle  ?? 'Il nostro team è a disposizione per discutere il tuo progetto';
  const certTitle        = f.cert_section_title     ?? 'Certificazioni & Sicurezza';
  const certSubtitle     = f.cert_section_subtitle  ?? 'Compliance normativa e sistemi di gestione certificati';
  const formTitle        = f.form_section_title     ?? 'Scrivici Direttamente';
  const companyName      = f.company_name           ?? 'Tecnora S.r.l.';
  const companyReg       = f.company_reg            ?? 'Camera di Commercio di Napoli';
  const companyRea       = f.company_rea            ?? 'NA - 1141646';
  const companyCapital   = f.company_capital        ?? '';
  const companyPec       = f.company_pec            ?? 'tecnora@pec.it';

  return (
    <div className="w-full">
      <Helmet>
        <title>{f.seo_title ?? 'Contatti & Compliance | TECNORA'}</title>
        <meta name="description" content={f.seo_description ?? 'Contatta TECNORA S.R.L. per consulenze su opere pubbliche e facility management. Sede: Via Francesco Caracciolo 10, Napoli.'} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              {heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {sectionTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  {info.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">{formTitle}</h2>
            <form className="space-y-6" aria-label="Modulo di contatto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome e Cognome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="ente" className="block text-sm font-medium text-gray-700 mb-2">
                    Ente/Organizzazione
                  </label>
                  <input
                    type="text"
                    id="ente"
                    name="ente"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Oggetto
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Seleziona...</option>
                  <option value="opere">{f.macro1_title ?? 'Opere e Lavori Pubblici'}</option>
                  <option value="facility">{f.macro2_title ?? 'Facility Management'}</option>
                  <option value="innovazione">{f.macro3_title ?? 'Innovazione Digitale'}</option>
                  <option value="altro">Altro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Descrivi il tuo progetto o la tua richiesta..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105 font-medium"
              >
                Invia Richiesta
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Campi obbligatori. I tuoi dati saranno trattati nel rispetto del GDPR.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Certificazioni */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {certTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {certSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-secondary/20 rounded-full flex items-center justify-center">
                  <cert.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 text-center">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Compliance Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Protocolli e Normative
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Sicurezza & Ambiente</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-accent mt-1" aria-hidden="true">✓</span><span>D.Lgs. 81/2008 - Sicurezza sul lavoro</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-1" aria-hidden="true">✓</span><span>CAM - Criteri Ambientali Minimi</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-1" aria-hidden="true">✓</span><span>EMAS - Eco-Management Audit Scheme</span></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Qualità & Energy</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-accent mt-1" aria-hidden="true">✓</span><span>ISO 9001 - Quality Management</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-1" aria-hidden="true">✓</span><span>ISO 50001 - Energy Management</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-1" aria-hidden="true">✓</span><span>D.Lgs. 102/2014 - Efficienza Energetica</span></li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dati Societari */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-primary mb-8">
              Dati Societari
            </h2>
            <div className="bg-gray-50 rounded-xl p-8">
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="font-medium text-gray-700">Ragione Sociale:</span>
                    <span className="text-primary font-semibold">{companyName}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="font-medium text-gray-700">Sede Legale:</span>
                    <span className="text-gray-900">{address}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="font-medium text-gray-700">Registro Imprese:</span>
                    <span className="text-gray-900">{companyReg}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="font-medium text-gray-700">REA:</span>
                    <span className="text-gray-900 font-mono">{companyRea}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="font-medium text-gray-700">Codice Fiscale / P.IVA:</span>
                    <span className="text-gray-900 font-mono">{piva}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="font-medium text-gray-700">Email:</span>
                    <a href={`mailto:${email}`} className="text-accent hover:underline">{email}</a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">PEC:</span>
                    <a href={`mailto:${companyPec}`} className="text-accent hover:underline">{companyPec}</a>
                  </div>
                  {companyCapital && (
                    <div className="flex justify-between items-center border-t border-gray-200 pt-3">
                      <span className="font-medium text-gray-700">Capitale Sociale:</span>
                      <span className="text-gray-900">{companyCapital}</span>
                    </div>
                  )}
                </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
