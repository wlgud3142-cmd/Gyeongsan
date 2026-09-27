import React, { useState } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { getAccentStyles } from '../utils/themeHelper';
import { Sparkles, Menu, X, Settings, ArrowUpRight, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const { siteInfo, themeConfig, currentMode, setCurrentMode, setIsAiModalOpen, isAdminAuthenticated } = useKindergarten();
  const accent = getAccentStyles(themeConfig.accentColor);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '단설유치원이란?', href: '#danseol' },
    { label: '4대특장점', href: '#strengths' },
    { label: '유치원소개', href: '#about' },
    { label: '교육과정·일과', href: '#curriculum' },
    { label: '통학버스노선', href: '#bus-routes' },
    { label: '급식·보건복지', href: '#life-health' },
    { label: '시설갤러리', href: '#gallery' },
    { label: '2026 입학안내', href: '#admissions' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-200">
      {/* Top micro bar */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-semibold text-slate-200 truncate">{siteInfo.enrollmentStatus}</span>
            <span className="hidden md:inline text-blue-300 font-bold ml-1">· 학부모 부담금 0원</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-300 text-xs shrink-0">
            <a href={`tel:${siteInfo.phone}`} className="hover:text-white font-mono font-bold flex items-center gap-1">
              <Phone className="w-3 h-3 text-blue-400" />
              <span>상담전화: {siteInfo.phone}</span>
            </a>
            <span aria-hidden="true">·</span>
            <span>경산시 사동 백양로 35</span>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single Brand element */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1">
          <div className={`w-10 h-10 rounded-xl ${accent.bgPrimary} text-white flex items-center justify-center font-extrabold text-lg shadow-sm transition-transform group-hover:scale-105`}>
            경
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {siteInfo.name}
              </span>
              <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-1.5 py-0.5 rounded border border-blue-200">
                공립 단설
              </span>
            </div>
            <span className="text-[11px] font-medium text-slate-500 tracking-wider">
              {siteInfo.englishName}
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-[14px] font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setIsAiModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
            title="24시간 경산유치원 AI 입학상담"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>AI 입학상담</span>
          </button>

          <a
            href="#admissions"
            className={`px-4 py-2 text-xs font-bold text-white ${accent.bgPrimary} ${accent.bgPrimaryHover} rounded-lg shadow-sm transition-colors whitespace-nowrap flex items-center gap-1.5`}
          >
            <span>입학원서 접수</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {isAdminAuthenticated && (
            <button
              onClick={() => setCurrentMode(currentMode === 'admin' ? 'website' : 'admin')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all flex items-center gap-1.5 shadow-sm ${
                currentMode === 'admin'
                  ? 'bg-amber-500 text-white border-amber-600'
                  : 'bg-slate-900 text-white hover:bg-slate-800 border-slate-900'
              }`}
              title="관리자 CMS 대시보드"
            >
              <Settings className="w-3.5 h-3.5 text-blue-400" />
              <span>{currentMode === 'admin' ? '홈페이지 보기' : '관리자 CMS'}</span>
            </button>
          )}
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          {isAdminAuthenticated && (
            <button
              onClick={() => setCurrentMode(currentMode === 'admin' ? 'website' : 'admin')}
              className="p-2 text-xs font-medium rounded-lg border border-slate-900 bg-slate-900 text-white"
              title="관리자 CMS"
            >
              <Settings className="w-4 h-4 text-blue-400" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsAiModalOpen(true);
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-800 bg-slate-100 rounded-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>24시간 AI 입학상담 챗봇</span>
            </button>
            <a
              href="#admissions"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full py-2.5 px-4 text-xs font-bold text-white ${accent.bgPrimary} rounded-lg text-center`}
            >
              2026 입학상담 및 원서 접수
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
