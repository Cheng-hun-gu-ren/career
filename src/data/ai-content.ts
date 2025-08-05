// AI相关内容数据
export interface AITool {
  id: string;
  name: string;
  category: string;
  description: string;
  usage: string;
  proficiency: number;
  icon: string;
  features: string[];
}

export interface AIPhilosophy {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface AIJourney {
  period: string;
  milestone: string;
  description: string;
  impact: string;
}

// AI工具数据（基于参考文件，添加新工具）
export const aiTools: AITool[] = [
  {
    id: 'claude-code',
    name: 'Claude Code',
    category: '终端AI工具',
    description: '主力AI工具，终端命令行AI助手，深度集成开发工作流',
    usage: '日常编程、系统管理、问题解决',
    proficiency: 95,
    icon: '🤖',
    features: ['命令行集成', '代码生成', '系统诊断', '工作流优化']
  },
  {
    id: 'claude-web',
    name: 'Claude (网页版)',
    category: '对话AI',
    description: '最早接触的AI工具，用于学习、研究和内容创作',
    usage: '学术研究、文档写作、思维整理',
    proficiency: 90,
    icon: '💬',
    features: ['长文本处理', '逻辑推理', '创意写作', '学术讨论']
  },
  {
    id: 'cursor',
    name: 'Cursor AI IDE',
    category: '开发工具',
    description: 'AI驱动的代码编辑器，提升编程效率',
    usage: '代码编写、重构、调试',
    proficiency: 85,
    icon: '⚡',
    features: ['智能补全', '代码解释', '自动重构', '错误修复']
  },
  {
    id: 'deepseek-api',
    name: 'DeepSeek API',
    category: 'API服务',
    description: '集成到项目中的AI能力，用于智能化系统开发',
    usage: '系统集成、数据处理、智能分析',
    proficiency: 80,
    icon: '🔗',
    features: ['API集成', '批量处理', '智能识别', '自动化流程']
  },
  {
    id: 'gemini',
    name: 'Gemini',
    category: '多模态AI',
    description: '用于多媒体内容处理和创作',
    usage: '图像分析、内容生成、多模态交互',
    proficiency: 75,
    icon: '🌟',
    features: ['图像理解', '多模态输入', '创意生成', '内容优化']
  },
  {
    id: 'bolt',
    name: 'Bolt',
    category: '开发工具',
    description: 'AI驱动的快速应用开发平台，能够快速构建全栈应用',
    usage: 'MVP快速发布、内部工具开发、AI应用原型',
    proficiency: 70,
    icon: '⚡',
    features: ['快速原型设计', '全栈应用开发', 'AI/ML项目实验', '编程教育学习']
  },
  {
    id: 'n8n',
    name: 'n8n',
    category: '自动化工具',
    description: '混合无代码/低代码工作流自动化平台，拥有400多个原生集成',
    usage: '潜在客户生成、客户支持自动化、内容管理',
    proficiency: 65,
    icon: '🔄',
    features: ['400+原生集成', '内置AI节点', '自定义代码支持', '自托管或云端']
  },
  {
    id: 'gamma',
    name: 'Gamma',
    category: '设计工具',
    description: 'AI演示文稿、文档和网页生成器，快速创建设计精美的内容',
    usage: '销售演示、产品概述、教育材料',
    proficiency: 75,
    icon: '🎨',
    features: ['文本提示生成', '专业模板库', '嵌入丰富媒体', '响应式设计']
  },
  {
    id: 'wispr-flow',
    name: 'Wispr Flow',
    category: '效率工具',
    description: '语音驱动的听写工具，具备上下文感知能力，比打字快4倍',
    usage: '撰写邮件报告、编程听写、快速捕捉想法',
    proficiency: 60,
    icon: '🎤',
    features: ['跨应用语音听写', '上下文感知', '实时自动编辑', '支持100+语言']
  },
  {
    id: 'notebookllm',
    name: 'NotebookLM',
    category: '知识管理',
    description: 'Google的AI驱动笔记和研究助手，能够理解和分析文档',
    usage: '文档分析、研究整理、知识提取',
    proficiency: 70,
    icon: '📖',
    features: ['文档理解', '智能摘要', '问答系统', '知识图谱']
  }
];

// AI理念
export const aiPhilosophy: AIPhilosophy[] = [
  {
    id: 'programming-view',
    title: 'AI时代的编程观',
    description: '传统编程是写代码，AI时代的编程更像是写文档',
    icon: '💻',
    details: [
      '通过自然语言描述需求和逻辑',
      '让AI理解意图并生成代码',
      '人类专注于架构设计和业务逻辑',
      'AI负责具体实现和优化细节'
    ]
  },
  {
    id: 'tech-equality',
    title: '技术平权的实现者',
    description: 'AI工具降低了技术门槛，让更多人能够实现想法',
    icon: '👥',
    details: [
      '非技术背景的人也能开发应用',
      '快速原型验证和迭代',
      '专注创意而非技术细节',
      '促进跨领域合作和创新'
    ]
  },
  {
    id: 'super-individual',
    title: '超级个体的赋能工具',
    description: 'AI让个人具备了团队级别的能力',
    icon: '⚡',
    details: [
      '一个人完成多角色工作',
      '大幅提升工作效率和质量',
      '拓展个人能力边界',
      '实现更大规模的项目'
    ]
  },
  {
    id: 'output-power',
    title: '输出力的核心价值',
    description: 'AI时代最重要的能力是将想法转化为作品',
    icon: '📈',
    details: [
      '从想法到产品的快速转化',
      '持续的内容创作和分享',
      '建立个人品牌和影响力',
      '通过作品展示能力和价值'
    ]
  }
];

// AI历程
export const aiJourney: AIJourney[] = [
  {
    period: '2024.03',
    milestone: '初识AI工具',
    description: '开始用在辅助论文代码构建上，发现AI能够实际帮助完成学术工作',
    impact: '改变了对AI的认知，从好奇转向实用'
  },
  {
    period: '2024.11',
    milestone: '学习多种AI工具',
    description: '深入了解多种AI工具，开始理解不同工具的能力边界和应用场景',
    impact: '建立了AI工具生态的全面认知'
  },
  {
    period: '2025.03',
    milestone: 'AI IDE成为主力',
    description: '主力变为Cursor等AI IDE，用来协助自己画图、写文、代码等多种工作',
    impact: '工作流程开始全面AI化，效率显著提升'
  },
  {
    period: '2025.05',
    milestone: '终端AI工具突破',
    description: '了解和使用Claude Code这类终端命令行AI工具，大幅提升工作效率',
    impact: '实现了更深度的AI集成，形成独特的开发模式'
  },
  {
    period: '2025.07',
    milestone: 'AI技术栈完善',
    description: '持续跟进学习各种海内外AI工具，完善自身技术栈和知识库',
    impact: '建立了完整的AI应用能力体系'
  },
  {
    period: '至今',
    milestone: '拥抱AI新时代',
    description: '干中学、学中干，持续拥抱AI新时代的变化和机遇',
    impact: '成为AI时代的积极实践者和推动者'
  }
];