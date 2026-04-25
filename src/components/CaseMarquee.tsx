'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type CaseItem = {
  brand: string;
  region: string;
  product: string;
  image: string;
};

const CASES: CaseItem[] = [
  {
    brand: 'GreenLeaf Home',
    region: 'North America',
    product: 'Eco Laundry Pods Line',
    image: '/banner/purple-bubble.jpg',
  },
  {
    brand: 'AquaBella',
    region: 'Europe',
    product: 'Premium Scent Boosters',
    image: '/banner/scent-beads.jpg',
  },
  {
    brand: 'MaxKlean',
    region: 'Australia',
    product: 'Coffee Maker Descaler',
    image: '/banner/coffee-cleaner.jpg',
  },
  {
    brand: 'PureCare Co.',
    region: 'Middle East',
    product: 'Bathroom Multi-Surface Cleaner',
    image: '/bj/bubble.jpg',
  },
  {
    brand: 'FreshHome',
    region: 'Southeast Asia',
    product: 'Fabric Softener Range',
    image: '/bj/beads.jpg',
  },
  {
    brand: 'ClearGlow',
    region: 'Latin America',
    product: 'Kitchen Degreaser Spray',
    image: '/bj/coffee.jpg',
  },
  {
    brand: 'NatureSafe',
    region: 'United Kingdom',
    product: 'Plant-based Laundry Sheets',
    image: '/banner/purple-bubble.jpg',
  },
  {
    brand: 'ShineDaily',
    region: 'Japan',
    product: 'Washing Machine Drum Cleaner',
    image: '/bj/beads.jpg',
  },
];

export default function CaseMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Duplicate list for seamless looping
  const items = [...CASES, ...CASES];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    let last = performance.now();
    const speed = 40; // px / second

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused) {
        track.scrollLeft += speed * dt;
        // Reset to first half once we've scrolled past it
        const half = track.scrollWidth / 2;
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  const nudge = (dir: 1 | -1) => {
    const t = trackRef.current;
    if (!t) return;
    t.scrollBy({ left: dir * 360, behavior: 'smooth' });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Edge fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-brand-secondary to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-brand-secondary to-transparent z-10" />

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-4 no-scrollbar"
        style={{ scrollbarWidth: 'none' }}
      >
        {items.map((c, i) => (
          <article
            key={i}
            className="shrink-0 w-72 md:w-80 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-50">
              <img
                src={c.image}
                alt={`${c.brand} - ${c.product}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-brand-primary/80">
                  {c.region}
                </span>
              </div>
              <h4 className="text-lg font-extrabold text-brand-dark mb-1 truncate">{c.brand}</h4>
              <p className="text-sm text-brand-gray font-medium">{c.product}</p>
            </div>
          </article>
        ))}
      </div>

      <button
        onClick={() => nudge(-1)}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 items-center justify-center hover:bg-brand-primary hover:text-white text-brand-dark transition"
        aria-label="Scroll cases left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => nudge(1)}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 items-center justify-center hover:bg-brand-primary hover:text-white text-brand-dark transition"
        aria-label="Scroll cases right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
