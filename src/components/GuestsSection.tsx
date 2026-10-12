import React from 'react';
import { GUESTS } from '../data/organizationData';
import { Award, Music, Sparkles, UserCheck } from 'lucide-react';

export const GuestsSection: React.FC = () => {
  const chiefGuests = GUESTS.filter(g => g.category === 'chief');
  const specialGuests = GUESTS.filter(g => g.category === 'special');
  const artists = GUESTS.filter(g => g.category === 'artist');
  const influencers = GUESTS.filter(g => g.category === 'influencer');

  return (
    <section id="guests" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8EE] to-[#FFFDF9] border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block text-xs font-bold text-red-900 bg-red-100 border border-red-300 px-3 py-1 rounded-sm mb-3 font-yatra uppercase tracking-wider">
            गौरवशाली सानिध्य
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-red-950 font-yatra tracking-tight">
            प्रमुख अतिथि एवं आमंत्रित कलाकार
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 via-amber-500 to-red-700 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-stone-700 font-tiro leading-relaxed">
            सनातन समाज के सामूहिक शस्त्र पूजन समारोह में मार्गदर्शन एवं सांस्कृतिक प्रस्तुति हेतु पधार रहे पूज्य संत एवं विशिष्ट व्यक्तित्व।
          </p>
        </div>

        {/* Dignitaries Grid (Top row: Chief & Special Guests) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Chief Guest */}
          {chiefGuests.map((guest, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 sm:p-7 border-2 border-red-600 shadow-lg text-center relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 bg-red-800 text-amber-200 text-[11px] font-bold px-3 py-1 rounded-bl-lg font-yatra tracking-wide">
                मुख्य अतिथि
              </div>

              <div>
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-100 to-amber-100 border-2 border-amber-500 mx-auto flex items-center justify-center text-red-900 text-3xl font-bold shadow-md mb-4">
                  🕉
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-red-950 font-yatra">
                  {guest.name}
                </h3>
                <div className="inline-block px-3 py-1 bg-red-50 text-red-800 text-xs font-bold rounded-full border border-red-200 mt-1 mb-3">
                  {guest.role}
                </div>
                <p className="text-sm text-stone-600 font-tiro leading-relaxed">
                  {guest.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-amber-100 text-xs font-semibold text-amber-800">
                आदरणीय मुख्य अतिथि
              </div>
            </div>
          ))}

          {/* Special Guests */}
          {specialGuests.map((guest, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 sm:p-7 border border-amber-300 shadow-md text-center relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 bg-amber-700 text-amber-100 text-[11px] font-bold px-3 py-1 rounded-bl-lg font-yatra tracking-wide">
                विशेष अतिथि
              </div>

              <div>
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-400 mx-auto flex items-center justify-center text-amber-900 text-3xl font-bold shadow-md mb-4">
                  🚩
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-red-950 font-yatra">
                  {guest.name}
                </h3>
                <div className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full border border-amber-200 mt-1 mb-3">
                  {guest.role}
                </div>
                <p className="text-sm text-stone-600 font-tiro leading-relaxed">
                  {guest.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-amber-100 text-xs font-semibold text-amber-800">
                पूज्य संत एवं मार्गदर्शक
              </div>
            </div>
          ))}
        </div>

        {/* Musical Artists & Cultural Performances */}
        <div className="mb-12 bg-gradient-to-r from-red-950 via-stone-900 to-red-950 text-white rounded-xl p-6 sm:p-8 border border-amber-400/80 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 shrink-0">
                <Music className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs uppercase text-amber-300 font-bold tracking-widest font-yatra">
                  सांस्कृतिक एवं संगीत प्रस्तुति
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-yatra mt-0.5">
                  डीके ठाकुर एवं विपिन पटाडिया
                </h3>
                <p className="text-xs sm:text-sm text-amber-200/90 font-tiro mt-1">
                  राष्ट्रभक्ति, शिव तांडव एवं सनातन भजनों की भव्य संगीतमय प्रस्तुति।
                </p>
              </div>
            </div>

            <div className="shrink-0 bg-red-900/60 border border-amber-400/50 px-4 py-2 rounded text-xs text-amber-200 font-yatra">
              प्रस्तावित विशेष प्रस्तुति 🎵
            </div>
          </div>
        </div>

        {/* Social Media & Youth Influencers Showcase */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest font-yatra">
                प्रारंभिक इन्फ्लुएंसर सूची
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-red-950 font-yatra">
                डिजिटल प्रेरक एवं सांस्कृतिक संवाहक
              </h3>
            </div>
            <span className="text-xs font-semibold text-stone-500 font-tiro hidden sm:block">
              20+ इन्फ्लुएंसर्स का जुड़ाव
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {influencers.map((inf, idx) => (
              <div
                key={idx}
                className="bg-white rounded-md p-4 border border-amber-200 shadow-2xs hover:border-amber-400 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-800 border border-red-200 flex items-center justify-center font-bold font-mono text-sm shrink-0">
                    {inf.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 font-yatra">
                      {inf.name}
                    </h4>
                    <span className="text-[11px] text-amber-700 font-semibold block font-tiro">
                      {inf.role}
                    </span>
                    <p className="text-xs text-stone-500 font-tiro mt-0.5">
                      {inf.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide 10 Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-stone-500 font-tiro italic">
            * प्रमुख अतिथियों की पुष्टि आयोजक के अनुसार। डीके ठाकुर एवं विपिन पटाडिया की संगीत प्रस्तुति प्रस्तावित है।
          </p>
        </div>
      </div>
    </section>
  );
};
