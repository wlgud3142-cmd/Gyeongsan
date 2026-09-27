import React, { useState } from 'react';
import { useKindergarten } from '../../context/KindergartenContext';
import {
  Users,
  Sparkles,
  Building2,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  GraduationCap,
  ShieldCheck,
  Lock,
  KeyRound,
  ExternalLink,
  Copy,
} from 'lucide-react';

export const OverviewTab: React.FC<{ onTabChange: (tab: string) => void }> = ({ onTabChange }) => {
  const {
    applications,
    siteInfo,
    updateApplicationStatus,
    adminEmail,
    updateAdminPassword,
    setCurrentMode,
  } = useKindergarten();

  const [newPassword, setNewPassword] = useState('');
  const [passwordFeedback, setPasswordFeedback] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const pendingApps = applications.filter((a) => a.status === '접수완료' || a.status === '상담예정');
  const confirmedApps = applications.filter((a) => a.status === '등록확정');

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
      {/* Top Welcome & KPI Cards */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
            예비학부모 홍보 및 원아모집 대시보드
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            {siteInfo.name} 2026 신입원아 모집 현황
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            예비학부모님들의 실시간 입학상담 및 원서 접수 현황을 확인하고 관리할 수 있습니다.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onTabChange('admissions')}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors"
          >
            <Users className="w-3.5 h-3.5" />
            <span>원서 관리함</span>
          </button>
          <button
            onClick={() => onTabChange('content')}
            className="px-3 py-2 text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            특장점·문구 편집
          </button>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500">총 입학상담 신청</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 tabular-nums">
              {applications.length}
              <span className="text-xs font-normal text-slate-400 ml-1">건</span>
            </div>
            <div className="text-xs text-amber-600 font-medium mt-1 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>미처리/상담예정 {pendingApps.length}건</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500">등록 확정 원아</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 tabular-nums">
              {confirmedApps.length}
              <span className="text-xs font-normal text-slate-400 ml-1">명</span>
            </div>
            <div className="text-xs text-emerald-600 font-medium mt-1">
              신입생 모집 정원 순항 중
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500">2026학년도 총 정원</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 tabular-nums">
              120
              <span className="text-xs font-normal text-slate-400 ml-1">명</span>
            </div>
            <div className="text-xs text-indigo-600 font-medium mt-1">
              만 3~5세 6학급 편성
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500">설립 유형</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-xl font-bold text-slate-900">
              공립 단설
            </div>
            <div className="text-xs text-emerald-600 font-medium mt-1">
              학부모 부담금 0원 (전액 무료)
            </div>
          </div>
        </div>
      </div>

      {/* Recent Admissions Applications Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              최근 신입원아 입학상담 신청 내역
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              학부모님이 온라인 폼으로 제출한 실시간 상담 신청 목록입니다.
            </p>
          </div>
          <button
            onClick={() => onTabChange('admissions')}
            className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
          >
            <span>전체 신청 관리 ({applications.length})</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-semibold">
              <tr>
                <th className="py-3 px-4">접수번호</th>
                <th className="py-3 px-4">원아명/성별</th>
                <th className="py-3 px-4">대상 연령반</th>
                <th className="py-3 px-4">보호자/연락처</th>
                <th className="py-3 px-4">희망 투어일시</th>
                <th className="py-3 px-4">상태 처리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {applications.slice(0, 5).map((app) => (
                <tr key={app.id} className="hover:bg-slate-50/70">
                  <td className="py-3.5 px-4 font-mono font-medium text-slate-500">{app.id}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    {app.childName} ({app.childGender})
                  </td>
                  <td className="py-3.5 px-4">{app.ageGroup}</td>
                  <td className="py-3.5 px-4">
                    <span className="font-medium text-slate-900">{app.parentName}</span>
                    <span className="text-slate-400 block font-mono text-[11px]">{app.phone}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{app.preferredTourDate || '-'}</td>
                  <td className="py-3.5 px-4">
                    <select
                      value={app.status}
                      onChange={(e) => updateApplicationStatus(app.id, e.target.value as any)}
                      className={`text-xs font-semibold px-2 py-1 rounded-md border ${
                        app.status === '등록확정'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : app.status === '상담예정'
                          ? 'bg-blue-50 text-blue-700 border-blue-200'
                          : app.status === '면담완료'
                          ? 'bg-purple-50 text-purple-700 border-purple-200'
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}
                    >
                      <option value="접수완료">접수완료</option>
                      <option value="상담예정">상담예정</option>
                      <option value="면담완료">면담완료</option>
                      <option value="등록확정">등록확정</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Admin Security & Share Protection Card */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-slate-800">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                관리자 모드 완벽 분리 및 보안 보호 작동 중
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-blue-400" />
              <span>공유 링크 및 나만의 관리자 모드 안내</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed pt-1">
              링크를 예비학부모님이나 외부에 공유할 때 <strong>상단 헤더의 관리자 CMS 버튼이 100% 숨김 처리</strong>되어
              일반 방문자는 관리자 화면이나 원서함에 절대 접근할 수 없습니다. 오직 비밀번호를 아는 관리자만 진입할 수 있습니다.
            </p>
          </div>

          <button
            onClick={copyParentShareLink}
            className="self-start px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2 shrink-0"
          >
            {copiedLink ? <CheckCircle2 className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{copiedLink ? '공유 링크 복사 완료!' : '학부모 공유용 링크 복사'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
          {/* Box 1: 3 Secret Ways to Access Admin Mode */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-blue-300 font-bold text-sm">
              <Lock className="w-4 h-4" />
              <h4>나만 관리자 모드로 들어가는 3가지 방법</h4>
            </div>
            <ul className="text-xs text-slate-300 space-y-2.5 leading-relaxed">
              <li className="flex items-start gap-2 bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/50">
                <span className="w-5 h-5 rounded-full bg-blue-600/40 text-blue-300 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <strong className="text-white">웹사이트 맨 아래 푸터 클릭:</strong>
                  <p className="text-slate-400 text-[11px] mt-0.5">
                    홈페이지 최하단 우측의 <span className="text-slate-200 underline">🔒 원무 관리자</span>를 누르면 비밀번호 입력창이 뜹니다.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2 bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/50">
                <span className="w-5 h-5 rounded-full bg-blue-600/40 text-blue-300 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <strong className="text-white">주소창 파라미터 입력:</strong>
                  <p className="text-slate-400 text-[11px] mt-0.5">
                    공유 주소 뒤에 <code className="bg-slate-900 text-blue-300 px-1 py-0.5 rounded font-mono">?admin=true</code>를 붙여서 열면 바로 관리자 인증 창이 뜹니다.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2 bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/50">
                <span className="w-5 h-5 rounded-full bg-blue-600/40 text-blue-300 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <strong className="text-white">키보드 단축키:</strong>
                  <p className="text-slate-400 text-[11px] mt-0.5">
                    홈페이지 어디서나 키보드 <kbd className="bg-slate-900 border border-slate-700 text-slate-200 px-1.5 py-0.5 rounded font-mono text-[10px]">Alt + A</kbd> (또는 Ctrl+Shift+A)를 누르면 관리자 모드로 전환됩니다.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Box 2: Password Management Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-blue-300 font-bold text-sm mb-3">
                <div className="flex items-center gap-2">
                  <KeyRound className="w-4 h-4" />
                  <h4>관리자 비밀번호 설정</h4>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                  {adminEmail}
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                나만 기억할 수 있는 관리자 비밀번호를 설정하세요. 기본 비밀번호는 <code className="text-blue-300 font-mono font-bold bg-slate-800 px-1 rounded">1234</code> 입니다.
              </p>

              <form onSubmit={handlePasswordChange} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    새 관리자 비밀번호 (4자리 이상)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="새 비밀번호 입력"
                      className="flex-1 px-3.5 py-2 bg-slate-950/80 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-colors whitespace-nowrap shadow-sm"
                    >
                      변경 저장
                    </button>
                  </div>
                </div>

                {passwordFeedback && (
                  <div className={`p-2.5 rounded-xl text-xs flex items-center gap-1.5 animate-in fade-in ${
                    passwordFeedback.includes('성공')
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}>
                    {passwordFeedback.includes('성공') ? (
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                    ) : (
                      <Lock className="w-3.5 h-3.5 shrink-0 text-rose-400" />
                    )}
                    <span>{passwordFeedback}</span>
                  </div>
                )}
              </form>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span>기기 전환 시 이 비밀번호로 로그인하면 됩니다.</span>
              <button
                type="button"
                onClick={() => setCurrentMode('website')}
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                홈페이지 확인하기 →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
