'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const slides = [
  { image: '/bj/01.gif', alt: 'Downy conditions and strengthens fibers' },
  { image: '/bj/02.png', alt: 'Laundry Care' },
  { image: '/bj/03.jpg', alt: 'Downy Product' },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] bg-brand-secondary flex items-center overflow-hidden">
      {/* 轮播背景图 */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>
        </div>
      ))}

      {/* 前景内容 */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 pointer-events-none">
        <div className="space-y-8 max-w-xl pointer-events-auto">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-brand-primary tracking-wide">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            <span>全新微胶囊留香黑科技</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-dark leading-[1.05] tracking-tight">
            重新定义<br/><span className="text-brand-primary">衣物留香体验。</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-gray leading-relaxed font-medium">
            12周持久留香，深层柔顺护色。探索我们专为现代家庭打造的奢华护衣香珠系列，支持独家香型定制。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="#" className="bg-brand-primary text-white px-8 py-4 rounded-full text-center font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-lg flex items-center justify-center">
              浏览香珠产品 <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="#" className="bg-white text-brand-primary px-8 py-4 rounded-full text-center font-bold text-lg hover:bg-gray-50 transition-all shadow-md flex items-center justify-center">
              <PlayCircle className="w-5 h-5 mr-2" /> 观看研发揭秘
            </a>
          </div>
        </div>
      </div>

      {/* 轮播指示器 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-10 h-1.5 rounded-full transition ${
              index === current ? 'bg-brand-primary' : 'bg-black/20 hover:bg-black/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
