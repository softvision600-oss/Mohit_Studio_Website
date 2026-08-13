import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Camera, MapPin, Phone, Mail, Instagram, Youtube, Award, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-[#e0e0e0] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-light tracking-[0.3em] uppercase text-white font-serif">
                MOHIT STUDIO
              </span>
              <span className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 mt-1 font-mono">
                Visual Storytellers Since 2012
              </span>
            </div>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Specializing in luxury wedding stories, high-fashion editorial, intimate fine-art portraiture, and architectural narratives that define modern aesthetics.
            </p>

            <div className="flex items-center gap-4 text-xs text-zinc-400 pt-2">
              <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                <Instagram className="w-4 h-4 text-white" /> {STUDIO_INFO.instagram}
              </span>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                <Youtube className="w-4 h-4 text-white" /> {STUDIO_INFO.youtube}
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-mono">Explore</h4>
            <ul className="space-y-2 text-xs font-light">
              {[
                { id: 'portfolio', label: 'Portfolio Gallery' },
                { id: 'services', label: 'Services & Pricing' },
                { id: 'retouching', label: 'Retouching Showcase' },
                { id: 'ai-advisor', label: 'AI Concept Advisor' },
                { id: 'about', label: 'About Mohit Sharma' },
                { id: 'gear', label: 'Studio Stage & Gear' },
                { id: 'testimonials', label: 'Client Reviews' },
                { id: 'faq', label: 'Frequently Asked Questions' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-zinc-400 hover:text-white transition-colors tracking-wider uppercase text-[11px]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-mono">New Delhi Studio</h4>

            <div className="space-y-2.5 text-xs text-zinc-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.address}</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span className="font-mono text-zinc-300">{STUDIO_INFO.phone}</span>
              </p>

              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span className="font-mono text-zinc-300">{STUDIO_INFO.email}</span>
              </p>

              <p className="text-[11px] text-zinc-500 italic pt-1">
                Hours: {STUDIO_INFO.workingHours}
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-2 w-full py-3 border border-white/20 hover:border-white/60 text-white text-[10px] uppercase tracking-widest transition-all"
            >
              Book Studio Session
            </button>
          </div>
        </div>

        {/* Bottom Bar matching design theme */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-500">
          <div className="flex items-center gap-2 font-mono">
            <span>© 2026 MOHIT STUDIO. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="tracking-widest uppercase">New Delhi / Worldwide</span>
            <div className="flex items-center gap-2">
              <span className="text-zinc-400">Studio Operational</span>
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
