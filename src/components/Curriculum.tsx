import React, { useState } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { initialAfterSchoolPrograms } from '../data/initialData';
import {
  Clock,
  BookOpen,
  Sun,
  Sparkles,
  Trees,
  Activity,
  Cpu,
  HeartHandshake,
  Shield,
  Smartphone,
  ChevronRight,
  X,
  CheckCircle,
  Phone,
  Award,
  Globe,
  Smile,
  Compass,
} from 'lucide-react';

export const Curriculum: React.FC = () => {
  const { siteInfo } = useKindergarten();
  const [selectedSubTab, setSelectedSubTab] = useState<
    'special' | 'projects' | 'schedule' | 'afterschool' | 'care'
  >('special');

  const [detailModal, setDetailModal] = useState<{
    title: string;
    subtitle: string;
    description: string;
    points: string[];
    badge?: string;
  } | null>(null);

  // 1. 특색교육: 「자·신·감 놀이로 행복한 어린이」
  const specialCurricula = [
    {
      letter: '자',
      name: '초록품 자연놀이',
      subtitle: '사계절 숲과 지구를 사랑하는 생태 감수성',
      theme: {
        bg: 'bg-emerald-50/70 hover:bg-emerald-50',
        border: 'border-emerald-200',
        badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        numBg: 'bg-emerald-600 text-white',
        highlight: 'text-emerald-950',
        accentText: 'text-emerald-700',
      },
      icon: <Trees className="w-6 h-6 text-emerald-700" />,
      features: [
        {
          title: '숲전문가와 함께하는 숲놀이',
          desc: '영남대 숲 및 사과공원을 활용하여 숲놀이 전문 강사와 함께 사계절 생태를 오감으로 탐색',
        },
        {
          title: '별별초록별 지구사랑놀이 주간 운영',
          desc: '환경과 생명의 소중함을 일상에서 배우는 유치원 자체 생태 주간',
        },
        {
          title: '다채로운 친환경 실천 활동',
          desc: '별별초록 장터 놀이, 쓰담걷기(플로깅) 및 환경보호 캠페인, 업사이클링 놀이',
        },
      ],
    },
    {
      letter: '신',
      name: '몸·마음 튼튼 신체놀이',
      subtitle: '자신감 넘치는 건강한 신체 조절력과 활력',
      theme: {
        bg: 'bg-sky-50/70 hover:bg-sky-50',
        border: 'border-sky-200',
        badgeBg: 'bg-sky-100 text-sky-800 border-sky-300',
        numBg: 'bg-sky-600 text-white',
        highlight: 'text-sky-950',
        accentText: 'text-sky-700',
      },
      icon: <Activity className="w-6 h-6 text-sky-700" />,
      features: [
        {
          title: '전문 축구놀이 연계 지도',
          desc: '지역 내 축구클럽 전문 지도자와 연계한 유아 맞춤형 즐거운 축구 활동',
        },
        {
          title: '몸·마음 튼튼 스포츠 DAY 운영',
          desc: '연령별 특화 종목: 만 3세 [훌라후프 놀이] / 만 4·5세 [줄넘기 활동]',
        },
        {
          title: '사계절 강당 대근육 놀이',
          desc: '미세먼지·우천 걱정 없는 실내 강당에서 신나는 다양한 대근육 신체 활동 진행',
        },
      ],
    },
    {
      letter: '감',
      name: '미래형 감성놀이',
      subtitle: 'AI 디지털 문해력과 미래 창의 역량 신장',
      theme: {
        bg: 'bg-purple-50/70 hover:bg-purple-50',
        border: 'border-purple-200',
        badgeBg: 'bg-purple-100 text-purple-800 border-purple-300',
        numBg: 'bg-purple-600 text-white',
        highlight: 'text-purple-950',
        accentText: 'text-purple-700',
      },
      icon: <Cpu className="w-6 h-6 text-purple-700" />,
      features: [
        {
          title: '3층 미래교실 디지털 교육 환경 구축',
          desc: '미래교실 디지털 첨단 환경 조성 및 각 학급별 특색 있는 디지털 놀이 공간',
        },
        {
          title: '클릭! 미래형 감성놀이 주간 운영',
          desc: 'AI를 바르게 이해하고 활용하는 AI 리터러시(디지털 문해) 역량 신장',
        },
        {
          title: '풍성한 인터랙티브 체험 활동',
          desc: '찾아오는 디지털 체험, 크로마키 활용 가상놀이, 디지털 문해놀이, 모션플레이 놀이, 로봇 활용 디지털 놀이',
        },
      ],
    },
  ];

  // 2. 공모사업 (교육청 지정 공모사업 운영)
  const publicProjects = [
    {
      title: '다문화교육 선도학교',
      category: '글로벌 문화이음',
      desc: '다문화 유아 및 일반 유아가 함께 어우러지는 한국어학급, 다문화 이해 교육 및 세계시민의식 함양',
      badge: '선도학교 지정',
      color: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    },
    {
      title: '방과후 특색유치원 공모사업',
      category: '특성화 무료지원',
      desc: '유아들의 흥미와 발달에 맞춘 예체능·외국어 등 질 높은 방과후 특성화 프로그램을 전액 무상 운영',
      badge: '교육청 공모선정',
      color: 'bg-blue-50 border-blue-200 text-blue-800',
    },
    {
      title: '교육발전특구 오감놀이 공모사업',
      category: '감각·창의놀이',
      desc: '경산 교육발전특구 사업과 연계하여 유아의 오감을 자극하는 창의 놀이자료 및 특별 체험 프로그램 지원',
      badge: '교육발전특구',
      color: 'bg-amber-50 border-amber-200 text-amber-800',
    },
    {
      title: '유·초이음교육 공모사업',
      category: '초등연계',
      desc: '초등학교와의 긴밀한 연계 교육과정을 통해 초등학교 입학 적응력과 자기주도적 생활습관을 탄탄히 형성',
      badge: '초등연계 공모',
      color: 'bg-purple-50 border-purple-200 text-purple-800',
    },
    {
      title: '지속가능발전 유아 생태전환교육',
      category: '환경·생태전환',
      desc: '기후위기 대응과 탄소중립 실천을 위해 텃밭 농작물 재배, 자원 순환, 분리배출, 플로깅 등 생활 속 생태 교육 실천',
      badge: '생태전환 공모',
      color: 'bg-teal-50 border-teal-200 text-teal-800',
    },
    {
      title: '놀이환경개선사업',
      category: '시설·교구 고도화',
      desc: '2026~2027 미래형 미래교실 리모델링 및 실내외 놀이터 안전 친환경 교구 확충으로 쾌적한 배움터 완성',
      badge: '환경개선 공모',
      color: 'bg-rose-50 border-rose-200 text-rose-800',
    },
  ];

  // 3. 하루 일과표
  const dailySchedule = [
    {
      time: '08:00 ~ 08:30',
      period: '아침돌봄',
      title: '아침 돌봄 및 안심 맞이',
      desc: '돌봄전담교사의 따뜻한 맞이, 조용한 휴식 및 개별 자유놀이',
      points: ['안전 등원 확인', '따뜻한 온돌방 돌봄', '정적인 놀이 지원'],
    },
    {
      time: '08:30 ~ 13:00',
      period: '교육과정',
      title: '정규 유치원 교육과정 (누리과정)',
      desc: '자유놀이, 오전 간식(우유), 대·소집단 활동, 바깥놀이(영남대 숲놀이, 텃밭 가꾸기)',
      appNotice: '※ 매일 학급별 생생한 수업이야기는 [하이클래스(HiClass)] 앱을 통해 학부모님께 공유됩니다.',
      points: ['연령별 흥미 놀이 활동', '매일 친환경 우유 간식', '단독 조리 영양 점심 식사'],
    },
    {
      time: '13:00 ~ 16:30',
      period: '방과후과정',
      title: '방과후과정 & 전문 특성화 프로그램',
      desc: '누리과정 심화활동, 문해력·수해력 쑥쑥 한글/수놀이, 영양 오후 간식, 연령별 전문 강사 특성화 프로그램 (영어, 체육, 음악, 코딩블럭)',
      points: ['특성화 무료 수강 (영어, 체육, 음악, 로봇)', '오후 수제 제철 과일/간식', '실내외 신체 놀이'],
    },
    {
      time: '16:30 ~ 19:00',
      period: '저녁돌봄',
      title: '저녁 돌봄 (연령 혼합 놀이중심)',
      desc: '독서, 블록놀이, 보드게임, 손끝놀이 등 편안한 가정식 돌봄, 든든한 돌봄간식 제공 (보호자 대면 귀가)',
      points: ['맞벌이 부모님을 위한 안심 케어', '영양 든든 저녁 돌봄 간식', '보호자 대면 안전 귀가'],
    },
  ];

  return (
    <section id="curriculum" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span className="text-blue-700 font-bold">교육과정 및 특색사업</span>
            <span aria-hidden="true">·</span>
            <span>공립 단설 경산유치원</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            놀이가 배움이 되는 유아 중심 교육<br />
            <span className="text-blue-700">「자·신·감 놀이로 행복한 어린이」</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            영남대 숲 연계 자연놀이, 신체 스포츠, 미래교실 AI 감성놀이까지 3대 특색교육과 함께
            다채로운 교육청 공모사업을 전액 국가 지원으로 운영합니다.
          </p>
        </div>

        {/* Mobile-first 5 Tab Controls */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl max-w-4xl">
            <button
              onClick={() => setSelectedSubTab('special')}
              className={`py-2.5 px-4 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                selectedSubTab === 'special'
                  ? 'bg-white text-blue-900 shadow-sm border border-slate-200/80 font-extrabold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>🌿</span>
              <span>특색교육 (자·신·감)</span>
            </button>

            <button
              onClick={() => setSelectedSubTab('projects')}
              className={`py-2.5 px-4 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                selectedSubTab === 'projects'
                  ? 'bg-white text-blue-900 shadow-sm border border-slate-200/80 font-extrabold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>🏛️</span>
              <span>교육청 공모사업 (6대)</span>
            </button>

            <button
              onClick={() => setSelectedSubTab('schedule')}
              className={`py-2.5 px-4 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                selectedSubTab === 'schedule'
                  ? 'bg-white text-blue-900 shadow-sm border border-slate-200/80 font-extrabold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>⏰</span>
              <span>하루 일과표</span>
            </button>

            <button
              onClick={() => setSelectedSubTab('afterschool')}
              className={`py-2.5 px-4 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                selectedSubTab === 'afterschool'
                  ? 'bg-white text-blue-900 shadow-sm border border-slate-200/80 font-extrabold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>🎨</span>
              <span>방과후 특성화</span>
            </button>

            <button
              onClick={() => setSelectedSubTab('care')}
              className={`py-2.5 px-4 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                selectedSubTab === 'care'
                  ? 'bg-white text-blue-900 shadow-sm border border-slate-200/80 font-extrabold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span>🛡️</span>
              <span>365 안심돌봄</span>
            </button>
          </div>
        </div>

        {/* Sub-tab 1: 특색교육 (자·신·감 놀이) - Color coded distinctly */}
        {selectedSubTab === 'special' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            {/* Slogan Banner */}
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-700 text-white rounded-2xl p-6 sm:p-7 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-semibold text-emerald-200 uppercase tracking-widest block mb-1">
                  GYEONGSAN SPECIAL EDUCATION
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  경산 특색교육: 「자·신·감 놀이로 행복한 어린이」
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100 mt-1">
                  자(초록품 자연놀이) · 신(몸·마음 튼튼 신체놀이) · 감(미래형 감성놀이) 3대 영역으로 행복한 배움을 엽니다.
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 text-center shrink-0">
                <span className="text-[11px] text-emerald-100 block">경산유치원</span>
                <span className="text-base font-bold text-white">3대 특색놀이 운영</span>
              </div>
            </div>

            {/* 3 Pastel Color-Coded Cards: 자, 신, 감 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {specialCurricula.map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border p-6 sm:p-7 shadow-sm transition-all hover:shadow-md flex flex-col justify-between space-y-5 ${item.theme.bg} ${item.theme.border}`}
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
                      <div className="flex items-center gap-2">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-sm shadow-xs ${item.theme.numBg}`}>
                          {item.letter}
                        </span>
                        <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-md border ${item.theme.badgeBg}`}>
                          {item.name}
                        </span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/80 shadow-xs border border-slate-200/50">
                        {item.icon}
                      </div>
                    </div>

                    <div>
                      <h4 className={`text-base font-extrabold mb-1 ${item.theme.highlight}`}>
                        {item.letter}: {item.name}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-3 pt-2">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="bg-white/90 p-3.5 rounded-xl border border-slate-200/70 shadow-xs space-y-1">
                          <div className={`text-xs font-bold flex items-center gap-1.5 ${item.theme.accentText}`}>
                            <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{feat.title}</span>
                          </div>
                          <p className="text-[11px] text-slate-600 leading-relaxed pl-5">
                            {feat.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-medium text-slate-600 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>유아 주도 자·신·감 놀이 중심 운영</span>
                    </span>
                    <span className="text-blue-700 font-bold bg-white/80 px-2 py-0.5 rounded border border-blue-200">
                      정규 교육과정
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sub-tab 2: 교육청 공모사업 (6대 사업) */}
        {selectedSubTab === 'projects' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-xs text-blue-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-semibold">
                경상북도교육청 및 유관기관 선정 공모사업으로 더욱 풍성한 유아 배움 환경을 제공합니다.
              </span>
              <span className="font-mono font-bold text-blue-800">2026~2027 공모 선정</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {publicProjects.map((proj, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded border ${proj.color}`}>
                        {proj.badge}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">0{idx + 1}</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 leading-snug">
                      {proj.title}
                    </h4>

                    <span className="text-xs font-semibold text-blue-700 block">
                      영역: {proj.category}
                    </span>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] text-blue-700 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>공모사업 예산 지원 및 전문 교육 환경 구축</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sub-tab 3: 하루 일과표 */}
        {selectedSubTab === 'schedule' && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl flex items-center justify-between text-xs text-blue-900">
              <span className="flex items-center gap-1.5 font-semibold">
                <Smartphone className="w-4 h-4 text-blue-700 shrink-0" />
                모든 정규 수업과 활동 사진은 공인 유치원 앱 [하이클래스(HiClass)]를 통해 매일 보호자님께 투명하게 전송됩니다.
              </span>
              <span className="font-bold text-blue-700 hidden sm:inline">알림장 100% 디지털 연계</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dailySchedule.map((s, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border bg-white border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold flex items-center gap-1.5 text-blue-700">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{s.time}</span>
                      </span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded border bg-blue-50 text-blue-800 border-blue-200">
                        {s.period}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-1.5">{s.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">{s.desc}</p>

                    {s.appNotice && (
                      <p className="text-[11px] text-blue-700 bg-blue-50/70 p-2.5 rounded-lg border border-blue-100 font-medium">
                        {s.appNotice}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">정규 교사 전담 지도</span>
                    <button
                      type="button"
                      onClick={() =>
                        setDetailModal({
                          title: s.title,
                          subtitle: `${s.period} (${s.time})`,
                          description: s.desc,
                          points: s.points,
                          badge: s.period,
                        })
                      }
                      className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
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

        {/* Sub-tab 4: 방과후 특성화 (NO '상세내용 보기' button as requested) */}
        {selectedSubTab === 'afterschool' && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl text-xs text-purple-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-semibold">
                교육청 인가 전문 외부 강사 및 담임교사가 지도하는 다채로운 방과후 특성화 교육
              </span>
              <span className="font-mono font-bold text-purple-800">주 1~2회 정기 운영</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {initialAfterSchoolPrograms.map((prog, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                          {prog.category}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900">{prog.subject}</h4>
                      </div>
                      <span className="text-xs font-mono text-slate-500 font-semibold">{prog.frequency}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-2">{prog.description}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>대상: {prog.target}</span>
                    <span className="text-purple-700 font-bold">방과후 과정 정규 연계</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sub-tab 5: 365 Childcare Room Information */}
        {selectedSubTab === 'care' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-xs text-emerald-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-semibold">
                맞벌이 가정을 위해 아침(08:00)부터 저녁(19:00)까지 방학 중에도 연중 상시 운영되는 안심 돌봄 체계
              </span>
              <span className="font-bold text-emerald-800">연중 안심 돌봄 체계 완비</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  아침 돌봄
                </span>
                <h4 className="text-base font-bold text-slate-900">08:00 ~ 08:30</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  출근 시간 맞벌이 학부모님을 위해 돌봄전담교사가 조기 등원 원아를 따뜻하게 맞이하고 편안한 개별 자유놀이를 지원합니다.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  저녁 돌봄
                </span>
                <h4 className="text-base font-bold text-slate-900">16:30 ~ 19:00</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  온돌 바닥 난방과 편안한 휴식 공간에서 전담 교사의 보살핌 아래 독서, 블록놀이 및 든든한 돌봄간식을 먹으며 부모님을 기다립니다.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
                <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                  방학 중 방과후
                </span>
                <h4 className="text-base font-bold text-slate-900">연중 무휴 운영</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  여름·겨울방학 중에도 돌봄 공백 없이 단독 직영 급식과 간식을 제공하며 종일 돌봄을 빈틈없이 운영합니다.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Detail Modal for Curriculum items */}
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
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">{detailModal.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">{detailModal.subtitle}</p>
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
                {detailModal.description}
              </div>

              {detailModal.points && detailModal.points.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2">
                    주요 활동 및 혜택
                  </h4>
                  <ul className="space-y-2">
                    {detailModal.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
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
