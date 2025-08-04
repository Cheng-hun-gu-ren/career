import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: '金融工程硕士',
      school: '香港中文大学（深圳）',
      period: '2024 - 在读',
      location: '深圳',
      description: '专注于AI技术在金融领域的创新应用，量化投资与机器学习研究',
      achievements: ['学业奖学金（覆盖率40%）', '阿里天池算法大赛复赛八强（600支队伍中脱颖而出）'],
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      degree: '国际经济与贸易学士',
      school: '哈尔滨工业大学威海校区',
      period: '2020 - 2024',
      location: '威海',
      description: '985高校本科教育，高考理科632分，全省排名前1-2%',
      achievements: ['二等人民奖学金（覆盖率10%）', 'ALBERT模型在A股市场应用研究（本科毕业设计）'],
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            教育背景
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            从985高校到香港名校，持续追求学术卓越与专业成长
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500 hidden lg:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10 hidden lg:block"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={edu.image}
                        alt={edu.school}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-80`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <GraduationCap size={48} className="text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                        <MapPin size={16} className="ml-2" />
                        <span>{edu.location}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-3">
                        {edu.school}
                      </h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h5 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Award size={16} className="text-yellow-500" />
                          主要成就
                        </h5>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            核心技能与特长
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap size={32} className="text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">工程能力</h4>
              <p className="text-sm text-gray-600">全栈开发、系统架构、AI工程化应用</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-emerald-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">竞赛获奖</h4>
              <p className="text-sm text-gray-600">研究生阶段阿里天池算法大赛复赛八强，多项奖学金</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} className="text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">国际视野</h4>
              <p className="text-sm text-gray-600">中外合办求学经历，雅思6.5分，国际化背景</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;