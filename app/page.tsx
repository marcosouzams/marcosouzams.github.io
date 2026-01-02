'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code2, Palette, Layers, Rocket } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const { t } = useTranslation();
  const skills = [
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

  const roles = [
    { icon: Code2, label: t('roles.fullstack'), delay: '0s' },
    { icon: Layers, label: t('roles.architecture'), delay: '0.1s' },
    { icon: Palette, label: t('roles.design'), delay: '0.2s' },
    { icon: Rocket, label: t('roles.innovation'), delay: '0.3s' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="animate-fade-in">
            {/* Small intro */}
            <p className="text-primary text-sm mb-4 tracking-wider">
              {t('hero.tag')}
            </p>
            
            {/* Main title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-3 leading-tight lowercase">
              {t('hero.name')}<span className="text-primary">.</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-8 leading-relaxed">
              {t('hero.subtitle')}{' '}
              <span className="text-white">{t('hero.subtitleHighlight')}</span>
            </p>

            {/* Experience indicator */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-primary w-24"></div>
              <span className="text-gray-500 text-sm">{t('hero.experience')}</span>
            </div>

            {/* Role Cards */}
            <div className="grid grid-cols-2 gap-3 animate-slide-up">
              {roles.map((role, index) => {
                const Icon = role.icon;
                return (
                  <div
                    key={index}
                    style={{ animationDelay: role.delay }}
                    className="bg-white bg-opacity-5 backdrop-blur-sm p-4 rounded-2xl border border-white border-opacity-10 hover:border-primary hover:border-opacity-50 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <Icon 
                      size={20} 
                      strokeWidth={1} 
                      className="text-primary mb-2" 
                    />
                    <p className="text-white text-xs font-medium">{role.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Image Card */}
          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-sm">
              {/* Image */}
              <div className="p-6">
                <div className="aspect-square overflow-hidden rounded-2xl relative">
                  <Image 
                    src="/images/profile_2.png" 
                    alt="marco dev." 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Info Section */}
              <div className="px-6 pb-6 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-500 text-sm">{t('hero.cardLocation')}</span>
                  <span className="text-dark text-sm font-medium">{t('hero.cardLocationValue')}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-500 text-sm">{t('hero.cardExperience')}</span>
                  <span className="text-dark text-sm font-medium">
                    {t('hero.cardExperienceValue')}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{t('hero.cardFocus')}</span>
                  <span className="text-dark text-sm font-medium">{t('hero.cardFocusValue')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              {t('about.title')}<span className="text-primary">.</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                {t('about.p1')}{' '}
                <span className="text-white">{t('about.p1Highlight')}</span>
                {t('about.p1End')}
              </p>
              <p>
                {t('about.p2')} <span className="text-white">{t('about.p2Highlight')}</span>
                {t('about.p2End')}
              </p>
              <p>
                {t('about.p3')} <span className="text-white">{t('about.p3Highlight')}</span>
                {t('about.p3End')}
              </p>
            </div>
          </div>

          {/* Right Column - Highlight Box */}
          <div className="bg-primary p-8 rounded-3xl relative overflow-hidden">
            <div className="relative z-10">
              <Rocket size={32} strokeWidth={1.5} className="text-white mb-4" />
              <h3 className="text-white text-xl font-bold mb-3">
                {t('about.highlightTitle')}
              </h3>
              <p className="text-white text-opacity-90 text-sm leading-relaxed">
                {t('about.highlightText')} <span className="font-bold">{t('about.highlightTextBold')}</span> {t('about.highlightTextEnd')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-3xl font-bold text-white mb-8">
          {t('skills.title')}<span className="text-primary">.</span>
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-white bg-opacity-5 backdrop-blur-sm text-white rounded-full border border-white border-opacity-10 hover:border-primary hover:bg-opacity-10 transition-all duration-300 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto">
        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl p-12 border border-white border-opacity-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('cta.title')} <span className="text-primary">{t('cta.titleHighlight')}</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-neon hover:bg-opacity-90 text-dark rounded-full font-medium transition-all duration-300 hover:scale-105">
              {t('cta.projects')}
            </button>
            <button className="px-8 py-4 bg-white bg-opacity-5 hover:bg-opacity-10 text-white rounded-full font-medium border border-white border-opacity-20 transition-all duration-300 hover:scale-105">
              {t('cta.contact')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
