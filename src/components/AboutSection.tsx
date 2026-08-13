import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Camera, Award, ShieldCheck, Heart, MapPin, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] text-[#e0e0e0] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] bg-zinc-900 border border-white/10 overflow-hidden shadow-2xl group">
              <img
                src="/images/mohit.jpg"
                alt="Lead Photographer Mohit Sharma"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-mono block mb-1">
                  LEAD PHOTOGRAPHER & FOUNDER
                </span>
                <h3 className="font-serif text-2xl text-white font-light">{STUDIO_INFO.leadPhotographer}</h3>
                <p className="text-xs text-zinc-400 mt-1">International Fine-Art Guild Master • 12+ Years Experience</p>
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#0f0f0f] border border-white/10 p-5 shadow-2xl hidden sm:block max-w-[220px]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/10 text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-serif text-2xl font-bold text-white block">18+</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-mono">National Photography Honors</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-mono block">
              OUR PHILOSOPHY & HERITAGE
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
              We Don’t Just Take Photographs.<br />
              <span className="italic font-serif text-zinc-400">We Preserve Legacy.</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              Founded in 2014 by award-winning visual story-teller Mohit Sharma, Mohit Studio was built on a simple conviction: photography is not merely about gear or poses, but about feeling the genuine emotion of a moment and freezing it in pristine light.
            </p>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Based in New Delhi with a state-of-the-art 3,500 sq. ft. climate-controlled production facility, our team travels globally to cover royal palace weddings, high-fashion editorials, and intimate personal milestones.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-white/5 text-white shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Chiaroscuro Master Lighting</h4>
                  <p className="text-[11px] text-zinc-400">Using Swiss strobe modifiers and natural light wrapping for three-dimensional skin radiance.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-white/5 text-white shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Dual RAW Redundant Backup</h4>
                  <p className="text-[11px] text-zinc-400">Every photo is dual-recorded on set and synced to encrypted cloud storage before we leave your venue.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-white/5 text-white shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Handcrafted Italian Albums</h4>
                  <p className="text-[11px] text-zinc-400">Archival quality silk and genuine leather print books guaranteed for over 100 years without fading.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-white/5 text-white shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Unobtrusive Candid Focus</h4>
                  <p className="text-[11px] text-zinc-400">We blend effortlessly into your event, capturing spontaneous laughter and tearful embraces.</p>
                </div>
              </div>
            </div>

            {/* Contact Quick Info */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap gap-6 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5 text-white">
                <MapPin className="w-4 h-4 text-amber-400" /> New Delhi & Destination Worldwide
              </span>
              <span className="flex items-center gap-1.5 text-zinc-300 font-mono">
                2,500+ Milestones Captured
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
