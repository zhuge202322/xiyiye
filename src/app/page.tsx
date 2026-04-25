import { ShieldCheck, FlaskConical, Factory, Award, Globe, Headset } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryMatrix from "@/components/CategoryMatrix";
import ProductGrid from "@/components/ProductGrid";
import ArticleShowcase from "@/components/ArticleShowcase";

async function getCategories() {
  try {
    const res = await fetch('http://45.145.229.20:6411/?rest_route=/wc/store/v1/products/categories', {
      next: { revalidate: 3600 }
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
      next: { revalidate: 3600 }
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
      next: { revalidate: 3600 }
    });
    if (!res.ok) return [];
    const data = JSON.parse(JSON.stringify(await res.json()).replace(/http:\/\/45\.145\.229\.20:6411/g, '/wp-proxy'));
    return data;
  } catch (e) {
    console.error("Failed to fetch posts", e);
    return [];
  }
}

const reasons = [
  {
    icon: FlaskConical,
    title: 'In-house R&D Lab',
    desc: '15+ years of experienced formulators and a 300+ commercial formula library, ready for fast custom development.',
  },
  {
    icon: Factory,
    title: '20,000 m² Smart Factory',
    desc: 'Automated production lines with daily capacity of 100,000+ units, ensuring on-time delivery for global brands.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    desc: 'ISO 9001, GMPC, SGS, SMETA and BSCI certified — strict QC at every production stage.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Eco-friendly',
    desc: 'Cosmetic-grade ingredients, controlled pH, no harsh acids or bleaches — safe for families and the environment.',
  },
  {
    icon: Globe,
    title: 'Global Export Experience',
    desc: 'Trusted partner of 200+ private labels across North America, Europe, the Middle East and Southeast Asia.',
  },
  {
    icon: Headset,
    title: 'One-stop OEM/ODM',
    desc: 'From formula, packaging, regulatory to logistics — we manage every step so you can focus on your brand.',
  },
];

export default async function Home() {
  const [categories, products, posts] = await Promise.all([
    getCategories(),
    getProducts(),
    getPosts()
  ]);

  return (
    <div className="bg-[#f8f9fa] flex-1 flex flex-col">
      {/* 1. Hero Carousel */}
      <HeroCarousel />

      {/* 2. Category Matrix (Dynamic from WooCommerce) */}
      <CategoryMatrix categories={categories} />

      {/* 3. Hot Products Grid (Dynamic from WooCommerce) */}
      <ProductGrid products={products} />

      {/* 4. Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-secondary px-4 py-1.5 rounded-full text-xs font-bold text-brand-primary tracking-wide mb-5">
              <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
              <span>WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
              Your trusted manufacturing partner.
            </h2>
            <p className="text-xl text-brand-gray">
              From formulation to finished product, we deliver quality, speed and flexibility for global private-label brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-secondary text-brand-primary flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-dark mb-3">{r.title}</h3>
                  <p className="text-brand-gray font-medium leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-brand-secondary rounded-3xl p-10">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-brand-primary mb-2">15+</div>
              <div className="text-brand-gray font-bold uppercase tracking-wider text-xs">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-brand-primary mb-2">300+</div>
              <div className="text-brand-gray font-bold uppercase tracking-wider text-xs">Mature Formulas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-brand-primary mb-2">100k+</div>
              <div className="text-brand-gray font-bold uppercase tracking-wider text-xs">Daily Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-brand-primary mb-2">60+</div>
              <div className="text-brand-gray font-bold uppercase tracking-wider text-xs">Export Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Article Showcase */}
      <ArticleShowcase posts={posts} />
    </div>
  );
}
