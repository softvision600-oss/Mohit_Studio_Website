import React from 'react';
import { SERVICE_PACKAGES } from '../data/studioData';
import { ServicePackage } from '../types';
import { Check, Calendar, Calculator, Sparkles, Award, Clock, Image as ImageIcon } from 'lucide-react';

interface ServicesSectionProps {
  onSelectPackage: (pkg: ServicePackage) => void;
  onOpenEstimator: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectPackage,
  onOpenEstimator
}) => {
  return (
    <section id="services" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Award className="w-4 h-4" />
            <span>Photography Packages & Pricing</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Bespoke Services & Transparent Packages
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Every celebration is unique. Choose from our signature photography suites or customize your custom experience.
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SERVICE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-slate-950 rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                pkg.popular
                  ? 'border-amber-500 shadow-2xl shadow-amber-500/10 ring-1 ring-amber-500/30'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-xs shadow-lg uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Most Popular Choice
                  </span>
                </div>
              )}

              {/* Package Header Image */}
              <div className="relative h-56 bg-slate-900 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">{pkg.title}</h3>
                  <p className="text-xs text-amber-300 font-medium">{pkg.tagline}</p>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Price Tag */}
                  <div className="flex items-baseline justify-between bg-slate-900/90 p-4 rounded-2xl border border-slate-800 mb-6">
                    <div>
                      <span className="text-xs text-slate-400 block font-mono uppercase">Starting Investment</span>
                      <span className="font-serif text-3xl font-bold text-amber-400">
                        ₹{pkg.startingPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="text-right text-xs text-slate-400 space-y-1">
                      <span className="flex items-center justify-end gap-1 text-slate-300 font-medium">
                        <Clock className="w-3.5 h-3.5 text-amber-400" /> {pkg.duration}
                      </span>
                      <span className="flex items-center justify-end gap-1 text-slate-300">
                        <ImageIcon className="w-3.5 h-3.5 text-amber-400" /> Deliverables
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">{pkg.description}</p>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Package Inclusions:</h4>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <div className="p-0.5 rounded-full bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-amber-500 text-slate-200 hover:text-slate-950 font-bold text-sm border border-slate-700 hover:border-amber-400 transition-all flex items-center justify-center gap-2 group"
                  id={`select-package-${pkg.id}`}
                >
                  <Calendar className="w-4 h-4 group-hover:text-slate-950" />
                  <span>Reserve This Package</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Price Calculator Callout Box */}
        <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 border border-amber-500/30 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" /> Custom Quote Estimator
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Need a Tailored Multi-Day Package?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Calculate your exact investment based on event days, drone team requirements, photobook sizes, and live streaming add-ons in 30 seconds.
            </p>
          </div>

          <button
            onClick={onOpenEstimator}
            id="open-estimator-callout"
            className="px-6 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all hover:scale-105 shrink-0 flex items-center gap-2"
          >
            <Calculator className="w-5 h-5" />
            <span>Launch Price Calculator</span>
          </button>
        </div>
      </div>
    </section>
  );
};
