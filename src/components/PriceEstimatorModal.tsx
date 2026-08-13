import React, { useState, useMemo } from 'react';
import { X, Calculator, Check, Sparkles, Calendar, HelpCircle } from 'lucide-react';

interface PriceEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToBook: (estimatedPrice: number, breakdown: string) => void;
}

export const PriceEstimatorModal: React.FC<PriceEstimatorModalProps> = ({
  isOpen,
  onClose,
  onProceedToBook
}) => {
  const [shootType, setShootType] = useState<'wedding' | 'prewedding' | 'portrait' | 'commercial'>('wedding');
  const [days, setDays] = useState<number>(2);
  const [photographers, setPhotographers] = useState<number>(3);
  const [includeDrone, setIncludeDrone] = useState<boolean>(true);
  const [includeAlbum, setIncludeAlbum] = useState<boolean>(true);
  const [includeVideoReel, setIncludeVideoReel] = useState<boolean>(true);
  const [includeLiveStream, setIncludeLiveStream] = useState<boolean>(false);

  const calculatedEstimate = useMemo(() => {
    let base = 0;
    if (shootType === 'wedding') base = 45000 * days;
    else if (shootType === 'prewedding') base = 35000 * Math.max(1, Math.min(2, days));
    else if (shootType === 'portrait') base = 15000;
    else if (shootType === 'commercial') base = 30000 * days;

    let teamCost = (photographers - 1) * 12000 * days;
    let droneCost = includeDrone ? 18000 * days : 0;
    let albumCost = includeAlbum ? 22000 : 0;
    let videoCost = includeVideoReel ? 15000 : 0;
    let streamCost = includeLiveStream ? 20000 * days : 0;

    return base + teamCost + droneCost + albumCost + videoCost + streamCost;
  }, [shootType, days, photographers, includeDrone, includeAlbum, includeVideoReel, includeLiveStream]);

  if (!isOpen) return null;

  const handleProceed = () => {
    const breakdown = `${shootType.toUpperCase()} (${days} day/s, ${photographers} crew, ${
      includeDrone ? 'Drone, ' : ''
    }${includeAlbum ? 'Italian Album, ' : ''}${includeVideoReel ? 'Reels, ' : ''}${
      includeLiveStream ? 'Live Stream' : ''
    })`;
    onProceedToBook(calculatedEstimate, breakdown);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
          id="close-estimator-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">Interactive Package Estimator</h3>
            <p className="text-xs text-slate-400">Configure your parameters to calculate a transparent quote</p>
          </div>
        </div>

        {/* Form Controls */}
        <div className="space-y-6 text-sm">
          {/* Shoot Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">1. Select Shoot Category</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'wedding', label: 'Wedding' },
                { id: 'prewedding', label: 'Pre-Wedding' },
                { id: 'portrait', label: 'Portrait Studio' },
                { id: 'commercial', label: 'Commercial' }
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setShootType(type.id as any)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-medium transition-all ${
                    shootType === type.id
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500 font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Duration in Days */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              2. Coverage Duration ({days} {days === 1 ? 'Day' : 'Days'})
            </label>
            <input
              type="range"
              min="1"
              max="5"
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value))}
              className="w-full accent-amber-500 h-2 bg-slate-950 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
              <span>1 Day</span>
              <span>2 Days</span>
              <span>3 Days</span>
              <span>4 Days</span>
              <span>5 Days</span>
            </div>
          </div>

          {/* Photographers Crew Count */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              3. Photography Crew Size ({photographers} Photographers)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setPhotographers(num)}
                  className={`py-2 rounded-xl border text-xs font-medium transition-all ${
                    photographers === num
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500 font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {num} {num === 1 ? 'Photographer' : 'Crew Team'}
                </button>
              ))}
            </div>
          </div>

          {/* Add-ons Checklist */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">4. Add-ons & Deliverables</label>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700">
                <span className="text-xs text-slate-300 flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={includeDrone}
                    onChange={(e) => setIncludeDrone(e.target.checked)}
                    className="accent-amber-500 w-4 h-4 rounded"
                  />
                  4K Cinematic Aerial Drone Coverage (+₹18,000/day)
                </span>
                <span className="text-xs font-mono text-amber-400">+₹18k</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700">
                <span className="text-xs text-slate-300 flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={includeAlbum}
                    onChange={(e) => setIncludeAlbum(e.target.checked)}
                    className="accent-amber-500 w-4 h-4 rounded"
                  />
                  Handcrafted Italian Leather Printed Album (100 Pages)
                </span>
                <span className="text-xs font-mono text-amber-400">+₹22k</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700">
                <span className="text-xs text-slate-300 flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={includeVideoReel}
                    onChange={(e) => setIncludeVideoReel(e.target.checked)}
                    className="accent-amber-500 w-4 h-4 rounded"
                  />
                  2-Minute Cinematic Instagram Reels Teaser Video
                </span>
                <span className="text-xs font-mono text-amber-400">+₹15k</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700">
                <span className="text-xs text-slate-300 flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={includeLiveStream}
                    onChange={(e) => setIncludeLiveStream(e.target.checked)}
                    className="accent-amber-500 w-4 h-4 rounded"
                  />
                  YouTube 4K Multi-Cam Live Streaming for Guests
                </span>
                <span className="text-xs font-mono text-amber-400">+₹20k</span>
              </label>
            </div>
          </div>

          {/* Result Calculation Summary */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-amber-500/40 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 block font-mono">Estimated Investment</span>
              <span className="font-serif text-3xl font-bold text-amber-400">
                ₹{calculatedEstimate.toLocaleString('en-IN')}
              </span>
            </div>
            <button
              onClick={handleProceed}
              id="estimator-proceed-btn"
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book With This Estimate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
