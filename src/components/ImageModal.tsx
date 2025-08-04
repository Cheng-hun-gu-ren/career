import React, { useEffect } from 'react';
import { X, ExternalLink, Download } from 'lucide-react';
import { getPortfolioImages, PortfolioImage } from '../data/portfolio-images';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, category }) => {
  const images = getPortfolioImages(category);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'academic-drawings':
        return '专业学术论文绘图作品集';
      case 'data-visualization':
        return '数据可视化报告';
      case 'competition-results':
        return '竞赛成果展示';
      default:
        return '作品展示';
    }
  };

  const openInNewTab = (src: string) => {
    window.open(src, '_blank');
  };

  const downloadFile = (src: string, title: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {getCategoryTitle(category)}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {images.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <ExternalLink size={48} className="mx-auto" />
              </div>
              <p className="text-gray-500 text-lg">
                暂无{getCategoryTitle(category)}内容
              </p>
              <p className="text-gray-400 text-sm mt-2">
                更多作品正在整理中...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Image/PDF Preview */}
                  <div className="relative group">
                    {image.type === 'image' ? (
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-64 object-contain bg-white cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => openInNewTab(image.src)}
                      />
                    ) : (
                      <div 
                        className="w-full h-64 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center cursor-pointer hover:from-blue-100 hover:to-indigo-200 transition-colors duration-300"
                        onClick={() => openInNewTab(image.src)}
                      >
                        <div className="text-center">
                          <ExternalLink size={48} className="text-blue-600 mx-auto mb-4" />
                          <p className="text-blue-700 font-medium">PDF文档</p>
                          <p className="text-blue-600 text-sm">点击查看</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <button
                        onClick={() => openInNewTab(image.src)}
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        查看
                      </button>
                      <button
                        onClick={() => downloadFile(image.src, image.title)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                      >
                        <Download size={16} />
                        下载
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {image.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        {image.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {index + 1} / {images.length}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>
              共 {images.length} 个作品
            </span>
            <span>
              按 ESC 键可关闭弹窗
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;