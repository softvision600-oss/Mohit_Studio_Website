import React from 'react';
import { STUDIO_GEAR } from '../data/studioData';
import { Camera, Zap, Video, Aperture, Focus, ShieldCheck } from 'lucide-react';

export const StudioGearSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera': return <Camera className="w-5 h-5 text-white" />;
      case 'Aperture': return <Aperture className="w-5 h-5 text-white" />;
      case 'Focus': return <Focus className="w-5 h-5 text-white" />;
      case 'Zap': return <Zap className="w-5 h-5 text-white" />;
      case 'Video': return <Video className="w-5 h-5 text-white" />;
      default: return <Camera className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="gear" className="py-24 bg-[#0f0f0f] text-[#e0e0e0] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-mono block mb-3">
            STUDIO & TECHNOLOGY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-white mb-4">
            World-Class Camera Rigging & Strobe Modifiers
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Uncompromising optical fidelity requires the world’s finest medium format sensors, high-speed prime lenses, and precision lighting.
          </p>
        </div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDIO_GEAR.map((item) => (
            <div
              key={item.id}
              className="bg-[#0a0a0a] border border-white/5 hover:border-white/20 p-6 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 px-2.5 py-1 bg-white/5 border border-white/10">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-light text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs font-mono text-amber-400 mb-3 border-b border-white/5 pb-3">
                  {item.specs}
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 pt-3 border-t border-white/5">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                <span>Calibrated & Tested Daily</span>
              </div>
            </div>
          ))}

          {/* Studio Stage Callout Card */}
          <div className="bg-gradient-to-br from-zinc-900 to-[#0a0a0a] border border-white/15 p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 block mb-2">
                3,500 SQ. FT. PRODUCTION STAGE
              </span>
              <h3 className="font-serif text-2xl font-light text-white mb-3">Mohit Studio Stage A</h3>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                Climate-controlled infinity cyclorama wall, motorized overhead softbox grids, private hair & makeup dressing lounge, and live 4K tethering screens.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs text-zinc-400 font-mono">
              <span>New Delhi Studio</span>
              <span className="text-white font-medium">Book Stage A →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
