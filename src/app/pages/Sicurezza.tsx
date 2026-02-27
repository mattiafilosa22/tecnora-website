import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FileWarning, Users, ClipboardCheck, HardHat } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Sicurezza() {
  const f = window.wpData?.fields ?? {};

  // ── Campi ACF con fallback ─────────────────────────────────────────────────
  const heroTitle        = f.sic_hero_title        ?? 'Sicurezza sul Lavoro e Cantieri';
  const heroSubtitle     = f.sic_hero_subtitle     ?? 'Supporto specialistico per la sicurezza negli appalti pubblici';
  const mainTitle        = f.sic_main_title        ?? 'La sicurezza è un elemento centrale negli appalti pubblici';
  const mainText         = f.sic_main_text         ?? null; // wysiwyg
  const serviceTitle     = f.sic_services_title    ?? 'I Nostri Servizi';
  const serviceSubtitle  = f.sic_services_subtitle ?? 'Supporto completo per la sicurezza in cantiere e nelle procedure di gara';
  const listTitle        = f.sic_list_title        ?? 'In sintesi';
  const ctaTitle         = f.sic_cta_title         ?? 'Hai bisogno di supporto per la sicurezza in cantiere?';

  // ── Card servizi: testi da ACF, icone fisse ───────────────────────────────
  const cards = [
    {
      icon: FileWarning,
      title: f.sic_c1_title ?? 'PSC e POS',
      description: f.sic_c1_desc ?? 'Piani di Sicurezza e Coordinamento e Piani Operativi di Sicurezza redatti da professionisti qualificati.',
    },
    {
      icon: Users,
      title: f.sic_c2_title ?? 'Coordinamento',
      description: f.sic_c2_desc ?? 'Supporto al Coordinatore per la Sicurezza in fase di progettazione ed esecuzione dei lavori.',
    },
    {
      icon: ClipboardCheck,
      title: f.sic_c3_title ?? 'Conformità normativa',
      description: f.sic_c3_desc ?? 'Verifica sistematica della conformità al D.Lgs. 81/2008 e alle normative tecniche di cantiere.',
    },
    {
      icon: HardHat,
      title: f.sic_c4_title ?? 'Assistenza in gara',
      description: f.sic_c4_desc ?? 'Affiancamento nella predisposizione dei documenti di sicurezza richiesti nelle procedure di gara.',
    },
  ];

  // ── Lista bullet da ACF ───────────────────────────────────────────────────
  const listItems = [
    f.sic_l1 ?? 'Redazione di PSC, POS e documentazione di sicurezza',
    f.sic_l2 ?? 'Supporto al Coordinatore per la Sicurezza',
    f.sic_l3 ?? 'Verifica della conformità normativa',
    f.sic_l4 ?? 'Assistenza durante le fasi di gara ed esecuzione',
  ].filter(Boolean);

  return (
    <div className="w-full">
      <Helmet>
        <title>{f.seo_title ?? 'Sicurezza sul Lavoro e Cantieri | TECNORA'}</title>
        <meta name="description" content={f.seo_description ?? 'Tecnora fornisce supporto specialistico per la sicurezza nei luoghi di lavoro e nei cantieri: PSC, POS, coordinamento e conformità D.Lgs. 81/2008.'} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-700 via-orange-600/95 to-orange-600/80">
        <div className="absolute inset-0 opacity-15">
          <ImageWithFallback
            src={f.sic_hero_image?.url ?? 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80'}
            alt={f.sic_hero_image?.alt ?? 'Cantiere con operai in sicurezza'}
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

      {/* Testo principale */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              {mainTitle}
            </h2>
            {mainText ? (
              <div
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: mainText }}
              />
            ) : (
              <>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Tecnora fornisce <strong>supporto specialistico</strong> per la gestione della sicurezza
                  nei luoghi di lavoro e nei cantieri temporanei e mobili.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Il rispetto del <strong>D.Lgs. 81/2008</strong> e delle normative tecniche è un requisito
                  imprescindibile nelle gare d'appalto pubbliche. Affianchiamo le imprese con
                  professionalità e rigore in ogni fase del procedimento.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Card Servizi */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{serviceTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{serviceSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {cards.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <v.icon className="w-7 h-7 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Lista sintetica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-orange-50 rounded-xl p-8 border border-orange-200"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">{listTitle}</h3>
            <ul className="space-y-4">
              {listItems.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-orange-600 mt-1 font-bold" aria-hidden="true">✓</span>
                  <span className="text-gray-700">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
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
          >
            <h2 className="text-4xl font-bold text-white mb-6">{ctaTitle}</h2>
            <Link to="/contatti" className="inline-block px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105">
              Contattaci
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
