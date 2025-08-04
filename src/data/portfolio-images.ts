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
      id: 'visualization-case-1',
      title: '数据可视化报告案例1',
      description: '专业数据分析报告，运用Tableau和BI工具制作，为B端客户提供投资分析支持',
      src: '/images/portfolio/data-visualization/展示案例1.pdf',
      type: 'pdf',
      category: '数据可视化'
    },
    {
      id: 'visualization-case-2',
      title: '数据可视化报告案例2',
      description: '市场分析报告，结合金融专业知识，制作具有实际业务价值的分析内容',
      src: '/images/portfolio/data-visualization/展示案例2.pdf',
      type: 'pdf',
      category: '数据可视化'
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