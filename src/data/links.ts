// 链接配置文件 - 统一管理所有外部链接
export const EXTERNAL_LINKS = {
  // 个人网站和社交媒体
  personalWebsite: 'https://life.chenggao.top',
  wechatPublic: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkyMTM4MzQ5Mw==&action=getalbum&album_id=4105509608708521990#wechat_redirect', // 微信公众号文章合集
  github: 'https://github.com/Cheng-hun-gu-ren', // GitHub主页
  
  // 简历和文档
  resume: '/resume.pdf', // 简历PDF文件
  
  // 项目链接
  projects: {
    bankRateSystem: '#', // 银行理财子费率自动更新系统
    esgCrawler: '#', // ESG银行报告智能爬虫系统
    albertModel: '#', // ALBERT模型研究论文
    productQuery: '#', // 理财产品查询工具
    aiCardTool: 'https://aicards.chenggao.top', // AI卡片制作网页工具
  },
  
  // 作品集链接
  portfolio: {
    personalSite: 'https://life.chenggao.top',
    aiCardTool: 'https://aicards.chenggao.top', // AI卡片制作工具
    academicDrawings: 'modal:academic-drawings', // 专业学术论文绘图作品集 - 弹窗展示
    dataVisualization: 'modal:data-visualization', // 数据可视化报告 - 弹窗展示
    wechatArticles: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkyMTM4MzQ5Mw==&action=getalbum&album_id=4105509608708521990#wechat_redirect', // 公众号文章合集
    svgCards: '#', // SVG艺术卡片作品
  },
  
  // 学术和研究
  academic: {
    cuhkEmail: 'mailto:224040166@link.cuhk.edu.cn',
    researchPapers: '#', // 学术论文集合
    competitionResults: 'modal:competition-results', // 竞赛成果展示 - 弹窗展示
  },
  
  // 实习和工作相关
  internships: {
    szeri: '#', // 深圳数字经济研究院相关
    tianhong: '#', // 天弘基金相关
    mijiahe: '#', // 幂加和私募相关
    gffutures: '#', // 广发期货相关
  }
};

// 链接类型定义
export type LinkType = 'external' | 'internal' | 'download' | 'email' | 'modal';

// 获取链接配置的辅助函数
export const getLinkConfig = (url: string): { href: string; type: LinkType; target?: string; modalId?: string } => {
  if (url.startsWith('mailto:')) {
    return { href: url, type: 'email' };
  }
  if (url.startsWith('modal:')) {
    const modalId = url.replace('modal:', '');
    return { href: '#', type: 'modal', modalId };
  }
  if (url.startsWith('http') || url.startsWith('https')) {
    return { href: url, type: 'external', target: '_blank' };
  }
  if (url.startsWith('/') && url.includes('.pdf')) {
    return { href: url, type: 'download', target: '_blank' };
  }
  if (url.startsWith('#')) {
    return { href: url, type: 'internal' };
  }
  return { href: url, type: 'external', target: '_blank' };
};