import React, { useState } from 'react';
import { Mail, MapPin, Github, MessageCircle, Calendar, X } from 'lucide-react';
import { ossAsset } from '../data/oss';
import { useLanguage, translations } from '../i18n';

// 自定义X(Twitter)图标组件
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
      label: language === 'zh' ? t.contact.contactItems.email : t.contact.contactItems.email,
      value: '224040166@link.cuhk.edu.cn',
      href: 'mailto:224040166@link.cuhk.edu.cn',
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      label: language === 'zh' ? t.contact.contactItems.location : t.contact.contactItems.location,
      value: language === 'zh' ? t.contact.contactItems.locationValue : t.contact.contactItems.locationValue,
      color: 'text-green-600'
    },
    {
      icon: Calendar,
      label: language === 'zh' ? t.contact.contactItems.available : t.contact.contactItems.available,
      value: language === 'zh' ? t.contact.contactItems.availableValue : t.contact.contactItems.availableValue,
      color: 'text-purple-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Cheng-hun-gu-ren',
      color: 'hover:text-gray-900',
      external: true
    },
    {
      icon: TwitterXIcon,
      label: 'X (Twitter)',
      href: 'https://x.com/Gary_Chen9527',
      color: 'hover:text-gray-900',
      external: true
    },
    {
      icon: MessageCircle,
      label: language === 'zh' ? t.contact.socialWeChat : t.contact.socialWeChat,
      href: '#',
      color: 'hover:text-green-600',
      external: false,
      onClick: () => setShowWechatModal(true)
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.contact.info}
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                      <div className={`w-12 h-12 ${info.color} bg-white rounded-lg flex items-center justify-center shadow-sm`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-gray-600">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
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
                        className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-200 hover:scale-110 hover:shadow-lg`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  } else {
                    return (
                      <button
                        key={index}
                        onClick={social.onClick}
                        className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-200 hover:scale-110 hover:shadow-lg`}
                        aria-label={social.label}
                      >
                        <IconComponent size={20} />
                      </button>
                    );
                  }
                })}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {t.contact.quick}
              </h4>
              <p className="text-gray-600 mb-4 text-sm">
                {t.contact.quickDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:224040166@link.cuhk.edu.cn"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  <Mail size={18} />
                  {t.contact.sendEmail}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t.contact.expectation}
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.contact.expectationText}
            </p>
          </div>
        </div>

        {/* 微信二维码弹窗 */}
        {showWechatModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-auto relative">
              <button
                onClick={() => setShowWechatModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {t.contact.wechat}
                </h3>
                
                <div className="mb-6">
                  <img
                    src={ossAsset('/images/wechat.png')}
                    alt="WeChat QR Code"
                    className="w-64 h-64 mx-auto rounded-lg shadow-lg"
                  />
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  {t.contact.wechatTip}
                </p>
                <p className="text-gray-500 text-xs">
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
