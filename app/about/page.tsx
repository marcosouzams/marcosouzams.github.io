'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Rocket, Code2, Palette, Layers, Users } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const technologies = [
    'JavaScript',
    'TypeScript',
    'Python',
    'Node.js',
    'Next.js',
    'Django',
    'React',
    'Express',
    'Laravel',
    'PHP',
    'Tailwind CSS',
    'HTMX',
    'Alpine.js',
    'MySQL',
    'Docker',
  ];

  const softSkills = [
    'timeManagement',
    'collaboration',
    'adaptability',
    'problemSolving',
    'empathy',
    'autonomy',
    'communication',
  ];

  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      {/* Greeting Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 lowercase">
          {t('aboutPage.greeting')}
        </h1>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
          <p className="animate-fade-in">
            {t('aboutPage.intro')}
          </p>
          
          <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {t('aboutPage.tech')}
          </p>
          
          <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('aboutPage.design')}
          </p>

          <p className="animate-fade-in text-white font-medium" style={{ animationDelay: '0.3s' }}>
            {t('aboutPage.designEnthusiast')}
          </p>
          
          <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {t('aboutPage.project')}
          </p>
          
          <p className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {t('aboutPage.approach')}
          </p>
        </div>
      </section>

      {/* Skills Grid - Hard Skills & Soft Skills */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Hard Skills */}
          <div className="bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-3xl border border-white border-opacity-10">
            <div className="flex items-center gap-3 mb-6">
              <Code2 size={24} className="text-primary" strokeWidth={1.5} />
              <h2 className="text-2xl font-bold text-white">
                {t('aboutPage.hardSkillsTitle')}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white bg-opacity-5 text-white text-sm rounded-full border border-white border-opacity-10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-3xl border border-white border-opacity-10">
            <div className="flex items-center gap-3 mb-6">
              <Users size={24} className="text-primary" strokeWidth={1.5} />
              <h2 className="text-2xl font-bold text-white">
                {t('aboutPage.softSkillsTitle')}
              </h2>
            </div>
            <div className="space-y-3">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="text-gray-400 text-sm"
                >
                  {t(`aboutPage.softSkills.${skill}`)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Areas - Full Width */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="bg-primary p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Layers size={24} className="text-white" strokeWidth={1.5} />
            <h2 className="text-2xl font-bold text-white">
              {t('aboutPage.workTitle')}
            </h2>
          </div>
          <p className="text-white text-sm font-medium leading-relaxed">
            {t('aboutPage.workAreas')}
          </p>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl border border-white border-opacity-10 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Rocket size={28} className="text-neon" strokeWidth={1.5} />
              <h2 className="text-3xl font-bold text-white">
                {t('aboutPage.hobbiesTitle')}
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                {t('aboutPage.hobbiesText')}{' '}
                <span className="text-neon font-bold lowercase">
                  {t('aboutPage.collectiveName')}
                </span>
                {t('aboutPage.hobbiesDescription')}
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Palette size={20} className="text-primary" strokeWidth={1.5} />
                <span className="text-gray-500 text-sm">Creative Direction</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers size={20} className="text-primary" strokeWidth={1.5} />
                <span className="text-gray-500 text-sm">Cultural Production</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
