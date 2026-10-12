import React from 'react';
import { X, Printer, Calendar, Clock, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { EVENT_DETAILS } from '../data/organizationData';

interface InvitationPassModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
}

export const InvitationPassModal: React.FC<InvitationPassModalProps> = ({
  isOpen,
  onClose,
  onOpenRegister,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4">
      <div className="relative bg-[#FFFDF9] rounded-xl max-w-lg w-full border-2 border-amber-500 shadow-2xl overflow-hidden my-4 sm:my-8 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-900 via-stone-900 to-red-900 text-white p-3.5 sm:p-4 border-b border-amber-400 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-xl text-amber-400 shrink-0">🚩</span>
            <h3 className="text-base sm:text-lg font-bold font-yatra text-amber-200 truncate">
              आधिकारिक डिजिटल आमंत्रण पत्र
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-amber-200 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors shrink-0 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Card Content */}
        <div className="p-3.5 sm:p-6 overflow-y-auto">
          <div className="border-2 sm:border-3 border-amber-500 rounded-xl p-4 sm:p-6 bg-gradient-to-b from-amber-50 via-white to-orange-50 shadow-md relative">
            <div className="text-center pb-3 border-b-2 border-amber-300 mb-4">
              <img
                src="/src/assets/images/sanatan_emblem_logo_1791566829962.jpg"
                alt="सनातन सेना संगठन"
                className="w-16 h-16 rounded-full border-2 border-amber-400 mx-auto shadow-md mb-2 object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="text-xs font-bold text-red-900 font-yatra uppercase tracking-widest block">
                ॥ ॐ ॥ धर्मो रक्षति रक्षितः ॥
              </span>
              <h3 className="text-2xl font-black text-red-950 font-yatra mt-1">
                सनातन सेना संगठन
              </h3>
              <p className="text-xs font-bold text-amber-800 font-tiro">
                सेवा • सुरक्षा • संरक्षण
              </p>
            </div>

            <div className="text-center my-4 space-y-2">
              <span className="text-[11px] font-bold text-red-900 bg-red-100/90 border border-red-200 px-3 py-1 rounded-full font-yatra inline-block">
                प्रथम सार्वजनिक सामूहिक आयोजन
              </span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-red-900 font-yatra">
                सनातन समाज सामूहिक शस्त्र पूजन समारोह
              </h4>
              <p className="text-xs text-stone-700 font-tiro max-w-sm mx-auto">
                आप सभी धर्मप्रेमी सनातनी बंधुओं एवं मातृशक्ति का इस पावन समारोह में सपरिवार सादर अभिनंदन एवं स्वागत है।
              </p>
            </div>

            <div className="bg-red-900 text-amber-100 rounded-lg p-4 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-300" />
                <span className="font-bold text-sm text-white">20 अक्टूबर 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-300" />
                <span>सायं 4:00 बजे से (शस्त्र पूजन एवं महाआरती)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-300" />
                <span>फतेहाबाद रोड, आगरा (उत्तर प्रदेश)</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-amber-300 flex items-center justify-between text-[11px] text-stone-600">
              <div>
                संस्थापक: <strong>अमित दंदोतिया</strong>
              </div>
              <div>
                पीआरओ: <strong>रॉबिन दंदोतिया</strong>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenRegister();
              }}
              className="flex-1 py-3 bg-gradient-to-r from-red-800 to-amber-700 text-white font-bold rounded-md text-sm font-yatra shadow-sm hover:from-red-900 hover:to-amber-800 transition-all text-center"
            >
              नाम से ई-पास बनाएं
            </button>
            <button
              onClick={() => window.print()}
              className="py-3 px-4 bg-white border border-amber-300 hover:bg-amber-50 text-red-900 font-bold rounded-md text-sm flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>प्रिंट</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
