import React, { useState } from 'react';
import { X, CheckCircle, Award, Printer, Phone, Mail, Share2, Sparkles, MapPin, Calendar, Clock } from 'lucide-react';
import { sacredAudio } from '../utils/audio';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: 'आगरा',
    area: '',
    role: 'attendee', // attendee, shastra_participant, volunteer
    membersCount: '1',
    notes: ''
  });

  const [submittedPass, setSubmittedPass] = useState<{
    passId: string;
    fullName: string;
    phone: string;
    city: string;
    role: string;
    membersCount: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      return;
    }

    const randomId = 'SSS-' + Math.floor(1000 + Math.random() * 9000);
    setSubmittedPass({
      passId: randomId,
      fullName: formData.fullName,
      phone: formData.phone,
      city: formData.city + (formData.area ? ` (${formData.area})` : ''),
      role: formData.role === 'shastra_participant'
        ? 'शस्त्र पूजन सहभागी'
        : formData.role === 'volunteer'
        ? 'समर्पित स्वयंसेवक'
        : 'सनातनी बंधु (सामान्य)',
      membersCount: formData.membersCount
    });

    sacredAudio.playTempleBell();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-[#FFFDF9] rounded-xl max-w-xl w-full border-2 border-amber-500 shadow-2xl overflow-hidden my-8">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-red-900 via-stone-900 to-red-900 text-white p-5 border-b border-amber-400 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl text-amber-400">🚩</span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-yatra text-amber-200">
                सहभागिता पंजीकरण • ई-पास
              </h3>
              <p className="text-xs text-amber-100 font-tiro">
                सनातन समाज सामूहिक शस्त्र पूजन समारोह, आगरा
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-amber-200 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {!submittedPass ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-xs text-stone-600 font-tiro bg-amber-50 p-3 rounded border border-amber-200">
                कृपया अपना विवरण दर्ज करें ताकि समारोह स्थल पर प्रवेश हेतु आपका डिजिटल ई-पास तैयार किया जा सके।
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 font-yatra uppercase mb-1">
                  पूरा नाम *
                </label>
                <input
                  type="text"
                  required
                  placeholder="उदा. राहुल शर्मा"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-amber-300 rounded-md bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-tiro"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-800 font-yatra uppercase mb-1">
                    मोबाइल नंबर (व्हाट्सएप) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10 अंकों का मोबाइल नंबर"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-amber-300 rounded-md bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 font-yatra uppercase mb-1">
                    शहर / जिला *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="उदा. आगरा / मथुरा / फिरोजाबाद"
                    className="w-full px-3.5 py-2.5 border border-amber-300 rounded-md bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-tiro"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-800 font-yatra uppercase mb-1">
                    क्षेत्र / कॉलोनी
                  </label>
                  <input
                    type="text"
                    placeholder="उदा. फतेहाबाद रोड, ताजगंज"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-amber-300 rounded-md bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-tiro"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 font-yatra uppercase mb-1">
                    साथियों / परिजनों की संख्या
                  </label>
                  <select
                    value={formData.membersCount}
                    onChange={(e) => setFormData({ ...formData, membersCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-amber-300 rounded-md bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-tiro"
                  >
                    <option value="1">1 व्यक्ति (केवल स्वयं)</option>
                    <option value="2">2 व्यक्ति</option>
                    <option value="3-5">3 से 5 व्यक्ति (सपरिवार)</option>
                    <option value="5+">5+ व्यक्ति (मित्र समूह / दल)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 font-yatra uppercase mb-1">
                  आपकी सहभागिता का प्रकार
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <label className={`border p-2.5 rounded-md text-xs cursor-pointer flex items-center gap-2 ${
                    formData.role === 'attendee' ? 'bg-amber-100 border-amber-500 font-bold text-red-950' : 'border-stone-200'
                  }`}>
                    <input
                      type="radio"
                      name="role"
                      value="attendee"
                      checked={formData.role === 'attendee'}
                      onChange={() => setFormData({ ...formData, role: 'attendee' })}
                      className="accent-amber-600"
                    />
                    <span>सामान्य सहभागिता</span>
                  </label>

                  <label className={`border p-2.5 rounded-md text-xs cursor-pointer flex items-center gap-2 ${
                    formData.role === 'shastra_participant' ? 'bg-amber-100 border-amber-500 font-bold text-red-950' : 'border-stone-200'
                  }`}>
                    <input
                      type="radio"
                      name="role"
                      value="shastra_participant"
                      checked={formData.role === 'shastra_participant'}
                      onChange={() => setFormData({ ...formData, role: 'shastra_participant' })}
                      className="accent-amber-600"
                    />
                    <span>शस्त्र पूजन में भाग</span>
                  </label>

                  <label className={`border p-2.5 rounded-md text-xs cursor-pointer flex items-center gap-2 ${
                    formData.role === 'volunteer' ? 'bg-amber-100 border-amber-500 font-bold text-red-950' : 'border-stone-200'
                  }`}>
                    <input
                      type="radio"
                      name="role"
                      value="volunteer"
                      checked={formData.role === 'volunteer'}
                      onChange={() => setFormData({ ...formData, role: 'volunteer' })}
                      className="accent-amber-600"
                    />
                    <span>स्वयंसेवक (सेवा)</span>
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-red-800 via-amber-700 to-red-800 hover:from-red-900 hover:to-amber-900 text-white font-bold rounded-md shadow-md text-base transition-all font-yatra border border-amber-500/40"
                >
                  पंजीकरण संपन्न करें एवं डिजिटल ई-पास पाएं
                </button>
              </div>
            </form>
          ) : (
            /* Digital E-Pass Generated View */
            <div className="space-y-5">
              <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-md flex items-center gap-2.5 text-emerald-900 text-xs sm:text-sm font-semibold">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>बधाई हो! आपका पंजीकरण सफलतापूर्वक दर्ज कर लिया गया है।</span>
              </div>

              {/* The Sacred E-Pass Card Printable */}
              <div id="printable-pass" className="border-3 border-amber-500 rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-amber-50 via-white to-orange-50 relative p-5 sm:p-6">
                {/* Traditional Decorative Corner Stamp */}
                <div className="flex items-center justify-between border-b-2 border-amber-300 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="/src/assets/images/sanatan_emblem_logo_1791566829962.jpg"
                      alt="सनातन सेना संगठन"
                      className="w-12 h-12 rounded-full border border-amber-400"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-sm font-extrabold text-red-950 font-yatra">
                        सनातन सेना संगठन
                      </div>
                      <div className="text-[11px] text-amber-800 font-bold font-tiro">
                        ॥ धर्मो रक्षति रक्षितः ॥
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] text-stone-500 font-mono">पास संख्या</div>
                    <div className="text-base font-extrabold text-red-900 font-mono tracking-wider">
                      {submittedPass.passId}
                    </div>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-2 py-0.5 rounded font-yatra">
                    आधिकारिक सहभागिता आमंत्रण ई-पास
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-red-950 font-yatra mt-1">
                    सामूहिक शस्त्र पूजन समारोह
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs bg-white/80 p-3.5 rounded-lg border border-amber-200 mb-4">
                  <div>
                    <span className="text-stone-500 block text-[10px]">सनातनी बंधु का नाम:</span>
                    <span className="font-bold text-stone-900 font-yatra text-sm">{submittedPass.fullName}</span>
                  </div>

                  <div>
                    <span className="text-stone-500 block text-[10px]">श्रेणी:</span>
                    <span className="font-bold text-red-800 font-yatra text-xs">{submittedPass.role}</span>
                  </div>

                  <div>
                    <span className="text-stone-500 block text-[10px]">मोबाइल:</span>
                    <span className="font-mono text-stone-800 font-semibold">{submittedPass.phone}</span>
                  </div>

                  <div>
                    <span className="text-stone-500 block text-[10px]">स्थान / शहर:</span>
                    <span className="font-semibold text-stone-800">{submittedPass.city}</span>
                  </div>
                </div>

                <div className="bg-red-900 text-amber-100 p-3 rounded-md text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-amber-200">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>20 अक्टूबर 2026 (विजयादशमी पर्व)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-300" />
                    <span>सायं 4:00 बजे से</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-300" />
                    <span>फतेहाबाद रोड, आगरा (उत्तर प्रदेश)</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-300/80 flex items-center justify-between text-[11px] text-stone-600">
                  <span>प्रबंधन: <strong>Monk Media Marketing</strong></span>
                  <span>हेल्पलाइन: <strong>8279865919</strong></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handlePrint}
                  className="flex-1 py-2.5 bg-red-800 hover:bg-red-900 text-white font-bold rounded-md flex items-center justify-center gap-2 text-sm font-yatra shadow-xs"
                >
                  <Printer className="w-4 h-4" />
                  <span>ई-पास प्रिंट / सहेजें</span>
                </button>

                <button
                  onClick={() => {
                    setSubmittedPass(null);
                    setFormData({
                      fullName: '',
                      phone: '',
                      city: 'आगरा',
                      area: '',
                      role: 'attendee',
                      membersCount: '1',
                      notes: ''
                    });
                  }}
                  className="px-4 py-2.5 bg-white border border-amber-300 hover:bg-amber-50 text-red-900 font-semibold rounded-md text-sm font-tiro"
                >
                  अन्य सदस्य जोड़ें
                </button>
              </div>
            </div>
          )}

          {/* Quick Help Line footer */}
          <div className="mt-5 pt-4 border-t border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-700" />
              <span>संपर्क: <strong>8279865919</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-700" />
              <span>official@monkmediamarketing.in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
