import React, { useState, useRef } from 'react';
import { BEFORE_AFTER_SAMPLES } from '../data/studioData';
import { Sparkles, Sliders, ShieldCheck } from 'lucide-react';

export const RetouchingSection: React.FC = () => {
  const [activeSampleIndex, setActiveSampleIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const sample = BEFORE_AFTER_SAMPLES[activeSampleIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <section id="retouching" className="py-24 bg-[#0a0a0a] text-[#e0e0e0] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-mono block mb-3">
            FINE-ART POST-PROCESSING
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-white mb-4">
            Interactive Retouching Showcase
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Drag the slider to compare raw capture vs Mohit Studio’s high-end frequency separation and color-grading mastery.
          </p>
        </div>

        {/* Retouching Sample Selector Tabs */}
        <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2">
          {BEFORE_AFTER_SAMPLES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                setActiveSampleIndex(idx);
                setSliderPos(50);
              }}
              id={`sample-tab-${s.id}`}
              className={`px-5 py-2.5 text-xs tracking-widest uppercase transition-all border ${
                activeSampleIndex === idx
                  ? 'border-white text-white bg-white/5 font-medium'
                  : 'border-white/10 text-zinc-500 hover:text-zinc-300 hover:border-white/20'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-4xl mx-auto bg-[#0f0f0f] border border-white/10 p-4 sm:p-6 shadow-2xl">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[500px] w-full overflow-hidden select-none cursor-ew-resize border border-white/5"
          >
            {/* AFTER IMAGE (Background / Edited) */}
            <img
              src={sample.afterImage}
              alt="After Retouching"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/80 backdrop-blur-md text-white border border-white/20 text-[10px] uppercase tracking-widest font-mono">
              Master Retouched
            </span>

            {/* BEFORE IMAGE (Clipped / Raw) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden z-10"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={sample.beforeImage}
                alt="Before Retouching"
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full max-w-none object-cover object-center"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
              <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/80 backdrop-blur-md text-zinc-400 border border-white/10 text-[10px] uppercase tracking-widest font-mono">
                Original Capture
              </span>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute inset-y-0 z-30 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-white text-white flex items-center justify-center shadow-2xl">
                <Sliders className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Sample Description Info */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-zinc-400">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-zinc-500 font-mono block">Technique Applied</span>
              <span className="text-white font-medium text-sm">{sample.technique}</span>
            </div>
            <p className="max-w-xl text-zinc-400 leading-relaxed">{sample.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
