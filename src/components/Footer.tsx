import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">程高</h3>
            <p className="text-gray-400 leading-relaxed">
              金融工程研究生 · AI技术拥抱者 · 全栈开发者
            </p>
            <p className="text-gray-400 mt-2 text-sm">
              立志成为全栈开发工程师的追梦人，专注于AI技术在金融领域的创新应用。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速导航</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  教育背景
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#internships')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  实习经历
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  项目经历
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  作品集
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  联系方式
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">联系信息</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 224040166@link.cuhk.edu.cn</p>
              <p>📍 深圳市</p>
              <p>🎓 香港中文大学（深圳）</p>
              <div className="mt-4">
                <a
                  href="https://life.chenggao.top"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  个人生活网站 →
                </a>
              </div>
              <div className="mt-3">
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} 程高. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and</span>
              <Code size={16} className="text-blue-500" />
              <span>and</span>
              <Coffee size={16} className="text-yellow-500" />
            </div>
            
            <div className="mt-4 md:mt-0 text-gray-400 text-sm flex flex-col md:items-end">
              <p>怕什么真理无穷，进一步有一步的惊喜</p>
              <p className="mt-1">
                <a 
                  href="https://beian.miit.gov.cn/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  备案号：粤ICP备2025459432号
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
