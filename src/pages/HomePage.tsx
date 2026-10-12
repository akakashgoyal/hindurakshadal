import React from 'react';
import { Hero } from '../components/Hero';
import { PrernaCardsSection } from '../components/PrernaCardsSection';
import { ThreePillarsSection } from '../components/ThreePillarsSection';
import { ArrowRight, Calendar, MapPin, Clock } from 'lucide-react';
import { PageId } from '../components/Header';

interface HomePageProps {
  setActivePage: (page: PageId) => void;
  onOpenRegister: () => void;
  onOpenPass: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActivePage,
  onOpenRegister,
  onOpenPass,
}) => {
  return (
    <div className="space-y-4">
      {/* Hero Section */}
      <Hero onOpenRegister={onOpenRegister} onOpenPass={onOpenPass} />

      {/* Primary Highlight: हमारे प्रेरणा स्रोत (Photo Cards of the 4 Deities) */}
      <PrernaCardsSection />

      {/* Three Pillars Summary */}
      <ThreePillarsSection onOpenRegister={onOpenRegister} />

      {/* Quick Event Summary Strip (Limited Content) */}
      <section className="py-12 bg-[#FFFDF9] border-b border-amber-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-red-900 via-stone-900 to-red-900 rounded-xl p-6 sm:p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-amber-400">
            <div>
              <span className="text-xs uppercase text-amber-300 font-bold tracking-widest font-yatra">
                भव्य शस्त्र पूजन समारोह
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-yatra text-white mt-1">
                20 अक्टूबर 2026 • फतेहाबाद रोड, आगरा
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/90 font-tiro mt-1">
                लगभग 2,000+ सनातनी बंधुओं की ऐतिहासिक सहभागिता।
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setActivePage('event')}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-amber-200 border border-amber-400/50 rounded-md text-xs font-bold font-yatra"
              >
                पूरा विवरण
              </button>
              <button
                onClick={onOpenRegister}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold rounded-md text-xs font-yatra shadow-md"
              >
                ई-पास प्राप्त करें
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
