import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, Shield, Award, Sparkles } from 'lucide-react';
import { sacredAudio } from '../utils/audio';

interface HeroProps {
  onOpenRegister: () => void;
  onOpenPass: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onOpenPass }) => {
  // Countdown to 20 October 2026 16:00
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-10-20T16:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSound = () => {
    sacredAudio.playShankhnaad();
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF8EE] to-[#FFF3E0] pt-6 pb-16 sm:pb-24 border-b border-amber-200/80">
      {/* Decorative Traditional Saffron/Red Ambient Radial Pattern */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-gradient-to-br from-amber-400/20 to-red-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-gradient-to-tr from-red-600/15 to-orange-400/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Tagline */}
        <div className="flex items-center justify-center gap-2 mb-4 text-center">
          <span className="text-red-800 font-bold tracking-widest text-xs uppercase sm:text-sm font-yatra">
            ॥ जय श्री राम ॥ धर्मो रक्षति रक्षितः ॥
          </span>
        </div>

        {/* 2-Column Split: Visual & Hero Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Bold Hindi Presentation Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-red-900 bg-red-100/80 border border-red-300/60 px-3.5 py-1.5 rounded-sm">
              <span className="text-amber-600">🚩</span>
              <span>सनातन सेना संगठन • पहली सार्वजनिक ऐतिहासिक नींव</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-red-950 font-yatra tracking-tight leading-tight text-balance">
              सशक्त सनातनी समाज
              <span className="block text-2xl sm:text-4xl text-amber-700 font-rozha mt-2">
                सनातन समाज सामूहिक शस्त्र पूजन समारोह
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-tiro max-w-2xl">
              भारतीय सनातन संस्कृति से जुड़ी प्रत्येक इकाई की <strong className="text-red-900 font-semibold">सेवा, सुरक्षा, संरक्षण एवं एकता</strong> का पावन संकल्प। अच्छाई की बुराई पर विजय के पावन अवसर पर भव्य शस्त्र पूजन।
            </p>

            {/* Event Key Cards (Single-line discipline & high contrast) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white/90 border border-amber-300/80 p-3.5 rounded-md shadow-xs">
                <div className="flex items-center gap-2 text-red-800 font-semibold text-sm">
                  <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>20 अक्टूबर 2026</span>
                </div>
                <div className="text-xs text-stone-600 mt-1">दशहरा विजय उत्सव</div>
              </div>

              <div className="bg-white/90 border border-amber-300/80 p-3.5 rounded-md shadow-xs">
                <div className="flex items-center gap-2 text-red-800 font-semibold text-sm">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>सायं 4:00 बजे से</span>
                </div>
                <div className="text-xs text-stone-600 mt-1">सामूहिक पूजन एवं संबोधन</div>
              </div>

              <div className="bg-white/90 border border-amber-300/80 p-3.5 rounded-md shadow-xs">
                <div className="flex items-center gap-2 text-red-800 font-semibold text-sm">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>फतेहाबाद रोड</span>
                </div>
                <div className="text-xs text-stone-600 mt-1">आगरा, उत्तर प्रदेश</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onOpenRegister}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-red-800 to-amber-700 hover:from-red-900 hover:to-amber-800 text-white font-bold rounded-md shadow-md hover:shadow-lg transition-all text-base border border-amber-500/40"
              >
                <span>सहभागिता दर्ज करें</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPass}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-amber-50 text-red-900 font-bold rounded-md border border-amber-400 shadow-xs hover:shadow transition-all text-sm"
              >
                <Award className="w-4 h-4 text-amber-600" />
                <span>डिजिटल ई-पास देखें</span>
              </button>

              <button
                onClick={handleSound}
                className="inline-flex items-center gap-2 px-4 py-3.5 bg-amber-100/90 hover:bg-amber-200 text-amber-950 font-semibold rounded-md border border-amber-300 shadow-xs transition-all text-sm"
                title="शंखनाद करें"
              >
                <Sparkles className="w-4 h-4 text-amber-700" />
                <span>शंखनाद 🐚</span>
              </button>
            </div>

            {/* Countdown Bar */}
            <div className="p-3.5 bg-gradient-to-r from-red-950 via-stone-900 to-red-950 rounded-md text-amber-100 flex items-center justify-between flex-wrap gap-3 border border-amber-500/30">
              <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider font-yatra">
                समारोह का शुभारंभ:
              </span>
              <div className="flex items-center gap-3 text-center font-mono tabular-nums">
                <div className="bg-red-900/60 px-2 py-1 rounded border border-red-800">
                  <span className="font-bold text-amber-300 text-sm sm:text-base">{timeLeft.days}</span>
                  <span className="text-[10px] text-stone-300 block">दिन</span>
                </div>
                <div className="bg-red-900/60 px-2 py-1 rounded border border-red-800">
                  <span className="font-bold text-amber-300 text-sm sm:text-base">{timeLeft.hours}</span>
                  <span className="text-[10px] text-stone-300 block">घंटे</span>
                </div>
                <div className="bg-red-900/60 px-2 py-1 rounded border border-red-800">
                  <span className="font-bold text-amber-300 text-sm sm:text-base">{timeLeft.minutes}</span>
                  <span className="text-[10px] text-stone-300 block">मिनट</span>
                </div>
                <div className="bg-red-900/60 px-2 py-1 rounded border border-red-800">
                  <span className="font-bold text-amber-300 text-sm sm:text-base">{timeLeft.seconds}</span>
                  <span className="text-[10px] text-stone-300 block">सेकंड</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Sacred Art & Emblem Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-xl overflow-hidden border-2 border-amber-500/80 shadow-2xl bg-amber-950/10">
              <img
                src="/src/assets/images/hero_shastra_pujan_1791566817854.jpg"
                alt="सनातन समाज सामूहिक शस्त्र पूजन समारोह"
                className="w-full h-80 sm:h-96 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-red-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="/src/assets/images/sanatan_emblem_logo_1791566829962.jpg"
                    alt="सनातन सेना संगठन प्रतीक चिन्ह"
                    className="w-14 h-14 rounded-full border-2 border-amber-400 shadow-md bg-stone-900 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-lg font-bold font-yatra text-amber-300 leading-snug">
                      सनातन सेना संगठन
                    </h3>
                    <p className="text-xs text-amber-100 font-tiro">
                      सेवा • सुरक्षा • संरक्षण
                    </p>
                  </div>
                </div>
                <p className="text-xs text-amber-200/90 italic">
                  &ldquo;शस्त्र पूजन का संदेश: अनुशासन, आत्मसंयम और जिम्मेदार रक्षा का सांस्कृतिक संकल्प।&rdquo;
                </p>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white/95 border border-amber-300 rounded-md p-3 shadow-lg flex items-center gap-3 backdrop-blur-xs">
              <div className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center text-amber-300 font-bold">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-red-950 font-yatra">2,000+ सनातनी</div>
                <div className="text-xs text-stone-600">अनुमानित जन-सहभागिता</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Scope Strip (Placed in a full-width row below hero split) */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-amber-300/70">
          <div className="bg-white/80 p-4 rounded-md border border-amber-200 text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-red-900 font-mono tabular-nums">
              2,000+
            </div>
            <div className="text-sm font-bold text-stone-800 font-yatra mt-0.5">
              सनातनी सहभागिता
            </div>
            <div className="text-xs text-stone-500 mt-1">
              आगरा एवं समीपवर्ती क्षेत्रों से
            </div>
          </div>

          <div className="bg-white/80 p-4 rounded-md border border-amber-200 text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-700 font-mono tabular-nums">
              80-100
            </div>
            <div className="text-sm font-bold text-stone-800 font-yatra mt-0.5">
              होर्डिंग एवं बैनर
            </div>
            <div className="text-xs text-stone-500 mt-1">
              प्रमुख मार्गों एवं बाजारों में
            </div>
          </div>

          <div className="bg-white/80 p-4 rounded-md border border-amber-200 text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-red-900 font-mono tabular-nums">
              100+
            </div>
            <div className="text-sm font-bold text-stone-800 font-yatra mt-0.5">
              डिजिटल पोर्टल्स
            </div>
            <div className="text-xs text-stone-500 mt-1">
              न्यूज़ चैनल्स व PR कवरेज
            </div>
          </div>

          <div className="bg-white/80 p-4 rounded-md border border-amber-200 text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-700 font-mono tabular-nums">
              20+
            </div>
            <div className="text-sm font-bold text-stone-800 font-yatra mt-0.5">
              इन्फ्लुएंसर्स व संत
            </div>
            <div className="text-xs text-stone-500 mt-1">
              सांस्कृतिक व सामाजिक मार्गदर्शन
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
