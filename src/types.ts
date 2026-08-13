/**
 * Types for Mohit Studio Photography Application
 */

export type PortfolioCategory = 
  | 'all'
  | 'wedding'
  | 'portrait'
  | 'prewedding'
  | 'fashion'
  | 'commercial'
  | 'events';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  image: string; // Path loaded from /public section, e.g., '/images/wedding.jpg'
  location: string;
  date: string;
  likes: number;
  featured?: boolean;
  aspectRatio?: 'square' | 'wide' | 'tall';
  exif: {
    camera: string;
    lens: string;
    aperture: string;
    shutterSpeed: string;
    iso: string;
  };
  clientName?: string;
  description: string;
  tags: string[];
}

export interface ServicePackage {
  id: string;
  title: string;
  tagline: string;
  category: PortfolioCategory;
  startingPrice: number;
  duration: string;
  deliverablesCount: string;
  image: string; // Loaded from /public section
  popular?: boolean;
  features: string[];
  description: string;
}

export interface BeforeAfterSample {
  id: string;
  title: string;
  category: string;
  beforeImage: string; // Loaded from /public section
  afterImage: string;  // Loaded from /public section
  description: string;
  technique: string;
}

export interface GearItem {
  id: string;
  name: string;
  category: 'Camera Body' | 'Lens' | 'Lighting' | 'Audio & Drone' | 'Accessories';
  specs: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  eventType: string;
  rating: number;
  avatar: string;
  quote: string;
  date: string;
  shootLocation: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Booking & Deposit' | 'Deliverables' | 'Equipment';
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  eventType: PortfolioCategory;
  eventDate: string;
  location: string;
  estimatedGuests?: number;
  budgetRange: string;
  notes: string;
  addons: string[];
}

export interface AIAdvisorRequest {
  theme: string;
  shootType: string;
  locationType: 'Indoor Studio' | 'Outdoor Nature' | 'Heritage Monument' | 'Beach / Sunset' | 'Urban Street';
  timeOfDay: 'Golden Hour' | 'Night / Flash' | 'Midday Natural' | 'Studio Controlled';
}

export interface AIAdvisorResponse {
  conceptTitle: string;
  vibeSummary: string;
  outfitSuggestions: string[];
  lightingStyle: string;
  recommendedPoses: string[];
  colorPalette: string[];
  proTips: string[];
}
