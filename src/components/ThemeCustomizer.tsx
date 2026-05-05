'use client';

import { useEffect, useMemo, useState } from 'react';
import { Check, Palette, RotateCcw, X } from 'lucide-react';

type ThemeColors = {
  primary: string;
  secondary: string;
  accent: string;
  dark: string;
  gray: string;
};

const STORAGE_KEY = 'myklens-theme-colors';

const defaultTheme: ThemeColors = {
  primary: '#005b4f',
  secondary: '#e8f3f1',
  accent: '#64a19d',
  dark: '#1a1a1a',
  gray: '#5f6368',
};

const presets: Array<{ name: string; colors: ThemeColors }> = [
  {
    name: 'Classic Red',
    colors: {
      primary: '#7f1d1d',
      secondary: '#fff1f1',
      accent: '#b45353',
      dark: '#241313',
      gray: '#6b5353',
    },
  },
  {
    name: 'Lavender',
    colors: {
      primary: '#765aa8',
      secondary: '#f3efff',
      accent: '#9b7cc4',
      dark: '#241f33',
      gray: '#665d75',
    },
  },
  {
    name: 'Forest Green',
    colors: defaultTheme,
  },
  {
    name: 'Ocean Blue',
    colors: {
      primary: '#244d78',
      secondary: '#edf6ff',
      accent: '#5d87b4',
      dark: '#142235',
      gray: '#56677a',
    },
  },
  {
    name: 'Coffee Gold',
    colors: {
      primary: '#7a5a32',
      secondary: '#fff7e8',
      accent: '#a87b45',
      dark: '#2c2116',
      gray: '#6f6254',
    },
  },
  {
    name: 'Rosewood',
    colors: {
      primary: '#9a5770',
      secondary: '#fff1f5',
      accent: '#c06c88',
      dark: '#2d1821',
      gray: '#725864',
    },
  },
];

const colorFields: Array<{ key: keyof ThemeColors; label: string; hint: string }> = [
  { key: 'primary', label: 'Primary color', hint: 'Buttons, links, highlights' },
  { key: 'secondary', label: 'Soft background', hint: 'Cards, light sections, badges' },
  { key: 'accent', label: 'Accent color', hint: 'Hover states, icons, details' },
  { key: 'dark', label: 'Main text color', hint: 'Headings and important text' },
  { key: 'gray', label: 'Body text color', hint: 'Paragraphs and secondary text' },
];

function applyTheme(colors: ThemeColors) {
  const root = document.documentElement;
  root.style.setProperty('--color-brand-primary', colors.primary);
  root.style.setProperty('--color-brand-secondary', colors.secondary);
  root.style.setProperty('--color-brand-accent', colors.accent);
  root.style.setProperty('--color-brand-dark', colors.dark);
  root.style.setProperty('--color-brand-gray', colors.gray);
}

export default function ThemeCustomizer() {
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState<ThemeColors>(defaultTheme);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (!savedTheme) return;

    try {
      const parsed = JSON.parse(savedTheme) as ThemeColors;
      const nextTheme = { ...defaultTheme, ...parsed };
      setColors(nextTheme);
      applyTheme(nextTheme);
    } catch (error) {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const activePreset = useMemo(() => {
    return presets.find((preset) => {
      return colorFields.every((field) => preset.colors[field.key].toLowerCase() === colors[field.key].toLowerCase());
    });
  }, [colors]);

  const updateTheme = (nextColors: ThemeColors) => {
    setColors(nextColors);
    applyTheme(nextColors);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextColors));
  };

  const updateColor = (key: keyof ThemeColors, value: string) => {
    updateTheme({ ...colors, [key]: value });
  };

  const resetTheme = () => {
    setColors(defaultTheme);
    applyTheme(defaultTheme);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-4 top-1/2 z-[90] -translate-y-1/2 rounded-full bg-white p-3 text-brand-primary shadow-xl border border-gray-100 hover:bg-brand-secondary transition"
        aria-label="Open theme customizer"
      >
        <Palette className="w-5 h-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[110] pointer-events-none">
          <div className="absolute inset-0 bg-black/20 pointer-events-auto" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-[340px] max-w-[92vw] bg-[#fffaf3] shadow-2xl border-l border-[#ead9bd] pointer-events-auto flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#ead9bd]">
              <div className="flex items-center gap-3 text-brand-primary font-extrabold">
                <Palette className="w-5 h-5" />
                Theme Color Tuner
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-brand-gray hover:bg-white transition"
                aria-label="Close theme customizer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              <div className="mb-6">
                <h3 className="text-sm font-extrabold text-brand-gray mb-3">Quick Presets</h3>
                <div className="grid grid-cols-2 gap-3">
                  {presets.map((preset) => {
                    const selected = activePreset?.name === preset.name;
                    return (
                      <button
                        type="button"
                        key={preset.name}
                        onClick={() => updateTheme(preset.colors)}
                        className={`flex items-center justify-between gap-2 rounded-full border px-3 py-2 bg-white text-xs font-bold transition ${selected ? 'border-brand-primary text-brand-primary shadow-sm' : 'border-[#e4cfae] text-brand-gray hover:border-brand-primary'}`}
                      >
                        <span className="flex -space-x-1.5">
                          <span className="w-5 h-5 rounded-full border border-white" style={{ backgroundColor: preset.colors.primary }} />
                          <span className="w-5 h-5 rounded-full border border-white" style={{ backgroundColor: preset.colors.accent }} />
                        </span>
                        <span className="truncate">{preset.name}</span>
                        {selected && <Check className="w-3.5 h-3.5 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-[#ead9bd] pt-5 space-y-4">
                {colorFields.map((field) => (
                  <label key={field.key} className="flex items-center gap-4 rounded-2xl bg-white/70 p-3 border border-[#ead9bd]">
                    <input
                      type="color"
                      value={colors[field.key]}
                      onChange={(event) => updateColor(field.key, event.target.value)}
                      className="w-12 h-12 rounded-xl border border-[#e4cfae] bg-white p-1 cursor-pointer shrink-0"
                      aria-label={field.label}
                    />
                    <span className="min-w-0">
                      <span className="block text-sm font-extrabold text-brand-dark">{field.label}</span>
                      <span className="block text-xs text-brand-gray font-medium">{field.hint}</span>
                      <span className="block text-xs text-brand-primary font-bold mt-1 uppercase">{colors[field.key]}</span>
                    </span>
                  </label>
                ))}
              </div>

              <button
                type="button"
                onClick={resetTheme}
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#e4cfae] bg-white px-4 py-3 text-sm font-extrabold text-brand-primary hover:bg-brand-secondary transition"
              >
                <RotateCcw className="w-4 h-4" />
                Reset to Default
              </button>
            </div>

            <div className="px-5 py-4 border-t border-[#ead9bd] text-xs text-brand-gray font-medium leading-relaxed">
              Your color settings are saved in this browser and will be applied automatically next time.
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
