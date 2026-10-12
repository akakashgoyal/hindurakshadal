import React, { useState, useEffect } from 'react';
import { Header, PageId } from './components/Header';
import { HomePage } from './pages/HomePage';
import { PrernaPage } from './pages/PrernaPage';
import { AboutPage } from './pages/AboutPage';
import { EventPage } from './pages/EventPage';
import { GuestsPage } from './pages/GuestsPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { InvitationPassModal } from './components/InvitationPassModal';
import { Volume2 } from 'lucide-react';
import { sacredAudio } from './utils/audio';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [isPlayingShankh, setIsPlayingShankh] = useState(false);

  // Scroll to top whenever page changes
  const handlePageChange = (newPage: PageId) => {
    setActivePage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickShankh = () => {
    setIsPlayingShankh(true);
    sacredAudio.playShankhnaad();
    setTimeout(() => setIsPlayingShankh(false), 4200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-stone-900 selection:bg-red-700 selection:text-amber-100 w-full overflow-x-hidden max-w-full">
      {/* Top Header with Multi-page navigation */}
      <Header
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* Multipage Routing Container */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            setActivePage={handlePageChange}
            onOpenRegister={() => setIsRegisterOpen(true)}
            onOpenPass={() => setIsPassModalOpen(true)}
          />
        )}

        {activePage === 'prerna' && (
          <PrernaPage
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        )}

        {activePage === 'event' && (
          <EventPage
            onOpenRegister={() => setIsRegisterOpen(true)}
            onOpenPass={() => setIsPassModalOpen(true)}
          />
        )}

        {activePage === 'guests' && (
          <GuestsPage />
        )}

        {activePage === 'contact' && (
          <ContactPage
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Registration & E-Pass Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      {/* Official Invitation Pass Modal */}
      <InvitationPassModal
        isOpen={isPassModalOpen}
        onClose={() => setIsPassModalOpen(false)}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* Floating Action for Mobile / Quick Shankhnaad & Register */}
      <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-40 flex items-center gap-1.5 sm:gap-2 max-w-[calc(100vw-24px)]">
        <button
          onClick={handleQuickShankh}
          title="पवित्र शंखनाद करें"
          className={`px-2.5 py-2 sm:px-3.5 sm:py-3 rounded-full shadow-lg border-2 border-amber-300 font-bold text-xs flex items-center gap-1 sm:gap-1.5 transition-all shrink-0 ${
            isPlayingShankh
              ? 'bg-amber-400 text-red-950 scale-105 animate-pulse'
              : 'bg-red-900 text-amber-200 hover:bg-red-800'
          }`}
        >
          <Volume2 className="w-4 h-4 shrink-0" />
          <span className="hidden xs:inline">शंखनाद</span>
          <span>🐚</span>
        </button>

        <button
          onClick={() => setIsRegisterOpen(true)}
          className="px-3 py-2 sm:px-4 sm:py-3 bg-gradient-to-r from-red-800 to-amber-700 hover:from-red-900 hover:to-amber-800 text-white font-bold rounded-full shadow-lg border-2 border-amber-400 text-xs sm:text-sm font-yatra transition-all hover:scale-102 shrink-0 flex items-center gap-1"
        >
          <span>ई-पास</span>
          <span className="hidden xs:inline">प्राप्त करें</span>
          <span>🚩</span>
        </button>
      </div>
    </div>
  );
}
