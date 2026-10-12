import React from 'react';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';
import { EVENT_DETAILS } from '../data/organizationData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1C1917] to-[#120F0E] text-stone-300 border-t-2 border-amber-500/80">
      {/* Top Auspicious Sloka */}
      <div className="bg-red-950/80 border-b border-red-900/60 py-3 text-center px-4">
        <p className="text-xs sm:text-sm font-bold font-yatra text-amber-300 tracking-wider">
          ॥ यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xl font-bold font-yatra text-amber-400">
              <span>🚩</span>
              <span>सनातन सेना संगठन</span>
            </div>
            <p className="text-xs text-amber-200/90 font-tiro leading-relaxed">
              भारतीय सनातन संस्कृति से जुड़ी प्रत्येक इकाई की सेवा, सुरक्षा, संरक्षण एवं एकता का पावन संकल्प।
            </p>
            <div className="text-xs text-stone-400 font-tiro">
              आदर्श वाक्य: <strong className="text-amber-300">सेवा • सुरक्षा • संरक्षण</strong>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-amber-400 font-yatra uppercase tracking-wider">
              त्वरित नेविगेशन
            </h4>
            <ul className="space-y-1.5 text-xs font-tiro">
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  संगठन का परिचय
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-amber-300 transition-colors">
                  तीन मूल स्तंभ (सेवा, सुरक्षा, संरक्षण)
                </a>
              </li>
              <li>
                <a href="#shastra-pujan" className="hover:text-amber-300 transition-colors">
                  शस्त्र पूजन प्रेरणा व महत्व
                </a>
              </li>
              <li>
                <a href="#guests" className="hover:text-amber-300 transition-colors">
                  प्रमुख अतिथि व कलाकार
                </a>
              </li>
              <li>
                <a href="#outreach" className="hover:text-amber-300 transition-colors">
                  प्रचार एवं मीडिया रूपरेखा
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Event Key Info */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-amber-400 font-yatra uppercase tracking-wider">
              समारोह विवरण
            </h4>
            <div className="text-xs space-y-1.5 text-stone-300 font-tiro">
              <div className="flex items-center gap-2">
                <span className="text-amber-400">📅</span>
                <span>20 अक्टूबर 2026 (विजयादशमी)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">⏰</span>
                <span>सायं 4:00 बजे से</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">📍</span>
                <span>फतेहाबाद रोड, आगरा (उ.प्र.)</span>
              </div>
              <div className="pt-2 text-stone-400">
                सहभागिता लक्ष्य: <strong>2,000+ सनातनी बंधु</strong>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Management */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-amber-400 font-yatra uppercase tracking-wider">
              संपर्क एवं प्रबंधन
            </h4>
            <div className="text-xs space-y-1.5 text-stone-300 font-tiro">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${EVENT_DETAILS.contactPhone}`} className="hover:text-amber-300 font-mono">
                  {EVENT_DETAILS.contactPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${EVENT_DETAILS.contactEmails[0]}`} className="hover:text-amber-300 truncate">
                  {EVENT_DETAILS.contactEmails[0]}
                </a>
              </div>
              <div className="pt-2 border-t border-stone-800 text-stone-400 text-[11px]">
                प्रबंधन: <strong className="text-amber-200">Monk Media Marketing</strong>
                <p className="text-[10px] text-stone-500">कार्यक्रम प्रबंधन, जनसंपर्क एवं संचार</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-tiro gap-3">
          <div>
            © 2026 सनातन सेना संगठन। सर्वाधिकार सुरक्षित।
          </div>
          <div className="flex items-center gap-4 text-stone-400 text-xs">
            <span>सशक्त सनातनी समाज</span>
            <span>•</span>
            <span>धर्मो रक्षति रक्षितः</span>
            <span>•</span>
            <span>Monk Media Marketing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
