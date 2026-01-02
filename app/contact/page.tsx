'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Clock, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Abre o cliente de email com os dados do formulário
    const subject = encodeURIComponent(`Contato de ${formData.name}`);
    const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`);
    window.location.href = `mailto:marcoantoniosz@outlook.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      {/* Greeting Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 lowercase">
          {t('contactPage.greeting')}
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          {t('contactPage.intro')}
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                {t('contactPage.email')}
              </h2>
              <a
                href="mailto:marcoantoniosz@outlook.com"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors duration-300 group"
              >
                <Mail size={20} className="text-primary" strokeWidth={1.5} />
                <span className="text-sm">{t('contactPage.emailValue')}</span>
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                {t('contactPage.phone')}
              </h2>
              <a
                href="tel:+5538998761660"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors duration-300 group"
              >
                <Phone size={20} className="text-primary" strokeWidth={1.5} />
                <span className="text-sm">{t('contactPage.phoneValue')}</span>
              </a>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                {t('contactPage.social')}
              </h2>
              <div className="space-y-4">
                <a
                  href="https://github.com/marcoantoniosz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <Github size={20} className="text-primary" strokeWidth={1.5} />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/marcoantoniosz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <Linkedin size={20} className="text-primary" strokeWidth={1.5} />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-8 space-y-6">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-white font-medium mb-1">{t('contactPage.location')}</h3>
                  <p className="text-gray-400 text-sm">{t('contactPage.locationValue')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={20} className="text-primary mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-white font-medium mb-1">{t('contactPage.response')}</h3>
                  <p className="text-gray-400 text-sm">{t('contactPage.responseText')}</p>
                </div>
              </div>

              <div>
                <h3 className="text-white font-medium mb-1">{t('contactPage.availability')}</h3>
                <p className="text-neon text-sm font-medium mb-1">{t('contactPage.availabilityStatus')}</p>
                <p className="text-gray-400 text-sm">{t('contactPage.availabilityText')}</p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl border border-white border-opacity-10 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              {t('contactPage.sendMessage')}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                  {t('contactPage.formName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:border-opacity-50 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  {t('contactPage.formEmail')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:border-opacity-50 transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  {t('contactPage.formMessage')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:border-opacity-50 transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-neon hover:bg-opacity-90 text-dark rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                {t('contactPage.formSend')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
