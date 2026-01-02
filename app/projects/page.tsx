'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Rocket } from 'lucide-react';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 lowercase">
          {t('projects.title') || 'Projetos'}
        </h1>
        
        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl border border-white border-opacity-10 p-12 text-center">
          <Rocket size={48} className="text-primary mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('projects.comingSoon') || 'Em breve'}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('projects.description') || 'Estou preparando algo incrível para mostrar aqui. Fique ligado!'}
          </p>
        </div>
      </section>
    </div>
  );
}
