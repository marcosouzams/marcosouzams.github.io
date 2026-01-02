'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-full hover:bg-opacity-10 transition-all duration-300"
        >
          <Globe size={18} className="text-primary" />
          <span className="text-white text-sm font-medium">{currentLanguage.flag}</span>
        </button>

        {isOpen && (
          <>
            <div 
              className="fixed inset-0" 
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute right-0 mt-2 w-48 bg-dark border border-white border-opacity-10 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 ${
                    i18n.language === language.code
                      ? 'bg-primary bg-opacity-20 text-white'
                      : 'text-gray-400 hover:bg-white hover:bg-opacity-5 hover:text-white'
                  }`}
                >
                  <span className="text-xl">{language.flag}</span>
                  <span className="text-sm font-medium">{language.name}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
