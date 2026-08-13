import React, { useState } from 'react';
import { AIAdvisorResponse } from '../types';
import { Sparkles, Send, Loader2, CheckCircle2, Palette, Shirt, Lightbulb } from 'lucide-react';

export const AIAdvisorSection: React.FC = () => {
  const [theme, setTheme] = useState('Royal Heritage Elegance');
  const [shootType, setShootType] = useState('Wedding & Pre-Wedding');
  const [locationType, setLocationType] = useState<'Indoor Studio' | 'Outdoor Nature' | 'Heritage Monument' | 'Beach / Sunset' | 'Urban Street'>('Heritage Monument');
  const [timeOfDay, setTimeOfDay] = useState<'Golden Hour' | 'Night / Flash' | 'Midday Natural' | 'Studio Controlled'>('Golden Hour');

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIAdvisorResponse | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/ai-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ theme, shootType, locationType, timeOfDay })
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error('Error generating AI concept:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-advisor" className="py-24 bg-[#0f0f0f] text-[#e0e0e0] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-mono block mb-3">
            AI CONCEPT DIRECTOR
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-white mb-4">
            Custom Moodboard & Shoot Concept Generator
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Need guidance on lighting, outfit colors, or posing themes? Input your vision and let Mohit AI Director formulate your customized shoot blueprint.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Form Column */}
          <div className="lg:col-span-5 bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 shadow-2xl">
            <h3 className="font-serif text-xl font-light text-white mb-6 border-b border-white/5 pb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Configure Shoot Parameters
            </h3>

            <form onSubmit={handleGenerate} className="space-y-5 text-xs">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-2">
                  Shoot Theme / Vibe Mood
                </label>
                <input
                  type="text"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  placeholder="e.g. Royal Vintage, Minimalist Fashion..."
                  className="w-full bg-[#0f0f0f] border border-white/10 px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-2">
                  Category
                </label>
                <select
                  value={shootType}
                  onChange={(e) => setShootType(e.target.value)}
                  className="w-full bg-[#0f0f0f] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                >
                  <option value="Wedding & Pre-Wedding">Wedding & Pre-Wedding</option>
                  <option value="Fashion Editorial">Fashion Editorial</option>
                  <option value="Studio Portrait">Studio Portrait</option>
                  <option value="Commercial Brand">Commercial Brand</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-2">
                  Location Setting
                </label>
                <select
                  value={locationType}
                  onChange={(e) => setLocationType(e.target.value as any)}
                  className="w-full bg-[#0f0f0f] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                >
                  <option value="Indoor Studio">Indoor Studio Stage A</option>
                  <option value="Heritage Monument">Heritage Monument / Palace</option>
                  <option value="Outdoor Nature">Outdoor Nature / Garden</option>
                  <option value="Beach / Sunset">Beach / Sunset Coast</option>
                  <option value="Urban Street">Urban Architecture</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-2">
                  Lighting / Time of Day
                </label>
                <select
                  value={timeOfDay}
                  onChange={(e) => setTimeOfDay(e.target.value as any)}
                  className="w-full bg-[#0f0f0f] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                >
                  <option value="Golden Hour">Golden Hour Sunset</option>
                  <option value="Studio Controlled">Studio Controlled Strobe Lighting</option>
                  <option value="Night / Flash">Night Dramatic Flash</option>
                  <option value="Midday Natural">Soft Natural Skylight</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                id="generate-ai-concept-btn"
                className="w-full py-4 bg-white text-slate-950 font-medium text-xs uppercase tracking-widest border border-white hover:bg-zinc-200 transition-all shadow-xl flex items-center justify-center gap-2 mt-4"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Analyzing Aesthetic Vision...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Generate Creative Blueprint</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* AI Concept Output Display Column */}
          <div className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 shadow-2xl min-h-[460px] flex flex-col justify-between">
            {!result && !loading && (
              <div className="my-auto text-center py-12 px-4">
                <Sparkles className="w-12 h-12 text-zinc-600 mx-auto mb-4 animate-pulse" />
                <h4 className="font-serif text-xl text-white font-light mb-2">Your Custom AI Concept Blueprint</h4>
                <p className="text-zinc-500 text-xs max-w-md mx-auto">
                  Click 'Generate Creative Blueprint' to receive tailored lighting directions, outfit pairing palettes, and pro posing tips from Mohit Studio AI.
                </p>
              </div>
            )}

            {loading && (
              <div className="my-auto text-center py-16">
                <Loader2 className="w-10 h-10 text-white animate-spin mx-auto mb-4" />
                <p className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
                  Synthesizing lighting, color physics, and posing geometry...
                </p>
              </div>
            )}

            {result && !loading && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* Concept Header */}
                <div className="border-b border-white/10 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-mono block mb-1">
                    CONCEPT RECOMMENDATION
                  </span>
                  <h3 className="font-serif text-2xl font-light text-white">{result.conceptTitle}</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{result.vibeSummary}</p>
                </div>

                {/* Recommended Color Palette */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-1.5 font-mono">
                    <Palette className="w-3.5 h-3.5 text-white" /> Recommended Color Harmony
                  </h4>
                  <div className="flex gap-2">
                    {result.colorPalette.map((hex, idx) => (
                      <div key={idx} className="flex-1 text-center">
                        <div
                          className="h-10 border border-white/10 shadow-inner"
                          style={{ backgroundColor: hex }}
                        />
                        <span className="text-[9px] font-mono text-zinc-500 block mt-1">{hex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outfit & Posing Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-[#0f0f0f] border border-white/5 p-4">
                    <h5 className="font-mono text-[10px] uppercase tracking-widest text-zinc-300 mb-2.5 flex items-center gap-1.5">
                      <Shirt className="w-3.5 h-3.5 text-amber-400" /> Outfit Styling Ideas
                    </h5>
                    <ul className="space-y-2 text-zinc-400">
                      {result.outfitSuggestions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#0f0f0f] border border-white/5 p-4">
                    <h5 className="font-mono text-[10px] uppercase tracking-widest text-zinc-300 mb-2.5 flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400" /> Lighting & Posing Guide
                    </h5>
                    <p className="text-zinc-400 mb-3 leading-relaxed">{result.lightingStyle}</p>
                    <div className="space-y-1">
                      {result.recommendedPoses.map((pose, i) => (
                        <p key={i} className="text-[11px] text-zinc-300 italic">
                          • {pose}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pro Tips */}
                <div className="bg-white/5 border border-white/10 p-4">
                  <h5 className="font-mono text-[10px] uppercase tracking-widest text-white mb-2">
                    Studio Director Pro Tips
                  </h5>
                  <div className="space-y-1 text-xs text-zinc-300">
                    {result.proTips.map((tip, i) => (
                      <p key={i}>— {tip}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
