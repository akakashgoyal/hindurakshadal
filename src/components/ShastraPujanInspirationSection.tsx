import React from 'react';
import { Sparkles, Shield, Heart, Flame } from 'lucide-react';
import { sacredAudio } from '../utils/audio';

export const ShastraPujanInspirationSection: React.FC = () => {
  const handlePlayBell = () => {
    sacredAudio.playTempleBell();
  };

  return (
    <section id="shastra-pujan" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF6E9] to-[#FFFDF9] border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block text-xs font-bold text-red-900 bg-red-100 border border-red-300 px-3 py-1 rounded-sm mb-3 font-yatra uppercase tracking-wider">
            दशहरा एवं शस्त्र पूजन
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-red-950 font-yatra tracking-tight">
            अच्छाई की बुराई पर विजय का पर्व
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 via-amber-500 to-red-700 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-stone-700 font-tiro leading-relaxed">
            विजयादशमी के पावन पर्व पर हमारे पूर्वजों और अवतारी महापुरुषों द्वारा स्थापित धर्म-रक्षा एवं शस्त्र-पूजन की पावन परंपरा।
          </p>
        </div>

        {/* Feature Visual with Divine Deities Banner */}
        <div className="relative rounded-xl overflow-hidden border-2 border-amber-400 shadow-2xl mb-12 bg-stone-900">
          <img
            src="/src/assets/images/divine_inspiration_lords_1791566842021.jpg"
            alt="भगवान परशुराम, भगवान श्री राम, भगवान श्री कृष्ण एवं बलराम"
            className="w-full h-80 sm:h-[420px] object-cover object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-950/95 via-stone-900/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-bold text-amber-300 uppercase tracking-widest font-yatra">
              <span>भगवान परशुराम</span>
              <span>•</span>
              <span>भगवान श्री राम</span>
              <span>•</span>
              <span>भगवान श्री कृष्ण एवं बलराम</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-bold font-yatra text-white max-w-3xl leading-snug">
              शौर्य, मर्यादा, ज्ञान और धर्म रक्षा का पावन समन्वय
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/90 font-tiro max-w-2xl mt-1">
              अन्याय के संहार और धर्म की पुनर्स्थापना हेतु महापुरुषों ने शस्त्र और शास्त्र दोनों को धारण कर मानवता का पथ आलोकित किया।
            </p>
          </div>
        </div>

        {/* Inspirations from Divine Figures (Slide 8 exact points) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Shri Ram Inspiration */}
          <div className="bg-white rounded-lg p-6 sm:p-7 border border-amber-300 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-28 h-28 bg-amber-100/50 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-red-100 border border-red-300 flex items-center justify-center text-red-800 font-bold">
                  🏹
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-950 font-yatra">
                    श्रीराम से प्रेरणा
                  </h4>
                  <span className="text-xs text-amber-700 font-semibold font-tiro">
                    मर्यादा पुरुषोत्तम का आदर्श
                  </span>
                </div>
              </div>

              <div className="text-lg font-bold text-red-900 font-yatra mt-2 mb-3">
                मर्यादा, साहस और कर्तव्य।
              </div>

              <p className="text-sm text-stone-700 font-tiro leading-relaxed">
                प्रभु श्री राम का जीवन सिखाता है कि शक्ति का उपयोग सदैव मर्यादा की रक्षा, दुर्बलों की सहायता और धर्म के पालन हेतु ही होना चाहिए। शस्त्र धारण करने का अर्थ अहंकार नहीं, अपितु लोक-कल्याण का संकल्प है।
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-amber-100 flex items-center justify-between text-xs text-stone-500 font-tiro">
              <span>&ldquo;रामो विग्रहवान् धर्मः&rdquo;</span>
              <button
                onClick={handlePlayBell}
                className="text-red-800 font-semibold hover:underline"
              >
                जय श्री राम 🔔
              </button>
            </div>
          </div>

          {/* Card 2: Shri Krishna Inspiration */}
          <div className="bg-white rounded-lg p-6 sm:p-7 border border-amber-300 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-28 h-28 bg-amber-100/50 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 font-bold">
                  🦚
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-950 font-yatra">
                    श्रीकृष्ण से प्रेरणा
                  </h4>
                  <span className="text-xs text-amber-700 font-semibold font-tiro">
                    योगेश्वर की नीति व ज्ञान
                  </span>
                </div>
              </div>

              <div className="text-lg font-bold text-red-900 font-yatra mt-2 mb-3">
                ज्ञान, विवेक और सही निर्णय।
              </div>

              <p className="text-sm text-stone-700 font-tiro leading-relaxed">
                भगवान श्री कृष्ण ने गीता के माध्यम से निष्काम कर्म और विवेकपूर्ण निर्णय का मार्ग दिखाया। धर्म संकट के समय सत्य का साथ देना और समाज में न्याय की स्थापना करना ही वास्तविक शौर्य है।
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-amber-100 flex items-center justify-between text-xs text-stone-500 font-tiro">
              <span>&ldquo;यतो धर्मस्ततो जयः&rdquo;</span>
              <button
                onClick={handlePlayBell}
                className="text-amber-800 font-semibold hover:underline"
              >
                हरे कृष्ण 🔔
              </button>
            </div>
          </div>
        </div>

        {/* Concluding Message Banner (Slide 8 bottom quote) */}
        <div className="mt-8 p-5 sm:p-6 bg-red-900 text-amber-100 rounded-lg text-center border border-amber-500 shadow-md">
          <p className="text-base sm:text-lg font-bold font-yatra text-white">
            शस्त्र पूजन का संदेश: अनुशासन, आत्मसंयम और जिम्मेदार रक्षा का सांस्कृतिक संकल्प।
          </p>
          <p className="text-xs sm:text-sm text-amber-200/90 font-tiro mt-1">
            सनातन समाज शस्त्र का पूजन करता है ताकि शक्ति सदैव सत्य और लोक-कल्याण के अधीन रहे।
          </p>
        </div>
      </div>
    </section>
  );
};
