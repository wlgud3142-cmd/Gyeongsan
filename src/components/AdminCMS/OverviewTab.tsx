import React, { useState } from 'react';
import { useKindergarten } from '../../context/KindergartenContext';
import {
  Building2,
  Camera,
  FileEdit,
  Palette,
  Search,
  CheckCircle2,
  ShieldCheck,
  KeyRound,
  ExternalLink,
  Copy,
  MapPin,
  Phone,
  Video,
} from 'lucide-react';

export const OverviewTab: React.FC<{ onTabChange: (tab: string) => void }> = ({ onTabChange }) => {
  const {
    siteInfo,
    gallery,
    adminEmail,
    updateAdminPassword,
    setCurrentMode,
  } = useKindergarten();

  const [newPassword, setNewPassword] = useState('');
  const [passwordFeedback, setPasswordFeedback] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword.trim()) return;
    if (newPassword.trim().length < 4) {
      setPasswordFeedback('비밀번호는 최소 4자리 이상이어야 합니다.');
      return;
    }
    updateAdminPassword(newPassword.trim());
    setPasswordFeedback('비밀번호가 성공적으로 변경되었습니다!');
    setNewPassword('');
    setTimeout(() => setPasswordFeedback(null), 3500);
  };

  const copyParentShareLink = () => {
    try {
      const url = window.location.origin + window.location.pathname;
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      alert('주소창의 링크를 복사하여 공유하실 수 있습니다.');
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
            경산유치원 공식 웹사이트 관리
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            {siteInfo.name} 사이트 운영 개요
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            유치원 소개, 특색교육, 포토 갤러리 및 디자인 테마를 손쉽게 관리할 수 있습니다.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onTabChange('gallery')}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>포토 갤러리 관리</span>
          </button>
          <button
            onClick={() => onTabChange('content')}
            className="px-3 py-2 text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <FileEdit className="w-3.5 h-3.5" />
            <span>소개·특색교육 편집</span>
          </button>
        </div>
      </div>

      {/* Website Policy Notice */}
      <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-3">
        <Building2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <p className="font-bold">웹사이트 운영 방침 안내</p>
          <p className="text-blue-800 leading-relaxed">
            본 사이트는 경산유치원 공식 소개 및 교육활동 안내 홈페이지입니다. 홈페이지를 통해 유치원의 특색놀이, 원 환경 둘러보기, 활동 포토갤러리 사진 등을 자유롭게 안내하고 관리하실 수 있습니다.
          </p>
        </div>
      </div>

      {/* 4 Status Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500">설립 유형 및 규모</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-xl font-bold text-slate-900">
              공립 단설 유치원
            </div>
            <div className="text-xs text-blue-700 font-semibold mt-1">
              총 6학급 · 정원 120명 (만 3~5세)
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500">유치원 소재지</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 truncate" title={siteInfo.address}>
              {siteInfo.address}
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              영남대학교 테크노파크 주차 가능
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500">포토 갤러리 등록 사진</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
              <Camera className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 tabular-nums">
              {gallery.length}
              <span className="text-xs font-normal text-slate-400 ml-1">장</span>
            </div>
            <div className="text-xs text-purple-700 font-medium mt-1">
              실시간 홈페이지 갤러리 노출 중
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500">대표 문의 및 상담</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-base font-bold text-slate-900 font-mono">
              {siteInfo.phone}
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              행정실: 053-818-8552
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Navigation Grid */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            빠른 콘텐츠 관리 및 설정 바로가기
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            원하시는 메뉴를 클릭하여 홈페이지 내용을 즉시 변경하실 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <button
            onClick={() => onTabChange('gallery')}
            className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-400 hover:shadow-sm transition-all text-left group flex flex-col justify-between space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700">포토 갤러리 관리</h4>
              <p className="text-xs text-slate-500 mt-1">아이들 활동 사진 업로드, 제목/설명/날짜 수정 및 삭제</p>
            </div>
          </button>

          <button
            onClick={() => onTabChange('content')}
            className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-400 hover:shadow-sm transition-all text-left group flex flex-col justify-between space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:scale-105 transition-transform">
              <FileEdit className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700">소개·특색교육 편집</h4>
              <p className="text-xs text-slate-500 mt-1">자·신·감 놀이, 공모사업, 보건/급식, 유튜브 둘러보기 링크 수정</p>
            </div>
          </button>

          <button
            onClick={() => onTabChange('themes')}
            className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-400 hover:shadow-sm transition-all text-left group flex flex-col justify-between space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700">디자인 테마 / 폰트</h4>
              <p className="text-xs text-slate-500 mt-1">홈페이지 포인트 색상, 글꼴 서체, 둥글기 스타일 커스텀</p>
            </div>
          </button>

          <button
            onClick={() => onTabChange('seo')}
            className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-400 hover:shadow-sm transition-all text-left group flex flex-col justify-between space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700">SEO & 포털 검색최적화</h4>
              <p className="text-xs text-slate-500 mt-1">네이버·다음 검색 키워드 및 카카오톡 공유 카드 문구 설정</p>
            </div>
          </button>
        </div>
      </div>

      {/* Share Link & Security Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Parent Share Link */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Copy className="w-4 h-4 text-blue-600" />
              <span>학부모 공유용 공식 홈페이지 주소</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              가정통신문, 홍보자료 또는 SNS에 첨부하실 수 있는 공식 홈페이지 접속 링크입니다.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={typeof window !== 'undefined' ? window.location.origin + window.location.pathname : ''}
              className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-700 select-all"
            />
            <button
              onClick={copyParentShareLink}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shrink-0 shadow-sm"
            >
              {copiedLink ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedLink ? '복사완료!' : '링크 복사'}</span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>실시간 홈페이지 확인하기</span>
            <button
              onClick={() => setCurrentMode('website')}
              className="text-blue-700 font-semibold hover:underline flex items-center gap-1"
            >
              <span>홈페이지로 이동</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Admin Password Change Form */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <KeyRound className="w-4 h-4 text-amber-600" />
              <span>관리자 계정 보안 및 비밀번호 변경</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              현재 관리자 계정: <span className="font-mono font-semibold text-slate-700">{adminEmail}</span>
            </p>
          </div>

          {passwordFeedback && (
            <div className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
              passwordFeedback.includes('성공')
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{passwordFeedback}</span>
            </div>
          )}

          <form onSubmit={handlePasswordChange} className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                새 비밀번호 설정 (최소 4자리)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="새로운 비밀번호 입력"
                  className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors shrink-0 shadow-sm"
                >
                  비밀번호 변경
                </button>
              </div>
            </div>
            <p className="text-[11px] text-slate-400">
              * 변경된 비밀번호는 브라우저에 안전하게 저장되며 다음 로그인 시부터 적용됩니다.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
