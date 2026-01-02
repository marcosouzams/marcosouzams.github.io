'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, Mail } from 'lucide-react';

const FooterBar: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { id: '/', icon: Home, label: 'Home' },
    { id: '/about', icon: User, label: 'Sobre' },
    { id: '/projects', icon: Briefcase, label: 'Projetos' },
    { id: '/contact', icon: Mail, label: 'Contato' },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-6">
      <nav className="max-w-sm mx-auto bg-white rounded-full shadow-lg">
        <ul className="flex justify-around items-center h-16 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.id;
            
            return (
              <li key={item.id}>
                <Link
                  href={item.id}
                  className={`flex flex-col items-center justify-center p-2 transition-all duration-300 ${
                    isActive 
                      ? 'text-primary scale-105' 
                      : 'text-dark hover:text-primary hover:scale-105'
                  }`}
                  aria-label={item.label}
                >
                  <Icon 
                    size={24} 
                    strokeWidth={isActive ? 1.5 : 1}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};

export default FooterBar;
