import React from 'react';
import { ChevronDown, MapPin, Calendar, GraduationCap } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#education');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center">
            <GraduationCap size={48} className="text-white" />
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          程高
          <span className="block text-xl md:text-2xl font-normal mt-2 text-blue-100">
            金融工程研究生 · AI技术专家 · 全栈开发者
          </span>
        </h1>

        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          立志成为全栈开发工程师的追梦人，专注于AI技术在金融领域的创新应用。
          相信技术能赋能每个人成为"超级个体"，热衷于拥抱新科技，探索无限可能。
        </p>

        {/* Key Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <GraduationCap size={16} />
            <span>香港中文大学（深圳）</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <MapPin size={16} />
            <span>深圳</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Calendar size={16} />
            <span>研究生在读</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToNext()}
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            了解更多
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            联系我
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="animate-bounce hover:text-blue-200 transition-colors duration-300"
          aria-label="向下滚动"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/5 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-white/5 rounded-full animate-float-slow"></div>
    </section>
  );
};

export default Hero;