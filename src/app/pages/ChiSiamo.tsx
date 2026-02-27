import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, TrendingUp, Database } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';


export function ChiSiamo() {
  const f = window.wpData?.fields ?? {};

  // ── Team: testi da ACF, icona fissa ───────────────────────────────────────
  const team = [
    { role: f.team1_role ?? 'Ingegneri Civili',     description: f.team1_desc ?? 'Esperti in progettazione strutturale e infrastrutture' },
    { role: f.team2_role ?? 'Architetti',            description: f.team2_desc ?? 'Specialisti in edilizia pubblica e rigenerazione urbana' },
    { role: f.team3_role ?? 'Ingegneri Impiantisti', description: f.team3_desc ?? 'Competenze MEP e sistemi energetici' },
    { role: f.team4_role ?? 'Specialisti BIM/GIS',  description: f.team4_desc ?? 'Professionisti certificati in metodologie digitali' },
    { role: f.team5_role ?? 'Project Manager',       description: f.team5_desc ?? 'Gestione integrata del ciclo di vita dei progetti' },
    { role: f.team6_role ?? 'Esperti Appalti',       description: f.team6_desc ?? 'Conoscenza normativa e supporto amministrativo' },
  ];

  // ── Valori Guida: testi da ACF, icone fisse ────────────────────────────────
  const values = [
    { icon: Award,      title: f.aval1_title ?? 'Competenza Tecnica', description: f.aval1_desc ?? 'Team di ingegneri e architetti con specializzazioni trasversali' },
    { icon: TrendingUp, title: f.aval2_title ?? 'Trasparenza',        description: f.aval2_desc ?? 'Processi tracciabili e reporting puntuale per la PA' },
    { icon: Users,      title: f.aval3_title ?? 'Innovazione',        description: f.aval3_desc ?? 'Metodologie digitali e approccio data-driven' },
    { icon: Database,   title: f.aval4_title ?? 'Sostenibilità',      description: f.aval4_desc ?? 'Soluzioni orientate alla qualità ambientale e sociale' },
  ];

  // ── Campi singoli da ACF ───────────────────────────────────────────────────
  const heroTitle         = f.about_hero_title   ?? 'Chi Siamo';
  const heroSubtitle      = f.about_hero_subtitle ?? 'Il Capitale Umano e Metodologico al servizio della PA';
  const heroBgImage       = f.about_hero_image   ?? null;

  const identityTitle     = f.about_title        ?? 'Identità Professionale';
  const identityText      = f.about_text         ?? null; // wysiwyg
  const identityImage     = f.about_image        ?? null;

  const teamSectionTitle  = f.team_section_title   ?? 'Il Team Multidisciplinare';
  const teamSectionSub    = f.team_section_subtitle ?? 'Competenze trasversali per progetti complessi';

  const valuesSectionTitle= f.about_values_title   ?? 'I Valori Guida';
  const valuesSectionSub  = f.about_values_subtitle ?? 'Principi che guidano ogni nostro progetto';

  const ddTitle           = f.about_dd_title      ?? 'Approccio Data-Driven';
  const ddText            = f.about_dd_text       ?? null; // wysiwyg

  return (
    <div className="w-full">
      <Helmet>
        <title>{f.seo_title ?? 'Chi Siamo | TECNORA'}</title>
        <meta name="description" content={f.seo_description ?? 'Il team multidisciplinare di TECNORA: ingegneri civili, architetti, specialisti BIM/GIS al servizio della PA.'} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src={heroBgImage?.url ?? 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80'}
            alt={heroBgImage?.alt ?? 'Team professionisti'}
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
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              {heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Identità Professionale */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">
                {identityTitle}
              </h2>
              {identityText ? (
                <div
                  className="text-lg text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: identityText }}
                />
              ) : (
                <>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    TECNORA nasce dall'incontro tra <strong>competenze ingegneristiche
                    d'eccellenza</strong> e una <strong>conoscenza approfondita dei contratti pubblici</strong>.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Il nostro team multidisciplinare trasforma la complessità amministrativa
                    in soluzioni operative tracciabili, garantendo qualità, sicurezza e
                    sostenibilità in ogni fase del progetto.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Operiamo con un approccio <strong>data-driven</strong>, dove ogni decisione
                    è supportata da analisi tecniche puntuali e metodologie certificate.
                  </p>
                </>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src={identityImage?.url ?? 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'}
                alt={identityImage?.alt ?? 'Identità professionale team Tecnora'}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Multidisciplinare */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {teamSectionTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {teamSectionSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {member.role}
                </h3>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* I Valori Guida */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {valuesSectionTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {valuesSectionSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center group hover:bg-accent/20 transition-colors">
                  <value.icon className="w-12 h-12 text-accent" aria-hidden="true" />
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

      {/* Approccio Data-Driven */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Database className="w-16 h-16 text-secondary mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {ddTitle}
            </h2>
            {ddText ? (
              <div
                className="text-xl text-gray-200 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: ddText }}
              />
            ) : (
              <p className="text-xl text-gray-200 leading-relaxed">
                Trasformiamo la complessità amministrativa in soluzioni operative
                tracciabili attraverso <strong className="text-secondary">metodologie certificate</strong>,
                sistemi di monitoraggio in tempo reale e dashboard KPI che supportano
                decisioni informate e trasparenti per la Pubblica Amministrazione.
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
