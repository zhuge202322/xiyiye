'use client';

import { useState } from 'react';
import { Download, FileText, MessageSquareText, X } from 'lucide-react';

type InquiryType = 'quote' | 'sample';

export default function ProductInquiryActions({ productName }: { productName: string }) {
  const [inquiryType, setInquiryType] = useState<InquiryType | null>(null);

  const modalTitle = inquiryType === 'sample' ? 'Request Sample' : 'Get A Quote';
  const selectValue = inquiryType === 'sample' ? 'Request Free Samples' : 'Bulk Purchasing';

  return (
    <>
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => setInquiryType('quote')}
          className="w-full bg-brand-primary text-white py-5 px-8 rounded-full font-bold text-xl hover:bg-opacity-90 transition-all flex items-center justify-center shadow-lg shadow-brand-primary/30"
        >
          <MessageSquareText className="w-6 h-6 mr-3" />
          Submit Inquiry / Get Bulk Quote
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setInquiryType('sample')}
            className="w-full bg-white border-2 border-brand-primary text-brand-primary py-4 px-6 rounded-full font-bold text-lg hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center"
          >
            <FileText className="w-5 h-5 mr-2" /> Request Sample
          </button>
          <button
            type="button"
            className="w-full bg-gray-100 text-brand-dark py-4 px-6 rounded-full font-bold text-lg hover:bg-gray-200 transition-all flex items-center justify-center"
          >
            <Download className="w-5 h-5 mr-2" /> Download Spec Sheet
          </button>
        </div>
      </div>

      {inquiryType && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setInquiryType(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setInquiryType(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition"
              aria-label="Close inquiry form"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-2">
                {modalTitle}
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
                  <label className="block text-xs font-bold text-brand-dark mb-1.5">Product</label>
                  <input
                    type="text"
                    value={productName}
                    readOnly
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none text-brand-gray"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-dark mb-1.5">Inquiry Type</label>
                  <select
                    defaultValue={selectValue}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition appearance-none"
                  >
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
                    defaultValue={`I am interested in ${productName}.`}
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
