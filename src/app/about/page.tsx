import Image from "next/image";
import { Award, Globe, ChevronDown, Search, Menu, ChevronRight, ShieldCheck, Leaf, Microscope, Building2, Phone, Mail } from "lucide-react";
import JourneyTimeline from "@/components/JourneyTimeline";

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-4 tracking-tight">About MyKlens</h1>
          <p className="text-gray-800 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
            A world-leading home cleaning OEM/ODM manufacturer. We harness science and nature to deliver clean, safe and refreshing living for families everywhere.
          </p>
          <p className="text-gray-600 font-bold flex items-center justify-center text-sm">
            <a href="/" className="hover:text-brand-primary transition">Home</a> 
            <ChevronRight className="w-4 h-4 mx-2" /> 
            <span className="text-brand-primary">About Us</span>
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
                Source Factory Direct
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight">
                Over 20 years of<br/><span className="text-brand-primary">specialty chemical manufacturing.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                MyKlens was founded in 2004 and is headquartered in Guangdong, China — the world&apos;s manufacturing hub. As an internationally renowned daily-chemical OEM/ODM manufacturer, we provide one-stop product incubation and supply-chain manufacturing services to 300+ brands across 50+ countries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                From laundry pods, scent boosters and heavy-duty kitchen degreasers to fabric softeners — we operate 50,000 m² of GMPC-class cleanroom workshops and dozens of fully automated filling lines, with annual capacity exceeding 100,000 tonnes.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-8 border-t border-gray-100">
                <div>
                  <div className="text-4xl font-extrabold text-brand-primary mb-2">50,000+</div>
                  <div className="text-gray-500 font-medium">m² Modern Facility</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-brand-primary mb-2">300+</div>
                  <div className="text-gray-500 font-medium">Global Brand Partners</div>
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
                    <h4 className="font-extrabold text-brand-dark text-xl">Consistent Quality</h4>
                    <p className="text-gray-500 text-sm font-medium">ISO 9001 Quality System</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop & R&D environment showcase */}
      <section className="py-24 bg-brand-secondary/30">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6">Modern Production & R&D Environment</h2>
            <p className="text-lg text-gray-500 font-medium">World-class hardware is the foundation of outstanding quality. Fully automated lines and a top-tier R&D lab keep capability within reach.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden group shadow-sm relative">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" alt="R&D Laboratory" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white font-bold text-xl">Premium Cleaning R&D Lab</h4>
              </div>
            </div>
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden group shadow-sm relative">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" alt="Modern Office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white font-bold text-xl">Global Business Support Center</h4>
              </div>
            </div>
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden group shadow-sm relative">
              <img src="https://images.unsplash.com/photo-1563452675059-cf5697693fc7?auto=format&fit=crop&q=80&w=1200" alt="Cleanroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white font-bold text-xl">Class 100,000 GMPC Cleanroom</h4>
              </div>
            </div>
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden group shadow-sm relative">
              <img src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1200" alt="Filling Line" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white font-bold text-xl">Fully Automated Filling & Packaging</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6">Our Journey</h2>
            <p className="text-lg text-gray-500 font-medium">Two decades of dedication, building world-class home-cleaning manufacturing capability — every milestone proves our commitment.</p>
          </div>

          <JourneyTimeline />
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6">Why partner with us?</h2>
            <p className="text-lg text-gray-500 font-medium">From formulation to finished product — we control every key stage to deliver an irreplicable competitive edge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-secondary text-brand-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Microscope className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-dark mb-4">Cutting-edge R&D</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                MyKlens runs a dedicated cleaning R&D laboratory. We partner deeply with global top-tier fragrance houses and chemical suppliers, with 2,000+ proven formulas — supporting microcapsule scent technology, plant-based extracts, and hypoallergenic mild formulations.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-secondary text-brand-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-dark mb-4">Strict Quality Control</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                All workshops meet Class 100,000 GMPC standards. We strictly follow ISO 9001, SMETA, CE and EPA guidelines. Every batch undergoes dozens of stability, microbial and heavy-metal tests before shipment to ensure worry-free global export.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-secondary text-brand-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-dark mb-4">Sustainability & ESG</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                We practice green manufacturing — phosphate-free, brightener-free and biodegradable formulas. Our packaging supports PCR (Post-Consumer Recycled) plastic, helping your brand fulfill its ESG commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
