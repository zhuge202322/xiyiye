'use client';

import { useState } from 'react';

interface Image {
  id: number;
  src: string;
  alt: string;
}

export default function ProductGallery({ images, productName }: { images: Image[], productName: string }) {
  const [mainImg, setMainImg] = useState(images.length > 0 ? images[0] : null);

  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-6">
      <div className="relative aspect-square bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden p-8 flex items-center justify-center">
        {mainImg ? (
          <img 
            src={mainImg.src} 
            alt={mainImg.alt || productName} 
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-700 cursor-zoom-in"
          />
        ) : (
          <div className="text-gray-400 font-medium">暂无图片</div>
        )}
      </div>
      
      {/* 多图缩略图 */}
      {images && images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {images.map((img) => (
            <button 
              key={img.id} 
              onClick={() => setMainImg(img)}
              className={`shrink-0 w-24 h-24 rounded-2xl border-2 ${mainImg?.id === img.id ? 'border-brand-primary' : 'border-gray-100'} overflow-hidden p-2 bg-gray-50 hover:border-brand-primary transition`}
            >
              <img src={img.src} alt={img.alt || productName} className="w-full h-full object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
