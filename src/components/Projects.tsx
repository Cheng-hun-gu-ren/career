import React, { useState } from 'react';
import { Calendar, Users, TrendingUp } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: '全部项目' },
    { id: 'ai', label: 'AI应用' },
    { id: 'fintech', label: '金融科技' },
    { id: 'web', label: 'Web开发' },
    { id: 'research', label: '学术研究' }
  ];

  const projects = [
    {
      id: 1,
      title: '银行理财子费率自动更新系统',
      category: 'fintech',
      description: '六大核心模块的企业级系统，将费率更新滞后时间从7-10天缩短至24小时内，效率提升90%',
      image: '/images/银行理财子费率自动更新系统.png',
      technologies: ['Python', 'MongoDB', 'MySQL', 'DeepSeek API'],
      achievements: [
        '效率提升90%，24小时内完成费率更新',
        '支持全市场银行理财产品分析',
        '模块化设计，支持插件式扩展'
      ],
      period: '2024.10 - 至今',
      team: '独立开发',
      company: '深圳数字经济研究院',
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'ESG银行报告智能爬虫系统',
      category: 'ai',
      description: 'AI驱动的智能化报告采集系统，成功率从15%提升至65%+，支持119+银行、300+报告入口',
      image: '/images/理财产品查询工具.png',
      technologies: ['Python', 'AI爬虫', 'DeepSeek API', 'Selenium'],
      achievements: [
        '成功率提升333%（15% → 65%+）',
        '支持119+银行批量采集',
        'HTML智能预处理，压缩率85%+'
      ],
      period: '2024.08 - 2024.12',
      team: '团队领导（3名实习生）',
      company: '深圳数字经济研究院',
      status: 'completed'
    },
    {
      id: 3,
      title: '阿里通义千问大模型微调项目',
      category: 'ai',
      description: '作为高校代表与头部券商、头部财经媒体合作，进行大模型微调研究，探索AI在金融领域的应用',
      image: '/images/阿里通义千问大模型微调项目.png',
      technologies: ['大模型微调', 'JupyterLab云开发', '数据处理', 'Python'],
      achievements: [
        '作为高校代表参与产学研合作',
        '掌握大模型微调核心技术',
        '云端开发环境搭建与管理'
      ],
      period: '2024.11 - 进行中',
      team: '产学研合作项目',
      company: '香港中文大学（深圳）',
      status: 'in-progress'
    },
    {
      id: 4,
      title: 'ALBERT模型在A股市场应用研究',
      category: 'research',
      description: '利用150万余条股评文本数据对ALBERT模型进行领域内训练，构建情绪指数预测市场表现',
      image: '/images/ALBERT模型在A股市场应用研究.png',
      technologies: ['Python', 'ALBERT', 'NLP', '深度学习'],
      achievements: [
        '处理150万+股评文本数据',
        '构建有效的市场情绪指数',
        '预测结果显著，具有实际应用价值'
      ],
      period: '2023.05 - 2024.05',
      team: '本科毕业设计',
      company: '哈尔滨工业大学威海校区',
      status: 'completed'
    },
    {
      id: 5,
      title: '理财产品查询工具',
      category: 'fintech',
      description: '专为金融行业设计的理财产品信息抓取工具，100个产品测试成功率98.8%',
      image: '/images/理财产品查询工具.png',
      technologies: ['Python', 'Selenium', 'Firefox', 'Excel'],
      achievements: [
        '成功率98.8%，性能稳定可靠',
        '支持批量查询和单个产品查询',
        '人机协同验证码处理机制'
      ],
      period: '2024.03 - 2024.05',
      team: '独立开发',
      company: '深圳数字经济研究院',
      status: 'completed'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return '已完成';
      case 'in-progress': return '进行中';
      case 'planning': return '规划中';
      default: return '未知';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            项目经历
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            从AI应用到金融科技，从学术研究到实际产品，展示技术实力与创新能力
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {getStatusText(project.status)}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="space-y-2 mb-4 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{project.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} />
                    <span>{project.team}</span>
                  </div>
                  {project.company && (
                    <div className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      </span>
                      <span>{project.company}</span>
                    </div>
                  )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-50 text-gray-500 rounded-md text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Key Achievements */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center gap-2">
                    <TrendingUp size={14} className="text-green-500" />
                    核心成果
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.slice(0, 2).map((achievement, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span className="line-clamp-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            项目成果统计
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5个</div>
              <div className="text-sm text-gray-600">主导项目</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98.8%</div>
              <div className="text-sm text-gray-600">系统成功率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
              <div className="text-sm text-gray-600">效率提升</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">6大</div>
              <div className="text-sm text-gray-600">核心模块</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;