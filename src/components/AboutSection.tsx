import React, { useState } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import {
  initialVisions,
  initialClassStatus,
  initialStaffBreakdown,
  initialFacilities,
} from '../data/initialData';
import { Sparkles, Users, Building, ShieldCheck, Heart, Award, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { siteInfo } = useKindergarten();
  const [activeTab, setActiveTab] = useState<'vision' | 'classes' | 'staff' | 'facilities'>('vision');

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span className="text-blue-700 font-bold">유치원 소개</span>
            <span aria-hidden="true">·</span>
            <span>공립 단설 경산유치원</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            건강하고 즐겁게 같이 놀자!<br />
            꿈과 희망을 키우는 행복한 배움터
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {siteInfo.tagline} 총 6학급 120명의 원아들이 임용고시로 선발된 우수한 정규 교사진과 함께
            매일 새로운 놀이와 배움을 꽃피우고 있습니다.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl overflow-x-auto max-w-fit mb-8">
          <button
            onClick={() => setActiveTab('vision')}
            className={`py-2 px-4 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'vision'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🌿 교육 비전 및 원훈
          </button>
          <button
            onClick={() => setActiveTab('classes')}
            className={`py-2 px-4 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'classes'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🏫 학급 및 원아 현황 (120명)
          </button>
          <button
            onClick={() => setActiveTab('staff')}
            className={`py-2 px-4 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'staff'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            👥 교직원 현황 (30명)
          </button>
          <button
            onClick={() => setActiveTab('facilities')}
            className={`py-2 px-4 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'facilities'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🏢 층별 시설 안내
          </button>
        </div>

        {/* Tab 1: Vision & Motto */}
        {activeTab === 'vision' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            {/* Main Motto Banner */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-7 sm:p-9 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold text-blue-300 uppercase tracking-widest block">
                  경산유치원 원훈 (MOTTO)
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  "{initialVisions.motto}"
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  아이의 신체적 건강과 따뜻한 인성, 함께 나누는 우정을 최고의 가치로 여깁니다.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md px-5 py-4 rounded-xl border border-white/15 shrink-0 text-center sm:text-right">
                <span className="text-[11px] text-blue-200 block">교육청 인가 공립 단설</span>
                <span className="text-lg font-bold text-white">학부모 부담금 0원</span>
              </div>
            </div>

            {/* 4 Pillars of Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  유아
                </div>
                <h4 className="text-sm font-bold text-slate-900">유아상</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {initialVisions.childImage}
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                  교사
                </div>
                <h4 className="text-sm font-bold text-slate-900">교사상</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {initialVisions.teacherImage}
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
                  학부모
                </div>
                <h4 className="text-sm font-bold text-slate-900">학부모상</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {initialVisions.parentImage}
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                  유치원
                </div>
                <h4 className="text-sm font-bold text-slate-900">유치원상</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {initialVisions.kindergartenImage}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Class Status */}
        {activeTab === 'classes' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-xs text-blue-900 flex items-center justify-between">
              <span className="font-semibold">
                총 6학급, 정원 120명 편성 (만 3세~5세 연령별 각 2학급 체제)
              </span>
              <span className="font-mono font-bold text-blue-700">전 학급 공립 정규 담임교사 배치</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {initialClassStatus.map((cls, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="text-xs font-bold text-blue-700">{cls.ageGroup}</span>
                      <span className="text-xs font-mono font-bold text-slate-900 tabular-nums">
                        총 {cls.totalCapacity}명
                      </span>
                    </div>

                    <div className="pt-3 space-y-2">
                      <div className="flex items-center gap-2">
                        {cls.classes.map((name, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-800">
                            {name} ({cls.capacityPerClass}명)
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-slate-500 pt-2 leading-relaxed">
                        {cls.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                    * 연령별 맞춤 공간 및 유아 전용 교구 구비
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Staff Breakdown */}
        {activeTab === 'staff' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-xs text-emerald-900 flex items-center justify-between">
              <span className="font-semibold">
                유아의 안전과 질 높은 교육을 책임지는 교직원 총 30명 원팀(One-Team) 체제
              </span>
              <span className="font-bold text-emerald-800">보건교사 & 영양사 상주</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {initialStaffBreakdown.map((dept, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <h4 className="text-sm font-bold text-slate-900 pb-3 border-b border-slate-100">
                    {dept.department}
                  </h4>

                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {dept.roles.map((r, i) => (
                      <li key={i} className="flex items-center justify-between">
                        <span className="text-slate-600">{r.role}</span>
                        <span className="font-mono font-bold text-slate-900 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                          {r.count}명
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Facilities by Floor */}
        {activeTab === 'facilities' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {initialFacilities.map((f, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-base font-extrabold text-blue-700">{f.floor}</span>
                    <span className="text-xs text-slate-400 font-medium">안전·친환경 인증</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {f.rooms.map((room, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-50 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200">
                        {room}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-500 pt-2 leading-relaxed border-t border-slate-100">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
