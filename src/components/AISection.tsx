import React, { useState, useRef } from 'react';
import { Brain, Lightbulb, Clock, Star, MessageCircle, Users, Sparkles } from 'lucide-react';
import { aiTools, aiPhilosophy, aiJourney } from '../data/ai-content';
import { useLanguage, translations } from '../i18n';

const AISection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeTab, setActiveTab] = useState('tools');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const tabs = [
    { id: 'tools', label: t.ai.tabs.tools, icon: Brain },
    { id: 'philosophy', label: t.ai.tabs.philosophy, icon: Lightbulb },
    { id: 'journey', label: t.ai.tabs.journey, icon: Clock }
  ];

  const getIconForPhilosophy = (iconStr: string) => {
    switch (iconStr) {
      case '💻': return '💻';
      case '👥': return '👥';
      case '⚡': return '⚡';
      case '📈': return '📈';
      default: return '💡';
    }
  };

  // 处理滚动条拖拽
  const handleScrollbarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const container = scrollContainerRef.current;
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const scrollLeft = (value / 100) * maxScroll;
      container.scrollLeft = scrollLeft;
      setScrollPosition(value);
    }
  };

  // 更新滚动位置
  const updateScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const scrollPercent = maxScroll > 0 ? (container.scrollLeft / maxScroll) * 100 : 0;
      setScrollPosition(scrollPercent);
    }
  };

  return (
    <section id="ai" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.ai.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.ai.subtitle}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <div className="flex gap-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent size={18} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* AI Tools */}
        {activeTab === 'tools' && (
          <div className="space-y-8">
            {/* 横向滑动的AI工具卡片 */}
            <div className="relative">
              <div 
                ref={scrollContainerRef}
                className="overflow-x-auto scrollbar-hide"
                onScroll={updateScrollPosition}
              >
                <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                  {aiTools.map((tool, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 w-80"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{tool.icon}</span>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{tool.name}</h3>
                          <p className="text-sm text-blue-600">{tool.category}</p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {tool.description}
                      </p>

                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">{t.ai.tools.proficiency}</span>
                          <span className="text-sm font-bold text-blue-600">{tool.proficiency}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${tool.proficiency}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">{t.ai.tools.usage}</p>
                        <p className="text-sm text-gray-600">{tool.usage}</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">{t.ai.tools.features}</p>
                        <div className="flex flex-wrap gap-1">
                          {tool.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* 省略号卡片 */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 w-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl text-gray-300 mb-4">⋯</div>
                      <h3 className="text-lg font-bold text-gray-600 mb-2">{t.ai.tools.moreTools}</h3>
                      <p className="text-sm text-gray-500">{t.ai.tools.exploring}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 滚动提示 */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-indigo-50 to-transparent pointer-events-none"></div>

              {/* 自定义滚动条 */}
              <div className="mt-4 px-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={scrollPosition}
                  onChange={handleScrollbarChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${scrollPosition}%, #e5e7eb ${scrollPosition}%, #e5e7eb 100%)`
                  }}
                />
              </div>
            </div>

            {/* AI Usage Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {language === 'zh' ? 'AI使用统计' : 'AI Usage Stats'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10{language === 'zh' ? '个月' : ' months'}</div>
                  <div className="text-sm text-gray-600">{t.ai.tools.stats.duration}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">{t.ai.tools.stats.count}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">{t.ai.tools.stats.projects}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">80%</div>
                  <div className="text-sm text-gray-600">{t.ai.tools.stats.workflow}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AI Philosophy */}
        {activeTab === 'philosophy' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiPhilosophy.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{getIconForPhilosophy(item.icon)}</span>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Core Belief */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">{t.ai.philosophy.core}</h3>
              <p className="text-lg mb-6 leading-relaxed max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: t.ai.philosophy.coreText }}></p>
              <div className="flex justify-center items-center gap-2">
                <Star className="text-yellow-300" size={24} />
                <span className="font-semibold">{t.ai.philosophy.motto}</span>
                <Star className="text-yellow-300" size={24} />
              </div>
            </div>
          </div>
        )}

        {/* AI Journey */}
        {activeTab === 'journey' && (
          <div className="space-y-8">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

              <div className="space-y-8">
                {aiJourney.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Timeline Dot */}
                    <div className="w-16 h-16 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-sm font-bold text-blue-600">{item.period}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.milestone}
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="text-sm text-blue-800 font-medium">
                          <strong>{language === 'zh' ? '影响：' : 'Impact: '}</strong>{item.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Vision */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {t.ai.journey.futureVision}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain size={32} className="text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{language === 'zh' ? 'AI咨询服务' : 'AI Consulting'}</h4>
                  <p className="text-sm text-gray-600">{language === 'zh' ? '为企业和个人提供AI应用咨询和培训' : 'Provide AI application consulting and training for businesses and individuals'}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{language === 'zh' ? 'AI工具开发' : 'AI Tool Development'}</h4>
                  <p className="text-sm text-gray-600">{language === 'zh' ? '开发更多实用的AI辅助工具和系统' : 'Develop more practical AI-assisted tools and systems'}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{language === 'zh' ? '知识分享' : 'Knowledge Sharing'}</h4>
                  <p className="text-sm text-gray-600">{language === 'zh' ? '通过公众号和技术社区分享AI应用经验' : 'Share AI application experience through public accounts and tech communities'}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section - AI合作与咨询 */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'zh' ? 'AI合作与咨询' : 'AI Collaboration & Consulting'}
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {language === 'zh' ? '基于深度的AI应用经验，为您提供专业的AI技术咨询和解决方案' : 'Based on extensive AI application experience, provide professional AI technology consulting and solutions'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://starriver.chenggao.top', '_blank')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Sparkles size={20} />
                {t.ai.cta.tools}
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                {t.ai.cta.consult}
              </button>
              <button
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Users size={20} />
                {t.ai.cta.cases}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;