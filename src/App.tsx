import React, { useState, useEffect } from 'react';
import { PortfolioItem, ServicePackage, PortfolioCategory } from './types';
import { PORTFOLIO_ITEMS } from './data/studioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { RetouchingSection } from './components/RetouchingSection';
import { AIAdvisorSection } from './components/AIAdvisorSection';
import { AboutSection } from './components/AboutSection';
import { StudioGearSection } from './components/StudioGearSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

import { LightboxModal } from './components/LightboxModal';
import { PriceEstimatorModal } from './components/PriceEstimatorModal';
import { BookingModal } from './components/BookingModal';
import { MoodboardDrawer } from './components/MoodboardDrawer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Selected item for Lightbox modal
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  // Saved Moodboard items in LocalStorage
  const [savedItems, setSavedItems] = useState<PortfolioItem[]>(() => {
    try {
      const stored = localStorage.getItem('mohit_studio_moodboard');
      return stored ? JSON.parse(stored) : [PORTFOLIO_ITEMS[0], PORTFOLIO_ITEMS[1]];
    } catch {
      return [PORTFOLIO_ITEMS[0], PORTFOLIO_ITEMS[1]];
    }
  });

  // UI Modals / Drawers state
  const [isMoodboardOpen, setIsMoodboardOpen] = useState<boolean>(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  // Booking pre-fills
  const [bookingPrefill, setBookingPrefill] = useState<{
    category?: PortfolioCategory;
    estimate?: number;
    breakdown?: string;
  }>({});

  useEffect(() => {
    try {
      localStorage.setItem('mohit_studio_moodboard', JSON.stringify(savedItems));
    } catch (err) {
      console.error('Failed to sync moodboard to local storage:', err);
    }
  }, [savedItems]);

  const handleToggleSave = (item: PortfolioItem) => {
    setSavedItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleClearMoodboard = () => {
    setSavedItems([]);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lightbox Next / Prev navigation
  const handleLightboxNext = () => {
    if (!lightboxItem) return;
    const currentIndex = PORTFOLIO_ITEMS.findIndex((i) => i.id === lightboxItem.id);
    const nextIndex = (currentIndex + 1) % PORTFOLIO_ITEMS.length;
    setLightboxItem(PORTFOLIO_ITEMS[nextIndex]);
  };

  const handleLightboxPrev = () => {
    if (!lightboxItem) return;
    const currentIndex = PORTFOLIO_ITEMS.findIndex((i) => i.id === lightboxItem.id);
    const prevIndex = (currentIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    setLightboxItem(PORTFOLIO_ITEMS[prevIndex]);
  };

  const handleSelectPackageToBook = (pkg: ServicePackage) => {
    setBookingPrefill({
      category: pkg.category,
      estimate: pkg.startingPrice,
      breakdown: `${pkg.title} (${pkg.duration})`
    });
    setIsBookingOpen(true);
  };

  const handleProceedFromEstimator = (estimatedPrice: number, breakdown: string) => {
    setBookingPrefill({
      estimate: estimatedPrice,
      breakdown: breakdown
    });
    setIsBookingOpen(true);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#e0e0e0] font-sans selection:bg-white selection:text-slate-950">
      {/* Sticky Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        savedCount={savedItems.length}
        onOpenMoodboard={() => setIsMoodboardOpen(true)}
        onOpenBooking={() => {
          setBookingPrefill({});
          setIsBookingOpen(true);
        }}
      />

      {/* Main Page Sections */}
      <main>
        <HeroSection
          onExplorePortfolio={() => handleNavigate('portfolio')}
          onOpenBooking={() => {
            setBookingPrefill({});
            setIsBookingOpen(true);
          }}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
          onNavigateToAI={() => handleNavigate('ai-advisor')}
        />

        <PortfolioSection
          onSelectItem={(item) => setLightboxItem(item)}
          savedItemIds={savedItems.map((i) => i.id)}
          onToggleSave={handleToggleSave}
        />

        <ServicesSection
          onSelectPackage={handleSelectPackageToBook}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />

        <RetouchingSection />

        <AIAdvisorSection />

        <AboutSection />

        <StudioGearSection />

        <TestimonialsSection />

        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => {
          setBookingPrefill({});
          setIsBookingOpen(true);
        }}
      />

      {/* Modals & Overlays */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onNext={handleLightboxNext}
        onPrev={handleLightboxPrev}
        isSaved={lightboxItem ? savedItems.some((i) => i.id === lightboxItem.id) : false}
        onToggleSave={handleToggleSave}
      />

      <PriceEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onProceedToBook={handleProceedFromEstimator}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefilledCategory={bookingPrefill.category}
        prefilledEstimate={bookingPrefill.estimate}
        prefilledBreakdown={bookingPrefill.breakdown}
      />

      <MoodboardDrawer
        isOpen={isMoodboardOpen}
        onClose={() => setIsMoodboardOpen(false)}
        savedItems={savedItems}
        onRemoveItem={handleToggleSave}
        onClearAll={handleClearMoodboard}
        onSelectItem={(item) => {
          setIsMoodboardOpen(false);
          setLightboxItem(item);
        }}
        onOpenBooking={() => {
          setIsMoodboardOpen(false);
          setIsBookingOpen(true);
        }}
      />
    </div>
  );
}
