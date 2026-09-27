import React from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { Phone, ArrowUp } from 'lucide-react';

export const FloatingWidgets: React.FC = () => {
  const { siteInfo } = useKindergarten();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 pointer-events-auto">
      {/* Scroll Top Button */}
      <button
        onClick={scrollToTop}
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-slate-700 shadow-lg border border-slate-200/90 flex items-center justify-center hover:bg-slate-50 transition-all hover:scale-105"
        title="맨 위로 이동"
        aria-label="맨 위로 이동"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Prominent Call Button with Explicit Text: "입학상담 문의" */}
      <a
        href={`tel:${siteInfo.phone}`}
        className="px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl flex items-center gap-2.5 transition-all transform hover:scale-105 active:scale-95 border border-emerald-500 font-extrabold text-xs sm:text-sm group"
        title={`입학상담 직통전화 연결 (${siteInfo.phone})`}
        aria-label="입학상담 문의"
      >
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <Phone className="w-4 h-4 text-white animate-pulse" />
        </div>
        <span className="tracking-tight">입학상담 문의</span>
        <span className="hidden sm:inline-block text-[11px] font-mono font-semibold bg-emerald-800/60 px-2 py-0.5 rounded-full text-emerald-100">
          {siteInfo.phone}
        </span>
      </a>
    </div>
  );
};
