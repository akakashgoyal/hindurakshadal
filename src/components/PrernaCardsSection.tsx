import React, { useState } from 'react';
import { DIVINE_INSPIRATIONS, DivineInspiration } from '../data/organizationData';
import { Bell, Sparkles, CheckCircle2 } from 'lucide-react';
import { sacredAudio } from '../utils/audio';

interface PrernaCardsSectionProps {
  compact?: boolean;
}

export const PrernaCardsSection: React.FC<PrernaCardsSectionProps> = ({ compact = false }) => {
  const [selectedDeity, setSelectedDeity] = useState<string | null>(null);

  const handleDarshanBell = (name: string) => {
    setSelectedDeity(name);
    sacredAudio.playTempleBell();
    setTimeout(() => setSelectedDeity(null), 3000);
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#FFFDF9] via-[#FFF5E6] to-[#FFFDF9] border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block text-xs font-bold text-red-900 bg-red-100 border border-red-300 px-3 py-1 rounded-sm mb-2 font-yatra uppercase tracking-wider">
            दशहरा एवं शस्त्र पूजन प्रेरणा
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red-950 font-yatra tracking-tight">
            हमारे दिव्य प्रेरणा स्रोत
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-700 via-amber-500 to-red-700 mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-sm sm:text-base text-stone-700 font-tiro leading-relaxed">
            अच्छाई की बुराई पर विजय के पावन अवसर पर सनातन शौर्य, मर्यादा, ज्ञान और बल के सर्वोच्च आदर्श।
          </p>
        </div>

        {/* 4 Divine Inspirations Grid Cards with Individual Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIVINE_INSPIRATIONS.map((deity) => {
            const isRinging = selectedDeity === deity.name;

            return (
              <div
                key={deity.id}
                className={`bg-white rounded-xl overflow-hidden border-2 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 ${
                  isRinging
                    ? 'border-amber-500 ring-4 ring-amber-300/40'
                    : 'border-amber-300 hover:border-red-600'
                }`}
              >
                {/* Deity Photo Container */}
                <div className="relative h-64 sm:h-68 bg-stone-900 overflow-hidden group">
                  <img
                    src={deity.image}
                    alt={deity.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-red-950/20 to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="text-[11px] font-mono font-bold text-amber-300 bg-red-950/80 px-2 py-0.5 rounded w-fit border border-amber-400/40">
                      {deity.shastra}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-yatra text-white mt-1">
                      {deity.name}
                    </h3>
                    <p className="text-xs text-amber-200 font-tiro font-semibold">
                      {deity.title}
                    </p>
                  </div>
                </div>

                {/* Card Content & Meaning */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Punchy Prerna Tagline */}
                    <div className="bg-amber-50 border border-amber-300/80 p-2.5 rounded-md text-center">
                      <span className="text-xs font-bold text-red-950 font-yatra block">
                        प्रेरणा: {deity.prernaTagline}
                      </span>
                    </div>

                    {/* Limited & Crisp Description */}
                    <p className="text-xs sm:text-sm text-stone-700 font-tiro leading-relaxed mt-3">
                      {deity.description}
                    </p>

                    {/* Core Values / Teachings */}
                    <div className="mt-3.5 space-y-1.5 pt-3 border-t border-amber-100">
                      {deity.coreValues.map((val, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sacred Sloka & Darshan Audio Action */}
                  <div className="pt-3 border-t border-amber-200/80 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-amber-800 font-tiro italic truncate">
                      {deity.quote}
                    </span>
                    <button
                      onClick={() => handleDarshanBell(deity.name)}
                      title="नमन व घंटी बजाएं"
                      className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center gap-1 shrink-0 transition-colors ${
                        isRinging
                          ? 'bg-amber-400 text-red-950 shadow-xs'
                          : 'bg-red-50 hover:bg-red-100 text-red-900 border border-red-200'
                      }`}
                    >
                      <Bell className="w-3 h-3 text-amber-600" />
                      <span>नमन 🔔</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Shastra Pujan Central Cultural Message */}
        <div className="mt-10 p-5 bg-gradient-to-r from-red-950 via-stone-900 to-red-950 text-white rounded-xl border border-amber-400/80 shadow-md text-center">
          <p className="text-sm sm:text-base font-bold font-yatra text-amber-300">
            &ldquo;शस्त्र पूजन का संदेश: अनुशासन, आत्मसंयम और जिम्मेदार रक्षा का सांस्कृतिक संकल्प।&rdquo;
          </p>
          <p className="text-xs text-amber-100 font-tiro mt-1">
            सनातन संस्कृति शस्त्र को कभी हिंसा का माध्यम नहीं मानती, बल्कि यह अधर्म के दमन और धर्म की रक्षा का पवित्र साधन है।
          </p>
        </div>
      </div>
    </section>
  );
};
