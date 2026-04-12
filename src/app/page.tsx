import Image from "next/image";
import { Award, Globe, ChevronDown, Search, Menu, ArrowRight, PlayCircle, ChevronRight, FlaskConical, Check, Download, Phone, Mail } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryMatrix from "@/components/CategoryMatrix";
import ProductGrid from "@/components/ProductGrid";
import ArticleShowcase from "@/components/ArticleShowcase";

async function getCategories() {
  try {
    const res = await fetch('http://45.145.229.20:6411/?rest_route=/wc/store/v1/products/categories', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    if (!res.ok) return [];
    const data = JSON.parse(JSON.stringify(await res.json()).replace(/http:\/\/45\.145\.229\.20:6411/g, '/wp-proxy'));
    return data;
  } catch (e) {
    console.error("Failed to fetch categories", e);
    return [];
  }
}

async function getProducts() {
  try {
    const res = await fetch('http://45.145.229.20:6411/?rest_route=/wc/store/v1/products', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    if (!res.ok) return [];
    const data = JSON.parse(JSON.stringify(await res.json()).replace(/http:\/\/45\.145\.229\.20:6411/g, '/wp-proxy'));
    return data;
  } catch (e) {
    console.error("Failed to fetch products", e);
    return [];
  }
}

async function getPosts() {
  try {
    const res = await fetch('http://45.145.229.20:6411/?rest_route=/wp/v2/posts&_embed=1&per_page=3', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    if (!res.ok) return [];
    const data = JSON.parse(JSON.stringify(await res.json()).replace(/http:\/\/45\.145\.229\.20:6411/g, '/wp-proxy'));
    return data;
  } catch (e) {
    console.error("Failed to fetch posts", e);
    return [];
  }
}

export default async function Home() {
  const [categories, products, posts] = await Promise.all([
    getCategories(),
    getProducts(),
    getPosts()
  ]);

  return (
    <div className="bg-[#f8f9fa] flex-1 flex flex-col">
{/* 1. 首屏大片轮播 */}
      <HeroCarousel />

      {/* 2. 品类导流矩阵 (从 WooCommerce 动态拉取) */}
      <CategoryMatrix categories={categories} />

      {/* 3. 功效与科技 */}
      <section className="py-24 bg-brand-secondary overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img src="/bj/02.gif" alt="Science of scent" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-lavender rounded-full blur-3xl z-0"></div>
              <div className="absolute bottom-10 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs border border-gray-100">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                    <FlaskConical className="w-6 h-6" />
                  </div>
                  <div className="font-extrabold text-2xl text-brand-dark">专利级</div>
                </div>
                <p className="text-sm font-medium text-brand-gray">靶向微胶囊爆香技术，摩擦生香，抵御异味长达12周。</p>
              </div>
            </div>

            <div className="space-y-10 lg:pl-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">不仅是清洁，<br/>更是前所未有的感官体验。</h2>
                <p className="text-xl text-brand-gray leading-relaxed">
                  PURA 研发实验室与全球顶级香精公司深度合作。我们的配方不仅能有效瓦解顽固污渍，更能带来如高级香水般的层次感。
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white">
                      <Check className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-2">99.9% 活氧深层除菌</h4>
                    <p className="text-brand-gray font-medium">采用活氧（Oxy-Action）技术，深入织物纤维与死角，连根拔起细菌与螨虫。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white">
                      <Check className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-2">温和亲肤环保配方</h4>
                    <p className="text-brand-gray font-medium">无磷、无荧光增白剂、无刺激性防腐剂。对婴幼儿及敏感肌肤安全无害。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white">
                      <Check className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-2">高级定制香氛矩阵</h4>
                    <p className="text-brand-gray font-medium">拥有数百种成熟香型库（木质调、花香调、海洋调），支持品牌方私有香型定制。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 热门产品展示区 (从 WooCommerce 动态拉取) */}
      <ProductGrid products={products} />

      {/* 4. 消费者教育 */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">只需三步，唤醒衣物澎湃香气。</h2>
            <p className="text-xl text-brand-gray">了解如何正确使用我们的明星产品——留香珠，以达到最佳的护衣效果。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
            <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-px bg-dashed border-t-2 border-gray-200 -translate-y-1/2 z-0 w-2/3 mx-auto"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-brand-secondary border-8 border-white shadow-xl flex items-center justify-center mb-8 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=400" alt="Pour beads" className="w-full h-full object-cover" />
              </div>
              <div className="text-brand-primary font-black text-xl mb-2">STEP 1</div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">直接倒入洗衣机内筒</h3>
              <p className="text-brand-gray font-medium">取适量香珠（约半盖），直接撒入空的洗衣机滚筒底部。请勿将香珠放入洗涤剂槽中。</p>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-brand-secondary border-8 border-white shadow-xl flex items-center justify-center mb-8 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=400" alt="Add clothes" className="w-full h-full object-cover" />
              </div>
              <div className="text-brand-primary font-black text-xl mb-2">STEP 2</div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">放入待洗衣物</h3>
              <p className="text-brand-gray font-medium">将需要洗涤的衣物放在香珠上方。香珠在水流的作用下会均匀渗透至每一寸纤维。</p>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-brand-secondary border-8 border-white shadow-xl flex items-center justify-center mb-8 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=400" alt="Add detergent" className="w-full h-full object-cover" />
              </div>
              <div className="text-brand-primary font-black text-xl mb-2">STEP 3</div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">加入日常洗涤剂</h3>
              <p className="text-brand-gray font-medium">按正常洗衣流程，在相应的洗涤剂槽中加入洗衣液或洗衣凝珠，开始洗涤程序。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 文章展示区 */}
      <ArticleShowcase posts={posts} />

      {/* 5. 询盘表单 */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1563452675059-cf5697693fc7?auto=format&fit=crop&q=80&w=2000" alt="Factory" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-brand-dark/90"></div>

        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">您的世界级<br/>制造与研发后盾。</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10 font-medium">
                作为日化行业的幕后英雄，我们为全球多个知名零售商品牌（Private Label）提供从概念到货架的端到端制造服务。20,000平米智能工厂，为您保障产能与品质。
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="text-4xl font-black text-brand-accent mb-2">15+</div>
                  <div className="text-gray-400 font-bold uppercase tracking-wider text-sm">年行业经验</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-accent mb-2">300+</div>
                  <div className="text-gray-400 font-bold uppercase tracking-wider text-sm">成熟可商用配方</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-accent mb-2">10w+</div>
                  <div className="text-gray-400 font-bold uppercase tracking-wider text-sm">每日产能 (瓶/盒)</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-accent mb-2">ISO</div>
                  <div className="text-gray-400 font-bold uppercase tracking-wider text-sm">GMPC / SGS 认证</div>
                </div>
              </div>

              <a href="#" className="inline-flex items-center bg-white text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all">
                下载工厂资质手册 PDF <Download className="w-5 h-5 ml-2" />
              </a>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl text-brand-dark relative">
              <h3 className="text-3xl font-extrabold mb-2">开启您的品牌定制</h3>
              <p className="text-brand-gray font-medium mb-8">填写以下信息，我们的业务大客户经理将在24小时内与您联系，并安排免费样品寄送。</p>
              
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2">您的姓名 *</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">公司名称 *</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">企业邮箱 *</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">意向产品分类</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition appearance-none">
                    <option>洗衣香珠 / 凝珠系列</option>
                    <option>衣物柔顺剂 / 洗衣液</option>
                    <option>马桶与卫浴清洁</option>
                    <option>厨房重油污清洁</option>
                    <option>其他定制需求</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-primary/90 transition shadow-lg mt-4">
                  提交询盘申请
                </button>
                <p className="text-xs text-gray-400 text-center mt-4">提交即代表您同意我们的隐私政策。您的信息将被严格保密。</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}