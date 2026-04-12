'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  short_description: string;
  images: { src: string }[];
  categories: { name: string }[];
}

export default function ProductGrid({ products }: { products: Product[] }) {
  const [showAll, setShowAll] = useState(false);

  // 显示的产品：如果展开则显示全部，否则显示前4个
  const displayedProducts = showAll ? products : products.slice(0, 4);

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-4">热门产品展示 (Top Products)</h2>
          <div className="w-20 h-1.5 bg-brand-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-500">
          {displayedProducts.map((product) => (
            <a key={product.id} href={`/product/${product.slug}`} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
              <div className="relative aspect-[4/5] bg-gray-50 p-8 flex items-center justify-center">
                {product.images && product.images.length > 0 ? (
                  <img 
                    src={product.images[0].src} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                  />
                ) : (
                  <div className="text-gray-400 font-medium">暂无图片</div>
                )}
              </div>
              
              <div className="p-8 flex flex-col flex-1 text-center">
                <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>
                
                {product.categories && product.categories.length > 0 && (
                  <p className="text-brand-gray font-medium text-sm mb-4">
                    {product.categories[0].name}
                  </p>
                )}

                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-brand-primary fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <div 
                  className="text-sm text-gray-500 line-clamp-3 mt-auto"
                  dangerouslySetInnerHTML={{ __html: product.short_description || '' }}
                ></div>
              </div>
            </a>
          ))}
        </div>

        {/* 查看更多按钮 */}
        <div className="mt-16 flex justify-center">
          {products.length > 4 ? (
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-white border-2 border-brand-primary text-brand-primary px-10 py-4 rounded-full text-center font-bold text-lg hover:bg-brand-primary hover:text-white transition-all flex items-center shadow-sm"
            >
              {showAll ? (
                <>收起产品展示 <ChevronUp className="w-5 h-5 ml-2" /></>
              ) : (
                <>下拉查看更多产品 <ChevronDown className="w-5 h-5 ml-2" /></>
              )}
            </button>
          ) : (
            <a
              href="/shop"
              className="bg-white border-2 border-brand-primary text-brand-primary px-10 py-4 rounded-full text-center font-bold text-lg hover:bg-brand-primary hover:text-white transition-all flex items-center shadow-sm"
            >
              前往商城查看全部产品 <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
