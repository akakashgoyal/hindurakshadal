import React from 'react';
import { Newspaper, Tv, Globe, Radio, Megaphone, Share2, MapPin, CheckCircle } from 'lucide-react';

export const MediaCampaignSection: React.FC = () => {
  return (
    <section id="outreach" className="py-16 sm:py-24 bg-[#FFFDF9] border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 px-3 py-1 rounded-sm mb-3 font-yatra uppercase tracking-wider">
            व्यापक जनसंवाद
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-red-950 font-yatra tracking-tight">
            आगरा जिले में प्रचार एवं मीडिया सहभागिता
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 via-amber-500 to-red-700 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-stone-700 font-tiro leading-relaxed">
            आउटडोर प्रचार और मीडिया संवाद का संयुक्त दायरा, जिससे हर सनातनी तक शस्त्र पूजन समारोह का निमंत्रण पहुँचे।
          </p>
        </div>

        {/* Outdoor Campaign Spotlight (Slide 11) */}
        <div className="mb-12 bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-xl p-7 sm:p-9 border-2 border-amber-300 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 text-center lg:text-left">
              <span className="text-xs font-bold text-red-900 bg-red-100 border border-red-200 px-3 py-1 rounded-sm uppercase tracking-wider font-yatra">
                आउटडोर होर्डिंग अभियान
              </span>
              <div className="text-4xl sm:text-6xl font-black text-red-900 font-mono tracking-tight my-2 tabular-nums">
                80–100
              </div>
              <h3 className="text-2xl font-bold text-stone-900 font-yatra">
                होर्डिंग एवं बैनर की वृहद योजना
              </h3>
              <p className="text-sm text-stone-600 font-tiro mt-2 leading-relaxed">
                आगरा के प्रमुख मार्गों, व्यस्त बाजारों, प्रमुख चौराहों और आवासीय क्षेत्रों में सनातन समाज सामूहिक शस्त्र पूजन समारोह की विस्तृत जानकारी।
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-md border border-amber-200 shadow-2xs">
                <div className="flex items-center gap-2.5 font-bold text-stone-900 text-sm font-yatra">
                  <MapPin className="w-4 h-4 text-red-800" />
                  <span>फतेहाबाद रोड एवं ताजगंज क्षेत्र</span>
                </div>
                <p className="text-xs text-stone-500 font-tiro mt-1">
                  वेन्यू के मुख्य मार्गों पर भव्य दिशा-सूचक एवं आमंत्रण द्वार।
                </p>
              </div>

              <div className="bg-white p-4 rounded-md border border-amber-200 shadow-2xs">
                <div className="flex items-center gap-2.5 font-bold text-stone-900 text-sm font-yatra">
                  <MapPin className="w-4 h-4 text-red-800" />
                  <span>एम.जी. रोड व संजय प्लेस</span>
                </div>
                <p className="text-xs text-stone-500 font-tiro mt-1">
                  व्यापारिक व युवा केंद्रों पर रणनीतिक बैनर प्रदर्शन।
                </p>
              </div>

              <div className="bg-white p-4 rounded-md border border-amber-200 shadow-2xs">
                <div className="flex items-center gap-2.5 font-bold text-stone-900 text-sm font-yatra">
                  <MapPin className="w-4 h-4 text-red-800" />
                  <span>सिकंदरा व भगवान टॉकीज चौराहा</span>
                </div>
                <p className="text-xs text-stone-500 font-tiro mt-1">
                  आगरा के मुख्य प्रवेश द्वारों पर वृहद स्वागत होर्डिंग्स।
                </p>
              </div>

              <div className="bg-white p-4 rounded-md border border-amber-200 shadow-2xs">
                <div className="flex items-center gap-2.5 font-bold text-stone-900 text-sm font-yatra">
                  <MapPin className="w-4 h-4 text-red-800" />
                  <span>कमला नगर, शाहगंज व दयालबाग</span>
                </div>
                <p className="text-xs text-stone-500 font-tiro mt-1">
                  प्रमुख आवासीय कॉलोनियों में सनातनी परिवारों तक सूचना।
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-amber-200 text-xs text-stone-500 font-tiro italic text-center lg:text-left">
            * अंतिम संख्या एवं स्थान उपलब्धता और आवश्यक अनुमतियों के अनुसार तय होंगे।
          </div>
        </div>

        {/* Digital & Media Coverage Metrics (Slide 12) */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest font-yatra">
              मीडिया एवं डिजिटल कवरेज
            </span>
            <h3 className="text-2xl font-bold text-red-950 font-yatra">
              डिजिटल व प्रिंट मीडिया का संयुक्त विस्तार
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white p-5 rounded-lg border border-amber-200 shadow-2xs text-center">
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-800 mx-auto flex items-center justify-center mb-2">
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-red-950 font-mono tabular-nums">
                100+
              </div>
              <div className="text-xs sm:text-sm font-bold text-stone-800 font-yatra mt-1">
                डिजिटल पोर्टल्स
              </div>
              <div className="text-[11px] text-stone-500 font-tiro mt-0.5">
                ऑनलाइन समाचार प्रसार
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-amber-200 shadow-2xs text-center">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 mx-auto flex items-center justify-center mb-2">
                <Tv className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-700 font-mono tabular-nums">
                10+
              </div>
              <div className="text-xs sm:text-sm font-bold text-stone-800 font-yatra mt-1">
                डिजिटल न्यूज़ चैनल्स
              </div>
              <div className="text-[11px] text-stone-500 font-tiro mt-0.5">
                लाइव कवरेज व संवाद
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-amber-200 shadow-2xs text-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-800 mx-auto flex items-center justify-center mb-2">
                <Radio className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-red-950 font-mono tabular-nums">
                4-5+
              </div>
              <div className="text-xs sm:text-sm font-bold text-stone-800 font-yatra mt-1">
                सैटेलाइट न्यूज़ चैनल्स
              </div>
              <div className="text-[11px] text-stone-500 font-tiro mt-0.5">
                राष्ट्रीय प्रसारण
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-amber-200 shadow-2xs text-center">
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-800 mx-auto flex items-center justify-center mb-2">
                <Newspaper className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-700 font-mono tabular-nums">
                2-4
              </div>
              <div className="text-xs sm:text-sm font-bold text-stone-800 font-yatra mt-1">
                प्रिंट कवरेज अवसर
              </div>
              <div className="text-[11px] text-stone-500 font-tiro mt-0.5">
                दैनिक समाचार पत्र
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-amber-200 shadow-2xs text-center col-span-2 sm:col-span-1">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 mx-auto flex items-center justify-center mb-2">
                <Share2 className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-red-950 font-mono tabular-nums">
                20+
              </div>
              <div className="text-xs sm:text-sm font-bold text-stone-800 font-yatra mt-1">
                इन्फ्लुएंसर्स
              </div>
              <div className="text-[11px] text-stone-500 font-tiro mt-0.5">
                10+ मैक्रो व 10+ माइक्रो
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50/70 border border-amber-200 rounded-md text-xs sm:text-sm text-stone-700 font-tiro text-center">
            ऑर्गेनिक मीडिया संवाद और भुगतान आधारित PR वितरण। 30-40 व्यक्तियों एवं संबंधित सामाजिक व धार्मिक संस्थाओं को प्रस्ताव भेजे गए हैं।
          </div>
        </div>
      </div>
    </section>
  );
};
