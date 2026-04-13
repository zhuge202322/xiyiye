import { Mail, Phone, MapPin, ArrowRight, Globe } from "lucide-react";

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

export default async function Footer() {
  const categories = await getCategories();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">P</div>
              <div className="text-2xl font-extrabold text-white">Pura Group</div>
            </a>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Committed to providing global customers with extreme cleansing, safe and eco-friendly home care products. 15 years of deep cultivation in the daily chemical OEM/ODM field, your trusted manufacturing partner.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all"><Globe className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Home Care</h4>
            <ul className="space-y-4 text-gray-400">
              {categories.slice(0, 6).map((cat: any) => (
                <li key={cat.id}>
                  <a href={`/shop?category=${cat.slug}`} className="hover:text-brand-primary transition flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="/about" className="hover:text-brand-primary transition flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> About Us</a></li>
              <li><a href="/news" className="hover:text-brand-primary transition flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> News</a></li>
              <li><a href="/contact" className="hover:text-brand-primary transition flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-primary transition flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Join Us</a></li>
              <li><a href="#" className="hover:text-brand-primary transition flex items-center group"><ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> OEM/ODM</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-primary shrink-0 mt-0.5" />
                <span>123 Technology Road, Daily Chemical Industrial Park, Zhongshan City, Guangdong Province, China</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-primary shrink-0" />
                <span>+86 (760) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-primary shrink-0" />
                <span>b2b@puragroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pura Group (Zhongshan) Co., Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-brand-primary transition">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary transition">Terms of Service</a>
            <a href="#" className="hover:text-brand-primary transition">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
