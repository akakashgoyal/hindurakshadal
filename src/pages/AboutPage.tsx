import React from 'react';
import { PILLARS } from '../data/organizationData';
import { HeartHandshake, ShieldCheck, Flame, Users2, Briefcase, Landmark, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onOpenRegister: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenRegister }) => {
  return (
    <div className="py-12 sm:py-16 bg-[#FFFDF9] space-y-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block text-xs font-bold text-red-900 bg-red-100 border border-red-300 px-3.5 py-1 rounded-sm mb-3 font-yatra uppercase tracking-wider">
            संगठन का परिचय
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-red-950 font-yatra tracking-tight">
            सनातन सेना संगठन
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 via-amber-500 to-red-700 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-stone-700 font-tiro leading-relaxed">
            भारतीय सनातन संस्कृति से जुड़ी प्रत्येक इकाई की <strong className="text-red-900 font-bold">सेवा, सुरक्षा, संरक्षण एवं एकता</strong> का पावन संकल्प।
          </p>
        </div>

        {/* 1. Ek Saajha Manch (Slide 2) */}
        <div className="bg-gradient-to-br from-amber-50/80 via-white to-orange-50/50 rounded-2xl border-2 border-amber-300 p-6 sm:p-8 shadow-sm">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest font-yatra">
              संगठन का स्वरूप
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-950 font-yatra mt-1">
              एक साझा मंच — सबको साथ लेकर चलने का प्रयास
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-amber-200 shadow-2xs">
              <div className="w-12 h-12 rounded-lg bg-red-100 text-red-900 flex items-center justify-center mb-3">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-yatra">
                युवा व संत समाज की सहभागिता
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-tiro mt-2">
                युवाओं के पराक्रम और पूज्य संतों के आध्यात्मिक मार्गदर्शन का पावन संगम।
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-amber-200 shadow-2xs">
              <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center mb-3">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-yatra">
                उद्यमियों एवं पेशेवरों में संवाद
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-tiro mt-2">
                व्यापारियों, डॉक्टरों, वकीलों व प्रबुद्ध जनों को जोड़कर सामाजिक नेटवर्क तैयार करना।
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-amber-200 shadow-2xs">
              <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-900 flex items-center justify-center mb-3">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-yatra">
                सांस्कृतिक पहचान व जिम्मेदारी
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-tiro mt-2">
                वैदिक पहचान पर गर्व के साथ-साथ समाज के प्रति दायित्वों का निष्ठापूर्वक निर्वहन।
              </p>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-stone-500 font-tiro italic">
            &ldquo;संगठन विकास के प्रारंभिक चरण में है। इसकी शक्ति सक्रिय लोगों और परस्पर विश्वास से बनेगी।&rdquo;
          </div>
        </div>

        {/* 2. Teen Mool Stambh (Slide 5) */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest font-yatra">
              संगठनात्मक आधार
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-red-950 font-yatra">
              तीन मूल स्तंभ
            </h2>
            <p className="text-sm font-bold text-amber-800 font-yatra mt-1">
              &ldquo;एकता इन तीनों स्तंभों को जोड़ती है।&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-amber-300 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-red-50 text-red-800 flex items-center justify-center mb-3">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-red-950 font-yatra">सेवा</h3>
              <p className="text-xs font-semibold text-amber-700 font-tiro mt-1 mb-3">
                गौसेवा, जरूरतमंदों का सहयोग और स्वयंसेवा।
              </p>
              <ul className="space-y-1.5 text-xs text-stone-700 font-tiro">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>गौसेवा एवं गौशालाओं का संवर्धन</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>जरूरतमंदों का सामाजिक सहयोग</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-red-500 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-red-100 text-red-900 flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-red-950 font-yatra">सुरक्षा</h3>
              <p className="text-xs font-semibold text-red-800 font-tiro mt-1 mb-3">
                व्यक्ति की गरिमा, महिला सम्मान और सुरक्षित सामाजिक सहभागिता।
              </p>
              <ul className="space-y-1.5 text-xs text-stone-700 font-tiro">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>व्यक्ति की गरिमा एवं आत्मसम्मान</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>मातृशक्ति सम्मान व सुरक्षा</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-amber-300 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-800 flex items-center justify-center mb-3">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-red-950 font-yatra">संरक्षण</h3>
              <p className="text-xs font-semibold text-amber-700 font-tiro mt-1 mb-3">
                सनातन संस्कृति, परंपराओं और विरासत को आगे की पीढ़ियों तक पहुँचाना।
              </p>
              <ul className="space-y-1.5 text-xs text-stone-700 font-tiro">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>सनातन संस्कृति व वैदिक धरोहर</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>भावी पीढ़ी तक संस्कारों का संचार</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Drishti & Mission (Slides 3, 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50/70 p-6 rounded-xl border border-amber-300">
            <span className="text-xs font-bold text-red-900 uppercase tracking-wider font-yatra">
              हमारी दृष्टि
            </span>
            <h3 className="text-xl font-bold text-red-950 font-yatra mt-1">
              संस्कृति से जुड़ा समाज। सहयोग के लिए संगठित समाज।
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 font-tiro mt-2">
              युवाओं में सांस्कृतिक समझ, महिला सम्मान एवं गौसेवा के प्रति गहरी सहभागिता का वातावरण तैयार करना।
            </p>
          </div>

          <div className="bg-red-50/70 p-6 rounded-xl border border-red-200">
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider font-yatra">
              हमारा मिशन
            </span>
            <h3 className="text-xl font-bold text-red-950 font-yatra mt-1">
              लोगों और संसाधनों को जिम्मेदार मंच से जोड़ना
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 font-tiro mt-2">
              शांति, अनुशासन, सम्मान और जिम्मेदारी के साथ सेवा कार्यों व सांस्कृतिक पुनर्जागरण को गति देना।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
