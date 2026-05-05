import Image from "next/image";
import { Award, Globe, ChevronDown, Search, Menu, ArrowRight, PlayCircle, ChevronRight, FlaskConical, Check, Download, Phone, Mail } from "lucide-react";

async function getCategories() {
  try {
    const res = await fetch('http://45.145.229.20:6411/?rest_route=/wc/store/v1/products/categories&per_page=100', {
      cache: 'no-store'
    });
    if (!res.ok) return [];
    return JSON.parse(JSON.stringify(await res.json()).replace(/http:\/\/45\.145\.229\.20:6411/g, '/wp-proxy'));
  } catch (e) {
    console.error("Failed to fetch categories", e);
    return [];
  }
}

async function getProducts() {
  try {
    const res = await fetch('http://45.145.229.20:6411/?rest_route=/wc/store/v1/products&per_page=100', {
      cache: 'no-store'
    });
    if (!res.ok) return [];
    return JSON.parse(JSON.stringify(await res.json()).replace(/http:\/\/45\.145\.229\.20:6411/g, '/wp-proxy'));
  } catch (e) {
    console.error("Failed to fetch products", e);
    return [];
  }
}

export default async function ShopPage({ searchParams }: { searchParams: Promise<{ category?: string }> | { category?: string } }) {
  const resolvedParams = await searchParams;
  const activeCategorySlug = resolvedParams?.category;

  const [categories, allProducts] = await Promise.all([
    getCategories(),
    getProducts()
  ]);
  
  // 过滤产品
  const filteredProducts = activeCategorySlug 
    ? allProducts.filter((p: any) => p.categories.some((c: any) => c.slug === activeCategorySlug))
    : allProducts;

  return (
    <div className="bg-[#f8f9fa] flex-1 flex flex-col">
      

      {/* 面包屑 / 页面标题 */}
      <div 
        className="relative py-16 md:py-24 bg-cover bg-center bg-no-repeat flex items-center justify-center border-b border-gray-200"
        style={{ backgroundImage: "url('/bj/dp.webp')" }}
      >
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-8 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">All Products</h1>
          <p className="text-gray-600 font-bold flex items-center justify-center text-sm">
            <a href="/" className="hover:text-brand-primary transition">Home</a> 
            <ChevronRight className="w-4 h-4 mx-2" /> 
            <span className="text-brand-primary">Products</span>
          </p>
        </div>
      </div>

      {/* 产品列表主区域 */}
      <main className="flex-1 max-w-[1440px] mx-auto px-4 lg:px-8 py-16 w-full flex flex-col lg:flex-row gap-12">
        
        {/* 左侧：分类菜单 */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-28">
            <h3 className="text-lg font-extrabold text-brand-dark mb-6 border-b border-gray-100 pb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/shop" 
                  className={`block px-4 py-3 rounded-xl transition font-medium ${
                    !activeCategorySlug 
                      ? 'bg-brand-primary text-white font-bold' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-brand-primary'
                  }`}
                >
                  All Products
                </a>
              </li>
              {categories.map((cat: any) => {
                const isActive = activeCategorySlug === cat.slug;
                return (
                  <li key={cat.id}>
                    <a 
                      href={`/shop?category=${cat.slug}`}
                      className={`block px-4 py-3 rounded-xl transition font-medium flex justify-between items-center ${
                        isActive 
                          ? 'bg-brand-primary text-white font-bold' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-brand-primary'
                      }`}
                    >
                      {cat.name}
                      {cat.count > 0 && (
                        <span className={`text-xs px-2 py-1 rounded-full ${isActive ? 'bg-white/20' : 'bg-gray-200'}`}>
                          {cat.count}
                        </span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <h3 className="text-lg font-extrabold text-brand-dark mb-6 border-b border-gray-100 pb-4 mt-10">
              Filter by Use Case
            </h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 text-brand-primary rounded border-gray-300 focus:ring-brand-primary" />
                  <span className="group-hover:text-brand-primary transition">Daily Home Care</span>
                </label>
              </li>
              <li>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 text-brand-primary rounded border-gray-300 focus:ring-brand-primary" />
                  <span className="group-hover:text-brand-primary transition">Heavy Kitchen Grease</span>
                </label>
              </li>
              <li>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 text-brand-primary rounded border-gray-300 focus:ring-brand-primary" />
                  <span className="group-hover:text-brand-primary transition">Bathroom & Deep Descaling</span>
                </label>
              </li>
              <li>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 text-brand-primary rounded border-gray-300 focus:ring-brand-primary" />
                  <span className="group-hover:text-brand-primary transition">B2B Bulk Packaging</span>
                </label>
              </li>
            </ul>
          </div>
        </aside>

        {/* 右侧：产品网格 */}
        <section className="flex-1">
          {/* 工具栏：排序与展示统计 */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 gap-4">
            <p className="text-gray-500 font-medium text-sm">
              Found <span className="font-bold text-brand-dark">{filteredProducts.length}</span> products
            </p>
            <div className="flex items-center space-x-2 text-sm font-medium">
              <span className="text-gray-500">Sort by:</span>
              <select className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-primary">
                <option>Default</option>
                <option>Newest</option>
                <option>Best Sellers</option>
              </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product: any) => (
                <a key={product.id} href={`/product/${product.slug}`} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                  <div className="relative aspect-square bg-gray-50 p-8 flex items-center justify-center">
                    {product.images && product.images.length > 0 ? (
                      <img 
                        src={product.images[0].src} 
                        alt={product.name} 
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                      />
                    ) : (
                      <div className="text-gray-400 font-medium">No image</div>
                    )}
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-brand-dark mb-1 group-hover:text-brand-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    
                    {product.categories && product.categories.length > 0 && (
                      <p className="text-brand-gray font-medium text-xs mb-3">
                        {product.categories[0].name}
                      </p>
                    )}

                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 text-brand-primary fill-current" viewBox="0 0 20 20">
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
          ) : (
            <div className="bg-white rounded-3xl p-16 text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">No products in this category</h3>
              <p className="text-gray-500 mb-6">Try browsing another category or view all products.</p>
              <a href="/shop" className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
                Back to All Products
              </a>
            </div>
          )}
        </section>
      </main>

      
    </div>
  );
}
