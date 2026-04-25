'use client';

import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

function SlideInView({ children, direction = 'left', delay = 0 }: { children: React.ReactNode, direction?: 'left' | 'right', delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const baseTranslate = direction === 'left' ? '-translate-x-16' : 'translate-x-16';

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${baseTranslate}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function ArticleShowcase({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-24 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 space-y-32">
        {posts.slice(0, 2).map((post, index) => {
          const title = post.title.rendered;
          const excerpt = post.excerpt.rendered;
          const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
          
          const isReverse = index % 2 === 1;
          const textDirection = isReverse ? 'right' : 'left';
          const imageDirection = isReverse ? 'left' : 'right';
          
          return (
            <div key={post.id} className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
              {/* Text Side */}
              <div className="flex-1 w-full">
                <SlideInView direction={textDirection as any}>
                  <div className="space-y-6">
                    <h3 
                      className="text-4xl md:text-5xl font-medium text-[#1e2a44] leading-tight"
                      dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <div 
                      className="text-gray-600 text-lg leading-relaxed line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: excerpt }}
                    />
                    <a 
                      href={`/news/${post.slug}`} 
                      className="inline-flex items-center text-[#1e2a44] font-medium text-lg hover:text-brand-primary transition-colors"
                    >
                      Learn More <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </SlideInView>
              </div>
              
              {/* Image Side */}
              <div className="flex-1 w-full">
                <SlideInView direction={imageDirection as any} delay={100}>
                  {featuredImage ? (
                    <img 
                      src={featuredImage} 
                      alt={title} 
                      className="w-full h-auto rounded-3xl shadow-lg object-cover aspect-[4/3] sm:aspect-video"
                    />
                  ) : (
                    <div className="w-full h-auto aspect-[4/3] sm:aspect-video bg-gray-200 rounded-3xl shadow-lg flex items-center justify-center">
                      <span className="text-gray-400 font-medium">No Image</span>
                    </div>
                  )}
                </SlideInView>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
