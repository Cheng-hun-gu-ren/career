// 作品集图片配置
export interface PortfolioImage {
  id: string;
  title: string;
  description: string;
  src: string;
  type: 'image' | 'pdf';
  category: string;
}

export const PORTFOLIO_IMAGES: Record<string, PortfolioImage[]> = {
  'academic-drawings': [
    {
      id: 'medical-ai-workflow',
      title: '医疗AI核心工作流程图',
      description: '展示医疗AI系统的完整工作流程，包括数据采集、模型训练、推理部署等核心环节',
      src: '/images/portfolio/academic-drawings/Medical-AI-Core-Workflow.png',
      type: 'image',
      category: '学术绘图'
    },
    {
      id: 'textgrad-learning-cycle',
      title: 'TextGrad学习循环图',
      description: '文本梯度学习循环的可视化表示，展示了自然语言处理中的梯度优化过程',
      src: '/images/portfolio/academic-drawings/TextGrad-Learning-Cycle.png',
      type: 'image',
      category: '学术绘图'
    }
  ],
  'data-visualization': [
    {
      id: 'esg-data-system',
      title: 'ESG数据获取系统分析报告',
      description: '专业ESG数据分析报告，运用先进的数据采集和可视化技术，为ESG投资决策提供数据支持',
      src: '/images/portfolio/data-visualization/展示案例-ESG数据获取系统.pdf',
      type: 'pdf',
      category: '数据可视化'
    },
    {
      id: 'bank-wealth-system',
      title: '银行理财子费率自动更新系统开发企划书',
      description: '银行理财产品费率管理系统企划书，结合金融科技专业知识，制作具有实际业务价值的系统设计方案',
      src: '/images/portfolio/data-visualization/展示案例-银行理财子费率自动更新系统开发企划书.pdf',
      type: 'pdf',
      category: '数据可视化'
    }
  ],
  'svg-cards': [
    {
      id: 'word-card-example',
      title: '单词学习卡片示例',
      description: '精美的英语单词学习卡片，包含音标、释义、例句和记忆技巧，采用优雅的紫色渐变背景',
      src: '/images/portfolio/svg-cards/单词卡片示例.png',
      type: 'image',
      category: 'SVG卡片设计'
    },
    {
      id: 'book-card-example-1',
      title: '读书笔记卡片示例1',
      description: '《怦然心动的人生整理魔法》读书卡片，摘录书中金句和整理法则，温馨的粉色渐变设计',
      src: '/images/portfolio/svg-cards/读书卡片示例.png',
      type: 'image',
      category: 'SVG卡片设计'
    },
    {
      id: 'book-card-example-2',
      title: '读书笔记卡片示例2',
      description: '另一款读书笔记卡片设计，展示不同的排版风格和色彩搭配',
      src: '/images/portfolio/svg-cards/读书卡片示例2.png',
      type: 'image',
      category: 'SVG卡片设计'
    },
    {
      id: 'movie-card-example',
      title: '电影观影卡片示例',
      description: '电影观影记录卡片，包含评分、简介和观影感悟，优雅的渐变背景和精美排版',
      src: '/images/portfolio/svg-cards/电影卡片示例.png',
      type: 'image',
      category: 'SVG卡片设计'
    }
  ],
  'competition-results': [
    // 待添加竞赛成果图片
    // {
    //   id: 'tianchi-competition',
    //   title: '阿里天池算法大赛成果',
    //   description: '饿了么算法大赛复赛入围，从600支参赛队伍中脱颖而出跻身八强',
    //   src: '/images/portfolio/competition-results/tianchi-certificate.jpg',
    //   type: 'image',
    //   category: '竞赛成果'
    // }
  ]
};

// 获取指定类别的图片
export const getPortfolioImages = (category: string): PortfolioImage[] => {
  return PORTFOLIO_IMAGES[category] || [];
};