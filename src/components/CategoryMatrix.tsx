'use client';

import { useState } from 'react';
import { ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image?: {
    src: string;
  };
}

export default function CategoryMatrix({ categories }: { categories: Category[] }) {
  const [showAll, setShowAll] = useState(false);

  // 显示的分类：如果展开则显示全部，否则显示前3个
  const displayedCategories = showAll ? categories : categories.slice(0, 3);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6">全场景清洁方案，一站式智造。</h2>
          <p className="text-xl text-brand-gray">不论是贴身衣物的温和洗护，还是重油污厨房的强力清洁，我们都拥有成熟的配方体系。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500">
          {displayedCategories.map((cat) => (
            <div key={cat.id} className="group cursor-pointer flex flex-col">
              <div className="relative h-[450px] rounded-3xl overflow-hidden mb-6 bg-gray-50 flex items-center justify-center border border-gray-100">
                {cat.image ? (
                  <img src={cat.image.src} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <span className="text-gray-400 font-medium">暂无分类图片</span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white pr-8">
                  <h3 className="text-3xl font-bold mb-2">{cat.name}</h3>
                  {cat.description && (
                    <p className="text-white/80 font-medium line-clamp-2" dangerouslySetInnerHTML={{ __html: cat.description }}></p>
                  )}
                </div>
              </div>
              <a href={`/shop?category=${cat.slug}`} className="inline-flex items-center font-bold text-brand-primary text-lg group-hover:underline underline-offset-4">
                探索{cat.name}产品线 <ChevronRight className="w-5 h-5 ml-1" />
              </a>
            </div>
          ))}
        </div>

        {/* 查看更多按钮 (如果分类数大于3才显示) */}
        {categories.length > 3 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-brand-secondary text-brand-primary px-8 py-4 rounded-full text-center font-bold text-lg hover:bg-brand-primary hover:text-white transition-all flex items-center shadow-sm"
            >
              {showAll ? (
                <>收起产品分类 <ChevronUp className="w-5 h-5 ml-2" /></>
              ) : (
                <>查看更多分类 <ChevronDown className="w-5 h-5 ml-2" /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
