import React from 'react';
import { Users2, Briefcase, Landmark, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#FFFDF9] border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block text-xs font-bold text-red-900 bg-red-50 border border-red-200 px-3 py-1 rounded-sm mb-3 font-yatra uppercase tracking-wider">
            संगठन का परिचय
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-red-950 font-yatra tracking-tight leading-snug">
            भारतीय सनातन संस्कृति से जुड़ी प्रत्येक इकाई का संकल्प
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 via-amber-500 to-red-700 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-stone-700 font-tiro leading-relaxed">
            सनातन सेना संगठन केवल एक संस्था नहीं, बल्कि हर सनातनी के भीतर अपनी गौरवशाली परंपरा, सेवा और सुरक्षा के भाव को जाग्रत करने वाला एक सशक्त सामाजिक आंदोलन है।
          </p>
        </div>

        {/* 2-Column Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Showcase with Gau Seva Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border-2 border-amber-300 shadow-xl bg-stone-900 group">
              <img
                src="/src/assets/images/seva_samaj_culture_1791566852525.jpg"
                alt="गौसेवा और सनातन संस्कृति"
                className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/85 via-stone-900/40 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-amber-300 text-xs font-bold font-yatra">
                  ॥ सेवा परमो धर्मः ॥
                </span>
                <h3 className="text-xl font-bold font-yatra text-white mt-1">
                  सांस्कृतिक पहचान के साथ सामाजिक उत्तरदायित्व
                </h3>
                <p className="text-xs text-amber-100/90 mt-1 font-tiro">
                  गौसेवा, युवा मार्गदर्शन और कमजोर वर्ग के सहयोग में निरंतर सक्रिय रहने का संकल्प।
                </p>
              </div>
            </div>

            {/* Quote block */}
            <div className="mt-4 p-4 bg-amber-50/80 border border-amber-300 rounded-md">
              <p className="text-xs sm:text-sm text-stone-800 font-medium italic text-center">
                &ldquo;संगठन विकास के प्रारंभिक चरण में है। इसकी शक्ति सक्रिय लोगों और परस्पर विश्वास से बनेगी।&rdquo;
              </p>
            </div>
          </div>

          {/* Core Structure: Ek Saajha Manch */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest font-yatra">
                एकजुटता की शक्ति
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-red-900 font-yatra mt-1">
                एक साझा मंच — सबको साथ लेकर चलने का प्रयास
              </h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-white rounded-md border border-amber-200 shadow-xs hover:border-amber-400 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-md bg-red-100 text-red-900 shrink-0 mt-0.5">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-stone-900 font-yatra">
                      युवाओं, संत समाज और सेवाभावी लोगों की सहभागिता
                    </h4>
                    <p className="text-sm text-stone-600 mt-1 leading-normal font-tiro">
                      पूज्य संतों के दिव्य मार्गदर्शन और ऊर्जावान युवाओं के पराक्रम का पावन संगम, जिससे समाज में सकारात्मक बदलाव आए।
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-md border border-amber-200 shadow-xs hover:border-amber-400 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-md bg-amber-100 text-amber-900 shrink-0 mt-0.5">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-stone-900 font-yatra">
                      उद्यमियों एवं पेशेवरों के बीच संवाद
                    </h4>
                    <p className="text-sm text-stone-600 mt-1 leading-normal font-tiro">
                      व्यापारियों, डॉक्टरों, वकीलों, शिक्षकों और उद्यमियों को एक मंच पर जोड़कर आर्थिक व सामाजिक सहायता नेटवर्क तैयार करना।
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-md border border-amber-200 shadow-xs hover:border-amber-400 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-md bg-red-100 text-red-900 shrink-0 mt-0.5">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-stone-900 font-yatra">
                      सांस्कृतिक पहचान के साथ सामाजिक जिम्मेदारी
                    </h4>
                    <p className="text-sm text-stone-600 mt-1 leading-normal font-tiro">
                      सनातन धर्म के समृद्ध इतिहास, दर्शन और संस्कारों को संजोते हुए समाज के हर वर्ग के उत्थान के लिए निरंतर कार्य।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillars summary line */}
            <div className="flex items-center gap-2 pt-2 text-sm font-semibold text-red-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>सदाचार, अनुशासन और आपसी सहयोग संगठन का आधारस्तंभ है।</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
