import React from 'react';
import { Briefcase, ChevronDown, MapPin, Calendar } from 'lucide-react';
import { ossAsset } from '../data/oss';
import { useLanguage, translations } from '../i18n';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const scrollToNext = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-28">
      <div className="absolute inset-0 grid-finance opacity-60" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto rounded-full border-[3px] border-amber-brand/60 overflow-hidden shadow-editorial bg-paper-elevated">
            <img
              src={ossAsset('/images/头像.png')}
              alt="Gary Chen 的头像"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="section-label mb-4 animate-fade-in">Portfolio</p>

        <h1 className="font-display text-4xl md:text-6xl font-semibold text-ink-deep mb-4 animate-fade-in">
          {t.hero.name}
          <span className="block text-xl md:text-2xl font-normal mt-3 text-ink-muted font-sans">
            {t.hero.subtitle}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-ink-muted mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          {t.hero.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base">
          <div className="pill-info">
            <Briefcase size={16} className="text-forest" />
            <span>{t.hero.company}</span>
          </div>
          <div className="pill-info">
            <MapPin size={16} className="text-forest" />
            <span>{t.hero.location}</span>
          </div>
          <div className="pill-info">
            <Calendar size={16} className="text-forest" />
            <span>{t.hero.status}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <button onClick={scrollToNext} className="btn-primary">
            {t.hero.learnMore}
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            {t.hero.contact}
          </button>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-px bg-warm-border" />
          <button
            onClick={scrollToNext}
            className="text-ink-soft hover:text-forest transition-colors duration-300 flex flex-col items-center gap-1"
            aria-label="向下滚动"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;