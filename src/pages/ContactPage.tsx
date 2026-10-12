import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { EVENT_DETAILS } from '../data/organizationData';
import { sacredAudio } from '../utils/audio';

interface ContactPageProps {
  onOpenRegister: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenRegister }) => {
  const [msgSent, setMsgSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setMsgSent(true);
    sacredAudio.playTempleBell();
  };

  return (
    <div className="py-12 sm:py-16 bg-[#FFFDF9] space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block text-xs font-bold text-red-900 bg-red-100 border border-red-300 px-3.5 py-1 rounded-sm mb-3 font-yatra uppercase tracking-wider">
            सहभागिता हेतु आमंत्रण
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-red-950 font-yatra tracking-tight leading-tight">
            इस पहली नींव में आपकी सहभागिता का स्वागत है
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 via-amber-500 to-red-700 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-stone-700 font-tiro leading-relaxed">
            सनातन समाज सामूहिक शस्त्र पूजन समारोह, 20 अक्टूबर 2026, फतेहाबाद रोड, आगरा।
          </p>
        </div>

        {/* 2-Column: Contacts & Quick Query Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Contact Details (Slide 13) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-xl border-2 border-amber-300 shadow-sm space-y-4">
              <span className="text-xs font-bold text-red-900 uppercase tracking-widest font-yatra block">
                सीधा संपर्क विवरण
              </span>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-red-100 text-red-900 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-stone-500 font-yatra block">हेल्पलाइन नंबर</span>
                  <a href={`tel:${EVENT_DETAILS.contactPhone}`} className="text-lg font-bold font-mono text-red-950 hover:underline">
                    {EVENT_DETAILS.contactPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-amber-100 text-amber-900 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-stone-500 font-yatra block">आधिकारिक ईमेल</span>
                  <a href={`mailto:${EVENT_DETAILS.contactEmails[0]}`} className="text-xs font-bold text-stone-900 hover:underline block break-all">
                    {EVENT_DETAILS.contactEmails[0]}
                  </a>
                  <a href={`mailto:${EVENT_DETAILS.contactEmails[1]}`} className="text-xs text-stone-600 hover:underline block break-all mt-0.5">
                    {EVENT_DETAILS.contactEmails[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-orange-100 text-orange-900 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-stone-500 font-yatra block">आयोजन स्थल</span>
                  <p className="text-sm font-bold text-stone-900 font-yatra">
                    फतेहाबाद रोड, आगरा (उ.प्र.)
                  </p>
                </div>
              </div>
            </div>

            {/* Slide 13 Sponsorship Note */}
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-300 text-center">
              <p className="text-xs text-red-950 font-bold font-tiro">
                सहयोग एवं प्रायोजन के विकल्प अलग प्रस्ताव में उपलब्ध हैं।
              </p>
            </div>
          </div>

          {/* Quick Message / Query Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-amber-200 shadow-sm">
            <h3 className="text-xl font-bold text-red-950 font-yatra mb-1">
              संदेश या सुझाव भेजें
            </h3>
            <p className="text-xs text-stone-600 font-tiro mb-5">
              संगठन से जुड़ने, स्वयंसेवा या कार्यक्रम संबंधी किसी भी जानकारी के लिए हमें लिखें।
            </p>

            {msgSent ? (
              <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-lg text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-950 font-yatra">संदेश प्राप्त हुआ!</h4>
                <p className="text-xs text-emerald-800 font-tiro">
                  सनातन सेना संगठन की टीम शीघ्र ही आपसे संपर्क करेगी। धन्यवाद!
                </p>
                <button
                  onClick={() => setMsgSent(false)}
                  className="mt-3 text-xs text-emerald-900 font-bold underline"
                >
                  दूसरा संदेश भेजें
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-800 font-yatra mb-1">
                    आपका नाम *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="नाम दर्ज करें"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-amber-300 rounded-md bg-white text-sm focus:ring-2 focus:ring-amber-500 font-tiro"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 font-yatra mb-1">
                    मोबाइल नंबर *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10 अंकों का मोबाइल नंबर"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-amber-300 rounded-md bg-white text-sm focus:ring-2 focus:ring-amber-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 font-yatra mb-1">
                    संदेश / प्रश्न
                  </label>
                  <textarea
                    rows={3}
                    placeholder="अपना संदेश लिखें..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-amber-300 rounded-md bg-white text-sm focus:ring-2 focus:ring-amber-500 font-tiro"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-red-800 hover:bg-red-900 text-white font-bold rounded-md text-sm font-yatra flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>संदेश भेजें</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
