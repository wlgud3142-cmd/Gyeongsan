import React, { useState } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { getAccentStyles } from '../utils/themeHelper';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const { siteInfo, themeConfig, currentMode, setCurrentMode, isAdminAuthenticated } = useKindergarten();
  const accent = getAccentStyles(themeConfig.accentColor);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '단설유치원이란?', href: '#danseol' },
    { label: '4대특장점', href: '#strengths' },
    { label: '유치원소개', href: '#about' },
    { label: '교육과정·일과', href: '#curriculum' },
    { label: '통학버스노선', href: '#bus-routes' },
    { label: '보건·안심케어', href: '#health' },
    { label: '영양·직영급식', href: '#meals' },
    { label: '포토갤러리', href: '#gallery' },
    { label: '오시는길', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-200">
      {/* Top micro bar */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-semibold text-slate-200 truncate">{siteInfo.enrollmentStatus}</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-300 text-xs shrink-0">
            <a href={`tel:${siteInfo.phone}`} className="hover:text-white font-mono font-bold flex items-center gap-1">
              <Phone className="w-3 h-3 text-blue-400" />
              <span>상담전화: {siteInfo.phone}</span>
            </a>
            <span aria-hidden="true">·</span>
            <span>경산시 삼풍로 25</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand */}
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

        {/* Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5 text-[13px] font-semibold text-slate-600">
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

        {/* Primary Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${siteInfo.phone}`}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
            title="원무실 직통 전화 상담"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-mono">{siteInfo.phone}</span>
          </a>

          <a
            href="#location"
            className={`px-4 py-2 text-xs font-bold text-white ${accent.bgPrimary} ${accent.bgPrimaryHover} rounded-lg shadow-sm transition-colors whitespace-nowrap flex items-center gap-1.5`}
          >
            <span>오시는 길</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {isAdminAuthenticated && (
            <button
              onClick={() => setCurrentMode(currentMode === 'admin' ? 'website' : 'admin')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all flex items-center gap-1.5 shadow-sm ${
                currentMode === 'admin'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100'
              }`}
              title="원무 관리자 CMS 대시보드"
            >
              <span>관리자 CMS</span>
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={`tel:${siteInfo.phone}`}
            className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-1"
            title="전화걸기"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-slate-400 text-xs">&rarr;</span>
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${siteInfo.phone}`}
              className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>교무실 전화 문의 ({siteInfo.phone})</span>
            </a>

            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full py-3 text-center rounded-xl text-xs font-bold text-white ${accent.bgPrimary} shadow-sm`}
            >
              오시는 길 & 위치 안내
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
