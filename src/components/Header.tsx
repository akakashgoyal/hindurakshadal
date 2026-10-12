import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Bell, 
  Menu, 
  X, 
  Home, 
  Shield, 
  Landmark, 
  Flame, 
  Users, 
  Phone, 
  ChevronRight,
  Ticket,
  MapPin,
  Calendar
} from 'lucide-react';
import { sacredAudio } from '../utils/audio';
import { EVENT_DETAILS } from '../data/organizationData';

export type PageId = 'home' | 'prerna' | 'about' | 'event' | 'guests' | 'contact';

interface HeaderProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  onOpenRegister: () => void;
}

interface NavItem {
  id: PageId;
  label: string;
  sub: string;
  icon: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  onOpenRegister,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [bellRung, setBellRung] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close drawer on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleShankhnaad = () => {
    setIsPlayingAudio(true);
    sacredAudio.playShankhnaad();
    setTimeout(() => setIsPlayingAudio(false), 4200);
  };

  const handleTempleBell = () => {
    setBellRung(true);
    sacredAudio.playTempleBell();
    setTimeout(() => setBellRung(false), 3000);
  };

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    setIsMobileMenuOpen(false);
  };

  const navItems: NavItem[] = [
    { 
      id: 'home', 
      label: 'मुख्य पृष्ठ', 
      sub: 'समारोह व संगठन परिचय',
      icon: <Home className="w-5 h-5" /> 
    },
    { 
      id: 'prerna', 
      label: 'प्रेरणा स्रोत', 
      sub: 'परशुराम, राम, कृष्ण व बलराम',
      icon: <Shield className="w-5 h-5" /> 
    },
    { 
      id: 'about', 
      label: 'संगठन व तीन स्तंभ', 
      sub: 'सेवा, सुरक्षा, संरक्षण',
      icon: <Landmark className="w-5 h-5" /> 
    },
    { 
      id: 'event', 
      label: 'शस्त्र पूजन समारोह', 
      sub: '20 अक्टूबर, फतेहाबाद रोड',
      icon: <Flame className="w-5 h-5" /> 
    },
    { 
      id: 'guests', 
      label: 'अतिथि व नेतृत्व', 
      sub: 'पूज्य संत, मुख्य अतिथि व टीम',
      icon: <Users className="w-5 h-5" /> 
    },
    { 
      id: 'contact', 
      label: 'संपर्क एवं संवाद', 
      sub: 'स्थान, हेल्पलाइन व पंजीयन',
      icon: <Phone className="w-5 h-5" /> 
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#fffbf5]/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs w-full overflow-hidden">
        {/* Top Auspicious Ribbon */}
        <div className="bg-gradient-to-r from-red-800 via-amber-700 to-red-800 text-amber-50 px-2.5 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium border-b border-red-900/40 w-full">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0 overflow-hidden truncate">
              <span className="text-amber-300 font-bold tracking-wide shrink-0">॥ धर्मो रक्षति रक्षितः ॥</span>
              <span className="hidden sm:inline text-amber-200/70">|</span>
              <span className="hidden md:inline text-amber-100 font-tiro truncate">सेवा • सुरक्षा • संरक्षण</span>
              <span className="hidden lg:inline text-amber-200/70">|</span>
              <span className="hidden lg:inline text-amber-200 font-semibold font-tiro truncate">20 अक्टूबर 2026, फतेहाबाद रोड, आगरा</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Shankhnaad Sound Trigger */}
              <button
                onClick={handleShankhnaad}
                title="पवित्र शंखनाद सुनें"
                className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] sm:text-xs font-semibold transition-all shrink-0 ${
                  isPlayingAudio
                    ? 'bg-amber-400 text-red-950 shadow-sm animate-pulse'
                    : 'bg-red-900/80 text-amber-200 hover:bg-red-900 hover:text-white'
                }`}
              >
                {isPlayingAudio ? <VolumeX className="w-3.5 h-3.5 shrink-0" /> : <Volume2 className="w-3.5 h-3.5 shrink-0" />}
                <span className="hidden xs:inline">{isPlayingAudio ? 'शंखनाद...' : 'शंखनाद'}</span>
                <span>🐚</span>
              </button>

              {/* Mandir Bell Trigger */}
              <button
                onClick={handleTempleBell}
                title="मंदिर घंटी बजाएं"
                className={`flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded text-[11px] sm:text-xs font-medium transition-all shrink-0 ${
                  bellRung
                    ? 'bg-amber-400 text-red-950 scale-105'
                    : 'bg-red-950/60 text-amber-200 hover:bg-red-900'
                }`}
              >
                <Bell className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span className="hidden sm:inline">घंटी 🔔</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-2.5 sm:px-4 lg:px-8 w-full">
          <div className="flex items-center justify-between gap-2 sm:gap-4 h-15 sm:h-18">
            {/* Zone 1: Brand Wordmark (flexible, responsive, never overflows) */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 text-left cursor-pointer min-w-0 flex-1 sm:flex-initial"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-amber-500 to-red-700 flex items-center justify-center text-white text-base sm:text-lg shadow-sm border border-amber-300 shrink-0">
                🚩
              </div>
              <div className="flex flex-col min-w-0">
                <span className="leading-tight text-red-950 font-bold font-yatra text-base sm:text-xl lg:text-2xl truncate">
                  सनातन सेना संगठन
                </span>
                <span className="hidden sm:block text-[10px] sm:text-xs text-amber-800 font-tiro truncate -mt-0.5">
                  आगरा • सशक्त सनातनी समाज
                </span>
              </div>
            </button>

            {/* Zone 2: Desktop Navigation Bar (shown on desktop >= lg) */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-5 text-sm font-semibold text-stone-700">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`cursor-pointer whitespace-nowrap shrink-0 transition-all py-1.5 px-2.5 rounded-md font-yatra text-xs xl:text-sm ${
                      isActive
                        ? 'text-red-950 font-bold bg-amber-100/80 border-b-2 border-red-700 shadow-2xs'
                        : 'hover:text-red-800 text-stone-700 hover:bg-amber-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Actions & Mobile/Tablet Menu Button (Strictly right-aligned and shrink-0) */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              {/* E-Pass CTA button */}
              <button
                onClick={onOpenRegister}
                className="px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-800 to-amber-700 hover:from-red-900 hover:to-amber-800 rounded-lg shadow-xs hover:shadow transition-all whitespace-nowrap shrink-0 border border-amber-500/40 font-yatra flex items-center gap-1 sm:gap-1.5"
              >
                <Ticket className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span className="hidden xs:inline">ई-पास</span>
                <span className="hidden md:inline">प्राप्त करें</span>
                <span className="xs:hidden">पास</span>
              </button>

              {/* Hamburger Toggle Button for Mobile & Tablet (visible below lg, always inside the container) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "मेनू बंद करें" : "मेनू खोलें"}
                className={`lg:hidden p-1.5 sm:p-2 rounded-lg border transition-all flex items-center justify-center shrink-0 w-9 h-9 sm:w-10 sm:h-10 ${
                  isMobileMenuOpen
                    ? 'bg-red-800 text-white border-red-900 shadow-md ring-2 ring-red-300'
                    : 'bg-amber-100 hover:bg-amber-200 text-red-950 border-amber-300 shadow-2xs'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 shrink-0" />
                ) : (
                  <Menu className="w-5 h-5 shrink-0" />
                )}
              </button>
            </div>
          </div>

          {/* Tablet & Mobile Quick Scrollable Sub-nav (for screens < lg) */}
          <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto py-1.5 border-t border-amber-200/60 no-scrollbar w-full">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2.5 py-1 text-[11px] sm:text-xs rounded-full whitespace-nowrap shrink-0 font-yatra transition-all flex items-center gap-1 ${
                    isActive
                      ? 'bg-gradient-to-r from-red-800 to-amber-700 text-white font-bold shadow-xs'
                      : 'bg-amber-100/70 text-stone-800 hover:bg-amber-200 border border-amber-200/80'
                  }`}
                >
                  <span className="scale-75 -mr-0.5">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Modern Fullscreen Mobile & Tablet Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
          {/* Backdrop Blur */}
          <div 
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sliding Menu Panel from Right */}
          <div className="fixed inset-y-0 right-0 w-full max-w-[calc(100vw-28px)] sm:max-w-md bg-[#FFFDF9] border-l-2 border-amber-400 shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="p-4 bg-gradient-to-r from-red-900 via-stone-900 to-red-950 text-white flex items-center justify-between border-b border-amber-500/60">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-xl text-amber-300 shrink-0">
                  🚩
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-base sm:text-lg font-yatra text-amber-100 truncate">
                    सनातन सेना संगठन
                  </h3>
                  <p className="text-xs text-amber-300 font-tiro truncate">
                    ॥ धर्मो रक्षति रक्षितः ॥
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full bg-red-950/80 hover:bg-red-800 text-amber-200 border border-amber-400/50 transition-colors shrink-0 ml-2"
                aria-label="मेनू बंद करें"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Event Announcement Badge inside Drawer */}
            <div className="p-3 bg-amber-100/90 border-b border-amber-300 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 text-xs text-red-950 font-bold font-yatra min-w-0 truncate">
                <Calendar className="w-4 h-4 text-red-800 shrink-0" />
                <span className="truncate">20 अक्टूबर 2026 • सामूहिक शस्त्र पूजन</span>
              </div>
              <span className="text-[11px] bg-red-800 text-amber-100 px-2 py-0.5 rounded font-mono font-bold shrink-0">
                आगरा
              </span>
            </div>

            {/* Navigation Links with Rich Context */}
            <div className="flex-1 overflow-y-auto p-3.5 space-y-2">
              <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider font-yatra block px-1">
                नेविगेशन सूची
              </span>

              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left p-2.5 sm:p-3 rounded-xl transition-all flex items-center justify-between group ${
                      isActive
                        ? 'bg-gradient-to-r from-red-800 to-amber-800 text-white shadow-md border border-amber-400'
                        : 'bg-white hover:bg-amber-50 text-stone-900 border border-amber-200/80'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-2 rounded-lg shrink-0 ${
                        isActive 
                          ? 'bg-white/20 text-amber-200' 
                          : 'bg-amber-100 text-red-800 group-hover:bg-amber-200'
                      }`}>
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <div className={`font-bold font-yatra text-sm sm:text-base truncate ${
                          isActive ? 'text-white' : 'text-red-950'
                        }`}>
                          {item.label}
                        </div>
                        <div className={`text-[11px] sm:text-xs font-tiro truncate ${
                          isActive ? 'text-amber-200' : 'text-stone-500'
                        }`}>
                          {item.sub}
                        </div>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform group-hover:translate-x-1 ${
                      isActive ? 'text-amber-300' : 'text-stone-400'
                    }`} />
                  </button>
                );
              })}

              {/* Sacred Actions Box inside Menu */}
              <div className="mt-4 pt-3 border-t border-amber-200/80 space-y-2">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider font-yatra block px-1">
                  पवित्र अनुभव व संवाद
                </span>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleShankhnaad}
                    className="p-2 sm:p-2.5 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg text-xs font-bold text-red-900 font-yatra flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Volume2 className="w-4 h-4 text-red-700 shrink-0" />
                    <span>शंखनाद 🐚</span>
                  </button>

                  <button
                    onClick={handleTempleBell}
                    className="p-2 sm:p-2.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg text-xs font-bold text-amber-900 font-yatra flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Bell className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>मंदिर घंटी 🔔</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Drawer Footer with Quick E-Pass CTA & Phone */}
            <div className="p-3.5 bg-amber-50/80 border-t border-amber-300 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-red-800 via-red-700 to-amber-700 hover:from-red-900 hover:to-amber-800 text-white font-bold rounded-xl shadow-md text-sm font-yatra flex items-center justify-center gap-2 border border-amber-400/40"
              >
                <Ticket className="w-4 h-4 text-amber-300" />
                <span>निःशुल्क ई-पास प्राप्त करें 🚩</span>
              </button>

              <div className="flex items-center justify-between text-xs text-stone-600 font-tiro px-1 pt-0.5">
                <a
                  href={`tel:${EVENT_DETAILS.contactPhone}`}
                  className="flex items-center gap-1.5 text-red-800 hover:underline font-semibold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>हेल्पलाइन: {EVENT_DETAILS.contactPhone}</span>
                </a>
                <span className="text-amber-800 font-semibold font-yatra">
                  आगरा (उ.प्र.)
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
