import React, { useState, useEffect } from 'react';
import { HERO_SLIDES, STUDIO_INFO } from '../data/studioData';
import { Camera, Calendar, Calculator, Sparkles, ChevronLeft, ChevronRight, Award, ShieldCheck, Star } from 'lucide-react';

interface HeroSectionProps {
  onExplorePortfolio: () => void;
  onOpenBooking: () => void;
  onOpenEstimator: () => void;
  onNavigateToAI: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePortfolio,
  onOpenBooking,
  onOpenEstimator,
  onNavigateToAI
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden bg-slate-950 text-white">
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlideIndex ? 'opacity-100 scale-105 transition-transform duration-[7000ms]' : 'opacity-0 scale-100'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Multi-layered Gradient Overlay for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,119,6,0.15),transparent_60%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pt-12 sm:pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-amber-500/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>{currentSlide.tag}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-slate-300 font-mono text-xs">{STUDIO_INFO.experienceYears}+ Years of Craftsmanship</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            {currentSlide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
            {currentSlide.subtitle}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={onOpenBooking}
              id="hero-book-now-btn"
              className="px-6 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/30 transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center gap-3"
            >
              <Calendar className="w-5 h-5 text-slate-950" />
              <span>Book Your Shoot</span>
            </button>

            <button
              onClick={onExplorePortfolio}
              id="hero-explore-btn"
              className="px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-medium text-base border border-slate-700/80 hover:border-amber-500/50 backdrop-blur-md transition-all flex items-center gap-3"
            >
              <Camera className="w-5 h-5 text-amber-400" />
              <span>Explore Portfolio</span>
            </button>

            <button
              onClick={onOpenEstimator}
              id="hero-calculator-btn"
              className="px-5 py-4 rounded-xl bg-slate-950/60 hover:bg-slate-900 text-amber-300 font-medium text-sm border border-amber-500/30 hover:border-amber-400 transition-all flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Price Calculator</span>
            </button>
          </div>

          {/* AI Concept Assistant Teaser */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900/90 to-amber-950/40 border border-amber-500/20 backdrop-blur-md flex items-center justify-between gap-4 max-w-xl">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Mohit AI Director</p>
                <p className="text-xs sm:text-sm text-slate-300">Unsure about your shoot mood or outfits? Get instant AI shoot vision!</p>
              </div>
            </div>
            <button
              onClick={onNavigateToAI}
              id="hero-ai-advisor-trigger"
              className="px-3.5 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-medium text-xs border border-amber-500/40 transition-all shrink-0"
            >
              Try AI Vision
            </button>
          </div>
        </div>
      </div>

      {/* Slide Controls & Progress Dots */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlideIndex ? 'w-8 bg-amber-400 shadow-md shadow-amber-400/50' : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              title={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-500/40 transition-all"
            title="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-500/40 transition-all"
            title="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom Live Metrics Bar */}
      <div className="relative z-10 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-xl py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-2">
              <div className="flex items-center gap-1.5 text-amber-400 font-serif text-2xl sm:text-3xl font-bold mb-1">
                <span>{STUDIO_INFO.completedShoots}+</span>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-mono">Shoots Mastered</p>
            </div>

            <div className="flex flex-col items-center justify-center p-2 border-l border-slate-800/60">
              <div className="flex items-center gap-1 text-amber-400 font-serif text-2xl sm:text-3xl font-bold mb-1">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span>{STUDIO_INFO.satisfactionRate}</span>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-mono">Client Rating</p>
            </div>

            <div className="flex flex-col items-center justify-center p-2 border-l border-slate-800/60">
              <div className="flex items-center gap-1.5 text-amber-400 font-serif text-2xl sm:text-3xl font-bold mb-1">
                <Award className="w-5 h-5" />
                <span>{STUDIO_INFO.awardsWon}+</span>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-mono">National Awards</p>
            </div>

            <div className="flex flex-col items-center justify-center p-2 border-l border-slate-800/60">
              <div className="flex items-center gap-1.5 text-amber-400 font-serif text-2xl sm:text-3xl font-bold mb-1">
                <ShieldCheck className="w-5 h-5" />
                <span>100%</span>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-mono">RAW Backup Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
