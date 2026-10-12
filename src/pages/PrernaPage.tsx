import React from 'react';
import { DIVINE_INSPIRATIONS } from '../data/organizationData';
import { Bell, Shield, ArrowRight, Award } from 'lucide-react';
import { sacredAudio } from '../utils/audio';

interface PrernaPageProps {
  onOpenRegister: () => void;
}

export const PrernaPage: React.FC<PrernaPageProps> = ({ onOpenRegister }) => {
  const handleBell = (name: string) => {
    sacredAudio.playTempleBell();
  };

  return (
    <div className="py-12 sm:py-16 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Banner Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block text-xs font-bold text-red-900 bg-red-100 border border-red-300 px-3.5 py-1 rounded-sm mb-3 font-yatra uppercase tracking-wider">
            दशहरा एवं शस्त्र पूजन • दिव्य प्रेरणा
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-red-950 font-yatra tracking-tight leading-tight">
            हमारे दिव्य प्रेरणा स्रोत
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 via-amber-500 to-red-700 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-stone-700 font-tiro leading-relaxed">
            &ldquo;अच्छाई की बुराई पर विजय&rdquo; — हमारे आराध्य महापुरुषों और अवतारी स्वरूपों के शौर्य, मर्यादा, विवेक एवं बल से आलोकित सनातनी जीवन दर्शन।
          </p>
        </div>

        {/* Big Deities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {DIVINE_INSPIRATIONS.map((deity) => (
            <div
              key={deity.id}
              className="bg-white rounded-2xl overflow-hidden border-2 border-amber-300 shadow-xl flex flex-col md:flex-row hover:border-red-600 transition-all duration-300 group"
            >
              {/* Photo Side */}
              <div className="md:w-5/12 h-72 md:h-auto relative bg-stone-900 overflow-hidden shrink-0">
                <img
                  src={deity.image}
                  alt={deity.name}
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[11px] font-mono text-amber-300 bg-black/60 px-2 py-0.5 rounded w-fit border border-amber-400/40">
                    {deity.shastra}
                  </span>
                </div>
              </div>

              {/* Text / Information Side */}
              <div className="p-6 md:w-7/12 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-800 uppercase tracking-wider font-yatra">
                      {deity.title}
                    </span>
                    <button
                      onClick={() => handleBell(deity.name)}
                      className="text-xs font-bold text-red-800 bg-red-50 hover:bg-red-100 border border-red-200 px-2 py-1 rounded flex items-center gap-1 transition-colors"
                      title="नमन करें"
                    >
                      <Bell className="w-3 h-3 text-amber-600" />
                      <span>नमन 🔔</span>
                    </button>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-red-950 font-yatra mt-1">
                    {deity.name}
                  </h2>

                  <div className="mt-2 bg-amber-50/80 border border-amber-200 p-2.5 rounded-md">
                    <span className="text-xs font-bold text-red-900 font-tiro block">
                      मुख्य प्रेरणा: {deity.prernaTagline}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-700 font-tiro leading-relaxed">
                    {deity.description}
                  </p>

                  <div className="mt-3.5 space-y-1.5">
                    <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block font-yatra">
                      मूल आदर्श एवं संस्कार:
                    </span>
                    {deity.coreValues.map((val, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-stone-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
                        <span>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-amber-200 flex items-center justify-between text-xs font-bold text-amber-900 font-tiro">
                  <span>{deity.quote}</span>
                  <span className="text-red-800">सनातन प्रेरणा</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shastra Pujan Context & Pledge */}
        <div className="bg-gradient-to-r from-red-950 via-stone-900 to-red-950 text-white rounded-2xl p-7 sm:p-10 border-2 border-amber-400 shadow-2xl text-center space-y-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-yatra block">
            विजयादशमी पर्व का सांस्कृतिक संकल्प
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold font-yatra text-white">
            शस्त्र पूजन का संदेश: अनुशासन, आत्मसंयम और जिम्मेदार रक्षा
          </h3>
          <p className="text-sm sm:text-base text-amber-100 font-tiro max-w-2xl mx-auto leading-relaxed">
            जब शक्ति का उद्देश्य अहंकार नहीं, बल्कि निर्बलों की रक्षा और धर्म का संरक्षण होता है, तभी समाज सुरक्षित और स्वाभिमानी बनता है।
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenRegister}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-extrabold rounded-md shadow-lg text-sm font-yatra"
            >
              सामूहिक शस्त्र पूजन में सहभागिता दर्ज करें 🚩
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
