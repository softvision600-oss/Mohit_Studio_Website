import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/studioData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0f0f0f] text-[#e0e0e0] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-mono block mb-3">
            CLEAR & TRANSPARENT GUIDANCE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Have questions regarding booking, deliverables, destination travel, or RAW file backups? Find instant answers below.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  id={`faq-accordion-${idx}`}
                >
                  <span className="font-serif text-lg text-white font-light flex items-center gap-3">
                    <span className="text-zinc-500 font-mono text-xs">0{idx + 1}</span>
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-full bg-white/5 border border-white/10 text-white transition-transform duration-300 ${isOpen ? 'rotate-180 bg-white/10' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-zinc-400 border-t border-white/5 leading-relaxed animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                    <span className="inline-block mt-3 px-2 py-0.5 bg-white/5 border border-white/10 text-[10px] uppercase font-mono text-amber-400">
                      Category: {item.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center p-8 bg-[#0a0a0a] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-serif text-xl text-white font-light mb-1">Still Have Specific Questions?</h4>
            <p className="text-xs text-zinc-400">Our studio team is available via phone, email, or direct WhatsApp consultation.</p>
          </div>
          <a
            href="tel:+919876543210"
            className="px-6 py-3 bg-white text-slate-950 font-medium text-xs uppercase tracking-widest border border-white hover:bg-zinc-200 transition-all shrink-0"
          >
            Call Mohit Studio Team
          </a>
        </div>
      </div>
    </section>
  );
};
