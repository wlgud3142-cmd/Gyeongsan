import React from 'react';
import { useKindergarten } from '../../context/KindergartenContext';
import { Users, Sparkles, Building2, CheckCircle2, Clock, ArrowUpRight, GraduationCap } from 'lucide-react';

export const OverviewTab: React.FC<{ onTabChange: (tab: string) => void }> = ({ onTabChange }) => {
  const { applications, siteInfo, updateApplicationStatus } = useKindergarten();

  const pendingApps = applications.filter((a) => a.status === '접수완료' || a.status === '상담예정');
  const confirmedApps = applications.filter((a) => a.status === '등록확정');

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
    </div>
  );
};
