import React, { useState } from 'react';
import { PILLARS } from '../data/organizationData';
import { HeartHandshake, ShieldCheck, Flame, CheckCircle, ArrowRight } from 'lucide-react';

interface ThreePillarsSectionProps {
  onOpenRegister: () => void;
}

export const ThreePillarsSection: React.FC<ThreePillarsSectionProps> = ({ onOpenRegister }) => {
  const [activePillar, setActivePillar] = useState<string>('seva');

  const getIcon = (id: string) => {
    switch (id) {
      case 'seva':
        return <HeartHandshake className="w-8 h-8 text-amber-600" />;
      case 'suraksha':
        return <ShieldCheck className="w-8 h-8 text-red-700" />;
      case 'sanrakshan':
        return <Flame className="w-8 h-8 text-orange-600" />;
      default:
        return <Flame className="w-8 h-8 text-amber-600" />;
    }
  };

  return (
    <section id="pillars" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9EE] to-[#FFFDF9] border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 px-3 py-1 rounded-sm mb-3 font-yatra uppercase tracking-wider">
            संगठनात्मक आधार
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-red-950 font-yatra tracking-tight">
            तीन मूल स्तंभ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 via-amber-500 to-red-700 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg font-bold text-amber-900 font-yatra">
            &ldquo;एकता इन तीनों स्तंभों को जोड़ती है।&rdquo;
          </p>
          <p className="mt-1 text-sm sm:text-base text-stone-600 font-tiro max-w-xl mx-auto">
            सेवा, सुरक्षा और संरक्षण के समन्वय से ही एक स्वाभिमानी और सुदृढ़ सनातनी समाज की संरचना संभव है।
          </p>
        </div>

        {/* 3 Pillar Cards in High-Contrast Bhagwa & Red Theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((pillar) => {
            const isSelected = activePillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`cursor-pointer rounded-lg border transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden ${
                  isSelected
                    ? 'bg-white border-amber-500 shadow-xl ring-2 ring-amber-400/30 -translate-y-1'
                    : 'bg-white/80 border-amber-200/90 hover:border-amber-400 hover:shadow-md'
                }`}
              >
                {/* Top Corner Ribbon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-amber-50 rounded-md border border-amber-200">
                    {getIcon(pillar.id)}
                  </div>
                  <span className="text-xs font-bold text-red-900 font-mono tracking-widest uppercase bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                    स्तंभ
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-red-950 font-yatra">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-700 font-tiro mt-0.5 mb-3">
                    {pillar.slogan}
                  </div>

                  <p className="text-sm text-stone-700 font-tiro leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5 pt-3 border-t border-amber-100">
                    {pillar.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-amber-100/80 flex items-center justify-between text-xs font-semibold text-red-900">
                  <span>संकल्प में सहभागी बनें</span>
                  <ArrowRight className="w-4 h-4 text-amber-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Unifying Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-red-950 via-stone-900 to-red-950 rounded-lg text-white border-2 border-amber-500/70 shadow-lg text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <span className="text-amber-400 font-yatra text-sm font-semibold tracking-wider uppercase block">
              ॥ संघे शक्तिः कलियुगे ॥
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-yatra text-amber-100">
              एकता इन तीनों स्तंभों को जोड़ती है
            </h3>
            <p className="text-sm sm:text-base text-amber-200/90 font-tiro leading-relaxed">
              जब तक सेवा, सुरक्षा और संरक्षण एक साथ नहीं होंगे, तब तक समाज पूर्णतः सशक्त नहीं हो सकता। सनातन सेना संगठन इसी त्रि-आयामी संकल्प को धरातल पर उतारने का प्रयास है।
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenRegister}
                className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold rounded-md shadow-md transition-all text-sm font-yatra"
              >
                संगठन से जुड़ें और संकल्प लें
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
