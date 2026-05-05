import Image from "next/image";
import { Award, Globe, ChevronDown, Search, Menu, ChevronRight, Check, Phone, Mail } from "lucide-react";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import ProductInquiryActions from "@/components/ProductInquiryActions";
import CollapsibleProductDescription from "@/components/CollapsibleProductDescription";

async function getProduct(slug: string) {
  try {
    const res = await fetch(`http://45.145.229.20:6411/?rest_route=/wc/store/v1/products&slug=${slug}`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return null;
    const data = JSON.parse(JSON.stringify(await res.json()).replace(/http:\/\/45\.145\.229\.20:6411/g, '/wp-proxy'));
    return data.length > 0 ? data[0] : null;
  } catch (e) {
    console.error("Failed to fetch product", e);
    return null;
  }
}

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

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const [product, categories] = await Promise.all([
    getProduct(slug),
    getCategories()
  ]);

  if (!product) {
    notFound();
  }

  const category = product.categories?.[0];

  return (
    <div className="bg-[#f8f9fa] flex-1 flex flex-col">
      

      {/* 面包屑 */}
      <div className="bg-brand-secondary py-6 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <p className="text-brand-gray font-medium flex items-center text-sm">
            <a href="/" className="hover:text-brand-primary transition">Home</a> 
            <ChevronRight className="w-4 h-4 mx-2" /> 
            <a href="/shop" className="hover:text-brand-primary transition">Products</a> 
            {category && (
              <>
                <ChevronRight className="w-4 h-4 mx-2" /> 
                <a href={`/shop?category=${category.slug}`} className="hover:text-brand-primary transition">{category.name}</a>
              </>
            )}
            <ChevronRight className="w-4 h-4 mx-2" /> 
            <span className="text-brand-primary font-bold line-clamp-1">{product.name}</span>
          </p>
        </div>
      </div>

      {/* 产品详情主区域 */}
      <main className="flex-1 max-w-[1440px] mx-auto px-4 lg:px-8 py-16 w-full">
        
        {/* 产品信息首屏 */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-16 mb-16">
          
          {/* 左侧：产品图片展示 (客户端组件) */}
          <ProductGallery images={product.images || []} productName={product.name} />

          {/* 右侧：产品参数与询盘 */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {category && (
              <a href={`/shop?category=${category.slug}`} className="inline-block text-brand-primary font-bold text-sm mb-4 hover:underline">
                {category.name}
              </a>
            )}
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-brand-primary fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-brand-gray font-medium">B2B Certified / Customizable Formula</span>
            </div>

            <CollapsibleProductDescription html={product.short_description || '<p>No short description.</p>'} />

            <ProductInquiryActions productName={product.name} />

            <ul className="mt-10 space-y-4 border-t border-gray-100 pt-8 text-sm text-gray-500 font-medium">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-brand-primary mr-3" />
                Support OEM / ODM private label customization
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-brand-primary mr-3" />
                Worldwide supply chain, complies with multi-country export standards
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-brand-primary mr-3" />
                Dedicated 1-on-1 R&D engineer support
              </li>
            </ul>
          </div>
        </div>

        {/* 产品详细描述 Tab / 内容区 */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex border-b border-gray-100 bg-gray-50 px-8 pt-8 gap-8">
            <button className="pb-4 font-bold text-brand-primary border-b-4 border-brand-primary text-lg">
              Product Details
            </button>
            <button className="pb-4 font-medium text-gray-400 hover:text-brand-dark transition text-lg border-b-4 border-transparent">
              Specs & Packaging
            </button>
            <button className="pb-4 font-medium text-gray-400 hover:text-brand-dark transition text-lg border-b-4 border-transparent">
              Formula & MSDS
            </button>
          </div>
          <div className="p-8 md:p-16">
            <div 
              className="
                prose prose-lg prose-brand max-w-none text-gray-600 
                prose-headings:text-brand-dark prose-headings:font-bold
                prose-a:text-brand-primary
                
                /* 表格样式定制 - 实现截图中的虚线表格效果 */
                prose-table:w-full prose-table:border-collapse
                prose-td:border prose-td:border-dashed prose-td:border-gray-300 prose-td:p-3 prose-td:text-base
                prose-th:border prose-th:border-dashed prose-th:border-gray-300 prose-th:p-3 prose-th:text-left prose-th:bg-gray-50 prose-th:text-brand-dark
                
                /* 图片样式定制 - 保持图片原始大小，不要强制拉伸导致模糊 */
                prose-img:rounded-2xl prose-img:shadow-sm prose-img:mx-auto prose-img:my-8 prose-img:max-w-full
                
                /* 段落样式定制 */
                prose-p:leading-relaxed prose-p:mb-6
                
                /* 加粗文字 */
                prose-strong:text-brand-dark prose-strong:font-extrabold
              "
              dangerouslySetInnerHTML={{ __html: product.description || '<p>No detailed description.</p>' }}
            />
          </div>
        </div>

      </main>

      
    </div>
  );
}
