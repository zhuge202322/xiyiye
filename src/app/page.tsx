import Image from "next/image";
import { Award, Globe, ChevronDown, Search, Menu, ArrowRight, PlayCircle, ChevronRight, FlaskConical, Check, Download, Droplets, Leaf, ShieldCheck, Star } from "lucide-react";
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
      {/* 1. Hero Carousel */}
      <HeroCarousel />

      {/* 2. Category Matrix (Dynamic from WooCommerce) */}
      <CategoryMatrix categories={categories} />

      {/* 3. Efficacy & Technology */}
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
                  <div className="font-extrabold text-2xl text-brand-dark">Patented Formula</div>
                </div>
                <p className="text-sm font-medium text-brand-gray">Targeted microcapsule fragrance release technology, keeping clothes smelling fresh for up to 12 weeks.</p>
              </div>
            </div>

            <div className="space-y-10 lg:pl-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">Not just cleaning, <br/>but a sensory experience.</h2>
                <p className="text-xl text-brand-gray leading-relaxed">
                  PURA R&D lab collaborates with top global fragrance companies to ensure every drop of product is safe, environmentally friendly, and highly effective.
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
                    <h4 className="text-xl font-bold text-brand-dark mb-2">99.9% Enzyme-based Stain Removal</h4>
                    <p className="text-brand-gray font-medium">Using enzyme technology, deep cleaning of fabric fibers and dead angles, removing bacteria and mites.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white">
                      <Check className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-2">Mild and Eco-friendly Formula</h4>
                    <p className="text-brand-gray font-medium">No phosphorus, no fluorescent whitening agents, no irritating preservatives. Safe for babies and sensitive skin.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white">
                      <Check className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-2">Customizable Fragrance Matrix</h4>
                    <p className="text-brand-gray font-medium">With a library of hundreds of mature fragrances (woody, floral, oceanic), supporting private label customization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 Hot Products Grid (Dynamic from WooCommerce) */}
      <ProductGrid products={products} />

      {/* 4. Consumer Education */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">Only 3 steps, <br/>unleash the fragrance.</h2>
            <p className="text-xl text-brand-gray">Learn how to use our star product - scent beads, to achieve the best clothing care effect.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
            <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-px bg-dashed border-t-2 border-gray-200 -translate-y-1/2 z-0 w-2/3 mx-auto"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-brand-secondary border-8 border-white shadow-xl flex items-center justify-center mb-8 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=400" alt="Pour beads" className="w-full h-full object-cover" />
              </div>
              <div className="text-brand-primary font-black text-xl mb-2">STEP 1</div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Pour directly into drum</h3>
              <p className="text-brand-gray font-medium">Take an appropriate amount of scent beads (about half a cap), pour directly into the bottom of the washing machine drum. Do not put beads in the detergent slot.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-brand-secondary border-8 border-white shadow-xl flex items-center justify-center mb-8 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=400" alt="Add clothes" className="w-full h-full object-cover" />
              </div>
              <div className="text-brand-primary font-black text-xl mb-2">STEP 2</div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Add clothes</h3>
              <p className="text-brand-gray font-medium">Put the clothes to be washed on top of the scent beads. The beads will evenly penetrate every inch of fabric under the action of water.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-brand-secondary border-8 border-white shadow-xl flex items-center justify-center mb-8 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=400" alt="Add detergent" className="w-full h-full object-cover" />
              </div>
              <div className="text-brand-primary font-black text-xl mb-2">STEP 3</div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Add detergent</h3>
              <p className="text-brand-gray font-medium">Follow the normal washing procedure, add detergent to the designated slot, and start the washing cycle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 Article Showcase */}
      <ArticleShowcase posts={posts} />

      {/* 5. Inquiry Form */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1563452675059-cf5697693fc7?auto=format&fit=crop&q=80&w=2000" alt="Factory" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-brand-dark/90"></div>

        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Your world-class <br/> manufacturing & R&D backing.</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10 font-medium">
                As the unsung heroes behind the daily chemical industry, we provide end-to-end manufacturing services from concept to shelf for multiple renowned private labels globally. A 20,000 sqm smart factory ensures both capacity and quality.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="text-4xl font-black text-brand-accent mb-2">15+</div>
                  <div className="text-gray-400 font-bold uppercase tracking-wider text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-accent mb-2">300+</div>
                  <div className="text-gray-400 font-bold uppercase tracking-wider text-sm">Mature Commercial Formulas</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-accent mb-2">10w+</div>
                  <div className="text-gray-400 font-bold uppercase tracking-wider text-sm">Daily Capacity</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-accent mb-2">ISO</div>
                  <div className="text-gray-400 font-bold uppercase tracking-wider text-sm">GMPC / SGS Certified</div>
                </div>
              </div>

              <a href="#" className="inline-flex items-center bg-white text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all">
                Download Factory Brochure PDF <Download className="w-5 h-5 ml-2" />
              </a>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl text-brand-dark relative">
              <h3 className="text-3xl font-extrabold mb-2">Start your brand customization</h3>
              <p className="text-brand-gray font-medium mb-8">Fill out the information below, and our key account manager will contact you within 24 hours to arrange free sample delivery.</p>
              
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2">Your Name *</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Company Name *</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Corporate Email *</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Product Category of Interest</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition appearance-none">
                    <option>Scent Beads / Pods Series</option>
                    <option>Fabric Softener / Liquid Detergent</option>
                    <option>Toilet and Bathroom Cleaner</option>
                    <option>Kitchen Heavy Oil Cleaner</option>
                    <option>Other Custom Needs</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-primary/90 transition shadow-lg mt-4">
                  Submit Inquiry
                </button>
                <p className="text-xs text-gray-400 text-center mt-4">By submitting, you agree to our privacy policy. Your information will be kept strictly confidential.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}