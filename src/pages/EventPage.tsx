import React from 'react';
import { Calendar, Clock, MapPin, Users, Award, Shield, Music, Sparkles } from 'lucide-react';
import { EVENT_DETAILS } from '../data/organizationData';

interface EventPageProps {
  onOpenRegister: () => void;
  onOpenPass: () => void;
}

export const EventPage: React.FC<EventPageProps> = ({ onOpenRegister, onOpenPass }) => {
  return (
    <div className="py-12 sm:py-16 bg-[#FFFDF9] space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block text-xs font-bold text-red-900 bg-red-100 border border-red-300 px-3.5 py-1 rounded-sm mb-3 font-yatra uppercase tracking-wider">
            पहली सार्वजनिक नींव • भव्य आयोजन
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-red-950 font-yatra tracking-tight leading-tight">
            सनातन समाज सामूहिक शस्त्र पूजन समारोह
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 via-amber-500 to-red-700 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-stone-700 font-tiro leading-relaxed">
            दशहरा विजय उत्सव पर आगरा में आयोजित होने वाला ऐतिहासिक सामूहिक शस्त्र पूजन एवं धर्म संवाद।
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="bg-gradient-to-r from-red-900 via-stone-900 to-red-950 rounded-2xl p-6 sm:p-10 text-white border-2 border-amber-400 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 shrink-0">
                <Calendar className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs uppercase text-amber-300 font-bold tracking-widest font-yatra block">
                  दिनांक
                </span>
                <span className="text-2xl font-bold font-mono">20 अक्टूबर 2026</span>
                <p className="text-xs text-amber-100">विजयादशमी पर्व</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 shrink-0">
                <Clock className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs uppercase text-amber-300 font-bold tracking-widest font-yatra block">
                  समय
                </span>
                <span className="text-2xl font-bold font-mono">सायं 4:00 बजे से</span>
                <p className="text-xs text-amber-100">पूजन एवं महाआरती</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 shrink-0">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs uppercase text-amber-300 font-bold tracking-widest font-yatra block">
                  स्थान
                </span>
                <span className="text-xl font-bold font-yatra">फतेहाबाद रोड, आगरा</span>
                <p className="text-xs text-amber-100">उत्तर प्रदेश</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grand Sabha & Venue Showcase Photo */}
        <div className="rounded-2xl overflow-hidden border-2 border-amber-400 shadow-xl relative group">
          <img
            src="/src/assets/images/event_agra_venue_gathering_1791789430116.jpg"
            alt="आगरा सामूहिक शस्त्र पूजन सभा"
            referrerPolicy="no-referrer"
            className="w-full h-72 sm:h-96 md:h-[450px] object-cover group-hover:scale-101 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
            <span className="text-xs sm:text-sm font-bold text-amber-300 font-yatra uppercase tracking-wider">
              ॥ शस्त्र पूजन महाकुंभ • फतेहाबाद रोड, आगरा ॥
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-yatra text-amber-100 mt-1">
              2,000+ सनातनी बंधुओं की ऐतिहासिक सहभागिता
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/90 font-tiro mt-1 max-w-3xl">
              वैदिक मंत्रोच्चार, शंखनाद, हवन एवं दिव्य मर्यादा का सामूहिक उत्सव। धर्म रक्षा एवं सामाजिक एकता का प्रत्यक्ष उद्घोष।
            </p>
          </div>
        </div>

        {/* 2-Column: Scope & Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Pehli Sarvjanik Neev (Slide 7) */}
          <div className="lg:col-span-5 bg-amber-50 rounded-xl p-6 border-2 border-amber-300 space-y-4">
            <span className="text-xs font-bold text-red-900 uppercase tracking-widest font-yatra">
              पहली सार्वजनिक नींव
            </span>
            <div className="text-5xl font-black text-red-900 font-mono tracking-tight tabular-nums">
              लगभग 2,000
            </div>
            <h3 className="text-xl font-bold text-stone-900 font-yatra">
              व्यक्तियों की अनुमानित सहभागिता
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-tiro leading-relaxed">
              संगठन का परिचय, सांस्कृतिक सहभागिता और सनातनी समाज के बीच नए सार्थक संवाद की गौरवशाली शुरुआत।
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenRegister}
                className="w-full py-3 bg-red-800 hover:bg-red-900 text-white font-bold rounded-md text-sm font-yatra shadow-xs"
              >
                सहभागिता दर्ज करें 🚩
              </button>
            </div>
          </div>

          {/* Karyakram ka Swaroop (Slide 9) */}
          <div className="lg:col-span-7 bg-white rounded-xl p-6 border border-amber-200 shadow-sm space-y-3">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest font-yatra">
              कार्यक्रम का स्वरूप
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-red-950 font-yatra">
              समारोह की रूपरेखा
            </h3>

            <div className="space-y-3 pt-2">
              <div className="p-3 bg-amber-50/70 rounded-md border border-amber-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-900 flex items-center justify-center font-bold text-xs shrink-0">
                  01
                </div>
                <div className="text-sm font-bold text-stone-900 font-yatra">
                  स्वागत एवं संगठन परिचय
                </div>
              </div>

              <div className="p-3 bg-amber-50/70 rounded-md border border-amber-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-900 flex items-center justify-center font-bold text-xs shrink-0">
                  02
                </div>
                <div className="text-sm font-bold text-stone-900 font-yatra">
                  सामूहिक वैदिक शस्त्र पूजन
                </div>
              </div>

              <div className="p-3 bg-amber-50/70 rounded-md border border-amber-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-900 flex items-center justify-center font-bold text-xs shrink-0">
                  03
                </div>
                <div className="text-sm font-bold text-stone-900 font-yatra">
                  पूज्य संतों व अतिथियों का संबोधन
                </div>
              </div>

              <div className="p-3 bg-amber-50/70 rounded-md border border-amber-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-900 flex items-center justify-center font-bold text-xs shrink-0">
                  04
                </div>
                <div className="text-sm font-bold text-stone-900 font-yatra">
                  सांस्कृतिक एवं संगीत प्रस्तुतियाँ
                </div>
              </div>
            </div>

            <div className="pt-3 text-[11px] text-stone-500 font-tiro italic">
              * वेन्यू का अंतिम चयन जारी है। अंतिम समय-सारिणी अतिथियों एवं प्रस्तुतियों के अनुसार तय होगी।
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
