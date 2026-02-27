import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Leaf, Recycle, FileCheck, TreePine } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Ambiente() {
  const f = window.wpData?.fields ?? {};

  // ── Campi ACF con fallback ─────────────────────────────────────────────────
  const heroTitle        = f.amb_hero_title        ?? 'Ambiente e Sostenibilità';
  const heroSubtitle     = f.amb_hero_subtitle     ?? 'Conformità normativa ambientale e sostenibilità negli appalti pubblici';
  const mainTitle        = f.amb_main_title        ?? 'Ambiente, sostenibilità e conformità normativa';
  const mainText         = f.amb_main_text         ?? null; // wysiwyg
  const serviceTitle     = f.amb_services_title    ?? 'I Nostri Servizi';
  const serviceSubtitle  = f.amb_services_subtitle ?? "Dall'analisi preliminare alla gestione operativa degli adempimenti";
  const listTitle        = f.amb_list_title        ?? 'In sintesi';
  const ctaTitle         = f.amb_cta_title         ?? 'Hai bisogno di supporto per gli aspetti ambientali di un appalto?';

  // ── Card servizi: testi da ACF, icone fisse ───────────────────────────────
  const cards = [
    {
      icon: FileCheck,
      title: f.amb_c1_title ?? 'Autorizzazioni',
      description: f.amb_c1_desc ?? "Supporto per l'ottenimento delle autorizzazioni ambientali necessarie per le opere pubbliche.",
    },
    {
      icon: Recycle,
      title: f.amb_c2_title ?? 'Rifiuti di cantiere',
      description: f.amb_c2_desc ?? 'Gestione documentale e operativa dei rifiuti prodotti nelle attività di cantiere.',
    },
    {
      icon: TreePine,
      title: f.amb_c3_title ?? 'CAM – Criteri Ambientali Minimi',
      description: f.amb_c3_desc ?? 'Verifica e applicazione dei CAM obbligatori negli appalti pubblici (D.M. Ambiente).',
    },
    {
      icon: Leaf,
      title: f.amb_c4_title ?? 'Valutazioni ambientali',
      description: f.amb_c4_desc ?? "Analisi preliminari dell'impatto ambientale nelle fasi di gara e progettazione.",
    },
  ];

  // ── Lista bullet da ACF ───────────────────────────────────────────────────
  const listItems = [
    f.amb_l1 ?? 'Supporto per autorizzazioni e adempimenti ambientali',
    f.amb_l2 ?? 'Gestione dei rifiuti di cantiere',
    f.amb_l3 ?? 'Valutazioni ambientali preliminari',
    f.amb_l4 ?? 'Supporto per criteri ambientali minimi (CAM)',
  ].filter(Boolean);

  return (
    <div className="w-full">
      <Helmet>
        <title>{f.seo_title ?? 'Ambiente e Sostenibilità | TECNORA'}</title>
        <meta name="description" content={f.seo_description ?? 'Tecnora supporta le imprese nella gestione degli aspetti ambientali negli appalti pubblici: CAM, rifiuti di cantiere, autorizzazioni e valutazioni preliminari.'} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-800 via-green-700/95 to-green-600/80">
        <div className="absolute inset-0 opacity-15">
          <ImageWithFallback
            src={f.amb_hero_image?.url ?? 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&q=80'}
            alt={f.amb_hero_image?.alt ?? 'Paesaggio sostenibile'}
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
                  Supportiamo le imprese nella gestione degli <strong>aspetti ambientali legati agli appalti pubblici</strong>,
                  contribuendo al rispetto delle normative vigenti e agli obiettivi di sostenibilità.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I <strong>Criteri Ambientali Minimi (CAM)</strong> sono obbligatori in numerose categorie
                  di appalto. Affianchiamo le imprese nella loro corretta applicazione, riducendo il rischio
                  di esclusione e migliorando la qualità complessiva dell'offerta.
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
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <c.icon className="w-7 h-7 text-green-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{c.title}</h3>
                <p className="text-gray-600 leading-relaxed">{c.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Lista sintetica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-green-50 rounded-xl p-8 border border-green-200"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">{listTitle}</h3>
            <ul className="space-y-4">
              {listItems.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-700 mt-1 font-bold" aria-hidden="true">✓</span>
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
