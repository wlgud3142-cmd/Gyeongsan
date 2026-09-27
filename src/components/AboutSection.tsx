import React, { useState } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { initialStaffBreakdown, initialFacilities } from '../data/initialData';
import { ClassInfo, FacilityFloor } from '../types';
import {
  Sparkles,
  Users,
  Building,
  ShieldCheck,
  Heart,
  Award,
  CheckCircle,
  ChevronRight,
  X,
  Phone,
  BookOpen,
  Video,
  ExternalLink,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { siteInfo, visions, classStatus } = useKindergarten();
  const [activeTab, setActiveTab] = useState<'vision' | 'classes' | 'staff' | 'facilities'>('vision');

  // Detail Modal state for interactive feedback when clicking "상세내용"
  const [detailModal, setDetailModal] = useState<{
    title: string;
    subtitle: string;
    content: string;
    items?: string[];
    badge?: string;
  } | null>(null);

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
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
            {siteInfo.tagline} 총 6학급 120명의 원아들이 임용고시로 선발된 우수한 유치원 교사진과 함께
            매일 새로운 놀이와 배움을 꽃피우고 있습니다.
          </p>

          {/* YouTube Kindergarten Tour Button - Always prominent & accessible */}
          <div className="mt-5">
            <a
              href={
                siteInfo.youtubeTourUrl?.trim() ||
                'https://www.youtube.com/results?search_query=%EA%B2%BD%EC%82%B0%EC%9C%A0%EC%B9%98%EC%9B%90'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5 group"
              title="유튜브에서 경산유치원 환경 둘러보기 영상 시청하기"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <Video className="w-3.5 h-3.5 text-white" />
              </div>
              <span>유치원 환경 둘러보기 영상 시청하기</span>
              <span className="text-[11px] font-mono bg-white/20 px-2 py-0.5 rounded-full text-red-100 flex items-center gap-1">
                <span>YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>

        {/* Tab Controls: Mobile-first 2x2 Grid, Desktop single-row */}
        <div className="mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 bg-slate-100 rounded-2xl max-w-3xl">
            <button
              onClick={() => setActiveTab('vision')}
              className={`py-3 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all text-center flex items-center justify-center gap-1.5 ${
                activeTab === 'vision'
                  ? 'bg-white text-blue-900 shadow-sm border border-slate-200/80 font-extrabold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>🌿</span>
              <span>교육 비전·원훈</span>
            </button>

            <button
              onClick={() => setActiveTab('classes')}
              className={`py-3 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all text-center flex items-center justify-center gap-1.5 ${
                activeTab === 'classes'
                  ? 'bg-white text-blue-900 shadow-sm border border-slate-200/80 font-extrabold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>🏫</span>
              <span>학급·원아 현황</span>
            </button>

            <button
              onClick={() => setActiveTab('staff')}
              className={`py-3 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all text-center flex items-center justify-center gap-1.5 ${
                activeTab === 'staff'
                  ? 'bg-white text-blue-900 shadow-sm border border-slate-200/80 font-extrabold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>👥</span>
              <span>교직원 현황 (30명)</span>
            </button>

            <button
              onClick={() => setActiveTab('facilities')}
              className={`py-3 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all text-center flex items-center justify-center gap-1.5 ${
                activeTab === 'facilities'
                  ? 'bg-white text-blue-900 shadow-sm border border-slate-200/80 font-extrabold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>🏢</span>
              <span>층별 시설 안내</span>
            </button>
          </div>
          <p className="text-[11px] text-slate-400 mt-2 sm:hidden pl-1">
            * 탭을 터치하시면 해당 소개 내용이 아래에 즉시 표시됩니다.
          </p>
        </div>

        {/* Tab 1: Vision & Motto */}
        {activeTab === 'vision' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Main Motto Banner */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-7 sm:p-9 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold text-blue-300 uppercase tracking-widest block">
                  경산유치원 원훈 (MOTTO)
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  "{visions.motto}"
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  아이의 신체적 건강과 따뜻한 인성, 함께 나누는 우정을 최고의 가치로 여깁니다.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md px-5 py-4 rounded-xl border border-white/15 shrink-0 text-center sm:text-right">
                <span className="text-[11px] text-blue-200 block">교육청 인가 공립 단설</span>
                <span className="text-lg font-bold text-white">아이 중심 놀이 배움터</span>
              </div>
            </div>

            {/* 4 Pillars of Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                onClick={() =>
                  setDetailModal({
                    title: '유아상 (경산 어린이)',
                    subtitle: '맘껏 놀이하며 배우고 더불어 살아가는 어린이',
                    content:
                      '경산유치원의 아이들은 자연 속에서 마음껏 뛰어놀며, 호기심을 갖고 주도적으로 배움을 즐깁니다. 친구를 배려하고 함께 나누는 따뜻한 마음을 키웁니다.',
                    items: [
                      '스스로 탐색하고 질문하는 주도적인 태도',
                      '자연과 생명을 소중히 여기는 생태 감수성',
                      '친구와 소통하며 함께 협력하는 배려의 자세',
                    ],
                    badge: '유아상',
                  })
                }
                className="cursor-pointer bg-emerald-50/60 hover:bg-emerald-50 p-6 rounded-2xl border border-emerald-200 transition-all hover:shadow-md space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs border border-emerald-300">
                  유아
                </div>
                <h4 className="text-sm font-bold text-slate-900">유아상</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {visions.childImage}
                </p>
                <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-0.5 pt-1">
                  상세보기 &rarr;
                </span>
              </div>

              <div
                onClick={() =>
                  setDetailModal({
                    title: '교사상 (경산 선생님)',
                    subtitle: '배움을 실천하고 연구하는 선생님',
                    content:
                      '국가 임용고시로 선발된 정규 공립 교사진으로서 끊임없이 유아 발달과 놀이 중심 교육과정을 연구하고, 사랑과 정성으로 아이들을 보살핍니다.',
                    items: [
                      '임용고시 선발 우수한 유치원 교사진',
                      '유아 한 명 한 명을 세심하게 관찰하고 기록',
                      '하이클래스 모바일 알림장으로 매일 학부모와 긴밀 소통',
                    ],
                    badge: '교사상',
                  })
                }
                className="cursor-pointer bg-sky-50/60 hover:bg-sky-50 p-6 rounded-2xl border border-sky-200 transition-all hover:shadow-md space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-xs border border-sky-300">
                  교사
                </div>
                <h4 className="text-sm font-bold text-slate-900">교사상</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {visions.teacherImage}
                </p>
                <span className="text-[11px] text-sky-700 font-bold flex items-center gap-0.5 pt-1">
                  상세보기 &rarr;
                </span>
              </div>

              <div
                onClick={() =>
                  setDetailModal({
                    title: '학부모상 (경산 학부모)',
                    subtitle: '소통과 공감으로 함께 참여하는 학부모',
                    content:
                      '유치원의 교육 철학을 신뢰하며, 교사와 협력하여 아이들의 건강한 성장을 함께 지켜보는 동반자입니다.',
                    items: [
                      '유치원 교육활동에 대한 신뢰와 따뜻한 지지',
                      '학부모 공개수업 및 참여 행사 적극 동참',
                      '가정연계 보건소식지 및 안심 알림장 실시간 확인',
                    ],
                    badge: '학부모상',
                  })
                }
                className="cursor-pointer bg-amber-50/60 hover:bg-amber-50 p-6 rounded-2xl border border-amber-200 transition-all hover:shadow-md space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs border border-amber-300">
                  학부모
                </div>
                <h4 className="text-sm font-bold text-slate-900">학부모상</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {visions.parentImage}
                </p>
                <span className="text-[11px] text-amber-700 font-bold flex items-center gap-0.5 pt-1">
                  상세보기 &rarr;
                </span>
              </div>

              <div
                onClick={() =>
                  setDetailModal({
                    title: '유치원상 (공립 단설 배움터)',
                    subtitle: '꿈과 희망을 키우며 행복이 가득한 유치원',
                    content:
                      '유아 전용 독립 공간에서 미래형 첨단 시설과 자연 친화적 환경을 조화롭게 갖춘 경북 최고 수준의 공립 단설 유치원입니다.',
                    items: [
                      '총 6학급 120명 유아만을 위한 단독 독립 기관',
                      '정규 보건교사 상주 및 100% 직영 영양 급식실 운영',
                      '국·공립 유아학비 지원 및 공교육의 신뢰성',
                    ],
                    badge: '유치원상',
                  })
                }
                className="cursor-pointer bg-purple-50/60 hover:bg-purple-50 p-6 rounded-2xl border border-purple-200 transition-all hover:shadow-md space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xs border border-purple-300">
                  유치원
                </div>
                <h4 className="text-sm font-bold text-slate-900">유치원상</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {visions.kindergartenImage}
                </p>
                <span className="text-[11px] text-purple-700 font-bold flex items-center gap-0.5 pt-1">
                  상세보기 &rarr;
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Class Status */}
        {activeTab === 'classes' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-xs text-blue-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-semibold">
                총 6학급, 정원 120명 편성 (만 3세~5세 연령별 각 2학급 체제)
              </span>
              <span className="font-mono font-bold text-blue-700">전 학급 공립 정규 담임교사 배치</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {classStatus.map((cls, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-blue-300 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="text-sm font-bold text-blue-700">{cls.ageGroup}</span>
                      <span className="text-xs font-mono font-bold text-slate-900 tabular-nums bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                        총 {cls.totalCapacity}명
                      </span>
                    </div>

                    <div className="pt-3 space-y-2">
                      <div className="flex items-center gap-2">
                        {cls.classes.map((name, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-50/70 border border-blue-200 rounded-lg text-xs font-bold text-blue-900"
                          >
                            {name} ({cls.capacityPerClass}명)
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-slate-600 pt-2 leading-relaxed">
                        {cls.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">* 연령별 맞춤 교구 완비</span>
                    <button
                      type="button"
                      onClick={() =>
                        setDetailModal({
                          title: `${cls.ageGroup} 학급 안내`,
                          subtitle: `반 구성: ${cls.classes.join(', ')} (총 정원 ${cls.totalCapacity}명)`,
                          content: cls.description,
                          items: [
                            `학급당 정원: ${cls.capacityPerClass}명 (밀착 케어 보장)`,
                            '국가 임용고시 선발 정규 교사 1:1 세심 지도',
                            '연령별 발달 단계 맞춤 교재·교구 100% 무상 제공',
                            '오전 우유 및 오후 친환경 과일·수제 간식 매일 제공',
                          ],
                          badge: cls.ageGroup,
                        })
                      }
                      className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <span>상세내용 보기</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Staff Breakdown */}
        {activeTab === 'staff' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-xs text-emerald-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
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
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {initialFacilities.map((f, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="text-base font-extrabold text-blue-700">{f.floor}</span>
                      <span className="text-xs text-slate-400 font-medium">안전·친환경 인증</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {f.rooms.map((room, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-slate-50 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200"
                        >
                          {room}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-slate-500 pt-3 leading-relaxed border-t border-slate-100 mt-3">
                      {f.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">전 구역 안전센서 설치</span>
                    <button
                      type="button"
                      onClick={() =>
                        setDetailModal({
                          title: `${f.floor} 시설 상세 안내`,
                          subtitle: f.description,
                          content: `${f.floor}에 위치한 주요 공간: ${f.rooms.join(', ')}`,
                          items: [
                            '어린이 신체 눈높이에 맞춘 세면대 및 화장실 완비',
                            '각 교실 공기청정 환기 시스템 상시 가동',
                            '벽면 충격 완화 보호대 및 친환경 바닥재 시공',
                            '소방 스프링클러 및 화재 감지기 100% 구비',
                          ],
                          badge: f.floor,
                        })
                      }
                      className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <span>상세내용 보기</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Interactive Detail Modal for About items */}
      {detailModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setDetailModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                {detailModal.badge && (
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200 mb-1 inline-block">
                    {detailModal.badge}
                  </span>
                )}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {detailModal.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {detailModal.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setDetailModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
                aria-label="닫기"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {detailModal.content}
              </div>

              {detailModal.items && detailModal.items.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2">
                    주요 특징 및 환경
                  </h4>
                  <ul className="space-y-2">
                    {detailModal.items.map((it, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`tel:${siteInfo.phone}`}
                className="text-xs font-bold text-blue-700 flex items-center gap-1 hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>교무실 문의 {siteInfo.phone}</span>
              </a>
              <button
                type="button"
                onClick={() => setDetailModal(null)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
