'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const MILESTONES = [
  {
    year: '2005',
    title: 'Myklens Founded',
    desc: 'Established in Zhongshan, Guangdong. Specializing in toilet cleaning blocks, air fresheners and liquid detergents from day one.',
  },
  {
    year: '2010',
    title: 'Going Global',
    desc: 'First export shipments leave the factory — our products begin reaching customers in Europe, North America and Southeast Asia.',
  },
  {
    year: '2014',
    title: 'WOOLWORTHS Certified',
    desc: 'Passed strict supplier audits and became an approved manufacturer for WOOLWORTHS — a milestone for international quality recognition.',
  },
  {
    year: '2018',
    title: 'ISSA Member',
    desc: 'Joined the International Sanitary Supply Association (ISSA), connecting with the world’s leading professional cleaning network.',
  },
  {
    year: '2020',
    title: 'Level 3 Safety Production',
    desc: 'Awarded Level 3 Safety Production certification — a recognition of our consistent quality control and safe manufacturing standards.',
  },
  {
    year: '2023',
    title: '5 Continents Reached',
    desc: 'Our home-cleaning products now ship to retailers and brands across all five inhabited continents.',
  },
  {
    year: '2024',
    title: 'New R&D Center',
    desc: 'Expanded the in-house formulation lab and launched new bio-degradable, eco-friendly product lines for sustainable home care.',
  },
];

export default function JourneyTimeline() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [canScrollL, setCanScrollL] = useState(false);
  const [canScrollR, setCanScrollR] = useState(true);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollL(el.scrollLeft > 8);
    setCanScrollR(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    // active card based on which one is closest to viewport center
    const cards = Array.from(el.querySelectorAll<HTMLElement>('[data-card]'));
    const center = el.scrollLeft + el.clientWidth / 2;
    let nearest = 0;
    let nearestDist = Infinity;
    cards.forEach((c, i) => {
      const cardCenter = c.offsetLeft + c.clientWidth / 2;
      const d = Math.abs(cardCenter - center);
      if (d < nearestDist) {
        nearestDist = d;
        nearest = i;
      }
    });
    setActiveIdx(nearest);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card]');
    const cardW = (card?.clientWidth || 320) + 24; // +gap
    el.scrollBy({ left: dir * cardW, behavior: 'smooth' });
  };

  const scrollToIdx = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelectorAll<HTMLElement>('[data-card]')[i];
    if (!card) return;
    el.scrollTo({
      left: card.offsetLeft - (el.clientWidth - card.clientWidth) / 2,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      {/* Top horizontal track with year markers */}
      <div className="hidden md:flex justify-between items-center mb-10 relative px-4">
        <div className="absolute left-4 right-4 top-1/2 h-1 bg-brand-primary/15 -translate-y-1/2" />
        <div
          className="absolute left-4 top-1/2 h-1 bg-brand-primary -translate-y-1/2 transition-all duration-500"
          style={{
            width: `calc(${(activeIdx / Math.max(MILESTONES.length - 1, 1)) * 100}% - ${(activeIdx / Math.max(MILESTONES.length - 1, 1)) * 32}px + ${activeIdx === 0 ? 0 : 0}px)`,
          }}
        />
        {MILESTONES.map((m, i) => (
          <button
            key={m.year}
            onClick={() => scrollToIdx(i)}
            className={`relative z-10 flex flex-col items-center group transition-all`}
            aria-label={`Jump to ${m.year}`}
          >
            <span
              className={`w-5 h-5 rounded-full border-4 transition-all duration-300 ${
                i <= activeIdx
                  ? 'bg-brand-primary border-white shadow-[0_0_0_4px_rgba(0,91,79,0.15)]'
                  : 'bg-white border-brand-primary/30 group-hover:border-brand-primary'
              } ${i === activeIdx ? 'scale-125' : ''}`}
            />
            <span
              className={`mt-3 font-extrabold text-sm transition-colors ${
                i === activeIdx ? 'text-brand-primary' : 'text-gray-400 group-hover:text-brand-dark'
              }`}
            >
              {m.year}
            </span>
          </button>
        ))}
      </div>

      {/* Scroller */}
      <div className="relative">
        {/* Edge fade masks */}
        <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10" />

        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scroll-smooth no-scrollbar px-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {MILESTONES.map((m, i) => (
            <article
              data-card
              key={m.year}
              className={`snap-center shrink-0 w-[80%] sm:w-[60%] md:w-[360px] lg:w-[400px] rounded-3xl p-8 border-2 transition-all duration-500 ${
                i === activeIdx
                  ? 'bg-brand-primary text-white border-brand-primary shadow-2xl shadow-brand-primary/30 scale-100'
                  : 'bg-white text-brand-dark border-gray-100 shadow-sm scale-95 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className={`w-5 h-5 ${i === activeIdx ? 'text-brand-accent' : 'text-brand-primary/50'}`} />
                <span
                  className={`text-xs font-extrabold tracking-widest uppercase ${
                    i === activeIdx ? 'text-white/80' : 'text-brand-primary/70'
                  }`}
                >
                  Milestone {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div
                className={`text-6xl font-black mb-4 leading-none tracking-tight ${
                  i === activeIdx ? 'text-white' : 'text-brand-primary/90'
                }`}
              >
                {m.year}
              </div>
              <h4 className={`text-2xl font-extrabold mb-3 ${i === activeIdx ? 'text-white' : 'text-brand-dark'}`}>
                {m.title}
              </h4>
              <p
                className={`leading-relaxed font-medium ${
                  i === activeIdx ? 'text-white/90' : 'text-brand-gray'
                }`}
              >
                {m.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Arrow controls */}
        <button
          onClick={() => scrollByCard(-1)}
          disabled={!canScrollL}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 items-center justify-center hover:bg-brand-primary hover:text-white text-brand-dark transition disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous milestone"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scrollByCard(1)}
          disabled={!canScrollR}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 items-center justify-center hover:bg-brand-primary hover:text-white text-brand-dark transition disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next milestone"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile dots */}
      <div className="md:hidden flex justify-center gap-2 mt-4">
        {MILESTONES.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIdx(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === activeIdx ? 'w-8 bg-brand-primary' : 'w-2 bg-gray-300'
            }`}
            aria-label={`Go to milestone ${i + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
