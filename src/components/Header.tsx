import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../i18n';
import { translations } from '../i18n';

const t = translations;

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lang = language;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#projects', label: t[lang].nav.projects },
    { href: '#contact', label: t[lang].nav.contact },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navButtonClass = isScrolled
    ? 'text-ink-soft hover:text-forest'
    : 'text-ink-soft hover:text-forest';

  return (
    <header
      className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-paper/95 backdrop-blur-sm shadow-sm border-b border-warm-border'
          : 'bg-paper/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="font-display text-xl font-semibold text-ink-deep transition-colors duration-300">
              {t[lang].header.name}
            </h1>
          </div>

          <nav className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-300 ${navButtonClass}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className={`ml-6 pl-6 border-l border-warm-border transition-colors duration-300 flex items-center gap-1 text-sm font-medium ${navButtonClass}`}
              title={lang === 'zh' ? 'Switch to English' : '切换为中文'}
            >
              <Globe size={16} />
              {lang === 'zh' ? 'EN' : '中'}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-md text-ink-soft hover:text-forest hover:bg-paper-elevated transition-colors duration-300"
              title={lang === 'zh' ? 'Switch to English' : '切换为中文'}
            >
              <Globe size={20} />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-ink-soft hover:text-forest hover:bg-paper-elevated transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-paper-elevated border-t border-warm-border shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-ink-soft hover:text-forest hover:bg-paper rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;