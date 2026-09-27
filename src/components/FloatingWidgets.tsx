import React, { useState } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { Sparkles, Phone, MessageCircle, ArrowUp } from 'lucide-react';

export const FloatingWidgets: React.FC = () => {
  const { siteInfo, setIsAiModalOpen } = useKindergarten();
  const [showTooltip, setShowTooltip] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="pointer-events-auto bg-slate-900 text-white text-xs py-2 px-3.5 rounded-xl shadow-xl flex items-center gap-2 max-w-xs animate-bounce duration-1000 border border-slate-700">
          <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
          <span>입학 및 숲체험 궁금증, AI 상담사에게 물어보세요!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1 text-xs"
            aria-label="닫기"
          >
            &times;
          </button>
        </div>
      )}

      <div className="flex items-center gap-2.5 pointer-events-auto">
        {/* Scroll Top Button */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white text-slate-700 shadow-md border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
          title="맨 위로"
          aria-label="맨 위로 이동"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        {/* Quick Phone Call */}
        <a
          href={`tel:${siteInfo.phone}`}
          className="w-11 h-11 rounded-full bg-emerald-600 text-white shadow-lg flex items-center justify-center hover:bg-emerald-700 transition-transform hover:scale-105"
          title="원무실 전화 바로 연결"
          aria-label="원무실 전화 연결"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* AI Counselor Primary Button */}
        <button
          onClick={() => setIsAiModalOpen(true)}
          className="px-4 py-3 rounded-full bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white shadow-xl flex items-center gap-2 hover:opacity-95 transition-transform hover:scale-105 font-bold text-xs"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>AI 24시 입학상담</span>
        </button>
      </div>
    </div>
  );
};
