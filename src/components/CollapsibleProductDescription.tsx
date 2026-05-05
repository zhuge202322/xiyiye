'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function CollapsibleProductDescription({ html }: { html: string }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [needsCollapse, setNeedsCollapse] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      const element = contentRef.current;
      if (!element) return;
      setNeedsCollapse(element.scrollHeight > element.clientHeight + 8);
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [html, expanded]);

  return (
    <div className="relative mb-10">
      <div
        ref={contentRef}
        className={`prose prose-brand text-gray-600 text-lg leading-relaxed transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          expanded ? 'max-h-none' : 'max-h-[360px] lg:max-h-[520px]'
        }`}
        dangerouslySetInnerHTML={{ __html: html || '<p>No short description.</p>' }}
      />

      {needsCollapse && !expanded && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent" />
      )}

      {needsCollapse && (
        <div className="relative z-10 mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center justify-center rounded-full bg-brand-secondary px-6 py-3 text-sm font-extrabold text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm"
          >
            {expanded ? (
              <>
                Show Less <ChevronUp className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                View More <ChevronDown className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
