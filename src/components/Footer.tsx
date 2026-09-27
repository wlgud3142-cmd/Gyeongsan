import React from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { ShieldCheck, Phone, Smartphone, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { siteInfo, setCurrentMode, isAdminAuthenticated, setIsAdminModalOpen } = useKindergarten();

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                경
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {siteInfo.name}
              </span>
              <span className="text-[10px] bg-blue-500/20 text-blue-300 font-bold px-1.5 py-0.5 rounded border border-blue-400/30">
                공립 단설
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {siteInfo.englishName}
              </span>
            </div>

            <p className="text-xs text-slate-300 font-medium leading-relaxed max-w-sm">
              "함께 존중하며 세계를 꿈꾸는 경산유치원 · 아이의 가능성이 세상의 가능성으로"
            </p>

            <div className="space-y-1 text-[11px] text-slate-400">
              <p>원훈: 건강하고 즐겁게 같이 놀자</p>
              <p>슬로건: 오늘의 놀이가 내일의 더 큰 세상을 만듭니다 (Small Steps, Big World!)</p>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>{siteInfo.accreditation}</span>
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold text-slate-200 tracking-wide uppercase block mb-3">
              예비학부모 둘러보기
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#danseol" className="hover:text-white transition-colors">단설유치원이란?</a></li>
              <li><a href="#strengths" className="hover:text-white transition-colors">4대 특장점 & 특색체험</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">유치원 소개 & 현황</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">특색교육 & 안심돌봄</a></li>
              <li><a href="#bus-routes" className="hover:text-white transition-colors">통학차량 5개 코스 안내</a></li>
              <li><a href="#health" className="hover:text-white transition-colors">정규 보건교사 안심케어</a></li>
              <li><a href="#meals" className="hover:text-white transition-colors">친환경 직영 급식 & 간식</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">경산유치원 포토갤러리</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">오시는 길 & 위치 안내</a></li>
            </ul>
          </div>

          {/* Administrative Details (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-bold text-slate-200 tracking-wide uppercase block mb-3">
              기관 정보 및 원무 상담
            </span>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p>기관유형: 공립 단설 유치원 (총 6학급, 정원 120명)</p>
              <p>주소: {siteInfo.address} {siteInfo.addressDetail}</p>
              <p className="flex items-center gap-1.5 text-white font-bold text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                교무실 문의전화: {siteInfo.phone}
              </p>
              <p>팩스: {siteInfo.fax} | 이메일: {siteInfo.email}</p>
              <p className="flex items-center gap-1 text-blue-300 font-semibold pt-1">
                <Smartphone className="w-3.5 h-3.5" />
                공인 알림장 앱: 하이클래스(HiClass) 매일 수업이야기 공유
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Admin Trigger */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <div>
            &copy; {new Date().getFullYear()} {siteInfo.name} ({siteInfo.englishName}). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                if (isAdminAuthenticated) {
                  setCurrentMode('admin');
                } else {
                  setIsAdminModalOpen(true);
                }
              }}
              className="text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1 group"
              title="원무 관리자 인증 로그인"
            >
              <Lock className="w-3 h-3 text-slate-600 group-hover:text-slate-400" />
              <span>{isAdminAuthenticated ? '관리자 CMS (인증됨)' : '원무 관리자'}</span>
            </button>
            <span aria-hidden="true">·</span>
            <span>개인정보처리방침</span>
            <span aria-hidden="true">·</span>
            <span>어린이 안전관리 헌장</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
