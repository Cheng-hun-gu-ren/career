import React, { useState } from 'react';
import { Brain, Lightbulb, Clock, Star, MessageCircle, Users } from 'lucide-react';
import { aiTools, aiPhilosophy, aiJourney } from '../data/ai-content';

const AISection = () => {
  const [activeTab, setActiveTab] = useState('tools');

  const tabs = [
    { id: 'tools', label: 'AI工具箱', icon: Brain },
    { id: 'philosophy', label: 'AI理念', icon: Lightbulb },
    { id: 'journey', label: 'AI历程', icon: Clock }
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

  return (
    <section id="ai" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            我与AI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            从2024年3月开始深度使用AI工具，探索AI时代的工作方式和技术理念
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
                      <span className="text-sm font-medium text-gray-700">熟练度</span>
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
                    <p className="text-sm font-medium text-gray-700 mb-2">主要用途</p>
                    <p className="text-sm text-gray-600">{tool.usage}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">核心功能</p>
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
            </div>

            {/* AI Usage Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                AI使用统计
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10个月</div>
                  <div className="text-sm text-gray-600">深度使用时长</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">常用AI工具</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">AI辅助项目</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">80%</div>
                  <div className="text-sm text-gray-600">工作流AI化</div>
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
              <h3 className="text-2xl font-bold mb-4">核心理念</h3>
              <p className="text-lg mb-6 leading-relaxed max-w-3xl mx-auto">
                "AI时代最重要的能力是<strong>输出力</strong>——将想法转化为作品的能力。
                技术不再是门槛，创意和执行力才是核心竞争力。"
              </p>
              <div className="flex justify-center items-center gap-2">
                <Star className="text-yellow-300" size={24} />
                <span className="font-semibold">怕什么真理无穷，进一步有一步的惊喜</span>
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
                          <strong>影响：</strong>{item.impact}
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
                未来展望
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain size={32} className="text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI咨询服务</h4>
                  <p className="text-sm text-gray-600">为企业和个人提供AI应用咨询和培训</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI工具开发</h4>
                  <p className="text-sm text-gray-600">开发更多实用的AI辅助工具和系统</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">知识分享</h4>
                  <p className="text-sm text-gray-600">通过公众号和技术社区分享AI应用经验</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section - 只保留两个按钮 */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              AI合作与咨询
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              基于深度的AI应用经验，为您提供专业的AI技术咨询和解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                预约AI咨询
              </button>
              <button
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Users size={20} />
                查看AI项目案例
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;