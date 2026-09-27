import React, { useState } from 'react';
import { useKindergarten } from '../context/KindergartenContext';
import { initialSpecialActivities } from '../data/initialData';
import { StrengthItem } from '../types';
import {
  Building2,
  Brain,
  Sparkles,
  ShieldCheck,
  Sprout,
  Sun,
  Globe,
  Trees,
  Palette,
  Coffee,
  Cpu,
  Activity,
  ChevronRight,
  Check,
  Heart,
  Phone,
  X,
  ExternalLink,
} from 'lucide-react';

interface PastelTheme {
  cardBg: string;
  cardBorder: string;
  activeRing: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  iconBg: string;
  iconText: string;
  numText: string;
  titleText: string;
  subText: string;
  accentBtn: string;
  drawerBg: string;
  drawerBorder: string;
  lightPill: string;
}

const pastelThemes: PastelTheme[] = [
  // 01: Soft Pastel Mint (공립 단설의 공신력)
  {
    cardBg: 'bg-emerald-50/60 hover:bg-emerald-50/90',
    cardBorder: 'border-emerald-200',
    activeRing: 'ring-2 ring-emerald-400 bg-emerald-50 shadow-md',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    badgeBorder: 'border-emerald-200',
    iconBg: 'bg-emerald-100 text-emerald-700',
    iconText: 'text-emerald-700',
    numText: 'text-emerald-600',
    titleText: 'text-emerald-950',
    subText: 'text-emerald-800/80',
    accentBtn: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    drawerBg: 'bg-emerald-50/40',
    drawerBorder: 'border-emerald-200',
    lightPill: 'bg-white border-emerald-200 text-emerald-900',
  },
  // 02: Soft Pastel Sky Blue (국가자격 정규 교사진)
  {
    cardBg: 'bg-sky-50/60 hover:bg-sky-50/90',
    cardBorder: 'border-sky-200',
    activeRing: 'ring-2 ring-sky-400 bg-sky-50 shadow-md',
    badgeBg: 'bg-sky-100',
    badgeText: 'text-sky-800',
    badgeBorder: 'border-sky-200',
    iconBg: 'bg-sky-100 text-sky-700',
    iconText: 'text-sky-700',
    numText: 'text-sky-600',
    titleText: 'text-sky-950',
    subText: 'text-sky-800/80',
    accentBtn: 'bg-sky-600 hover:bg-sky-700 text-white',
    drawerBg: 'bg-sky-50/40',
    drawerBorder: 'border-sky-200',
    lightPill: 'bg-white border-sky-200 text-sky-900',
  },
  // 03: Soft Pastel Peach / Warm Coral (교육비 부담 ZERO)
  {
    cardBg: 'bg-amber-50/60 hover:bg-amber-50/90',
    cardBorder: 'border-amber-200',
    activeRing: 'ring-2 ring-amber-400 bg-amber-50 shadow-md',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
    badgeBorder: 'border-amber-200',
    iconBg: 'bg-amber-100 text-amber-700',
    iconText: 'text-amber-700',
    numText: 'text-amber-600',
    titleText: 'text-amber-950',
    subText: 'text-amber-800/80',
    accentBtn: 'bg-amber-600 hover:bg-amber-700 text-white',
    drawerBg: 'bg-amber-50/40',
    drawerBorder: 'border-amber-200',
    lightPill: 'bg-white border-amber-200 text-amber-900',
  },
  // 04: Soft Pastel Lavender (안전 · 최첨단 교육환경)
  {
    cardBg: 'bg-purple-50/60 hover:bg-purple-50/90',
    cardBorder: 'border-purple-200',
    activeRing: 'ring-2 ring-purple-400 bg-purple-50 shadow-md',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-800',
    badgeBorder: 'border-purple-200',
    iconBg: 'bg-purple-100 text-purple-700',
    iconText: 'text-purple-700',
    numText: 'text-purple-600',
    titleText: 'text-purple-950',
    subText: 'text-purple-800/80',
    accentBtn: 'bg-purple-600 hover:bg-purple-700 text-white',
    drawerBg: 'bg-purple-50/40',
    drawerBorder: 'border-purple-200',
    lightPill: 'bg-white border-purple-200 text-purple-900',
  },
];

export const Strengths: React.FC = () => {
  const { strengths, siteInfo } = useKindergarten();
  const [activeStrengthId, setActiveStrengthId] = useState<string>(
    strengths[0]?.id || 'public-trust'
  );
  // Modal for immediate feedback when clicking "상세내용"
  const [modalItem, setModalItem] = useState<{ item: StrengthItem; index: number } | null>(null);

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Building2 className="w-5 h-5" />;
      case 1:
        return <Brain className="w-5 h-5" />;
      case 2:
        return <Sparkles className="w-5 h-5" />;
      case 3:
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  const getActivityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout':
        return <Sprout className="w-5 h-5 text-emerald-600" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-amber-500" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-sky-600" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-emerald-700" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-purple-600" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-700" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'Activity':
      default:
        return <Activity className="w-5 h-5 text-rose-500" />;
    }
  };

  const handleOpenDetail = (item: StrengthItem, index: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveStrengthId(item.id);
    setModalItem({ item, index });
  };

  return (
    <section id="strengths" className="py-20 bg-[#FBFBFE] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Poster Top Callouts Header */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
            <span>경산유치원은요! 믿음직한 공립 교육환경 속에서 아이의 놀이와 배움을 응원합니다.</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold shadow-sm">
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>이런 점이 특별해요! 다양한 체험과 글로벌 교육으로 더 넓은 세상을 만납니다.</span>
          </div>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            경산유치원에서 시작하는 특별한 하루<br />
            <span className="text-blue-700">믿고 맡기는 공립, 세계를 향해 자라는 아이들</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed [text-wrap:balance]">
            임용고시 선발 우수한 유치원 교사진의 정성 어린 지도, 풍성한 놀이와 특색 교육과정,
            탄탄한 공립 유치원 지원 체계, 그리고 보건교사와 영양사가 상주하는 가장 안전한 교육환경을 제공합니다.
          </p>
        </div>

        {/* 4 Pillars Grid - Pastel colors, NO BLACK */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((item, index) => {
            const isSelected = activeStrengthId === item.id;
            const theme = pastelThemes[index % pastelThemes.length];

            return (
              <div
                key={item.id}
                onClick={() => {
                  setActiveStrengthId(item.id);
                  handleOpenDetail(item, index);
                }}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-200 border flex flex-col justify-between ${
                  theme.cardBg
                } ${theme.cardBorder} ${
                  isSelected ? `${theme.activeRing} -translate-y-1` : 'shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs font-mono font-bold tracking-wider ${theme.numText}`}>
                      0{index + 1}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-xs border ${theme.iconBg} ${theme.badgeBorder}`}
                    >
                      {getPillarIcon(index)}
                    </div>
                  </div>

                  <span
                    className={`text-[11px] font-bold tracking-wide uppercase px-2 py-0.5 rounded inline-block mb-2 border ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder}`}
                  >
                    {item.badge}
                  </span>

                  <h3 className={`text-lg font-bold tracking-tight mb-2 leading-snug ${theme.titleText}`}>
                    {item.title}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-4 line-clamp-3 ${theme.subText}`}>
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                  {item.id === 'play-curriculum' ? (
                    <span className="text-[11px] font-semibold text-sky-800 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-sky-600" />
                      <span>전액 무료 특성화 지원</span>
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => handleOpenDetail(item, index, e)}
                      className={`text-xs font-bold flex items-center gap-1 hover:underline ${theme.numText}`}
                    >
                      <span>상세 내용 보기</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <span className="text-[10px] text-slate-400 font-medium">
                    {item.id === 'play-curriculum' ? '카드 선택 시 하단 상세' : '클릭 시 상세 팝업'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Inspection Drawer (Pastel Styled) */}
        {(() => {
          const selectedIndex = strengths.findIndex((s) => s.id === activeStrengthId);
          const idx = selectedIndex !== -1 ? selectedIndex : 0;
          const selected = strengths[idx] || strengths[0];
          const theme = pastelThemes[idx % pastelThemes.length];
          if (!selected) return null;

          return (
            <div
              className={`mt-8 rounded-2xl border p-6 sm:p-8 shadow-sm transition-all duration-200 ${theme.drawerBg} ${theme.drawerBorder}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                    <span className={`px-2.5 py-1 rounded-md border font-extrabold ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder}`}>
                      0{idx + 1} {selected.badge}
                    </span>
                    <span className="text-slate-500 font-medium">경산유치원 공식 특장점 세부 안내</span>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${theme.titleText}`}>
                    {selected.title} : {selected.subtitle}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {selected.description}
                  </p>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selected.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className={`flex items-start gap-2.5 text-xs p-3 rounded-xl border shadow-xs ${theme.lightPill}`}
                      >
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${theme.iconText}`} />
                        <span className="leading-snug font-medium">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 bg-white/90 p-5 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      공립 단설 지원 체계
                    </span>
                    <div className="text-xl font-extrabold text-blue-700">
                      내실 있는 교육과정 운영
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      국·공립 유아학비 지원을 바탕으로 급·간식, 돌봄, 현장체험학습 등 다양하고 안전한 배움 활동을 안정적으로 지원합니다.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-600">입학상담 직통전화</span>
                    <a
                      href={`tel:${siteInfo.phone}`}
                      className="font-bold text-blue-700 hover:text-blue-900 font-mono flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{siteInfo.phone} &rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Special Activities (포스터 하단 8대 특별한 체험 활동) Grid */}
        <div className="mt-16 pt-14 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
              다양한 경험이 아이의 세상을 넓혀요!
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              놀이는 세상을 만나는 가장 멋진 방법! ♥
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              자연 생태, 친환경 공간, 글로벌 영어, 숲체험, 전통 다도, 코딩로봇, 방송댄스까지 경산 어린이들의 7가지 특별한 하루입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {initialSpecialActivities.map((act) => (
              <div
                key={act.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {getActivityIcon(act.iconName)}
                    </div>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {act.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">{act.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{act.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Slogan Banner at bottom */}
          <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white p-5 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <span className="text-xs text-blue-200 font-semibold block">경산유치원의 약속</span>
              <p className="text-base font-bold">함께 존중하며 세계를 꿈꾸는 경산유치원</p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/15 text-xs font-bold backdrop-blur-sm border border-white/20">
              <Heart className="w-4 h-4 fill-pink-300 text-pink-300" />
              <span>작은 오늘이 큰 꿈이 되는 곳 · 경산유치원 ♥</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal Dialog */}
      {modalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setModalItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${pastelThemes[modalItem.index % pastelThemes.length].badgeBg} ${pastelThemes[modalItem.index % pastelThemes.length].badgeText} ${pastelThemes[modalItem.index % pastelThemes.length].badgeBorder}`}>
                    0{modalItem.index + 1} {modalItem.item.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">공식 특장점 상세 안내</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 pt-1">
                  {modalItem.item.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  {modalItem.item.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalItem(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors shrink-0 ml-2"
                aria-label="닫기"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                  핵심 운영 방침
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {modalItem.item.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2.5">
                  세부 실천 사항 (주요 혜택)
                </h4>
                <ul className="space-y-2">
                  {modalItem.item.points.map((pt, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200 shadow-xs"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education Support callout */}
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-blue-700 block">공립 단설 유치원</span>
                  <span className="text-base font-extrabold text-blue-900">신뢰받는 공교육 & 아이 중심 배움터</span>
                </div>
                <a
                  href={`tel:${siteInfo.phone}`}
                  className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>문의 전화하기</span>
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">교무실 상담 ☎ {siteInfo.phone}</span>
              <button
                type="button"
                onClick={() => setModalItem(null)}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors"
              >
                확인 및 닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
