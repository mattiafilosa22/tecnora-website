import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Building2, Wrench, Lightbulb, HardHat, Leaf, FileText } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';


export function Home() {
  const f = window.wpData?.fields ?? {};

  // ── Macro-Aree: 6 servizi ─────────────────────────────────────────────────
  const macroAreas = [
    {
      icon: FileText,
      title: f.macro1_title ?? 'Supporto alle Gare d\'Appalto',
      description: f.macro1_desc ?? 'Affiancamento nella partecipazione a procedure di gara pubbliche, dall\'analisi dei documenti alla redazione dell\'offerta tecnica.',
      path: '/gare-appalto',
      color: 'bg-accent',
    },
    {
      icon: Building2,
      title: f.macro2_title ?? 'Opere Pubbliche',
      description: f.macro2_desc ?? 'Consulenza e supporto tecnico per la realizzazione di infrastrutture, edilizia pubblica e interventi sul territorio.',
      path: '/opere-pubbliche',
      color: 'bg-primary',
    },
    {
      icon: Wrench,
      title: f.macro3_title ?? 'Facility Management',
      description: f.macro3_desc ?? 'Supporto tecnico per la gestione e manutenzione di edifici, impianti e infrastrutture in appalti pubblici.',
      path: '/facility-management',
      color: 'bg-secondary',
    },
    {
      icon: HardHat,
      title: f.macro4_title ?? 'Sicurezza sul Lavoro',
      description: f.macro4_desc ?? 'Supporto specialistico per la sicurezza nei cantieri temporanei e mobili e nei luoghi di lavoro.',
      path: '/sicurezza',
      color: 'bg-orange-600',
    },
    {
      icon: Leaf,
      title: f.macro5_title ?? 'Ambiente e Sostenibilità',
      description: f.macro5_desc ?? 'Gestione degli aspetti ambientali negli appalti pubblici e rispetto dei criteri ambientali minimi (CAM).',
      path: '/ambiente',
      color: 'bg-green-600',
    },
    {
      icon: Lightbulb,
      title: f.macro6_title ?? 'Innovazione',
      description: f.macro6_desc ?? 'Digitalizzazione dei processi, ottimizzazione documentale e approcci innovativi alla gestione degli appalti.',
      path: '/innovazione',
      color: 'bg-purple-600',
    },
  ];

  // ── Campi ACF con fallback ────────────────────────────────────────────────
  const heroTitle         = f.hero_title        ?? 'Ingegneria.\nIntegrità.\nInnovazione.';
  const heroSubtitle      = f.hero_subtitle     ?? 'Il partner tecnico delle imprese nei rapporti con la Pubblica Amministrazione.';
  const heroBgImage       = f.hero_bg_image     ?? null;
  const heroCtaPrimary    = f.hero_cta_primary_label   ?? 'Scopri i servizi';
  const heroCtaSecondary  = f.hero_cta_secondary_label ?? 'Contattaci';

  const missionTitle      = f.mission_title     ?? 'Cosa Facciamo';
  const missionText       = f.mission_text      ?? null;

  const areasSectionTitle    = f.areas_section_title    ?? 'I Nostri Servizi';
  const areasSectionSubtitle = f.areas_section_subtitle ?? 'Supporto tecnico-specialistico per le imprese negli appalti pubblici';

  const ctaTitle         = f.cta_title         ?? 'Vuoi partecipare a una gara d\'appalto?';
  const ctaText          = f.cta_text          ?? 'Contattaci per una consulenza preliminare: analizzeremo le tue esigenze e individueremo la soluzione più adatta.';
  const ctaBtnLabel      = f.cta_button_label  ?? 'Richiedi una Consulenza';

  const heroLines = heroTitle.split('\n').filter(Boolean);

  return (
    <div className="w-full">
      <Helmet>
        <title>{f.seo_title ?? 'TECNORA – Partner tecnico per gli appalti pubblici'}</title>
        <meta name="description" content={f.seo_description ?? 'Tecnora affianca le imprese nella partecipazione alle gare d\'appalto pubbliche, offrendo supporto tecnico-specialistico in tutte le fasi del procedimento.'} />
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
                to="/gare-appalto"
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

      {/* Cosa Facciamo */}
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
              <div
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: missionText }}
              />
            ) : (
              <>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Tecnora affianca le imprese nella partecipazione alle gare d'appalto pubbliche,
                  offrendo <strong>supporto tecnico-specialistico</strong> in tutte le fasi del procedimento.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Operiamo con rigore ingegneristico, competenza normativa e una profonda
                  conoscenza dei processi della Pubblica Amministrazione.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Servizi (6 card) */}
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
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <Link to={area.path} className="group block h-full">
                  <div className="h-full bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                    <div className={`w-16 h-16 ${area.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <area.icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {area.description}
                    </p>
                    <div className="text-accent font-semibold flex items-center">
                      Scopri di più
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
