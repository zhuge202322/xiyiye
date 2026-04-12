import { Award, Globe, ChevronDown, Search, Menu } from "lucide-react";

async function getCategories() {
  try {
    const res = await fetch('http://45.145.229.20:6411/?rest_route=/wc/store/v1/products/categories', {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return [];
    return JSON.parse(JSON.stringify(await res.json()).replace(/http:\/\/45\.145\.229\.20:6411/g, '/wp-proxy'));
  } catch (e) {
    return [];
  }
}

export default async function Header() {
  const categories = await getCategories();

  return (
    <>
      {/* 顶部工具栏 (Top Bar) */}
      <div className="bg-brand-primary text-white text-xs font-medium py-2 px-6 hidden lg:block">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-secondary transition">全球领先的日化 OEM/ODM 源头工厂</a>
            <a href="#" className="hover:text-brand-secondary transition flex items-center">
              <Award className="w-3 h-3 mr-1" /> ISO 9001 & GMPC 认证
            </a>
          </div>
          <div className="flex space-x-6 items-center">
            <a href="#" className="hover:text-brand-secondary transition">B2B 采购门户</a>
            <a href="#" className="hover:text-brand-secondary transition">投资者关系</a>
            <div className="flex items-center cursor-pointer hover:text-brand-secondary transition">
              <Globe className="w-3 h-3 mr-1" /> Global / English
            </div>
          </div>
        </div>
      </div>

      {/* 主导航栏 */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm relative">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">欧</div>
            <div className="text-xl md:text-2xl font-extrabold text-brand-primary">中山欧得宝家庭用品有限公司</div>
          </a>
          
          <nav className="hidden lg:flex h-full">
            <div className="flex h-full">
              <div className="group h-full">
                <a href="/shop" className="px-5 h-full flex items-center text-sm font-bold text-brand-dark group-hover:text-brand-primary border-b-2 border-transparent group-hover:border-brand-primary transition cursor-default">
                  产品分类 <ChevronDown className="w-4 h-4 ml-1" />
                </a>
                
                {/* 超级下拉菜单 */}
                <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-10 flex gap-12">
                    <div className="w-64 shrink-0 flex flex-col space-y-4 border-r border-gray-100 pr-8">
                      {categories.map((cat: any) => (
                        <a key={`link-${cat.id}`} href={`/shop?category=${cat.slug}`} className="text-gray-600 hover:text-brand-primary font-medium transition">
                          {cat.name}
                        </a>
                      ))}
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {categories.slice(0, 4).map((cat: any) => (
                        <a href={`/shop?category=${cat.slug}`} key={cat.id} className="group/card flex flex-col block">
                          <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-50 border border-gray-100">
                            {cat.image ? (
                              <img src={cat.image.src} alt={cat.name} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">暂无图片</div>
                            )}
                          </div>
                          <h4 className="font-bold text-brand-dark text-lg group-hover/card:text-brand-primary transition-colors">{cat.name}</h4>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" className="px-5 h-full flex items-center text-sm font-bold text-brand-dark hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary transition">
                厨房与硬表面清洁 <ChevronDown className="w-4 h-4 ml-1" />
              </a>
              <a href="#" className="px-5 h-full flex items-center text-sm font-bold text-brand-dark hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary transition">
                OEM/ODM 代工
              </a>
              <a href="/news" className="px-5 h-full flex items-center text-sm font-bold text-brand-dark hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary transition">
                产品新闻
              </a>
              <a href="/about" className="px-5 h-full flex items-center text-sm font-bold text-brand-dark hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary transition">
                关于我们
              </a>
              <a href="/contact" className="px-5 h-full flex items-center text-sm font-bold text-brand-dark hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary transition">
                联系我们
              </a>
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-5">
            <button className="text-brand-dark hover:text-brand-primary transition"><Search className="w-5 h-5" /></button>
            <a href="/contact" className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all shadow-md">
              获取免费样品
            </a>
          </div>
          <button className="lg:hidden text-brand-dark"><Menu className="w-6 h-6" /></button>
        </div>
      </header>
    </>
  );
}
