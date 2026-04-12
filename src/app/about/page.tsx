import Image from "next/image";
import { Award, Globe, ChevronDown, Search, Menu, ChevronRight, ShieldCheck, Leaf, Microscope, Building2, Phone, Mail } from "lucide-react";

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

export default async function AboutPage() {
  const categories = await getCategories();

  return (
    <div className="bg-[#f8f9fa] flex-1 flex flex-col">
      

      {/* 面包屑 / 页面标题 */}
      <div 
        className="relative py-16 md:py-24 bg-cover bg-center bg-no-repeat flex items-center justify-center border-b border-gray-200"
        style={{ backgroundImage: "url('/bj/dp.webp')" }}
      >
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-8 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-4 tracking-tight">关于 Pura Group</h1>
          <p className="text-gray-800 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
            全球领先的家清日化代工厂。致力于用科技与自然的力量，为您打造极致洁净、安全且芬芳的家居生活。
          </p>
          <p className="text-gray-600 font-bold flex items-center justify-center text-sm">
            <a href="/" className="hover:text-brand-primary transition">首页</a> 
            <ChevronRight className="w-4 h-4 mx-2" /> 
            <span className="text-brand-primary">关于我们</span>
          </p>
        </div>
      </div>

      {/* 企业概况介绍 */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-brand-secondary text-brand-primary font-bold rounded-full text-sm">
                <Building2 className="w-4 h-4 mr-2" />
                源头工厂直供
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight">
                超过 20 年的<br/><span className="text-brand-primary">精细化工智造经验</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Pura Group 成立于 2004 年，总部位于全球制造中心中国广东。作为国际知名的日化洗护产品 OEM/ODM 制造商，我们为全球超过 50 个国家和地区的 300+ 个知名品牌提供了一站式的产品孵化与供应链代工服务。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                从洗衣凝珠、留香珠、重油污清洁剂到各类衣物柔顺剂，我们拥有占地 50,000 平方米的 10 万级无尘净化车间（GMPC 标准），以及数十条全自动化灌装生产线，年产能超过 10 万吨。
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-8 border-t border-gray-100">
                <div>
                  <div className="text-4xl font-extrabold text-brand-primary mb-2">50,000+</div>
                  <div className="text-gray-500 font-medium">平方米现代化厂房</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-brand-primary mb-2">300+</div>
                  <div className="text-gray-500 font-medium">全球合作品牌</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border border-gray-100 bg-gray-50">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" alt="Factory Facility" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl z-20 border border-gray-100 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center text-white shrink-0">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-brand-dark text-xl">品质如一</h4>
                    <p className="text-gray-500 text-sm font-medium">ISO 9001 质量认证体系</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 办公与生产环境展示 */}
      <section className="py-24 bg-brand-secondary/30">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6">现代化生产与研发环境</h2>
            <p className="text-lg text-gray-500 font-medium">一流的硬件设施是卓越品质的基石。全自动生产线与高端研发实验室，实力触手可及。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden group shadow-sm">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" alt="实验室研发" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white font-bold text-xl">高标准的洗护研发实验室</h4>
              </div>
            </div>
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden group shadow-sm relative">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" alt="现代化办公区" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white font-bold text-xl">全球业务支持中心</h4>
              </div>
            </div>
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden group shadow-sm relative">
              <img src="https://images.unsplash.com/photo-1563452675059-cf5697693fc7?auto=format&fit=crop&q=80&w=1200" alt="无尘车间" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white font-bold text-xl">10 万级 GMPC 净化车间</h4>
              </div>
            </div>
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden group shadow-sm relative">
              <img src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1200" alt="自动灌装线" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white font-bold text-xl">全自动化灌装与包装线</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 (Timeline) */}
      <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6">我们的成长历程</h2>
            <p className="text-lg text-gray-500 font-medium">二十载深耕细作，只为成就世界级的洗护代工品质。每一步都是我们实力的见证。</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* 中间竖线 */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-brand-primary/20 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-16 relative z-10">
              {/* 节点 1 */}
              <div className="flex flex-col md:flex-row items-center md:justify-between group">
                <div className="md:w-[45%] text-left md:text-right mb-4 md:mb-0 pr-0 md:pr-12 w-full">
                  <h4 className="text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition">Pura Group 成立</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">在广东设立首个日化生产基地，正式进军洗涤细分行业，打下坚实制造基础。</p>
                </div>
                <div className="w-16 h-16 bg-white border-4 border-brand-primary rounded-full flex items-center justify-center font-extrabold text-brand-primary text-xl shrink-0 z-10 relative shadow-[0_0_20px_rgba(0,91,79,0.2)] md:my-0 my-4">
                  04
                </div>
                <div className="md:w-[45%] text-center md:text-left mt-4 md:mt-0 pl-0 md:pl-12 w-full">
                  <span className="text-6xl md:text-7xl font-black text-brand-primary/10 group-hover:text-brand-primary/20 transition duration-500">2004</span>
                </div>
              </div>

              {/* 节点 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center md:justify-between group">
                <div className="md:w-[45%] text-left mb-4 md:mb-0 pl-0 md:pl-12 w-full">
                  <h4 className="text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition">通过 GMPC 认证</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">引入国际标准质量管理体系，通过 ISO9001 认证，获得出口欧美高端市场的核心通行证。</p>
                </div>
                <div className="w-16 h-16 bg-white border-4 border-brand-primary rounded-full flex items-center justify-center font-extrabold text-brand-primary text-xl shrink-0 z-10 relative shadow-[0_0_20px_rgba(0,91,79,0.2)] md:my-0 my-4">
                  10
                </div>
                <div className="md:w-[45%] text-center md:text-right mt-4 md:mt-0 pr-0 md:pr-12 w-full">
                  <span className="text-6xl md:text-7xl font-black text-brand-primary/10 group-hover:text-brand-primary/20 transition duration-500">2010</span>
                </div>
              </div>

              {/* 节点 3 */}
              <div className="flex flex-col md:flex-row items-center md:justify-between group">
                <div className="md:w-[45%] text-left md:text-right mb-4 md:mb-0 pr-0 md:pr-12 w-full">
                  <h4 className="text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition">50,000平米新产业园落成</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">全面升级为 10 万级无尘净化车间，建立超大型自动化灌装线，产能突破 10 万吨。</p>
                </div>
                <div className="w-16 h-16 bg-white border-4 border-brand-primary rounded-full flex items-center justify-center font-extrabold text-brand-primary text-xl shrink-0 z-10 relative shadow-[0_0_20px_rgba(0,91,79,0.2)] md:my-0 my-4">
                  16
                </div>
                <div className="md:w-[45%] text-center md:text-left mt-4 md:mt-0 pl-0 md:pl-12 w-full">
                  <span className="text-6xl md:text-7xl font-black text-brand-primary/10 group-hover:text-brand-primary/20 transition duration-500">2016</span>
                </div>
              </div>

              {/* 节点 4 */}
              <div className="flex flex-col md:flex-row-reverse items-center md:justify-between group">
                <div className="md:w-[45%] text-left mb-4 md:mb-0 pl-0 md:pl-12 w-full">
                  <h4 className="text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition">产品线多元化扩充</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">推出创新洗衣凝珠、留香珠及除螨除菌液生产线，为 300+ 全球知名品牌提供高端定制。</p>
                </div>
                <div className="w-16 h-16 bg-white border-4 border-brand-primary rounded-full flex items-center justify-center font-extrabold text-brand-primary text-xl shrink-0 z-10 relative shadow-[0_0_20px_rgba(0,91,79,0.2)] md:my-0 my-4">
                  20
                </div>
                <div className="md:w-[45%] text-center md:text-right mt-4 md:mt-0 pr-0 md:pr-12 w-full">
                  <span className="text-6xl md:text-7xl font-black text-brand-primary/10 group-hover:text-brand-primary/20 transition duration-500">2020</span>
                </div>
              </div>

              {/* 节点 5 */}
              <div className="flex flex-col md:flex-row items-center md:justify-between group">
                <div className="md:w-[45%] text-left md:text-right mb-4 md:mb-0 pr-0 md:pr-12 w-full">
                  <h4 className="text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition">绿色制造与 ESG 战略</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">响应全球环保趋势，全面投用生物可降解配方与 PCR 环保包装，开启可持续代工新纪元。</p>
                </div>
                <div className="w-16 h-16 bg-brand-primary border-4 border-white rounded-full flex items-center justify-center font-extrabold text-white text-xl shrink-0 z-10 relative shadow-[0_0_20px_rgba(0,91,79,0.5)] md:my-0 my-4 scale-110">
                  24
                </div>
                <div className="md:w-[45%] text-center md:text-left mt-4 md:mt-0 pl-0 md:pl-12 w-full">
                  <span className="text-6xl md:text-7xl font-black text-brand-primary/20 transition duration-500">2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心优势 */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6">为什么选择我们作为代工伙伴？</h2>
            <p className="text-lg text-gray-500 font-medium">涵盖从配方研发到成品出厂的每一个关键环节，打造不可复制的产品竞争力。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-secondary text-brand-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Microscope className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-dark mb-4">前沿配方研发</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Pura 设有专业的洗护研发实验室。我们与全球顶尖香精公司及化工原料巨头深度合作，储备了超过 2000 个成熟配方，支持微胶囊爆香、天然植物提取、抗敏温和等多种技术定制。
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-secondary text-brand-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-dark mb-4">严苛质量控制</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                所有车间均达到 10 万级 GMPC 标准。我们严格遵循 ISO9001, SMETA, CE 以及 EPA 指导方针。产品出厂前需经过数十道耐候性、抗菌率及重金属残留测试，确保出口全球无忧。
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-secondary text-brand-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-dark mb-4">可持续与环保 (ESG)</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                我们践行绿色制造理念，提供无磷、无荧光剂、生物可降解的环保洗涤方案。同时我们的包装支持使用 PCR（消费后回收塑料），助力您的品牌履行社会环保责任。
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
