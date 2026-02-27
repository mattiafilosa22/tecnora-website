import { motion } from 'motion/react';
import { Box, Map, BarChart3, Database, Globe, Activity } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Innovazione() {
  const technologies = [
    {
      icon: Box,
      title: 'BIM Methodology',
      subtitle: 'Building Information Modeling',
      features: [
        'Gestione secondo ISO 19650',
        'Modelli BIM-MEP integrati',
        'BIM-FM per facility management',
        'Clash detection automatizzata',
        'As-built digitali e LOD 400'
      ]
    },
    {
      icon: Map,
      title: 'Sistemi GIS',
      subtitle: 'Geographic Information Systems',
      features: [
        'Digital Twins territoriali',
        'Mappatura dinamica infrastrutture',
        'Analisi spaziali avanzate',
        'Integrazione dati catastali',
        'Monitoraggio verde pubblico'
      ]
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      subtitle: 'Business Intelligence',
      features: [
        'Dashboard KPI real-time',
        'Reporting automatizzato',
        'Predictive maintenance',
        'Analisi costi-benefici',
        'Decision support system'
      ]
    },
  ];

  const benefits = [
    {
      icon: Database,
      title: 'Centralizzazione Dati',
      description: 'Repository unico per gestione documentale e dati tecnici'
    },
    {
      icon: Globe,
      title: 'Interoperabilità',
      description: 'Standard IFC, BCF e formati aperti per condivisione dati'
    },
    {
      icon: Activity,
      title: 'Monitoraggio Live',
      description: 'IoT sensors e telemetria per controllo real-time'
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            alt="Innovation"
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
              Innovazione al servizio dei processi tecnici
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Digitalizzazione e ottimizzazione per le gare e gli appalti pubblici
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Metodologie e Strumenti
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Crediamo nell'innovazione come strumento di miglioramento continuo dei processi tecnici legati alle gare e agli appalti pubblici
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {tech.title}
                </h3>
                <p className="text-sm text-secondary font-semibold mb-6">
                  {tech.subtitle}
                </p>
                <ul className="space-y-3">
                  {tech.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-accent mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BIM Deep Dive */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="BIM technology"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">
                BIM secondo ISO 19650
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Implementiamo la metodologia BIM seguendo gli standard internazionali 
                ISO 19650, garantendo:
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-bold text-primary mb-2">Livelli di Dettaglio (LOD)</h4>
                  <p className="text-gray-600 text-sm">
                    Da LOD 100 concept a LOD 400 as-built, con documentazione completa
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-bold text-primary mb-2">Coordinamento MEP</h4>
                  <p className="text-gray-600 text-sm">
                    Clash detection su impianti meccanici, elettrici e idraulici
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-bold text-primary mb-2">BIM to FM</h4>
                  <p className="text-gray-600 text-sm">
                    Transizione del modello BIM a strumento di facility management
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GIS & Digital Twins */}
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
                Digital Twins Territoriali
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I sistemi GIS integrati con BIM creano <strong>gemelli digitali</strong> del 
                territorio, permettendo:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong>Mappatura dinamica</strong> di reti infrastrutturali (acqua, gas, fognature)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong>Analisi spaziali</strong> per pianificazione urbana e territorial management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong>Monitoraggio verde pubblico</strong> con inventario arboreo geo-referenziato
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>
                    <strong>Integration IoT</strong> con sensori distribuiti sul territorio
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80"
                alt="GIS mapping"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Vantaggi dell'Approccio Digitale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Analytics CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <BarChart3 className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dashboard KPI Real-Time
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Sistemi di <strong className="text-secondary">business intelligence</strong> per 
              monitoraggio continuo, reporting automatizzato e analisi predittive. 
              Trasformiamo i big data in decisioni informate per la Pubblica Amministrazione.
            </p>
            <a
              href="/contatti"
              className="inline-block px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105"
            >
              Scopri le Soluzioni
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}