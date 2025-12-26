import React from 'react';
import { Building2, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { ossAsset } from '../data/oss';
import { useLanguage, translations } from '../i18n';

const Internships = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  // 准备实习数据，根据是否有experiences数据使用翻译或本地硬编码
  const internshipDataSource = t.internships.experiences ? t.internships.experiences : [
    {
      id: 1,
      company: language === 'zh' ? '深圳数字经济研究院' : 'Shenzhen Digital Economy Research Institute',
      department: language === 'zh' ? '可持续金融研究中心' : 'Sustainable Finance Research Center',
      position: language === 'zh' ? '实习生' : 'Intern',
      period: language === 'zh' ? '2025年至今' : 'Present',
      location: language === 'zh' ? '深圳' : 'Shenzhen',
      status: 'current'
    },
    {
      id: 2,
      company: language === 'zh' ? '天弘基金管理有限公司' : 'Tianhong Fund Management Co., Ltd',
      department: language === 'zh' ? '机构中台' : 'Institutional Mid-Office',
      position: language === 'zh' ? '实习生' : 'Intern',
      period: '2024.07 - 2025.01',
      location: language === 'zh' ? '深圳' : 'Shenzhen',
      status: 'completed'
    },
    {
      id: 3,
      company: language === 'zh' ? '幂加和私募基金管理有限责任公司' : 'Mijiahe Private Fund Management Co., Ltd',
      department: language === 'zh' ? '研究部' : 'Research Department',
      position: language === 'zh' ? '助理研究员' : 'Research Assistant',
      period: '2024.01 - 2024.03',
      location: language === 'zh' ? '深圳' : 'Shenzhen',
      status: 'completed'
    },
    {
      id: 4,
      company: language === 'zh' ? '广发期货有限公司深圳分公司' : 'Guangfa Futures Co., Ltd Shenzhen Branch',
      department: language === 'zh' ? '业务部' : 'Business Department',
      position: language === 'zh' ? '金融实习生' : 'Finance Intern',
      period: '2023.07 - 2023.08',
      location: language === 'zh' ? '深圳' : 'Shenzhen',
      status: 'completed'
    }
  ];
  
  const internships = internshipDataSource.map(exp => ({
    ...exp,
    image: exp.id === 1 ? ossAsset('/images/深圳数字经济研究院.png') :
           exp.id === 2 ? ossAsset('/images/天弘基金管理有限公司实习.png') :
           exp.id === 3 ? ossAsset('/images/幂加和私募.png') :
           ossAsset('/images/广发期货深圳分公司实习.png'),
    responsibilities: [
      language === 'zh' ? 
        (exp.id === 1 ? '为B端客户开发软件，优化数据获取和处理工作流' : 
         exp.id === 2 ? '对接银行机构客户，制作投资相关报表和分析' :
         exp.id === 3 ? '监测外媒财经新闻（彭博、路透社、华尔街日报等）' :
         '协助私募尽调、报告整理等工作') :
        (exp.id === 1 ? 'Develop software for B-end clients, optimize data acquisition and processing workflow' :
         exp.id === 2 ? 'Connect with banking institution clients, create investment-related reports and analysis' :
         exp.id === 3 ? 'Monitor foreign financial news (Bloomberg, Reuters, Wall Street Journal, etc.)' :
         'Assist with due diligence for private equity, report organization and other work')
    ],
    achievements: [
      language === 'zh' ?
        (exp.id === 1 ? '独立开发理财产品查询工具，成功率98.8%' :
         exp.id === 2 ? '了解公募基金机构业务线' :
         exp.id === 3 ? '提高英文读写能力' :
         '了解中国期货市场及相关交易制度') :
        (exp.id === 1 ? 'Independently developed financial product inquiry tool with 98.8% success rate' :
         exp.id === 2 ? 'Gained understanding of public fund institutional business lines' :
         exp.id === 3 ? 'Improved English reading and writing skills' :
         'Understood China\'s futures market and related trading systems')
    ]
  }));

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'current': return t.internships.status.current;
      case 'completed': return t.internships.status.completed;
      default: return language === 'zh' ? '未知' : 'Unknown';
    }
  };

  return (
    <section id="internships" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.internships.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.internships.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {internships.map((internship) => (
            <div
              key={internship.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-1/3">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img
                      src={internship.image}
                      alt={internship.company}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(internship.status)}`}>
                        {getStatusText(internship.status)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar size={16} />
                    <span>{internship.period}</span>
                    <MapPin size={16} className="ml-2" />
                    <span>{internship.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {internship.position}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-1">
                    {internship.company}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {internship.department}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Responsibilities */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Building2 size={16} className="text-blue-500" />
                        {t.internships.responsibilities}
                      </h5>
                      <ul className="space-y-2">
                        {internship.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <TrendingUp size={16} className="text-green-500" />
                        {t.internships.achievements}
                      </h5>
                      <ul className="space-y-2">
                        {internship.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Internships;
