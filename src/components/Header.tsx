'use client';

import { useState } from 'react';
import { Award, Globe, ChevronDown, Search, Menu, X } from "lucide-react";

const PRODUCT_NAV = [
  {
    name: 'Laundry Care',
    slug: 'laundry-care',
    children: [
      { name: 'Laundry Scent Booster Beads', slug: 'laundry-scent-booster-beads' },
      { name: 'Laundry Sheets', slug: 'laundry-sheets' },
      { name: 'Dryer Sheets', slug: 'dryer-sheets' },
    ],
  },
  {
    name: 'Bathroom Care',
    slug: 'bathroom-care',
    children: [
      { name: 'Toilet Bowl Cleaner', slug: 'toilet-bowl-cleaner' },
      { name: 'Multipurpose Cleaner', slug: 'multipurpose-cleaner' },
      { name: 'Sink and Drain Cleaner', slug: 'sink-and-drain-cleaner' },
    ],
  },
  {
    name: 'Kitchen Care',
    slug: 'kitchen-care',
    children: [
      { name: 'Kitchen Degreaser', slug: 'kitchen-degreaser' },
      { name: 'Mould Removal', slug: 'mould-removal' },
      { name: 'Garbage Disposal Cleaner', slug: 'garbage-disposal-cleaner' },
      { name: 'Stainless Steel Cleaner', slug: 'stainless-steel-cleaner' },
    ],
  },
  {
    name: 'Appliance Care',
    slug: 'appliance-care',
    children: [
      { name: 'Washing Machine Drum Cleaner', slug: 'washing-machine-drum-cleaner' },
      { name: 'Coffee Maker Descaler', slug: 'coffee-maker-descaler' },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm relative">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo only - no company name */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-sm">
            M
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex h-full">
          <div className="flex h-full">
            <a
              href="/"
              className="px-5 h-full flex items-center text-sm font-bold text-brand-dark hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary transition"
            >
              Home
            </a>

            <a
              href="/about"
              className="px-5 h-full flex items-center text-sm font-bold text-brand-dark hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary transition"
            >
              About Us
            </a>

            {/* Products mega menu */}
            <div className="group h-full">
              <a
                href="/shop"
                className="px-5 h-full flex items-center text-sm font-bold text-brand-dark group-hover:text-brand-primary border-b-2 border-transparent group-hover:border-brand-primary transition"
              >
                Products <ChevronDown className="w-4 h-4 ml-1" />
              </a>

              <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-10 grid grid-cols-4 gap-8">
                  {PRODUCT_NAV.map((cat) => (
                    <div key={cat.slug} className="flex flex-col">
                      <a
                        href={`/shop?category=${cat.slug}`}
                        className="text-brand-dark font-extrabold text-base mb-4 pb-2 border-b border-gray-100 hover:text-brand-primary transition"
                      >
                        {cat.name}
                      </a>
                      <ul className="space-y-3">
                        {cat.children.map((sub) => (
                          <li key={sub.slug}>
                            <a
                              href={`/shop?category=${sub.slug}`}
                              className="text-gray-600 hover:text-brand-primary text-sm font-medium transition"
                            >
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="/oem-odm"
              className="px-5 h-full flex items-center text-sm font-bold text-brand-dark hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary transition"
            >
              OEM/ODM
            </a>
            <a
              href="/news"
              className="px-5 h-full flex items-center text-sm font-bold text-brand-dark hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary transition"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="px-5 h-full flex items-center text-sm font-bold text-brand-dark hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary transition"
            >
              Contact Us
            </a>
          </div>
        </nav>

        <div className="hidden lg:flex items-center space-x-5">
          <button className="text-brand-dark hover:text-brand-primary transition" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <a
            href="/contact"
            className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all shadow-md"
          >
            Get A Quote
          </a>
        </div>

        <button
          className="lg:hidden text-brand-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 space-y-1">
            <a href="/" className="px-3 py-3 text-brand-dark font-bold border-b border-gray-50">
              Home
            </a>
            <a href="/about" className="px-3 py-3 text-brand-dark font-bold border-b border-gray-50">
              About Us
            </a>

            <div className="border-b border-gray-50">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex justify-between items-center px-3 py-3 text-brand-dark font-bold"
              >
                Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileProductsOpen && (
                <div className="pl-4 pb-3 space-y-3">
                  {PRODUCT_NAV.map((cat) => (
                    <div key={cat.slug}>
                      <a
                        href={`/shop?category=${cat.slug}`}
                        className="block py-2 font-bold text-brand-primary text-sm"
                      >
                        {cat.name}
                      </a>
                      <ul className="pl-3 space-y-1">
                        {cat.children.map((sub) => (
                          <li key={sub.slug}>
                            <a
                              href={`/shop?category=${sub.slug}`}
                              className="block py-1.5 text-gray-600 text-sm"
                            >
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a href="/oem-odm" className="px-3 py-3 text-brand-dark font-bold border-b border-gray-50">
              OEM/ODM
            </a>
            <a href="/news" className="px-3 py-3 text-brand-dark font-bold border-b border-gray-50">
              Blog
            </a>
            <a href="/contact" className="px-3 py-3 text-brand-dark font-bold border-b border-gray-50">
              Contact Us
            </a>

            <a
              href="/contact"
              className="mt-4 bg-brand-primary text-white text-center px-6 py-3 rounded-full text-sm font-bold"
            >
              Get A Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
