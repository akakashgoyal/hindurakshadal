import React from 'react';
import { Calendar, Clock, MapPin, Music, Shield, Users, Mic2, Sparkles, CheckCircle2 } from 'lucide-react';

interface EventScheduleSectionProps {
  onOpenRegister: () => void;
}

export const EventScheduleSection: React.FC<EventScheduleSectionProps> = ({ onOpenRegister }) => {
  const scheduleItems = [
    {
      time: "सायं 4:00 - 4:45",
      title: "स्वागत एवं संगठन परिचय",
      desc: "आगंतुक सनातनी बंधुओं का पारम्परिक तिलक व पुष्पवर्षा से स्वागत, सनातन सेना संगठन के उद्देश्यों की प्रस्तुति।",
      icon: Users,
      badge: "प्रारंभ"
    },
    {
      time: "सायं 4:45 - 5:45",
      title: "सामूहिक शस्त्र पूजन",
      desc: "वैदिक मंत्रोच्चार, शंखध्वनि, हवन एवं परम्परागत शस्त्रों (त्रिशूल, खड्ग, परशु) का विधिपूर्वक सामूहिक वैदिक पूजन।",
      icon: Shield,
      badge: "मुख्य अनुष्ठान"
    },
    {
      time: "सायं 5:45 - 6:45",
      title: "पूज्य संतों व अतिथियों का संबोधन",
      desc: "मुख्य अतिथि श्री देवेंद्र सिंह तोमर एवं पूज्य संतों श्री गोपेश्वर कृष्ण दास जी व श्री मृदुलकांत शास्त्री जी का पावन मार्गदर्शन।",
      icon: Mic2,
      badge: "प्रेरणा"
    },
    {
      time: "सायं 6:45 - 7:45",
      title: "सांस्कृतिक एवं संगीत प्रस्तुतियाँ",
      desc: "सुप्रसिद्ध कलाकार डीके ठाकुर एवं विपिन पटाडिया द्वारा राष्ट्रभक्ति एवं भक्ति संगीत की ओजस्वी प्रस्तुतियाँ।",
      icon: Music,
      badge: "सांस्कृतिक"
    },
    {
      time: "सायं 7:45 - 8:30",
      title: "महाआरती, प्रसाद वितरण एवं समापन",
      desc: "भव्य दीपदान, प्रभु श्री राम व माँ भवानी की महाआरती, सनातनी बंधुओं को प्रसाद वितरण एवं परस्पर संवाद।",
      icon: Sparkles,
      badge: "महाआरती"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9] border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 px-3 py-1 rounded-sm mb-3 font-yatra uppercase tracking-wider">
            कार्यक्रम का स्वरूप
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-red-950 font-yatra tracking-tight">
            भव्य समारोह की रूपरेखा
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 via-amber-500 to-red-700 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-stone-700 font-tiro leading-relaxed">
            20 अक्टूबर 2026 को आगरा में आयोजित होने वाले ऐतिहासिक सामूहिक शस्त्र पूजन समारोह की समय-सारिणी एवं व्यवस्था।
          </p>
        </div>

        {/* Date & Venue Hero Banner with Venue Gathering Visual */}
        <div className="mb-12 bg-gradient-to-r from-red-900 via-stone-900 to-red-950 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 h-56 lg:h-full min-h-[220px] relative">
              <img
                src="/src/assets/images/event_agra_venue_gathering_1791789430116.jpg"
                alt="आगरा सामूहिक शस्त्र पूजन स्थल एवं सभा"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-red-950/90 via-black/30 to-transparent flex items-end p-4">
                <span className="text-xs bg-amber-500 text-stone-950 font-bold font-yatra px-2.5 py-1 rounded shadow-sm">
                  फतेहाबाद रोड, आगरा
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 text-white space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase text-amber-300 font-bold tracking-widest block font-yatra">तारीख</span>
                    <span className="text-lg sm:text-xl font-extrabold font-mono text-white">20 अक्टूबर 2026</span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase text-amber-300 font-bold tracking-widest block font-yatra">समय</span>
                    <span className="text-lg sm:text-xl font-extrabold font-mono text-white">सायं 4:00 बजे से</span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase text-amber-300 font-bold tracking-widest block font-yatra">स्थान</span>
                    <span className="text-base sm:text-lg font-bold font-yatra text-white">फतेहाबाद रोड, आगरा</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-amber-100/90 font-tiro leading-relaxed">
                2,000+ सनातनी बंधुओं के साथ सामूहिक वैदिक शस्त्र पूजन, पूज्य संतों के आशीर्वचन, राष्ट्रभक्ति संगीत एवं महाआरती।
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Flow */}
        <div className="max-w-4xl mx-auto space-y-4">
          {scheduleItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-5 sm:p-6 border border-amber-200/90 shadow-2xs hover:border-amber-400 hover:shadow-xs transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-red-800" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-red-900 bg-red-100/80 px-2.5 py-0.5 rounded font-mono">
                        {item.time}
                      </span>
                      <span className="text-[11px] font-semibold text-amber-800 font-tiro">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-stone-900 font-yatra">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-tiro mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-end sm:self-center">
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded">
                    चरण 0{index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Slide 9 Note: वेन्यू का अंतिम चयन जारी है */}
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-xs text-stone-500 font-tiro italic">
            * वेन्यू का अंतिम चयन जारी है। अंतिम समय-सारिणी अतिथियों एवं सांस्कृतिक प्रस्तुतियों के अनुसार तय होगी।
          </p>

          <div className="mt-5">
            <button
              onClick={onOpenRegister}
              className="px-6 py-3 bg-gradient-to-r from-red-800 to-amber-700 hover:from-red-900 hover:to-amber-800 text-white font-bold rounded-md shadow-sm transition-all text-sm font-yatra"
            >
              कार्यक्रम में सीट आरक्षित करें
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
