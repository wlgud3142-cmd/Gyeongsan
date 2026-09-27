import React from 'react';
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

const MainContent: React.FC = () => {
  const { currentMode, themeConfig } = useKindergarten();
  const fontClass = getFontFamilyClass(themeConfig.fontStyle);

  if (currentMode === 'admin') {
    return <AdminDashboard />;
  }

  return (
    <div className={`min-h-screen bg-[#FBFBFE] text-slate-800 ${fontClass}`}>
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
