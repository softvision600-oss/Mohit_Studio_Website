import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS, GALLERY_CATEGORIES } from '../data/studioData';
import { PortfolioItem, PortfolioCategory } from '../types';
import { Search, Heart, Eye, MapPin, Camera, Sparkles, Filter, Grid, SlidersHorizontal } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectItem: (item: PortfolioItem) => void;
  savedItemIds: string[];
  onToggleSave: (item: PortfolioItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectItem,
  savedItemIds,
  onToggleSave
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [likesMap, setLikesMap] = useState<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    PORTFOLIO_ITEMS.forEach(item => {
      map[item.id] = item.likes;
    });
    return map;
  });

  const handleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikesMap(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  };

  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.tags.some(t => t.toLowerCase().includes(q)) ||
        (item.clientName && item.clientName.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="portfolio" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Mohit Studio Gallery</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Curated Portfolio of Fine-Art Moments
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore timeless wedding ceremonies, high-fashion portraiture, and cinematic outdoor sessions. All photos loaded from our public showcase archive.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 mb-10 backdrop-blur-md shadow-xl flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                id={`cat-filter-${cat.id}`}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    selectedCategory === cat.id ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search & Layout View Toggle */}
          <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
            <div className="relative w-full lg:w-64">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search location, client, style..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  viewMode === 'grid' ? 'bg-slate-800 text-amber-400' : 'text-slate-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  viewMode === 'masonry' ? 'bg-slate-800 text-amber-400' : 'text-slate-400 hover:text-white'
                }`}
                title="Masonry View"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
            <Filter className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-slate-300">No photos match your filter</h3>
            <p className="text-sm text-slate-500 mt-1">Try clearing your search terms or selecting 'All Works'</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto'
            }`}
          >
            {filteredItems.map((item) => {
              const isSaved = savedItemIds.includes(item.id);
              const currentLikes = likesMap[item.id] || item.likes;

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectItem(item)}
                  className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 cursor-pointer hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col"
                  id={`portfolio-card-${item.id}`}
                >
                  {/* Photo Container */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Category Pill */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[11px] font-semibold tracking-wider uppercase">
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* Quick Action Overlay Buttons */}
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleSave(item);
                        }}
                        className={`p-2 rounded-xl backdrop-blur-md border transition-all ${
                          isSaved
                            ? 'bg-rose-500/90 text-white border-rose-400'
                            : 'bg-slate-950/60 text-slate-300 hover:text-rose-400 border-slate-700/60'
                        }`}
                        title={isSaved ? 'Remove from Moodboard' : 'Save to Moodboard'}
                      >
                        <Heart className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
                      </button>

                      <button
                        onClick={(e) => handleLike(e, item.id)}
                        className="p-2 rounded-xl bg-slate-950/60 backdrop-blur-md border border-slate-700/60 text-slate-300 hover:text-amber-400 transition-all flex items-center gap-1 text-xs"
                        title="Appreciate Photo"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>{currentLikes}</span>
                      </button>
                    </div>

                    {/* Hover Inspect Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                      <div className="p-3 rounded-full bg-amber-500 text-slate-950 shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                        <Eye className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content Info */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 mb-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80 pt-3">
                        <span className="flex items-center gap-1 text-slate-300">
                          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span className="truncate max-w-[140px]">{item.location}</span>
                        </span>

                        <span className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
                          <Camera className="w-3 h-3 text-slate-500" />
                          <span>{item.exif.camera.split(' ')[0]}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
