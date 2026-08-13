import React from 'react';
import { PortfolioItem } from '../types';
import { X, Heart, MapPin, Calendar, Camera, Share2, Sparkles, ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  isSaved: boolean;
  onToggleSave: (item: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
  isSaved,
  onToggleSave
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!item) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Lightbox Container */}
      <div className="relative z-10 w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2.5 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 hover:border-amber-500/50 transition-all"
          title="Close Lightbox (Esc)"
          id="lightbox-close-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Next / Prev Navigation Overlay Controls */}
        <button
          onClick={onPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-950/80 text-slate-300 hover:text-amber-400 border border-slate-700 transition-all hover:scale-110"
          title="Previous Photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-950/80 text-slate-300 hover:text-amber-400 border border-slate-700 transition-all hover:scale-110 lg:right-[380px]"
          title="Next Photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Photo Stage Area */}
        <div className="relative flex-1 bg-slate-950 flex items-center justify-center p-4 min-h-[300px] lg:min-h-[500px]">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
          />

          <div className="absolute bottom-3 left-4 z-20 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-amber-300 font-mono">
            Public Path: {item.image}
          </div>
        </div>

        {/* Sidebar Info & EXIF details */}
        <div className="w-full lg:w-96 bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800 p-6 flex flex-col justify-between overflow-y-auto max-h-[40vh] lg:max-h-none">
          <div>
            {/* Category Tag & Actions */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider">
                {item.categoryLabel}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onToggleSave(item)}
                  className={`p-2 rounded-xl border text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isSaved
                      ? 'bg-rose-500/20 border-rose-500/40 text-rose-400'
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
                  <span>{isSaved ? 'Saved' : 'Save'}</span>
                </button>

                <button
                  onClick={handleShare}
                  className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-amber-400 transition-all text-xs"
                  title="Copy Page Link"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Title & Description */}
            <h2 className="font-serif text-2xl font-bold text-white mb-2 leading-tight">{item.title}</h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">{item.description}</p>

            {/* Shoot Details */}
            <div className="space-y-2.5 text-xs text-slate-300 bg-slate-950/60 p-4 rounded-xl border border-slate-800 mb-6">
              {item.clientName && (
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Client / Couple:</span>
                  <span className="font-semibold text-amber-300">{item.clientName}</span>
                </div>
              )}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> Location:
                </span>
                <span className="font-medium text-slate-200">{item.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" /> Date:
                </span>
                <span className="font-medium text-slate-200">{item.date}</span>
              </div>
            </div>

            {/* EXIF Camera Specs */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5" /> EXIF Camera Metadata
              </h4>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono bg-slate-950 p-3 rounded-xl border border-slate-800 text-slate-300">
                <div>
                  <span className="text-slate-500 block">Camera:</span>
                  <span className="text-slate-200 truncate block">{item.exif.camera}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Lens:</span>
                  <span className="text-slate-200 truncate block">{item.exif.lens}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Aperture:</span>
                  <span className="text-amber-300">{item.exif.aperture}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Shutter:</span>
                  <span className="text-amber-300">{item.exif.shutterSpeed}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {item.tags.map((tag, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 font-mono">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="pt-4 border-t border-slate-800">
            <p className="text-xs text-slate-400 mb-2 text-center">Love this lighting or pose style for your own shoot?</p>
            <button
              onClick={() => {
                onClose();
                // trigger booking
              }}
              className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request Similar Shoot Style</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
