import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export function GenericPage() {
  const wpData = window.wpData || {};
  const pageTitle = wpData.pageTitle || 'Pagina non trovata';
  const content = wpData.content || '';

  return (
    <div className="w-full">
      <Helmet>
        <title>{pageTitle ? `${pageTitle} | TECNORA` : 'TECNORA'}</title>
      </Helmet>

      {/* Header Spacing come nelle altre pagine */}
      <section className="bg-primary text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {pageTitle}
          </motion.h1>
        </div>
      </section>

      {/* Contenuto Testuale */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700">
            {content ? (
                <div 
                    className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-primary [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-4 [&>li]:mb-2 [&>strong]:text-gray-900" 
                    dangerouslySetInnerHTML={{ __html: content }} 
                />
            ) : (
                <div className="text-center text-lg">
                    La pagina richiesta non ha contenuto o non esiste.
                </div>
            )}
        </div>
      </section>
    </div>
  );
}
