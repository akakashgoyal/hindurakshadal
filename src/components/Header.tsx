import React, { useState } from 'react';
import { Volume2, VolumeX, Bell } from 'lucide-react';
import { sacredAudio } from '../utils/audio';

export type PageId = 'home' | 'prerna' | 'about' | 'event' | 'guests' | 'contact';

interface HeaderProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  onOpenRegister: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  onOpenRegister,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [bellRung, setBellRung] = useState(false);

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

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'मुख्य' },
    { id: 'prerna', label: 'प्रेरणा स्रोत' },
    { id: 'about', label: 'संगठन व स्तंभ' },
    { id: 'event', label: 'शस्त्र पूजन' },
    { id: 'guests', label: 'अतिथि व टीम' },
    { id: 'contact', label: 'संपर्क' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fffbf5]/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs">
      {/* Top Auspicious Ribbon */}
      <div className="bg-gradient-to-r from-red-800 via-amber-700 to-red-800 text-amber-50 px-4 py-1.5 text-xs font-medium border-b border-red-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="text-amber-300 font-bold tracking-wide">॥ धर्मो रक्षति रक्षितः ॥</span>
            <span className="hidden sm:inline text-amber-200/70">|</span>
            <span className="hidden sm:inline text-amber-100">सेवा • सुरक्षा • संरक्षण</span>
            <span className="hidden md:inline text-amber-200/70">|</span>
            <span className="hidden md:inline text-amber-200 font-semibold">20 अक्टूबर 2026, फतेहाबाद रोड, आगरा</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Shankhnaad Sound Trigger */}
            <button
              onClick={handleShankhnaad}
              title="पवित्र शंखनाद सुनें"
              className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-semibold transition-all ${
                isPlayingAudio
                  ? 'bg-amber-400 text-red-950 shadow-sm animate-pulse'
                  : 'bg-red-900/80 text-amber-200 hover:bg-red-900 hover:text-white'
              }`}
            >
              {isPlayingAudio ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span>{isPlayingAudio ? 'शंखनाद जारी...' : 'शंखनाद 🐚'}</span>
            </button>

            {/* Mandir Bell Trigger */}
            <button
              onClick={handleTempleBell}
              title="मंदिर घंटी बजाएं"
              className={`flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium transition-all ${
                bellRung
                  ? 'bg-amber-400 text-red-950 scale-105'
                  : 'bg-red-950/60 text-amber-200 hover:bg-red-900'
              }`}
            >
              <Bell className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">घंटी</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Navigation (Strict 3-zone contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-18">
          {/* Zone 1: Single Brand Wordmark */}
          <button
            onClick={() => setActivePage('home')}
            className="flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-tight text-red-900 hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 font-yatra cursor-pointer text-left"
          >
            <span className="text-2xl text-amber-600">🚩</span>
            <span>सनातन सेना संगठन</span>
          </button>

          {/* Zone 2: Multipage Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-stone-700">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`cursor-pointer whitespace-nowrap shrink-0 transition-all pb-1 font-yatra ${
                    isActive
                      ? 'text-red-900 border-b-2 border-red-700 font-bold'
                      : 'hover:text-red-800 text-stone-600'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenRegister}
              className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-800 to-amber-700 hover:from-red-900 hover:to-amber-800 rounded-md shadow-xs hover:shadow transition-all whitespace-nowrap shrink-0 border border-amber-600/30"
            >
              सहभागिता ई-पास
            </button>
          </div>
        </div>

        {/* Mobile Navigation Horizontal Bar */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto py-2 border-t border-amber-200/60 no-scrollbar">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`px-3 py-1 text-xs rounded-full whitespace-nowrap shrink-0 font-yatra transition-colors ${
                  isActive
                    ? 'bg-red-800 text-white font-bold shadow-xs'
                    : 'bg-amber-100/70 text-stone-800 hover:bg-amber-200'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
