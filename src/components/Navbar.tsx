import React, { useState, useEffect } from 'react';
import { Camera, Heart, Sparkles, Calendar, Menu, X, Phone, Award } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  savedCount: number;
  onOpenMoodboard: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  savedCount,
  onOpenMoodboard,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'retouching', label: 'Retouching' },
    { id: 'ai-advisor', label: 'AI Concept Advisor', isSpecial: true },
    { id: 'about', label: 'About Mohit' },
    { id: 'gear', label: 'Studio & Gear' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-amber-500/20 shadow-2xl py-3'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-200 p-[2px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Camera className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  MOHIT STUDIO
                </span>
                <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 hidden sm:inline-block">
                  Luxury Photography
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider uppercase font-mono">
                Est. 2014 • New Delhi & Worldwide
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                id={`nav-link-${link.id}`}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                  activeSection === link.id
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30 shadow-inner'
                    : 'text-slate-300 hover:text-amber-300 hover:bg-slate-800/50'
                }`}
              >
                {link.isSpecial && <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />}
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Saved Moodboard Button */}
            <button
              onClick={onOpenMoodboard}
              id="moodboard-toggle-btn"
              className="relative p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all flex items-center gap-2"
              title="View Saved Moodboard Photos"
            >
              <Heart className={`w-5 h-5 ${savedCount > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
              <span className="text-xs font-medium hidden sm:inline">Moodboard</span>
              {savedCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Book Shoot Button */}
            <button
              onClick={onOpenBooking}
              id="header-book-btn"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-sm shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Book Shoot</span>
              <span className="sm:hidden">Book</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white lg:hidden"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 mt-3 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                  activeSection === link.id
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.isSpecial && <Sparkles className="w-4 h-4 text-amber-400" />}
                  {link.label}
                </span>
                <span className="text-xs text-slate-500">→</span>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" /> +91 98765 43210
            </span>
            <span className="flex items-center gap-1 text-amber-400">
              <Award className="w-3.5 h-3.5" /> 18+ Awards
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
