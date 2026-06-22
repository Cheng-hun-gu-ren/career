import React from 'react';
import { useLanguage, translations } from '../i18n';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-paper relative">
      <div className="absolute inset-x-0 top-0 h-px bg-amber-brand" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">{t.footer.brand}</h3>
            <p className="text-paper/70 leading-relaxed">
              {t.footer.tagline}
            </p>
            <p className="text-paper/60 mt-2 text-sm">
              {t.footer.motto}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-paper/70 hover:text-paper transition-colors duration-200"
                >
                  {t.nav.projects}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-paper/70 hover:text-paper transition-colors duration-200"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contactInfo}</h4>
            <div className="space-y-2 text-paper/70">
              <p>{t.footer.email}</p>
              <p>{t.footer.location}</p>
              <p>{t.footer.organization}</p>
              <div className="mt-4">
                <a
                  href="https://life.chenggao.top"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-brand hover:text-paper transition-colors duration-200"
                >
                  {t.footer.personalSite}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-paper/15 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-paper/60 text-sm">
              {t.footer.copyright.replace('{{year}}', currentYear.toString())}
            </span>

            <div className="text-paper/60 text-sm flex flex-col md:items-end">
              <p>{t.footer.motto2}</p>
              <p className="mt-1">
                <a
                  href="https://beian.miit.gov.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-paper transition-colors duration-200"
                >
                  {t.footer.icp}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;