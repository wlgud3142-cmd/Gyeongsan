import React from 'react';
import { useKindergarten } from '../../context/KindergartenContext';
import { OverviewTab } from './OverviewTab';
import { ContentEditorTab } from './ContentEditorTab';
import { ThemeCustomizerTab } from './ThemeCustomizerTab';
import { SeoToolsTab } from './SeoToolsTab';
import { GalleryManagerTab } from './GalleryManagerTab';
import {
  LayoutDashboard,
  FileEdit,
  Palette,
  Search,
  Eye,
  RotateCcw,
  CheckCircle2,
  LogOut,
  ShieldCheck,
  Camera,
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    siteInfo,
    activeAdminTab,
    setActiveAdminTab,
    setCurrentMode,
    resetAllToDefault,
    saveFeedback,
    adminEmail,
    logoutAdmin,
  } = useKindergarten();

  const navItems = [
    { id: 'overview', label: '사이트 운영 개요', icon: LayoutDashboard },
    { id: 'content', label: '소개·특색교육 편집', icon: FileEdit },
    { id: 'gallery', label: '포토 갤러리 관리', icon: Camera },
    { id: 'themes', label: '디자인 테마/폰트', icon: Palette },
    { id: 'seo', label: 'SEO & 포털 검색최적화', icon: Search },
  ];

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800">
      {/* Top Admin Navigation Header */}
      <header className="sticky top-0 z-40 bg-slate-900 text-white border-b border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
              경
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-tight">{siteInfo.name}</span>
                <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-400/30">
                  CMS v2.6
                </span>
              </div>
              <span className="text-[11px] text-slate-400 block">
                원스톱 학사 행정 및 웹사이트 콘텐츠 관리 시스템
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {saveFeedback && (
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-lg text-xs animate-in fade-in duration-150">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{saveFeedback}</span>
              </div>
            )}

            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-slate-800/80 rounded-lg text-[11px] text-slate-300 border border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono text-slate-200">{adminEmail}</span>
            </div>

            <button
              onClick={() => {
                if (confirm('모든 CMS 편집 내용을 초기 샘플 데이터로 복원하시겠습니까?')) {
                  resetAllToDefault();
                }
              }}
              className="px-2.5 py-1.5 text-xs text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1"
              title="데이터 초기화"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden md:inline">초기화</span>
            </button>

            <button
              onClick={() => setCurrentMode('website')}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>홈페이지 실시간 보기</span>
            </button>

            <button
              onClick={logoutAdmin}
              className="px-2.5 py-1.5 bg-slate-800 hover:bg-rose-900/60 hover:text-rose-200 text-slate-300 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 border border-slate-700"
              title="관리자 로그아웃"
            >
              <LogOut className="w-3.5 h-3.5 text-rose-400" />
              <span className="hidden sm:inline">로그아웃</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 flex overflow-x-auto scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeAdminTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveAdminTab(item.id)}
                className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold whitespace-nowrap border-b-2 transition-colors ${
                  isActive
                    ? 'border-blue-500 text-white bg-slate-800/50'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Tab Content Canvas */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeAdminTab === 'overview' && <OverviewTab onTabChange={setActiveAdminTab} />}
        {activeAdminTab === 'content' && <ContentEditorTab />}
        {activeAdminTab === 'gallery' && <GalleryManagerTab />}
        {activeAdminTab === 'themes' && <ThemeCustomizerTab />}
        {activeAdminTab === 'seo' && <SeoToolsTab />}
      </main>
    </div>
  );
};
