import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';
import { useLanguage, translations } from '../i18n';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.brand}</h3>
            <p className="text-gray-400 leading-relaxed">
              {t.footer.tagline}
            </p>
            <p className="text-gray-400 mt-2 text-sm">
              {t.footer.motto}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {t.nav.projects}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {t.nav.portfolio}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contactInfo}</h4>
            <div className="space-y-2 text-gray-400">
              <p>{t.footer.email}</p>
              <p>{t.footer.location}</p>
              <p>{t.footer.organization}</p>
              <div className="mt-4">
                <a
                  href="https://life.chenggao.top"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  {t.footer.personalSite}
                </a>
              </div>
              <div className="mt-3">
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>{t.footer.copyright.replace('{{year}}', currentYear.toString())}</span>
              <Heart size={16} className="text-red-500" />
              <span>and</span>
              <Code size={16} className="text-blue-500" />
              <span>and</span>
              <Coffee size={16} className="text-yellow-500" />
            </div>
            
            <div className="mt-4 md:mt-0 text-gray-400 text-sm flex flex-col md:items-end">
              <p>{t.footer.motto2}</p>
              <p className="mt-1">
                <a 
                  href="https://beian.miit.gov.cn/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-200"
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
