import React from 'react';
import { Compass, Target, Sparkles, Shield, Heart, GraduationCap } from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FFFDF9] border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Box 1: हमारी दृष्टि (Our Vision) */}
          <div className="bg-gradient-to-br from-amber-50/70 via-white to-amber-100/40 border border-amber-300 rounded-lg p-7 sm:p-9 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-red-900 bg-red-100/80 border border-red-200 w-fit px-3 py-1 rounded-sm uppercase tracking-wider font-yatra mb-4">
                <Compass className="w-4 h-4 text-red-700" />
                <span>हमारी दृष्टि (Our Vision)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-red-950 font-yatra leading-tight">
                संस्कृति से जुड़ा समाज।
                <span className="block text-amber-700 mt-1">सहयोग के लिए संगठित समाज।</span>
              </h3>

              <p className="mt-4 text-sm sm:text-base text-stone-700 font-tiro leading-relaxed">
                एक ऐसा सनातन समाज जो अपनी सांस्कृतिक पहचान पर गर्व करे, परस्पर सहयोग की भावना से एकजुट रहे और राष्ट्र निर्माण में अग्रणी भूमिका निभाए।
              </p>

              <div className="mt-6 space-y-3.5">
                <div className="flex items-start gap-3 p-3 bg-white/90 rounded border border-amber-200 shadow-2xs">
                  <GraduationCap className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 font-yatra">युवाओं में सांस्कृतिक समझ</h4>
                    <p className="text-xs text-stone-600 font-tiro">
                      आधुनिक शिक्षा के साथ-साथ वैदिक मूल्यों व सामाजिक उत्तरदायित्व का जागरण।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white/90 rounded border border-amber-200 shadow-2xs">
                  <Shield className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 font-yatra">महिला सम्मान, गरिमा और सुरक्षा</h4>
                    <p className="text-xs text-stone-600 font-tiro">
                      मातृशक्ति की प्रतिष्ठा और उन्हें निर्भय, सशक्त सामाजिक वातावरण प्रदान करना।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white/90 rounded border border-amber-200 shadow-2xs">
                  <Heart className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 font-yatra">गौसेवा, समाजसेवा और विरासत</h4>
                    <p className="text-xs text-stone-600 font-tiro">
                      जीवदया, गौ-संवर्धन और प्राचीन ऐतिहासिक धरोहरों के संरक्षण में सबकी सहभागिता।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-200/60 text-xs text-stone-500 font-tiro">
              सनातन का शाब्दिक अर्थ है — जो शाश्वत है, सत्य है और सर्वकल्याणकारी है।
            </div>
          </div>

          {/* Box 2: हमारा मिशन (Our Mission) */}
          <div className="bg-gradient-to-br from-red-50/50 via-white to-amber-50/50 border border-red-200 rounded-lg p-7 sm:p-9 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 w-fit px-3 py-1 rounded-sm uppercase tracking-wider font-yatra mb-4">
                <Target className="w-4 h-4 text-amber-800" />
                <span>हमारा मिशन (Our Mission)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-red-950 font-yatra leading-tight">
                लोगों और संसाधनों को जिम्मेदार संगठनात्मक मंच से जोड़ना
              </h3>

              <p className="mt-4 text-sm sm:text-base text-stone-700 font-tiro leading-relaxed">
                सनातन सेना संगठन 4 प्रमुख चरणों के माध्यम से समाज को एक अनुशासित और सशक्त धारा में प्रवाहित करने के लिए प्रतिबद्ध है:
              </p>

              <div className="mt-6 space-y-3">
                <div className="p-3 bg-white rounded border border-amber-200 flex items-start gap-3 shadow-2xs">
                  <span className="text-sm font-extrabold text-red-800 font-mono bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    01
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 font-yatra">
                      सेवाभावी व्यक्तियों और समूहों को साझा संकल्प से जोड़ना
                    </h4>
                    <p className="text-xs text-stone-600 font-tiro">
                      अलग-अलग कार्य कर रहे समाजसेवियों को एक साझा मंच प्रदान करना।
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-white rounded border border-amber-200 flex items-start gap-3 shadow-2xs">
                  <span className="text-sm font-extrabold text-red-800 font-mono bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    02
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 font-yatra">
                      गौसेवा, समाजसेवा और महिला सम्मान को प्रोत्साहित करना
                    </h4>
                    <p className="text-xs text-stone-600 font-tiro">
                      प्रत्येक गाँव, नगर और वार्ड में सेवा कार्यों को निरंतर गति देना।
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-white rounded border border-amber-200 flex items-start gap-3 shadow-2xs">
                  <span className="text-sm font-extrabold text-red-800 font-mono bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    03
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 font-yatra">
                      परंपराओं एवं विरासत के संरक्षण की जागरूकता
                    </h4>
                    <p className="text-xs text-stone-600 font-tiro">
                      धार्मिक पर्वों, ऐतिहासिक वीरों के आदर्शों और शस्त्र पूजन का जन-जन तक प्रसार।
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-white rounded border border-amber-200 flex items-start gap-3 shadow-2xs">
                  <span className="text-sm font-extrabold text-red-800 font-mono bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    04
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 font-yatra">
                      युवाओं की सहभागिता और मार्गदर्शन का समुदाय
                    </h4>
                    <p className="text-xs text-stone-600 font-tiro">
                      नौजवानों को चरित्रवान, आत्मविश्वासी और कर्तव्यनिष्ठ बनाना।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 4 concluding note */}
            <div className="mt-6 pt-4 border-t border-red-200/60 bg-red-50/70 p-3 rounded text-center">
              <p className="text-xs sm:text-sm font-bold text-red-950 font-tiro">
                &ldquo;शांति, अनुशासन, सम्मान और जिम्मेदारी हमारी सहभागिता का आधार हैं।&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
