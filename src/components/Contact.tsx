import React from 'react';
import { Mail, MapPin, Calendar } from 'lucide-react';
import { useLanguage, translations } from '../i18n';
import SectionHeading from './ui/SectionHeading';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.contactItems.email,
      value: 'chenggao@cuhk.edu.cn',
      href: 'mailto:chenggao@cuhk.edu.cn',
    },
    {
      icon: MapPin,
      label: t.contact.contactItems.location,
      value: t.contact.contactItems.locationValue,
    },
    {
      icon: Calendar,
      label: t.contact.contactItems.available,
      value: t.contact.contactItems.availableValue,
    }
  ];

  return (
    <section id="contact" className="py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={language === 'zh' ? '联络' : 'Contact'}
          title={t.contact.title}
          description={t.contact.subtitle}
        />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink-deep mb-6">
                {t.contact.info}
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 card-editorial hover:bg-white">
                      <div className="w-12 h-12 text-forest bg-paper rounded-lg flex items-center justify-center border border-warm-border">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-ink-deep">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-ink-muted hover:text-forest transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-ink-muted">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-forest/5 to-amber-brand/5 border border-warm-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-ink-deep mb-3">
                {t.contact.quick}
              </h4>
              <p className="text-ink-muted mb-4 text-sm">
                {t.contact.quickDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:chenggao@cuhk.edu.cn"
                  className="inline-flex items-center gap-2 btn-primary px-6 py-3"
                >
                  <Mail size={18} />
                  {t.contact.sendEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-paper-elevated border border-warm-border rounded-xl p-8">
          <div className="text-center">
            <h3 className="font-display text-xl font-semibold text-ink-deep mb-4">
              {t.contact.expectation}
            </h3>
            <p className="text-ink-muted max-w-3xl mx-auto leading-relaxed">
              {t.contact.expectationText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
