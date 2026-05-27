// 国际化翻译文件 - 集中管理所有中英文本
export const translations = {
  zh: {
    // 导航和通用
    nav: {
      projects: '项目与作品',
      education: '教育背景',
      internships: '履历背景',
      ai: 'AI实践',
      contact: '联系交流'
    },

    // 头部
    header: {
      name: 'Gary Cheng'
    },

    // 英雄区块
    hero: {
      name: 'Gary Cheng',
      subtitle: 'AI工程师 · 全栈开发工程师',
      description: '任职于深圳数据经济研究院，聚焦金融科技、AI工程化与数据产品建设，把业务理解、模型能力和全栈开发落到可运行的系统与可交付的项目。\n这里集中呈现我长期维护的项目案例、产品作品与技术实践。',
      company: '深圳数据经济研究院',
      location: '深圳',
      status: '在职 · 项目交付中',
      learnMore: '查看项目案例',
      contact: '联系交流'
    },

    // 项目部分
    projects: {
      title: '项目与作品',
      subtitle: '围绕金融数据、AI应用、全栈产品与个人网站的代表性实践，强调可落地系统、业务价值与工程质量',
      filters: {
        all: '全部项目',
        ai: 'AI应用',
        fintech: '金融科技',
        web: 'Web开发',
        research: '学术研究'
      },
      status: {
        completed: '已完成',
        'in-progress': '建设中',
        planning: '规划中'
      },
      coreAchievements: '核心成果'
    },

    // 教育背景
    education: {
      title: '教育背景',
      subtitle: '教育背景作为能力底座，支撑金融、数据与工程的交叉实践',
      skills: '核心技能与特长',
      achievementLabel: '主要成就',
      skillsList: {
        engineering: {
          title: '工程能力',
          desc: '全栈开发、系统架构、AI工程化应用'
        },
        competition: {
          title: '竞赛获奖',
          desc: '硕士阶段阿里天池算法大赛复赛八强，多项奖学金'
        },
        vision: {
          title: '国际视野',
          desc: '中外合办求学经历，雅思6.5分，国际化背景'
        }
      },
      schools: [
        {
          id: 1,
          degree: '金融工程硕士',
          school: '香港中文大学（深圳）',
          period: '2024.09 - 2025.03',
          location: '深圳',
          description: '专注于AI技术在金融领域的创新应用，量化投资与机器学习研究',
          achievements: ['学业奖学金（覆盖率30%）', '阿里天池算法大赛复赛八强（600支队伍中脱颖而出）']
        },
        {
          id: 2,
          degree: '国际经济与贸易学士',
          school: '哈尔滨工业大学威海校区',
          period: '2020 - 2024',
          location: '威海',
          description: '985高校本科教育，高考理科632分，全省排名前1-2%',
          achievements: ['二等人民奖学金（覆盖率12.5%）', 'ALBERT模型在A股市场应用研究（本科毕业设计）']
        }
      ]
    },

    // 实习经历
    internships: {
      title: '履历背景',
      subtitle: '早期金融机构与研究单位经历，为金融科技和AI应用开发提供业务理解与场景积累',
      status: {
        current: '在职',
        completed: '已完成'
      },
      responsibilities: '主要职责',
      achievements: '收获成果',
      experiences: []
    },

    // AI部分
    ai: {
      title: 'AI实践',
      subtitle: '从2024年3月开始深度使用AI工具，将模型能力融入开发、研究、内容生产和项目交付',
      tabs: {
        tools: 'AI工具箱',
        philosophy: 'AI理念',
        journey: 'AI历程'
      },
      tools: {
        proficiency: '熟练度',
        usage: '主要用途',
        features: '核心功能',
        moreTools: '更多工具',
        exploring: '持续探索AI新工具',
        stats: {
          duration: '深度使用时长',
          count: '常用AI工具',
          projects: 'AI辅助项目',
          workflow: '工作流AI化'
        },
        statsTitle: 'AI使用统计',
        duration: '深度使用时间'
      },
      philosophy: {
        core: '核心理念',
        coreText: '"AI时代最重要的能力是<strong>输出力</strong>——将想法转化为作品的能力。\n技术不再是门槛，创意和执行力才是核心竞争力。"',
        motto: '怕什么真理无穷，进一步有一步的惊喜'
      },
      journey: {
        futureVision: '未来展望',
        impact: '影响：'
      },
      futureVision: {
        consulting: 'AI咨询服务',
        consultingDesc: '为企业和个人提供AI应用咨询和培训',
        tools: 'AI工具开发',
        toolsDesc: '开发更多实用的AI辅助工具和系统',
        sharing: '知识分享',
        sharingDesc: '通过公众号和技术社区分享AI应用经验'
      },
      collaboration: 'AI合作与咨询',
      collaborationDesc: '基于深度的AI应用经验，为您提供专业的AI技术咨询和解决方案',
      cta: {
        tools: 'AI工具星云',
        consult: '预约AI咨询',
        cases: '查看AI项目案例'
      }
    },

    // 联系方式
    contact: {
      title: '联系交流',
      subtitle: '欢迎围绕项目案例、产品作品、技术交流或AI应用实践与我联系',
      info: '联系信息',
      labels: {
        email: '邮箱',
        location: '现居地',
        available: '可约时间'
      },
      social: '社交媒体',
      quick: '快速联系',
      quickDesc: '如需交流作品细节、项目背景或合作可能，请直接发送邮件，我会尽快回复。',
      sendEmail: '发送邮件',
      expectation: '保持长期建设',
      expectationText: '我会持续把金融场景、AI能力和工程实现沉淀为可使用、可验证、可展示的作品。\n如果你关注金融科技、AI应用开发或数据产品建设，欢迎进一步交流。',
      wechat: '扫码添加微信',
      wechatTip: '扫描二维码添加好友',
      wechatNote: '请备注来意，谢谢！',
      contactItems: {
        email: '邮箱',
        location: '现居地',
        available: '可约时间',
        locationValue: '深圳市',
        availableValue: '工作日 9:00-18:00'
      },
      subjectOptions: [
        '项目查看',
        '项目合作',
        '技术交流',
        'AI应用讨论',
        '其他咨询'
      ],
      socialWeChat: '微信'
    },

    // 页脚
    footer: {
      brand: 'Gary Cheng',
      tagline: 'AI工程师 · 全栈开发工程师',
      motto: '任职于深圳数据经济研究院，聚焦金融科技、AI工程化与数据产品建设。',
      quickLinks: '快速导航',
      contactInfo: '联系信息',
      email: '📧 224040166@link.cuhk.edu.cn',
      location: '📍 深圳市',
      organization: '🏢 深圳数据经济研究院',
      personalSite: '个人生活网站 →',
      copyright: '© {{year}} Gary Cheng. Made with',
      motto2: '怕什么真理无穷，进一步有一步的惊喜',
      icp: '备案号：粤ICP备2025459432号'
    }
  },

  en: {
    // Navigation and Common
    nav: {
      projects: 'Projects & Works',
      education: 'Education',
      internships: 'Background',
      ai: 'AI Practice',
      contact: 'Connect'
    },

    // Header
    header: {
      name: 'Gary Cheng'
    },

    // Hero Section
    hero: {
      name: 'Gary Cheng',
      subtitle: 'AI Engineer · Full-Stack Developer',
      description: 'Working at Shenzhen Digital Economy Research Institute, focused on fintech, AI engineering, and data product development. I turn domain insight, model capabilities, and full-stack engineering into working systems and delivered projects.\nThis site collects project cases, product work, and technical practice I continue to maintain.',
      company: 'Shenzhen Digital Economy Research Institute',
      location: 'Shenzhen',
      status: 'Employed · Delivering Projects',
      learnMore: 'View Project Cases',
      contact: 'Connect'
    },

    // Projects Section
    projects: {
      title: 'Projects & Works',
      subtitle: 'Representative work across financial data, AI applications, full-stack products, and personal web projects, with emphasis on usable systems, business value, and engineering quality',
      filters: {
        all: 'All Projects',
        ai: 'AI Applications',
        fintech: 'FinTech',
        web: 'Web Development',
        research: 'Research'
      },
      status: {
        completed: 'Completed',
        'in-progress': 'Building',
        planning: 'Planning'
      },
      coreAchievements: 'Core Achievements'
    },

    // Education Section
    education: {
      title: 'Education',
      subtitle: 'An interdisciplinary foundation supporting financial, data, and engineering practice',
      skills: 'Core Skills & Strengths',
      achievementLabel: 'Key Achievements',
      skillsList: {
        engineering: {
          title: 'Engineering Excellence',
          desc: 'Full-stack development, system architecture, AI engineering applications'
        },
        competition: {
          title: 'Competition Awards',
          desc: 'Alibaba Tianchi Algorithm Competition Semifinals Top 8, multiple scholarships'
        },
        vision: {
          title: 'Global Vision',
          desc: 'Sino-foreign combined study experience, IELTS 6.5, international background'
        }
      },
      schools: [
        {
          id: 1,
          degree: 'Master of Financial Engineering',
          school: 'The Chinese University of Hong Kong, Shenzhen',
          period: '2024.09 - 2025.03',
          location: 'Shenzhen',
          description: 'Focus on innovative applications of AI technology in finance, quantitative investment and machine learning research',
          achievements: ['Academic Scholarship (30% coverage)', 'Alibaba Tianchi Algorithm Competition Semifinals Top 8 (Outstanding among 600 teams)']
        },
        {
          id: 2,
          degree: 'Bachelor of International Economics and Trade',
          school: 'Harbin Institute of Technology, Weihai',
          period: '2020 - 2024',
          location: 'Weihai',
          description: '985 University undergraduate education, College Entrance Exam Science Score: 632, Top 1-2% in province',
          achievements: ['Second-class National Scholarship (12.5% coverage)', 'ALBERT Model Application Research in A-Stock Market (Undergraduate Thesis)']
        }
      ]
    },

    // Internships Section
    internships: {
      title: 'Background',
      subtitle: 'Early experience in financial institutions and research settings that shaped my domain understanding for fintech and AI application development',
      status: {
        current: 'Current',
        completed: 'Completed'
      },
      responsibilities: 'Key Responsibilities',
      achievements: 'Achievements',
      experiences: []
      // 暂时隐藏实习细节（隐藏日期：2025-01-19）
      // [
      //   {
      //     id: 1,
      //     company: 'Shenzhen Digital Economy Research Institute',
      //     department: 'Sustainable Finance Research Center',
      //     position: 'Intern',
      //     period: 'Present',
      //     location: 'Shenzhen',
      //     status: 'current'
      //   },
      //   {
      //     id: 2,
      //     company: 'Tianhong Fund Management Co., Ltd',
      //     department: 'Institutional Mid-Office',
      //     position: 'Intern',
      //     period: '2024.07 - 2025.01',
      //     location: 'Shenzhen',
      //     status: 'completed'
      //   },
      //   {
      //     id: 3,
      //     company: 'Mijiahe Private Fund Management Co., Ltd',
      //     department: 'Research Department',
      //     position: 'Research Assistant',
      //     period: '2024.01 - 2024.03',
      //     location: 'Shenzhen',
      //     status: 'completed'
      //   },
      //   {
      //     id: 4,
      //     company: 'Guangfa Futures Co., Ltd Shenzhen Branch',
      //     department: 'Business Department',
      //     position: 'Finance Intern',
      //     period: '2023.07 - 2023.08',
      //     location: 'Shenzhen',
      //     status: 'completed'
      //   }
      // ]
    },

    // AI Section
    ai: {
      title: 'AI Practice',
      subtitle: 'Deep use of AI tools since March 2024, integrating model capabilities into development, research, content production, and project delivery',
      tabs: {
        tools: 'AI Toolbox',
        philosophy: 'AI Philosophy',
        journey: 'AI Journey'
      },
      tools: {
        proficiency: 'Proficiency',
        usage: 'Main Usage',
        features: 'Key Features',
        moreTools: 'More Tools',
        exploring: 'Continuously exploring new AI tools',
        stats: {
          duration: 'Depth of Use',
          count: 'AI Tools Used',
          projects: 'AI-Assisted Projects',
          workflow: 'Workflow AI Adoption'
        }
      },
      philosophy: {
        core: 'Core Belief',
        coreText: '"The most important ability in the AI era is <strong>output power</strong>—the ability to transform ideas into works.\nTechnology is no longer the barrier; creativity and execution are the core competencies."',
        motto: 'Fear nothing about infinite truth; each step forward brings a pleasant surprise'
      },
      journey: {
        futureVision: 'Future Vision',
        impact: 'Impact: '
      },
      futureVision: {
        consulting: 'AI Consulting',
        consultingDesc: 'Provide AI application consulting and training for businesses and individuals',
        tools: 'AI Tool Development',
        toolsDesc: 'Develop more practical AI-assisted tools and systems',
        sharing: 'Knowledge Sharing',
        sharingDesc: 'Share AI application experience through public accounts and tech communities'
      },
      collaboration: 'AI Collaboration & Consulting',
      collaborationDesc: 'Based on extensive AI application experience, provide professional AI technology consulting and solutions',
      cta: {
        tools: 'AI Tool Constellation',
        consult: 'Schedule AI Consultation',
        cases: 'View AI Project Cases'
      }
    },

    // Contact Section
    contact: {
      title: 'Connect',
      subtitle: 'Feel free to reach out about project cases, product work, technical discussion, or AI application practice',
      info: 'Contact Information',
      labels: {
        email: 'Email',
        location: 'Current Location',
        available: 'Available Hours'
      },
      social: 'Social Media',
      quick: 'Quick Contact',
      quickDesc: 'For details about works, project background, or possible collaboration, please email me directly.',
      sendEmail: 'Send Email',
      expectation: 'Building in Public',
      expectationText: 'I continue to turn financial scenarios, AI capabilities, and engineering execution into usable, verifiable, and presentable work.\nIf you care about fintech, AI application development, or data products, I am open to further discussion.',
      wechat: 'Scan to Add WeChat',
      wechatTip: 'Scan QR code to add friend',
      wechatNote: 'Please note your purpose, thank you!',
      contactItems: {
        email: 'Email',
        location: 'Current Location',
        available: 'Available Hours',
        locationValue: 'Shenzhen',
        availableValue: 'Weekdays 9:00-18:00'
      },
      subjectOptions: [
        'Project Review',
        'Project Collaboration',
        'Technical Discussion',
        'AI Application Discussion',
        'Other'
      ],
      socialWeChat: 'WeChat'
    },

    // Footer
    footer: {
      brand: 'Gary Cheng',
      tagline: 'AI Engineer · Full-Stack Developer',
      motto: 'Working at Shenzhen Digital Economy Research Institute, focused on fintech, AI engineering, and data products.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      email: '📧 224040166@link.cuhk.edu.cn',
      location: '📍 Shenzhen',
      organization: '🏢 Shenzhen Digital Economy Research Institute',
      personalSite: 'Personal Website →',
      copyright: '© {{year}} Gary Cheng. Made with',
      motto2: 'Fear nothing about infinite truth; each step forward brings a pleasant surprise',
      icp: 'License: 粤ICP备2025459432号'
    }
  }
};

export type Language = 'zh' | 'en';

// 获取翻译文本的辅助函数
export const getTranslation = (lang: Language, path: string, defaultValue: string = ''): string => {
  const keys = path.split('.');
  let value: unknown = translations[lang];

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return defaultValue;
    }
  }
  
  return typeof value === 'string' ? value : defaultValue;
};
