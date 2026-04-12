import Image from "next/image";
import { Award, Globe, ChevronDown, Search, Menu, ChevronRight, MapPin, Phone, Mail, Clock, Send } from "lucide-react";

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

export default async function ContactPage() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-4 tracking-tight">联系我们</h1>
          <p className="text-gray-800 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
            无论是 OEM/ODM 代工需求、配方定制，还是批量采购询价，我们的资深业务总监将在 24 小时内为您提供专属解答与专业服务。
          </p>
          <p className="text-gray-600 font-bold flex items-center justify-center text-sm">
            <a href="/" className="hover:text-brand-primary transition">首页</a> 
            <ChevronRight className="w-4 h-4 mx-2" /> 
            <span className="text-brand-primary">关于我们 / 联系我们</span>
          </p>
        </div>
      </div>

      {/* 联系主体区域 */}
      <main className="flex-1 max-w-[1440px] mx-auto px-4 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          
          {/* 左侧：联系信息 */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-dark mb-6">获取全球支持</h2>
              <p className="text-brand-gray font-medium text-lg leading-relaxed">
                Pura Group 拥有全球化的销售与服务网络。我们在多个时区设有联络代表，以便更快、更准地响应您的企业级代工需求。
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary shrink-0 mr-5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-2">全球研发中心及总部</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">中国广东省广州市白云区<br/>高新技术产业园 88 号 研发科技楼</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary shrink-0 mr-5">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-2">大客户专线</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">+86 400-123-4567<br/>+86 (020) 8888-9999</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary shrink-0 mr-5">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-2">电子邮件</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    业务询价: <a href="mailto:sales@puragroup.com" className="text-brand-primary hover:underline">sales@puragroup.com</a><br/>
                    研发合作: <a href="mailto:rd@puragroup.com" className="text-brand-primary hover:underline">rd@puragroup.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary shrink-0 mr-5">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-2">营业与服务时间</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">周一至周五：09:00 - 18:00 (GMT+8)<br/>收到询盘后 24 小时内必回复</p>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：高级询盘表单 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-gray-100 relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4 relative z-10">在线提交您的询盘项目</h3>
              <p className="text-gray-500 font-medium mb-10 relative z-10 text-lg">填写下方表单，我们将为您安排专属的大客户经理进行 1 对 1 对接，并寄送最新研发样品。</p>

              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">您的姓名 / 称呼 *</label>
                    <input type="text" placeholder="如：张经理" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">公司名称 *</label>
                    <input type="text" placeholder="贵公司的全称" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">企业邮箱 *</label>
                    <input type="email" placeholder="example@company.com" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">联系电话 *</label>
                    <input type="tel" placeholder="您的手机号码或座机" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">需求类型 *</label>
                  <div className="relative">
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 pr-12 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition appearance-none text-brand-dark font-medium">
                      <option>OEM 贴牌代工 / 大批量定制</option>
                      <option>ODM 联合研发与全案策划</option>
                      <option>申请索取免费实物样品</option>
                      <option>寻找供应链分销合作</option>
                      <option>工厂验厂与实地考察预约</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-gray-500">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">详细需求描述 *</label>
                  <textarea 
                    rows={5} 
                    placeholder="请简要描述您的需求。例如：所需的产品类型（如留香珠、凝珠）、预估的采购量、是否需要特殊香型或环保认证，以及目标销售国家等..." 
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition resize-none text-brand-dark" 
                    required
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button type="button" className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-xl hover:bg-brand-primary/90 hover:-translate-y-1 transition-all shadow-xl shadow-brand-primary/30 flex items-center justify-center">
                    发送询盘申请 <Send className="w-5 h-5 ml-3" />
                  </button>
                  <p className="text-sm text-gray-400 text-center mt-6">
                    我们承诺严格保护您的商业机密。提交即代表同意我们的<a href="#" className="underline hover:text-brand-primary">隐私保护政策</a>。
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>

      
    </div>
  );
}
