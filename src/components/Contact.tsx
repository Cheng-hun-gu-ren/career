import React, { useState } from 'react';
import { Mail, MapPin, Github, MessageCircle, Calendar, X } from 'lucide-react';
import { ossAsset } from '../data/oss';
import { useLanguage, translations } from '../i18n';
import SectionHeading from './ui/SectionHeading';

const TwitterXIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [showWechatModal, setShowWechatModal] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.contactItems.email,
      value: '224040166@link.cuhk.edu.cn',
      href: 'mailto:224040166@link.cuhk.edu.cn',
    },
    {
      icon: MapPin,
      label: t.contact.contactItems.location,
      value: language === 'zh' ? t.contact.contactItems.locationValue : t.contact.contactItems.locationValue,
    },
    {
      icon: Calendar,
      label: t.contact.contactItems.available,
      value: language === 'zh' ? t.contact.contactItems.availableValue : t.contact.contactItems.availableValue,
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Cheng-hun-gu-ren',
      external: true
    },
    {
      icon: TwitterXIcon,
      label: 'X (Twitter)',
      href: 'https://x.com/Gary_Chen9527',
      external: true
    },
    {
      icon: MessageCircle,
      label: t.contact.socialWeChat,
      href: '#',
      external: false,
      onClick: () => setShowWechatModal(true)
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

            <div>
              <h4 className="text-lg font-semibold text-ink-deep mb-4">
                {t.contact.social}
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;

                  if (social.external) {
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 bg-paper-elevated border border-warm-border rounded-lg flex items-center justify-center text-ink-soft hover:text-forest hover:border-forest/40 transition-all duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  }

                  return (
                    <button
                      key={index}
                      onClick={social.onClick}
                      className="w-12 h-12 bg-paper-elevated border border-warm-border rounded-lg flex items-center justify-center text-ink-soft hover:text-forest hover:border-forest/40 transition-all duration-200"
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </button>
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
                  href="mailto:224040166@link.cuhk.edu.cn"
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

        {showWechatModal && (
          <div className="fixed inset-0 bg-ink-deep/50 flex items-center justify-center z-50 p-4">
            <div className="bg-paper rounded-xl p-8 max-w-sm w-full mx-auto relative border border-warm-border shadow-editorial-lg">
              <button
                onClick={() => setShowWechatModal(false)}
                className="absolute top-4 right-4 text-ink-soft hover:text-forest transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <h3 className="font-display text-xl font-semibold text-ink-deep mb-6">
                  {t.contact.wechat}
                </h3>

                <div className="mb-6">
                  <img
                    src={ossAsset('/images/wechat.png')}
                    alt="WeChat QR Code"
                    className="w-64 h-64 mx-auto rounded-lg border border-warm-border"
                  />
                </div>

                <p className="text-ink-muted text-sm mb-4">
                  {t.contact.wechatTip}
                </p>
                <p className="text-ink-soft text-xs">
                  {t.contact.wechatNote}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;