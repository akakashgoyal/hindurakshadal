import React from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, Award, Shield, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { EVENT_DETAILS } from '../data/organizationData';
import { sacredAudio } from '../utils/audio';

interface InvitationSectionProps {
  onOpenRegister: () => void;
}

export const InvitationSection: React.FC<InvitationSectionProps> = ({ onOpenRegister }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF3E0] to-[#FFFDF9] border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border-3 border-amber-500 shadow-2xl overflow-hidden">
          {/* Top Auspicious Saffron/Red Banner */}
          <div className="bg-gradient-to-r from-red-900 via-amber-700 to-red-900 p-6 sm:p-8 text-center text-white relative">
            <span className="text-amber-300 font-bold tracking-widest text-xs uppercase font-yatra block mb-1">
              ॥ धर्मो रक्षति रक्षितः ॥
            </span>
            <div className="inline-block text-xs font-bold text-amber-200 bg-red-950/70 border border-amber-400/40 px-3.5 py-1 rounded-sm uppercase tracking-wider font-yatra mb-2">
              सहभागिता हेतु आमंत्रण
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-yatra text-white tracking-tight">
              इस पहली नींव में आपकी सहभागिता का स्वागत है
            </h2>
            <p className="mt-2 text-sm sm:text-base text-amber-100 font-tiro max-w-xl mx-auto">
              सनातन संस्कृति की रक्षा, स्वाभिमान एवं परस्पर एकता के इस ऐतिहासिक यज्ञ में आपका सपरिवार सादर आमंत्रण है।
            </p>
          </div>

          {/* Invitation Details Body */}
          <div className="p-6 sm:p-10 space-y-8">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300 p-6 rounded-xl text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-red-950 font-yatra">
                सनातन समाज सामूहिक शस्त्र पूजन समारोह
              </h3>
              <p className="text-sm font-semibold text-amber-800 font-tiro">
                सेवा • सुरक्षा • संरक्षण
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 mt-2 border-t border-amber-200">
                <div className="flex items-center justify-center gap-2 text-sm text-stone-800 font-semibold">
                  <Calendar className="w-4 h-4 text-red-700" />
                  <span>20 अक्टूबर 2026</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-stone-800 font-semibold">
                  <Clock className="w-4 h-4 text-red-700" />
                  <span>सायं 4:00 बजे से</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-stone-800 font-semibold">
                  <MapPin className="w-4 h-4 text-red-700" />
                  <span>फतेहाबाद रोड, आगरा</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Details from Slide 13 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-5 bg-white rounded-lg border border-amber-200 shadow-2xs">
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-800 mx-auto flex items-center justify-center mb-2">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs text-stone-500 font-yatra uppercase">सीधा हेल्पलाइन नंबर</div>
                <a
                  href={`tel:${EVENT_DETAILS.contactPhone}`}
                  className="text-lg font-extrabold text-red-950 font-mono block mt-1 hover:text-red-700"
                >
                  {EVENT_DETAILS.contactPhone}
                </a>
                <span className="text-[11px] text-stone-500 font-tiro">कॉल या व्हाट्सएप करें</span>
              </div>

              <div className="p-5 bg-white rounded-lg border border-amber-200 shadow-2xs">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 mx-auto flex items-center justify-center mb-2">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs text-stone-500 font-yatra uppercase">आधिकारिक ईमेल</div>
                <a
                  href={`mailto:${EVENT_DETAILS.contactEmails[0]}`}
                  className="text-xs sm:text-sm font-bold text-stone-900 block mt-1 hover:text-red-700 break-all"
                >
                  {EVENT_DETAILS.contactEmails[0]}
                </a>
                <span className="text-[11px] text-stone-500 font-tiro">सहयोग एवं संवाद हेतु</span>
              </div>

              <div className="p-5 bg-white rounded-lg border border-amber-200 shadow-2xs">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-800 mx-auto flex items-center justify-center mb-2">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div className="text-xs text-stone-500 font-yatra uppercase">प्रायोजन एवं सहयोग</div>
                <a
                  href={`mailto:${EVENT_DETAILS.contactEmails[1]}`}
                  className="text-xs sm:text-sm font-bold text-stone-900 block mt-1 hover:text-red-700 break-all"
                >
                  {EVENT_DETAILS.contactEmails[1]}
                </a>
                <span className="text-[11px] text-stone-500 font-tiro">प्रस्ताव एवं भागीदारी</span>
              </div>
            </div>

            {/* Slide 13 footer note: सहयोग एवं प्रायोजन के विकल्प अलग प्रस्ताव में उपलब्ध हैं। */}
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
              <p className="text-xs sm:text-sm text-red-950 font-semibold font-tiro">
                सहयोग एवं प्रायोजन (Sponsorship & Partnership) के विकल्प अलग प्रस्ताव में उपलब्ध हैं।
              </p>
              <p className="text-xs text-stone-600 font-tiro mt-0.5">
                इच्छुक बंधु दिए गए दूरभाष अथवा ईमेल पर संपर्क कर सकते हैं।
              </p>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={onOpenRegister}
                className="px-8 py-3.5 bg-gradient-to-r from-red-800 via-amber-700 to-red-800 hover:from-red-900 hover:to-amber-900 text-white font-bold rounded-md shadow-md hover:shadow-lg transition-all text-base font-yatra border border-amber-400"
              >
                सहभागिता हेतु तुरंत रजिस्टर करें
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
