'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, X } from 'lucide-react';

type Slide =
  | { type: 'image'; src: string; alt: string; title?: string; subtitle?: string }
  | { type: 'video'; src: string; poster?: string; alt: string; title?: string; subtitle?: string };

const slides: Slide[] = [
  {
    type: 'image',
    src: '/bj/bubble.jpg',
    alt: 'Premium home cleaning products',
    title: 'Redefining Home Cleaning.',
    subtitle: 'Premium home cleaning products for a cleaner and healthier home.',
  },
  {
    type: 'image',
    src: '/bj/beads.jpg',
    alt: 'Laundry scent booster beads',
    title: 'Long-Lasting Laundry Fragrance.',
    subtitle: 'Microcapsule fragrance technology keeps clothes smelling fresh for up to 12 weeks.',
  },
  {
    type: 'image',
    src: '/bj/coffee.jpg',
    alt: 'Coffee maker descaler',
    title: 'Smart Care for Every Appliance.',
    subtitle: 'From coffee makers to washing machine drums — gentle yet powerful cleaning solutions.',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative w-full h-[85vh] bg-brand-secondary flex items-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.type === 'video' ? (
              <video
                src={slide.src}
                poster={slide.poster}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>
          </div>
        ))}

        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 pointer-events-none">
          <div className="space-y-8 max-w-xl pointer-events-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-brand-primary tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
              <span>Premium Home Cleaning OEM / ODM</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-brand-dark leading-[1.05] tracking-tight">
              {slides[current].title || (
                <>
                  Redefining<br />
                  <span className="text-brand-primary">Home Care.</span>
                </>
              )}
            </h1>
            <p className="text-lg md:text-xl text-brand-gray leading-relaxed font-medium">
              {slides[current].subtitle ||
                'Laundry care, bathroom care, kitchen care and appliance care — one-stop manufacturing partner for your private label.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/shop"
                className="bg-brand-primary text-white px-8 py-4 rounded-full text-center font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-lg flex items-center justify-center"
              >
                View Products <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <button
                type="button"
                onClick={() => setShowQuote(true)}
                className="bg-white text-brand-primary px-8 py-4 rounded-full text-center font-bold text-lg hover:bg-gray-50 transition-all shadow-md flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" /> Get A Quote
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-10 h-1.5 rounded-full transition ${
                index === current ? 'bg-brand-primary' : 'bg-black/20 hover:bg-black/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Get A Quote Modal */}
      {showQuote && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setShowQuote(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQuote(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-2">
                Get A Quote
              </h3>
              <p className="text-brand-gray mb-6 text-sm">
                Tell us about your needs and we&apos;ll get back to you within 24 hours.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-1.5">Your Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-1.5">Company</label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-dark mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-dark mb-1.5">Inquiry Type</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition appearance-none">
                    <option>OEM Private Label</option>
                    <option>ODM Custom Formulation</option>
                    <option>Request Free Samples</option>
                    <option>Bulk Purchasing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-dark mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition resize-none"
                    placeholder="Briefly describe your project, target market, or quantity..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-brand-primary text-white py-3.5 rounded-xl font-bold text-base hover:bg-brand-primary/90 transition shadow-lg"
                >
                  Submit Inquiry
                </button>
                <p className="text-xs text-gray-400 text-center">
                  All fields are optional — share whatever you&apos;re comfortable with.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
