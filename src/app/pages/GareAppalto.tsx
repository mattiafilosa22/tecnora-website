import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FileSearch, FileText, CheckSquare, Wrench } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function GareAppalto() {
  const f = window.wpData?.fields ?? {};

  // ── Campi ACF con fallback ─────────────────────────────────────────────────
  const heroTitle        = f.ga_hero_title        ?? "Supporto alle Gare d'Appalto";
  const heroSubtitle     = f.ga_hero_subtitle     ?? "Il partner tecnico delle imprese per le procedure di gara pubblica";
  const introTitle       = f.ga_intro_title       ?? "Supporto tecnico alle imprese per le gare d'appalto pubbliche";
  const introText        = f.ga_intro_text        ?? null; // wysiwyg
  const serviceTitle     = f.ga_services_title    ?? 'I Nostri Servizi';
  const serviceSubtitle  = f.ga_services_subtitle ?? "Dalla lettura del bando all'aggiudicazione";
  const ctaTitle         = f.ga_cta_title         ?? "Stai partecipando a una gara d'appalto?";
  const ctaText          = f.ga_cta_text          ?? "Contattaci per un'analisi preliminare della documentazione di gara.";

  // ── Servizi: testi da ACF, icone fisse ────────────────────────────────────
  const services = [
    {
      icon: FileSearch,
      number: f.ga_s1_number ?? '01',
      title: f.ga_s1_title ?? "Analisi della documentazione di gara",
      description: f.ga_s1_desc ?? "Verifica dei requisiti tecnici, analisi dei disciplinari, capitolati e documenti di gara, individuazione delle criticità e delle opportunità.",
    },
    {
      icon: FileText,
      number: f.ga_s2_number ?? '02',
      title: f.ga_s2_title ?? "Supporto alla redazione dell'offerta tecnica",
      description: f.ga_s2_desc ?? "Affiancamento nella predisposizione degli elaborati tecnici, relazioni descrittive, metodologie operative, cronoprogrammi e migliorie.",
    },
    {
      icon: CheckSquare,
      number: f.ga_s3_number ?? '03',
      title: f.ga_s3_title ?? "Verifica di conformità normativa",
      description: f.ga_s3_desc ?? "Controllo della coerenza dell'offerta rispetto al Codice dei Contratti Pubblici, alle norme tecniche e alle prescrizioni della stazione appaltante.",
    },
    {
      icon: Wrench,
      number: f.ga_s4_number ?? '04',
      title: f.ga_s4_title ?? "Assistenza tecnica in fase di esecuzione",
      description: f.ga_s4_desc ?? "Supporto successivo all'aggiudicazione per l'avvio e la gestione tecnica dell'appalto.",
    },
  ];

  return (
    <div className="w-full">
      <Helmet>
        <title>{f.seo_title ?? "Supporto alle Gare d'Appalto | TECNORA"}</title>
        <meta name="description" content={f.seo_description ?? "Tecnora supporta le imprese nella partecipazione alle gare d'appalto pubbliche: analisi documentazione, offerta tecnica, conformità normativa."} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent via-accent/95 to-accent/80">
        <div className="absolute inset-0 opacity-15">
          <ImageWithFallback
            src={f.ga_hero_image?.url ?? 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80'}
            alt={f.ga_hero_image?.alt ?? "Documenti gare d'appalto"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {introTitle}
            </h2>
            {introText ? (
              <div
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: introText }}
              />
            ) : (
              <>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  La partecipazione alle gare d'appalto richiede <strong>competenze multidisciplinari</strong>,
                  precisione documentale e una profonda conoscenza delle normative vigenti.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Tecnora supporta le imprese in modo strutturato e professionale,
                  <strong> riducendo i rischi</strong> e aumentando la qualità dell'offerta tecnica.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Servizi */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {serviceTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {serviceSubtitle}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg flex gap-6 items-start hover:shadow-xl transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-accent mb-2">Servizio {service.number}</div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {ctaTitle}
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              {ctaText}
            </p>
            <Link
              to="/contatti"
              className="inline-block px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105"
            >
              Richiedi una Consulenza
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
