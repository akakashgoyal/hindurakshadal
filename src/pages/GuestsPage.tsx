import React from 'react';
import { GUESTS, LEADERSHIP, OUTREACH_STATS } from '../data/organizationData';
import { Music, Award, Shield, Megaphone, Users, Building2 } from 'lucide-react';

export const GuestsPage: React.FC = () => {
  const chief = GUESTS.find(g => g.category === 'chief');
  const special = GUESTS.filter(g => g.category === 'special');
  const influencers = GUESTS.filter(g => g.category === 'influencer');

  return (
    <div className="py-12 sm:py-16 bg-[#FFFDF9] space-y-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block text-xs font-bold text-red-900 bg-red-100 border border-red-300 px-3.5 py-1 rounded-sm mb-3 font-yatra uppercase tracking-wider">
            गौरवशाली सानिध्य एवं प्रबंधन
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-red-950 font-yatra tracking-tight">
            अतिथि, नेतृत्व एवं मीडिया
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 via-amber-500 to-red-700 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-stone-700 font-tiro leading-relaxed">
            सनातन समाज सामूहिक शस्त्र पूजन समारोह के आदरणीय अतिथि, संगठनात्मक सूत्रधार एवं प्रचार सहयोग।
          </p>
        </div>

        {/* 1. Dignitaries (Slide 10) */}
        <div>
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest font-yatra block text-center mb-1">
            प्रमुख अतिथि
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-red-950 font-yatra text-center mb-8">
            विशिष्ट एवं पूज्य संतजन
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chief Guest */}
            {chief && (
              <div className="bg-white p-6 rounded-xl border-2 border-red-600 shadow-md text-center group hover:shadow-xl transition-all">
                <span className="text-xs font-bold text-white bg-red-800 px-3 py-0.5 rounded-full font-yatra">
                  मुख्य अतिथि
                </span>
                <div className="w-24 h-24 rounded-full border-3 border-amber-500 overflow-hidden mx-auto my-3 shadow-sm bg-gradient-to-br from-red-100 to-amber-100 p-0.5">
                  {chief.image ? (
                    <img
                      src={chief.image}
                      alt={chief.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-red-800 text-2xl font-bold">
                      🕉
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-red-950 font-yatra">
                  {chief.name}
                </h3>
                <p className="text-xs text-stone-600 font-tiro mt-2">
                  {chief.description}
                </p>
              </div>
            )}

            {/* Special Guests */}
            {special.map((g, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border-2 border-amber-400 shadow-md text-center group hover:shadow-xl transition-all">
                <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-0.5 rounded-full font-yatra">
                  विशेष अतिथि
                </span>
                <div className="w-24 h-24 rounded-full border-3 border-amber-400 overflow-hidden mx-auto my-3 shadow-sm bg-gradient-to-br from-amber-100 to-orange-100 p-0.5">
                  {g.image ? (
                    <img
                      src={g.image}
                      alt={g.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-amber-800 text-2xl font-bold">
                      🚩
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-red-950 font-yatra">
                  {g.name}
                </h3>
                <p className="text-xs text-stone-600 font-tiro mt-2">
                  {g.description}
                </p>
              </div>
            ))}
          </div>

          {/* Music Performance Banner */}
          <div className="mt-8 bg-gradient-to-r from-red-950 via-stone-900 to-red-950 text-white rounded-2xl overflow-hidden border-2 border-amber-400 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div className="md:col-span-4 h-48 md:h-full min-h-[180px] relative">
                <img
                  src="/src/assets/images/artists_bhajan_performance_1791789406829.jpg"
                  alt="डीके ठाकुर एवं विपिन पटाडिया"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-8 p-6 space-y-2">
                <div className="flex items-center gap-2">
                  <Music className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs text-amber-300 font-yatra uppercase tracking-wider font-bold">
                    सांस्कृतिक एवं संगीत प्रस्तुति
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold font-yatra">
                  डीके ठाकुर एवं विपिन पटाडिया
                </h4>
                <p className="text-xs sm:text-sm text-amber-100/90 font-tiro">
                  राष्ट्रभक्ति, शिव तांडव एवं सनातन भजनों की भव्य संगीतमय प्रस्तुति।
                </p>
                <div className="text-[11px] text-amber-300/80 font-tiro italic pt-1">
                  * संगीत प्रस्तुति प्रस्तावित है।
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Leadership & Management (Slide 6) */}
        <div>
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest font-yatra block text-center mb-1">
            संगठनात्मक सूत्रधार
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-red-950 font-yatra text-center mb-8">
            नेतृत्व एवं प्रबंधन
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-amber-300 shadow-xs text-center group hover:shadow-md transition-all">
              <div className="w-20 h-20 rounded-full border-2 border-amber-500 overflow-hidden mx-auto mb-3 shadow-xs bg-red-100 p-0.5">
                <img
                  src="/src/assets/images/founder_amit_dandotiya_1791789418465.jpg"
                  alt="अमित दंदोतिया"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-red-950 font-yatra">अमित दंदोतिया</h3>
              <span className="text-xs font-bold text-red-800 font-yatra block mt-0.5">संस्थापक</span>
              <p className="text-xs text-stone-600 font-tiro mt-2">सनातन सेना संगठन</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-amber-300 shadow-xs text-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-900 text-xl font-bold mx-auto flex items-center justify-center mb-3">
                📢
              </div>
              <h3 className="text-xl font-bold text-red-950 font-yatra">रॉबिन दंदोतिया</h3>
              <span className="text-xs font-bold text-amber-800 font-yatra block mt-0.5">जनसंपर्क अधिकारी (PRO)</span>
              <p className="text-xs text-stone-600 font-tiro mt-2">संगठन एवं कार्यक्रम</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-amber-300 shadow-xs text-center">
              <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-800 mx-auto flex items-center justify-center mb-3">
                <Building2 className="w-8 h-8 text-stone-700" />
              </div>
              <h3 className="text-lg font-bold text-red-950 font-yatra">Monk Media Marketing</h3>
              <span className="text-xs font-bold text-stone-700 font-yatra block mt-0.5">कार्यक्रम प्रबंधन एजेंसी</span>
              <p className="text-xs text-stone-600 font-tiro mt-2">जनसंपर्क एवं संचार</p>
            </div>
          </div>
        </div>

        {/* 3. Outreach & Campaign (Slides 11, 12) */}
        <div className="bg-amber-50/70 p-6 sm:p-8 rounded-2xl border border-amber-300">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-red-900 uppercase tracking-widest font-yatra">
              प्रचार एवं मीडिया दायरा
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-yatra mt-1">
              आगरा जिले में आउटडोर व डिजिटल प्रसार
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg border border-amber-200">
              <div className="text-2xl font-bold text-red-900 font-mono">80-100</div>
              <div className="text-xs font-bold font-yatra mt-1">होर्डिंग व बैनर</div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-amber-200">
              <div className="text-2xl font-bold text-amber-700 font-mono">100+</div>
              <div className="text-xs font-bold font-yatra mt-1">डिजिटल पोर्टल्स</div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-amber-200">
              <div className="text-2xl font-bold text-red-900 font-mono">10+</div>
              <div className="text-xs font-bold font-yatra mt-1">न्यूज़ चैनल्स</div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-amber-200">
              <div className="text-2xl font-bold text-amber-700 font-mono">20+</div>
              <div className="text-xs font-bold font-yatra mt-1">इन्फ्लुएंसर्स</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
