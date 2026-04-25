import { ChevronRight, FlaskConical, Factory, Workflow, ShieldCheck, Palette, Trophy, CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import CaseMarquee from "@/components/CaseMarquee";

export const metadata: Metadata = {
  title: "OEM / ODM Manufacturing Services | MyKlens",
  description: "End-to-end OEM and ODM home cleaning manufacturing — R&D, large-scale production, one-stop service, certified QC, custom packaging and successful global brand cases.",
};

const RD_HIGHLIGHTS = [
  "300+ ready commercial formulas across laundry, bathroom, kitchen, and appliance care",
  "20+ in-house chemists & senior fragrance designers",
  "Stability, microbial, and compatibility testing labs",
  "Co-development with global top-tier fragrance houses",
];

const CAPACITY_METRICS = [
  { num: "20,000", unit: "m²", label: "Smart Factory" },
  { num: "100,000+", unit: "pcs", label: "Daily Capacity" },
  { num: "12", unit: "lines", label: "Automated Filling Lines" },
  { num: "ISO", unit: "Class", label: "Workshop Standards" },
];

const SERVICE_FLOW = [
  { step: "01", title: "Consultation", desc: "Briefing call to understand your brand positioning, target market and budget." },
  { step: "02", title: "Formula & Design", desc: "Match from our 300+ library or co-develop a new exclusive formula and packaging." },
  { step: "03", title: "Sampling", desc: "Free physical samples within 7-15 days; iterate fragrance, color and pack." },
  { step: "04", title: "Mass Production", desc: "Automated filling lines with 100% in-line QC; flexible MOQ from 3,000 pcs." },
  { step: "05", title: "QC & Compliance", desc: "Pre-shipment inspection, COA, MSDS, and target-market regulatory documents." },
  { step: "06", title: "Global Logistics", desc: "FOB / CIF / DDP shipping support to 60+ countries via trusted forwarders." },
];

const CERTIFICATIONS = [
  { name: "ISO 9001", desc: "Quality Management" },
  { name: "ISO 14001", desc: "Environmental Management" },
  { name: "GMPC", desc: "Good Manufacturing Practice for Cosmetics" },
  { name: "SGS", desc: "Independent Lab Testing" },
  { name: "BSCI", desc: "Social Compliance Audit" },
  { name: "SMETA", desc: "Ethical Trade Audit" },
  { name: "REACH", desc: "EU Chemical Compliance" },
  { name: "MSDS / COA", desc: "Per-batch Documentation" },
];

const CUSTOMIZATION = [
  { icon: FlaskConical, title: "Formula", desc: "Concentration, fragrance, color, plant-based or eco-certified options." },
  { icon: Palette, title: "Packaging", desc: "Bottle, pouch, sheet, sachet, tablet — customizable shape, label and gift box." },
  { icon: ShieldCheck, title: "Compliance", desc: "Region-specific labeling: FDA, EU CLP, GHS, halal certification on request." },
  { icon: Trophy, title: "Branding", desc: "Logo printing, embossing, multi-language artwork and brand-book alignment." },
];

const PARTNERS = [
  "North America Retail Group",
  "EU Discount Chain",
  "Middle East Hypermarket",
  "Australian E-commerce DTC",
  "Latin America Distributor",
  "Southeast Asia Retailer",
];

export default function OemOdmPage() {
  return (
    <div className="bg-[#f8f9fa] flex-1 flex flex-col">
      {/* Hero */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat border-b border-gray-200"
        style={{ backgroundImage: "url('/bj/dp.webp')" }}
      >
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-brand-primary tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
            <span>OEM / ODM SERVICES</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark mb-5 tracking-tight">
            Your One-Stop Manufacturing Partner
          </h1>
          <p className="text-gray-800 font-medium text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            From formula and packaging design to mass production and global logistics — we manufacture premium home cleaning products under your brand.
          </p>
          <p className="text-gray-600 font-bold flex items-center justify-center text-sm">
            <a href="/" className="hover:text-brand-primary transition">Home</a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-brand-primary">OEM / ODM</span>
          </p>
        </div>
      </section>

      {/* 1. R&D & Innovation */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary font-bold rounded-full text-sm mb-6">01 · R&D AND INNOVATION</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-dark leading-tight">
              World-class formulation, <br />ready for your brand.
            </h2>
            <p className="text-xl text-brand-gray mb-8 font-medium leading-relaxed">
              Our R&D team has spent 15+ years developing and refining home-cleaning formulas that balance performance, safety and sustainability. Every formula we ship is benchmarked against leading global brands.
            </p>
            <ul className="space-y-4">
              {RD_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-brand-dark font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="/bj/bubble.jpg" alt="R&D laboratory" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl max-w-xs hidden md:block border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <FlaskConical className="w-6 h-6 text-brand-primary" />
                <span className="font-extrabold text-brand-dark">300+ Formulas</span>
              </div>
              <p className="text-sm text-brand-gray font-medium">Ready library + custom co-development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Production & Capacity */}
      <section className="py-24 bg-brand-secondary relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-white text-brand-primary font-bold rounded-full text-sm mb-6">02 · PRODUCTION & CAPACITY</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-dark leading-tight">Scale that delivers on time.</h2>
            <p className="text-xl text-brand-gray font-medium leading-relaxed">
              A 20,000 m² automated smart factory with 12 dedicated filling lines guarantees on-time delivery for high-volume retail launches.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CAPACITY_METRICS.map((m) => (
              <div key={m.label} className="bg-white rounded-3xl p-8 text-center shadow-sm">
                <div className="text-4xl md:text-5xl font-black text-brand-primary mb-1">
                  {m.num}
                  <span className="text-lg ml-1 text-brand-gray font-bold">{m.unit}</span>
                </div>
                <div className="text-brand-gray font-bold uppercase tracking-wider text-xs mt-2">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. One-stop Service Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary font-bold rounded-full text-sm mb-6">03 · ONE-STOP SERVICE FLOW</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-dark leading-tight">From idea to shelf — all under one roof.</h2>
            <p className="text-xl text-brand-gray font-medium leading-relaxed">
              We handle every step of the manufacturing journey so your team can focus on brand and sales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_FLOW.map((s) => (
              <div key={s.step} className="bg-white border-2 border-gray-100 hover:border-brand-primary/40 rounded-3xl p-8 transition-all hover:shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center font-black text-xl">
                    {s.step}
                  </div>
                  <Workflow className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-extrabold text-brand-dark mb-3">{s.title}</h3>
                <p className="text-brand-gray font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. QC & Certifications */}
      <section className="py-24 bg-brand-dark text-white relative">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-white/10 text-brand-accent font-bold rounded-full text-sm mb-6">04 · QUALITY & CERTIFICATIONS</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Audited. Certified. Trusted.</h2>
            <p className="text-xl text-gray-300 font-medium leading-relaxed">
              Strict QC at every production stage — backed by globally recognized standards and third-party audits.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((c) => (
              <div key={c.name} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition">
                <div className="w-14 h-14 rounded-full bg-brand-primary/20 text-brand-accent flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="font-extrabold text-lg mb-1">{c.name}</h3>
                <p className="text-gray-400 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Customization Options */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary font-bold rounded-full text-sm mb-6">05 · CUSTOMIZATION OPTIONS</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-dark leading-tight">Tailored to your brand DNA.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CUSTOMIZATION.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="bg-brand-secondary rounded-3xl p-8 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white text-brand-primary flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-dark mb-3">{c.title}</h3>
                  <p className="text-brand-gray font-medium leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Cases / Partners */}
      <section className="py-24 bg-brand-secondary">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-1.5 bg-white text-brand-primary font-bold rounded-full text-sm mb-6">06 · SUCCESS CASES & PARTNERS</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-dark leading-tight">Trusted by global brands.</h2>
            <p className="text-xl text-brand-gray font-medium leading-relaxed">
              We&apos;ve manufactured private-label home cleaning lines for retailers and DTC brands across 60+ countries.
            </p>
          </div>

          {/* Auto-scrolling case carousel */}
          <div className="mb-16">
            <CaseMarquee />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {PARTNERS.map((p) => (
              <div key={p} className="bg-white rounded-2xl py-8 px-4 text-center shadow-sm border border-gray-100 flex items-center justify-center">
                <Factory className="w-6 h-6 text-brand-primary/40 mr-2" />
                <span className="text-brand-dark font-bold text-sm">{p}</span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-3">Ready to launch your private label?</h3>
              <p className="text-brand-gray font-medium leading-relaxed">
                Tell us about your brand vision. Our key account managers will reply within 24 hours with a tailored proposal.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-primary/90 transition shadow-lg shrink-0"
            >
              Get A Quote <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
