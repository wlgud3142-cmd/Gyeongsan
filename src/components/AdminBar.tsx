import React from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { ShieldCheck, Settings, LogOut, ExternalLink, Eye } from 'lucide-react';

export const AdminBar: React.FC = () => {
  const { isAdminAuthenticated, currentMode, setCurrentMode, logoutAdmin, adminEmail } =
    useKindergarten();

  if (!isAdminAuthenticated || currentMode !== 'website') {
    return null;
  }

  return (
    <aside
      aria-label="관리자 제어 패널"
      className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800 sticky top-0 z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <div className="flex items-center gap-1.5 font-semibold text-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>원무 관리자 인증됨</span>
            <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
              ({adminEmail})
            </span>
          </div>
          <span className="text-slate-600 hidden md:inline">|</span>
          <span className="text-[11px] text-emerald-300/90 hidden md:inline">
            🔒 외부 공유 시 일반 학부모에게는 관리자 버튼 및 이 배너가 전혀 노출되지 않습니다.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentMode('admin')}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-md transition-colors flex items-center gap-1 text-xs shadow-sm"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>관리자 CMS 열기</span>
          </button>

          <button
            onClick={logoutAdmin}
            className="px-2.5 py-1 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-md transition-colors flex items-center gap-1 text-xs"
            title="관리자 로그아웃 (학부모 화면으로 전환)"
          >
            <LogOut className="w-3 h-3" />
            <span>로그아웃</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
