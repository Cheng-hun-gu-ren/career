import React from 'react';
import { Building2, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      id: 1,
      company: '深圳数字经济研究院',
      department: '可持续金融研究中心',
      position: '实习生',
      period: '2025年至今',
      location: '深圳',
      status: 'current',
      responsibilities: [
        '为B端客户开发软件，优化数据获取和处理工作流',
        'to B小软件开发，费率更新系统搭建',
        '报告分析与撰写',
        '带领三名实习生协助开发项目'
      ],
      achievements: [
        '独立开发理财产品查询工具，成功率98.8%',
        '构建银行理财子费率自动更新系统',
        '开发ESG银行报告智能爬虫系统'
      ],
      image: '/images/深圳数字经济研究院.png'
    },
    {
      id: 2,
      company: '天弘基金管理有限公司',
      department: '机构中台',
      position: '实习生',
      period: '2024.07 - 2025.01',
      location: '深圳',
      status: 'completed',
      responsibilities: [
        '对接银行机构客户，制作投资相关报表和分析',
        '制作公募基金市场月报，进行债基产品竞品分析',
        '构建债基久期分析模型，利用机器学习技术进行收益率拆解'
      ],
      achievements: [
        '了解公募基金机构业务线',
        '熟悉债券基金投资逻辑及合规要求',
        '掌握金融数据分析和报告制作技能'
      ],
      image: '/images/天弘基金管理有限公司实习.png'
    },
    {
      id: 3,
      company: '幂加和私募基金管理有限责任公司',
      department: '研究部',
      position: '助理研究员',
      period: '2024.01 - 2024.03',
      location: '深圳',
      status: 'completed',
      responsibilities: [
        '监测外媒财经新闻（彭博、路透社、华尔街日报等）',
        '整理市场信息辅助投资决策',
        '协助研究团队进行市场分析'
      ],
      achievements: [
        '提高英文读写能力',
        '提升信息检索和整理能力',
        '了解私募基金投资研究流程'
      ],
      image: '/images/幂加和私募.png'
    },
    {
      id: 4,
      company: '广发期货有限公司深圳分公司',
      department: '业务部',
      position: '金融实习生',
      period: '2023.07 - 2023.08',
      location: '深圳',
      status: 'completed',
      responsibilities: [
        '协助私募尽调、报告整理等工作',
        '学习期货市场基础知识',
        '参与客户服务和业务支持'
      ],
      achievements: [
        '了解中国期货市场及相关交易制度',
        '掌握金融机构基础业务流程',
        '建立期货行业认知基础'
      ],
      image: '/images/广发期货深圳分公司实习.png'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'current': return '在职';
      case 'completed': return '已完成';
      default: return '未知';
    }
  };

  return (
    <section id="internships" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            实习经历
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            在多家知名金融机构的实习经历，积累了丰富的行业经验和专业技能
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
                        主要职责
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
                        收获成果
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

        {/* Internship Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            实习经历总结
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">18个月</div>
              <div className="text-sm text-gray-600">累计实习时长</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">4个</div>
              <div className="text-sm text-gray-600">覆盖金融领域</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3名</div>
              <div className="text-sm text-gray-600">AI团队管理</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">雇主好评率</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;