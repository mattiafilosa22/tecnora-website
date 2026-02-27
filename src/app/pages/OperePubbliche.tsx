import { motion } from 'motion/react';
import { Building, Home, Lightbulb, Camera } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function OperePubbliche() {
  const sectors = [
    {
      icon: Building,
      title: 'Costruzioni Civili',
      description: 'Progettazione di edifici pubblici, scuole, ospedali e strutture amministrative',
    },
    {
      icon: Home,
      title: 'Edilizia Pubblica',
      description: 'Riqualificazione urbana, housing sociale e rigenerazione territoriale',
    },
    {
      icon: Lightbulb,
      title: 'Infrastrutture',
      description: 'Opere viarie, ponti, reti idriche e mobilità sostenibile',
    },
    {
      icon: Camera,
      title: 'Impiantistica Complessa',
      description: 'Sistemi MEP, efficienza energetica e smart building',
    },
  ];

  const timeline = [
    {
      phase: 'Preliminary Design',
      title: 'Progettazione di Fattibilità',
      description: 'Analisi preliminari, studi di fattibilità tecnico-economica e concept design',
    },
    {
      phase: 'Definitive Design',
      title: 'Progettazione Definitiva',
      description: 'Elaborati tecnici completi, computi metrici e analisi costi-benefici',
    },
    {
      phase: 'Executive Design',
      title: 'Progettazione Esecutiva',
      description: 'Dettagli costruttivi, piani di sicurezza e specifiche tecniche per l\'appalto',
    },
    {
      phase: 'Construction Management',
      title: 'Direzione Lavori',
      description: 'Coordinamento cantiere, supervisione tecnica e controllo qualità',
    },
    {
      phase: 'Testing & Commissioning',
      title: 'Collaudo',
      description: 'Verifica conformità, testing funzionale e rilascio certificazioni',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt="Public works"
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
              Opere e Lavori Pubblici
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Progettazione integrata e direzione lavori per infrastrutture pubbliche
            </p>
          </motion.div>
        </div>
      </section>

      {/* Settori di Intervento */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Settori di Intervento
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Competenze trasversali per ogni tipologia di opera pubblica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <sector.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {sector.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {sector.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline del Ciclo di Vita */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Ciclo di Vita del Progetto
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dalla progettazione al collaudo: accompagniamo ogni fase
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-start gap-6">
                  {/* Timeline indicator */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-20 bg-gray-300 mt-4" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
                    <div className="text-sm font-semibold text-secondary mb-2">
                      {item.phase}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologia in Cantiere */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tecnologia in Cantiere
              </h2>
              <div className="space-y-4 text-lg text-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-white">Monitoraggio in tempo reale</strong> con 
                    IoT sensors e dashboard centralizzate
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-white">4D Scheduling</strong> con 
                    integrazione BIM per ottimizzazione tempi e risorse
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-white">Quality Control</strong> automatizzato 
                    con tracciabilità digitale di ogni fase
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-white">Safety Management</strong> con 
                    sistemi predittivi e reporting D.Lgs. 81/2008
                  </p>
                </div>
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
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                alt="Construction technology"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}