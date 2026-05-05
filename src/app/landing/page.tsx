import { ArrowRight, Award, BadgeCheck, CheckCircle2, Factory, FlaskConical, Globe2, Headset, Leaf, Mail, PackageCheck, Phone, ShieldCheck, Sparkles, Truck } from "lucide-react";

const productLines = [
  {
    title: "Toilet Cleaning Blocks",
    desc: "Long-lasting freshness, stain prevention and powerful bathroom care for retail and private-label brands.",
    image: "/bj/bubble.jpg",
  },
  {
    title: "Laundry Scent Booster Beads",
    desc: "Premium fragrance beads with customizable scents, colors, packaging and market positioning.",
    image: "/bj/beads.jpg",
  },
  {
    title: "Coffee Maker & Appliance Cleaners",
    desc: "Safe descaling and appliance-care formulas for daily home cleaning product portfolios.",
    image: "/bj/coffee.jpg",
  },
];

const proofPoints = [
  { value: "18+", label: "Years Manufacturing" },
  { value: "5", label: "Continents Served" },
  { value: "ISSA", label: "Member" },
  { value: "L3", label: "Safety Production" },
];

const benefits = [
  {
    icon: FlaskConical,
    title: "Custom Formulation",
    desc: "Create market-ready formulas for fragrance, cleaning power, sustainability and family-safe positioning.",
  },
  {
    icon: PackageCheck,
    title: "Private Label Packaging",
    desc: "Support for bottle, pouch, blister, carton and display packaging with your brand identity.",
  },
  {
    icon: Factory,
    title: "Factory Direct Supply",
    desc: "Modern production lines, in-line QC and stable lead times for bulk international orders.",
  },
  {
    icon: Globe2,
    title: "Export-ready Support",
    desc: "Experienced with global buyers across North America, Europe, Australia, the Middle East and Asia.",
  },
];

const process = [
  "Share your target market and product idea",
  "Select base formula, fragrance and packaging",
  "Receive sample confirmation and quotation",
  "Start production with quality inspection",
  "Ship by sea or air with export support",
];

export default function LandingPage() {
  return (
    <div className="bg-white text-brand-dark">
      <section className="relative overflow-hidden bg-brand-secondary/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,91,79,0.18),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(100,161,157,0.22),transparent_34%)]" />
        <div className="relative max-w-[1440px] mx-auto px-4 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-16">
            <a href="/" className="inline-flex items-center bg-white rounded-2xl px-4 py-2 shadow-sm">
              <img src="/logo.png" alt="Myklens" className="h-10 w-auto object-contain" />
            </a>
            <a href="https://wa.me/8618022153690" className="hidden sm:inline-flex items-center gap-2 bg-white text-brand-primary px-5 py-3 rounded-full font-extrabold shadow-sm hover:shadow-md transition">
              <Phone className="w-4 h-4" /> WhatsApp: +86 180 2215 3690
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center pb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/90 text-brand-primary px-4 py-2 rounded-full text-sm font-extrabold mb-6 shadow-sm">
                <Sparkles className="w-4 h-4" /> Premium Home Cleaning OEM / ODM
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.02] mb-7">
                Build Your Home Care Brand With A Trusted Factory.
              </h1>
              <p className="text-lg md:text-xl text-brand-gray font-medium leading-relaxed max-w-2xl mb-9">
                Myklens manufactures toilet cleaning blocks, air fresheners, laundry scent beads, appliance cleaners and liquid detergents for global private-label brands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#quote" className="inline-flex items-center justify-center bg-brand-primary text-white px-8 py-4 rounded-full font-extrabold text-lg shadow-lg hover:bg-brand-primary/90 transition">
                  Get Free Samples <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="/oem-odm" className="inline-flex items-center justify-center bg-white text-brand-primary px-8 py-4 rounded-full font-extrabold text-lg shadow-sm hover:shadow-md transition">
                  View OEM / ODM Service
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {proofPoints.map((item) => (
                  <div key={item.label} className="bg-white/85 backdrop-blur rounded-3xl p-5 shadow-sm">
                    <div className="text-3xl font-black text-brand-primary mb-1">{item.value}</div>
                    <div className="text-xs font-extrabold uppercase tracking-wide text-brand-gray">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white bg-white aspect-[4/3]">
                <video src="/bj/about.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-bold mb-4">
                    <ShieldCheck className="w-4 h-4" /> Certified Manufacturing Partner
                  </div>
                  <h2 className="text-3xl font-black mb-2">Factory-direct OEM / ODM</h2>
                  <p className="text-white/85 font-medium">From formulation to final shipment, we manage the complete process.</p>
                </div>
              </div>
              <div className="absolute -bottom-7 -left-4 md:-left-8 bg-white rounded-3xl p-6 shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center shrink-0">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg">WOOLWORTHS Approved</h3>
                    <p className="text-sm text-brand-gray font-medium">ISSA member factory</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-secondary text-brand-primary px-4 py-2 rounded-full text-sm font-extrabold mb-5">
              <CheckCircle2 className="w-4 h-4" /> Product Lines For Ad Campaigns
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Fast-moving home cleaning products for private label growth.</h2>
            <p className="text-xl text-brand-gray font-medium">Choose mature product systems or create a customized formula for your market.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productLines.map((item) => (
              <div key={item.title} className="group rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-80 overflow-hidden bg-brand-secondary">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                  <p className="text-brand-gray font-medium leading-relaxed mb-6">{item.desc}</p>
                  <a href="#quote" className="inline-flex items-center text-brand-primary font-extrabold hover:underline underline-offset-4">
                    Request samples <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-secondary/45">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Why advertisers and brand owners choose Myklens.</h2>
              <p className="text-xl text-brand-gray font-medium leading-relaxed mb-10">
                For Google and Facebook traffic, your landing page must quickly prove product value, supply capability and trust. Myklens gives buyers a clear path from idea to shipment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {benefits.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                      <div className="w-12 h-12 rounded-2xl bg-brand-secondary text-brand-primary flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-black mb-2">{item.title}</h3>
                      <p className="text-sm text-brand-gray font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <img src="/factory/rd.jpg" alt="R&D laboratory" className="rounded-[2rem] object-cover h-72 w-full shadow-sm" />
              <img src="/factory/production.jpg" alt="Production workshop" className="rounded-[2rem] object-cover h-72 w-full shadow-sm mt-10" />
              <img src="/factory/equipment.jpg" alt="Automated filling equipment" className="rounded-[2rem] object-cover h-72 w-full shadow-sm -mt-10" />
              <img src="/factory/certificates.png" alt="Certificates" className="rounded-[2rem] object-cover h-72 w-full shadow-sm" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-secondary text-brand-primary px-4 py-2 rounded-full text-sm font-extrabold mb-5">
                <Truck className="w-4 h-4" /> Simple OEM / ODM Process
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">From ad test idea to shelf-ready product.</h2>
              <div className="space-y-5">
                {process.map((item, index) => (
                  <div key={item} className="flex items-center gap-5 bg-gray-50 rounded-3xl p-5 border border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-black shrink-0">{index + 1}</div>
                    <p className="text-lg font-bold text-brand-dark">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="quote" className="bg-brand-dark text-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl scroll-mt-24">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-extrabold mb-5">
                <Headset className="w-4 h-4" /> Get A Quote Within 24 Hours
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Request samples or a private-label quotation.</h2>
              <p className="text-gray-300 font-medium leading-relaxed mb-8">
                Tell us your product type, target market and estimated quantity. Our team will help recommend a suitable formula and packaging solution.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full rounded-2xl bg-white px-5 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30" />
                  <input type="text" placeholder="Company" className="w-full rounded-2xl bg-white px-5 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30" />
                </div>
                <input type="email" placeholder="Email" className="w-full rounded-2xl bg-white px-5 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30" />
                <select className="w-full rounded-2xl bg-white px-5 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30">
                  <option>Toilet Cleaning Blocks</option>
                  <option>Laundry Scent Booster Beads</option>
                  <option>Air Fresheners</option>
                  <option>Liquid Detergents</option>
                  <option>Appliance Cleaners</option>
                  <option>OEM / ODM Project</option>
                </select>
                <textarea rows={5} placeholder="Tell us your formula, packaging, quantity or target market..." className="w-full rounded-2xl bg-white px-5 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30 resize-none" />
                <button type="button" className="w-full bg-brand-primary text-white py-4 rounded-2xl font-black text-lg hover:bg-brand-primary/90 transition shadow-lg">
                  Submit Inquiry
                </button>
              </form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-sm text-gray-300 font-medium">
                <a href="mailto:contact@myklens.com" className="flex items-center gap-3 hover:text-white transition"><Mail className="w-4 h-4 text-brand-accent" /> contact@myklens.com</a>
                <a href="https://wa.me/8618022153690" className="flex items-center gap-3 hover:text-white transition"><Phone className="w-4 h-4 text-brand-accent" /> +86 180 2215 3690</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-primary text-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">Ready to launch your next home cleaning product?</h2>
            <p className="text-white/80 font-medium text-lg">Start with samples, packaging ideas and factory-direct pricing.</p>
          </div>
          <a href="#quote" className="inline-flex items-center justify-center bg-white text-brand-primary px-8 py-4 rounded-full font-black text-lg hover:bg-brand-secondary transition shrink-0">
            Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <span>© {new Date().getFullYear()} myklens.com All rights reserved.</span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="inline-flex items-center gap-1"><BadgeCheck className="w-4 h-4 text-brand-accent" /> WOOLWORTHS Approved</span>
            <span className="inline-flex items-center gap-1"><Leaf className="w-4 h-4 text-brand-accent" /> Eco-friendly Formulas</span>
            <span className="inline-flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-brand-accent" /> Strict QC</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
