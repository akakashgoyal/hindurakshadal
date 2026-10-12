import React from 'react';
import { LEADERSHIP } from '../data/organizationData';
import { Shield, Megaphone, Sparkles, Building2 } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9EE] to-[#FFFDF9] border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block text-xs font-bold text-red-900 bg-red-100 border border-red-300 px-3 py-1 rounded-sm mb-3 font-yatra uppercase tracking-wider">
            संगठनात्मक सूत्रधार
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-red-950 font-yatra tracking-tight">
            नेतृत्व एवं प्रबंधन
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 via-amber-500 to-red-700 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-stone-700 font-tiro leading-relaxed">
            सनातन सेना संगठन के कुशल नेतृत्व और कार्यक्रम प्रबंधन की समर्पित टीम।
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Amit Dandotiya */}
          <div className="bg-white rounded-lg p-6 sm:p-7 border-2 border-amber-400 shadow-md flex flex-col justify-between text-center relative overflow-hidden group hover:border-red-600 transition-all">
            <div className="absolute top-0 right-0 w-16 h-16 bg-red-100/50 rounded-bl-full pointer-events-none" />
            <div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-100 to-amber-100 border-2 border-red-700 mx-auto flex items-center justify-center text-red-900 text-2xl font-bold shadow-sm mb-4">
                🚩
              </div>
              <h3 className="text-2xl font-bold text-red-950 font-yatra">
                अमित दंदोतिया
              </h3>
              <div className="text-xs font-bold text-red-800 uppercase tracking-wider bg-red-50 border border-red-200 px-2.5 py-1 rounded-full inline-block mt-1 mb-3 font-yatra">
                संस्थापक
              </div>
              <p className="text-xs text-amber-800 font-bold font-tiro mb-3">
                सनातन सेना संगठन
              </p>
              <p className="text-xs sm:text-sm text-stone-600 font-tiro leading-relaxed">
                सनातन समाज की एकता, सांस्कृतिक मूल्यों की रक्षा और युवाओं को अनुशासित संगठनात्मक मंच देने के दूरदर्शी प्रणेता।
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-amber-100 text-xs font-semibold text-stone-500">
              मार्गदर्शक एवं संस्थापक
            </div>
          </div>

          {/* Robin Dandotiya */}
          <div className="bg-white rounded-lg p-6 sm:p-7 border-2 border-amber-400 shadow-md flex flex-col justify-between text-center relative overflow-hidden group hover:border-red-600 transition-all">
            <div className="absolute top-0 right-0 w-16 h-16 bg-amber-100/50 rounded-bl-full pointer-events-none" />
            <div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-600 mx-auto flex items-center justify-center text-amber-900 text-2xl font-bold shadow-sm mb-4">
                📢
              </div>
              <h3 className="text-2xl font-bold text-red-950 font-yatra">
                रॉबिन दंदोतिया
              </h3>
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full inline-block mt-1 mb-3 font-yatra">
                जनसंपर्क अधिकारी (PRO)
              </div>
              <p className="text-xs text-amber-800 font-bold font-tiro mb-3">
                संगठन एवं कार्यक्रम
              </p>
              <p className="text-xs sm:text-sm text-stone-600 font-tiro leading-relaxed">
                सामाजिक संवाद, प्रशासनिक समन्वय, मीडिया संवाद और सामूहिक शस्त्र पूजन समारोह के सुचारु आयोजन के प्रभारी।
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-amber-100 text-xs font-semibold text-stone-500">
              जनसंपर्क एवं समन्वय
            </div>
          </div>

          {/* Monk Media Marketing */}
          <div className="bg-white rounded-lg p-6 sm:p-7 border-2 border-amber-400 shadow-md flex flex-col justify-between text-center relative overflow-hidden group hover:border-red-600 transition-all">
            <div className="absolute top-0 right-0 w-16 h-16 bg-red-100/50 rounded-bl-full pointer-events-none" />
            <div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-50 to-stone-100 border-2 border-stone-800 mx-auto flex items-center justify-center text-stone-900 text-xl font-bold shadow-sm mb-4">
                <Building2 className="w-9 h-9 text-red-800" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-red-950 font-yatra">
                Monk Media Marketing
              </h3>
              <div className="text-xs font-bold text-stone-800 uppercase tracking-wider bg-stone-100 border border-stone-300 px-2.5 py-1 rounded-full inline-block mt-1 mb-3 font-yatra">
                कार्यक्रम प्रबंधन एजेंसी
              </div>
              <p className="text-xs text-stone-700 font-bold font-tiro mb-3">
                जनसंपर्क एवं संचार
              </p>
              <p className="text-xs sm:text-sm text-stone-600 font-tiro leading-relaxed">
                समग्र कार्यक्रम प्रबंधन, आउटडोर मीडिया प्रचार, डिजिटल रणनीतियां, इन्फ्लुएंसर समन्वय और जनसहभागिता का संचालन।
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-amber-100 text-xs font-semibold text-stone-500">
              आधिकारिक प्रबंधन
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
