import React, { useState, useEffect } from 'react';
import { BookingFormData, PortfolioCategory } from '../types';
import { X, Calendar, CheckCircle2, Send, Sparkles, MapPin, User, Mail, Phone } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledCategory?: PortfolioCategory;
  prefilledEstimate?: number;
  prefilledBreakdown?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefilledCategory = 'wedding',
  prefilledEstimate,
  prefilledBreakdown
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    eventType: prefilledCategory,
    eventDate: '',
    location: '',
    estimatedGuests: 200,
    budgetRange: prefilledEstimate ? `₹${prefilledEstimate.toLocaleString('en-IN')}` : '₹1,000,000 - ₹2,000,000',
    notes: prefilledBreakdown ? `Selected configuration: ${prefilledBreakdown}` : '',
    addons: []
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledCategory) {
      setFormData(prev => ({ ...prev, eventType: prefilledCategory }));
    }
    if (prefilledEstimate) {
      setFormData(prev => ({
        ...prev,
        budgetRange: `₹${prefilledEstimate.toLocaleString('en-IN')}`
      }));
    }
    if (prefilledBreakdown) {
      setFormData(prev => ({
        ...prev,
        notes: `Selected Configuration: ${prefilledBreakdown}`
      }));
    }
  }, [prefilledCategory, prefilledEstimate, prefilledBreakdown]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto text-[#e0e0e0]">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950 text-zinc-400 hover:text-white border border-white/10"
          id="close-booking-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 border-b border-white/10 pb-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-mono block mb-1">
                RESERVE YOUR DATES
              </span>
              <h3 className="font-serif text-2xl font-light text-white">Book Your Session With Mohit Studio</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Fill out your celebration details below. Our studio manager will reach out within 12 hours with date availability.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#0f0f0f] border border-white/10 pl-9 pr-3 py-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="aarav@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0f0f0f] border border-white/10 pl-9 pr-3 py-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0f0f0f] border border-white/10 pl-9 pr-3 py-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                    Event Type / Category
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value as any })}
                    className="w-full bg-[#0f0f0f] border border-white/10 px-3 py-2.5 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="wedding">Royal Wedding</option>
                    <option value="prewedding">Pre-Wedding Shoot</option>
                    <option value="portrait">Studio Portrait Session</option>
                    <option value="fashion">High Fashion Editorial</option>
                    <option value="commercial">Commercial Product Shoot</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                    Target Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-[#0f0f0f] border border-white/10 px-3 py-2.5 text-white focus:outline-none focus:border-white/40"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                    Venue / City Location *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Udaipur / New Delhi"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#0f0f0f] border border-white/10 pl-9 pr-3 py-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                  Budget / Investment Goal
                </label>
                <input
                  type="text"
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full bg-[#0f0f0f] border border-white/10 px-3 py-2.5 text-white focus:outline-none focus:border-white/40"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                  Special Notes, Specific Wishes, or Outfit Themes
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any theme details, camera preferences, or schedule outline..."
                  className="w-full bg-[#0f0f0f] border border-white/10 p-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40"
                />
              </div>

              <button
                type="submit"
                id="submit-booking-form-btn"
                className="w-full py-4 bg-white text-slate-950 font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-xl flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Submit Reservation Request</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-white/10 border border-white text-white flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.4em] text-amber-400 font-mono block">
              BOOKING REQUEST RECEIVED
            </span>

            <h3 className="font-serif text-3xl font-light text-white">Thank You, {formData.fullName}!</h3>

            <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
              We have received your shoot request for <strong className="text-white">{formData.eventDate || 'your requested date'}</strong> in <strong className="text-white">{formData.location || 'your venue'}</strong>.
            </p>

            <p className="text-xs text-zinc-400 max-w-md mx-auto">
              Our studio coordinator will call you at <span className="font-mono text-white">{formData.phone}</span> shortly to confirm availability and finalize contract paperwork.
            </p>

            <button
              onClick={resetAndClose}
              className="mt-6 px-6 py-3 bg-white/10 border border-white/20 text-white font-medium text-xs uppercase tracking-widest hover:bg-white/20 transition-all"
            >
              Return to Gallery
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
