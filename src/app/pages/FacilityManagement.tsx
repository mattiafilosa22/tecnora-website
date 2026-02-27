import { motion } from 'motion/react';
import { Settings, TreePine, Zap, ClipboardList, Play, Cog } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function FacilityManagement() {
  const services = [
    {
      icon: Settings,
      title: 'CMMS - Manutenzione Programmata',
      description: 'Computerized Maintenance Management System per gestione preventiva e predittiva',
    },
    {
      icon: TreePine,
      title: 'Gestione Verde GIS-Based',
      description: 'Mappatura digitale e pianificazione interventi su patrimonio arboreo e aree verdi',
    },
    {
      icon: Zap,
      title: 'Servizi Energetici',
      description: 'Audit energetici, EPC e ottimizzazione consumi secondo D.Lgs. 102/2014',
    },
  ];

  const appaltoSteps = [
    {
      icon: ClipboardList,
      number: '01',
      title: 'Fase di Affidamento',
      items: [
        'Redazione capitolati tecnici',
        'Stima economica e analisi costi',
        'Supporto commissione di gara',
        'Valutazione offerte tecniche'
      ]
    },
    {
      icon: Play,
      number: '02',
      title: 'Fase Esecutiva',
      items: [
        'Direzione esecuzione contratto',
        'Validazione SAL e contabilità',
        'Controllo qualità prestazioni',
        'Gestione varianti e riserve'
      ]
    },
    {
      icon: Cog,
      number: '03',
      title: 'Gestione e Manutenzione',
      items: [
        'Monitoraggio KPI in real-time',
        'Piani di manutenzione pluriennali',
        'Asset management integrato',
        'Reporting compliance normativa'
      ]
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80"
            alt="Facility management"
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
              Facility Management e supporto tecnico-operativo
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Pianificazione, organizzazione e controllo delle attività di facility management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gestione Asset */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Gestione Intelligente degli Asset
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Offriamo servizi di supporto tecnico per la gestione e manutenzione di edifici, impianti e infrastrutture, con particolare attenzione agli appalti pubblici
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border-2 border-secondary/20 rounded-xl p-6"
              >
                <h4 className="text-xl font-bold text-primary mb-4">
                  CMMS Avanzato
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Manutenzione preventiva e predittiva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Work order digitali e tracking attività</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Inventory management ricambi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Analisi costi e ottimizzazione budget</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border-2 border-secondary/20 rounded-xl p-6"
              >
                <h4 className="text-xl font-bold text-primary mb-4">
                  Energy Performance
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Diagnosi energetica D.Lgs. 102/2014</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Energy Performance Contract (EPC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Sistemi di monitoraggio IoT</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Reporting carbon footprint</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporto all'Appalto */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Supporto all'Appalto
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Assistenza tecnica in ogni fase del processo di affidamento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {appaltoSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-6 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    {step.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-3">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-secondary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ottimizza la Gestione del Tuo Patrimonio
              </h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Sistemi integrati di facility management per ridurre i costi operativi, 
                migliorare l'efficienza energetica e garantire la compliance normativa 
                della tua struttura pubblica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contatti"
                  className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all text-center"
                >
                  Richiedi Consulenza
                </a>
                <a
                  href="/innovazione"
                  className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all text-center"
                >
                  Scopri le Tecnologie
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Asset management"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
