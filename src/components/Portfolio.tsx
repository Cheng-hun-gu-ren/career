import React, { useState } from 'react';
import { ExternalLink, Github, Play, Image as ImageIcon, Code, Palette, Database, Globe } from 'lucide-react';
import { EXTERNAL_LINKS, getLinkConfig } from '../data/links';
import ImageModal from './ImageModal';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState('');

  const filters = [
    { id: 'all', label: '全部作品', icon: Globe },
    { id: 'web', label: 'Web应用', icon: Code },
    { id: 'ai', label: 'AI工具', icon: Database },
    { id: 'design', label: '设计作品', icon: Palette },
    { id: 'research', label: '研究成果', icon: ImageIcon }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'AI卡片制作网页工具',
      category: 'web',
      type: 'web',
      description: 'AI驱动的智能卡片内容生成工具，支持多种卡片类型，现代化UI设计',
      image: '/images/AI卡片制作网页工具.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'DeepSeek API'],
      features: [
        'AI驱动的智能内容生成',
        '支持多种卡片类型',
        '实时预览和编辑功能',
        '响应式设计'
      ],
      links: {
        demo: EXTERNAL_LINKS.portfolio.aiCardTool,
        github: EXTERNAL_LINKS.projects.aiCardTool
      },
      status: 'featured'
    },
    {
      id: 2,
      title: '个人生活网站',
      category: 'web',
      type: 'web',
      description: '个人品牌展示网站，响应式设计，展示生活动态',
      image: '/images/个人生活主页.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        '响应式设计',
        '个人品牌建设',
        '生活动态展示',
        '作品集展示'
      ],
      links: {
        demo: EXTERNAL_LINKS.portfolio.personalSite
      },
      status: 'normal'
    },
    {
      id: 3,
      title: '专业学术论文绘图',
      category: 'design',
      type: 'image',
      description: '利用AI工具辅助制作专业技术架构图，提升学术研究和技术文档的可视化表达质量',
      image: '/images/专业学术论文绘图.png',
      technologies: ['AI工具', '技术绘图', '学术可视化', '架构设计'],
      features: [
        'Medical-AI-Core-Workflow绘图',
        'TextGrad-Learning-Cycle图表',
        '专业技术架构图制作',
        '学术研究可视化'
      ],
      links: {
        demo: EXTERNAL_LINKS.portfolio.academicDrawings
      },
      status: 'featured'
    },
    {
      id: 4,
      title: 'SVG艺术卡片设计',
      category: 'design',
      type: 'image',
      description: 'AI辅助创作的精美学习卡片，包含单词卡片、读书卡片、电影卡片等多种类型，采用优雅的渐变配色和排版设计',
      image: '/images/SVG艺术卡片设计.png',
      technologies: ['SVG', 'AI设计', '渐变配色', '排版设计'],
      features: [
        '单词学习卡片（含音标、释义、例句）',
        '读书笔记卡片（含金句、感悟）',
        '电影观影卡片（含评分、简介）',
        '优雅渐变背景和精美排版'
      ],
      links: {
        demo: EXTERNAL_LINKS.portfolio.svgCards
      },
      status: 'featured'
    },
    {
      id: 5,
      title: '数据可视化报告',
      category: 'design',
      type: 'image',
      description: '专业级数据分析报告，包含银行理财子费率自动更新系统开发企划书和ESG数据获取系统报告',
      image: '/images/数据可视化报告.png',
      technologies: ['Tableau', 'BI工具', 'Excel', 'Python'],
      features: [
        '银行理财子费率自动更新系统企划书',
        'ESG数据获取系统分析报告',
        '专业数据可视化图表',
        'PDF格式完整报告'
      ],
      links: {
        demo: EXTERNAL_LINKS.portfolio.dataVisualization
      },
      status: 'featured'
    },
    {
      id: 6,
      title: '个人公众号运营',
      category: 'design',
      type: 'document',
      description: 'AI教程分享与技术应用经验，建立个人技术品牌',
      image: '/images/个人公众号运营.png',
      technologies: ['内容创作', 'AI工具', '技术分享', '品牌建设'],
      features: [
        'AI技术教程分享',
        '从想法到作品的实践',
        '技术工具测评',
        '个人品牌建设'
      ],
      links: {
        demo: EXTERNAL_LINKS.portfolio.wechatArticles
      },
      status: 'normal'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'web': return <Code size={20} />;
      case 'software': return <Database size={20} />;
      case 'image': return <ImageIcon size={20} />;
      case 'video': return <Play size={20} />;
      case 'document': return <ExternalLink size={20} />;
      default: return <Globe size={20} />;
    }
  };

  const getStatusBadge = (status: string) => {
    if (status === 'featured') {
      return (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          精选作品
        </div>
      );
    }
    return null;
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            作品集
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            不要成为一个拥有完美简历却没有作品的人
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                <IconComponent size={18} />
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      {item.links.demo && (
                        (() => {
                          const linkConfig = getLinkConfig(item.links.demo);
                          if (linkConfig.type === 'modal') {
                            return (
                              <button
                                onClick={() => {
                                  setModalCategory(linkConfig.modalId || '');
                                  setModalOpen(true);
                                }}
                                className="bg-white/90 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white transition-colors duration-200 flex items-center gap-2"
                              >
                                {getTypeIcon(item.type)}
                                查看
                              </button>
                            );
                          } else {
                            return (
                              <a
                                href={linkConfig.href}
                                className="bg-white/90 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white transition-colors duration-200 flex items-center gap-2"
                                target={linkConfig.target}
                                rel="noopener noreferrer"
                              >
                                {getTypeIcon(item.type)}
                                查看
                              </a>
                            );
                          }
                        })()
                      )}
                      {item.links.github && (
                        <a
                          href={item.links.github}
                          className="bg-gray-900/90 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors duration-200 flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                          代码
                        </a>
                      )}
                      {item.links.paper && (
                        <a
                          href={item.links.paper}
                          className="bg-blue-600/90 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          论文
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                {getStatusBadge(item.status)}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-50 text-gray-500 rounded-md text-xs">
                      +{item.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-1">
                  {item.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            作品集统计
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-sm text-gray-600">创作作品</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">技术栈</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4种</div>
              <div className="text-sm text-gray-600">作品类型</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600">用户访问量</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            想了解更多项目详情或讨论合作机会？
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            联系我
          </button>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        category={modalCategory}
      />
    </section>
  );
};

export default Portfolio;