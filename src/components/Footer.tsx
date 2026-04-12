import { Globe, Phone, Mail } from "lucide-react";

async function getCategories() {
  try {
    const res = await fetch('http://45.145.229.20:6411/?rest_route=/wc/store/v1/products/categories', {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return [];
    return await res.json();
  } catch (e) {
    return [];
  }
}

export default async function Footer() {
  const categories = await getCategories();
  
  return (
    <footer className="bg-[#f8f9fa] pt-20 border-t border-gray-200 mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center pb-16 border-b border-gray-200 mb-16 gap-8">
          <div className="max-w-xl">
            <h3 className="text-3xl font-extrabold text-brand-dark mb-2">订阅行业动态与最新配方</h3>
            <p className="text-brand-gray font-medium">获取最新的家清市场洞察、新品发布与 OEM/ODM 专享优惠。</p>
          </div>
          <div className="flex w-full lg:w-auto">
            <input type="email" placeholder="输入您的邮箱地址" className="w-full lg:w-80 border border-gray-300 rounded-l-full px-6 py-4 focus:outline-none focus:border-brand-primary" />
            <button className="bg-brand-dark text-white px-8 py-4 rounded-r-full font-bold hover:bg-black transition whitespace-nowrap">
              立即订阅
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <div className="text-2xl font-extrabold tracking-tight text-brand-primary uppercase mb-6">Pura Group</div>
            <p className="text-brand-gray text-sm mb-6 leading-relaxed">
              致力于用科技与自然的力量，为您打造极致洁净、安全且芬芳的家居生活。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition"><Globe className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition"><Mail className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition"><Phone className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-extrabold text-brand-dark mb-6">产品分类</h4>
            <ul className="space-y-4 text-brand-gray font-medium text-sm">
              {categories.map((cat: any) => (
                <li key={cat.id}>
                  <a href={`/shop?category=${cat.slug}`} className="hover:text-brand-primary transition">{cat.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-brand-dark mb-6">硬表面清洁</h4>
            <ul className="space-y-4 text-brand-gray font-medium text-sm">
              <li><a href="#" className="hover:text-brand-primary transition">厨房重油污净</a></li>
              <li><a href="#" className="hover:text-brand-primary transition">马桶除垢凝胶</a></li>
              <li><a href="#" className="hover:text-brand-primary transition">管道疏通剂</a></li>
              <li><a href="#" className="hover:text-brand-primary transition">玻璃光亮清洁剂</a></li>
              <li><a href="#" className="hover:text-brand-primary transition">地板除菌液</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-brand-dark mb-6">B2B 与合作</h4>
            <ul className="space-y-4 text-brand-gray font-medium text-sm">
              <li><a href="#" className="hover:text-brand-primary transition">OEM 贴牌代工</a></li>
              <li><a href="#" className="hover:text-brand-primary transition">ODM 研发定制</a></li>
              <li><a href="#" className="hover:text-brand-primary transition">寻找分销商</a></li>
              <li><a href="#" className="hover:text-brand-primary transition">索取样品</a></li>
              <li><a href="#" className="hover:text-brand-primary transition">工厂验厂预约</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-brand-dark mb-6">关于企业</h4>
            <ul className="space-y-4 text-brand-gray font-medium text-sm">
              <li><a href="/about" className="hover:text-brand-primary transition">企业愿景与历史</a></li>
              <li><a href="#" className="hover:text-brand-primary transition">可持续发展与 ESG</a></li>
              <li><a href="#" className="hover:text-brand-primary transition">成分与安全 (MSDS)</a></li>
              <li><a href="#" className="hover:text-brand-primary transition">新闻中心</a></li>
              <li><a href="/contact" className="hover:text-brand-primary transition">联系我们</a></li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-500">
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
            <span>© 2024 Pura Group Holdings Ltd. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-primary transition">使用条款</a>
            <a href="#" className="hover:text-brand-primary transition">隐私政策</a>
            <a href="#" className="hover:text-brand-primary transition">Cookie 政策</a>
            <a href="#" className="hover:text-brand-primary transition">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
