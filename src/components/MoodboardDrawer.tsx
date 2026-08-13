import React from 'react';
import { PortfolioItem } from '../types';
import { X, Trash2, Calendar, Eye, Sparkles, Heart } from 'lucide-react';

interface MoodboardDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedItems: PortfolioItem[];
  onRemoveItem: (item: PortfolioItem) => void;
  onClearAll: () => void;
  onSelectItem: (item: PortfolioItem) => void;
  onOpenBooking: () => void;
}

export const MoodboardDrawer: React.FC<MoodboardDrawerProps> = ({
  isOpen,
  onClose,
  savedItems,
  onRemoveItem,
  onClearAll,
  onSelectItem,
  onOpenBooking
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0a0a0a] border-l border-white/10 shadow-2xl flex flex-col justify-between text-[#e0e0e0]">
          {/* Drawer Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <h3 className="font-serif text-xl font-light text-white">Your Saved Moodboard</h3>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-white">
                {savedItems.length}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 border border-white/10"
              id="close-moodboard-drawer-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {savedItems.length === 0 ? (
              <div className="text-center py-20 text-zinc-500 space-y-3">
                <Heart className="w-12 h-12 text-zinc-700 mx-auto" />
                <p className="font-serif text-lg text-zinc-400">Your moodboard is empty</p>
                <p className="text-xs max-w-xs mx-auto">
                  Click the heart icon on any photo in our portfolio to bookmark it for your shoot reference.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-zinc-400 pb-2 border-b border-white/5">
                  <span>Saved Reference Photos</span>
                  <button
                    onClick={onClearAll}
                    className="text-rose-400 hover:text-rose-300 flex items-center gap-1 font-mono text-[10px] uppercase"
                  >
                    <Trash2 className="w-3 h-3" /> Clear Moodboard
                  </button>
                </div>

                {savedItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#0f0f0f] border border-white/5 p-3 flex gap-3 items-center group relative hover:border-white/20 transition-all"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 object-cover border border-white/10 shrink-0 cursor-pointer"
                      onClick={() => onSelectItem(item)}
                    />

                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] uppercase tracking-wider font-mono text-amber-400 block">
                        {item.categoryLabel}
                      </span>
                      <h4
                        onClick={() => onSelectItem(item)}
                        className="font-serif text-sm text-white hover:text-amber-300 truncate cursor-pointer font-medium"
                      >
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-zinc-400 truncate mt-0.5">{item.location}</p>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item)}
                      className="p-1.5 text-zinc-500 hover:text-rose-400 hover:bg-white/5"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer Actions */}
          {savedItems.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#0f0f0f] space-y-3">
              <p className="text-xs text-zinc-400">
                Ready to bring these reference styles to your upcoming shoot?
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full py-3.5 bg-white text-slate-950 font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-xl flex items-center justify-center gap-2"
                id="moodboard-book-now-btn"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Shoot With Saved Moods</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
