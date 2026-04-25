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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-4 tracking-tight">Contact Us</h1>
          <p className="text-gray-800 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
            Whether you need OEM/ODM manufacturing, formula customization, or bulk purchasing — our senior business managers will reply within 24 hours.
          </p>
          <p className="text-gray-600 font-bold flex items-center justify-center text-sm">
            <a href="/" className="hover:text-brand-primary transition">Home</a> 
            <ChevronRight className="w-4 h-4 mx-2" /> 
            <span className="text-brand-primary">Contact Us</span>
          </p>
        </div>
      </div>

      {/* Contact main */}
      <main className="flex-1 max-w-[1440px] mx-auto px-4 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          
          {/* Left: contact info */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-dark mb-6">Global Support</h2>
              <p className="text-brand-gray font-medium text-lg leading-relaxed">
                Myklens has a worldwide sales and service network. Our representatives across multiple time zones respond fast and accurately to your B2B manufacturing inquiries.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary shrink-0 mr-5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-2">Headquarters</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">Floor 8, Building 3, No. 2 Fenghuang Road,<br/>Torch Development Zone, Zhongshan City,<br/>Guangdong Province, China</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary shrink-0 mr-5">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-2">Key Account Hotline</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">+86 760-88220790<br/>+86 760-88220791<br/>WhatsApp: +86 180 2215 3690</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary shrink-0 mr-5">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-2">Email</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    <a href="mailto:contact@myklens.com" className="text-brand-primary hover:underline">contact@myklens.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary shrink-0 mr-5">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-2">Business Hours</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">Mon - Fri: 09:00 - 18:00 (GMT+8)<br/>All inquiries answered within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: inquiry form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-gray-100 relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4 relative z-10">Submit Your Inquiry</h3>
              <p className="text-gray-500 font-medium mb-10 relative z-10 text-lg">Fill out the form below and we&apos;ll assign a dedicated key account manager for 1-on-1 support, including free sample dispatch.</p>

              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">Your Name</label>
                    <input type="text" placeholder="e.g., John Smith" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">Company</label>
                    <input type="text" placeholder="Your company name" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">Email</label>
                    <input type="email" placeholder="example@company.com" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">Phone</label>
                    <input type="tel" placeholder="Your mobile or landline" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">Inquiry Type (optional)</label>
                  <div className="relative">
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 pr-12 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition appearance-none text-brand-dark font-medium">
                      <option value="">— Select (optional) —</option>
                      <option>OEM Private Label / Bulk Customization</option>
                      <option>ODM Co-development</option>
                      <option>Request Free Samples</option>
                      <option>Distribution Partnership</option>
                      <option>Factory Audit / Site Visit</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-gray-500">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">Project Details (optional)</label>
                  <textarea 
                    rows={5} 
                    placeholder="Briefly describe your needs — product type, quantity, target market, etc. Or leave blank and we&apos;ll reach out." 
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition resize-none text-brand-dark"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button type="button" className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-xl hover:bg-brand-primary/90 hover:-translate-y-1 transition-all shadow-xl shadow-brand-primary/30 flex items-center justify-center">
                    Send Inquiry <Send className="w-5 h-5 ml-3" />
                  </button>
                  <p className="text-sm text-gray-400 text-center mt-6">
                    We strictly protect your business confidentiality. By submitting, you agree to our <a href="#" className="underline hover:text-brand-primary">Privacy Policy</a>.
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
