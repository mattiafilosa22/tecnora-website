import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Building2, Wrench, Lightbulb, Shield, Target, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';


export function Home() {
  const f = window.wpData?.fields ?? {};

  // ── Macro-Aree: testi da ACF, icone/percorsi/colori fissi ─────────────────
  const macroAreas = [
    {
      icon: Building2,
      title: f.macro1_title ?? 'Opere e Lavori Pubblici',
      description: f.macro1_desc ?? 'Progettazione integrata e direzione lavori per infrastrutture e edilizia pubblica',
      path: '/opere-pubbliche',
      color: 'bg-primary',
    },
    {
      icon: Wrench,
      title: f.macro2_title ?? 'Facility Management',
      description: f.macro2_desc ?? 'Gestione asset, manutenzione programmata e supporto appalti pubblici',
      path: '/facility-management',
      color: 'bg-secondary',
    },
    {
      icon: Lightbulb,
      title: f.macro3_title ?? 'Innovazione Digitale',
      description: f.macro3_desc ?? 'BIM, GIS e Data Analytics per decisioni basate sui dati',
      path: '/innovazione',
      color: 'bg-accent',
    },
  ];

  // ── Valori Pubblico: testi da ACF, icone fisse ────────────────────────────
  const values = [
    {
      icon: Target,
      title: f.val1_title ?? 'Competenza Tecnica',
      description: f.val1_desc ?? 'Know-how ingegneristico e conoscenza normativa degli appalti pubblici',
    },
    {
      icon: Shield,
      title: f.val2_title ?? 'Trasparenza',
      description: f.val2_desc ?? 'Processi tracciabili e reporting in tempo reale per la PA',
    },
    {
      icon: Users,
      title: f.val3_title ?? 'Team Multidisciplinare',
      description: f.val3_desc ?? 'Ingegneri, architetti e specialisti con competenze trasversali',
    },
  ];

  // ── Titoli sezione da ACF ─────────────────────────────────────────────────
  const areasSectionTitle    = f.areas_section_title    ?? 'Le Nostre Aree di Competenza';
  const areasSectionSubtitle = f.areas_section_subtitle ?? 'Soluzioni integrate per ogni fase del ciclo di vita dei progetti pubblici';
  const valuesSectionTitle   = f.values_section_title   ?? 'Il Nostro Valore Pubblico';
  const valuesSectionSubtitle= f.values_section_subtitle?? 'Responsabilità, qualità e sicurezza nelle scelte progettuali';

  const wpFields = f; // alias per compatibilità con hero/mission/cta

  // ── Campi ACF con fallback statici ────────────────────────────────────────
  const heroTitle        = wpFields?.hero_title        ?? 'Ingegneria.\nIntegrità.\nInnovazione.';
  const heroSubtitle     = wpFields?.hero_subtitle     ?? "Soluzioni tecniche d'eccellenza per la Pubblica Amministrazione";
  const heroBgImage      = wpFields?.hero_bg_image     ?? null;
  const heroCtaPrimary   = wpFields?.hero_cta_primary_label   ?? 'Scopri di più';
  const heroCtaSecondary = wpFields?.hero_cta_secondary_label ?? 'Contattaci';
  const missionTitle     = wpFields?.mission_title     ?? 'La Nostra Missione';
  const missionText      = wpFields?.mission_text      ?? null; // wysiwyg HTML
  const ctaTitle         = wpFields?.cta_title         ?? 'Pronti per il Prossimo Progetto?';
  const ctaText          = wpFields?.cta_text          ?? 'Trasformiamo le sfide della Pubblica Amministrazione in opportunità di eccellenza';
  const ctaBtnLabel      = wpFields?.cta_button_label  ?? 'Richiedi una Consulenza';

  // Converte il titolo hero (con \n) in righe separate
  const heroLines = heroTitle.split('\n').filter(Boolean);

  return (
    <div className="w-full">
      <Helmet>
        <title>{wpFields?.seo_title ?? 'TECNORA – Ingegneria per la Pubblica Amministrazione'}</title>
        <meta name="description" content={wpFields?.seo_description ?? 'TECNORA S.R.L. offre soluzioni di ingegneria per opere pubbliche, facility management e innovazione digitale.'} />
      </Helmet>

      {/* Hero Section */}

      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src={heroBgImage?.url ?? 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80'}
            alt={heroBgImage?.alt ?? 'Sfondo ingegneria'}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {heroLines.map((line, i) => (
                <span key={i}>{line}{i < heroLines.length - 1 && <br />}</span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/chi-siamo"
                className="px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105"
              >
                {heroCtaPrimary}
              </Link>
              <Link
                to="/contatti"
                className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                {heroCtaSecondary}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
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
              {missionTitle}
            </h2>
            {missionText ? (
              // Il testo arriva già sanificato da wp_kses_post() lato PHP
              <div
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: missionText }}
              />
            ) : (
              <p className="text-lg text-gray-700 leading-relaxed">
                TECNORA si impegna a generare <strong>valore tecnico e sociale</strong> attraverso
                progetti di ingegneria per gli appalti pubblici. Uniamo competenze ingegneristiche
                avanzate con una profonda conoscenza dei contratti pubblici, trasformando
                la complessità amministrativa in <strong>soluzioni operative tracciabili</strong>
                e orientate alla qualità, sicurezza e sostenibilità.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Macro-Aree (Bento Grid) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {areasSectionTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {areasSectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {macroAreas.map((area, index) => (
              <motion.div
                key={area.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={area.path}
                  className="group block h-full"
                >
                  <div className="h-full bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                    <div className={`w-16 h-16 ${area.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {area.description}
                    </p>
                    <div className="text-accent font-semibold flex items-center">
                      Scopri di più
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Il Nostro Valore Pubblico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {valuesSectionTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {valuesSectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-secondary/20 rounded-full flex items-center justify-center">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {ctaTitle}
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {ctaText}
            </p>
            <Link
              to="/contatti"
              className="inline-block px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105"
            >
              {ctaBtnLabel}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
