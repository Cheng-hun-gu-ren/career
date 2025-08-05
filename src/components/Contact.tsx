import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Calendar, CheckCircle, Award, X } from 'lucide-react';

// 自定义X(Twitter)图标组件
const TwitterXIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showWechatModal, setShowWechatModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // 重置表单
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: '学术邮箱',
      value: '224040166@link.cuhk.edu.cn',
      href: 'mailto:224040166@link.cuhk.edu.cn',
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      label: '现居地',
      value: '深圳市',
      color: 'text-green-600'
    },
    {
      icon: Calendar,
      label: '可约时间',
      value: '工作日 9:00-18:00',
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
      label: '微信',
      href: '#',
      color: 'hover:text-green-600',
      external: false,
      onClick: () => setShowWechatModal(true)
    }
  ];

  const subjectOptions = [
    '工作机会咨询',
    '项目合作',
    '技术交流',
    '学术讨论',
    '其他咨询'
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            联系方式
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            欢迎与我联系，讨论工作机会、项目合作或技术交流
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                联系信息
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
                社交媒体
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
                快速联系
              </h4>
              <p className="text-gray-600 mb-4 text-sm">
                如需紧急联系或预约面谈，请直接发送邮件至学术邮箱，我会在24小时内回复。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:224040166@link.cuhk.edu.cn"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  <Mail size={18} />
                  发送邮件
                </a>
                <button
                  onClick={() => alert('奖项证书页面正在建设中，敬请期待！')}
                  className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  <Award size={18} />
                  奖项证书
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              期待与您的合作
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              作为一名充满热情的金融科技专业人士，我始终保持对新技术的好奇心和学习热情。
              无论是工作机会、项目合作还是技术交流，我都非常乐意与您深入探讨。
              让我们一起在AI时代创造更多可能性！
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
                  扫码添加微信
                </h3>
                
                <div className="mb-6">
                  <img
                    src="/images/wechat.png"
                    alt="微信二维码"
                    className="w-64 h-64 mx-auto rounded-lg shadow-lg"
                  />
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  扫描二维码添加好友
                </p>
                <p className="text-gray-500 text-xs">
                  请备注来意，谢谢！
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