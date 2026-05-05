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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-4 tracking-tight">About Myklens</h1>
          <p className="text-gray-800 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
            Founded in 2005, Myklens specializes in toilet cleaning blocks, air fresheners and liquid detergents — trusted on five continents and serving global brands as a certified OEM / ODM partner.
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
                18 years of expertise in<br/><span className="text-brand-primary">home cleaning manufacturing.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                <strong className="text-brand-dark">Our Story.</strong> Founded in 2005, Myklens specializes in toilet cleaning blocks, air fresheners and liquid detergents. Certified by WOOLWORTHS and an ISSA member, our products reach five continents with authentic international quality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                <strong className="text-brand-dark">Our Team.</strong> With 18 years of expertise and Level 3 Safety Production certification, our dedicated team ensures consistent quality that keeps global buyers returning. From R&D to logistics, we deliver trust in every product.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-8 border-t border-gray-100">
                <div>
                  <div className="text-4xl font-extrabold text-brand-primary mb-2">5</div>
                  <div className="text-gray-500 font-medium">Continents Reached</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-brand-primary mb-2">18+</div>
                  <div className="text-gray-500 font-medium">Years of Expertise</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border border-gray-100 bg-gray-50">
                <video
                  src="/bj/about.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl z-20 border border-gray-100 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center text-white shrink-0">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-brand-dark text-xl">Trusted Quality</h4>
                    <p className="text-gray-500 text-sm font-medium">ISSA Member · WOOLWORTHS Certified</p>
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
              <img src="/factory/rd.jpg" alt="R&D Laboratory" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white font-bold text-xl">In-house R&D Laboratory</h4>
              </div>
            </div>
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden group shadow-sm relative">
              <img src="/factory/exhibition.jpg" alt="Industry Exhibitions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white font-bold text-xl">Global Trade Exhibitions</h4>
              </div>
            </div>
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden group shadow-sm relative">
              <img src="/factory/production.jpg" alt="Production Workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white font-bold text-xl">Production Workshop</h4>
              </div>
            </div>
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden group shadow-sm relative">
              <img src="/factory/equipment.jpg" alt="Automated Filling Line" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white font-bold text-xl">Automated Filling & Packaging Lines</h4>
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
Myklens runs a dedicated cleaning R&D laboratory with 18 years of formulation expertise across toilet cleaning blocks, air fresheners and liquid detergents — supporting custom fragrances, plant-based extracts and gentle, family-safe formulations.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-brand-secondary text-brand-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-dark mb-4">Strict Quality Control</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
Our facility is certified under Level 3 Safety Production. We are a WOOLWORTHS-approved supplier and ISSA member — every batch goes through stability, microbial and visual inspections before shipment to ensure worry-free global export.
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
