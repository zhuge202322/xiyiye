import { ChevronRight, Calendar, ArrowRight, Rss } from "lucide-react";

async function getPosts() {
  try {
    const res = await fetch('http://45.145.229.20:6411/?rest_route=/wp/v2/posts&_embed=1', {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return [];
    return JSON.parse(JSON.stringify(await res.json()).replace(/http:\/\/45\.145\.229\.20:6411/g, '/wp-proxy'));
  } catch (e) {
    console.error("Failed to fetch posts", e);
    return [];
  }
}

export default async function NewsPage() {
  const posts = await getPosts();

  return (
    <div className="bg-[#f8f9fa] flex-1 flex flex-col">
      {/* 面包屑 / 页面标题 */}
      <div 
        className="relative py-16 md:py-24 bg-cover bg-center bg-no-repeat flex items-center justify-center border-b border-gray-200"
        style={{ backgroundImage: "url('/bj/dp.webp')" }}
      >
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-8 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-4 tracking-tight">产品新闻</h1>
          <p className="text-gray-800 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
            探索 PURA 最新研发动态、行业趋势与新品发布。
          </p>
          <p className="text-gray-600 font-bold flex items-center justify-center text-sm">
            <a href="/" className="hover:text-brand-primary transition">首页</a> 
            <ChevronRight className="w-4 h-4 mx-2" /> 
            <span className="text-brand-primary">产品新闻</span>
          </p>
        </div>
      </div>

      {/* 新闻列表主区域 */}
      <main className="flex-1 max-w-[1440px] mx-auto px-4 lg:px-8 py-16 lg:py-24 w-full">
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post: any) => {
              const title = post.title.rendered;
              const excerpt = post.excerpt.rendered;
              const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              // 格式化日期 (如：2024年4月11日)
              const date = new Date(post.date).toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });

              return (
                <a 
                  key={post.id} 
                  href={`/news/${post.slug}`} 
                  className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-gray-100"
                >
                  {/* 特色图 */}
                  <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                    {featuredImage ? (
                      <img 
                        src={featuredImage} 
                        alt={title.replace(/<[^>]*>?/gm, '')} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-100">
                        <Rss className="w-12 h-12 mb-3 opacity-20" />
                        <span className="text-sm font-medium">暂无特色图</span>
                      </div>
                    )}
                    
                    {/* 悬浮日期角标 */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-extrabold text-brand-primary flex items-center shadow-md border border-white/20">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      {date}
                    </div>
                  </div>
                  
                  {/* 文本内容区 */}
                  <div className="p-8 flex flex-col flex-1 relative">
                    <h3 
                      className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors line-clamp-2 leading-tight" 
                      dangerouslySetInnerHTML={{ __html: title }} 
                    />
                    
                    <div 
                      className="text-gray-500 font-medium text-sm leading-relaxed mb-8 line-clamp-3" 
                      dangerouslySetInnerHTML={{ __html: excerpt }} 
                    />
                    
                    <div className="mt-auto flex items-center text-brand-primary font-bold text-sm">
                      阅读全文 <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-16 text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <Rss className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-2xl font-extrabold text-brand-dark mb-3">暂无动态</h3>
            <p className="text-gray-500 font-medium">目前还没有发布任何新闻内容，请稍后再来查看。</p>
          </div>
        )}
      </main>
    </div>
  );
}
