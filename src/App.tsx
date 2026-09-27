import React, { useEffect } from 'react';
import { KindergartenProvider, useKindergarten } from './context/KindergartenContext';
import { getFontFamilyClass } from './utils/themeHelper';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DanseolIntroSection } from './components/DanseolIntroSection';
import { Strengths } from './components/Strengths';
import { AboutSection } from './components/AboutSection';
import { Curriculum } from './components/Curriculum';
import { BusRouteSection } from './components/BusRouteSection';
import { LifeHealthSection } from './components/LifeHealthSection';
import { GallerySection } from './components/GallerySection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { AiAdvisorModal } from './components/AiAdvisorModal';
import { AdminDashboard } from './components/AdminCMS/AdminDashboard';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AdminBar } from './components/AdminBar';

const MainContent: React.FC = () => {
  const {
    currentMode,
    setCurrentMode,
    themeConfig,
    isAdminAuthenticated,
    setIsAdminModalOpen,
  } = useKindergarten();
  const fontClass = getFontFamilyClass(themeConfig.fontStyle);

  // Listen for ?admin=true in URL or hash #admin or keyboard shortcut Alt+A
  useEffect(() => {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const hasAdminParam = searchParams.get('admin') === 'true' || searchParams.get('admin') === '1';
      const hasAdminHash = window.location.hash === '#admin';

      if (hasAdminParam || hasAdminHash) {
        if (isAdminAuthenticated) {
          setCurrentMode('admin');
        } else {
          setIsAdminModalOpen(true);
        }
      }
    } catch {}

    const handleKeyDown = (e: KeyboardEvent) => {
      // Shortcut: Alt + A or Ctrl + Shift + A
      if (
        (e.altKey && (e.key === 'a' || e.key === 'A')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'a' || e.key === 'A'))
      ) {
        e.preventDefault();
        if (isAdminAuthenticated) {
          setCurrentMode(currentMode === 'admin' ? 'website' : 'admin');
        } else {
          setIsAdminModalOpen(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAdminAuthenticated, currentMode, setCurrentMode, setIsAdminModalOpen]);

  if (currentMode === 'admin' && isAdminAuthenticated) {
    return (
      <>
        <AdminDashboard />
        <AdminLoginModal />
      </>
    );
  }

  return (
    <div className={`min-h-screen bg-[#FBFBFE] text-slate-800 ${fontClass}`}>
      <AdminBar />
      <Header />
      <main>
        <Hero />
        <DanseolIntroSection />
        <Strengths />
        <AboutSection />
        <Curriculum />
        <BusRouteSection />
        <LifeHealthSection />
        <GallerySection />
        <AdmissionsSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingWidgets />
      <AiAdvisorModal />
      <AdminLoginModal />
    </div>
  );
};

export default function App() {
  return (
    <KindergartenProvider>
      <MainContent />
    </KindergartenProvider>
  );
}
