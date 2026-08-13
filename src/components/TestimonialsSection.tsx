import React from 'react';
import { TESTIMONIALS } from '../data/studioData';
import { Star, Quote, MapPin, Calendar } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a] text-[#e0e0e0] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-mono block mb-3">
            CLIENT WORDS & LOVE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-white mb-4">
            Words From Our Distinguished Couples & Clients
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Read heartfelt stories from couples whose weddings, portraits, and pre-weddings were captured by Mohit Studio.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#0f0f0f] border border-white/5 hover:border-white/20 p-8 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-8 h-8 text-white/10 absolute top-6 right-6" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Quote */}
                <p className="text-zinc-300 text-sm italic font-serif leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="border-t border-white/5 pt-6 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.clientName}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="font-serif text-base font-medium text-white">{t.clientName}</h4>
                  <p className="text-[11px] text-amber-400 font-mono">{t.eventType}</p>
                  <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono mt-1">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {t.shootLocation}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {t.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
